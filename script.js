const SURAH_LIST = [
['Al-Fatihah','الفاتحة',7],['Al-Baqarah','البقرة',286],['Aal-e-Imran','آل عمران',200],['An-Nisa','النساء',176],['Al-Ma’idah','المائدة',120],['Al-An’am','الأنعام',165],['Al-A’raf','الأعراف',206],['Al-Anfal','الأنفال',75],['At-Tawbah','التوبة',129],['Yunus','يونس',109],['Hud','هود',123],['Yusuf','يوسف',111],['Ar-Ra’d','الرعد',43],['Ibrahim','إبراهيم',52],['Al-Hijr','الحجر',99],['An-Nahl','النحل',128],['Al-Isra','الإسراء',111],['Al-Kahf','الكهف',110],['Maryam','مريم',98],['Ta-Ha','طه',135],['Al-Anbiya','الأنبياء',112],['Al-Hajj','الحج',78],['Al-Mu’minun','المؤمنون',118],['An-Nur','النور',64],['Al-Furqan','الفرقان',77],['Ash-Shu’ara','الشعراء',227],['An-Naml','النمل',93],['Al-Qasas','القصص',88],['Al-Ankabut','العنكبوت',69],['Ar-Rum','الروم',60],['Luqman','لقمان',34],['As-Sajdah','السجدة',30],['Al-Ahzab','الأحزاب',73],['Saba','سبأ',54],['Fatir','فاطر',45],['Ya-Sin','يس',83],['As-Saffat','الصافات',182],['Sad','ص',88],['Az-Zumar','الزمر',75],['Ghafir','غافر',85],['Fussilat','فصلت',54],['Ash-Shura','الشورى',53],['Az-Zukhruf','الزخرف',89],['Ad-Dukhan','الدخان',59],['Al-Jathiyah','الجاثية',37],['Al-Ahqaf','الأحقاف',35],['Muhammad','محمد',38],['Al-Fath','الفتح',29],['Al-Hujurat','الحجرات',18],['Qaf','ق',45],['Adh-Dhariyat','الذاريات',60],['At-Tur','الطور',49],['An-Najm','النجم',62],['Al-Qamar','القمر',55],['Ar-Rahman','الرحمن',78],['Al-Waqi’ah','الواقعة',96],['Al-Hadid','الحديد',29],['Al-Mujadilah','المجادلة',22],['Al-Hashr','الحشر',24],['Al-Mumtahanah','الممتحنة',13],['As-Saff','الصف',14],['Al-Jumu’ah','الجمعة',11],['Al-Munafiqun','المنافقون',11],['At-Taghabun','التغابن',18],['At-Talaq','الطلاق',12],['At-Tahrim','التحريم',12],['Al-Mulk','الملك',30],['Al-Qalam','القلم',52],['Al-Haqqah','الحاقة',52],['Al-Ma’arij','المعارج',44],['Nuh','نوح',28],['Al-Jinn','الجن',28],['Al-Muzzammil','المزمل',20],['Al-Muddaththir','المدثر',56],['Al-Qiyamah','القيامة',40],['Al-Insan','الإنسان',31],['Al-Mursalat','المرسلات',50],['An-Naba','النبأ',40],['An-Nazi’at','النازعات',46],['Abasa','عبس',42],['At-Takwir','التكوير',29],['Al-Infitar','الانفطار',19],['Al-Mutaffifin','المطففين',36],['Al-Inshiqaq','الانشقاق',25],['Al-Buruj','البروج',22],['At-Tariq','الطارق',17],['Al-A’la','الأعلى',19],['Al-Ghashiyah','الغاشية',26],['Al-Fajr','الفجر',30],['Al-Balad','البلد',20],['Ash-Shams','الشمس',15],['Al-Layl','الليل',21],['Ad-Duha','الضحى',11],['Ash-Sharh','الشرح',8],['At-Tin','التين',8],['Al-Alaq','العلق',19],['Al-Qadr','القدر',5],['Al-Bayyinah','البينة',8],['Az-Zalzalah','الزلزلة',8],['Al-Adiyat','العاديات',11],['Al-Qari’ah','القارعة',11],['At-Takathur','التكاثر',8],['Al-Asr','العصر',3],['Al-Humazah','الهمزة',9],['Al-Fil','الفيل',5],['Quraysh','قريش',4],['Al-Ma’un','الماعون',7],['Al-Kawthar','الكوثر',3],['Al-Kafirun','الكافرون',6],['An-Nasr','النصر',3],['Al-Masad','المسد',5],['Al-Ikhlas','الإخلاص',4],['Al-Falaq','الفلق',5],['An-Nas','الناس',6]
];


