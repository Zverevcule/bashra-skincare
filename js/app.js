
/* ---------- DATA (replace prices & copy with official BASHRA info) ---------- */
const PRODUCTS = [
  {id:'cleanser', name:'Gentle Face Cleanser', size:'100 ml', step:'Cleanse', n:'01', price:450, tint:'#CBD6A7', shape:'tube',
   line:'Step one of the BASHRA ritual — begin with a fresh, clean canvas.'},
  {id:'toner', name:'Radiant Skin Toner', size:'200 ml', step:'Tone', n:'02', price:380, tint:'#EDD2AE', shape:'tall',
   line:'Step two of the ritual — the bridge between cleansing and treatment.'},
  {id:'serum', name:'Revitalizing Face Serum', size:'30 ml', step:'Treat', n:'03', price:590, tint:'#DCC39C', shape:'dropper',
   line:'Step three — a concentrated moment of care before your cream.'},
  {id:'cream', name:'Nourishing Face Cream', size:'50 ml', step:'Nourish', n:'04', price:520, tint:'#EADDB8', shape:'jar',
   line:'Step four — complete your ritual with comfort and calm.'}
];
const byId = id => PRODUCTS.find(p=>p.id===id);
const egp = n => 'EGP ' + n.toLocaleString('en-US');

/* ---------- PRODUCT ARTWORK — drawn to match BASHRA's packaging references ---------- */
let gid=0;
const PAL={olive:'#48572D',sage:'#83955F',walnut:'#71421E',cream:'#EFDDBD',taupe:'#CCAD8E'};
const h2r=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const mix=(a,b,t)=>'#'+h2r(a).map((v,i)=>Math.round(v+(h2r(b)[i]-v)*t).toString(16).padStart(2,'0')).join('');
const dk=(c,t)=>mix(c,'#000000',t), lt=(c,t)=>mix(c,'#ffffff',t);
function cyl(id,c,k=1){
  const s=[[0,dk(c,.55*k)],[.05,dk(c,.3*k)],[.14,lt(c,.12*k)],[.22,lt(c,.34*k)],[.29,lt(c,.08*k)],[.5,c],[.76,dk(c,.16*k)],[.9,dk(c,.36*k)],[.955,lt(c,.08*k)],[1,dk(c,.5*k)]];
  return `<linearGradient id="${id}" x1="0" x2="1">${s.map(([o,col])=>`<stop offset="${o}" stop-color="${col}"/>`).join('')}</linearGradient>`;
}
const goldG=id=>`<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#5A4016"/><stop offset=".14" stop-color="#B8954E"/><stop offset=".25" stop-color="#F7E6AE"/><stop offset=".36" stop-color="#C9A55C"/><stop offset=".62" stop-color="#94712F"/><stop offset=".84" stop-color="#E3C77F"/><stop offset="1" stop-color="#5A4016"/></linearGradient>`;
const woodF=(id,seed)=>`<filter id="${id}" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency="0.5 0.02" numOctaves="3" seed="${seed}"/><feColorMatrix type="matrix" values="0 0 0 0 .14  0 0 0 0 .07  0 0 0 0 .02  0 0 0 2.6 -1.05"/><feComposite in2="SourceAlpha" operator="in"/></filter>`;
const frostF=id=>`<filter id="${id}" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="2" seed="4"/><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .7 -.22"/><feComposite in2="SourceAlpha" operator="in"/></filter>`;
const ridges=(x,y,w,h,step=3,o=.14)=>{let s='';for(let i=x+2;i<x+w-1;i+=step)s+=`<line x1="${i}" x2="${i}" y1="${y}" y2="${y+h}"/>`;return `<g stroke="#000" stroke-opacity="${o}" stroke-width=".55">${s}</g>`};
/* BASHRA leaf-sprig mark */
function mark(cx,y,s,c){
  const L=[[3,8.6,1],[6.5,5.2,-1],[10.5,2,1],[14.5,-1.6,-1],[18.6,-5,1]];
  return `<g transform="translate(${cx-11*s} ${y}) scale(${s})" fill="${c}"><path d="M0 12 C6 7 13 1 22 -8" stroke="${c}" stroke-width=".7" fill="none"/>${L.map(([x,yy,d])=>`<path d="M0 0 C2.2 -2.2 5.8 -2.2 8 0 C5.8 2.2 2.2 2.2 0 0Z" transform="translate(${x} ${yy}) rotate(${d>0?-95:15})"/>`).join('')}<path d="M0 0 C2.2 -2.2 5.8 -2.2 8 0 C5.8 2.2 2.2 2.2 0 0Z" transform="translate(21 -7.4) rotate(-40)"/></g>`;
}
/* text printed directly on the pack, vertical layout */
function printV(p,cx,top,w,c,acc,sizeY,tag){
  const [a,...r]=p.name.toUpperCase().split(' '),b=r.join(' ');
  const fs=Math.min(6.4,(w-10)/(Math.max(a.length,b.length)*.7)), bf=Math.min(15,w/5.4);
  return `${mark(cx,top,.95,acc)}
  <g text-anchor="middle" fill="${c}">
   <text x="${cx}" y="${top+31}" font-family="Cormorant Garamond,Georgia,serif" font-size="${bf}" letter-spacing="${bf*.16}" font-weight="500">BASHRA</text>
   <text x="${cx}" y="${top+39}" font-family="Jost,sans-serif" font-size="4.2" letter-spacing="2.1">SKINCARE</text>
   <line x1="${cx}" x2="${cx}" y1="${top+50}" y2="${top+88}" stroke="${acc}" stroke-width=".55"/>
   <text x="${cx}" y="${top+104}" font-family="Jost,sans-serif" font-size="${fs}" letter-spacing=".9">${a}</text>
   <text x="${cx}" y="${top+104+fs+3}" font-family="Jost,sans-serif" font-size="${fs}" letter-spacing=".9">${b}</text>
   ${tag?`<text x="${cx}" y="${top+126}" font-family="Jost,sans-serif" font-size="3.4" letter-spacing=".8" opacity=".8">${tag}</text>`:''}
   <text x="${cx}" y="${sizeY}" font-family="Jost,sans-serif" font-size="4.4" letter-spacing="1" opacity=".85">${p.size.toUpperCase()}</text>
  </g>`;
}
const spec=(x,y,w,h,u,o=.5)=>`<rect x="${x+w*.19}" y="${y+6}" width="${w*.065}" height="${h-14}" rx="${w*.03}" fill="#fff" opacity="${o}" filter="url(#${u}b)"/><rect x="${x+w*.85}" y="${y+12}" width="${w*.022}" height="${h-26}" fill="#fff" opacity="${o*.35}" filter="url(#${u}b)"/>`;
function bottle(p,{vb,shadow=true,reflect=false}={}){
  const u='b'+(gid++), CR='#ECDFC4', GD='#D2B26E', OL='#3E4A28', W='#6E4524';
  let defs=`<filter id="${u}b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.3"/></filter>
   <filter id="${u}s" x="-50%" y="-300%" width="200%" height="700%"><feGaussianBlur stdDeviation="6"/></filter>`;
  let b='';
  if(p.shape==='tube'){
    const T='#3F4B29';
    defs+=cyl(u+'T',T,.7)+cyl(u+'K','#2B3320',1.1);
    const body='M47 58 L153 58 C152 140 147 258 141 333 Q140 342 131 342 L69 342 Q60 342 59 333 C53 258 48 140 47 58Z';
    b=`<rect x="45" y="36" width="110" height="23" rx="2" fill="url(#${u}T)"/>${ridges(45,38,110,19,2.4,.2)}
      <rect x="45" y="56" width="110" height="2.5" fill="#000" opacity=".25"/>
      <path d="${body}" fill="url(#${u}T)"/>
      <path d="${body}" fill="none" stroke="#fff" stroke-opacity=".06"/>
      ${printV(p,100,96,96,CR,GD,326,'PURIFY · REFRESH · BALANCE')}
      ${spec(47,60,106,276,u,.22)}
      <path d="M67 340 L133 340 L131 349 L69 349Z" fill="#20261A"/>
      <rect x="63" y="347" width="74" height="33" rx="3" fill="url(#${u}K)"/>
      <rect x="63" y="357" width="74" height="1.2" fill="#000" opacity=".4"/>
      <rect x="92" y="347" width="16" height="5" rx="1" fill="#000" opacity=".3"/>
      <rect x="${63+74*.2}" y="349" width="4" height="29" rx="2" fill="#fff" opacity=".22" filter="url(#${u}b)"/>`;
  } else if(p.shape==='tall'){
    const F='#D3D6B9';
    defs+=cyl(u+'F',F,.55)+cyl(u+'W',W,1)+goldG(u+'G')+woodF(u+'w',7)+frostF(u+'f')+cyl(u+'L','#B7BC88',.6);
    const body='M56 130 Q56 110 78 110 L122 110 Q144 110 144 130 L144 364 Q144 378 130 378 L70 378 Q56 378 56 364Z';
    b=`<rect x="72" y="32" width="56" height="74" rx="5" fill="url(#${u}W)"/>
      <rect x="72" y="32" width="56" height="74" rx="5" fill="#000" filter="url(#${u}w)" opacity=".9"/>
      <rect x="74" y="33" width="52" height="3" rx="1.5" fill="#fff" opacity=".2"/>
      <rect x="72" y="104" width="56" height="5" fill="url(#${u}G)"/>
      <path d="${body}" fill="url(#${u}F)"/>
      <path d="M60 150 L140 150 L140 362 Q140 374 128 374 L72 374 Q60 374 60 362Z" fill="url(#${u}L)" opacity=".45"/>
      <rect x="60" y="149" width="80" height="2" fill="#fff" opacity=".4"/>
      <path d="${body}" fill="#000" filter="url(#${u}f)" opacity=".6"/>
      <path d="${body}" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.2"/>
      <rect x="60" y="364" width="80" height="11" rx="5" fill="#fff" opacity=".28"/>
      ${printV(p,100,140,88,OL,'#6F6A3C',354)}
      ${spec(56,112,88,262,u,.45)}`;
  } else if(p.shape==='dropper'){
    const G='#36421F';
    defs+=cyl(u+'B','#F2EDE3',.5)+goldG(u+'G')+cyl(u+'D',G,1.15);
    b=`<path d="M86 122 L86 82 Q86 58 100 58 Q114 58 114 82 L114 122Z" fill="url(#${u}B)"/>
      <ellipse cx="95" cy="74" rx="3" ry="8" fill="#fff" opacity=".6" filter="url(#${u}b)"/>
      <rect x="76" y="118" width="48" height="50" rx="3" fill="url(#${u}G)"/>
      <rect x="76" y="127" width="48" height="1" fill="#000" opacity=".22"/><rect x="76" y="158" width="48" height="1" fill="#000" opacity=".22"/>
      <rect x="58" y="166" width="84" height="212" rx="16" fill="url(#${u}D)"/>
      <ellipse cx="100" cy="172" rx="34" ry="4" fill="#fff" opacity=".18" filter="url(#${u}b)"/>
      <rect x="96" y="172" width="8" height="166" rx="4" fill="#fff" opacity=".06"/>
      ${printV(p,100,198,82,CR,GD,364)}
      ${spec(58,168,84,206,u,.6)}`;
  } else {
    const I='#EFE6D1';
    defs+=cyl(u+'I',I,.6)+cyl(u+'W',W,1)+woodF(u+'w',11);
    b=`<rect x="34" y="284" width="132" height="94" rx="12" fill="url(#${u}I)"/>
      <rect x="34" y="284" width="132" height="5" fill="#000" opacity=".14"/>
      <rect x="30" y="226" width="140" height="60" rx="7" fill="url(#${u}W)"/>
      <rect x="30" y="226" width="140" height="60" rx="7" fill="#000" filter="url(#${u}w)" opacity=".9"/>
      <rect x="33" y="227" width="134" height="3" rx="1.5" fill="#fff" opacity=".22"/>
      ${mark(70,302,.68,OL)}
      <g fill="${OL}" text-anchor="middle"><text x="70" y="330" font-family="Cormorant Garamond,Georgia,serif" font-size="12" letter-spacing="1.9" font-weight="500">BASHRA</text><text x="70" y="337" font-family="Jost,sans-serif" font-size="3.6" letter-spacing="1.8">SKINCARE</text></g>
      <line x1="104" x2="104" y1="298" y2="352" stroke="${OL}" stroke-width=".5" opacity=".6"/>
      <g fill="${OL}" text-anchor="middle" font-family="Jost,sans-serif"><text x="135" y="318" font-size="5.6" letter-spacing=".8">NOURISHING</text><text x="135" y="326.5" font-size="5.6" letter-spacing=".8">FACE CREAM</text><text x="135" y="350" font-size="4.2" letter-spacing="1">${p.size.toUpperCase()}</text></g>
      ${spec(34,286,132,90,u,.45)}`;
  }
  const sw={tube:52,tall:50,dropper:46,jar:72}[p.shape];
  const fl=shadow?`<ellipse cx="100" cy="383" rx="${sw+20}" ry="10" fill="#1a1a0c" opacity=".24" filter="url(#${u}s)"/><ellipse cx="100" cy="378.5" rx="${sw}" ry="3.5" fill="#000" opacity=".42" filter="url(#${u}b)"/>`:'';
  let refl='';
  if(reflect){
    defs+=`<linearGradient id="${u}m" x1="0" y1="378" x2="0" y2="460" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".75" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="${u}k" maskUnits="userSpaceOnUse" x="0" y="378" width="200" height="90"><rect x="0" y="378" width="200" height="90" fill="url(#${u}m)"/></mask>`;
    refl=`<g mask="url(#${u}k)"><use href="#${u}p" transform="translate(0 756) scale(1 -1)"/></g>`;
  }
  return `<svg viewBox="${vb||(reflect?'0 0 200 460':'0 0 200 400')}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} ${p.size}"><defs>${defs}</defs>${refl}${fl}<g id="${u}p">${b}</g></svg>`;
}
function sprig(c='#48572D',o=.5,rot=0){
  const leaves=[[100,330,-38],[100,300,38],[101,268,-42],[100,236,40],[98,204,-44],[97,172,42],[96,142,-46],[96,114,30]];
  return `<svg viewBox="0 0 200 400" style="transform:rotate(${rot}deg)"><g opacity="${o}">
   <path d="M100 392 C 98 300 106 220 96 96" stroke="${c}" stroke-width="1.4" fill="none"/>
   ${leaves.map(([x,y,a],i)=>`<path d="M0 0 C 12 -13 34 -13 46 0 C 34 13 12 13 0 0Z" transform="translate(${x} ${y}) rotate(${a<0?180+a:a}) scale(${1-i*.06})" fill="${c}"/>`).join('')}
  </g></svg>`;
}
const BOTS=[ // abstract botanical line drawings for the ingredients page
 c=>`<path d="M60 150 C 60 100 60 60 60 20" stroke="${c}" fill="none"/><circle cx="60" cy="40" r="16" fill="none" stroke="${c}"/><circle cx="60" cy="40" r="6" fill="${c}" opacity=".4"/>${[0,60,120,180,240,300].map(a=>`<ellipse cx="60" cy="18" rx="7" ry="13" transform="rotate(${a} 60 40)" fill="none" stroke="${c}"/>`).join('')}`,
 c=>`<path d="M60 155 C 58 110 66 70 56 10" stroke="${c}" fill="none"/>${[[60,130,-40],[60,110,40],[61,90,-44],[59,70,42],[58,50,-46],[57,32,40]].map(([x,y,a])=>`<path d="M0 0 C 8 -8 22 -8 30 0 C 22 8 8 8 0 0Z" transform="translate(${x} ${y}) rotate(${a<0?180+a:a})" fill="none" stroke="${c}"/>`).join('')}`,
 c=>`<path d="M60 155 L60 60" stroke="${c}"/><path d="M60 60 C 20 50 20 10 60 5 C 100 10 100 50 60 60Z" fill="none" stroke="${c}"/><path d="M60 60 L60 10" stroke="${c}" opacity=".5"/>${[20,30,40,50].map(y=>`<path d="M60 ${y} L${44+y/4} ${y-8} M60 ${y} L${76-y/4} ${y-8}" stroke="${c}" opacity=".5"/>`).join('')}`,
 c=>`<path d="M60 155 C 60 120 40 100 40 70 M60 155 C 60 120 80 100 80 70 M60 155 L60 60" stroke="${c}" fill="none"/>${[[40,62],[80,62],[60,52]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="${c}"/><circle cx="${x}" cy="${y}" r="3" fill="${c}" opacity=".45"/>`).join('')}`,
 c=>`<path d="M60 155 C 60 100 50 70 60 20" stroke="${c}" fill="none"/>${[30,50,70,90,110].map((y,i)=>`<path d="M60 ${y} q ${i%2?28:-28} -6 ${i%2?36:-36} -24" stroke="${c}" fill="none"/>`).join('')}`,
 c=>`<ellipse cx="60" cy="70" rx="36" ry="52" fill="none" stroke="${c}"/><path d="M60 18 L60 155" stroke="${c}"/>${[40,60,80,100].map(y=>`<path d="M60 ${y} L${32} ${y-14} M60 ${y} L${88} ${y-14}" stroke="${c}" opacity=".6"/>`).join('')}`
];

/* ---------- CART (prototype — stored only in this browser) ---------- */
let cart={};
try{cart=JSON.parse(localStorage.getItem('bashra-cart')||'{}')||{}}catch(e){cart={}}
const save=()=>{try{localStorage.setItem('bashra-cart',JSON.stringify(cart))}catch(e){}};
const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const subtotal=()=>Object.entries(cart).reduce((s,[id,q])=>s+(byId(id)?.price||0)*q,0);
function addToCart(id,q=1){cart[id]=(cart[id]||0)+q;save();updateCart(true);toast(`${byId(id).name} added to your bag`);openCart()}
function setQty(id,q){if(q<=0)delete cart[id];else cart[id]=q;save();updateCart()}
function cartLines(compact){
  const ids=Object.keys(cart).filter(byId);
  if(!ids.length) return `<div class="empty"><h3>Your bag is empty</h3><p style="color:var(--sage);margin-bottom:24px">Begin your ritual with our four essentials.</p><a class="btn" href="#shop">Shop the collection <span class="arr">→</span></a></div>`;
  return ids.map(id=>{const p=byId(id),q=cart[id];return `<div class="cl">
    <a href="#product-${p.id}" class="cl-m" style="--tint:${p.tint}"><div class="bw">${bottle(p,{shadow:false})}</div></a>
    <div><h4>${p.name}</h4><div class="sz">${p.size}</div>
      <div class="qty"><button data-q="${id}" data-d="-1" aria-label="Decrease">−</button><span>${q}</span><button data-q="${id}" data-d="1" aria-label="Increase">+</button></div>
      <button class="rm" data-rm="${id}">Remove</button></div>
    <div class="price">${egp(p.price*q)}</div></div>`}).join('');
}
function updateCart(bump){
  const b=document.getElementById('badge'),c=count();
  b.textContent=c;b.classList.toggle('show',c>0);
  if(bump){b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')}
  document.getElementById('drB').innerHTML=cartLines(true);
  document.getElementById('drF').innerHTML=c?`<div class="sum-r"><span>Subtotal</span><span>${egp(subtotal())}</span></div>
    <p class="note" style="margin:0 0 6px">Sample prices · delivery calculated at checkout.</p>
    <button class="btn block" data-checkout>Checkout <span class="arr">→</span></button>
    <a class="btn ghost block" href="#cart">View full bag</a>`:'';
  if(route().name==='cart') renderCartPage();
}
function openCart(){drawer.classList.add('open');scrim.classList.add('on');document.body.classList.add('lock')}
function closeCart(){drawer.classList.remove('open');scrim.classList.remove('on');if(!mm.classList.contains('open'))document.body.classList.remove('lock')}
let tt;function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2400)}

/* ---------- VIEWS ---------- */
const card=p=>`<article class="card rv" data-step="${p.step}">
  <a href="#product-${p.id}" class="card-m tilt" style="--tint:${p.tint}" aria-label="${p.name}">
    <div class="arch-line"></div><span class="card-step">${p.n} · ${p.step}</span>
    <div class="inner"><div class="bw">${bottle(p)}</div></div>
  </a>
  <button class="qa" data-add="${p.id}">Add to bag — ${egp(p.price)}</button>
  <div class="card-i"><div><h3><a href="#product-${p.id}">${p.name}</a></h3><div class="sz">${p.size}</div></div><div class="price">${egp(p.price)}</div></div>
