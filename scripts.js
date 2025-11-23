
// Basic client-side data + behaviors for static demo site
const SAMPLE_ROOMS = [
  {id:1,title:'Cozy single room in Koramangala',city:'Bengaluru',type:'Single',price:12000,thumb:'linear-gradient(135deg,#fef3c7,#fee2e2)',rating:4.7,host:'Ankur'},
  {id:2,title:'Furnished room near MG Road',city:'Bengaluru',type:'Shared',price:8500,thumb:'linear-gradient(135deg,#dbeafe,#e9d5ff)',rating:4.5,host:'Ria'},
  {id:3,title:'Studio in Bandra',city:'Mumbai',type:'Studio',price:25000,thumb:'linear-gradient(135deg,#d1fae5,#dbeafe)',rating:4.6,host:'Sameer'},
  {id:4,title:'Comfortable room in Pune',city:'Pune',type:'Single',price:10000,thumb:'linear-gradient(135deg,#fbcfe8,#fecaca)',rating:4.4,host:'Priya'},
  {id:5,title:'Shared apartment in HSR',city:'Bengaluru',type:'Shared',price:7000,thumb:'linear-gradient(135deg,#fff7ed,#ecfccb)',rating:4.3,host:'Karan'},
  {id:6,title:'Budget room in Chennai',city:'Chennai',type:'Shared',price:6500,thumb:'linear-gradient(135deg,#e0f2fe,#fce7f3)',rating:4.1,host:'Asha'}
];

const CITIES = [
  {name:'Bengaluru',count:342},
  {name:'Mumbai',count:289},
  {name:'Pune',count:198},
  {name:'Hyderabad',count:142},
  {name:'Delhi NCR',count:410},
  {name:'Chennai',count:120},
  {name:'Kolkata',count:90},
  {name:'Jaipur',count:65},
];

document.addEventListener('DOMContentLoaded', ()=> {
  renderTrending();
  renderFeatured();
  renderHomeRooms();
  renderTestimonials();
  renderRoomsGrid();
  renderCityGrid();
  setupDropzone();
  hookFilters();
  renderPending();
  populateBookingList();
  populateWishlist();
  setupProfileTabs();
  renderRoomDetailsIfAny();
});

// Navigation helpers
function openRooms(){ location.href='rooms.html' }
function goRoomsFromHero(e){
  e.preventDefault();
  const city = document.getElementById('q-city').value;
  const type = document.getElementById('q-type').value;
  const qs = new URLSearchParams();
  if(city) qs.set('city',city);
  if(type) qs.set('type',type);
  location.href = 'rooms.html?' + qs.toString();
  return false;
}

// Trending cities
function renderTrending(){
  const el = document.getElementById('trending-cities');
  if(!el) return;
  CITIES.slice(0,6).forEach(c=>{
    const d=document.createElement('div'); d.className='city-card';
    d.style.background='linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.05)), url(https://picsum.photos/400/200?random='+c.name+') center/cover';
    d.innerHTML = `<div><strong style="font-size:18px">${c.name}</strong><div class="muted">${c.count} rooms</div></div>`;
    d.onclick = ()=>{ location.href='cities.html?city='+encodeURIComponent(c.name) };
    el.appendChild(d);
  });
}

// Featured slider
function renderFeatured(){
  const el = document.getElementById('featured-slider');
  if(!el) return;
  SAMPLE_ROOMS.slice(0,4).forEach(r=>{
    const c=document.createElement('div'); c.className='room-card'; c.style.width='320px';
    c.innerHTML = `<div class="thumb" style="background:${r.thumb}"></div>
      <div class="body"><h4>${r.title}</h4><div class="muted">${r.city} • ${r.type}</div><div style="margin-top:8px"><strong>₹${r.price}/mo</strong></div></div>`;
    c.onclick = ()=> location.href='room.html?id='+r.id;
    el.appendChild(c);
  });
}

// Filter chips (home)
function renderFilterChips(){
  const el = document.getElementById('filter-chips');
  if(!el) return;
  ['Under ₹10k','Bengaluru','Furnished','Immediate Move-in'].forEach(t=>{
    const chip=document.createElement('div'); chip.className='chip'; chip.textContent=t; chip.onclick=()=>{alert('Filter: '+t)};
    el.appendChild(chip);
  });
}
renderFilterChips();

// Rooms grid (home)
function renderHomeRooms(){
  const el = document.querySelector('#index-rooms-grid') || document.getElementById('rooms-grid');
  if(!el) return;
  el.innerHTML='';
  SAMPLE_ROOMS.forEach(r=> el.appendChild(makeRoomCard(r)));
}

// Create room card element
function makeRoomCard(r){
  const card=document.createElement('div'); card.className='room-card';
  card.innerHTML = `<div class="thumb" style="background:${r.thumb}"></div>
    <div class="body">
      <h3>${r.title}</h3>
      <div class="muted">${r.city} • ${r.type}</div>
      <div class="card-foot">
        <div class="host-mini"><div class="host-avatar">${r.host.charAt(0)}</div><div class="muted">${r.host}</div></div>
        <div style="text-align:right"><strong>₹${r.price}</strong><div class="muted">/mo</div></div>
      </div>
      <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center">
        <div class="rating">★ ${r.rating}</div>
        <div><button class="btn ghost" onclick="viewDetails(event,${r.id})">View Details</button></div>
      </div>
    </div>`;
  return card;
}

