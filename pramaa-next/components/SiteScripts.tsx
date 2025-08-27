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
    async function onSubmit(e: Event){
      const f = e.target as HTMLFormElement | null;
      e.preventDefault?.();
      try{
        if(f && f.action && f.action.includes('formsubmit.co')){
          // existing behavior for direct FormSubmit posts
          f.target = '_blank';
        }

        // If the form action points to the Netlify function, submit via fetch
        if(f && f.action && f.action.includes('/.netlify/functions/submit')){
          const data = new FormData(f);
          // send as urlencoded so the function can parse it
          const body = new URLSearchParams();
          data.forEach((v,k)=> body.append(k, String(v)));
          try{
            const res = await fetch(f.action, { method: 'POST', body, headers: { 'Accept': 'application/json' } });
            // on success redirect to _next or show thanks
            if(res.ok){
              const next = (f.querySelector('input[name="_next"]') as HTMLInputElement | null)?.value || '/thank-you.html';
              window.location.href = next;
            }
          }catch(err){
            // fall back to showing thanks locally
            const thanks = document.getElementById('thanks') as HTMLElement | null;
            if(thanks) thanks.style.display = 'block';
          }
          return; // prevent default form submission
        }

        // If submitting to FormSubmit, auto-cc and reply-to logic
        try{
          if(f && f.action && f.action.includes('formsubmit.co')){
            // Auto-CC the visitor and set reply-to so they receive a copy
            try{
              const emailField = f.querySelector('input[name="email"]') as HTMLInputElement | null;
              const userEmail = emailField?.value?.trim() || '';
              if(userEmail){
                let cc = f.querySelector('input[name="_cc"]') as HTMLInputElement | null;
                if(!cc){
                  cc = document.createElement('input');
                  cc.type = 'hidden';
                  cc.name = '_cc';
                  f.appendChild(cc);
                }
                cc.value = userEmail;

                let reply = f.querySelector('input[name="_replyto"]') as HTMLInputElement | null;
                if(!reply){
                  reply = document.createElement('input');
                  reply.type = 'hidden';
                  reply.name = '_replyto';
                  f.appendChild(reply);
                }
                reply.value = userEmail;
              }
            }catch(e){}
          }
        }catch(err){}

      }catch(err){}

      setTimeout(()=>{
        const thanks = document.getElementById('thanks') as HTMLElement | null;
        if(thanks) thanks.style.display = 'block';
        const btn = form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        if(btn){ btn.disabled = true; btn.textContent = 'Submitted'; }
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
