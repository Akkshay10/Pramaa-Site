import Header from '../components/Header'
import Footer from '../components/Footer'
import SiteScripts from '../components/SiteScripts'

export default function Home(){
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">🚀 Turn chaos into profit in weeks, not months</span>
              <h1>Stop wrestling with spreadsheets.<br/> Start <em>winning</em> with custom platforms.</h1>
              <p className="sub">We design beautiful, reliable web platforms—dealer portals, ordering systems, workflows, and dashboards—that cut manual effort and accelerate revenue. Launch in weeks, not months.</p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="#contact" className="btn btn-primary">Get a build estimate</a>
                <a href="#what" className="btn btn-ghost">See solutions</a>
              </div>
            </div>
            <div className="hero-card reveal" id="heroCard">
              <div className="card" style={{display:'grid',gridTemplateColumns:'1fr auto',gap:12,alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:800}}>Quote‑to‑Cash Flow</div>
                  <div className="muted" style={{fontSize:'.92rem'}}>Approvals, price rules, payment links, PDF emails</div>
                </div>
                <span className="tag">Live</span>
              </div>
              <div className="kpis">
                <div className="k"><div className="n" data-countto="72" data-suffix="%">0%</div><div className="l">Manual steps reduced</div></div>
                <div className="k"><div className="n" data-prefix="×" data-countto="5">×0</div><div className="l">Faster quote creation</div></div>
                <div className="k"><div className="n" data-countto="99.9" data-suffix="%">0%</div><div className="l">Platform uptime</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="what">
          <div className="container">
            <h2>Solutions that actually <em>work</em></h2>
            <p className="lead">We build the platforms your competitors wish they had. No more manual chaos, no more lost revenue.</p>
            <div className="grid cols-3">
              <div className="card reveal"><div className="tag">B2B</div><h3>Dealer / Distributor Portals</h3><p className="muted">Onboarding, inventory, bulk orders, pricing tiers, approvals.</p></div>
              <div className="card reveal"><div className="tag">B2C</div><h3>E‑commerce &amp; Ordering</h3><p className="muted">Catalogs, taxes/GST, email/PDF invoices, secure payments.</p></div>
              <div className="card reveal"><div className="tag">Ops</div><h3>Internal Tools</h3><p className="muted">Tickets, forms, audit logs, role‑based access, notifications.</p></div>
              <div className="card reveal"><div className="tag">Dashboards</div><h3>Data &amp; Insights</h3><p className="muted">Business KPIs with scheduled refresh and exports.</p></div>
              <div className="card reveal"><div className="tag">AI</div><h3>Assistants &amp; Autofill</h3><p className="muted">Knowledge search, document Q&amp;A, form autofill, email drafts.</p></div>
              <div className="card reveal"><div className="tag">Compliance</div><h3>Audits &amp; Validation</h3><p className="muted">GSTIN checks, audit trails, CSV/Excel import &amp; export.</p></div>
            </div>
          </div>
        </section>

        <section id="impact" className="impact">
          <div className="container">
            <h2>Real results, real fast</h2>
            <p className="lead">Here's what happens when you stop doing things the hard way.</p>
            <div className="stats">
              <div className="stat reveal"><div className="big" data-countto="65" data-suffix="%">0%</div><div className="muted">Less manual effort</div></div>
              <div className="stat reveal"><div className="big" data-countto="80" data-suffix="%">0%</div><div className="muted">Faster cycle times</div></div>
              <div className="stat reveal"><div className="big" data-countto="50" data-suffix="%">0%</div><div className="muted">Fewer errors</div></div>
              <div className="stat reveal"><div className="big" data-countto="3" data-prefix="×">0×</div><div className="muted">Quicker onboarding</div></div>
            </div>
          </div>
        </section>

        <section id="case">
          <div className="container">
            <h2>From 30 minutes to 3 minutes</h2>
            <p className="lead">How we turned a retail client's quote nightmare into a revenue machine.</p>
            <div className="before-after">
              <div className="ba reveal">
                <h3>Before</h3>
                <ul>
                  <li>Scattered Excel files across teams</li>
                  <li>Manual price lookups &amp; approvals via email</li>
                  <li>Quote turnaround ~30 minutes</li>
                </ul>
              </div>
              <div className="ba reveal">
                <h3>After</h3>
                <ul>
                  <li>Central product database with typeahead search</li>
                  <li>Built‑in rules &amp; role‑based approvals</li>
                  <li>One‑click PDF quote &amp; payment link — <strong>~3 minutes</strong></li>
                </ul>
              </div>
            </div>
            <div className="grid cols-2" style={{marginTop:14}}>
              <div className="card reveal"><strong>Result:</strong> 70% fewer manual steps, 5× faster quotes, fewer pricing errors.</div>
              <div className="card reveal"><strong>Testimonial:</strong> “Our team stopped chasing spreadsheets. Customers get quotes in minutes.”</div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="card reveal" style={{display:'flex',gap:16,alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
              <div>
                <h2 style={{margin:0}}>Ready to stop losing money?</h2>
                <p className="muted" style={{margin:'6px 0 0'}}>Get your custom platform estimate in 20 minutes. No fluff, just results.</p>
              </div>
              <a href="#contact" className="btn btn-primary">Book a 20‑min consult</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Get your profit-boosting estimate</h2>
            <p className="lead">Tell us your biggest workflow headache. We'll show you exactly how to fix it (and what it costs).</p>

            <form id="leadForm" action="https://formsubmit.co/info@pramaa.solutions" method="POST" name="contact" className="reveal">
              <input type="hidden" name="_subject" value="New inquiry from pramaa.solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://pramaa.solutions/thank-you" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="twocol">
                <div>
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email">Work email *</label>
                  <input id="email" type="email" name="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="twocol">
                <div>
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="phone">Phone (optional)</label>
                  <input id="phone" name="phone" placeholder="+91…" />
                </div>
              </div>
              <div>
                <label htmlFor="desc">What do you want to build? *</label>
                <textarea id="desc" name="message" rows={5} required placeholder="100–200 words about your workflow, users, and must‑haves"></textarea>
              </div>
              <div className="twocol">
                <div>
                  <label htmlFor="timeline">Ideal timeline</label>
                  <select id="timeline" name="timeline">
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>&gt;2 months</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget">Budget band</label>
                  <select id="budget" name="budget">
                    <option>₹1–2L</option>
                    <option>₹2–5L</option>
                    <option>₹5L+</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Get my estimate</button>
              <div id="thanks" style={{display:'none',marginTop:8,color:'var(--brand1)',fontWeight:900}}>Thanks! Your message was sent.</div>
            </form>
          </div>
        </section>

      </main>
      <SiteScripts />
      <Footer />
    </>
  )
}
