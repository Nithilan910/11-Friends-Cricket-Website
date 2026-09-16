const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
