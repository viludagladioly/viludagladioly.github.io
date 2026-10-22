/* =========================================================
   FALLING PETALS CANVAS ANIMATION
   ========================================================= */
(function() {
  var COLORS = [
    { c: "#e5484d", d: "#991b1b", t: "#fef08a" }, // Red
    { c: "#f43f5e", d: "#be123c", t: "#fef08a" }, // Salmon Pink
    { c: "#fdf4ff", d: "#d8b4fe", t: "#fde047" }, // Cream White
    { c: "#eab308", d: "#854d0e", t: "#ef4444" }, // Yellow Red
    { c: "#8b5cf6", d: "#5b21b6", t: "#fef08a" }, // Purple
    { c: "#f97316", d: "#9a3412", t: "#fef08a" }  // Orange
  ];

  var canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function createGladiolusPetals() {
    particles = [];
    var count = window.innerWidth < 768 ? 10 : 16;
    for (var i = 0; i < count; i++) {
      var palette = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 12 + 18,
        mainColor: palette.c,
        throatColor: palette.t,
        accentColor: palette.d,
        vx: (Math.random() - 0.5) * 0.4,
        vy: Math.random() * 0.5 + 0.25,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.012,
        vRotY: (Math.random() - 0.5) * 0.018,
        vRotZ: (Math.random() - 0.5) * 0.01,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.005
      });
    }
  }
  createGladiolusPetals();

  function drawGladiolusTepal(ctx, size, mainColor, throatColor, accentColor) {
    var w = size * 0.6;
    var h = size * 1.4;

    ctx.beginPath();
    ctx.moveTo(0, h * 0.45);
    
    ctx.bezierCurveTo(-w * 0.5, h * 0.2, -w * 1.0, -h * 0.15, -w * 0.65, -h * 0.42);
    ctx.quadraticCurveTo(-w * 0.25, -h * 0.52, 0, -h * 0.5);
    ctx.quadraticCurveTo(w * 0.25, -h * 0.52, w * 0.65, -h * 0.42);
    ctx.bezierCurveTo(w * 1.0, -h * 0.15, w * 0.5, h * 0.2, 0, h * 0.45);
    ctx.closePath();

    var grad = ctx.createLinearGradient(0, h * 0.45, 0, -h * 0.5);
    grad.addColorStop(0, throatColor);
    grad.addColorStop(0.35, mainColor);
    grad.addColorStop(1, accentColor);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 0.8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, h * 0.4); ctx.quadraticCurveTo(-w * 0.2, 0, -w * 0.25, -h * 0.35);
    ctx.moveTo(0, h * 0.4); ctx.quadraticCurveTo(0, 0, 0, -h * 0.42);
    ctx.moveTo(0, h * 0.4); ctx.quadraticCurveTo(w * 0.2, 0, w * 0.25, -h * 0.35);
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 0.7;
    ctx.globalAlpha = 0.4;
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  function animateCanvas() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(function (p) {
      p.sway += p.swaySpeed;
      p.x += p.vx + Math.sin(p.sway) * 0.4;
      p.y += p.vy;
      p.rotX += p.vRotX;
      p.rotY += p.vRotY;
      p.rotZ += p.vRotZ;

      if (p.y > canvas.height + 40) p.y = -40;
      if (p.x < -40) p.x = canvas.width + 40;
      if (p.x > canvas.width + 40) p.x = -40;

      ctx.save();
      ctx.translate(p.x, p.y);
      
      var scaleX = Math.cos(p.rotY);
      var scaleY = Math.cos(p.rotX);
      ctx.rotate(p.rotZ);
      ctx.scale(scaleX, scaleY);
      ctx.globalAlpha = 0.8;

      drawGladiolusTepal(ctx, p.size, p.mainColor, p.throatColor, p.accentColor);
      ctx.restore();
    });

    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();
})();

/* =========================================================
   CONFIG & STATE
   ========================================================= */
var CFG = {
  GALLERY_URL: "",             
  PHOTO_SRC: "",               
  EMAIL: "viludagladioly@gmail.com",
  PHONE: "+421903488910",
  PHONE_DISPLAY: "+421 903 488 910",
  ADDRESS: { sk: "Kostany nad Turcom 43, Slovensko", en: "Kostany nad Turcom 43, Slovakia" }
};

var lang = "sk";

