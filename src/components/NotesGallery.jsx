import React, { useState } from 'react';

function Topic3DCard({ topic, onOpenReader, onOpenTraps, onOpenPractice }) {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, shineX: 50, shineY: 50 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTilt({ rx: rotateX, ry: rotateY, shineX, shineY });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, shineX: 50, shineY: 50 });
  };

  const currentPreviewPage = topic.pages[activeThumbIndex] || topic.pages[0];

  return (
    <div
      className="topic-3d-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="topic-3d-card"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.01, 1.01, 1.01)`
        }}
      >
        {/* Specular 3D Shine Effect */}
        <div
          className="card-specular-shine"
          style={{
            background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`
          }}
        />

        {/* Card Header */}
        <div className="card-header">
          <div className="card-badge-row">
            <span
              className="card-category-tag"
              style={{ background: topic.accentGradient }}
            >
              {topic.category}
            </span>
            <span className="card-page-count">
              📄 {topic.pages.length} Pages
            </span>
          </div>

          <h2 className="card-topic-title">{topic.title}</h2>
          <p className="card-topic-summary">{topic.summary}</p>
        </div>

        {/* Interactive Notes Visual Showcase */}
        <div
          className="card-preview-viewport"
          onClick={() => onOpenReader(topic, activeThumbIndex)}
          title="Click to zoom and read full handwritten sheet"
        >
          {currentPreviewPage.image ? (
            <img
              src={currentPreviewPage.image}
              alt={currentPreviewPage.title}
              className="card-preview-image"
              loading="lazy"
            />
          ) : (
            <div className="card-preview-fallback" style={{ background: '#fdfdfb', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <h3 style={{ color: '#0f172a', fontSize: '1.2rem', textAlign: 'center', margin: '0 10px' }}>{topic.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '10px' }}>Handwritten Notes</p>
            </div>
          )}
          
          <div className="preview-overlay-info">
            <span className="preview-page-pill">
              Page {currentPreviewPage.pageNumber} of {topic.pages.length}
            </span>
            <span className="preview-zoom-cta">🔍 Click to Open 3D Reader</span>
          </div>
          <div className="sheet-corner-curl"></div>
        </div>

        {/* Current Page Title Preview */}
        <div className="current-page-bar">
          <span className="page-title-label">Sheet {currentPreviewPage.pageNumber}:</span>
          <span className="page-title-text">{currentPreviewPage.title}</span>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="card-thumbnails-strip">
          {topic.pages.map((p, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setActiveThumbIndex(idx);
              }}
              className={`mini-thumb-btn ${activeThumbIndex === idx ? 'active' : ''}`}
              title={`Page ${p.pageNumber}: ${p.title}`}
            >
              {p.image ? (
                <img src={p.image} alt={`p${p.pageNumber}`} className="mini-thumb-img" />
              ) : (
                <div className="mini-thumb-fallback" style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>P{p.pageNumber}</div>
              )}
              <span className="thumb-idx">{p.pageNumber}</span>
            </button>
          ))}
        </div>

        {/* Quick Tips / Golden Rule */}
        <div className="card-golden-rule">
          <span className="rule-icon">💡</span>
          <span className="rule-text"><strong>Golden Rule:</strong> {topic.goldenRule}</span>
        </div>

        {/* Action Buttons */}
        <div className="card-actions-row">
          <button
            onClick={() => onOpenReader(topic, activeThumbIndex)}
            className="action-btn-primary"
          >
            <span>📖 Read All Sheets ({topic.pages.length})</span>
          </button>
          <button
            onClick={() => onOpenTraps(topic)}
            className="action-btn-secondary"
            title="Common Traps & Mistakes to avoid"
          >
            <span>⚠️ Traps</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NotesGallery({
  topics,
  activeCategory,
  setActiveCategory,
  searchQuery,
  onOpenReader,
  onOpenTraps,
  onOpenPractice
}) {
  // Filter topics based on active category
  let filtered = topics;
  if (activeCategory !== 'all') {
    filtered = filtered.filter((t) => t.id === activeCategory);
  }

  // Filter based on search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter((t) => {
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchSummary = t.summary.toLowerCase().includes(q);
      const matchCategory = t.category.toLowerCase().includes(q);
      const matchPages = t.pages.some(
        (p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
      );
      const matchTraps = t.commonTraps.some((tr) => tr.toLowerCase().includes(q));
      return matchTitle || matchSummary || matchCategory || matchPages || matchTraps;
    });
  }

  return (
    <section className="notes-gallery-section" id="notes-gallery">
      {/* Gallery Header & Controls */}
      <div className="gallery-header-row">
        <div className="gallery-title-block">
          <span className="section-pre-title">📚 FREE STUDY MATERIAL</span>
          <h2 className="section-main-title">
            All {topics.length} Topics & {topics.reduce((acc, t) => acc + t.pages.length, 0)} Notes
          </h2>
          <p className="section-desc">
            Har sheet ko Neetesh Dixit ne specially students ke exam quick-revision ke liye design kiya hai.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-container">
          <button
            onClick={() => setActiveCategory('all')}
            className={`category-pill ${activeCategory === 'all' ? 'active' : ''}`}
          >
            <span>All Topics</span>
            <span className="pill-badge">{topics.length}</span>
          </button>
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveCategory(t.id)}
              className={`category-pill ${activeCategory === t.id ? 'active' : ''}`}
            >
              <span>{t.title.split(' ')[0]}</span>
              <span className="pill-badge">{t.pages.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter status / Search notice */}
      {searchQuery && (
        <div className="search-status-banner">
          <span>
            Search results for: <strong>"{searchQuery}"</strong> ({filtered.length} topics found)
          </span>
        </div>
      )}

      {/* Topics Grid */}
      {filtered.length > 0 ? (
        <div className="topics-3d-grid">
          {filtered.map((topic) => (
            <Topic3DCard
              key={topic.id}
              topic={topic}
              onOpenReader={onOpenReader}
              onOpenTraps={onOpenTraps}
              onOpenPractice={onOpenPractice}
            />
          ))}
        </div>
      ) : (
        <div className="no-results-box">
          <div className="empty-icon">🔍</div>
          <h3>Koi topic match nahi hua</h3>
          <p>Aap "Syllogism", "Blood Relations", "Direction", "Coding", ya "Venn" search karke try karein.</p>
        </div>
      )}
    </section>
  );
}