const LANGUAGE_KEY = 'quranTadabburLanguage';
const UI_TEXT = {
  roman: {
    notesNav: 'Mere Tadabbur Notes',
    last: 'Last',
    favorites: 'Favorites',
    myAmal: 'My Amal',
    heroTitle: 'Quran ke saath gehri soch ka safar',
    heroSubtitle: 'Har din ek ayat. Ek soch. Ek tadabbur.',
    searchPlaceholder: 'Surah ka naam dhoondhein...',
    footer: 'Quran Tadabbur • Zati notes ke liye',
    back: '← Surahon ki list par wapas',
    myNotes: 'My Tadabbur Notes',
    arabicLabel: 'Arabic Ayat',
    notesIntro: 'Apni likhi hui Tadabbur yahan ek jagah milegi.',
    noNotes: 'Abhi koi Tadabbur note nahi hai. Kisi Ayat mein apni soch likhein.',
    deleteNote: 'Delete Tadabbur',
    deleteConfirm: 'Ei Tadabbur note-ti delete karna hai?',
    myAmalTitle: 'Mere Amal / Actions',
    amalIntro: 'Aap ne jin Ayat par amal karne ka plan likha hai, woh yahan milega.',
    noAmal: 'Abhi koi Amal likha nahi hai. Kisi Ayat mein apna Amal / Action likhein.',
    lastTitle: 'Aapka sabse aakhri likha hua Tadabbur',
    noLast: 'Abhi tak koi Tadabbur nahi likha gaya.',
    myFavorites: 'My Favorite Ayat',
    favoritesIntro: 'Apni pasand ki Ayat yahan save karein.',
    noFavorites: 'Koi Ayat abhi tak Favorite nahi ki gayi. Ayat ke paas ♡ dabayein.',
    globalIntro: 'Surah, Ayat, Tarjuma, Tadabbur aur Amal se search kiya gaya',
    noGlobal: 'Koi matching Ayat nahi mili.',
    noSurah: 'Koi Surah nahi mili.',
    cardMeta: 'tadabbur likhe gaye hain',
    ayahSearch: 'Ayat, tarjuma ya tadabbur dhoondhein...',
    ayahSearchAria: 'Ayat search',
    translationLabel: 'Roman Urdu Tarjuma',
    translationPlaceholder: 'Yahan Roman Urdu tarjuma likhein...',
    tadabburLabel: 'Tadabbur / Apni Soch',
    tadabburPlaceholder: 'Is Ayat se aap ne jo samjha, apna tadabbur yahan likhein...',
    amalLabel: 'Amal / Action',
    amalPlaceholder: 'Is Ayat par amal karne ke liye kya karenge, yahan likhein...',
    locked: 'Locked',
    bismillahSeparate: 'Bismillah alag',
    ayat: 'Ayat',
    saved: 'saved',
    actionWord: 'Amal',
    reflectionWord: 'Tadabbur',
    result: 'result',
    results: 'results',
    globalSearch: 'Global Search',
    language: 'Language',
    localStored: 'Sirf Is Device Par Saved',
    lifetimeAccess: 'Agar aap apni notes ko kisi bhi device par lifetime access karna chahte hain, to login karein.',
    lifetimeNoticeTitle: 'Lifetime Access — Koi Payment Nahi',
    lifetimeNotice: 'Lifetime access ke liye hum koi payment nahi lete. Bas aapki raaye ya dua chahte hain. 🤍',
    nameLabel: 'Aapka Naam',
    namePlaceholder: 'Yahan apna naam likhein...',
    nameRequired: 'Sign up karne ke liye apna naam likhna zaroori hai.',
    opinionDuaLabel: 'Aapki Raaye / Dua',
    opinionDuaPlaceholder: 'Yahan apni raaye ya dua likhein...',
    opinionDuaRequired: 'Sign up karne ke liye apni raaye ya dua likhna zaroori hai.',
    awardKicker: 'Is Mahine ka Tadabbur',
    awardReflections: 'Tadabbur',
  },
  en: {
    notesNav: 'My Reflection Notes',
    last: 'Last',
    favorites: 'Favorites',
    myAmal: 'My Actions',
    heroTitle: 'A journey of deep reflection with the Quran',
    heroSubtitle: 'One verse. One thought. One reflection every day.',
    searchPlaceholder: 'Search by Surah name...',
    footer: 'Quran Tadabbur • For personal notes',
    back: '← Back to Surah list',
    myNotes: 'My Reflection Notes',
    arabicLabel: 'Arabic Verse',
    notesIntro: 'All your written reflections will appear here in one place.',
    noNotes: 'No reflection notes yet. Write your reflection in a verse.',
    deleteNote: 'Delete Reflection',
    deleteConfirm: 'Do you want to delete this reflection note?',
    myAmalTitle: 'My Actions',
    amalIntro: 'Your planned actions from verses will appear here.',
    noAmal: 'No actions written yet. Write your action in a verse.',
    lastTitle: 'Your Most Recent Reflection',
    noLast: 'No reflection has been written yet.',
    myFavorites: 'My Favorite Verses',
    favoritesIntro: 'Save your favorite verses here.',
    noFavorites: 'No verses have been favorited yet. Tap ♡ beside a verse.',
    globalIntro: 'Search across Surah, verse, translation, reflection and action',
    noGlobal: 'No matching verse found.',
    noSurah: 'No Surah found.',
    cardMeta: 'reflections written',
    ayahSearch: 'Search verses, translation or reflection...',
    ayahSearchAria: 'Verse search',
    translationLabel: 'Translation',
    translationPlaceholder: 'Write your translation here...',
    tadabburLabel: 'Reflection',
    tadabburPlaceholder: 'Write what you understood from this verse here...',
    amalLabel: 'Action',
    amalPlaceholder: 'Write what you will do based on this verse...',
    locked: 'Locked',
    bismillahSeparate: 'Bismillah separate',
    ayat: 'Verse',
    saved: 'saved',
    actionWord: 'actions',
    reflectionWord: 'reflections',
    result: 'result',
    results: 'results',
    globalSearch: 'Global Search',
    language: 'Language',
    localStored: 'Locally Stored',
    lifetimeAccess: 'If you want lifetime access to your notes on any device, please log in.',
    lifetimeNoticeTitle: 'Lifetime Access — No Payment Required',
    lifetimeNotice: 'We do not charge any payment for lifetime access. We only ask for your opinion or your dua. 🤍',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your name...',
    nameRequired: 'Please enter your name to create an account.',
    opinionDuaLabel: 'Your Opinion / Dua',
    opinionDuaPlaceholder: 'Write your opinion or dua here...',
    opinionDuaRequired: 'Please write your opinion or dua to create an account.',
    awardKicker: 'Tadabbur of the Month',
    awardReflections: 'reflections',
  }
};
let uiLanguage = localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'roman';
function t(key){ return (UI_TEXT[uiLanguage] && UI_TEXT[uiLanguage][key]) || UI_TEXT.roman[key] || key; }
function isAdminUser(user=currentUser){ return !!(user && user.app_metadata && user.app_metadata.role === 'admin'); }
function getTadabburDisplayName(user=currentUser){
  if(!user) return '';
  const meta=user.user_metadata||{};
  const preferred=String(meta.display_name||meta.name||'').trim();
  if(preferred) return preferred.slice(0,80);
  const email=String(user.email||'').trim();
  return (email.split('@')[0]||'Quran Tadabbur User').slice(0,80);
}
let tadabburAwardTimer=null;
async function recordTadabburForMonth(surahId,index){
  if(!currentUser || !supabaseClient) return;
  const ayahKey=`${surahId}:${index}`;
  try{
    const {error}=await supabaseClient.rpc('record_tadabbur_entry',{p_ayah_key:ayahKey});
    if(error) console.warn('Tadabbur award tracking failed:',error);
  }catch(e){ console.warn('Tadabbur award tracking failed:',e); }
}
async function loadTadabburAward(){
  const box=document.getElementById('tadabburAward');
  if(!box || !supabaseClient) return;
  try{
    const {data:rows,error}=await supabaseClient.rpc('get_tadabbur_of_month');
    if(error) throw error;
    const winner=Array.isArray(rows)?rows[0]:rows;
    if(!winner || !winner.display_name){ box.innerHTML=''; box.classList.remove('is-visible'); return; }
    box.innerHTML=`<div class="tadabbur-award-inner"><span class="tadabbur-award-kicker">${esc(winner.kicker||t('awardKicker'))}</span><strong>${esc(winner.display_name)}</strong><span>${esc(winner.count)} ${esc(t('awardReflections'))}</span></div>`;
    box.classList.remove('is-visible');
    requestAnimationFrame(()=>box.classList.add('is-visible'));
  }catch(e){ console.warn('Tadabbur award load failed:',e); box.innerHTML=''; box.classList.remove('is-visible'); }
}
function localStoredNoticeHTML(a){
  if(currentUser) return '';
  const hasUserContent = !!(String(a?.translation||'').trim() || String(a?.tadabbur||'').trim() || String(a?.amal||'').trim());
  if(!hasUserContent) return '';
  return `<div class="local-storage-notice"><strong>${t('localStored')}</strong><span>${t('lifetimeAccess')}</span></div>`;
}

