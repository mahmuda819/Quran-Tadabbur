const SURAH_LIST = [
['Al-Fatihah','الفاتحة',7],['Al-Baqarah','البقرة',286],['Aal-e-Imran','آل عمران',200],['An-Nisa','النساء',176],['Al-Ma’idah','المائدة',120],['Al-An’am','الأنعام',165],['Al-A’raf','الأعراف',206],['Al-Anfal','الأنفال',75],['At-Tawbah','التوبة',129],['Yunus','يونس',109],['Hud','هود',123],['Yusuf','يوسف',111],['Ar-Ra’d','الرعد',43],['Ibrahim','إبراهيم',52],['Al-Hijr','الحجر',99],['An-Nahl','النحل',128],['Al-Isra','الإسراء',111],['Al-Kahf','الكهف',110],['Maryam','مريم',98],['Ta-Ha','طه',135],['Al-Anbiya','الأنبياء',112],['Al-Hajj','الحج',78],['Al-Mu’minun','المؤمنون',118],['An-Nur','النور',64],['Al-Furqan','الفرقان',77],['Ash-Shu’ara','الشعراء',227],['An-Naml','النمل',93],['Al-Qasas','القصص',88],['Al-Ankabut','العنكبوت',69],['Ar-Rum','الروم',60],['Luqman','لقمان',34],['As-Sajdah','السجدة',30],['Al-Ahzab','الأحزاب',73],['Saba','سبأ',54],['Fatir','فاطر',45],['Ya-Sin','يس',83],['As-Saffat','الصافات',182],['Sad','ص',88],['Az-Zumar','الزمر',75],['Ghafir','غافر',85],['Fussilat','فصلت',54],['Ash-Shura','الشورى',53],['Az-Zukhruf','الزخرف',89],['Ad-Dukhan','الدخان',59],['Al-Jathiyah','الجاثية',37],['Al-Ahqaf','الأحقاف',35],['Muhammad','محمد',38],['Al-Fath','الفتح',29],['Al-Hujurat','الحجرات',18],['Qaf','ق',45],['Adh-Dhariyat','الذاريات',60],['At-Tur','الطور',49],['An-Najm','النجم',62],['Al-Qamar','القمر',55],['Ar-Rahman','الرحمن',78],['Al-Waqi’ah','الواقعة',96],['Al-Hadid','الحديد',29],['Al-Mujadilah','المجادلة',22],['Al-Hashr','الحشر',24],['Al-Mumtahanah','الممتحنة',13],['As-Saff','الصف',14],['Al-Jumu’ah','الجمعة',11],['Al-Munafiqun','المنافقون',11],['At-Taghabun','التغابن',18],['At-Talaq','الطلاق',12],['At-Tahrim','التحريم',12],['Al-Mulk','الملك',30],['Al-Qalam','القلم',52],['Al-Haqqah','الحاقة',52],['Al-Ma’arij','المعارج',44],['Nuh','نوح',28],['Al-Jinn','الجن',28],['Al-Muzzammil','المزمل',20],['Al-Muddaththir','المدثر',56],['Al-Qiyamah','القيامة',40],['Al-Insan','الإنسان',31],['Al-Mursalat','المرسلات',50],['An-Naba','النبأ',40],['An-Nazi’at','النازعات',46],['Abasa','عبس',42],['At-Takwir','التكوير',29],['Al-Infitar','الانفطار',19],['Al-Mutaffifin','المطففين',36],['Al-Inshiqaq','الانشقاق',25],['Al-Buruj','البروج',22],['At-Tariq','الطارق',17],['Al-A’la','الأعلى',19],['Al-Ghashiyah','الغاشية',26],['Al-Fajr','الفجر',30],['Al-Balad','البلد',20],['Ash-Shams','الشمس',15],['Al-Layl','الليل',21],['Ad-Duha','الضحى',11],['Ash-Sharh','الشرح',8],['At-Tin','التين',8],['Al-Alaq','العلق',19],['Al-Qadr','القدر',5],['Al-Bayyinah','البينة',8],['Az-Zalzalah','الزلزلة',8],['Al-Adiyat','العاديات',11],['Al-Qari’ah','القارعة',11],['At-Takathur','التكاثر',8],['Al-Asr','العصر',3],['Al-Humazah','الهمزة',9],['Al-Fil','الفيل',5],['Quraysh','قريش',4],['Al-Ma’un','الماعون',7],['Al-Kawthar','الكوثر',3],['Al-Kafirun','الكافرون',6],['An-Nasr','النصر',3],['Al-Masad','المسد',5],['Al-Ikhlas','الإخلاص',4],['Al-Falaq','الفلق',5],['An-Nas','الناس',6]
];

