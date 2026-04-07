import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="global-footer reveal">
      <div className="container">
        <div className="gf-top">
          <div className="gf-brand">
            <div className="logo-icon lg-icon"></div>
            <h2>USANJ_AI</h2>
            <p>Forging the neural pathway for tomorrow's digital reality.</p>
          </div>
          
          <div className="gf-links-grid">
            <div className="gf-col">
              <h4>Ecosystem</h4>
              <a href="#infrastructure">Neural Mapping</a>
              <a href="#mapping">Data Synthesis</a>
              <a href="#home">Architecture</a>
            </div>
            <div className="gf-col">
              <h4>Company</h4>
              <a href="#home">About IntelHub</a>
              <a href="#deployments">Careers</a>
              <a href="#echoes">Press</a>
            </div>
            <div className="gf-col">
              <h4>Resources</h4>
              <a href="#deployments">API Documentation</a>
              <a href="#infrastructure">Network Status</a>
              <a href="#home">Support Hub</a>
            </div>
          </div>
        </div>
        
        <div className="gf-bottom">
           <div className="gf-copyright">© 2026 USANJ Systems. All directives localized and protected.</div>
           <div className="gf-socials">
              <span>[ T ]</span>
              <span>[ L ]</span>
              <span>[ G ]</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
