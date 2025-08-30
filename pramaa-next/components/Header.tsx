'use client'
import {useState} from 'react'
export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className={`container nav ${open ? 'open' : ''}`}>
        <div className="nav-inner">
          <div className="brand" style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="logo-wrap" style={{position:'relative',width:120,height:120}}>
              <img src="/assets/logo.png" alt="Pramaa Solutions logo" style={{height:'110px',width:'auto',borderRadius:10}} onError={(e:any)=>{e.currentTarget.onerror=null; e.currentTarget.src='/assets/favicon.png'}}/>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <div className="brand-name-glow">Pramaa Solutions</div>
              <div className="brand-tagline">Build. Automate. Scale.</div>
            </div>
          </div>
        </div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>☰</button>
        <nav className="links" aria-label="Primary">
          <a href="#what">Solutions</a>
          <a href="#impact">Impact</a>
          <a href="#case">Case Study</a>
          <a href="#contact" className="btn btn-primary cta-small" style={{boxShadow:'none'}}>Book a consult</a>
        </nav>
      </div>
    </header>
  )
}
