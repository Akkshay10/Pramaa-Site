// A small client component to re-attach the original page's client-side behaviors
'use client'
import { useEffect } from 'react'

export default function SiteScripts(){
  useEffect(()=>{
    // Cache-bust logos and favicon so updated images load reliably
    try{
      const v = Date.now();
      document.querySelectorAll('.logo-wrap img').forEach((img:any)=>{
        try{
          const src = img.getAttribute('src');
          if(!src) return;
          const u = new URL(src, location.href);
          u.searchParams.set('v', String(v));
          img.src = u.href;
        }catch(e){}
      });
      const link = document.querySelector('link[rel~="icon"]') as HTMLLinkElement | null;
      if(link && link.href){
        try{
          const fu = new URL(link.getAttribute('href')!, location.href);
          fu.searchParams.set('v', String(v));
          link.href = fu.href;
        }catch(e){}
      }
    }catch(e){}

    // animateCount implementation
    function animateCount(el: HTMLElement){
      const target = parseFloat((el.dataset.countto as string) || '0');
      const start = 0;
      const duration = 1200;
      const startTime = performance.now();
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      function tick(now: number){
        const p = Math.min(1, (now - startTime) / duration);
        const val = start + (target - start) * p;
        el.textContent = prefix + (suffix === '%' ? val.toFixed(1) : String(Math.round(val))) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // IntersectionObserver for reveal + counters
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          (e.target as HTMLElement).classList.add('show');
          const nums = (e.target as HTMLElement).querySelectorAll('[data-countto]');
          nums.forEach(n=> animateCount(n as HTMLElement));
        }
      });
    }, { threshold: .25 });

    document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));

    // Form submit handler — shows thanks & disables button
    const form = document.getElementById('leadForm') as HTMLFormElement | null;
    function onSubmit(e: Event){
      const f = e.target as HTMLFormElement | null;
      // If submitting to FormSubmit, submit in a new tab so we can redirect the current page safely
      try{
        if(f && f.action && f.action.includes('formsubmit.co')){
          f.target = '_blank';
        }
      }catch(err){}

      setTimeout(()=>{
        const thanks = document.getElementById('thanks') as HTMLElement | null;
        if(thanks) thanks.style.display = 'block';
        const btn = form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        if(btn){ btn.disabled = true; btn.textContent = 'Submitted'; }
        // Redirect to local thank-you page
        try{ window.location.href = '/thank-you.html'; }catch(e){}
      }, 250);
    }
    form?.addEventListener('submit', onSubmit);

    // Set year if #yr exists (keeps original footer behavior)
    const yr = document.getElementById('yr');
    if(yr) yr.textContent = String(new Date().getFullYear());

    return ()=>{
      form?.removeEventListener('submit', onSubmit);
      observer.disconnect();
    }
  }, []);

  return null;
}