const defaultSurahs = SURAH_LIST.map(([name, arabic, ayahs], i) => ({
  id: `surah-${i + 1}`, number: i + 1, name: `Surah ${name}`, arabic, ayahs,
  ayahsData: Array.from({length: ayahs}, (_, n) => ({ arabic: '', translation: '', tadabbur: '' }))
}));

const THEME_KEY = 'tadabburTheme';
const themeToggle = document.getElementById('themeToggle');

function getSavedTheme(){
  try { return localStorage.getItem(THEME_KEY); }
  catch(e){ return null; }
}

function saveTheme(theme){
  try { localStorage.setItem(THEME_KEY, theme); }
  catch(e){ /* Theme still works for this page even if storage is unavailable. */ }
}

function applyTheme(theme){
  const dark = theme === 'dark';
  document.documentElement.classList.toggle('dark-mode', dark);
  document.body.classList.toggle('dark-mode', dark);
  if(themeToggle){
    themeToggle.textContent = dark ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', dark ? 'Light mode on' : 'Dark mode on');
    themeToggle.title = dark ? 'Light mode' : 'Dark mode';
  }
}

applyTheme(getSavedTheme() === 'dark' ? 'dark' : 'light');
if(themeToggle){
  themeToggle.addEventListener('click', (event)=>{
    event.preventDefault();
    const next = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
    saveTheme(next);
    applyTheme(next);
  });
}

const STORAGE_KEY = 'tadabburData';
let data = loadData();
const grid = document.getElementById('surahGrid');
const search = document.getElementById('searchInput');
const hero = document.querySelector('.hero');

// Supabase cloud sync: only the publishable key is used in this browser app.
// Secret/service-role keys must NEVER be placed in frontend code.
const SUPABASE_CONFIG = window.SUPABASE_CONFIG || {};
const supabaseClient = (window.supabase && SUPABASE_CONFIG.url && SUPABASE_CONFIG.publishableKey)
  ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey)
  : null;
let currentUser = null;
let cloudSyncTimer = null;
let cloudSyncInFlight = false;
let cloudSyncPending = false;

function loadData(){
  const defaults = structuredClone(defaultSurahs);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? mergeWithDefaults(saved) : defaults;
  } catch { return defaults; }
}

function save(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
  catch(e){ console.warn('Unable to save notes', e); }
  scheduleCloudSync();
}

function scheduleCloudSync(){
  if(!currentUser || !supabaseClient) return;
  cloudSyncPending = true;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(syncToCloud, 500);
}

async function syncToCloud(){
  if(!currentUser || !supabaseClient) return false;
  if(cloudSyncInFlight){ cloudSyncPending = true; return false; }
  cloudSyncInFlight = true;
  cloudSyncPending = false;
  const payload = { User_id: currentUser.id, data };
  try{
    // The table does not require a created_at column. Find this user's row by User_id.
    const { data: rows, error: readError } = await supabaseClient
      .from('tadabbur_data').select('id').eq('User_id', currentUser.id).limit(1);
    if(readError) throw readError;
    if(rows && rows.length){
      const { error } = await supabaseClient.from('tadabbur_data').update({data}).eq('id', rows[0].id);
      if(error) throw error;
    } else {
      const { error } = await supabaseClient.from('tadabbur_data').insert(payload);
      if(error) throw error;
    }
    setAuthStatus('Cloud synced ✓');
    return true;
  }catch(e){
    console.warn('Cloud sync failed:', e);
    setAuthStatus('Cloud sync failed — ' + (e?.message || 'unknown error'));
    return false;
  }finally{
    cloudSyncInFlight = false;
    if(cloudSyncPending) scheduleCloudSync();
  }
}