/* ---------- Static Text Translations ---------- */
var T = {
  sk: {
    nav_home: "Domov", nav_gallery: "Galéria", nav_club: "Klub", nav_articles: "Články", nav_contact: "Kontakt",
    h1a: "Gladioly. ", h1b: "Krásne kvety, z ktorých ", h1c: "rastie úsmev.",
    hero_p: "Táto stránka je venovaná láske k gladiolám – kvetom, ktoré každé leto rozkvitnú v mojej záhrade a pripomínajú mi krásu, trpezlivosť a radosť z prírody. Verím, že ich čaro osloví aj vás.",
    cta_gallery: "Pozrieť si galériu", cta_club: "Gladiolový klub",
    photo_hint: "Moja záhrada",
    stat_1: "Rokov rodinnej tradície", stat_2: "Pestovaných odrôd", stat_3: "Šampiónov výstavy",
    why_h: "Prečo gladioly",
    f1_h: "Z našej záhrady", f1_p: "Každý kvet vyrastie na našej záhrade a o jeho zber a výber sa staráme ručne.",
    f2_h: "Farby na celé leto", f2_p: "Sadíme postupne, aby gladioly kvitli od júla až do septembra.",
    f3_h: "Rady od pestovateľa", f3_p: "V odborných článkoch a v klube zdieľame skúsenosti, ktoré nám za roky vyrástli medzi záhonmi.",
    teaser_h: "Gladiolový klub", teaser_p: "Stretávame sa online aj v záhrade. Vymieňame cibuľky, tipy a fotky. Spoznajte aj našu hviezdu, gladiolu Martin.", teaser_cta: "Zistiť viac o klube",
    latest_h: "Najnovšie pestovateľské články", all_posts: "Všetky odborné články",
    g_h1: "Galéria kvetov", g_p: "Fotografie z našej záhrady od prvých jarných výhonkov až po plné letné kvety.",
    g_btn: "Otvoriť celú galériu", g_btn_soon: "Galéria sa pripravuje",
    g_note: "Odkaz na galériu sa doplní hneď po dokončení fotenia.",
    c_h1a: "Gladiolový", c_h1b: "klub",
    c_p: "Klub je pre všetkých, ktorí majú radi gladioly. Či ste začiatočník s prvými cibuľkami, alebo skúsený pestovateľ, nájdete tu rady, inšpiráciu a spoločenstvo.",
    m_chip: "Odroda v centre pozornosti",
    m_p: "DV Monument je výnimočná odroda s impozantnými veľkými kvetmi a dokonale vybudovaným stvolom. Jej majestátny fialový odtieň a perfektná symetria z nej robia hviezdu každej výstavy.",
    m_breeder: "Vypestoval: Ľuboš Viluda",
    b_h: "Čo klub ponúka",
    exhibitions_h: "Výstavy gladiol",
    exhibitions_p: "Klub organizuje každý rok viacero výstav, na ktorých prezentujeme to najlepšie zo sveta gladiol. Ak chcete byť v obraze o najbližších podujatiach, sledujte nás na sociálnych sieťach:",
    cal_h: "Kalendár pestovateľa", cal_p: "Vyberte mesiac a zistite, čo majú gladioly práve na programe v záhrade.",
    f_name: "Meno", f_email: "E-mail", f_reason: "Dôvod správy", f_msg: "Správa",
    opt_order: "Objednávka cibuliek",
    opt_collab: "Spolupráca",
    opt_advice: "Rada k pestovaniu",
    opt_general: "Všeobecná otázka",
    f_pref_contact: "Preferovaný spôsob kontaktovania",
    opt_pref_email: "E-mail",
    opt_pref_phone: "Telefón",
    f_phone_optional: "Telefónne číslo (nepovinné)",
    opt_choose: "– Vyberte dôvod –",
    opt_choose_contact: "– Vyberte –",
    k_social: "Sociálne siete",
    contact_note_title: "Poznámka:",
    contact_note_body: "Ak máte záujem o objednávku cibuliek, môžete si konkrétne názvy odrôd pozrieť v mojej galérii a napísať ich do správy. Taktiež vám viem zavolať a poradiť s dostupnosťou, alebo pre vás zostaviť namiešaný balíček cibuliek podľa vášho požadovaného množstva a preferencií.",
    blog_p: "Kompletné pestovateľské príručky a overené metodiky z našej rodinnej záhrady.",
    faq_h: "Časté otázky (FAQ)",
    faq_p: "Odpovede na najčastejšie otázky o výsadbe, pestovaní a starostlivosti o gladioly.",
    k_p: "Máte otázku k pestovaniu alebo chcete poradiť s výberom odrôd? Radi vám odpovieme.",
    k_email: "E-mail", k_phone: "Telefón", k_addr: "Adresa", k_hours: "Dostupnosť", k_hours_v: "Po - Pi: 8:00 - 17:00",
    k_send: "Odoslať správu",
    ok_open: "Otvára sa váš e-mailový program. Ak sa nič nestane, napíšte nám priamo na ",
    err_fill: "Vyplňte prosím meno a platný e-mail.",
    back_to_articles: "← Späť na všetky články",
    read_article: "Prečítať celý článok →",
    read_time: "minút čítania",
    art_not_found: "Článok nebol nájdený."
  },
  en: {
    nav_home: "Home", nav_gallery: "Gallery", nav_club: "Club", nav_articles: "Articles", nav_contact: "Contact",
    h1a: "Gladioli. ", h1b: "Beautiful flowers where ", h1c: "smiles grow.",
    hero_p: "This page is dedicated to my love of gladioli – flowers that bloom every summer in my garden and remind me of the beauty, patience and joy of nature. I hope their charm speaks to you too.",
    cta_gallery: "See the gallery", cta_club: "Gladiolus club",
    photo_hint: "My Garden",
    stat_1: "Years of Family Tradition", stat_2: "Cultivated Varieties", stat_3: "Exhibition Champions",
    why_h: "Why gladioli",
    f1_h: "From our garden", f1_p: "Every flower grows in our own garden, and we pick and choose them by hand.",
    f2_h: "Color all summer", f2_p: "We plant in stages so the gladioli bloom from July through September.",
    f3_h: "Advice from the grower", f3_p: "In our detailed guides and club we share what years among the flower beds have taught us.",
    teaser_h: "The gladiolus club", teaser_p: "We meet online and in the garden. We swap corms, tips and photos. Come and meet our star, the gladiolus Martin.", teaser_cta: "Learn more about the club",
    latest_h: "Latest Growing Guides", all_posts: "All Expert Articles",
    g_h1: "Flower Gallery", g_p: "Photos from our garden from early spring shoots to full summer blooms.",
    g_btn: "Open full gallery", g_btn_soon: "Gallery coming soon",
    g_note: "The gallery link will be added as soon as photos are ready.",
    c_h1a: "Gladiolus", c_h1b: "club",
    c_p: "The club is for everyone who loves gladioli. Whether you are a beginner with your first corms or an experienced grower, you will find advice, inspiration and community.",
    m_chip: "Variety in the spotlight",
    m_p: "DV Monument is an exceptional variety with impressively large flowers and a perfectly built spike. Its majestic violet colour and flawless symmetry make it the star of every exhibition.",
    m_breeder: "Bred by: Ľuboš Viluda",
    b_h: "What the club offers",
    exhibitions_h: "Gladiolus Exhibitions",
    exhibitions_p: "The club organises multiple exhibitions every year, showcasing the very best of the gladiolus world. To stay up to date on upcoming events, follow us on social media:",
    cal_h: "Grower's calendar", cal_p: "Pick a month to see what the gladioli are up to in the garden.",
    f_name: "Name", f_email: "Email", f_reason: "Reason for message", f_msg: "Message",
    opt_order: "Corm Order",
    opt_collab: "Collaboration",
    opt_advice: "Growing Advice",
    opt_general: "General Question",
    f_pref_contact: "Preferred Contact Method",
    opt_pref_email: "Email",
    opt_pref_phone: "Phone",
    f_phone_optional: "Phone Number (Optional)",
    contact_note_title: "Note:",
    contact_note_body: "If you are interested in ordering corms, you can check specific variety names in my gallery and include them in your message. I can also give you a call to advise on availability, or create a custom corm mix tailored to your preferred quantity and preferences.",
    blog_p: "Complete growing guides and verified methodologies from our family garden.",
    faq_h: "Frequently Asked Questions (FAQ)",
    faq_p: "Answers to the most common questions about planting, growing and caring for gladioli.",
    k_p: "Have a growing question or need help picking varieties? Write or call us.",
    k_email: "Email", k_phone: "Phone", k_addr: "Address", k_hours: "Availability", k_hours_v: "Mon - Fri: 8:00 - 17:00",
    k_send: "Send message",
    ok_open: "Opening your email app. If nothing happens, write to us directly at ",
    err_fill: "Please fill in your name and a valid email.",
    back_to_articles: "← Back to all articles",
    read_article: "Read full guide →",
    read_time: "min read",
    art_not_found: "Article not found."
  }
};