function viewDetails(e,id){ e.stopPropagation(); location.href='room.html?id='+id }

// Rooms page grid
function renderRoomsGrid(){
  const el = document.querySelector('#rooms-grid');
  if(!el) return;
  el.innerHTML='';
  const url = new URL(location.href);
  const city = url.searchParams.get('city');
  const type = url.searchParams.get('type');
  SAMPLE_ROOMS.filter(r=>{
    if(city && r.city.toLowerCase().indexOf(city.toLowerCase())===-1) return false;
    if(type && r.type!==type) return false;
    return true;
  }).forEach(r=> el.appendChild(makeRoomCardWithWishlist(r)));
}

function makeRoomCardWithWishlist(r){
  const card = makeRoomCard(r);
  const btn = document.createElement('button'); btn.className='btn small ghost'; btn.textContent='♥';
  btn.onclick = (ev)=>{ ev.stopPropagation(); toggleWishlist(r.id) };
  card.querySelector('.body').appendChild(btn);
  return card;
}

// Filters behaviors
function hookFilters(){
  const fp = document.getElementById('f-price');
  if(fp){ fp.oninput = ()=>{ document.getElementById('f-price-val').textContent = fp.value } }
}

// Apply/Clear Filters
function applyFilters(){
  const city = document.getElementById('f-city').value;
  const type = document.getElementById('f-type').value;
  const qs = new URLSearchParams();
  if(city) qs.set('city', city);
  if(type) qs.set('type', type);
  location.search = qs.toString();
}
function clearFilters(){
  document.getElementById('f-search').value=''; document.getElementById('f-city').value=''; document.getElementById('f-price').value=20000; document.getElementById('f-price-val').textContent=20000;
  document.getElementById('f-type').value=''; document.getElementById('f-duration').value=''; document.getElementById('f-furnish').value=''; document.getElementById('f-gender').value='';
  applyFilters();
}

// Testimonials
function renderTestimonials(){
  const el = document.getElementById('testimonials');
  if(!el) return;
  ['"Great rooms and verified hosts." - Riya','"Fast responses and easy booking." - Sameer','"Saved so much time finding rooms." - Priya'].forEach(t=>{
    const d=document.createElement('div'); d.className='card'; d.style.minWidth='220px'; d.textContent=t; el.appendChild(d);
  });
}

// City grid
function renderCityGrid(){
  const el = document.getElementById('city-grid');
  if(!el) return;
  CITIES.forEach(c=>{
    const card=document.createElement('div'); card.className='city-card'; card.style.background='linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.05)), url(https://picsum.photos/600/400?random='+c.name+') center/cover';
    card.style.height='180px'; card.style.borderRadius='24px'; card.style.padding='18px'; card.innerHTML=`<div style="color:#fff"><h3 style="margin:0">${c.name}</h3><div class="muted">${c.count} rooms available</div></div>`;
    card.onclick = ()=> showCityRooms(c.name);
    el.appendChild(card);
  });
}

function showCityRooms(name){
  const sect = document.getElementById('city-localities');
  if(!sect) return;
  sect.classList.remove('hidden');
  document.getElementById('locality-chips').innerHTML = '';
  ['Koramangala','HSR Layout','Indiranagar','Jayanagar'].forEach(l=>{
    const chip=document.createElement('div'); chip.className='chip'; chip.textContent=l; chip.onclick=()=>{ alert('Filter: '+l) };
    document.getElementById('locality-chips').appendChild(chip);
  });
  const rooms = SAMPLE_ROOMS.filter(r=> r.city.toLowerCase().indexOf(name.toLowerCase())!==-1);
  const grid = document.getElementById('city-rooms');
  grid.innerHTML=''; (rooms.length?rooms:SAMPLE_ROOMS.slice(0,3)).forEach(r=> grid.appendChild(makeRoomCard(r)));
  setTimeout(()=>{ sect.scrollIntoView({behavior:'smooth'}) },200);
}

