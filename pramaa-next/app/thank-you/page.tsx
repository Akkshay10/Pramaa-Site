import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ThankYou() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container" style={{textAlign:'center',padding:'80px 22px'}}>
            <div style={{maxWidth:'600px',margin:'0 auto'}}>
              <div style={{fontSize:'4rem',marginBottom:'20px'}}>🎉</div>
              <h1>Thanks! We got your message.</h1>
              <p className="lead">We'll review your project details and get back to you within 24 hours with a detailed estimate and next steps.</p>
              <div style={{marginTop:'40px'}}>
                <a href="/" className="btn btn-primary">Back to home</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}