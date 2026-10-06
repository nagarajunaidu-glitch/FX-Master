'use client';

import React from 'react';

export default function MediaLogos() {
  return (
    <div className="media-logos-section">
      <div className="container">
        <div className="featured-on-label font-mono">FEATURED ON</div>

        <div className="media-logos-row-exact">
          {/* Forbes */}
          <div className="media-logo-item font-serif">Forbes</div>

          {/* Bloomberg */}
          <div className="media-logo-item font-bloomberg">Bloomberg</div>

          {/* TechCrunch+ */}
          <div className="media-logo-item font-techcrunch">
            <span>TechCrunch</span><span className="tc-plus">+</span>
          </div>

          {/* Business Insider */}
          <div className="media-logo-item font-insider">business insider</div>

          {/* The Guardian */}
          <div className="media-logo-item font-guardian">the guardian</div>
        </div>
      </div>
    </div>
  );
}
