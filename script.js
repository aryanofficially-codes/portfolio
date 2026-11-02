// live Vellore clock (IST)
const clock=document.getElementById('clock');
function tick(){
  clock.textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'});
}
tick();setInterval(tick,15000);

// subtle parallax on hero name
const l1=document.querySelector('.l1'),l2=document.querySelector('.l2');
addEventListener('mousemove',e=>{
  const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
  l1.style.transform=`translate(${x*-26}px,${y*-8}px)`;
  l2.style.transform=`translate(${x*26}px,${y*8}px)`;
});

// reveal on scroll
const targets=document.querySelectorAll('.about>*,.row,.log li,.wins article,.index li,.bouts>div');
targets.forEach(t=>t.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
}),{threshold:.12});
targets.forEach(t=>io.observe(t));
