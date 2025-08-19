'use client'
export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="footer-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,alignItems:'start'}}>
          <div className="col-brand">
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div className="logo-wrap" style={{minWidth:48,minHeight:48,padding:8}}><img src="/assets/logo.png" alt="Pramaa" onError={(e:any)=>{e.currentTarget.onerror=null; e.currentTarget.src='/assets/favicon.png'}}/></div>
              <div style={{fontSize:'.92rem',color:'var(--muted)',whiteSpace:'nowrap'}}>
                {`Copyright © ${new Date().getFullYear()} Pramaa Solutions Practical automation and custom platforms. - All Rights Reserved.`}
              </div>
            </div>
          </div>
          <div className="col-links">
            <h4 style={{margin:0,marginBottom:8}}>Links</h4>
            <ul style={{listStyle:'none',padding:0,margin:0,color:'var(--muted)'}}>
              <li style={{margin:'6px 0'}}><a href="#what">Solutions</a></li>
              <li style={{margin:'6px 0'}}><a href="#impact">Impact</a></li>
              <li style={{margin:'6px 0'}}><a href="#case">Case study</a></li>
              <li style={{margin:'6px 0'}}><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-contact">
            <h4 style={{margin:0,marginBottom:8}}>Contact</h4>
            <div style={{color:'var(--muted)'}}>founder@pramaa.solutions</div>
            <div style={{color:'var(--muted)',marginTop:8}}>+91 • (optional)</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
