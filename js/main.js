// Horizons urbains — script principal
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// Injection des images depuis images.js (+ repli en dégradé si l'image est cassée)
$$('[data-img]').forEach(el=>{const d=IMAGES[el.dataset.img];if(!d)return;
 const i=new Image();i.src=d.url;i.alt=d.alt;i.loading='lazy';i.className=el.dataset.cls||'';
 i.onerror=()=>{const f=document.createElement('div');f.className='fbk '+(el.dataset.cls||'');f.textContent=d.cap;i.replaceWith(f)};
 el.replaceWith(i)});
// Menu mobile et thème clair/sombre mémorisé
$('#burger').onclick=()=>$('nav').classList.toggle('open');
const th=localStorage.getItem('th');if(th)document.documentElement.dataset.theme=th;
$('#theme').onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('th',n)};
// Barre de progression de lecture
addEventListener('scroll',()=>{const h=document.documentElement;$('#prog').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
// Apparition au scroll
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');io.unobserve(x.target)}}));
$$('.rv').forEach(e=>io.observe(e));
// Diaporama hero
const sl=$$('.slide');if(sl.length){let k=0;sl[0].classList.add('on');setInterval(()=>{sl[k].classList.remove('on');k=(k+1)%sl.length;sl[k].classList.add('on')},5000)}
// Compteurs animés
$$('[data-n]').forEach(c=>{const o=new IntersectionObserver(([x])=>{if(!x.isIntersecting)return;o.disconnect();let v=0;const t=+c.dataset.n,id=setInterval(()=>{v++;c.textContent=v;if(v>=t)clearInterval(id)},120)});o.observe(c)});
// Cartes retournables (clavier inclus)
$$('.flip').forEach(f=>{f.tabIndex=0;f.onclick=()=>f.classList.toggle('f');f.onkeydown=e=>{if(e.key==='Enter')f.click()}});
// Comparateur avant / après
const r=$('#cmp');if(r)r.oninput=()=>$('#topc').style.clipPath='inset(0 '+(100-r.value)+'% 0 0)';
// Recherche dans le glossaire
const q=$('#q');if(q)q.oninput=()=>$$('details.g').forEach(d=>d.hidden=!d.textContent.toLowerCase().includes(q.value.toLowerCase()));
// Formulaire : validation puis mailto de secours
const fm=$('#form');if(fm)fm.onsubmit=e=>{e.preventDefault();let ok=true;
 $$('[name]',fm).forEach(i=>{let msg='';
  if(!i.value.trim())msg='Champ obligatoire.';else if(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value))msg='Adresse email invalide.';
  i.nextElementSibling.textContent=msg;if(msg)ok=false});
 if(ok){$('#ok').textContent='Merci ! Votre messagerie va s\'ouvrir.';location.href='mailto:contact@exemple.com?subject='+encodeURIComponent(fm.sujet.value)+'&body='+encodeURIComponent(fm.message.value)}};
