// Typing animation + interactions + reveal on scroll
document.addEventListener('DOMContentLoaded', function(){
  const phrases = ['Senior Software Engineer','Tech Lead','Full‑Stack Developer'];
  let p=0, ch=0, forward=true;
  const el = document.getElementById('typed');
  function typer(){
    const cur = phrases[p];
    if(forward){ ch++; el.textContent = cur.slice(0,ch); if(ch===cur.length){ forward=false; setTimeout(typer,900); return; } }
    else{ ch--; el.textContent = cur.slice(0,ch); if(ch===0){ forward=true; p=(p+1)%phrases.length; } }
    setTimeout(typer, forward?80:40);
  }
  typer();

  // year
  try{ document.querySelector('.footer small').textContent = '© ' + new Date().getFullYear() + ' Elio Lako'; }catch(e){}

  // nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle && navToggle.addEventListener('click', ()=> navList.classList.toggle('show'));

  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{ entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('show'); }); },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(elm=>io.observe(elm));

  // smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{ a.addEventListener('click', function(e){ const href=this.getAttribute('href'); if(href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'}); } }); });
});