</article>`;

function vHome(){
  const pos=[{id:'toner',l:35,w:35,b:13,d:.4},{id:'serum',l:8,w:29,b:12,d:.6},{id:'cleanser',l:58,w:33,b:6,d:.9},{id:'cream',l:16,w:43,b:1,d:1.2}];
  return `
  <section class="hero wrap">
    <div class="hero-bgword">BASHRA</div>
    <div class="hero-copy">
      <p class="eyebrow rv">Nature meets science</p>
      <h1 class="hero-h rv"><span class="ln"><span>Nature's care</span></span><span class="ln"><span><em>for your</em> skin.</span></span></h1>
      <p class="lead rv d1">A four-step skincare ritual from Egypt — calm, considered and made to be part of your everyday.</p>
      <div class="cta rv d2"><a class="btn" href="#shop">Shop now <span class="arr">→</span></a><a class="tlink" href="#rituals">Discover the ritual</a><button class="tlink" data-film>▶ Watch the film</button></div>
    </div>
    <div class="hero-stage rv d1" id="stage">
      <div class="hero-ring"></div>
      <div class="arch hero-arch"><div class="hero-par" id="heroPar"><img class="hero-img" src="assets/images/hero.jpg" alt="BASHRA Gentle Face Cleanser, Radiant Skin Toner, Nourishing Face Cream and Revitalizing Face Serum on natural stone"></div></div>
      <div class="hero-chip"><b>04</b><span>Essentials<br>The Ritual Collection</span></div>
      <div class="hero-cap"><span>Cleanse · Tone · Treat · Nourish</span><span>Made in Egypt</span></div>
    </div>
    <div class="scroll-cue"><i></i>Scroll</div>
  </section>

  <div class="mq" aria-hidden="true"><div class="mq-t">${('<span>Nature meets science</span><span>Nature\'s care for your skin</span><span>BASHRA Skincare</span>').repeat(4)}</div></div>

  <section class="section wrap phil">
    <p class="eyebrow rv">Our philosophy</p>
    <h2 class="phil-h rv"><span class="nat">Nature</span><small>meets</small><span class="sci">Science</span></h2>
    <div class="phil-cols">
      <div class="phil-col rv"><span class="num">I</span><div><h3>Nature</h3><p>Our inspiration — the calm of botanicals and the warmth of Egyptian earth, reflected in every colour, texture and detail of BASHRA.</p></div></div>
      <div class="phil-col rv d1"><span class="num">II</span><div><h3>Science</h3><p>Our method — a considered, step-by-step approach to care. Four essentials, each with its own place in your daily ritual.</p></div></div>
    </div>
  </section>

  <section class="studio">
    <div class="studio-copy">
      <p class="eyebrow rv" style="color:var(--taupe)">BASHRA Skincare Rituals</p>
      <h2 class="rv">Nature's care,<br><em>beautifully kept.</em></h2>
      <p class="rv d1">Gentle Face Cleanser, Radiant Skin Toner, Revitalizing Face Serum and Nourishing Face Cream — four essentials, created to live together as one daily ritual.</p>
      <a class="btn light rv d2" href="#shop">Explore the collection <span class="arr">→</span></a>
    </div>
    <div class="studio-img rv"><img src="assets/images/studio.jpg" alt="BASHRA cleanser, toner and cream on stone against a deep olive background" loading="lazy"></div>
  </section>

  <section class="wrap" style="padding-top:clamp(90px,12vw,170px);padding-bottom:clamp(90px,12vw,170px)">
    <div class="sh"><h2 class="rv">The <em>Collection</em></h2><a class="tlink rv" href="#shop">View all products</a></div>
    <div class="feats">
      ${PRODUCTS.map(p=>`<article class="feat">
        <a href="#product-${p.id}" class="feat-media tilt rv"><div class="arch feat-arch" style="--tint:${p.tint}"><div class="bw">${bottle(p)}</div></div><span class="feat-n">${p.n}</span></a>
        <div class="feat-copy rv d1">
          <p class="eyebrow">Step ${p.n} — ${p.step}</p>
          <h3>${p.name}</h3>
          <p class="d">${p.line}</p>
          <p class="meta">${p.size} · ${egp(p.price)}</p>
          <div class="feat-act"><button class="btn" data-add="${p.id}">Add to bag</button><a class="tlink" href="#product-${p.id}">Discover</a></div>
        </div></article>`).join('')}
    </div>
  </section>

  <section class="section rit">
    <div class="wrap">
      <div class="sh"><div><p class="eyebrow rv">The daily ritual</p><h2 class="rv" style="margin-top:12px">Four steps. <em>One ritual.</em></h2></div><a class="tlink rv" href="#rituals">Explore rituals</a></div>
      <div class="rit-grid">
        ${PRODUCTS.map((p,i)=>`<a href="#product-${p.id}" class="rit-c rv d${i}"><span class="no">${p.n} / 04</span><span class="st">${p.step}</span><span class="pn">${p.name}</span><div class="bw">${bottle(p)}</div></a>`).join('')}
      </div>
    </div>
  </section>

  <section class="section wrap stmt">
    <p class="eyebrow rv">Our belief</p>
    <h2 class="rv">Luxury should feel <em>calm</em>, warm, and always within reach.</h2>
    <a class="btn ghost rv" href="#story">Read our story <span class="arr">→</span></a>
  </section>`;
}

function vShop(){
  const steps=['All',...PRODUCTS.map(p=>p.step)];
  return `<section class="wrap ph">
    <p class="eyebrow rv">Shop all · ${PRODUCTS.length} essentials</p>
    <h1 class="rv"><span class="ln"><span>The <em>Collection</em></span></span></h1>
  </section>
  <section class="wrap" style="padding-bottom:clamp(80px,10vw,140px)">
    <div class="chips rv">${steps.map((s,i)=>`<button class="chip ${i?'':'on'}" data-filter="${s}">${s}</button>`).join('')}</div>
    <div class="grid g4" id="grid">${PRODUCTS.map(card).join('')}</div>
    <p class="note" style="margin-top:40px">Prices shown are sample prices for this prototype.</p>
  </section>`;
}

function galleryViews(p){
  return [
    {k:'Front',h:`<div style="width:44%">${bottle(p)}</div>`},
    {k:'Photo',h:`<img src="assets/images/life-${p.id}.jpg" alt="${p.name} — product photography" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`},
    {k:'Label',h:`<div style="width:62%">${bottle(p,{vb:{tube:'30 70 140 280',tall:'40 110 120 260',dropper:'40 170 120 210',jar:'30 220 140 160'}[p.shape],shadow:false})}</div>`},
    {k:'Ritual',h:`<div style="position:absolute;inset:0;background:radial-gradient(90% 70% at 50% 40%,#A9BD76,var(--olive))"></div><div style="position:absolute;left:4%;bottom:0;width:44%">${sprig('#EFDDBD',.3,-10)}</div><div style="position:absolute;right:2%;bottom:0;width:40%">${sprig('#EFDDBD',.22,12)}</div><div style="width:40%;position:relative">${bottle(p)}</div>`}
  ];
}
function vProduct(id){
  const p=byId(id); if(!p) return vShop();
  const views=galleryViews(p);
  const others=PRODUCTS.filter(x=>x.id!==id);
  const pending='To be added from BASHRA\'s official product information.';
  return `<div class="wrap">
    <div class="crumb"><a href="#home">Home</a> / <a href="#shop">Shop</a> / ${p.name}</div>
    <div class="pd">
      <div class="rv">
        <div class="gal-main" id="gal" style="--tint:${p.tint}">
          ${views.map((v,i)=>`<div class="gal-v ${i?'':'on'}">${v.h}</div>`).join('')}
          <button class="gal-nav p" data-gal="-1" aria-label="Previous image">←</button><button class="gal-nav n" data-gal="1" aria-label="Next image">→</button>
          <div class="gal-dots">${views.map((v,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>
        </div>
        <div class="thumbs" style="--tint:${p.tint}">${views.map((v,i)=>`<button class="thumb ${i?'':'on'}" data-thumb="${i}" aria-label="${v.k} view"><div style="position:absolute;inset:0;display:grid;place-items:center;transform:scale(.9)">${v.h}</div><span>${v.k}</span></button>`).join('')}</div>
        <p class="photo-note">Studio renders and photography based on BASHRA packaging designs.</p>
      </div>
      <div class="pi rv d1">
        <p class="eyebrow">Step ${p.n} — ${p.step}</p>
        <h1>${p.name}</h1>
        <div class="sz">${p.size}</div>
        <div class="pp">${egp(p.price)} <span class="proto-tag">Sample price</span></div>
        <p class="line">${p.line}</p>
        <div class="rpos">${PRODUCTS.map(x=>`<a href="#product-${x.id}" class="${x.id===id?'on':''}">${x.n} ${x.step}</a>`).join('')}</div>
        <div class="buy"><div class="qty"><button data-pq="-1" aria-label="Decrease">−</button><span id="pq">1</span><button data-pq="1" aria-label="Increase">+</button></div>
          <button class="btn" data-add-q="${p.id}">Add to bag <span class="arr">→</span></button></div>
        <p class="note">Prototype: stock and delivery options will be connected in the live store.</p>
        <div class="acc">
          <div class="acc-i open"><button class="acc-h">Description<i></i></button><div class="acc-b"><div><p><span class="pending">Full product description — ${pending}</span></p></div></div></div>
          <div class="acc-i"><button class="acc-h">How to use<i></i></button><div class="acc-b"><div><p>${p.name} is step ${p.n} of the BASHRA ritual (${PRODUCTS.map(x=>x.step).join(' → ')}).<br><br><span class="pending">Directions for use — ${pending}</span></p></div></div></div>
          <div class="acc-i"><button class="acc-h">Ingredients<i></i></button><div class="acc-b"><div><p><span class="pending">Full ingredient list (INCI) — ${pending}</span></p></div></div></div>
        </div>
      </div>
    </div>
  </div>
  <section class="wrap" style="padding-bottom:clamp(80px,10vw,140px)">
    <div class="sh"><h2 class="rv" style="font-size:clamp(2.2rem,5vw,3.8rem)">Complete <em>your ritual</em></h2></div>
    <div class="grid g3">${others.map(card).join('')}</div>
  </section>`;
}

function vStory(){
  return `<section class="wrap ph">
    <p class="eyebrow rv">Our story</p>
    <h1 class="rv"><span class="ln"><span>Where <em>nature</em></span></span><span class="ln"><span>meets science.</span></span></h1>
    <p class="lead rv d1">BASHRA is an Egyptian skincare brand built on a simple belief: everyday care can be elegant, natural and calm — without ever feeling complicated.</p>
  </section>
  <section class="wrap" style="padding-bottom:clamp(80px,10vw,140px)">
    <div class="chap">
      <div class="cn rv">I</div>
      <div class="rv"><p class="eyebrow">Philosophy</p><h2 style="margin-top:12px">Nature meets science</h2><p>We draw our inspiration from nature — its colours, its calm, its rhythm — and pair it with a clear, structured way of caring for skin.</p><p>The result is a ritual of four essentials, each designed to take its own place in your day.</p></div>
      <div class="chap-v arch rv d1"><img src="assets/images/hero.jpg" alt="BASHRA ritual collection" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 70%"></div>
    </div>
    <div class="chap">
      <div class="cn rv">II</div>
      <div class="rv"><p class="eyebrow">Our promise</p><h2 style="margin-top:12px">Luxury, made accessible</h2><p>We believe premium care should feel warm and welcoming — never intimidating. Considered design, honest presentation and a ritual that is easy to follow.</p></div>
      <div class="chap-v rv d1" style="--tint:#333520"><img src="assets/images/studio.jpg" alt="BASHRA products on stone" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>
    </div>
    <div class="chap">
      <div class="cn rv">III</div>
      <div class="rv"><p class="eyebrow">Our roots</p><h2 style="margin-top:12px">Made in Egypt, for you</h2><p>BASHRA is proudly Egyptian — created to stand among international skincare brands while staying true to its own identity.</p>
        <p><span class="pending">Founder's story, brand origin and the meaning behind the name BASHRA — to be written with you.</span></p></div>
      <div class="chap-v arch rv d1" style="--tint:var(--walnut)"><div style="position:absolute;inset:0;display:grid;place-items:center;color:var(--cream);font-family:'Cormorant Garamond';font-size:clamp(2rem,5vw,3.4rem);letter-spacing:.2em;padding-left:.2em">BASHRA</div></div>
    </div>
  </section>`;
}

function vIngredients(){
  return `<section class="wrap ph">
    <p class="eyebrow rv">Botanical ingredients</p>
    <h1 class="rv"><span class="ln"><span>The <em>Botanical</em></span></span><span class="ln"><span>Library.</span></span></h1>
    <p class="lead rv d1">A considered look at what goes into every BASHRA formula — where it comes from and why it has a place in your ritual.</p>
    <figure class="bot-hero rv d2"><img src="assets/images/botanicals.jpg" alt="Botanical illustrations of leaves and branches" loading="lazy"><figcaption>Botanical studies</figcaption></figure>
  </section>
  <section class="wrap" style="padding-bottom:clamp(80px,10vw,140px)">
    <div class="banner rv"><div><b>Content in progress</b>Ingredient names, origins and roles will be added only from BASHRA's verified formulas. The layout below is ready for them.</div></div>
    <div class="ing-grid">
      ${BOTS.map((f,i)=>`<article class="ing rv d${i%3}">
        <svg class="bot" viewBox="0 0 120 160" fill="none" stroke-width="1">${f(i%2?'#71421E':'#48572D')}</svg>
        <p class="k">Botanical ${String(i+1).padStart(2,'0')}</p>
        <h3>Ingredient name</h3>
        <p style="color:var(--sage);margin-top:8px;font-style:italic">Origin, role in the formula, and which BASHRA products feature it.</p>
      </article>`).join('')}
    </div>
  </section>`;
}

function vRituals(){
  return `<section class="wrap ph">
    <p class="eyebrow rv">Skincare rituals</p>
    <h1 class="rv"><span class="ln"><span>Your <em>daily</em></span></span><span class="ln"><span>ritual.</span></span></h1>
    <p class="lead rv d1">Four essentials, one simple order. Each step prepares your skin for the next.</p>
  </section>
  <section class="wrap" style="padding-bottom:clamp(80px,10vw,140px)">
    <div class="steps">
      ${PRODUCTS.map(p=>`<div class="stp rv">
        <div class="dot">${p.n}</div>
        <h3>${p.step}</h3>
        <div class="body"><p class="eyebrow" style="color:var(--walnut)">${p.name} · ${p.size}</p><p style="margin:10px 0 18px;color:#434933">${p.line}</p><a class="tlink" href="#product-${p.id}">View product</a></div>
        <a href="#product-${p.id}" class="vis arch" style="--tint:${p.tint}"><div class="bw">${bottle(p)}</div></a>
      </div>`).join('')}
    </div>
    <div class="notes">
      <div class="rv"><h4>Follow the pack</h4><p style="color:#434933">Always follow the directions printed on each BASHRA product for amount and frequency.</p></div>
      <div class="rv d1"><h4>Try it first</h4><p style="color:#434933">When introducing any new skincare product, a patch test on a small area of skin is a good habit.</p></div>
    </div>
    <div style="text-align:center;margin-top:70px" class="rv"><button class="btn" data-add-all>Add the full ritual to bag <span class="arr">→</span></button></div>
  </section>`;
}

function vContact(){
  return `<section class="wrap ph">
    <p class="eyebrow rv">Contact us</p>
    <h1 class="rv"><span class="ln"><span>Let's <em>talk</em>.</span></span></h1>
    <p class="lead rv d1">Questions about a product, an order or your ritual? We'd love to hear from you.</p>
  </section>
  <section class="wrap ct">
    <form class="rv" id="cform" novalidate>
      <div class="fld"><input id="f1" placeholder=" " required><label for="f1">Your name</label></div>
      <div class="fld"><input id="f2" type="email" placeholder=" " required><label for="f2">Email address</label></div>
      <div class="fld"><input id="f3" type="tel" placeholder=" "><label for="f3">Phone (optional)</label></div>
      <div class="fld"><textarea id="f4" placeholder=" " required></textarea><label for="f4">Your message</label></div>
      <button class="btn">Send message <span class="arr">→</span></button>
      <div class="form-msg" id="fmsg"></div>
    </form>
    <div class="rv d1">
      <div class="chan"><div class="k">Email</div><div class="v"><span class="pending" style="font-size:1rem">Add BASHRA email</span></div></div>
      <div class="chan"><div class="k">WhatsApp</div><div class="v"><span class="pending" style="font-size:1rem">Add WhatsApp number</span></div></div>
      <div class="chan"><div class="k">Instagram</div><div class="v"><span class="pending" style="font-size:1rem">Add @handle</span></div></div>
      <div class="chan" style="border-bottom:1px solid var(--line)"><div class="k">Based in</div><div class="v">Egypt</div></div>
    </div>
  </section>`;
}

function vCart(){
  return `<section class="wrap ph" style="padding-bottom:30px"><p class="eyebrow rv">Shopping bag</p><h1 class="rv"><span class="ln"><span>Your <em>Bag</em></span></span></h1></section>
  <section class="wrap" id="cartpg"></section>`;
}
function renderCartPage(){
  const el=document.getElementById('cartpg'); if(!el) return;
  const c=count();
  el.innerHTML=c?`<div class="cartpg"><div>${cartLines()}</div>
    <div class="sum"><h3 style="font-size:1.9rem;color:var(--olive);margin-bottom:12px">Summary</h3>
      <div class="sum-r"><span>Items</span><span>${c}</span></div>
      <div class="sum-r"><span>Subtotal</span><span>${egp(subtotal())}</span></div>
      <div class="sum-r"><span>Delivery</span><span style="color:var(--sage)">At checkout</span></div>
      <div class="sum-r t"><span>Total</span><span>${egp(subtotal())}</span></div>
      <button class="btn block" data-checkout style="margin-top:18px">Checkout <span class="arr">→</span></button>
      <p class="note">Prototype: sample prices. Payment &amp; delivery require future integration.</p></div></div>`
   :`<div style="padding-bottom:clamp(80px,10vw,140px)">${cartLines()}</div>`;
}

/* ---------- ROUTER + TRANSITIONS ---------- */
const app=document.getElementById('app'),pt=document.getElementById('pt'),hdr=document.getElementById('hdr');
const drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim'),mm=document.getElementById('mm');
function route(){const h=(location.hash||'#home').slice(1);if(h.startsWith('product-'))return{name:'product',id:h.slice(8)};return{name:['home','shop','story','ingredients','rituals','contact','cart'].includes(h)?h:'home'}}
const TITLES={home:"Nature's Care For Your Skin",shop:'Shop All',story:'Our Story',ingredients:'Botanical Ingredients',rituals:'Skincare Rituals',contact:'Contact Us',cart:'Your Bag'};
function render(){
  const r=route();
  app.innerHTML=r.name==='product'?vProduct(r.id):({home:vHome,shop:vShop,story:vStory,ingredients:vIngredients,rituals:vRituals,contact:vContact,cart:vCart}[r.name])();
  document.title='BASHRA — '+(r.name==='product'?(byId(r.id)?.name||'Shop'):TITLES[r.name]);
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('on',a.dataset.r===r.name||(r.name==='product'&&a.dataset.r==='shop')));
  if(r.name==='cart')renderCartPage();
  document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);document.documentElement.style.scrollBehavior='';
  initPage();
}
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let first=true,busy=false;
function navigate(){
  closeCart();closeMenu();
  if(first||reduce){first=false;render();return}
  if(busy)return;busy=true;
  pt.className='pt on';
  setTimeout(()=>{render();pt.className='pt off';setTimeout(()=>{pt.className='pt';busy=false},650)},520);
}
addEventListener('hashchange',navigate);

/* ---------- PAGE BEHAVIOUR ---------- */
let io;
function initPage(){
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  // tilt cards (only on devices with a mouse)
  if(matchMedia('(hover:hover)').matches&&!reduce){
    document.querySelectorAll('.tilt').forEach(el=>{
      el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        el.style.transform=`perspective(1000px) rotateY(${x*7}deg) rotateX(${-y*7}deg)`;el.style.setProperty('--mx',x*2);el.style.setProperty('--my',y*2)});
      el.addEventListener('pointerleave',()=>{el.style.transform='';el.style.setProperty('--mx',0);el.style.setProperty('--my',0)});
    });
  }
  // hero parallax
  const stage=document.getElementById('stage');
  if(stage&&!reduce){
    const hbs=[...stage.querySelectorAll('.hb')];
    const move=(x,y)=>hbs.forEach(b=>{const d=+b.dataset.depth;b.style.transform=`translate3d(${x*d*18}px,${y*d*12}px,0)`});
    if(matchMedia('(hover:hover)').matches) stage.closest('.hero').addEventListener('pointermove',e=>move(e.clientX/innerWidth-.5,e.clientY/innerHeight-.5));
  }
  // gallery
  const gal=document.getElementById('gal');
  if(gal){
    let gi=0;const vs=gal.querySelectorAll('.gal-v'),ds=gal.querySelectorAll('.gal-dots i'),ts=document.querySelectorAll('.thumb');
    const go=i=>{gi=(i+vs.length)%vs.length;[vs,ds,ts].forEach(l=>l.forEach((el,k)=>el.classList.toggle('on',k===gi)))};
    gal.querySelectorAll('[data-gal]').forEach(b=>b.onclick=()=>go(gi+ +b.dataset.gal));
    ts.forEach(t=>t.onclick=()=>go(+t.dataset.thumb));
    let sx=null;gal.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
    gal.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(gi+(dx<0?1:-1));sx=null});
  }
  // contact form (prototype)
  const cf=document.getElementById('cform');
  if(cf)cf.onsubmit=e=>{e.preventDefault();const m=document.getElementById('fmsg');
    const ok=cf.f1.value.trim()&&/\S+@\S+\.\S+/.test(cf.f2.value)&&cf.f4.value.trim();
    m.classList.add('show');m.textContent=ok?'Thank you. This is a prototype — the form is not connected yet, so your message was not sent. In the live website it will be delivered to the BASHRA team.':'Please add your name, a valid email and a message.'};
}

/* scroll: header style + gentle hero parallax on touch */
let ticking=false;
addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{
  hdr.classList.toggle('solid',scrollY>30);
  const st=document.getElementById('stage');
  if(st&&!reduce&&!matchMedia('(hover:hover)').matches){st.querySelectorAll('.hb').forEach(b=>{b.style.transform=`translate3d(0,${-scrollY*.08*b.dataset.depth}px,0)`})}
  ticking=false})},{passive:true});

/* global clicks */
let pq=1;
document.addEventListener('click',e=>{
  const t=e.target.closest('button,a');if(!t)return;
  if('filmClose' in t.dataset){closeFilm()}
  else if('film' in t.dataset){playFilm()}
  else if(t.dataset.add){e.preventDefault();addToCart(t.dataset.add)}
  else if(t.dataset.addQ){addToCart(t.dataset.addQ,+document.getElementById('pq').textContent)}
  else if(t.dataset.pq){const s=document.getElementById('pq');s.textContent=Math.max(1,Math.min(9,+s.textContent+ +t.dataset.pq))}
  else if('addAll' in t.dataset){PRODUCTS.forEach(p=>cart[p.id]=(cart[p.id]||0)+1);save();updateCart(true);toast('The full ritual is in your bag');openCart()}
  else if(t.dataset.q){setQty(t.dataset.q,(cart[t.dataset.q]||0)+ +t.dataset.d)}
  else if(t.dataset.rm){setQty(t.dataset.rm,0)}
  else if('openCart' in t.dataset){openCart()}
  else if('closeCart' in t.dataset){closeCart()}
  else if('checkout' in t.dataset){document.getElementById('modal').classList.add('on');scrim.classList.add('on')}
  else if('closeModal' in t.dataset){document.getElementById('modal').classList.remove('on');if(!drawer.classList.contains('open'))scrim.classList.remove('on')}
  else if(t.dataset.filter){document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===t));
    document.querySelectorAll('#grid .card').forEach(c=>c.classList.toggle('hide',t.dataset.filter!=='All'&&c.dataset.step!==t.dataset.filter))}
  else if(t.classList.contains('acc-h')){t.parentElement.classList.toggle('open')}
  else if(t.getAttribute('href')===location.hash&&t.tagName==='A'){closeMenu();closeCart()}
});
scrim.onclick=()=>{closeCart();document.getElementById('modal').classList.remove('on')};
document.getElementById('modal').onclick=e=>{if(e.target.id==='modal'){e.currentTarget.classList.remove('on');if(!drawer.classList.contains('open'))scrim.classList.remove('on')}};
addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeMenu();document.getElementById('modal').classList.remove('on')}});

/* menu */
function openMenu(){mm.classList.add('open');mm.setAttribute('aria-hidden','false');document.body.classList.add('lock')}
function closeMenu(){mm.classList.remove('open');mm.setAttribute('aria-hidden','true');if(!drawer.classList.contains('open'))document.body.classList.remove('lock')}
document.getElementById('burger').onclick=openMenu;
document.getElementById('mmClose').onclick=closeMenu;

/* newsletter (prototype) */
document.getElementById('nl').onsubmit=e=>{e.preventDefault();document.getElementById('nlMsg').textContent='Thank you! (Prototype — sign-ups will be connected to an email service in the live site.)';e.target.reset()};

/* ---------- INTRO FILM ---------- */
const FILM_BG={
  cleanser:'radial-gradient(70% 70% at 50% 45%,#F6E9CD 0%,#D2B48B 50%,#7C5E3E 100%)',
  toner:'radial-gradient(70% 70% at 50% 45%,#86A057 0%,#43582A 48%,#141B08 100%)',
  serum:'radial-gradient(70% 70% at 50% 45%,#E8C597 0%,#A57447 46%,#3A2210 100%)',
  cream:'radial-gradient(70% 70% at 50% 45%,#A3B872 0%,#5A7036 46%,#1E2810 100%)'
};
const film=document.getElementById('film');
document.getElementById('fprods').innerHTML=PRODUCTS.map((p,i)=>`<div class="f-sc f-prod ${i%2?'alt':''} ${p.id==='cleanser'?'light':''}" data-bg="${FILM_BG[p.id]}" data-count="${p.n} / 04">
  <div class="f-num">${p.n}</div><div class="f-glow"></div>
  <div class="f-b"><div>${bottle(p,{reflect:true})}</div></div>
  <div class="f-cap"><p class="e">Step ${p.n} — ${p.step}</p><h2>${p.name.replace(/^(\S+)/,'<em>$1</em>')}</h2><p class="s">${p.size}</p></div>
  <div class="f-sweep"></div></div>`).join('');
document.getElementById('frow').innerHTML=['serum','toner','cream','cleanser'].map(id=>`<div>${bottle(byId(id),{reflect:true})}</div>`).join('');
const FDUR=[2600,3000,2300,2300,2300,2300,5200];
let ftimers=[],fbgFlip=false,dustOn=false;
function setFilmBg(bg){const a=document.getElementById('fbgA'),b=document.getElementById('fbgB');const n=fbgFlip?a:b,o=fbgFlip?b:a;n.style.background=bg;n.classList.add('on');o.classList.remove('on');fbgFlip=!fbgFlip}
function dust(){
  const c=document.getElementById('fdust'),x=c.getContext('2d');let W,H;const d=Math.min(devicePixelRatio||1,2);
  const size=()=>{W=c.width=innerWidth*d;H=c.height=innerHeight*d};size();addEventListener('resize',size);
  const ps=Array.from({length:46},()=>({x:Math.random(),y:Math.random(),r:(Math.random()*1.6+.4)*d,a:Math.random()*.45+.08,v:Math.random()*.0009+.0003,s:Math.random()*6}));
  (function f(t){if(!dustOn)return;x.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.v;if(p.y<-.02)p.y=1.02;const px=(p.x+Math.sin(t/2400+p.s)*.012)*W;x.beginPath();x.arc(px,p.y*H,p.r,0,7);x.fillStyle=`rgba(255,240,210,${p.a})`;x.fill()});requestAnimationFrame(f)})(0);
}
function playFilm(){
  if(reduce){closeFilm(true);return}
  ftimers.forEach(clearTimeout);ftimers=[];
  film.classList.remove('gone','out');document.body.classList.add('lock');
  const scenes=[...film.querySelectorAll('.f-sc')];scenes.forEach(s=>s.classList.remove('on'));
  const total=FDUR.reduce((a,b)=>a+b,0),pr=document.getElementById('fprog');
  pr.style.transition='none';pr.style.width='0';void pr.offsetWidth;pr.style.transition=`width ${total}ms linear`;pr.style.width='100%';
  if(!dustOn){dustOn=true;dust()}
  let t=0;
  scenes.forEach((s,i)=>{ftimers.push(setTimeout(()=>{scenes.forEach(o=>o!==s&&o.classList.remove('on'));s.classList.add('on');setFilmBg(s.dataset.bg);document.getElementById('fcount').textContent=s.dataset.count||'BASHRA'},t));t+=FDUR[i]});
  ftimers.push(setTimeout(closeFilm,t));
}
function closeFilm(instant){
  ftimers.forEach(clearTimeout);ftimers=[];
  film.classList.add('out');document.body.classList.remove('lock');
  document.querySelectorAll('.hero .rv').forEach(e=>e.classList.remove('in'));
  setTimeout(()=>document.querySelectorAll('.hero .rv').forEach(e=>e.classList.add('in')),instant?0:500);
  setTimeout(()=>{film.classList.add('gone');dustOn=false;film.querySelectorAll('.f-sc').forEach(s=>s.classList.remove('on'))},instant?0:1150);
}

document.querySelectorAll('[data-mark]').forEach(e=>e.innerHTML=`<svg viewBox="-3 -13 30 28" aria-hidden="true">${mark(11,0,1,'currentColor')}</svg>`);
addEventListener('scroll',()=>{const h=document.getElementById('heroPar');if(h&&!reduce)h.style.transform=`translate3d(0,${Math.min(scrollY,900)*.06}px,0)`},{passive:true});
/* boot */
render();updateCart();closeFilm(true);
