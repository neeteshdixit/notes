import React, { useState, useEffect, useRef } from 'react';
import HandwrittenSheet from './HandwrittenSheet';

export default function NoteReaderModal({
  isOpen,
  onClose,
  topic,
  initialPageIndex = 0,
  allTopics,
  onSwitchTopic
}) {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setCurrentPageIndex(initialPageIndex);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [initialPageIndex, topic]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'PageDown') handleNext();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') handlePrev();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex, topic]);

  if (!isOpen || !topic) return null;

  const totalPages = topic.pages.length;
  const currentPage = topic.pages[currentPageIndex] || topic.pages[0];

  const handleNext = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex((prev) => prev + 1);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(3, Math.round((z + 0.3) * 10) / 10));
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const nextZ = Math.max(1, Math.round((z - 0.3) * 10) / 10);
      if (nextZ === 1) setPan({ x: 0, y: 0 });
      return nextZ;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Drag to pan image when zoomed
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`modal-overlay ${isFullScreen ? 'fullscreen-mode' : ''}`} onClick={onClose}>
      <div
        className="modal-container-3d"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            {/* Topic Switcher Dropdown */}
            <select
              value={topic.id}
              onChange={(e) => {
                const selected = allTopics.find((t) => t.id === e.target.value);
                if (selected) onSwitchTopic(selected);
              }}
              className="topic-switch-dropdown"
            >
              {allTopics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title} ({t.pages.length} Pages)
                </option>
              ))}
            </select>

            <span className="modal-page-counter">
              Sheet {currentPageIndex + 1} of {totalPages}
            </span>
          </div>

          <div className="modal-sheet-title">
            <span className="sheet-index-circle">{currentPage.pageNumber}</span>
            <span className="sheet-title-text">{currentPage.title}</span>
          </div>

          {/* Viewer Controls */}
          <div className="modal-header-actions">
            <div className="zoom-controls">
              <button onClick={handleZoomOut} disabled={zoom <= 1} title="Zoom Out (-)" className="tool-btn">
                🔍−
              </button>
              <span className="zoom-value">{Math.round(zoom * 100)}%</span>
              <button onClick={handleZoomIn} disabled={zoom >= 3} title="Zoom In (+)" className="tool-btn">
                🔍+
              </button>
              {zoom > 1 && (
                <button onClick={handleResetZoom} className="tool-btn-reset" title="Reset Zoom">
                  Reset
                </button>
              )}
            </div>

            <button
              onClick={toggleFullScreen}
              className="tool-btn"
              title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullScreen ? '⤓' : '⤢'}
            </button>

            {currentPage.image ? (
              <a
                href={currentPage.image}
                download={`${topic.id}-page-${currentPage.pageNumber}.png`}
                className="tool-btn download-btn"
                title="Download this notes sheet"
              >
                💾 Save
              </a>
            ) : (
              <button
                onClick={() => window.print()}
                className="tool-btn download-btn"
                title="Print or Save as PDF"
              >
                🖨️ Print
              </button>
            )}

            <button onClick={onClose} className="close-modal-btn" title="Close Reader (Esc)">
              ✕
            </button>
          </div>
        </div>

        {/* Main Stage */}
        <div
          className={`modal-stage ${zoom > 1 ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Previous Page Button */}
          <button
            onClick={handlePrev}
            disabled={currentPageIndex === 0}
            className="stage-nav-btn prev-btn"
            title="Previous Sheet (Left Arrow)"
          >
            ‹
          </button>

          {/* Note Sheet: Either Image or Authentic Handwritten Sheet */}
          <div className="image-viewport">
            <div
              className="stage-sheet-wrapper"
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
            >
              {currentPage.image ? (
                <img
                  src={currentPage.image}
                  alt={currentPage.title}
                  className="stage-note-image"
                  draggable={false}
                />
              ) : (
                <HandwrittenSheet
                  sheetData={currentPage.handwrittenContent}
                  topicTitle={topic.title}
                />
              )}
            </div>
          </div>

          {/* Next Page Button */}
          <button
            onClick={handleNext}
            disabled={currentPageIndex === totalPages - 1}
            className="stage-nav-btn next-btn"
            title="Next Sheet (Right Arrow)"
          >
            ›
          </button>
        </div>

        {/* Bottom Drawer: Page Thumbnails & Quick Info */}
        <div className="modal-footer-drawer">
          <div className="drawer-info-row">
            <p className="drawer-desc">{currentPage.desc}</p>
            <span className="drawer-helper-tag">
              ✍️ Neetesh Dixit Handwritten Series
            </span>
          </div>

          {/* Thumbnails Carousel */}
          <div className="modal-thumbnails-carousel">
            {topic.pages.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPageIndex(idx);
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                }}
                className={`modal-thumb-item ${currentPageIndex === idx ? 'active' : ''}`}
              >
                {p.image ? (
                  <img src={p.image} alt={p.title} className="modal-thumb-img" />
                ) : (
                  <div className="modal-thumb-handwritten-preview" style={{ background: '#fdfdfb', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="thumb-nb-title" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#333' }}>P{p.pageNumber}</span>
                  </div>
                )}
                <span className="modal-thumb-number">p.{p.pageNumber}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