function saveLanguage(lang){ uiLanguage = lang === 'en' ? 'en' : 'roman'; try{ localStorage.setItem(LANGUAGE_KEY, uiLanguage); }catch(e){} }
function applyStaticLanguage(){
  const map = {
    notesBtn:'notesNav', todayBtn:'last', favoritesBtn:'favorites', amalBtn:'myAmal',
    heroTitle:'heroTitle', heroSubtitle:'heroSubtitle', footerText:'footer',
    searchInput:'searchPlaceholder'
  };
  Object.entries(map).forEach(([id,key])=>{ const el=document.getElementById(id); if(!el)return; if(id==='searchInput'){el.placeholder=t(key);el.setAttribute('aria-label',t(key));} else if(el.classList.contains('nav-action') || el.querySelector('.nav-label')) { const label=el.querySelector('.nav-label'); if(label) label.textContent=t(key); el.dataset.label=t(key); } else { el.textContent=t(key); } });
  const languageSelect=document.getElementById('languageSelect'); if(languageSelect) languageSelect.value=uiLanguage;
  const titleBox=document.getElementById('lifetimeNoticeTitle');
  const textBox=document.getElementById('lifetimeNoticeText');
  const nameLabel=document.getElementById('signupNameLabel');
  const nameInput=document.getElementById('signupName');
  const feedbackLabel=document.getElementById('signupFeedbackLabel');
  const feedbackInput=document.getElementById('signupFeedback');
  if(titleBox) titleBox.textContent=t('lifetimeNoticeTitle');
  if(textBox) textBox.textContent=t('lifetimeNotice');
  if(nameLabel) nameLabel.textContent=t('nameLabel');
  if(nameInput) nameInput.placeholder=t('namePlaceholder');
  if(feedbackLabel) feedbackLabel.textContent=t('opinionDuaLabel');
  if(feedbackInput) feedbackInput.placeholder=t('opinionDuaPlaceholder');
  document.documentElement.lang=uiLanguage==='en'?'en':'en';
}
function rerenderCurrentView(){
  if(document.querySelector('.reader') && currentSurahId){ openSurah(currentSurahId); return; }
  if(document.querySelector('.favorites-page')){ renderFavorites(); return; }
  if(document.querySelector('.notes-page')){ renderTadabburNotes(); return; }
  if(document.querySelector('.amal-page')){ renderMyAmal(); return; }
  if(document.querySelector('.today-page')){ renderLastTadabbur(); return; }
  if(document.querySelector('.global-search-page') && search.value.trim()){ renderGlobalSearch(); return; }
  renderHome();
}

const BISMILLAH = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ';

// Visual-only Quran display helper: keep the canonical source unchanged,
// but render U+0671 ALEF WASLA as a plain alif to avoid the unwanted
// small mark above the alif in this font.
function displayArabic(text){
  return esc(String(text || '').replace(/ٱ/g,'ا').replace(/۟/g,''));
}

function normalizeQuranAyahs(surahNumber, ayahCount){
  const source = Array.isArray(QURAN_ARABIC[surahNumber]) ? QURAN_ARABIC[surahNumber] : [];
  const hasSeparateBismillah = surahNumber !== 9 && source[0] && (surahNumber === 1 || (source[0].startsWith('ب') && source[0].includes('سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ')));
  const bismillah = hasSeparateBismillah ? BISMILLAH : '';

  // Tanzil keeps Al-Fatihah's Bismillah as numbered ayah 1. Since this app
  // displays Bismillah separately, its editable ayah list uses the remaining
  // source entries (ayahs 2–7). Other surahs keep their normal ayah numbers
  // while only the leading Bismillah is separated from ayah 1.
  const sourceAyahs = surahNumber === 1 && hasSeparateBismillah ? source.slice(1) : source;
  const ayahOffset = surahNumber === 1 && hasSeparateBismillah ? 1 : 0;
  const ayahsData = sourceAyahs.map((text, n) => {
    let arabic = text || '';
    if(surahNumber !== 1 && n === 0 && hasSeparateBismillah){
      const marker = arabic.indexOf('سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ');
      if(marker === 1 || marker === 2){
        const afterBismillah = marker + 'سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ'.length;
        arabic = arabic.slice(afterBismillah).trimStart();
      }
    }
    return { arabic, translation: '', tadabbur: '', favorite: false, sourceAyahNumber: n + 1 + ayahOffset };
  });

  return { bismillah, ayahsData, ayahOffset };
}

