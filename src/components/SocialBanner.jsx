import React, { useState } from 'react';
import { studentHelperInfo } from '../data/notesData';

export default function SocialBanner() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`@${studentHelperInfo.handle}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="instagram-banner-section" id="social-zone">
      <div className="insta-banner-glass-card">
        {/* Background glow orbs */}
        <div className="insta-glow-blob-1"></div>
        <div className="insta-glow-blob-2" style={{ background: 'var(--youtube-glow, #ff000030)' }}></div>

        <div className="insta-banner-content">
          {/* Top Badge */}
          <div className="insta-header-badge">
            <span className="insta-dot-live"></span>
            <span>OFFICIAL STUDENT COMMUNITY — CONNECT WITH NEETESH</span>
          </div>

          <div className="social-profiles-container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            
            {/* Instagram Block */}
            <div className="insta-profile-lockup" style={{ flex: '1', minWidth: '280px', margin: 0 }}>
              <div className="insta-big-icon-wrap" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>

              <div className="insta-profile-texts">
                <div className="insta-name-line">
                  <h3 className="insta-handle-heading">@{studentHelperInfo.handle}</h3>
                  <span className="insta-verified-badge" title="Official Profile">✓</span>
                </div>
                <p className="insta-sub-tag">Instagram • Placement Reels & DMs</p>
              </div>
            </div>

            {/* YouTube Block */}
            <div className="insta-profile-lockup" style={{ flex: '1', minWidth: '280px', margin: 0 }}>
              <div className="insta-big-icon-wrap" style={{ background: '#ff0000' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"></polygon>
                </svg>
              </div>

              <div className="insta-profile-texts">
                <div className="insta-name-line">
                  <h3 className="insta-handle-heading">Decoding Playground</h3>
                  <span className="insta-verified-badge" title="Official Channel">✓</span>
                </div>
                <p className="insta-sub-tag">YouTube • Long Form Prep Videos</p>
              </div>
            </div>

          </div>

          {/* User Requested Main Message */}
          <div className="insta-quote-box">
            <span className="quote-icon">📢</span>
            <p className="insta-main-quote">
              "Yahan jaake apna aur bhi <strong>important & exclusive aptitude content</strong> dekh sakte ho! Regular placement updates and short tricks ahmedabad by <strong>Neetesh Dixit - Your Student Helper</strong>."
            </p>
          </div>

          {/* Perks Grid */}
          <div className="insta-perks-grid">
            <div className="perk-card">
              <span className="perk-icon">⚡</span>
              <div>
                <strong>30-Second Tricks</strong>
                <p>Fast aptitude calculation reels on IG</p>
              </div>
            </div>

            <div className="perk-card">
              <span className="perk-icon">📺</span>
              <div>
                <strong>Full Length Classes</strong>
                <p>Detailed Infosys & TCS tutorials on YT</p>
              </div>
            </div>

            <div className="perk-card">
              <span className="perk-icon">💬</span>
              <div>
                <strong>Student Doubt Support</strong>
                <p>Direct connect with Neetesh via DM</p>
              </div>
            </div>

            <div className="perk-card">
              <span className="perk-icon">🎁</span>
              <div>
                <strong>100% Free Updates</strong>
                <p>No paid courses, pure student guidance</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="insta-cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={studentHelperInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-primary-btn"
              style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              <span>Follow on Instagram</span>
              <span className="btn-arrow">↗</span>
            </a>
            
            <a
              href={studentHelperInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-primary-btn"
              style={{ background: '#ff0000' }}
            >
              <span>Subscribe on YouTube</span>
              <span className="btn-arrow">↗</span>
            </a>

            <button onClick={handleCopy} className="insta-copy-btn">
              {copied ? '✓ Handle Copied to Clipboard!' : '📋 Copy @ID'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
