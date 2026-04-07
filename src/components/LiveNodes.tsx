import React from 'react';

const LiveNodes: React.FC = () => {
  return (
    <section className="live-nodes-section container reveal">
      <div className="live-nodes-header">
        <div className="badge">✦ Real-time Sync</div>
        <h2 className="section-title left-align">Neural Pulse Network</h2>
        <p className="section-subtitle left-align">
          Active nodes are currently processing 1.2M cognitive transactions per second.<br/>
          Watch the live synchronization across the global grid.
        </p>
      </div>

      <div className="nodes-visual">
        <svg viewBox="0 0 800 400" className="nodes-svg">
          {/* Animated Paths */}
          <path d="M100,200 Q200,50 400,200 T700,200" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="5,5" className="node-path">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M100,100 Q300,350 700,100" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="8,8" opacity="0.3" className="node-path">
             <animate attributeName="stroke-dashoffset" from="0" to="100" dur="5s" repeatCount="indefinite" />
          </path>
          
          {/* Nodes */}
          <circle cx="100" cy="200" r="4" fill="var(--accent)" className="node-dot" />
          <circle cx="400" cy="200" r="6" fill="var(--accent)" className="node-dot pulse" />
          <circle cx="700" cy="200" r="4" fill="var(--accent)" className="node-dot" />
          
          <circle cx="100" cy="100" r="3" fill="white" opacity="0.5" className="node-dot" />
          <circle cx="700" cy="100" r="3" fill="white" opacity="0.5" className="node-dot" />
          
          {/* Dynamic Data Labels */}
          <g transform="translate(380, 180)">
             <text fill="white" fontSize="10" fontWeight="600">CENTRAL_HUB_01</text>
             <text fill="var(--accent)" fontSize="8" y="12" fontWeight="400">STATUS: OPTIMAL</text>
          </g>
        </svg>
        
        <div className="nodes-stats">
           <div className="n-stat">
              <span className="n-label">Latency</span>
              <span className="n-val">0.02ms</span>
           </div>
           <div className="n-stat">
              <span className="n-label">Uptime</span>
              <span className="n-val">99.98%</span>
           </div>
           <div className="n-stat">
              <span className="n-label">Nodes</span>
              <span className="n-val">42,109</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LiveNodes;