const defaultSurahs = SURAH_LIST.map(([name, arabic, ayahs], i) => {
  const built = normalizeQuranAyahs(i + 1, ayahs);
  return {
    id: `surah-${i + 1}`, number: i + 1, name: `Surah ${name}`, arabic, ayahs,
    bismillah: built.bismillah,
    ayahOffset: built.ayahOffset,
    ayahsData: built.ayahsData
  };
});

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
let currentSurahId = null;
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
    return {...def, id:def.id, bismillah:def.bismillah, ayahOffset:def.ayahOffset || 0, ayahsData:Array.from({length:def.ayahsData.length},(_,i)=>{
      const x=Array.isArray(old.ayahsData)?old.ayahsData[i]:null;
      return {
        arabic: def.ayahsData[i]?.arabic || '',
        translation:x?.translation?String(x.translation):'',
        tadabbur:x?.tadabbur?String(x.tadabbur):(x?.note?String(x.note):(oldNotes[i]||'')),
        amal:x?.amal?String(x.amal):'',
        favorite:Boolean(x?.favorite),
        tadabburUpdatedAt:Number(x?.tadabburUpdatedAt)||0
      };
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
  const dashboard=document.getElementById('authDashboard');
  const forgot=document.getElementById('forgotPassword');
  const feedbackWrap=document.getElementById('signupFeedbackWrap');
  const nameWrap=document.getElementById('signupNameWrap');

  authForm?.classList.toggle('hidden', mode==='reset-request' || mode==='reset-password' || mode==='account');
  feedbackWrap?.classList.toggle('hidden', mode!=='signup');
  nameWrap?.classList.toggle('hidden', mode!=='signup');
  dashboard?.classList.toggle('hidden', mode!=='account' || !isAdminUser());
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
    const titleBox=document.getElementById('lifetimeNoticeTitle');
    const textBox=document.getElementById('lifetimeNoticeText');
    const nameLabel=document.getElementById('signupNameLabel');
    const nameInput=document.getElementById('signupName');
    const feedbackLabel=document.getElementById('signupFeedbackLabel');
    const feedbackInput=document.getElementById('signupFeedback');
    if(titleBox) titleBox.textContent=t('lifetimeNoticeTitle');
    if(textBox) textBox.textContent=t('lifetimeNotice');
    if(nameLabel) nameLabel.textContent=t('nameLabel');
    if(nameInput) nameInput.placeholder=t('namePlaceholder');
    if(feedbackLabel) feedbackLabel.textContent=t('opinionDuaLabel');
    if(feedbackInput) feedbackInput.placeholder=t('opinionDuaPlaceholder');
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
  if(btn){ const label=btn.querySelector('.nav-label'); const value=currentUser ? (currentUser.email ? currentUser.email.split('@')[0] : 'Account') : 'Login'; if(label) label.textContent=value; btn.dataset.label=value; }
}

async function requestPasswordReset(e){
  e.preventDefault();
  if(!supabaseClient){setAuthStatus('Supabase configuration is missing.');return;}
  const email=document.getElementById('resetEmail').value.trim();
  if(!email){setAuthStatus('Please enter your email.');return;}
  setAuthStatus('Sending recovery link...');
  const redirectTo=new URL(window.location.href);
  redirectTo.hash='';
  redirectTo.search='';
  const {error}=await supabaseClient.auth.resetPasswordForEmail(email,{redirectTo:redirectTo.toString()});
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
  const name=String(document.getElementById('signupName')?.value||'').trim();
  const feedback=String(document.getElementById('signupFeedback')?.value||'').trim();
  if(signup && !name){setAuthStatus(t('nameRequired'));document.getElementById('signupName')?.focus();return;}
  if(signup && !feedback){setAuthStatus(t('opinionDuaRequired'));document.getElementById('signupFeedback')?.focus();return;}
  setAuthStatus('Please wait...');
  const result=signup
    ? await supabaseClient.auth.signUp({email,password,options:{data:{display_name:name,signup_feedback:feedback}}})
    : await supabaseClient.auth.signInWithPassword({email,password});
  if(result.error){setAuthStatus(result.error.message);return;}
  if(signup){
    if(!result.data.session){
      setAuthStatus('Account created. Please check your email to verify your account.','success');
      return;
    }
  }
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
  document.getElementById('authDashboard')?.addEventListener('click',()=>{ window.location.href='admin-dashboard.html'; });
  document.getElementById('authLogout')?.addEventListener('click',async()=>{if(supabaseClient) await supabaseClient.auth.signOut();closeAuthModal();});
  document.getElementById('authModal')?.addEventListener('click',(e)=>{if(e.target.id==='authModal') closeAuthModal();});
  setupPasswordToggles();
}
function esc(v){ return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }

function getTadabburNotes(){
  const items=[];
  data.forEach(s=>{
    s.ayahsData.forEach((a,i)=>{
      const note=String(a?.tadabbur||'').trim();
      if(note) items.push({surah:s,index:i,ayahNumber:Number.isInteger(s.ayahOffset)?i+1+s.ayahOffset:i+1,ayah:a,note});
    });
  });
  return items;
}

function renderTadabburNotes(){
  hero.style.display='none';
  search.style.display='none';
  const notes=getTadabburNotes();
  grid.innerHTML=`<section class="notes-page">
    <button class="back" id="notesBackBtn">${t('back')}</button>
    <div class="notes-head">
      <p class="eyebrow-small">${t('notesNav')}</p>
      <h2>${t('myNotes')}</h2>
      <p>${notes.length ? `${notes.length} ${t('reflectionWord')} ${t('saved')}` : t('notesIntro')}</p>
    </div>
    <div class="notes-list">
      ${notes.length ? notes.map(({surah,index,ayahNumber,ayah,note})=>`
        <article class="ayah note-item">
          <div class="ayah-top">
            <button class="note-surah-link" type="button" data-open-note="${esc(surah.id)}" data-open-index="${index}">${esc(surah.name)} • ${t('ayat')} ${ayahNumber}</button>
            <button class="note-delete-btn" type="button" data-delete-note-surah="${esc(surah.id)}" data-delete-note-index="${index}" aria-label="${t('deleteNote')}" title="${t('deleteNote')}">×</button>
          </div>
          <div class="ayah-field ayah-arabic-wrap">
            <label>${t('arabicLabel')} <span class="locked-label">🔒 ${t('locked')}</span></label>
            <div class="ayah-arabic" dir="rtl" lang="ar">${displayArabic(ayah.arabic)}</div>
          </div>
          <div class="ayah-field note-content-field">
            <label>${t('tadabburLabel')}</label>
            <div class="note-content">${esc(note)}</div>
          </div>
        </article>
      `).join('') : `<div class="empty notes-empty">${t('noNotes')}</div>`}
    </div>
  </section>`;
  document.getElementById('notesBackBtn').onclick=renderHome;
}

function deleteTadabburNote(id,index){
  const s=data.find(x=>x.id===id);
  if(!s || !s.ayahsData[index]) return;
  if(!String(s.ayahsData[index].tadabbur||'').trim()) return;
  const confirmed = window.confirm(t('deleteConfirm'));
  if(!confirmed) return;
  s.ayahsData[index].tadabbur='';
  save();
  renderTadabburNotes();
}

function openTadabburAyah(id,index){
  const s=data.find(x=>x.id===id);
  if(!s) return;
  openSurah(id);
  const ayah=document.querySelector(`.ayah[data-ayah-index="${index}"]`);
  if(ayah) ayah.scrollIntoView({behavior:'instant',block:'start'});
}

function getAmalNotes(){
  const items=[];
  data.forEach(s=>{
    s.ayahsData.forEach((a,i)=>{
      const amal=String(a?.amal||'').trim();
      if(amal) items.push({
        surah:s,
        index:i,
        ayahNumber:Number.isInteger(s.ayahOffset)?i+1+s.ayahOffset:i+1,
        ayah:a,
        amal
      });
    });
  });
  return items;
}

function renderMyAmal(){
  hero.style.display='none';
  search.style.display='none';
  const items=getAmalNotes();
  grid.innerHTML=`<section class="amal-page">
    <button class="back" id="amalBackBtn">${t('back')}</button>
    <div class="amal-head">
      <p class="eyebrow-small">${t('myAmal')}</p>
      <h2>${t('myAmalTitle')}</h2>
      <p>${items.length ? `${items.length} ${t('actionWord')} ${t('saved')}` : t('amalIntro')}</p>
    </div>
    <div class="amal-list">
      ${items.length ? items.map(({surah,index,ayahNumber,ayah,amal})=>`
        <article class="ayah amal-item">
          <div class="ayah-top">
            <button class="amal-surah-link" type="button" data-open-amal="${esc(surah.id)}" data-open-index="${index}">${esc(surah.name)} • ${t('ayat')} ${ayahNumber}</button>
            <button class="favorite-btn ${ayah.favorite ? 'is-favorite' : ''}" type="button" data-favorite-surah="${esc(surah.id)}" data-favorite-index="${index}" aria-label="${ayah.favorite ? 'Remove from favorites' : 'Add to favorites'}" title="${ayah.favorite ? 'Remove from favorites' : 'Add to favorites'}">${ayah.favorite ? '♥' : '♡'}</button>
          </div>
          <div class="ayah-field ayah-arabic-wrap">
            <label>${t('arabicLabel')} <span class="locked-label">🔒 ${t('locked')}</span></label>
            <div class="ayah-arabic" dir="rtl" lang="ar">${displayArabic(ayah.arabic)}</div>
          </div>
          <div class="ayah-field">
            <label>${t('translationLabel')}</label>
            <div class="ayah-translation">${esc(ayah.translation||'')}</div>
          </div>
          <div class="ayah-field">
            <label>${t('amalLabel')}</label>
            <div class="amal amal-display">${esc(amal)}</div>
          </div>
        </article>
      `).join('') : `<div class="empty amal-empty">${t('noAmal')}</div>`}
    </div>
  </section>`;
  document.getElementById('amalBackBtn').onclick=renderHome;
}

function getLastTadabbur(){
  const pool=[];
  data.forEach(s=>{
    s.ayahsData.forEach((a,i)=>{
      const note=String(a?.tadabbur||'').trim();
      if(note) pool.push({
        surah:s,
        index:i,
        ayahNumber:Number.isInteger(s.ayahOffset)?i+1+s.ayahOffset:i+1,
        ayah:a,
        updatedAt:Number(a?.tadabburUpdatedAt)||0
      });
    });
  });
  if(!pool.length) return null;
  const tracked=pool.filter(item=>item.updatedAt>0).sort((a,b)=>b.updatedAt-a.updatedAt);
  return tracked[0] || pool[pool.length-1];
}

function renderLastTadabbur(){
  hero.style.display='none';
  search.style.display='none';
  const item=getLastTadabbur();
  if(!item){
    grid.innerHTML=`<section class="today-page">
      <button class="back" id="todayBackBtn">${t('back')}</button>
      <div class="empty">${t('noLast')}</div>
    </section>`;
    document.getElementById('todayBackBtn').onclick=renderHome;
    return;
  }
  const {surah,index,ayahNumber,ayah}=item;
  grid.innerHTML=`<section class="today-page">
    <button class="back" id="todayBackBtn">${t('back')}</button>
    <div class="today-head">
      <p class="eyebrow-small">${t('last')}</p>
      <h2>${t('lastTitle')}</h2>
      <p>${esc(surah.name)} • ${t('ayat')} ${ayahNumber}</p>
    </div>
    <article class="ayah today-item">
      <div class="ayah-top">
        <button class="today-surah-link" type="button" data-open-today="${esc(surah.id)}" data-open-index="${index}">${esc(surah.name)} • ${t('ayat')} ${ayahNumber}</button>
        <button class="favorite-btn ${ayah.favorite ? 'is-favorite' : ''}" type="button" data-favorite-surah="${esc(surah.id)}" data-favorite-index="${index}" aria-label="${ayah.favorite ? 'Remove from favorites' : 'Add to favorites'}" title="${ayah.favorite ? 'Remove from favorites' : 'Add to favorites'}">${ayah.favorite ? '♥' : '♡'}</button>
      </div>
      <div class="ayah-field ayah-arabic-wrap">
        <label>${t('arabicLabel')} <span class="locked-label">🔒 ${t('locked')}</span></label>
        <div class="ayah-arabic" dir="rtl" lang="ar">${displayArabic(ayah.arabic)}</div>
      </div>
      <div class="ayah-field">
        <label>${t('translationLabel')}</label>
        <div class="ayah-translation">${esc(ayah.translation||'')}</div>
      </div>
      <div class="ayah-field">
        <label>${t('tadabburLabel')}</label>
        <div class="tadabbur">${esc(ayah.tadabbur||'')}</div>
      </div>
    </article>
  </section>`;
  document.getElementById('todayBackBtn').onclick=renderHome;
}

function getFavoriteAyahs(){
  const items=[];
  data.forEach(s=>{
    s.ayahsData.forEach((a,i)=>{
      if(a && a.favorite) items.push({
        surah:s,
        index:i,
        ayahNumber:Number.isInteger(s.ayahOffset) ? i + 1 + s.ayahOffset : i + 1,
        ayah:a
      });
    });
  });
  return items;
}

function renderFavorites(){
  hero.style.display='none';
  search.style.display='none';
  const favorites=getFavoriteAyahs();
  grid.innerHTML=`<section class="favorites-page">
    <button class="back" id="favoritesBackBtn">${t('back')}</button>
    <div class="favorites-head">
      <p class="eyebrow-small">My Favorites</p>
      <h2>${t('myFavorites')}</h2>
      <p>${favorites.length ? `${favorites.length} ${t('ayat')} ${t('saved')}` : t('favoritesIntro')}</p>
    </div>
    <div class="favorites-list">
      ${favorites.length ? favorites.map(({surah,index,ayahNumber,ayah})=>`
        <article class="ayah favorite-item">
          <div class="ayah-top">
            <button class="favorite-surah-link" type="button" data-open-favorite="${esc(surah.id)}" data-open-index="${index}">
              ${esc(surah.name)} • ${t('ayat')} ${ayahNumber}
            </button>
            <button class="favorite-btn is-favorite" type="button" data-favorite-surah="${esc(surah.id)}" data-favorite-index="${index}" aria-label="Remove from favorites" title="Remove from favorites">♥</button>
          </div>
          <div class="ayah-field ayah-arabic-wrap">
            <label>${t('arabicLabel')} <span class="locked-label">🔒 ${t('locked')}</span></label>
            <div class="ayah-arabic" dir="rtl" lang="ar">${displayArabic(ayah.arabic)}</div>
          </div>
        </article>
      `).join('') : `<div class="empty favorites-empty">${t('noFavorites')}</div>`}
    </div>
  </section>`;
  document.getElementById('favoritesBackBtn').onclick=renderHome;
}

function toggleFavorite(id,index){
  const s=data.find(x=>x.id===id);
  if(!s || !s.ayahsData[index]) return;
  s.ayahsData[index].favorite=!Boolean(s.ayahsData[index].favorite);
  save();

  const btn=document.querySelector(`.favorite-btn[data-favorite-surah="${CSS.escape(id)}"][data-favorite-index="${index}"]`);
  if(btn){
    const active=s.ayahsData[index].favorite;
    btn.classList.toggle('is-favorite',active);
    btn.textContent=active?'♥':'♡';
    btn.setAttribute('aria-label',active?'Remove from favorites':'Add to favorites');
    btn.title=active?'Remove from favorites':'Add to favorites';
  }

  if(document.querySelector('.favorites-page')) renderFavorites();
}

function openFavoriteAyah(id,index){
  const s=data.find(x=>x.id===id);
  if(!s) return;
  openSurah(id);
  const ayah=document.querySelector(`.ayah[data-ayah-index="${index}"]`);
  if(ayah) ayah.scrollIntoView({behavior:'instant',block:'start'});
}

function normalizeSearchText(value){
  return String(value||'')
    .replace(/ٱ/g,'ا')
    .replace(/۟/g,'')
    .replace(/[\u064B-\u065F\u0670]/g,'')
    .toLowerCase()
    .trim();
}

function globalAyahHTML(s,i){
  const a=s.ayahsData[i] || {arabic:'',translation:'',tadabbur:'',amal:''};
  const ayahNumber=Number.isInteger(s.ayahOffset) ? i + 1 + s.ayahOffset : i + 1;
  return `<article class="ayah global-result-item" data-open-global="${esc(s.id)}" data-open-index="${i}" tabindex="0" role="button" aria-label="Open ${esc(s.name)} ${t('ayat')} ${ayahNumber}">
    <div class="ayah-top">
      <button class="global-surah-link" type="button" data-open-global="${esc(s.id)}" data-open-index="${i}">${esc(s.name)} • ${t('ayat')} ${ayahNumber}</button>
      <button class="favorite-btn ${a.favorite ? 'is-favorite' : ''}" type="button" data-favorite-surah="${esc(s.id)}" data-favorite-index="${i}" aria-label="${a.favorite ? 'Remove from favorites' : 'Add to favorites'}" title="${a.favorite ? 'Remove from favorites' : 'Add to favorites'}">${a.favorite ? '♥' : '♡'}</button>
    </div>
    <div class="ayah-field ayah-arabic-wrap">
      <label>${t('arabicLabel')} <span class="locked-label">🔒 ${t('locked')}</span></label>
      <div class="ayah-arabic" dir="rtl" lang="ar">${displayArabic(a.arabic)}</div>
    </div>
    ${a.translation ? `<div class="ayah-field"><label>${t('translationLabel')}</label><div class="ayah-translation global-result-text">${esc(a.translation)}</div></div>` : ''}
    ${a.tadabbur ? `<div class="ayah-field"><label>${t('tadabburLabel')}</label><div class="tadabbur global-result-text">${esc(a.tadabbur)}</div></div>` : ''}
    ${a.amal ? `<div class="ayah-field"><label>${t('amalLabel')}</label><div class="amal global-result-text">${esc(a.amal)}</div></div>` : ''}
  </article>`;
}

function renderGlobalSearch(){
  hero.style.display='';
  search.style.display='';
  const raw=search.value.trim();
  const q=normalizeSearchText(raw);
  if(!q){
    renderHome();
    return;
  }
  const matches=[];
  data.forEach(s=>{
    s.ayahsData.forEach((a,i)=>{
      const ayahNumber=Number.isInteger(s.ayahOffset) ? i + 1 + s.ayahOffset : i + 1;
      const haystack=normalizeSearchText(`${s.number} ${s.name} ${s.arabic} ${ayahNumber} ${a.arabic||''} ${a.translation||''} ${a.tadabbur||''} ${a.amal||''}`);
      if(haystack.includes(q)) matches.push({s,i});
    });
  });
  grid.innerHTML=`<section class="global-search-page">
    <div class="global-search-head">
      <p class="eyebrow-small">${t('globalSearch')}</p>
      <h2>${matches.length} ${matches.length === 1 ? t('result') : t('results')}</h2>
      <p>${t('globalIntro')}</p>
    </div>
    <div class="global-search-list">${matches.length ? matches.map(({s,i})=>globalAyahHTML(s,i)).join('') : `<div class="empty global-search-empty">${t('noGlobal')}</div>`}</div>
  </section>`;
}

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
      <div class="card-meta">${s.ayahs} ${t('ayat')} • ${s.ayahsData.filter(a => a.tadabbur.trim()).length} ${t('cardMeta')}</div>
    </article>`).join('') : `<div class="empty">${t('noSurah')}</div>`;
  loadTadabburAward();
}
function openSurah(id){
  const s=data.find(x=>x.id===id); if(!s)return;
  currentSurahId=id;
  hero.style.display='none';
  search.style.display='none';
  grid.innerHTML=`<section class="reader">
    <div class="ayah-search-wrap reader-search">
      <span>⌕</span>
      <input id="ayahSearchInput" type="search" placeholder="${t('ayahSearch')}" aria-label="${t('ayahSearchAria')}">
    </div>
    <button class="back" id="backBtn">${t('back')}</button>
    <div class="reader-head"><div class="arabic-name">${esc(s.arabic)}</div><h2>${esc(s.name)}</h2><p>${s.ayahs} ${t('ayat')}${s.number === 1 && s.bismillah ? ` • ${t('bismillahSeparate')}` : ''}</p></div>
    ${s.bismillah ? `<div class="bismillah-display" dir="rtl" lang="ar">${displayArabic(s.bismillah)}</div>` : ''}
    <div id="ayahList">${s.ayahsData.map((a,i)=>ayahHTML(s,i)).join('')}</div>
  </section>`;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
  document.getElementById('backBtn').onclick=renderHome;
  grid.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('input',()=>updateAyahField(s.id,Number(el.dataset.index),el.dataset.field,el.innerText)));
  const ayahSearch=document.getElementById('ayahSearchInput');
  ayahSearch.addEventListener('input',()=>filterAyahs(s.id,ayahSearch.value));
}
function ayahHTML(s,i){
  const a=s.ayahsData[i] || {arabic:'',translation:'',tadabbur:''};
  return `<article class="ayah" data-ayah-index="${i}">
    <div class="ayah-top">
      <h3>${t('ayat')} ${Number.isInteger(s.ayahOffset) ? i + 1 + s.ayahOffset : i + 1}</h3>
      <button class="favorite-btn ${a.favorite ? 'is-favorite' : ''}" type="button" data-favorite-surah="${esc(s.id)}" data-favorite-index="${i}" aria-label="${a.favorite ? 'Remove from favorites' : 'Add to favorites'}" title="${a.favorite ? 'Remove from favorites' : 'Add to favorites'}">${a.favorite ? '♥' : '♡'}</button>
    </div>
    <div class="ayah-field ayah-arabic-wrap">
      <label>${t('arabicLabel')} <span class="locked-label">🔒 ${t('locked')}</span></label>
      <div class="ayah-arabic" dir="rtl" lang="ar">${displayArabic(a.arabic)}</div>
    </div>
    <div class="ayah-field">
      <label>${t('translationLabel')}</label>
      <div class="ayah-translation" contenteditable="true" dir="ltr" data-field="translation" data-index="${i}" data-placeholder="${t('translationPlaceholder')}">${esc(a.translation)}</div>
    </div>
    <div class="ayah-field">
      <label>${t('tadabburLabel')}</label>
      <div class="tadabbur" contenteditable="true" data-field="tadabbur" data-index="${i}" data-placeholder="${t('tadabburPlaceholder')}">${esc(a.tadabbur)}</div>
    </div>
    <div class="ayah-field">
      <label>${t('amalLabel')}</label>
      <div class="amal" contenteditable="true" dir="ltr" data-field="amal" data-index="${i}" data-placeholder="${t('amalPlaceholder')}">${esc(a.amal||'')}</div>
    </div>
    ${localStoredNoticeHTML(a)}
  </article>`;
}

function filterAyahs(id, query){
  const s=data.find(x=>x.id===id); if(!s)return;
  const q=query.trim().toLowerCase();
  const list=document.getElementById('ayahList'); if(!list)return;
  const matches=s.ayahsData.map((a,i)=>({a,i})).filter(({a,i})=>{
    if(!q)return true;
    const ayahNumber = Number.isInteger(s.ayahOffset) ? i + 1 + s.ayahOffset : i + 1;
    return `${ayahNumber} ${a.arabic||''} ${a.translation||''} ${a.tadabbur||''} ${a.amal||''}`.toLowerCase().includes(q);
  });
  list.innerHTML=matches.length
    ? matches.map(({i})=>ayahHTML(s,i)).join('')
    : `<div class="empty">${t('noGlobal')}</div>`;
  list.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('input',()=>updateAyahField(s.id,Number(el.dataset.index),el.dataset.field,el.innerText)));
}

function updateAyahField(id,i,field,v){
  const s=data.find(x=>x.id===id); if(!s)return;
  if(!s.ayahsData[i])s.ayahsData[i]={arabic:'',translation:'',tadabbur:'',amal:'',tadabburUpdatedAt:0};
  const previousValue=String(s.ayahsData[i][field]||'').trim();
  s.ayahsData[i][field]=v;
  if(field==='tadabbur'){
    const note=String(v||'').trim();
    s.ayahsData[i].tadabburUpdatedAt=note?Date.now():0;
    if(!previousValue && note) recordTadabburForMonth(id,i);
  }
  save();
  if(!currentUser){
    const card=document.querySelector(`.ayah[data-ayah-index="${i}"]`);
    if(card){
      const oldNotice=card.querySelector('.local-storage-notice');
      const hasContent=!!(String(s.ayahsData[i].translation||'').trim() || String(s.ayahsData[i].tadabbur||'').trim() || String(s.ayahsData[i].amal||'').trim());
      if(hasContent && !oldNotice){card.insertAdjacentHTML('beforeend',localStoredNoticeHTML(s.ayahsData[i]));}
      if(!hasContent && oldNotice) oldNotice.remove();
    }
  }
}

grid.addEventListener('click',e=>{
  const favoriteBtn=e.target.closest('.favorite-btn');
  if(favoriteBtn){
    e.preventDefault();
    e.stopPropagation();
    if(favoriteBtn.dataset.favoriteSurah){
      toggleFavorite(favoriteBtn.dataset.favoriteSurah,Number(favoriteBtn.dataset.favoriteIndex));
    }
    return;
  }

  const openGlobal=e.target.closest('[data-open-global]');
  if(openGlobal){
    e.preventDefault();
    e.stopPropagation();
    openSurah(openGlobal.dataset.openGlobal);
    const ayah=document.querySelector(`.ayah[data-ayah-index="${Number(openGlobal.dataset.openIndex)}"]`);
    if(ayah) ayah.scrollIntoView({behavior:'instant',block:'start'});
    return;
  }

  const openFavorite=e.target.closest('[data-open-favorite]');
  if(openFavorite){
    e.preventDefault();
    openFavoriteAyah(openFavorite.dataset.openFavorite,Number(openFavorite.dataset.openIndex));
    return;
  }

  const openToday=e.target.closest('[data-open-today]');
  if(openToday){
    e.preventDefault();
    openTadabburAyah(openToday.dataset.openToday,Number(openToday.dataset.openIndex));
    return;
  }

  const openAmal=e.target.closest('[data-open-amal]');
  if(openAmal){
    e.preventDefault();
    openTadabburAyah(openAmal.dataset.openAmal,Number(openAmal.dataset.openIndex));
    return;
  }

  const openNote=e.target.closest('[data-open-note]');
  if(openNote){
    e.preventDefault();
    openTadabburAyah(openNote.dataset.openNote,Number(openNote.dataset.openIndex));
    return;
  }

  const deleteNote=e.target.closest('[data-delete-note-surah]');
  if(deleteNote){
    e.preventDefault();
    e.stopPropagation();
    deleteTadabburNote(deleteNote.dataset.deleteNoteSurah,Number(deleteNote.dataset.deleteNoteIndex));
    return;
  }

  const card=e.target.closest('.surah-card');
  if(card)openSurah(card.dataset.id);
});
grid.addEventListener('keydown',e=>{
  const card=e.target.closest('.surah-card');
  if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openSurah(card.dataset.id);}
});
document.getElementById('homeBtn')?.addEventListener('click',()=>{
  renderHome();
  window.scrollTo({top:0,left:0,behavior:'instant'});
});
const backToTop=document.getElementById('backToTop');
if(backToTop){
  const updateBackToTop=()=>backToTop.classList.toggle('is-visible',window.scrollY>320);
  window.addEventListener('scroll',updateBackToTop,{passive:true});
  backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  updateBackToTop();
}
document.getElementById('todayBtn')?.addEventListener('click',()=>{
  renderLastTadabbur();
  window.scrollTo({top:0,left:0,behavior:'instant'});
});
document.getElementById('favoritesBtn')?.addEventListener('click',()=>{
  renderFavorites();
  window.scrollTo({top:0,left:0,behavior:'instant'});
});
document.getElementById('amalBtn')?.addEventListener('click',()=>{
  renderMyAmal();
  window.scrollTo({top:0,left:0,behavior:'instant'});
});
document.getElementById('notesBtn')?.addEventListener('click',()=>{
  renderTadabburNotes();
  window.scrollTo({top:0,left:0,behavior:'instant'});
});
search.addEventListener('input',renderGlobalSearch);
const languageSelect=document.getElementById('languageSelect');
if(languageSelect){
  languageSelect.value=uiLanguage;
  languageSelect.addEventListener('change',()=>{ saveLanguage(languageSelect.value); applyStaticLanguage(); rerenderCurrentView(); });
}
applyStaticLanguage();
setupAuthUI();
renderHome();
initAuth();
