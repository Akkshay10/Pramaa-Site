'use client'
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="col-brand">
            <div className="footer-brand-content">
              <div className="logo-wrap"><img src="/assets/logo.png" alt="Pramaa" onError={(e: any) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/favicon.png' }} /></div>
              <div className="footer-copyright">
                {`Copyright © ${new Date().getFullYear()} Pramaa Solutions Practical automation and custom platforms. - All Rights Reserved.`}
              </div>
            </div>
          </div>
          <div className="col-links">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><a href="#what">Solutions</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#case">Case study</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-contact">
            <h4>Contact</h4>
            <div className="contact-info">
              <div>info@pramaa.solutions</div>
              <div>+91 • (optional)</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
