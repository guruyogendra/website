import React from 'react';
import { Sparkle } from 'lucide-react';

export default function Marquee() {
  const items = [
    "Sperm Analysis",
    "Microbiology",
    "Oncology",
    "Haematology",
    "Precision",
    "Automation",
    "Agriculture",
    "Urine Analysis"
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content animate-marquee">
        {repeated.map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span className="marquee-text">{item}</span>
            <Sparkle size={14} className="marquee-star" />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background-color: #edf2f7;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 18px 0;
          white-space: nowrap;
        }
        .marquee-content {
          display: flex;
          align-items: center;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          padding: 0 28px;
        }
        .marquee-text {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1.15rem;
          color: #334155;
          letter-spacing: -0.01em;
        }
        .marquee-star {
          color: #00a8b5;
          fill: #00a8b5;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
