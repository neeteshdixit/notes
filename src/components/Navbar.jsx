import React, { useState } from 'react';
import { studentHelperInfo } from '../data/notesData';

export default function Navbar({ onSearchClick, activeCategory, onSelectCategory, topics }) {
  const [copied, setCopied] = useState(false);

  const handleCopyHandle = () => {
    navigator.clipboard.writeText(`@${studentHelperInfo.handle}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <div className="navbar-brand">
          <div className="brand-avatar-3d">
            <span className="avatar-icon">🎓</span>
            <span className="sparkle-ring"></span>
          </div>
          <div className="brand-text-block">
            <div className="brand-name-row">
              <span className="brand-name">{studentHelperInfo.name}</span>
              <span className="helper-badge">Your Helper</span>
            </div>
            <p className="brand-tagline">Decoding Aptitude • Handwritten Notes Free for Everyone</p>
          </div>
        </div>

        {/* Quick Topics Nav */}
        <nav className="navbar-nav-links">
          <button
            onClick={() => onSelectCategory('all')}
            className={`nav-link-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            All Notes <span className="nav-count">46</span>
          </button>
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelectCategory(t.id)}
              className={`nav-link-btn ${activeCategory === t.id ? 'active' : ''}`}
            >
              {t.title.split(' ')[0]}
              <span className="nav-count">{t.pages.length}</span>
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          {/* Quick Search trigger */}
          <button
            onClick={onSearchClick}
            className="navbar-search-btn"
            title="Search notes, topics or tricks"
          >
            <span className="search-icon">🔍</span>
            <span className="search-text">Search notes...</span>
            <span className="search-kbd">Ctrl+K</span>
          </button>

          {/* Social Link Buttons */}
          <div className="insta-btn-group">
            <a
              href={studentHelperInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-insta-link youtube-btn"
              title="Subscribe to Decoding Playground on YouTube"
              style={{ background: '#ff0000', borderColor: '#cc0000' }}
            >
              <div className="insta-logo-glow" style={{ background: 'transparent' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </div>
              <span className="insta-handle">YouTube</span>
            </a>

            <a
              href={studentHelperInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-insta-link"
              title="Important content dekhne ke liye Instagram follow karein"
            >
              <div className="insta-logo-glow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="insta-handle">@{studentHelperInfo.handle}</span>
            </a>

            <button
              onClick={handleCopyHandle}
              className="copy-handle-btn"
              title="Copy Instagram ID"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