/* ---------- Comprehensive ~1,000 Word Articles ---------- */

/* ---------- Club Benefits & Specs ---------- */
var BENEFITS = [
  { h: { sk: "Odborné návody", en: "Expert Guides" }, p: { sk: "Jednoduché aj pokročilé metodiky od sadenia po uskladnenie cibuliek.", en: "Simple to advanced guides from planting to storing corms." } },
  { h: { sk: "Výmena cibuliek", en: "Corm Swaps" }, p: { sk: "Raz za rok si členovia vymieňajú cibuľky a skúšajú vzácne nové odrody.", en: "Once a year members swap corms and try rare new varieties." } },
  { h: { sk: "Fotogaléria členov", en: "Member Gallery" }, p: { sk: "Pochváľte sa svojou úrodou. Najkrajšie fotky pridáme do oficiálnej galérie.", en: "Show what you grew. We add the best photos to the gallery." } },
  { h: { sk: "Prechádzka záhradou", en: "Garden Visits" }, p: { sk: "V sezóne kvitnutia pozývame členov na osobnú prehliadku našich záhonov.", en: "In blooming season we invite members for a walk among our flower beds." } }
];

var SPECS = [
  [{ sk: "Farba", en: "Color" }, { sk: "Fialová", en: "Violet" }],
  [{ sk: "Výška stvolu", en: "Stem Height" }, { sk: "165 – 180 cm", en: "165 – 180 cm" }],
  [{ sk: "Čas kvitnutia", en: "Blooming Time" }, { sk: "Stredne skorá (80–85 dní)", en: "Mid-season (80–85 days)" }],
  [{ sk: "Počet pukov", en: "Florets per Spike" }, { sk: "22 – 24 pukov (8–10 otvorených naraz)", en: "22 – 24 florets (8–10 open at once)" }],
  [{ sk: "Vhodnosť na rez", en: "Cut Flower Quality" }, { sk: "Vynikajúca (trvácnosť vo váze 10-12 dní)", en: "Exceptional (10-12 days vase life)" }]
];

