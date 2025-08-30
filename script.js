// typing phrases
const phrases = ['Senior Software Engineer','Tech Lead','Full‑Stack Developer'];
let idx = 0, char = 0, forward = true;
const typedEl = document.getElementById('typed');
function tick(){
  const current = phrases[idx];
  if(forward){
    char++;
    typedEl.textContent = current.slice(0,char);
    if(char === current.length){ forward=false; setTimeout(tick,900); return; }
  } else {
    char--;
    typedEl.textContent = current.slice(0,char);
    if(char===0){ forward=true; idx=(idx+1)%phrases.length; }
  }
  setTimeout(tick, forward?80:40);
}
document.addEventListener('DOMContentLoaded', ()=>{
  // start typing
  tick();
  // year
  document.getElementById('year').textContent = new Date().getFullYear();
  // menu
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn && menuBtn.addEventListener('click', ()=> navLinks.classList.toggle('show'));

  // reveal on scroll
  const ro = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

  // smooth anchor scroll (native browsers mostly support)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if(href.length>1){ ev.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'}); }
    });
  });
});