import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Play, CheckCircle2, Star, ChevronRight, 
  Shield, Zap, Cpu, Globe, Activity, Database, Network
} from 'lucide-react';
import './App.css';

function App() {
  const [isAnnual, setIsAnnual] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="app-container">
      
      {/* NAVBAR */}
      <nav className="navbar container">
        <div className="nav-logo">
          <div className="logo-icon"></div>
          <span className="logo-text">USANJ_AI</span>
        </div>
        
        <div className="nav-pill desktop-only">
          <a href="#home" className="active">Home</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#mapping">Mapping</a>
          <a href="#deployments">Deployments</a>
          <a href="#echoes">Echoes</a>
        </div>
        
        <div className="nav-actions">
          <a href="#login" className="login-link desktop-only">Log In</a>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </nav>

      {/* HERO SECTION */}
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
          <button className="btn btn-primary btn-lg">Get Started</button>
          <button className="btn btn-secondary btn-lg">Get a Demo</button>
        </div>

        {/* Hero Dashboard Mockup */}
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

      {/* CLIENTS LOGOS */}
      <section className="clients-section container reveal">
        <h3>Our Enterprise Syndicate</h3>
        <div className="client-logos">
          <span className="client-logo">◎ Ephemeral</span>
          <span className="client-logo">❖ Wildcrafted</span>
          <span className="client-logo">▱ Codecraft_</span>
        </div>
        <div className="client-logos row-2">
          <span className="client-logo">✣ Convergence</span>
          <span className="client-logo">❃ ImgCompress</span>
          <span className="client-logo">◑ ContrastAI</span>
        </div>
        <p className="clients-join">Join 40,000+ networks globally</p>
      </section>

      {/* FEATURES GRID */}
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

      {/* HIGHLIGHT 1: Cognitive Mapping */}
      <section className="highlight-section container" id="mapping">
        <div className="highlight-content">
          <div className="badge reveal">✦ System Mapping</div>
          <h2 className="section-title left-align reveal">
            Cognitive Mapping<br/>Made Simple
          </h2>
          <p className="highlight-desc reveal">
            Neural management involves planning, organizing, and controlling computational resources to achieve pure spatial dominance. Our platform simplifies the entire ecosystem into a single unified dashboard.
          </p>
        </div>
        
        <div className="highlight-visual visual-left reveal reveal-delay-2">
           <div className="mockup-panel">
             <div className="panel-header">
               <span>Cognitive Overview</span>
               <span className="view-details">...</span>
             </div>
             <div className="panel-main-val">
               8.10 TH/s <span className="green-pill">+12.4%</span>
             </div>
             <div className="panel-chart-area">
               <div className="c-bar h1 animate-bar-1"></div>
               <div className="c-bar h2 animate-bar-2"></div>
               <div className="c-bar h-primary animate-bar-3"></div>
               <div className="c-bar h3 animate-bar-4"></div>
               <div className="c-bar h4 animate-bar-5"></div>
             </div>
           </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing-section container" id="deployments">
        <div className="badge reveal">✦ Deployment Plans</div>
        <h2 className="section-title reveal">
          Choose a matrix that will empower<br/>your computational limits
        </h2>
        <p className="section-subtitle reveal">
          Each package includes personalized node integration<br/>to guarantee absolute stability.
        </p>

        <div className="billing-toggle reveal">
          <button className={`toggle-btn ${!isAnnual ? 'active' : ''}`} onClick={() => setIsAnnual(false)}>Monthly Cycles</button>
          <button className={`toggle-btn ${isAnnual ? 'active' : ''}`} onClick={() => setIsAnnual(true)}>Annual Cycles</button>
        </div>

        <div className="pricing-cards">
          {/* Growth Plan */}
          <div className="p-card reveal">
            <div className="p-header">
              <h3>Standard Grid</h3>
              <p>Ideal for growing nodes and localized networks.</p>
            </div>
            <div className="p-price">
              <span className="amount">${isAnnual ? '799' : '999'}</span>
              <span className="period">/ cycle</span>
            </div>
            <ul className="p-features">
              <li><CheckCircle2 className="chk" size={20} /> Neural Hub Access</li>
              <li><CheckCircle2 className="chk" size={20} /> Basic Node Tracking</li>
              <li><CheckCircle2 className="chk" size={20} /> Regional Dashboards</li>
              <li><CheckCircle2 className="chk" size={20} /> Processing Insights</li>
              <li><CheckCircle2 className="chk" size={20} /> Encrypted Pipeline</li>
            </ul>
            <button className="btn btn-primary btn-block">Deploy Grid</button>
          </div>

          {/* Business Plan */}
          <div className="p-card premium-p-card reveal reveal-delay-2">
            <div className="p-header">
              <h3>Quantum Mesh</h3>
              <p>Perfect for planetary-scale logic organizations.</p>
            </div>
            <div className="p-price">
              <span className="amount">${isAnnual ? '3,499' : '4,999'}</span>
              <span className="period">/ cycle</span>
            </div>
            <ul className="p-features">
              <li><CheckCircle2 className="chk" size={20} /> Everything in Grid</li>
              <li><CheckCircle2 className="chk" size={20} /> Universal Node Routing</li>
              <li><CheckCircle2 className="chk" size={20} /> Zero-Latency Sync</li>
              <li><CheckCircle2 className="chk" size={20} /> 24/7 Priority Architect</li>
              <li><CheckCircle2 className="chk" size={20} /> Military Grade Topology</li>
            </ul>
            <button className="btn btn-primary btn-block">Acquire Hub</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section container" id="echoes">
        <div className="t-top-row">
          <div className="t-titles">
            <div className="badge reveal">✦ Network Echoes</div>
            <h2 className="section-title left-align reveal">
              What the Collective<br/>Says About Us
            </h2>
            <p className="t-desc reveal">
              A commitment to seamless logic rendering. Our services ensure your data transactions are securely woven into reality.
            </p>
          </div>
        </div>

        <div className="t-carousel reveal reveal-delay-2">
           <div className="t-card special-glow-card">
             <p className="t-quote">
               "I appreciate the sheer cognitive power of this AI platform. The advanced biometric integration gives me peace of mind knowing my structural networks are absolute and secure."
             </p>
             <div className="t-bottom">
               <div className="t-author">
                 <strong>David Johnson</strong>
                 <span>Lead Synthetic Engineer</span>
               </div>
               <div className="t-stars">
                 <Star size={16} fill="#d0ff27" color="#d0ff27" />
                 <Star size={16} fill="#d0ff27" color="#d0ff27" />
                 <Star size={16} fill="#d0ff27" color="#d0ff27" />
                 <Star size={16} fill="#d0ff27" color="#d0ff27" />
                 <Star size={16} fill="#d0ff27" color="#d0ff27" />
               </div>
             </div>
           </div>
           
           <button className="carousel-arrow">
             <ChevronRight size={28} color="#000" />
           </button>
        </div>
      </section>

      {/* BOTTOM FOOTER STATS */}
      <section className="footer-stats-section container">
        <div className="footer-left">
           <h2 className="section-title left-align reveal">Transform your<br/>IntelHub Today</h2>
           <p className="f-desc reveal reveal-delay-1">Connect directly into the mainframe and experience logic manipulation like never before in human capability.</p>
        </div>
        <div className="footer-right">
           <div className="stat-card primary-stat reveal reveal-delay-1">
             <div className="s-val">4.2<sup>P</sup></div>
             <p>Petabytes processed passively per cycle globally.</p>
           </div>
           
           <div className="stat-card secondary-stat reveal reveal-delay-2">
             <div className="s-val text-white">99.9<Star size={20} fill="#d0ff27" color="#d0ff27" className="inline-star" /></div>
             <p>Guaranteed structural uptime across nodes.</p>
           </div>
           
           <div className="stat-card secondary-stat reveal reveal-delay-3">
             <div className="s-val text-white">12<sup>ms</sup></div>
             <p>Maximum dimension-to-dimension rendering.</p>
           </div>
        </div>
      </section>

      {/* ACTUAL GLOBAL FOOTER AS REQUESTED */}
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

    </div>
  );
}

export default App;
