import { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, Star, ChevronRight
} from 'lucide-react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveNodes from './components/LiveNodes';
import Footer from './components/Footer';

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
      
      <Navbar />

      <Hero />

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

      <Features />

      <LiveNodes />

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

      <Footer />

    </div>
  );
}

export default App;
