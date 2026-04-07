import React from 'react';
import { Zap, Activity, Cpu, Shield, Database, Network } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="features-grid-section container" id="infrastructure">
      <div className="badge reveal">✦ Infrastructure</div>
      <h2 className="section-title reveal">
        Intelligence Reimagined<br/>for the Future You
      </h2>
      <p className="section-subtitle reveal">
        Trust us to deliver cutting-edge innovation, transparency, and localized<br/>
        service, all designed to help you achieve cognitive freedom.
      </p>

      <div className="feature-cards">
        <div className="f-card reveal">
          <div className="f-icon-box"><Zap size={24} /></div>
          <h4>Instant Node Setup</h4>
          <p>Customers can set up a neural node account in minutes.</p>
        </div>
        <div className="f-card reveal reveal-delay-1">
          <div className="f-icon-box"><Activity size={24} /></div>
          <h4>Real-Time Processing</h4>
          <p>Enables instant data transfers, both domestically and dimensionally.</p>
        </div>
        <div className="f-card reveal reveal-delay-2">
          <div className="f-icon-box"><Cpu size={24} /></div>
          <h4>Mobile Intelligence</h4>
          <p>Full-featured mobile app that allows users to manage their networks.</p>
        </div>
        
        <div className="f-card reveal">
          <div className="f-icon-box"><Shield size={24} /></div>
          <h4>Automated Security</h4>
          <p>Round up inputs or set regular automated defenses into a secure ledger.</p>
        </div>
        <div className="f-card reveal reveal-delay-1">
          <div className="f-icon-box"><Database size={24} /></div>
          <h4>AI-Powered Metrics</h4>
          <p>AI tools analyze processing patterns and provide personalized insights.</p>
        </div>
        <div className="f-card reveal reveal-delay-2">
          <div className="f-icon-box"><Network size={24} /></div>
          <h4>Virtual API Tokens</h4>
          <p>Generate virtual access tokens instantly for secure networking.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
