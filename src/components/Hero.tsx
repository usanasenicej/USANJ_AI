import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-rating reveal reveal-delay-1">
        <span className="stars">★★★★★</span>
        <span className="rating-text">4.9 on global ratings (2M reviews)</span>
      </div>
      
      <h1 className="hero-title reveal reveal-delay-2">
        Take Control of Your<br/>Reality with USANJ
      </h1>
      
      <p className="hero-subtitle reveal reveal-delay-3">
        Neural management involves planning, organizing, and controlling computational<br/>
        resources to achieve absolute cognitive goals.
      </p>
      
      <div className="hero-cta reveal reveal-delay-4">
        <button className="btn btn-primary btn-lg" aria-label="Get started with USANJ_AI">Get Started</button>
        <button className="btn btn-secondary btn-lg" aria-label="Request a product demo">Get a Demo</button>
      </div>

      <div className="hero-dashboard-wrapper reveal reveal-delay-5">
        <div className="dashboard-mockup">
           <div className="mockup-header">
             <div className="m-logo">Good morning, Commander</div>
             <div className="m-actions">
               <div className="m-icon"></div>
               <div className="m-btn">Generate Report</div>
             </div>
           </div>
           
           <div className="mockup-body">
             <div className="m-col">
               <div className="m-label">Neural Balance</div>
               <div className="m-value">4.2 PB/s</div>
               <div className="m-chart"></div>
             </div>
             <div className="m-col m-center">
               <div className="m-label">Cognitive Overview</div>
               <div className="m-value">100% Synced</div>
               <div className="m-bars">
                 <div className="bar b1"></div>
                 <div className="bar b2"></div>
                 <div className="bar b3"></div>
                 <div className="bar b4"></div>
                 <div className="bar b5"></div>
               </div>
             </div>
             <div className="m-col">
               <div className="m-top-row">
                 <span>Active Nodes</span>
                 <span className="view-all">View All</span>
               </div>
               <div className="m-avatars">
                 <div className="m-avi"></div>
                 <div className="m-avi"></div>
                 <div className="m-avi"></div>
                 <div className="m-avi"></div>
               </div>
               <div className="m-btn-group">
                 <button className="m-btn-dark">Request Link</button>
                 <button className="m-btn-dark">Send Packet</button>
               </div>
             </div>
           </div>
        </div>
        <div className="glow-effect"></div>
      </div>
    </section>
  );
};

export default Hero;
