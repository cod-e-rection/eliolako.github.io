
// Typing animation + smooth anchors
document.addEventListener('DOMContentLoaded', function(){
  const phrases = ['Senior Software Engineer','Tech Lead','Full‑Stack Developer'];
  let p=0,ch=0,forw=true;
  const el = document.getElementById('typing');
  function tick(){
    const cur = phrases[p];
    if(forw){ ch++; el.textContent = cur.slice(0,ch); if(ch===cur.length){ forw=false; setTimeout(tick,900); return; } }
    else{ ch--; el.textContent = cur.slice(0,ch); if(ch===0){ forw=true; p=(p+1)%phrases.length; } }
    setTimeout(tick, forw?80:40);
  }
  tick();

  // smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'}); }
    });
  });
});
