import React from 'react';

export default function TrapsModal({ isOpen, onClose, topic }) {
  if (!isOpen || !topic) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="traps-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="traps-modal-header">
          <div className="traps-title-row">
            <span className="traps-warning-icon">⚠️</span>
            <div>
              <h3>Common Exam Traps: {topic.title}</h3>
              <p>Top mistakes students make in placement aptitude rounds</p>
            </div>
          </div>
          <button onClick={onClose} className="close-modal-btn">✕</button>
        </div>

        <div className="traps-modal-body">
          <div className="traps-list">
            {topic.commonTraps.map((trap, idx) => (
              <div key={idx} className="trap-item">
                <span className="trap-cross">❌</span>
                <span className="trap-text">{trap}</span>
              </div>
            ))}
          </div>

          <div className="golden-rule-highlight">
            <span className="rule-bulb">💡</span>
            <div>
              <strong>Neetesh's Golden Exam Rule:</strong>
              <p>{topic.goldenRule}</p>
            </div>
          </div>
        </div>

        <div className="traps-modal-footer">
          <button onClick={onClose} className="traps-close-action-btn">
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