async function loadCloudData(user){
  if(!supabaseClient) return 'error';
  try{
    const { data: rows, error } = await supabaseClient
      .from('tadabbur_data').select('id,data').eq('User_id', user.id).limit(1);
    if(error) throw error;
    if(rows && rows[0] && rows[0].data && Array.isArray(rows[0].data)){
      data = mergeWithDefaults(rows[0].data);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e){}
      return 'loaded';
    }
    return 'none';
  }catch(e){
    console.warn('Cloud load failed:', e);
    setAuthStatus('Cloud load failed — ' + (e?.message || 'unknown error'));
    return 'error';
  }
}

function mergeWithDefaults(saved){
  const savedByNumber = new Map(
    saved.filter(s => s && Number.isInteger(Number(s.number)) && Number(s.number)>=1 && Number(s.number)<=114)
      .map(s => [Number(s.number), s])
  );
  return defaultSurahs.map(def => {
    const old=savedByNumber.get(def.number); if(!old) return def;
    const oldNotes=Array.isArray(old.notes)?old.notes.map(n=>String(n??'')):[];
    return {...def, id:def.id, ayahsData:Array.from({length:def.ayahs},(_,i)=>{
      const x=Array.isArray(old.ayahsData)?old.ayahsData[i]:null;
      return {arabic:x?.arabic?String(x.arabic):'',translation:x?.translation?String(x.translation):'',tadabbur:x?.tadabbur?String(x.tadabbur):(x?.note?String(x.note):(oldNotes[i]||''))};
    })};
  });
}

function setAuthStatus(message, type=''){
  const el=document.getElementById('authStatus');
  if(!el) return;
  el.textContent=message||'';
  el.dataset.type=type||'';
}

function setAuthMode(mode){
  const title=document.getElementById('authTitle');
  const note=document.getElementById('authNote');
  const authForm=document.getElementById('authForm');
  const resetRequest=document.getElementById('resetRequestForm');
  const resetPassword=document.getElementById('resetPasswordForm');
  const switchBtn=document.getElementById('authSwitch');
  const logout=document.getElementById('authLogout');
  const forgot=document.getElementById('forgotPassword');

  authForm?.classList.toggle('hidden', mode==='reset-request' || mode==='reset-password' || mode==='account');
  resetRequest?.classList.toggle('hidden', mode!=='reset-request');
  resetPassword?.classList.toggle('hidden', mode!=='reset-password');
  switchBtn?.classList.toggle('hidden', mode==='reset-request' || mode==='reset-password' || mode==='account');
  logout?.classList.toggle('hidden', mode!=='account');
  if(forgot) forgot.classList.toggle('hidden', mode!=='login');

  if(mode==='signup'){
    title.textContent='Sign up';
    note.textContent='Create an account to sync notes across devices.';
    document.getElementById('authSubmit').textContent='Create account';
    switchBtn.textContent='Already have an account? Login';
  }else if(mode==='reset-request'){
    title.textContent='Reset your password';
    note.textContent='Enter your email and we will send you a secure recovery link.';
  }else if(mode==='reset-password'){
    title.textContent='Choose a new password';
    note.textContent='Set a new password for your Quran Tadabbur account.';
  }else if(mode==='account'){
    title.textContent='Account';
    note.textContent='Cloud sync is active.';
  }else{
    title.textContent='Login';
    note.textContent='Log in to sync your Tadabbur notes across all your devices.';
    document.getElementById('authSubmit').textContent='Login';
    switchBtn.textContent="Don't have an account? Sign up";
  }
  setAuthStatus('');
}

function updateAuthUI(){
  const btn=document.getElementById('authBtn');
  if(btn) btn.textContent=currentUser ? (currentUser.email ? currentUser.email.split('@')[0] : 'Account') : 'Login';
}

