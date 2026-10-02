import React, { useState, useEffect } from 'react';
import { studentHelperInfo } from '../data/notesData';

export default function Hero3D({ searchQuery, setSearchQuery, onSelectTopic, topics }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleResetMouse = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      className="hero-3d-section"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleResetMouse}
    >
      {/* 3D Floating background elements */}
      <div className="hero-bg-blobs">
        <div
          className="glow-orb orb-1"
          style={{
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`
          }}
        ></div>
        <div
          className="glow-orb orb-2"
          style={{
            transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`
          }}
        ></div>
        <div
          className="glow-orb orb-3"
          style={{
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * -30}px)`
          }}
        ></div>
      </div>

      <div className="hero-inner-container">
        {/* Left Column: Headlines & Search */}
        <div className="hero-content-col">
          {/* Student Helper Badge */}
          <div className="hero-student-pill">
            <span className="pill-pulse"></span>
            <span className="pill-emoji">🎓</span>
            <span className="pill-text">Neetesh Dixit • Your Student Helper</span>
            <span className="pill-highlight">100% Free Notes</span>
          </div>

          <h1 className="hero-title">
            Campus Placements & Aptitude <br />
            <span className="gradient-text-3d">Handwritten Master Notes</span>
          </h1>

          <p className="hero-subtitle">
            Sabhi topics ke clear handwritten notes, formulas, common traps aur master shortcuts.
            Aptitude test crack karna ab kisi bhi student ke liye mushkil nahi hoga!
          </p>

          {/* Quick Search Bar */}
          <div className="hero-search-wrapper">
            <div className="hero-search-input-box">
              <span className="search-lead-icon">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topic (e.g. Syllogism, Blood Relations, Direction, Coding, Venn)..."
                className="hero-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Keyword Suggestions */}
            <div className="hero-quick-tags">
              <span className="quick-tags-label">Popular:</span>
              {['Syllogism', 'Blood Relations', 'Direction Sense', 'Coding-Decoding', 'Logical Sequence'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="quick-tag-chip"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Neetesh's Social Connect Cards */}
          <div className="hero-social-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            <div className="hero-insta-feature-card" style={{ margin: 0, height: '100%' }}>
              <div className="insta-feature-left">
                <div className="insta-feature-text">
                  <div className="insta-title-row">
                    <span className="insta-title">Instagram</span>
                    <span className="verified-check">✓</span>
                  </div>
                  <p className="insta-desc" style={{ fontSize: '0.8rem' }}>Aptitude Tricks & Reels</p>
                </div>
              </div>
              <a href={studentHelperInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="insta-explore-btn">
                <span>Follow</span> <span className="arrow-right">→</span>
              </a>
            </div>

            <div className="hero-insta-feature-card" style={{ margin: 0, height: '100%', borderColor: '#ff000030', background: 'rgba(255,0,0,0.03)' }}>
              <div className="insta-feature-left">
                <div className="insta-feature-text">
                  <div className="insta-title-row">
                    <span className="insta-title" style={{ color: '#ff4444' }}>YouTube</span>
                    <span className="verified-check" style={{ background: '#ff0000' }}>✓</span>
                  </div>
                  <p className="insta-desc" style={{ fontSize: '0.8rem' }}>Full Length Placement Prep</p>
                </div>
              </div>
              <a href={studentHelperInfo.youtubeUrl} target="_blank" rel="noopener noreferrer" className="insta-explore-btn" style={{ background: '#ff0000', color: '#fff', border: 'none' }}>
                <span>Subscribe</span> <span className="arrow-right">→</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="hero-metrics-grid">
            <div className="metric-item">
              <span className="metric-number">{topics.length}</span>
              <span className="metric-label">Core Topics</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">{topics.reduce((acc, t) => acc + t.pages.length, 0)}</span>
              <span className="metric-label">Topic Notes & Sheets</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">100%</span>
              <span className="metric-label">Free For Students</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">Infosys</span>
              <span className="metric-label">Level Solved</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Perspective Cards Deck */}
        <div className="hero-3d-visual-col">
          <div
            className="card-deck-3d"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg)`
            }}
          >
            {/* Main Showcase 3D Sheet */}
            <div
              className="deck-sheet primary-sheet"
              onClick={() => onSelectTopic(topics[0])}
              title="Click to explore Syllogism notes"
            >
              <div className="sheet-top-bar" style={{justifyContent: 'center'}}>
                <span className="sheet-title-tag" style={{fontSize: '1.1rem', fontWeight: 'bold'}}>🧠 Syllogism • Day 1</span>
              </div>
              <div className="sheet-image-box">
                <img
                  src="/notes/image-2.jpg"
                  alt="Syllogism notes preview"
                  loading="eager"
                  className="preview-sheet-img"
                />
              </div>
              <div className="sheet-footer">
                <span className="sheet-helper-note">✍️ Handwritten by Neetesh</span>
                <span className="sheet-view-cta">View 10 Pages →</span>
              </div>
            </div>

            {/* Behind Layer 1: Blood Relations */}
            <div
              className="deck-sheet secondary-sheet-1"
              onClick={() => onSelectTopic(topics[1])}
              title="Click to explore Blood Relations"
            >
              <div className="sheet-image-box">
                <img
                  src="/notes/image-11.png"
                  alt="Blood Relations notes preview"
                  loading="lazy"
                  className="preview-sheet-img"
                />
              </div>
            </div>

            {/* Behind Layer 2: Direction Sense */}
            <div
              className="deck-sheet secondary-sheet-2"
              onClick={() => onSelectTopic(topics[2])}
              title="Click to explore Direction Sense"
            >
              <div className="sheet-image-box">
                <img
                  src="/notes/image-20.png"
                  alt="Direction Sense preview"
                  loading="lazy"
                  className="preview-sheet-img"
                />
              </div>
            </div>

            {/* Floating 3D Badge */}
            <div
              className="floating-glass-badge"
              style={{
                transform: `translateZ(50px) translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
              }}
            >
              <span className="badge-flower">🌸</span>
              <div>
                <strong>Interactive 3D Reader</strong>
                <p>Move mouse to cast flowers!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
