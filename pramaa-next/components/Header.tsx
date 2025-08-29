'use client'
import { useState, useEffect } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  
  // Close menu when clicking outside or on links
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const nav = document.querySelector('.container.nav')
      const menuToggle = document.querySelector('.menu-toggle')
      
      if (open && nav && !nav.contains(target) && target !== menuToggle) {
        setOpen(false)
      }
    }

    const handleLinkClick = () => {
      setOpen(false)
    }

    if (open) {
      document.addEventListener('click', handleClickOutside)
      document.querySelectorAll('.links a').forEach(link => {
        link.addEventListener('click', handleLinkClick)
      })
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.querySelectorAll('.links a').forEach(link => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [open])

  return (
    <header>
      <div className={`container nav ${open ? 'open' : ''}`}>
        <div className="nav-inner">
          <div className="brand">
            <div className="logo-wrap">
              <img src="/assets/logo.png" alt="Pramaa logo" />
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{fontWeight:900}}>Pramaa</div>
              <div style={{fontSize:'.86rem',color:'var(--brand2)',fontWeight:600}}>Build. Automate. Scale.</div>
            </div>
          </div>
          <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
          <nav className="links">
            <a href="#what" onClick={() => setOpen(false)}>Solutions</a>
            <a href="#impact" onClick={() => setOpen(false)}>Impact</a>
            <a href="#case" onClick={() => setOpen(false)}>Case study</a>
            <a className="cta-small btn-primary" href="#contact" onClick={() => setOpen(false)}>Book a consult</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