async function requestPasswordReset(e){
  e.preventDefault();
  if(!supabaseClient){setAuthStatus('Supabase configuration is missing.');return;}
  const email=document.getElementById('resetEmail').value.trim();
  if(!email){setAuthStatus('Please enter your email.');return;}
  setAuthStatus('Sending recovery link...');
  const redirectTo = new URL('reset-password.html', window.location.href);

redirectTo.hash = '';
redirectTo.search = '';

const {error} = await supabaseClient.auth.resetPasswordForEmail(
  email,
  {redirectTo: redirectTo.toString()}
);
  if(error){setAuthStatus(error.message);return;}
  setAuthStatus('Recovery link sent. Please check your email.','success');
}

async function updatePassword(e){
  e.preventDefault();
  if(!supabaseClient){setAuthStatus('Supabase configuration is missing.');return;}
  const password=document.getElementById('newPassword').value;
  const confirm=document.getElementById('confirmPassword').value;
  if(password.length<6){setAuthStatus('Password must be at least 6 characters.');return;}
  if(password!==confirm){setAuthStatus('Passwords do not match.');return;}
  setAuthStatus('Updating password...');
  const {error}=await supabaseClient.auth.updateUser({password});
  if(error){setAuthStatus(error.message);return;}
  document.getElementById('newPassword').value='';
  document.getElementById('confirmPassword').value='';
  setAuthStatus('Password updated successfully. You can continue using your account.','success');
  setTimeout(()=>{ closeAuthModal(); },900);
}

async function initAuth(){
  updateAuthUI();
  if(!supabaseClient){
    setAuthStatus('Supabase configuration is not available. Local mode is active.');
    return;
  }
  const {data: sessionData}=await supabaseClient.auth.getSession();
  if(sessionData?.session){
    currentUser=sessionData.session.user;
    const cloudState=await loadCloudData(currentUser);
    if(cloudState==='none') await syncToCloud();
    renderHome();
  }
  updateAuthUI();
  supabaseClient.auth.onAuthStateChange(async (event, session)=>{
    currentUser=session?.user||null;
    updateAuthUI();
    if(event==='PASSWORD_RECOVERY'){
      openAuthModal();
      setAuthMode('reset-password');
      setAuthStatus('Please choose your new password.');
      return;
    }
    if(currentUser){
      const cloudState=await loadCloudData(currentUser);
      if(cloudState==='none') await syncToCloud();
      renderHome();
    }else{
      data=loadData(); renderHome();
    }
  });
}

async function handleAuthSubmit(e){
  e.preventDefault();
  if(!supabaseClient){setAuthStatus('Supabase configuration is missing.');return;}
  const email=document.getElementById('authEmail').value.trim();
  const password=document.getElementById('authPassword').value;
  const signup=document.getElementById('authTitle').textContent==='Sign up';
  setAuthStatus('Please wait...');
  const result=signup
    ? await supabaseClient.auth.signUp({email,password})
    : await supabaseClient.auth.signInWithPassword({email,password});
  if(result.error){setAuthStatus(result.error.message);return;}
  if(signup && !result.data.session){setAuthStatus('Account created. Email verification may be required.');return;}
  closeAuthModal();
}

function openAuthModal(mode='login'){
  const m=document.getElementById('authModal'); if(!m)return;
  m.classList.remove('hidden'); m.setAttribute('aria-hidden','false');
  setAuthMode(mode);
  const target=mode==='reset-request' ? document.getElementById('resetEmail') : document.getElementById('authEmail');
  target?.focus();
}
function closeAuthModal(){
  const m=document.getElementById('authModal'); if(!m)return;
  m.classList.add('hidden'); m.setAttribute('aria-hidden','true');
  setAuthStatus('');
}

function setupPasswordToggles(){
  document.querySelectorAll('.password-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const targetId=btn.dataset.toggleTarget || 'authPassword';
      const input=document.getElementById(targetId);
      if(!input)return;
      const visible=input.type==='text';
      input.type=visible?'password':'text';
      btn.setAttribute('aria-label',visible?'Show password':'Hide password');
      btn.setAttribute('title',visible?'Show password':'Hide password');
    });
  });
}