var FAQS = [
  { q: { sk: "Kedy sa sadia gladioly na jar?", en: "When do I plant gladioli in spring?" },
    a: { sk: "Od polovice apríla do júna, keď teplota pôdy v hĺbke 10 cm dosiahne aspoň 10 °C. Ak sadíte každé dva týždne, budú vám kvitnúť postupne počas celého leta.", en: "From mid-April to June, once soil temperature at 10 cm depth reaches 10 °C. Planting every two weeks yields continuous blooms." } },
  { q: { sk: "Ako hlboko mám zasadiť cibuľky?", en: "How deep should I plant corms?" },
    a: { sk: "Približne 10 až 15 cm hlboko (3-násobok výšky cibuľky), špičkou nahor. V ľahkej piesočnatej pôde sadíme hlbšie, v ťažkej ílovitej plytšie.", en: "About 10 to 15 cm deep (3 times the height of the corm), pointed end up. Plant deeper in sandy soil, shallower in clay." } },
  { q: { sk: "Kedy rezať gladioly do vázy?", en: "When should I cut gladioli for a vase?" },
    a: { sk: "Zavčas ráno, keď sa na spodku stvolu vyfarbí a pootvorí 1. až 3. kvietok. Na rastline nezabudnite nechať aspoň 4 spodné listy pre výživu novej cibuľky.", en: "Early in the morning when the lowest 1 to 3 florets show color and open. Always leave at least 4 lower leaves on the plant." } },
  { q: { sk: "Musím cibuľky na zimu vykopať?", en: "Do I have to dig up corms for winter?" },
    a: { sk: "Áno, gladioly neprezimujú v pôde. Vykopte ich 4 až 6 týždňov po odkvitnutí pred príchodom mrazov a uskladnite pri teplote 4 až 8 °C.", en: "Yes, gladioli cannot survive freezing winter soil. Dig them up 4–6 weeks after blooming and store at 4–8 °C." } },
  { q: { sk: "Ako sa pridám do Gladiolového klubu?", en: "How do I join the Gladiolus Club?" },
    a: { sk: "Napíšte nám správu cez kontaktný formulár alebo na náš e-mail. Členstvo je úplne zadarmo a bez záväzkov.", en: "Send us a message via the contact form or directly via email. Membership is completely free and non-binding." } }
];

