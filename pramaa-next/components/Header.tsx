'use client'
import {useState} from 'react'
export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className={`container nav ${open ? 'open' : ''}`}>
        <div className="nav-inner">
          <div className="brand" style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="logo-wrap" style={{position:'relative',width:72,height:72}}>
              <img src="/assets/logo.png" alt="Pramaa Solutions logo" style={{width:72,height:'auto',display:'block',borderRadius:8}} onError={(e:any)=>{e.currentTarget.onerror=null; e.currentTarget.src='/assets/favicon.png'}}/>
              <span aria-hidden className="logo-badge" style={{position:'absolute',right:-6,top:-6,width:14,height:14,borderRadius:999,background:'var(--badge-bg,#ffd166)',boxShadow:'0 4px 10px rgba(0,0,0,0.12)',border:'2px solid rgba(255,255,255,0.9)'}} />
            </div>
            <div style={{lineHeight:1}}>
              <div style={{marginLeft:6,display:'flex',alignItems:'center'}}>
                <div style={{fontSize:'0.9rem',fontWeight:600,color:'var(--brand2)',whiteSpace:'nowrap'}}>
                  {`Copyright © ${new Date().getFullYear()} Pramaa Solutions Practical automation and custom platforms. - All Rights Reserved.`}
                </div>
              </div>
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