function setupAuthUI(){
  document.getElementById('authBtn')?.addEventListener('click',()=>{
    if(currentUser){
      openAuthModal('account');
    }else{
      openAuthModal('login');
    }
  });
  document.getElementById('authClose')?.addEventListener('click',closeAuthModal);
  document.getElementById('authForm')?.addEventListener('submit',handleAuthSubmit);
  document.getElementById('authSwitch')?.addEventListener('click',()=>{
    const signup=document.getElementById('authTitle').textContent!=='Sign up';
    setAuthMode(signup?'signup':'login');
    document.getElementById('authPassword').value='';
  });
  document.getElementById('forgotPassword')?.addEventListener('click',()=>{
    const email=document.getElementById('authEmail')?.value.trim()||'';
    const resetEmail=document.getElementById('resetEmail');
    if(resetEmail) resetEmail.value=email;
    openAuthModal('reset-request');
  });
  document.getElementById('backToLogin')?.addEventListener('click',()=>openAuthModal('login'));
  document.getElementById('resetRequestForm')?.addEventListener('submit',requestPasswordReset);
  document.getElementById('resetPasswordForm')?.addEventListener('submit',updatePassword);
  document.getElementById('authLogout')?.addEventListener('click',async()=>{if(supabaseClient) await supabaseClient.auth.signOut();closeAuthModal();});
  document.getElementById('authModal')?.addEventListener('click',(e)=>{if(e.target.id==='authModal') closeAuthModal();});
  setupPasswordToggles();
}
function esc(v){ return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function renderHome(){
  hero.style.display='';
  search.style.display='';
  const q=search.value.trim().toLowerCase();
  const filtered=data.filter(s => `${s.number} ${s.name} ${s.arabic}`.toLowerCase().includes(q));
  grid.innerHTML = filtered.length ? filtered.map(s => `
    <article class="surah-card" data-id="${esc(s.id)}" tabindex="0" role="button" aria-label="Open ${esc(s.name)}">
      <span class="card-number">${String(s.number).padStart(3,'0')}</span>
      <div class="arabic-name">${esc(s.arabic)}</div>
      <h3>${esc(s.name)}</h3>
      <div class="card-meta">${s.ayahs} Ayat • ${s.ayahsData.filter(a => a.tadabbur.trim()).length} tadabbur likhe gaye hain</div>
    </article>`).join('') : '<div class="empty">Koi Surah nahi mili.</div>';
}
function openSurah(id){
  const s=data.find(x=>x.id===id); if(!s)return;
  hero.style.display='none';
  search.style.display='none';
  grid.innerHTML=`<section class="reader">
    <div class="ayah-search-wrap reader-search">
      <span>⌕</span>
      <input id="ayahSearchInput" type="search" placeholder="Ayat, tarjuma ya tadabbur dhoondhein..." aria-label="Ayat search">
    </div>
    <button class="back" id="backBtn">← Surahon ki list par wapas</button>
    <div class="reader-head"><div class="arabic-name">${esc(s.arabic)}</div><h2>${esc(s.name)}</h2><p>${s.ayahs} Ayat</p></div>
    <div id="ayahList">${s.ayahsData.map((a,i)=>ayahHTML(s,i)).join('')}</div>
    <button class="add-ayah" id="addAyahBtn">＋ Nayi Ayat ka note add karein</button>
    <div class="danger-row"><button class="delete-surah" id="deleteSurahBtn">Surah mita dein</button></div>
  </section>`;
  document.getElementById('backBtn').onclick=renderHome;
  document.getElementById('addAyahBtn').onclick=()=>addAyah(s.id);
  document.getElementById('deleteSurahBtn').onclick=()=>deleteSurah(s.id);
  grid.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('input',()=>updateAyahField(s.id,Number(el.dataset.index),el.dataset.field,el.innerText)));
  const ayahSearch=document.getElementById('ayahSearchInput');
  ayahSearch.addEventListener('input',()=>filterAyahs(s.id,ayahSearch.value));
  grid.querySelectorAll('.delete-ayah').forEach(btn=>btn.onclick=()=>removeAyah(s.id,Number(btn.dataset.index)));
}
function ayahHTML(s,i){
  const a=s.ayahsData[i] || {arabic:'',translation:'',tadabbur:''};
  return `<article class="ayah">
    <div class="ayah-top"><h3>Ayat ${i+1}</h3><button class="delete-ayah" data-index="${i}" title="Mita dein" aria-label="Ayat ${i+1} mita dein">×</button></div>
    <div class="ayah-field ayah-arabic-wrap">
      <label>Arabic Ayat</label>
      <div class="ayah-arabic" contenteditable="true" dir="rtl" lang="ar" data-field="arabic" data-index="${i}" data-placeholder="Yahan Arabic Ayat likhein...">${esc(a.arabic)}</div>
    </div>
    <div class="ayah-field">
      <label>Roman Urdu Tarjuma</label>
      <div class="ayah-translation" contenteditable="true" dir="ltr" data-field="translation" data-index="${i}" data-placeholder="Yahan Roman Urdu tarjuma likhein...">${esc(a.translation)}</div>
    </div>
    <div class="ayah-field">
      <label>Tadabbur / Apni Soch</label>
      <div class="tadabbur" contenteditable="true" data-field="tadabbur" data-index="${i}" data-placeholder="Is Ayat se aap ne jo samjha, apna tadabbur yahan likhein...">${esc(a.tadabbur)}</div>
    </div>
  </article>`;
}

