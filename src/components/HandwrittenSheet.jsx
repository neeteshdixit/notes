import React from 'react';

export default function HandwrittenSheet({ sheetData, topicTitle }) {
  if (!sheetData) return null;

  const { title, subtitle, sections, traps, tips, table, examples, questions, solutions, difficulty } = sheetData;

  return (
    <div className="handwritten-notebook-page">
      {/* Notebook Binder Rings & Margin */}
      <div className="notebook-binder-rings">
        <span className="ring-hole"></span>
        <span className="ring-hole"></span>
        <span className="ring-hole"></span>
      </div>
      <div className="notebook-red-margin"></div>

      {/* Main Ruled Notebook Content */}
      <div className="notebook-sheet-content">
        {/* Top Heading */}
        <div className="nb-header">
          <h1 className="nb-title">{title}</h1>
          {subtitle && <p className="nb-subtitle">{subtitle}</p>}
        </div>

        {/* Dynamic Sections */}
        {sections && sections.map((sec, idx) => (
          <div key={idx} className="nb-section">
            {sec.heading && <h3 className="nb-sec-heading">{sec.heading}</h3>}
            {sec.items && (
              <ul className="nb-list">
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx} className="nb-list-item">
                    {typeof item === 'string' ? (
                      <span>{item}</span>
                    ) : (
                      <>
                        {item.title && <strong>{item.title} </strong>}
                        <span>{item.text}</span>
                        {item.subtext && <div className="nb-subtext">{item.subtext}</div>}
                        {item.visual && (
                          <pre className="nb-visual-diagram" style={{
                            backgroundColor: 'rgba(0,0,0,0.03)',
                            padding: '12px',
                            borderRadius: '8px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.4',
                            marginTop: '8px',
                            whiteSpace: 'pre',
                            overflowX: 'auto',
                            color: '#1e293b',
                            border: '1px solid rgba(0,0,0,0.1)'
                          }}>
                            {item.visual}
                          </pre>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {sec.note && <div className="nb-note-highlight">{sec.note}</div>}
          </div>
        ))}

        {/* 4-Step Framework if present */}
        {sheetData.steps && (
          <div className="nb-steps-block">
            {sheetData.steps.map((st, sIdx) => (
              <div key={sIdx} className="nb-step-item">
                <span className="nb-step-num">{sIdx + 1}</span>
                <div className="nb-step-body">
                  <strong>{st.title}</strong>
                  <p>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Standard Options Box if present */}
        {sheetData.standardOptions && (
          <div className="nb-options-box">
            <h4 className="nb-options-heading">Standard Options:</h4>
            <div className="nb-options-grid">
              {sheetData.standardOptions.map((opt, oIdx) => (
                <div key={oIdx} className="nb-option-row">
                  <span className="nb-opt-letter">{opt.letter})</span>
                  <span className="nb-opt-text">{opt.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Table if present */}
        {table && (
          <div className="nb-table-wrapper">
            <table className="nb-table">
              <thead>
                <tr>
                  {table.headers.map((h, hIdx) => (
                    <th key={hIdx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Examples / Worked questions if present */}
        {examples && (
          <div className="nb-examples-container">
            {examples.map((ex, eIdx) => (
              <div key={eIdx} className="nb-example-card">
                <div className="nb-example-badge">{ex.label || `Example ${eIdx + 1}`}</div>
                <div className="nb-example-q"><strong>Q:</strong> {ex.question}</div>
                {ex.statements && (
                  <div className="nb-example-statements">
                    {ex.statements.map((stmt, sIdx) => (
                      <div key={sIdx} className="stmt-line">{stmt}</div>
                    ))}
                  </div>
                )}
                {ex.thinking && (
                  <div className="nb-example-thinking">
                    <span className="thinking-arrow">↪ Thinking Approach:</span> {ex.thinking}
                  </div>
                )}
                <div className="nb-example-ans">
                  <strong>Answer:</strong> <span className="ans-tag">{ex.answer}</span>
                </div>
                {ex.tip && <div className="nb-example-tip">★ <strong>Exam Tip:</strong> {ex.tip}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Questions list (Practice Set) if present */}
        {questions && (
          <div className="nb-questions-container">
            <div className="nb-diff-labels-row">
              <span className="nb-diff-badge easy">Q1–Q3: Easy</span>
              <span className="nb-diff-badge mod">Q4–Q6: Moderate</span>
              <span className="nb-diff-badge info">Q7–Q9: Infosys Level</span>
              <span className="nb-diff-badge tricky">Q10: Tricky</span>
            </div>

            <div className="nb-questions-grid">
              {questions.map((q, qIdx) => (
                <div key={qIdx} className="nb-q-row">
                  <span className="nb-q-num">Q{qIdx + 1}.</span>
                  <div className="nb-q-content">
                    <div className="nb-q-text">{q.text}</div>
                    {q.statements && (
                      <div className="nb-q-stmts">
                        {q.statements.map((st, i) => (
                          <span key={i} className="q-stmt-pill">{st}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Answer Key if present */}
        {sheetData.answerKey && (
          <div className="nb-answer-key-box">
            <div className="nb-key-title">✅ ANSWER KEY</div>
            <div className="nb-key-grid">
              {sheetData.answerKey.map((ans, kIdx) => (
                <div key={kIdx} className="nb-key-item">
                  <span className="key-q">Q{kIdx + 1}</span>
                  <span className="key-dash">—</span>
                  <span className="key-ans">{ans}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Solutions breakdown if present */}
        {solutions && (
          <div className="nb-solutions-container">
            <h4 className="nb-sol-heading">⚡ 1-Line Quick Solution Shortcuts:</h4>
            <div className="nb-solutions-list">
              {solutions.map((sol, sIdx) => (
                <div key={sIdx} className="nb-sol-item">
                  <span className="sol-badge">Q{sIdx + 1}</span>
                  <span className="sol-ans">({sol.ans})</span>
                  <span className="sol-text">{sol.reason}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Traps in Red Box */}
        {traps && traps.length > 0 && (
          <div className="nb-traps-box">
            <h4 className="nb-traps-heading">Common Traps</h4>
            <ul className="nb-traps-list">
              {traps.map((trap, tIdx) => (
                <li key={tIdx} className="nb-trap-item">
                  <span className="nb-cross">❌</span>
                  <span>{trap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Green Tips Box */}
        {tips && tips.length > 0 && (
          <div className="nb-tips-box">
            {tips.map((tip, tpIdx) => (
              <div key={tpIdx} className="nb-tip-row">
                <span className="nb-tip-icon">💡</span>
                <span className="nb-tip-text">{tip}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Difficulty Tag */}
        {difficulty && (
          <div className="nb-difficulty-tag">
            <span>Difficulty:</span> <strong>{difficulty}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
