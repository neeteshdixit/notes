import React from 'react';
import { studentHelperInfo } from '../data/notesData';

export default function Footer({ topics, onSelectTopic }) {
  const triggerCelebration = () => {
    // Dispatch click events across window to emit flower confetti burst
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    window.dispatchEvent(new MouseEvent('click', { clientX: centerX, clientY: centerY }));
    window.dispatchEvent(new MouseEvent('click', { clientX: centerX - 100, clientY: centerY - 50 }));
    window.dispatchEvent(new MouseEvent('click', { clientX: centerX + 100, clientY: centerY - 50 }));
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Helper Identity */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-icon">🎓</span>
              <div>
                <h4 className="footer-name">{studentHelperInfo.name}</h4>
                <span className="footer-role">{studentHelperInfo.role}</span>
              </div>
            </div>
            <p className="footer-quote">
              "Aptitude test se darne ki zaroorat nahi hai. Har concept ko simple handwritten sheet me convert kiya hai taaki har student easily crack kar sake!"
            </p>
            <button onClick={triggerCelebration} className="celebrate-btn" title="Click for flower bloom">
              🌸 Bloom Flowers Confetti!
            </button>
          </div>

          {/* Col 2: Topics Quick List */}
          <div className="footer-links-col">
            <h5 className="footer-col-heading">All {topics.length} Topics ({topics.reduce((acc, t) => acc + t.pages.length, 0)} Sheets)</h5>
            <ul className="footer-list">
              {topics.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onSelectTopic(t)}
                    className="footer-topic-link"
                  >
                    <span>{t.title}</span>
                    <span className="footer-count">({t.pages.length} sheets)</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Instagram & Student Support */}
          <div className="footer-insta-col">
            <h5 className="footer-col-heading">Exclusive Content & Doubts</h5>
            <p className="footer-insta-desc">
              Reels, tricks aur new notes ke updates ke liye Neetesh ke Instagram page se judein:
            </p>
            <a
              href={studentHelperInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-insta-badge"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@{studentHelperInfo.handle}</span>
            </a>

            <a
              href={studentHelperInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-insta-badge"
              style={{ background: 'rgba(255, 0, 0, 0.1)', borderColor: 'rgba(255, 0, 0, 0.3)', marginTop: '8px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z"></path>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#ff0000"></polygon>
              </svg>
              <span style={{ color: '#ff4444' }}>Decoding Playground</span>
            </a>

            <p className="footer-insta-subtext" style={{ marginTop: '12px' }}>
              "Yahan jaake apna aur bhi imp content dekh sakte ho"
            </p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Neetesh Dixit (Your Helper). Made with 🌸 & dedication for every student.</p>
          <p className="footer-note">Free study notes for Infosys, TCS, Wipro & Placement Aspirants.</p>
        </div>
      </div>
    </footer>
  );
}
