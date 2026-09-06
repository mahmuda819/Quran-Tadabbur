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

function loadData(){
  // This app is intentionally limited to the 114 Qur'an Surahs.
  // Start from the canonical 114-surah list and preserve only their notes.
  const defaults = structuredClone(defaultSurahs);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return defaults;

    const savedByNumber = new Map(
      saved
        .filter(s => s && Number.isInteger(Number(s.number)) && Number(s.number) >= 1 && Number(s.number) <= 114)
        .map(s => [Number(s.number), s])
    );

    return defaults.map(def => {
      const old = savedByNumber.get(def.number);
      if (!old) return def;
      const oldNotes = Array.isArray(old.notes) ? old.notes.map(n => String(n ?? '')) : [];
      return {
        ...def,
        id: def.id,
        ayahsData: Array.from({ length: def.ayahs }, (_, i) => {
          const oldItem = Array.isArray(old.ayahsData) ? old.ayahsData[i] : null;
          return {
            arabic: oldItem?.arabic ? String(oldItem.arabic) : '',
            translation: oldItem?.translation ? String(oldItem.translation) : '',
            tadabbur: oldItem?.tadabbur ? String(oldItem.tadabbur) : (oldItem?.note ? String(oldItem.note) : (oldNotes[i] || ''))
          };
        })
      };
    });
  } catch {
    return defaults;
  }
}

function save(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e){ console.warn('Unable to save notes', e); } }
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
renderHome();
