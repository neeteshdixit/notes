import React from 'react';
import { studentHelperInfo } from '../data/notesData';

export default function RunningMarquee() {
  const marqueeItems = [
    "🎓 NEETESH DIXIT — YOUR DEDICATED STUDENT HELPER",
    "🚀 100% FREE HANDWRITTEN REASONING & APTITUDE NOTES",
    "✨ SYLLOGISM • BLOOD RELATIONS • DIRECTION SENSE • CODING-DECODING • LOGICAL SEQUENCE",
    "🔥 INFOSYS, TCS NQT, WIPRO & CAMPUS PLACEMENTS SPECIAL",
    `📱 INSTAGRAM: @${studentHelperInfo.handle} — Yahan jaake apna aur bhi important & exclusive content dekh sakte ho!`,
    "💡 ZERO FORMULA CONFUSION • PROVEN SHORTCUT TRICKS & COMMON TRAPS SOLVED"
  ];

  return (
    <div className="running-marquee-container" role="region" aria-label="Announcement ticker">
      <div className="marquee-badge">
        <span className="live-dot"></span>
        <span className="badge-text">STUDENT HELPER</span>
      </div>

      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {/* Duplicate track content for seamless infinite looping */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="marquee-pill">
              {item.includes("INSTAGRAM") ? (
                <a
                  href={studentHelperInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marquee-insta-link"
                >
                  {item}
                </a>
              ) : (
                <span>{item}</span>
              )}
              <span className="marquee-separator">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-cta">
        <a
          href={studentHelperInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="marquee-insta-btn"
          title="Visit @decodingplaygroundofficial on Instagram"
        >
          <span className="insta-icon">📷</span>
          <span>@{studentHelperInfo.handle}</span>
        </a>
      </div>
    </div>
  );
}