/* ---------- Calendar Data ---------- */
var MONTHS = {
  sk: ["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
};
var MSHORT = {
  sk: ["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],
  en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
};
var PHASES = {
  plan: { sk: "Plánovanie & Kontrola", en: "Planning & Check" },
  grow: { sk: "Sadenie & Rast", en: "Planting & Growth" },
  bloom: { sk: "Kvitnutie & Rez", en: "Blooming & Cutting" },
  store: { sk: "Zber & Skladovanie", en: "Harvest & Storage" }
};
var CAL = [
  ["plan", { sk: "Skontrolujte uskladnené cibuľky v pivnici a vyraďte mäkké alebo napadnuté kusy.", en: "Check stored corms in the cellar and discard any soft or infected ones." }],
  ["plan", { sk: "Naplánujte striedanie záhonov a objednajte novinky medzi odrodami.", en: "Plan crop rotation beds and order exciting new hybrid varieties." }],
  ["grow", { sk: "Vyberte cibuľky na svetlo, ošúpte suchú šupku a namorte ich proti hubovým chorobám.", en: "Bring corms to light, peel dry tunics, and soak in protective fungicide." }],
  ["grow", { sk: "Prvá výsadba do záhrady, hneď ako teplota pôdy dosiahne 10 °C.", en: "First garden planting as soon as soil temperatures reach 10 °C." }],
  ["grow", { sk: "Pokračujte v postupnej výsadbe každých 10-14 dní a aplikujte 1. dávku výživy.", en: "Continue staggered plantings every 10-14 days and apply 1st nutrient feed." }],
  ["grow", { sk: "Zalievajte ku koreňom, aplikujte mulč a namontujte oporné kolíky pre vysoké odrody.", en: "Water deep at roots, apply surface mulch, and put up support stakes." }],
  ["bloom", { sk: "Začiatok kvitnutia. Režte kvety ráno a sledujte prípadný výskyt strapiek.", en: "Blooming begins. Cut flower spikes early morning and monitor for thrips." }],
  ["bloom", { sk: "Vrchol kvitnutia. Odstraňujte odkvitnuté stvoly a prihnojte draslíkom pre cibuľky.", en: "Peak bloom season. Remove spent spikes and feed potassium for corm sizing." }],
  ["bloom", { sk: "Posledné kvety. Prestaňte hnojiť a nechajte listy vyživovať dcérske cibuľky.", en: "Final blooms. Cease fertilization and let remaining foliage mature new corms." }],
  ["store", { sk: "Zber cibuliek zo zeme! Zrežte stonku na 2 cm a začnite vysokoteplotné sušenie.", en: "Harvest time! Cut stems to 2 cm and begin high-temperature curing." }],
  ["store", { sk: "Očistite osušené cibuľky, oddeľte starú materskú cibuľku a roztrieďte brut.", en: "Clean cured corms, snap off old dried mother corms, and grade by size." }],
  ["store", { sk: "Uložte očistené cibuľky do tmavej pivnice pri stabilnej teplote 4–8 °C.", en: "Store cleaned corms in a dark cellar held at stable 4–8 °C." }]
];

var COLORS = [
  { c: "#e5484d", d: "#b82a38", n: { sk: "Červené", en: "Red" } },
  { c: "#ee8fb0", d: "#c9587f", n: { sk: "Ružové", en: "Pink" } },
  { c: "#f7f4ea", d: "#cfc9b4", n: { sk: "Biele", en: "White" } },
  { c: "#f3c13a", d: "#c9921a", n: { sk: "Žlté", en: "Yellow" } },
  { c: "#9b6bd1", d: "#6d3fa3", n: { sk: "Fialové", en: "Purple" } },
  { c: "#f08a3c", d: "#c75f17", n: { sk: "Oranžové", en: "Orange" } }
];

/* ---------- Helpers ---------- */
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
function tr(o) { return o ? o[lang] || o.sk || "" : ""; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

/* ---------- Scroll Observer Setup ---------- */
var observer;
function setupScrollAnimations() {
  if ('IntersectionObserver' in window) {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    $$('.reveal, .reveal-cascade').forEach(function(elem) {
      observer.observe(elem);
    });
  } else {
    $$('.reveal, .reveal-cascade').forEach(function(elem) {
      elem.classList.add('is-visible');
    });
  }
}

/* ---------- Gladiolus SVG Vector Generator ---------- */
function spike(col, animate) {
  var c = col.c, d = col.d, out = "";
  out += '<svg viewBox="0 0 300 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">';
  out += '<path d="M150 520 C146 400 154 250 150 70" stroke="#2f8a6f" stroke-width="7" fill="none" stroke-linecap="round"/>';
  out += '<path d="M150 520 C118 430 86 330 66 190 C112 290 142 400 150 520Z" fill="#3aa585"/>';
  out += '<path d="M150 520 C182 440 214 350 238 230 C192 320 158 410 150 520Z" fill="#4dbb98"/>';
  var i, y, side, s, x;
  for (i = 0; i < 7; i++) {
    y = 390 - i * 44; side = i % 2 ? 1 : -1; s = 1 - i * 0.09; x = 150 + side * 24 * s;
    out += '<g transform="translate(' + x + ' ' + y + ') scale(' + s.toFixed(2) + ')"><g' + (animate ? ' class="pop" style="--i:' + i + '"' : '') + '>' +
      '<ellipse cx="0" cy="-16" rx="17" ry="28" fill="' + c + '" transform="rotate(' + (side * -52) + ')"/>' +
      '<ellipse cx="0" cy="-16" rx="17" ry="28" fill="' + c + '" transform="rotate(' + (side * 8) + ')"/>' +
      '<ellipse cx="0" cy="-12" rx="15" ry="24" fill="' + c + '" transform="rotate(' + (side * 62) + ')"/>' +
      '<ellipse cx="0" cy="8" rx="10" ry="14" fill="' + d + '" transform="rotate(' + (side * 170) + ')"/>' +
      '<circle r="6" fill="#fff6d6"/></g></g>';
  }
  var b = [[150, 100, 11, 18], [152, 70, 8, 14], [150, 48, 6, 11]];
  b.forEach(function (q, k) {
    out += '<ellipse cx="' + q[0] + '" cy="' + q[1] + '" rx="' + q[2] + '" ry="' + q[3] + '" fill="' + d + '"' + (animate ? ' class="pop" style="--i:' + (7 + k) + '"' : '') + '/>';
  });
  return out + '</svg>';
}

/* ---------- Rendering UI ---------- */
function applyStatic() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(function (n) { 
    var key = n.getAttribute("data-i18n");
    if (T[lang][key]) n.textContent = T[lang][key]; 
  });
  $("#lang").textContent = lang === "sk" ? "EN" : "SK";
  $("#lang").setAttribute("aria-label", lang === "sk" ? "Switch to English" : "Prepnúť do slovenčiny");
  
  $("#kEmail").textContent = CFG.EMAIL; $("#kEmail").href = "mailto:" + CFG.EMAIL;
  $("#kPhone").textContent = CFG.PHONE_DISPLAY; $("#kPhone").href = "tel:" + CFG.PHONE;
  $("#kAddr").textContent = tr(CFG.ADDRESS);
  
  var g = $("#galleryBtn"), note = $("#galleryNote");
  if (CFG.GALLERY_URL) {
    g.href = CFG.GALLERY_URL; g.target = "_blank"; g.rel = "noopener"; g.removeAttribute("aria-disabled"); note.hidden = true;
    g.textContent = T[lang].g_btn;
  } else {
    g.removeAttribute("href"); g.removeAttribute("target"); g.setAttribute("aria-disabled", "true"); note.hidden = false;
    g.textContent = T[lang].g_btn_soon;
  }
}

function renderHero() {
  var box = $("#heroPhoto");
  $$("svg, img", box).forEach(function (n) { n.remove(); });
  if (CFG.PHOTO_SRC) {
    var im = el("img"); im.src = CFG.PHOTO_SRC; im.alt = "Gladioly Viluda"; box.appendChild(im); $("#photoHint").hidden = true;
  } else {
    box.insertAdjacentHTML("beforeend", spike(COLORS[0], true)); $("#photoHint").hidden = false;
  }
}

function renderStaticArt() {
  $("#homeMartin").innerHTML = spike(COLORS[1], false).replace("<svg ", '<svg style="width:65%;max-width:240px;height:auto" ');
  $("#martinArt").innerHTML = spike(COLORS[1], false);
  var tiles = $("#tiles"); tiles.innerHTML = "";
  COLORS.forEach(function (col) {
    var t = el("div", "tile"); t.innerHTML = spike(col, false); t.appendChild(el("span", "", tr(col.n))); tiles.appendChild(t);
  });
}

function renderSpecs() {
  var dl = $("#specs"); dl.innerHTML = "";
  SPECS.forEach(function (s) {
    dl.appendChild(el("dt", "", tr(s[0])));
    dl.appendChild(el("dd", "", tr(s[1])));
  });
}

function renderBenefits() {
  var box = $("#benefits"); box.innerHTML = "";
  BENEFITS.forEach(function (b, i) {
    var c = el("div", "card"); c.appendChild(el("div", "ico", String(i + 1))); c.appendChild(el("h3", "", tr(b.h))); c.appendChild(el("p", "", tr(b.p))); box.appendChild(c);
  });
}

/* ---------- Render Articles & Article Reader ---------- */
function renderArticles() {
  var grid = $("#articlesGrid"); grid.innerHTML = "";
  var homeGrid = $("#homeArticles"); homeGrid.innerHTML = "";

  ARTICLES.forEach(function (art, idx) {
    // Main Articles Grid Card
    var card = el("a", "article-card");
    card.href = "#/clanky/" + art.id;
    
    var thumb = el("div", "article-thumb");
    if (art.image) {
      var img = el("img");
      img.src = art.image;
      img.alt = tr(art.title);
      img.loading = "lazy";
      thumb.appendChild(img);
    } else {
      thumb.innerHTML = spike(COLORS[art.colorIndex != null ? art.colorIndex : 0], false);
    }
    
    var body = el("div", "article-body");
    body.appendChild(el("div", "article-tag", tr(art.tag)));
    body.appendChild(el("h3", "article-title", tr(art.title)));
    body.appendChild(el("p", "article-excerpt", tr(art.excerpt)));
    
    var meta = el("div", "article-meta");
    meta.appendChild(el("span", "", art.date));
    meta.appendChild(el("span", "", art.readTime + " " + T[lang].read_time));
    body.appendChild(meta);

    card.appendChild(thumb);
    card.appendChild(body);
    grid.appendChild(card);

    // Home Page Preview Cards (top 3 newest articles, with newest at #1)
    if (idx < 3) {
      var homeCard = card.cloneNode(true);
      homeCard.href = "#/clanky/" + art.id;
      homeGrid.appendChild(homeCard);
    }
  });
}

function renderArticleDetail(artId) {
  var art = ARTICLES.find(function(a) { return a.id === artId; });
  var reader = $("#articleReader");
  reader.innerHTML = "";

  if (!art) {
    reader.appendChild(el("h2", "", T[lang].art_not_found));
    var b = el("a", "btn", T[lang].back_to_articles);
    b.href = "#/clanky";
    reader.appendChild(b);
    return;
  }

  // Back Button
  var backBtn = el("a", "btn ghost", T[lang].back_to_articles);
  backBtn.href = "#/clanky";
  backBtn.style.marginBottom = "1.5rem";
  reader.appendChild(backBtn);

  // Header Section
  var head = el("div", "reader-header");
  var meta = el("div", "reader-meta-bar");
  meta.appendChild(el("span", "chip", tr(art.tag)));
  meta.appendChild(el("span", "", art.date));
  meta.appendChild(el("span", "", "•"));
  meta.appendChild(el("span", "", art.readTime + " " + T[lang].read_time));
  head.appendChild(meta);
  head.appendChild(el("h1", "reader-title", tr(art.title)));
  reader.appendChild(head);

  // Banner Illustration or Photo
  var banner = el("div", "reader-banner");
  if (art.image) {
    var bannerImg = el("img");
    bannerImg.src = art.image;
    bannerImg.alt = tr(art.title);
    banner.appendChild(bannerImg);
  } else {
    banner.innerHTML = spike(COLORS[art.colorIndex != null ? art.colorIndex : 0], false);
  }
  reader.appendChild(banner);

  // Body Content
  var body = el("div", "reader-content");
  body.innerHTML = tr(art.content);
  reader.appendChild(body);

  // Bottom Navigation
  var footerNav = el("div", "", "");
  footerNav.style.marginTop = "3rem";
  footerNav.style.paddingTop = "1.5rem";
  footerNav.style.borderTop = "1px solid var(--line)";
  var b2 = el("a", "btn", T[lang].back_to_articles);
  b2.href = "#/clanky";
  footerNav.appendChild(b2);
  reader.appendChild(footerNav);
}

function renderFaq() {
  var box = $("#faq"); box.innerHTML = "";
  FAQS.forEach(function (f, i) {
    var w = el("div", "qa"), btn = el("button"), body = el("div", "body");
    btn.type = "button"; btn.setAttribute("aria-expanded", "false"); btn.id = "fq" + i;
    btn.appendChild(el("span", "", tr(f.q))); btn.appendChild(el("span", "plus", "+"));
    body.hidden = true; body.setAttribute("role", "region"); body.setAttribute("aria-labelledby", btn.id); body.appendChild(el("p", "", tr(f.a)));
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open)); body.hidden = open;
    });
    w.appendChild(btn); w.appendChild(body); box.appendChild(w);
  });
}