function filterAyahs(id, query){
  const s=data.find(x=>x.id===id); if(!s)return;
  const q=query.trim().toLowerCase();
  const list=document.getElementById('ayahList'); if(!list)return;
  const matches=s.ayahsData.map((a,i)=>({a,i})).filter(({a,i})=>{
    if(!q)return true;
    return `${i+1} ${a.arabic||''} ${a.translation||''} ${a.tadabbur||''}`.toLowerCase().includes(q);
  });
  list.innerHTML=matches.length
    ? matches.map(({i})=>ayahHTML(s,i)).join('')
    : '<div class="empty">Koi Ayat nahi mili.</div>';
  list.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('input',()=>updateAyahField(s.id,Number(el.dataset.index),el.dataset.field,el.innerText)));
  list.querySelectorAll('.delete-ayah').forEach(btn=>btn.onclick=()=>removeAyah(s.id,Number(btn.dataset.index)));
}

function updateAyahField(id,i,field,v){const s=data.find(x=>x.id===id);if(!s)return;if(!s.ayahsData[i])s.ayahsData[i]={arabic:'',translation:'',tadabbur:''};s.ayahsData[i][field]=v;save();}
function addAyah(id){const s=data.find(x=>x.id===id);if(!s)return;s.ayahsData.push({arabic:'',translation:'',tadabbur:''});s.ayahs=s.ayahsData.length;save();openSurah(id);setTimeout(()=>document.querySelector('#ayahList .ayah:last-child [data-field=\"arabic\"]')?.focus(),0);}
function removeAyah(id,i){const s=data.find(x=>x.id===id);if(!s)return;if(!confirm(`Ayat ${i+1}-er note mita felben?`))return;s.ayahsData.splice(i,1);s.ayahs=s.ayahsData.length;save();openSurah(id);} 
function deleteSurah(id){if(!confirm('Ei Surah-er shob tadabbur shoho mita felben?'))return;data=data.filter(s=>s.id!==id);save();renderHome();}

grid.addEventListener('click',e=>{const card=e.target.closest('.surah-card');if(card)openSurah(card.dataset.id);});
grid.addEventListener('keydown',e=>{const card=e.target.closest('.surah-card');if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openSurah(card.dataset.id);}});
search.addEventListener('input',renderHome);
setupAuthUI();
renderHome();
initAuth();
