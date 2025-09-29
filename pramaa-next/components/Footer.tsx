'use client'
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="col-brand">
            <div className="footer-brand-content">
              <div className="logo-wrap">
                <img src="/assets/logo.png" alt="Pramaa Solutions" onError={(e: any) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/favicon.png' }} />
              </div>
              <div>
                <div className="brand-name-glow" style={{fontSize:'1.1rem', marginBottom:'8px'}}>Pramaa Solutions</div>
                <div className="footer-copyright">
                  {`Copyright © ${new Date().getFullYear()} Pramaa Solutions. Practical automation and custom platforms.`}
                </div>
                <div style={{marginTop:'12px', display:'flex', gap:'16px', alignItems:'center'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'6px', fontSize:'0.85rem', color:'var(--brand2)'}}>
                    <span style={{fontSize:'1rem'}}>🛡️</span> Enterprise Security
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'6px', fontSize:'0.85rem', color:'var(--brand2)'}}>
                    <span style={{fontSize:'1rem'}}>⚡</span> 99.9% Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-links">
            <h4 style={{color:'var(--text)', marginBottom:'16px'}}>Solutions</h4>
            <ul className="footer-links">
              <li><a href="/#what">Platform Development</a></li>
              <li><a href="/ai-services">AI Services</a></li>
              <li><a href="/#impact">Success Stories</a></li>
              <li><a href="/#case">Case Studies</a></li>
              <li><a href="/#contact">Get Started</a></li>
            </ul>
          </div>
          <div className="col-contact">
            <h4 style={{color:'var(--text)', marginBottom:'16px'}}>Get In Touch</h4>
            <div className="contact-info">
              <div style={{marginBottom:'8px'}}>
                <a href="mailto:info@pramaa.solutions" style={{color:'var(--brand1)', textDecoration:'none'}}>
                  info@pramaa.solutions
                </a>
              </div>
              <div style={{fontSize:'0.9rem', color:'var(--muted)', marginBottom:'12px'}}>
                Response within 24 hours
              </div>
              <div style={{display:'flex', gap:'12px', marginTop:'16px'}}>
                <a href="/#contact" className="btn btn-ghost" style={{fontSize:'0.85rem', padding:'8px 16px'}}>
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          borderTop:'1px solid rgba(122,168,255,0.1)', 
          marginTop:'32px', 
          paddingTop:'20px', 
          textAlign:'center', 
          fontSize:'0.85rem', 
          color:'var(--muted)'
        }}>
          Built with precision. Powered by innovation. Trusted by businesses worldwide.
        </div>
      </div>
    </footer>
  )
}