var month = new Date().getMonth();
function renderCal() {
  var box = $("#months"); box.innerHTML = "";
  MSHORT[lang].forEach(function (m, i) {
    var b = el("button", "mbtn", m); b.type = "button"; b.setAttribute("aria-pressed", String(i === month));
    b.addEventListener("click", function () { month = i; renderCal(); });
    box.appendChild(b);
  });
  var c = $("#mcard"); c.innerHTML = "";
  c.appendChild(el("span", "chip", tr(PHASES[CAL[month][0]])));
  c.appendChild(el("h3", "", MONTHS[lang][month]));
  c.appendChild(el("p", "", tr(CAL[month][1])));
}

function renderAll() { 
  applyStatic(); 
  renderHero(); 
  renderStaticArt(); 
  renderSpecs(); 
  renderBenefits(); 
  renderArticles(); 
  renderFaq(); 
  renderCal(); 
}

/* ---------- Forms ---------- */
function wireForm(formId, statusId, formType) {
  var f = $("#" + formId), st = $("#" + statusId);
  if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(f);
    var name = (d.get("name") || "").trim();
    var email = (d.get("email") || "").trim();
    var phone = (d.get("phone") || "").trim();
    var preferredContact = (d.get("preferredContact") || "E-mail").trim();
    var reason = (d.get("reason") || "").trim();
    var msg = (d.get("msg") || "").trim();

    if (!name || !/^\S+@\S+\.\S+$/.test(email)) { 
      st.textContent = T[lang].err_fill; 
      return; 
    }

    var subject = "Nová správa - " + (reason || "Kontakt");
    var mailBody = 
      "========================================\n" +
      "       NOVÁ SPRÁVA Z WEBSTRÁNKY        \n" +
      "========================================\n\n" +
      "📌 ZÁKLADNÉ ÚDAJE:\n" +
      "----------------------------------------\n" +
      "• Meno a priezvisko: " + name + "\n" +
      "• E-mail: " + email + "\n" +
      "• Telefónne číslo: " + (phone || "Neuvedené") + "\n" +
      "• Preferovaný kontakt: " + preferredContact + "\n\n" +
      "📋 PODROBNOSTI SPRÁVY:\n" +
      "----------------------------------------\n" +
      "• Dôvod správy: " + reason + "\n\n" +
      "💬 TEXT SPRÁVY:\n" +
      "----------------------------------------\n" +
      (msg || "Bez textu správy") + "\n\n" +
      "========================================\n" +
      "Odoslané z webu Gladioly Viluda";

    st.textContent = T[lang].ok_open + CFG.EMAIL + ".";
    window.location.href = "mailto:" + CFG.EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(mailBody);
  });
}
wireForm("contactForm", "contactStatus", "Kontaktný formulár");

