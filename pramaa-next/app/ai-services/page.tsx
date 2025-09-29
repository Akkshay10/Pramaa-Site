import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SiteScripts from '../../components/SiteScripts'

export const metadata = {
  title: 'AI Services & Automation | FastForward AI by Pramaa Solutions',
  description: 'Custom AI implementations, chatbots, workflow automation, and intelligent systems. Transform your business with practical AI solutions that deliver real ROI.',
  keywords: 'AI services, chatbots, automation, artificial intelligence, machine learning, business automation, AI consulting',
}

export default function AIServices(){
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow eyebrow-purple">🤖 FastForward AI Services</span>
              <h1>AI-Powered Solutions.<br/> Transform Your Business with Intelligence.</h1>
              <p className="sub">Custom AI implementations, automation workflows, and intelligent systems that drive real business results. From chatbots to predictive analytics.</p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="#ai-contact" className="btn btn-primary">Get AI Consultation</a>
                <a href="#ai-services" className="btn btn-ghost">Explore AI Solutions</a>
              </div>
            </div>
            <div className="hero-card reveal" id="heroCard">
              <div className="card" style={{display:'grid',gridTemplateColumns:'1fr auto',gap:12,alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:800}}>AI Assistant Integration</div>
                  <div className="muted" style={{fontSize:'.92rem'}}>Custom chatbots, knowledge bases, automated responses</div>
                </div>
                <span className="tag">Live</span>
              </div>
              <div className="kpis">
                <div className="k"><div className="n" data-countto="85" data-suffix="%">0%</div><div className="l">Query resolution</div></div>
                <div className="k"><div className="n" data-prefix="×" data-countto="10">×0</div><div className="l">Faster responses</div></div>
                <div className="k"><div className="n" data-countto="24" data-suffix="/7">0/7</div><div className="l">Always available</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-services">
          <div className="container">
            <h2>AI Solutions That Actually <em>Work</em></h2>
            <p className="lead">Practical AI implementations that solve real business problems and deliver measurable ROI.</p>
            <div className="grid cols-3">
              <div className="card reveal">
                <div className="tag">Automation</div>
                <h3>Intelligent Workflows</h3>
                <p className="muted">Document processing, data extraction, automated decision-making, and smart routing systems.</p>
              </div>
              <div className="card reveal">
                <div className="tag">Customer Service</div>
                <h3>AI Assistants & Chatbots</h3>
                <p className="muted">24/7 customer support, knowledge base integration, multi-language support, escalation handling.</p>
              </div>
              <div className="card reveal">
                <div className="tag">Analytics</div>
                <h3>Predictive Intelligence</h3>
                <p className="muted">Sales forecasting, demand prediction, risk assessment, and trend analysis dashboards.</p>
              </div>
              <div className="card reveal">
                <div className="tag">Content</div>
                <h3>Content Generation</h3>
                <p className="muted">Automated content creation, personalized emails, product descriptions, and marketing copy.</p>
              </div>
              <div className="card reveal">
                <div className="tag">Vision</div>
                <h3>Computer Vision</h3>
                <p className="muted">Image recognition, quality control, document scanning, and visual inspection systems.</p>
              </div>
              <div className="card reveal">
                <div className="tag">Integration</div>
                <h3>API & Model Integration</h3>
                <p className="muted">OpenAI, Claude, custom models, fine-tuning, and seamless system integration.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-process" className="impact">
          <div className="container">
            <h2>Our AI Implementation Process</h2>
            <p className="lead">From concept to deployment in weeks, not months.</p>
            <div className="stats">
              <div className="stat reveal">
                <div className="big">1</div>
                <div className="muted">Discovery & Strategy</div>
                <p style={{fontSize:'.9rem',marginTop:'8px'}}>Identify AI opportunities and define success metrics</p>
              </div>
              <div className="stat reveal">
                <div className="big">2</div>
                <div className="muted">Prototype & Test</div>
                <p style={{fontSize:'.9rem',marginTop:'8px'}}>Build MVP, validate approach, measure performance</p>
              </div>
              <div className="stat reveal">
                <div className="big">3</div>
                <div className="muted">Deploy & Scale</div>
                <p style={{fontSize:'.9rem',marginTop:'8px'}}>Production deployment with monitoring and optimization</p>
              </div>
              <div className="stat reveal">
                <div className="big">4</div>
                <div className="muted">Monitor & Improve</div>
                <p style={{fontSize:'.9rem',marginTop:'8px'}}>Continuous learning, model updates, performance tuning</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-case">
          <div className="container">
            <h2>From Manual to Magical</h2>
            <p className="lead">How we transformed a customer service team with AI automation.</p>
            <div className="before-after">
              <div className="ba reveal">
                <h3>Before AI</h3>
                <ul>
                  <li>8-hour response times for customer queries</li>
                  <li>Manual ticket routing and categorization</li>
                  <li>Repetitive questions overwhelming support team</li>
                  <li>Inconsistent response quality</li>
                </ul>
              </div>
              <div className="ba reveal">
                <h3>After AI Implementation</h3>
                <ul>
                  <li>Instant responses for 85% of common queries</li>
                  <li>Intelligent routing to right specialists</li>
                  <li>24/7 availability with human escalation</li>
                  <li><strong>90% customer satisfaction increase</strong></li>
                </ul>
              </div>
            </div>
            <div className="grid cols-2" style={{marginTop:14}}>
              <div className="card reveal">
                <strong>Result:</strong> 75% reduction in response time, 60% less manual work, happier customers and team.
              </div>
              <div className="card reveal">
                <strong>ROI:</strong> "The AI assistant paid for itself in 3 months through efficiency gains alone."
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="card reveal" style={{display:'flex',gap:16,alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
              <div>
                <h2 style={{margin:0}}>Ready to harness AI power?</h2>
                <p className="muted" style={{margin:'6px 0 0'}}>Get your custom AI strategy session. We'll show you exactly what's possible.</p>
              </div>
              <a href="#ai-contact" className="btn btn-primary">Book AI Consultation</a>
            </div>
          </div>
        </section>

        <section id="ai-contact">
          <div className="container">
            <h2>Start Your AI Transformation</h2>
            <p className="lead">Tell us your biggest challenge. We'll show you how AI can solve it (and what it costs).</p>

            <form id="aiLeadForm" action="https://formsubmit.co/info@pramaa.solutions" method="POST" className="reveal">
              <input type="hidden" name="_subject" value="AI Services Inquiry from pramaa.solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://pramaa.solutions/thank-you" />
              <input type="hidden" name="_autoresponse" value="Thank you for your AI services inquiry! We'll get back to you within 24 hours with a detailed AI strategy proposal." />
              <input type="hidden" name="service_type" value="AI Services" />
              
              <div className="twocol">
                <div>
                  <label htmlFor="ai-name">Name *</label>
                  <input id="ai-name" name="name" required placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="ai-email">Work email *</label>
                  <input id="ai-email" type="email" name="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="twocol">
                <div>
                  <label htmlFor="ai-company">Company</label>
                  <input id="ai-company" name="company" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="ai-phone">Phone (optional)</label>
                  <input id="ai-phone" name="phone" placeholder="+91…" />
                </div>
              </div>
              <div>
                <label htmlFor="ai-challenge">What challenge can AI solve for you? *</label>
                <textarea id="ai-challenge" name="message" rows={5} required placeholder="Describe your current process, pain points, and what you'd like to automate or improve with AI"></textarea>
              </div>
              <div className="twocol">
                <div>
                  <label htmlFor="ai-timeline">Ideal timeline</label>
                  <select id="ai-timeline" name="timeline">
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>3–6 months</option>
                    <option>&gt;6 months</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ai-budget">Budget range</label>
                  <select id="ai-budget" name="budget">
                    <option>₹2–5L</option>
                    <option>₹5–10L</option>
                    <option>₹10L+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Get AI Strategy Session</button>
            </form>
          </div>
        </section>

      </main>
      <SiteScripts />
      <Footer />
    </>
  )
}