// Room details page loader
function renderRoomDetailsIfAny(){
  const url = new URL(location.href);
  const id = url.searchParams.get('id');
  if(!id) return;
  const room = SAMPLE_ROOMS.find(r=>r.id==id) || SAMPLE_ROOMS[0];
  document.getElementById('room-title').textContent = room.title;
  document.getElementById('room-desc').textContent = 'Detailed description for ' + room.title + '. Close to public transport and amenities.';
  document.getElementById('room-price').textContent = room.price;
  document.getElementById('price-month').textContent = room.price;
  document.getElementById('price-total').textContent = room.price * (parseInt(document.getElementById('book-duration').value)||1);

  // carousel images
  const track = document.getElementById('carousel-track');
  const dots = document.getElementById('carousel-dots');
  track.innerHTML=''; dots.innerHTML='';
  for(let i=0;i<5;i++){
    const img=document.createElement('div'); img.className='carousel-item'; img.style.minWidth='100%'; img.style.height='360px'; img.style.background='url(https://picsum.photos/1200/600?random='+ (room.id*10+i) +') center/cover';
    track.appendChild(img);
    const d=document.createElement('div'); d.className='dot'; d.onclick = ()=>{ goToSlide(i) };
    dots.appendChild(d);
  }
  goToSlide(0);

  // reviews mock
  const revList = document.getElementById('reviews-list');
  revList.innerHTML='';
  for(let i=0;i<3;i++){
    const card=document.createElement('div'); card.className='card'; card.style.marginBottom='8px';
    card.innerHTML = `<strong>User ${i+1}</strong><div class="muted">★ ${4+(i%2)*0.3}</div><p>Good stay, friendly host.</p>`;
    revList.appendChild(card);
  }

  // similar slider
  const sim = document.getElementById('similar-slider');
  sim.innerHTML='';
  SAMPLE_ROOMS.filter(r=>r.id!=room.id).slice(0,4).forEach(r=> sim.appendChild(makeRoomCard(r)));
}

// Carousel controls
let currentSlide = 0;
function goToSlide(i){
  const track = document.getElementById('carousel-track');
  if(!track) return;
  currentSlide = i;
  track.style.transform = 'translateX(' + (-i * track.clientWidth) + 'px)';
  // update dots
  const dots = document.querySelectorAll('.carousel-dots .dot');
  dots.forEach((d,idx)=> d.style.background = idx===i ? 'var(--primary)' : '#e2e8f0');
}
function carouselNext(){ goToSlide(currentSlide+1) }
function carouselPrev(){ goToSlide(Math.max(0,currentSlide-1)) }

// Booking calc
document.addEventListener('change', e=>{
  if(e.target && e.target.id==='book-duration'){
    const months = parseInt(e.target.value)||1;
    const monthPrice = parseInt(document.getElementById('room-price').textContent)||0;
    document.getElementById('price-total').textContent = months * monthPrice;
  }
});
function bookNow(){ alert('Booking created (demo).') }
function contactHost(){ window.open('https://wa.me/919999999999?text=Hi%20I%20am%20interested%20in%20your%20room','_blank') }

// Host form
function setupDropzone(){
  const dz = document.getElementById('dropzone');
  if(!dz) return;
  const input = document.getElementById('h-photos');
  dz.addEventListener('click', ()=> input.click());
  dz.addEventListener('dragover', (e)=>{ e.preventDefault(); dz.style.background='#f1f5f9' });
  dz.addEventListener('dragleave', ()=> dz.style.background='transparent');
  dz.addEventListener('drop', (e)=>{ e.preventDefault(); dz.style.background='transparent'; input.files = e.dataTransfer.files; });
}
function submitHostForm(e){ e.preventDefault(); alert('Room submitted (demo).'); return false; }

// Auth (demo)
function doLogin(e){ e.preventDefault(); alert('Logged in (demo).'); return false }
function doSignup(e){ e.preventDefault(); alert('Signed up (demo).'); return false }
function doAdminLogin(e){ e.preventDefault(); alert('Admin login (demo)'); return false }

// Wishlist (localStorage)
function toggleWishlist(id){
  const key='rb_wishlist';
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  const idx = existing.indexOf(id);
  if(idx===-1) existing.push(id); else existing.splice(idx,1);
  localStorage.setItem(key, JSON.stringify(existing));
  populateWishlist();
  alert('Wishlist updated');
}
function populateWishlist(){
  const key='rb_wishlist';
  const ids = JSON.parse(localStorage.getItem(key) || '[]');
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  if(!grid) return;
  grid.innerHTML='';
  if(ids.length===0){ empty.classList.remove('hidden'); return; } else empty.classList.add('hidden');
  ids.forEach(id=>{
    const r = SAMPLE_ROOMS.find(x=>x.id==id);
    if(r) grid.appendChild(makeRoomCard(r));
  });
}

// Admin pending sample
function renderPending(){
  const el = document.getElementById('pending-list');
  if(!el) return;
  el.innerHTML = '<div class="muted">No pending rooms (demo)</div>';
}

// Bookings sample
function populateBookingList(){
  const el = document.getElementById('bookings-list');
  if(!el) return;
  el.innerHTML = '';
  const sample = [{id:'BKG001',title:'Cozy single room',city:'Bengaluru',dur:'6 months',amt:72000,status:'Approved'}];
  sample.forEach(s=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.id}</td><td>${s.title}</td><td>${s.city}</td><td>${s.dur}</td><td>₹${s.amt}</td><td>${s.status}</td><td><button class="btn small" onclick="alert('View booking')">View</button></td>`;
    el.appendChild(tr);
  });
}

// Profile tabs
function setupProfileTabs(){
  const tabBtns = document.querySelectorAll('.tab-btn');
  if(!tabBtns.length) return;
  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      const content = document.getElementById('tab-content');
      content.innerHTML = '<div class="muted">Content for '+tab+'</div>';
    });
  });
}

// Simple helper to populate bookings in admin etc.