/* ---------- Router with Route & Language Persistence ---------- */
function performRouteTransition(updateDOM) {
  if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.startViewTransition(updateDOM);
  } else {
    updateDOM();
  }
}

function route() {
  performRouteTransition(function() {
    var h = location.hash.replace(/^#\/?/, "");
    
    var activePage = "";
    var articleId = null;

    if (h.indexOf("clanky/") === 0) {
      activePage = "clanky-detail";
      articleId = h.replace("clanky/", "");
    } else {
      var valid = ["", "galeria", "klub", "clanky", "faq", "kontakt"];
      activePage = valid.indexOf(h) >= 0 ? h : "";
    }

    $$(".page").forEach(function (p) { 
      var isCurrent = p.getAttribute("data-page") === activePage;
      p.classList.toggle("on", isCurrent); 
    });
    
    $$("a.nav").forEach(function (a) { 
      var r = a.getAttribute("data-route");
      if (r === activePage || (activePage === "clanky-detail" && r === "clanky")) {
        a.setAttribute("aria-current", "page"); 
      } else {
        a.removeAttribute("aria-current"); 
      }
    });

    if (activePage === "clanky-detail" && articleId) {
      renderArticleDetail(articleId);
    }

    $("#menu").classList.remove("open"); 
    $("#burger").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);

    setTimeout(setupScrollAnimations, 50);
  });
}

window.addEventListener("hashchange", route);

document.addEventListener("click", function (e) {
  var a = e.target.closest("[data-scroll]");
  if (a) { 
    e.preventDefault(); 
    var t = document.getElementById(a.getAttribute("data-scroll")); 
    if (t) t.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); 
  }
});

$("#burger").addEventListener("click", function () {
  var o = $("#menu").classList.toggle("open"); this.setAttribute("aria-expanded", String(o));
});

$("#lang").addEventListener("click", function () { 
  lang = lang === "sk" ? "en" : "sk"; 
  store("gv-lang", lang); 
  renderAll(); 
  
  var h = location.hash.replace(/^#\/?/, "");
  if (h.indexOf("clanky/") === 0) {
    renderArticleDetail(h.replace("clanky/", ""));
  }
});

window.addEventListener("scroll", function () { 
  $("#head").classList.toggle("scrolled", window.scrollY > 10); 
}, { passive: true });

/* ---------- Initialize Application ---------- */
var savedLang = store("gv-lang");
lang = (savedLang === "en" || savedLang === "sk") ? savedLang : "sk";

renderAll();
route();
