/* =========================================================
   GLADIOLY VILUDA - ARTICLES DATABASE
   Add new articles to the front of this array.
   ========================================================= */

var ARTICLES = [
  {
    id: "sadanie-a-priprava-pody",
    tag: { sk: "Sprievodca výsadbou", en: "Planting Guide" },
    readTime: "8",
    date: "12. Apríl 2026",
    colorIndex: 0,
    title: {
      sk: "Kompletný sprievodca jarným sadením gladiol: Od analýzy pôdy až po prvý zelený výhonok",
      en: "Complete Guide to Spring Gladiolus Planting: From Soil Testing to the First Green Shoot"
    },
    excerpt: {
      sk: "Naučte sa profesionálne postupy prípravy pôdy, morenia cibuliek a presného časovania jarného sadenia pre zdravé kvetenstvo.",
      en: "Learn professional soil preparation protocols, corm dipping procedures, and exact spring timing for robust, champion blooms."
    },
    content: {
      sk: `
        <div class="reader-callout">
          <strong>Kľúčové pravidlo pestovateľa:</strong> Úspech kvitnutia gladiol sa z 80 % rozhoduje ešte pred tým, ako cibuľka vojde do zeme. Správna teplota pôdy, drenáž a hĺbka výsadby sú základom pre rovné a pevné stvoly.
        </div>

        <h2>1. Výber stanoviska a nároky na svetlo</h2>
        <p>Gladioly sú heliofilné rastliny, čo znamená, že vyžadujú priame slnečné svetlo počas celého dňa. Pre dosiahnutie plného rozkvetu a intenzívnych farieb potrebujú minimálne 8 až 10 hodín neprerušovaného slnečného svitu denne. Vyhnite sa výsadbe v blízkosti vysokých stromov, budov alebo hustých živých plotov, ktoré vytvárajú tieň a konkurujú gladiolám v odbere vlahy a živín.</p>
        <p>Veterné podmienky sú ďalším kľúčovým faktorom. Vzhľadom na to, že moderné kultivary dosahujú výšku 120 až 160 cm, stvoly sú náchylné na vyvrátenie pri silnom nárazovom vetre. Výsadbové záhony smerujte tak, aby boli chránené pred prevládajúcimi severozápadnými vetrami, alebo plánujte oporné systémy už pri samotnom sadení.</p>

        <h2>2. Príprava pôdy a jej chemicko-fyzikálne vlastnosti</h2>
        <p>Gladiolám najviac vyhovujú ľahšie až stredne ťažké hlinito-piesočnaté pôdy s vysokým obsahom humusu a pH v rozmedzí 6,5 až 7,0. Pôda musí byť dokonale priepustná. Stagnujúca voda v koreňovej zóne spôsobuje rýchly rozvoj fytopatogénnych húb (najmä <em>Fusarium oxysporum</em>) a následné hniloby cibuliek.</p>
        <h3>Kroky prípravy záhonu:</h3>
        <ul>
          <li><strong>Jesenná rýľovačka:</strong> Pôdu do hĺbky 30 cm prekyprite už na jeseň a zapracujte vyzretý maštaľný hnoj alebo kompost (5 – 8 kg/m²). NIKDY nepoužívajte čerstvý hnoj v roku výsadby!</li>
          <li><strong>Jarná úprava:</strong> Na jar pôdu len jemne prekyprite hrabľami. Pridajte pomaly rozpustné minerálne hnojivá s vyšším obsahom fosforu a draslíka.</li>
          <li><strong>Drenážna vrstva:</strong> Na ťažších pôdach vykopte výsadbovú brázdu o 5 cm hlbšiu a na jej dno nasypte vrstvu čistého riečneho piesku. Cibuľka bude sedieť na pieskovom vankúši, čo zamedzí hromadeniu vody.</li>
        </ul>

        <h2>3. Príprava a morenie cibuliek pred výsadbou</h2>
        <p>Mesiac pred plánovanou výsadbou vyberte cibuľky zo zimného skladu. Ošúpte z nich vrchné suché šupky, pričom dávajte pozor, aby ste nepoškodili vegetačný vrchol (očko) ani spodič s koreňovými pukmi. Zdravá cibuľka je pevná, bez škvrnitosti a mäkkých miest.</p>
        <p>Morenie je neobchádzateľný preventívny krok proti hubovým chorobám a strapkám (<em>Thrips simplex</em>):</p>
        <ol>
          <li><strong>Fungicídny kúpeľ:</strong> Cibuľky ponorte na 30 minút do roztoku fungicídu (napr. Switch alebo Maxim XL) podľa návodu výrobcu.</li>
          <li><strong>Insekticídna ochrana:</strong> Ak ste v minulosti mali problémy so strapkami, pridajte do kúpeľa systémový insekticíd.</li>
          <li><strong>Sušenie:</strong> Po namorení nechajte cibuľky oschnúť na novinovom papieri v teplej a svetlej miestnosti (20 °C) počas 24 hodín. Tým stimulujete rané klíčenie.</li>
        </ol>

        <h2>4. Pravidlo hĺbky a sponu výsadby</h2>
        <p>Správna hĺbka výsadby poskytuje rastline prirodzenú stabilitu. Základné pravidlo znie: **Hĺbka výsadby rovná sa trojnásobku výšky cibuľky** (merané od spodku cibuľky po povrch pôdy).</p>
        <ul>
          <li><strong>Veľké cibuľky (obvod 12/14+ cm):</strong> Sadíme do hĺbky 12 až 15 cm. Vzdialenosť medzi cibuľkami v rade 15 cm, vzdialenosť medzi radmi 25 – 30 cm.</li>
          <li><strong>Stredné cibuľky (obvod 10/12 cm):</strong> Sadíme do hĺbky 10 cm. Vzdialenosť v rade 10 – 12 cm.</li>
          <li><strong>Piesočnaté pôdy:</strong> Sadíme o 2 cm hlbšie pre lepšiu stabilitu.</li>
          <li><strong>Ílovité pôdy:</strong> Sadíme o 2 cm plytšie, aby mala cibuľka dostatok kyslíka.</li>
        </ul>

        <h2>5. Postupná výsadba pre nepretržité kvitnutie</h2>
        <p>Namiesto výsadby všetkých cibuliek v jeden deň uplatnite postupnú výsadbu (staggered planting). Začnite v polovici apríla, keď teplota pôdy v hĺbke 10 cm dosiahne stabilných 10 °C. Sadte ďalšiu dávku cibuliek každých 10 až 14 dní až do polovice júna. Týmto jednoduchým trikom si zabezpečíte nepretržitý prísun čerstvých kvetov od začiatku júla až do prvých jesenných mrazov v októbri.</p>
      `,
      en: `
        <div class="reader-callout">
          <strong>Master Grower's Rule:</strong> 80% of gladiolus blooming success is determined before the corm even touches the soil. Soil temperature, drainage, and precise planting depth form the foundation for straight, robust stems.
        </div>

        <h2>1. Site Selection and Sunlight Requirements</h2>
        <p>Gladioli are heliophilic plants requiring full, direct sunlight throughout the entire day. To achieve maximum bloom spike length and vivid colors, they need a minimum of 8 to 10 hours of unobstructed sunlight daily. Avoid planting near large trees, dense hedges, or structure walls that cast shade and compete for soil moisture and nutrients.</p>
        <p>Wind conditions represent another critical variable. Modern hybrid cultivars regularly reach heights between 120 and 160 cm, making flower spikes vulnerable to lodging under strong wind gusts. Orient planting rows to run parallel to prevailing winds or utilize protective windbreaks while ensuring support stakes are installed early in the season.</p>

        <h2>2. Soil Preparation and Physical Properties</h2>
        <p>Gladioli thrive best in well-drained, sandy-loam soils rich in organic matter, with an optimal pH between 6.5 and 7.0. Soil permeability is mandatory. Standing water around the root zone triggers immediate fungal pathogens (primarily <em>Fusarium oxysporum</em>), leading to destructive corm rot.</p>
        <h3>Bed Preparation Steps:</h3>
        <ul>
          <li><strong>Autumn Tilling:</strong> Loosen the soil to a depth of 30 cm in autumn, incorporating well-rotted compost or aged manure (5–8 kg/m²). NEVER apply fresh manure during the planting spring!</li>
          <li><strong>Spring Conditioning:</strong> Rake the bed surface level in spring. Incorporate slow-release mineral fertilizers high in phosphorus and potassium.</li>
          <li><strong>Drainage Cushioning:</strong> In heavy clay soils, dig planting trenches 5 cm deeper and line the bottom with coarse river sand. Resting corms on a sand bed prevents water accumulation around basal plates.</li>
        </ul>

        <h2>3. Corm Preparation and Protective Dipping</h2>
        <p>Four weeks before intended planting, retrieve stored corms from winter cold storage. Carefully peel away dry outer husks without damaging the emerging apical sprout or the basal root ring. A high-quality corm feels dense, firm, and free of discoloration or soft spots.</p>
        <p>Chemical or organic dipping is an indispensable preventative measure against fungal decay and thrips (<em>Thrips simplex</em>):</p>
        <ol>
          <li><strong>Fungicidal Soak:</strong> Submerge corms for 30 minutes in a broad-spectrum fungicide bath according to labeled instructions.</li>
          <li><strong>Insecticidal Protection:</strong> If thrips were present in previous seasons, include a systemic insecticide in the soaking solution.</li>
          <li><strong>Drying & Sprouting:</strong> Spread soaked corms on newspaper in a warm, bright room (20 °C) for 24 hours to dry and stimulate uniform root node emergence.</li>
        </ol>

        <h2>4. Planting Depth and Spacing Protocol</h2>
        <p>Proper planting depth provides necessary structural anchoring for heavy flowering spikes. The golden formula states: **Planting depth equals three times the vertical height of the corm** (measured from basal plate to surface level).</p>
        <ul>
          <li><strong>Jumbo Corms (12/14+ cm circumference):</strong> Plant 12 to 15 cm deep. Space 15 cm apart within rows, leaving 25–30 cm between rows.</li>
          <li><strong>Medium Corms (10/12 cm circumference):</strong> Plant 10 cm deep. Space 10–12 cm within rows.</li>
          <li><strong>Sandy Soils:</strong> Increase depth by 2 cm for superior anchoring.</li>
          <li><strong>Heavy Clay Soils:</strong> Decrease depth by 2 cm to ensure adequate oxygen availability.</li>
        </ul>

        <h2>5. Staggered Planting Strategy</h2>
        <p>Avoid planting your entire corm collection on a single date. Implement a staggered schedule starting in mid-April when soil temperatures at 10 cm depth reliably reach 10 °C. Plant successive batches every 10 to 14 days until mid-June. This simple technique guarantees a continuous harvest of fresh cut blooms from early July through early autumn frosts.</p>
      `
    }
  },
  {
    id: "letna-starostlivost-zalievka-hnojenie",
    tag: { sk: "Letná starostlivosť", en: "Summer Care" },
    readTime: "9",
    date: "18. Máj 2026",
    colorIndex: 1,
    title: {
      sk: "Letná opatera gladiol: Profesionálny manažment zálievky, výživy a ochrany pred škodcami",
      en: "Summer Gladiolus Care: Professional Irrigation, Nutrition, and Pest Management"
    },
    excerpt: {
      sk: "Ako správne zalievať, dávkovať živiny v troch fázach rastu a chrániť kvety pred obávanými strapkami bez poškodenia pukov.",
      en: "Master deep watering regimes, 3-stage targeted fertilization, and systemic protection against destructive thrips."
    },
    content: {
      sk: `
        <div class="reader-callout">
          <strong>Tajomstvo výstavy:</strong> Počas tvorby kvetného puku spotrebuje gladiola najviac vody. Nepravidelná zálievka v tomto období spôsobuje zakrivenie kvetného stvolu, čo znehodnocuje kvet.
        </div>

        <h2>1. Vodný režim a technika zálievky</h2>
        <p>Gladioly potrebujú hlbokú a pravidelnú zálievku. Plytké a časté kropenie povrchu pôdy je neúčinné a podporuje vývoj povrchových koreňov na úkor hlbokého koreňového systému. V období aktívneho rastu a najmä od fázy 3. listu až po odkvitnutie vyžadujú gladioly 15 až 20 litrov vody na m² týždenne (pri horúčavách až dvakrát týždenne).</p>
        <h3>Základné pravidlá zalievania:</h3>
        <ul>
          <li><strong>Zalievanie k koreňom:</strong> Vodu aplikujte výhradne priamo k báze rastlín alebo do brázdy medzi radmi. Nikdy nekropte listy a puky zhora! Vlhkosť na listoch v kombinácii s teplom vytvára ideálne podmienky pre botrytídu (<em>Botrytis gladiolorum</em>).</li>
          <li><strong>Ranné hodiny:</strong> Zalievajte zavčasu ráno, aby prípadná rozstreknutá voda na stonke do večera preschla.</li>
          <li><strong>Mulčovanie:</strong> Po dosiahnutí výšky rastlín 20 cm aplikujte medzi riadky 5 cm vrstvu organického mulču (pokosená suchá tráva alebo slamová drť). Mulč drží vlhkosť, potláča burinu a zabraňuje prehrievaniu cibuliek.</li>
        </ul>

        <h2>2. Trojfázový systém hnojenia pre maximálnu veľkosť kvetov</h2>
        <p>Gladiola je náročná na živiny, no nadmerné hnojenie dusíkom vedie k mäkkým, prerasteným stvolom, ktoré sa lámu, a k náchylnosti na choroby. Výživu rozdeľte do troch presne časovaných fáz:</p>

        <h3>Fáza 1: Tvorba listovej hmoty (2. až 3. pravý list)</h3>
        <p>Rastlina vyžaduje dusík pre stavbu stonky a listov. Aplikujte dusičnan amónny alebo plynné organicko-minerálne hnojivo s pomerom NPK 3:1:1. Dávka: 25 g/m².</p>

        <h3>Fáza 2: Vývoj kvetného stvolu (5. až 6. list)</h3>
        <p>V tejto fáze sa zakladajú kvety na stonke. Dusík znížte na minimum a pridajte fosfor a draslík pre spevnenie pletív a intenzitu farieb. Použite kombináciu superfosfátu a síranu draselného (NPK 1:2:2). Dávka: 30 g/m².</p>

        <h3>Fáza 3: Vyfarbovanie pukov a začiatok kvitnutia</h3>
        <p>Aplikujte výhradne draslík a mikroprvky (bór, horčík, železo). Draslík zabezpečuje transport cukrov do novej dcérskej cibuľky, ktorá sa tvorí nad starou materskou cibuľkou. Dávka: 20 g/m² síranu draselného.</p>

        <h2>3. Integrovaná ochrana pred strapkou gladiolovou</h2>
        <p>Strapka gladiolová (<em>Thrips simplex</em>) je najväčším nepriateľom pestovateľov. Tento drobný (1,5 mm) čierny hmyz vysáva šťavy z pukov a listov, čo spôsobuje strieborné škvrny, deformácie kvetov a nezriedka aj úplné zničenie pukov, ktoré sa vôbec neotvoria.</p>
        <h3>Ochranný protokol:</h3>
        <ol>
          <li><strong>Monitoring:</strong> Od júna vyvesujte medzi rastliny žlté alebo modré lepové doštičky.</li>
          <li><strong>Preventívny postrek:</strong> Pri prvom výskyte (alebo preventívne pred vytvorením pukov) aplikujte systémový insekticíd (napr. Mospilan 20 SP alebo Karate Zeon).</li>
          <li><strong>Striedanie účinných látok:</strong> Postrek opakujte po 7 až 10 dňoch, pričom striedajte chemické skupiny účinných látok, aby sa zamedzilo vzniku rezistencie. Postrek vykonávajte podvečer.</li>
        </ol>

        <h2>4. Rezy kvetov do vázy a starostlivosť o zvyšok rastliny</h2>
        <p>Ak pestujete gladioly na rez, správna technika rezu určuje, či dcérska cibuľka dozrie pre nasledujúcu sezónu. Kvetný stvol režte ráno alebo neskoro večer, keď sú kvety plné turgoru (vody).</p>
        <p>Režte v momente, keď sa na spodku stvolu vyfarbí a pootvorí 1. až 3. kvietok. Zvyšné puky sa postupne otvoria vo váze. **Kľúčová podmienka:** Na rastline musíte PONECHAŤ minimálne 4 spodné listy! Listová plocha je nevyhnutná pre fotosyntézu a dozrievanie novej cibuľky. Rez vykonajte úzkym nožom vertikálnym zarezaním do stonky medzi listami.</p>
      `,
      en: `
        <div class="reader-callout">
          <strong>Showcase Secret:</strong> Gladioli consume the most water during spike initiation. Irregular watering during this window leads to crooked stems, disqualifying spikes for competition or vase arrangements.
        </div>

        <h2>1. Irrigation Management and Deep Watering Tech</h2>
        <p>Gladioli require deep, targeted watering regimes. Light, frequent overhead sprinkling is detrimental, encouraging shallow root formation while leaving primary feeder roots dry. During active growth, specifically from the 3rd leaf stage through blooming, plants demand 15 to 20 liters of water per square meter weekly (doubled during extreme heatwaves).</p>
        <h3>Fundamental Irrigation Guidelines:</h3>
        <ul>
          <li><strong>Root-Zone Application:</strong> Direct water strictly to the base of plants or into inter-row trenches. Never spray foliage or emerging buds directly! Canopy wetness paired with high summer temperatures fuels botrytis leaf blight (<em>Botrytis gladiolorum</em>).</li>
          <li><strong>Morning Scheduling:</strong> Water early in the morning so accidental splashes on lower stems evaporate before nightfall.</li>
          <li><strong>Mulching:</strong> Once plants reach 20 cm in height, spread a 5 cm layer of dry organic mulch (shredded straw or dried grass clippings). Mulch retains moisture, suppresses weeds, and prevents root zone overheating.</li>
        </ul>

        <h2>2. Three-Stage Fertilization for Maximum Spike Length</h2>
        <p>Gladioli are heavy feeders, yet excessive nitrogen induces weak, floppy tissue prone to snapping and fungal infection. Divide nutrition into three precisely timed developmental stages:</p>

        <h3>Stage 1: Foliar Development (2nd to 3rd True Leaf)</h3>
        <p>Plants require nitrogen for vegetative stem and leaf structure. Apply ammonium nitrate or balanced liquid organic feeds with an NPK ratio of 3:1:1 at a rate of 25 g/m².</p>

        <h3>Stage 2: Flower Spike Initiation (5th to 6th Leaf)</h3>
        <p>Floret buds are formed within the stem sheath during this phase. Reduce nitrogen to a minimum while elevating phosphorus and potassium for cellular tissue strength and vivid coloration. Apply superphosphate and potassium sulfate (NPK 1:2:2) at 30 g/m².</p>

        <h3>Stage 3: Bud Coloration and Initial Opening</h3>
        <p>Feed exclusively with potassium and micronutrients (boron, magnesium, iron). Potassium facilitates sugar transport down into the developing replacement corm forming above the mother corm. Apply potassium sulfate at 20 g/m².</p>

        <h2>3. Integrated Pest Control: Gladiolus Thrips</h2>
        <p>Gladiolus thrips (<em>Thrips simplex</em>) represent the single greatest threat to growers. These minute (1.5 mm) black insects rasp surface tissues and suck plant sap, leaving silvery scars, deformed petals, and browned buds that fail to unfold.</p>
        <h3>Control Protocol:</h3>
        <ol>
          <li><strong>Monitoring:</strong> Install yellow or blue sticky traps between plant rows starting in June.</li>
          <li><strong>Targeted Spraying:</strong> At first sight (or preventatively before spike emergence), apply a systemic insecticide such as acetamiprid or lambda-cyhalothrin.</li>
          <li><strong>Chemical Rotation:</strong> Repeat treatment after 7 to 10 days, rotating chemical mode-of-action classes to prevent insect resistance. Spray late in the evening.</li>
        </ol>

        <h2>4. Cutting Flower Spikes and Foliage Preservation</h2>
        <p>When harvesting flowers for vase displays, correct technique dictates whether the replacement corm matures successfully for next year. Harvest spikes early in the morning when tissue turgor pressure is highest.</p>
        <p>Cut spikes when the lowest 1 to 3 florets show full color and begin opening. Upper buds will unfold naturally in the vase. **Non-negotiable rule:** You MUST leave a minimum of 4 fully intact leaves on the remaining plant in the ground! This foliage is essential for photosynthesizing nutrients down into the new corm. Make a clean vertical slice between leaves with a sharp knife.</p>
      `
    }
  },
  {
    id: "zber-susenie-a-prezimovanie-cibuliek",
    tag: { sk: "Zber a uskladnenie", en: "Harvest & Storage" },
    readTime: "7",
    date: "05. September 2026",
    colorIndex: 2,
    title: {
      sk: "Jesenný zber, dosúšanie a prezimovanie cibuliek: Ako uchovať 100% zdravotný stav pre budúcu jar",
      en: "Autumn Harvest, Curing, and Corm Storage: How to Ensure 100% Viability for Spring"
    },
    excerpt: {
      sk: "Detailný návod na načasovanie jesenného vyberania zo zeme, sušenie pri vysokej teplote, separáciu cibuliek a zimný režim v pivnici.",
      en: "A step-by-step masterclass on autumn digging timelines, high-temperature curing, corm separation, and optimal cellar storage environments."
    },
    content: {
      sk: `
        <div class="reader-callout">
          <strong>Kritický bod:</strong> Najčastejšou chybou pestovateľov je odloženie nedosušených cibuliek do pivnice. Vlhkosť pod šupkou počas zimy vytvorí ideálne prostredie pre pleseň sivú a hnilobu.
        </div>

        <h2>1. Kedy a ako správne vykopávať cibuľky</h2>
        <p>Správne načasovanie jesenného zberu je kľúčové pre dozretie dcérskych cibuliek. Gladioly sa vykopávajú približne 4 až 6 týždňov po odkvitnutí, zvyčajne od konca septembra do polovice októbra, no VŽDY ešte pred príchodom prvých silných nočných mrazov.</p>
        <p>Listy môžu byť v čase zberu stále zelené alebo mierne žltnúce. Nečakajte, kým nadzemná časť úplne uschne alebo zmrzne – poškodenie mrazom otvára cestu patogénom priamo do cibuľky.</p>
        <h3>Postup pri vykopávaní:</h3>
        <ul>
          <li><strong>Šetrné podkopanie:</strong> Použite rýľovacie vidly. Zaseknite ich približne 15 – 20 cm od stonky a rastlinu opatrne pákovým pohybom nadvihnite z pôdy. Vybystrite pozornosť, aby ste neprerezali cibuľky.</li>
          <li><strong>Očistenie zeminy:</strong> Rukami jemne otraste voľnú pôdu z koreňov. Opatrne pozberajte aj drobné brutové cibuľky (brut), ak ich chcete ďalej rozmnožovať.</li>
          <li><strong>Zrezanie stonky:</strong> Ihneď po vykopaní zrežte nadzemnú stonku ostrými nožnicami na dĺžku 1 až 2 cm nad cibuľkou. Ponechanie dlhej stonky zbytočne odparuje vodu z cibuľky a podporuje šírenie chorôb.</li>
        </ul>

        <h2>2. Fáza sušenia a zrenia (Curing Protocol)</h2>
        <p>Dosúšanie je najdôležitejšia fytosanitárna fáza celého roka. Po zrezaní stonky obsahujú cibuľky vysoké percento vody a ich povrchové pletivá sú zraniteľné.</p>
        <p>Sušenie musí prebiehať v dvoch odlišných štádiách:</p>

        <h3>Štádium A: Vysokoteplotné šokové sušenie (Prvé 2 týždne)</h3>
        <p>Cibuľky rozložte v jednej vrstve do vetrateľných debničiek s sieťovaným dnom. Umiestnite ich do teplej, suchej a dobre vetranej miestnosti s teplotou 25 °C až 28 °C (napr. v blízkosti kotla alebo v teplej sušiarni) na dobu 14 dní. Vysoká teplota spôsobí rýchle zatiahnutie rán na báze a vytvorenie ochrannej korkovej vrstvy.</p>

        <h3>Štádium B: Dopotové dosúšanie (Ďalšie 3 až 4 týždne)</h3>
        <p>Po dvoch týždňoch znížte teplotu na 18 °C až 20 °C a nechajte cibuľky dosúšať ďalšie 3 týždne. Celkový proces sušenia trvá približne 5 až 6 týždňov.</p>

        <h2>3. Čistenie, triedenie a separácia cibuliek</h2>
        <p>Až po dokonalom vysušení pristúpte k čisteniu cibuliek (zo suchej cibuľky ide čistenie ľahko a bez poškodenia):</p>
        <ol>
          <li><strong>Oddelenie starej cibuľky:</strong> Palcom jemne zatlačte na spodok cibuľky a oddeľte starú, vráskavú materskú cibuľku spolu s koreňmi od novej, vyhladenej dcérskej cibuľky. Ak ide oddelenie ťažko, cibuľka ešte nie je dostatočne vysušená!</li>
          <li><strong>Odstránenie nečistôt:</strong> Odstráňte poškodené vrchné šupky, no ponechajte 1 – 2 priliehavé ochranné šupky na cibuľke.</li>
          <li><strong>Trieďte podľa veľkosti:</strong> Cibuľky rozdeľte podľa priemeru do kategórií (Extra veľké 4+ cm, Prvá trieda 3–4 cm, Druhá trieda 2–3 cm, Brut). Drobné brutové cibuľky uskladnite osobitne v papierových vreckách.</li>
          <li><strong>Selekcia nemocných kusov:</strong> Všetky cibuľky s mäkkými škvrnami, plesňou alebo podozrivým zápachom bezohľadne spáľte alebo vyhoďte do komunálneho odpadu (nepatria do kompostu!).</li>
        </ol>

        <h2>4. Ideálne podmienky zimného uskladnenia</h2>
        <p>Očistené a zatriedené cibuľky uložte do drevených alebo plastových debničiek vystlaných novinovým papierom alebo vložte do sieťovaných vreciek (napr. od cibule).</p>
        <h3>Parametre skladovacieho priestoru:</h3>
        <ul>
          <li><strong>Teplota:</strong> Stabilná teplota v rozmedzí **4 °C až 8 °C**. Pri teplote nad 10 °C začínajú cibuľky predčasne klíčiť a aktivujú sa strapky. Pri teplote pod 0 °C cibuľky nenávratne zmrznú.</li>
          <li><strong>Vlhkosť vzduchu:</strong> Relatívna vlhkosť 65 % až 70 %. Príliš suchý vzduch spôsobuje vysychanie cibuliek; príliš vlhké prostredie podporuje rozvoj plesní.</li>
          <li><strong>Cirkulácia vzduchu:</strong> Skladovacia pivnica alebo komora musí byť tmavá a pravidelne vetraná.</li>
        </ul>
        <p><strong>Zimná kontrola:</strong> Raz za mesiac cibuľky v pivnici skontrolujte. Ak objavíte napadnuté kusy, ihneď ich odstráňte, aby ste zabránili prenosu infekcie na zdravé cibuľky.</p>
      `,
      en: `
        <div class="reader-callout">
          <strong>Critical Checkpoint:</strong> Storing insufficiently cured corms in winter storage is the #1 cause of crop loss. Trapped internal moisture fosters rapid grey mold and fusarium rot over winter months.
        </div>

        <h2>1. Optimal Autumn Harvest Timelines and Techniques</h2>
        <p>Correct timing during autumn digging directly impacts the density and maturity of replacement corms. Harvest gladioli approximately 4 to 6 weeks after flowering finishes, typically between late September and mid-October, but ALWAYS before severe overnight killing frosts arrive.</p>
        <p>Foliage may still appear green or slightly yellowing at harvest time. Do not wait for foliage to die back completely or freeze—frost injury allows decay pathogens to travel directly down into the corm tissues.</p>
        <h3>Digging Step-by-Step:</h3>
        <ul>
          <li><strong>Gentle Undercutting:</strong> Insert a garden spading fork roughly 15–20 cm away from the stem base. Lever the plant cluster gently upward to loosen root attachment without slicing into corms.</li>
          <li><strong>Soil Removal:</strong> Gently shake loose soil from the root mass by hand. Collect small cormels (cormlets) attached to the base if you plan to propagate new stock.</li>
          <li><strong>Stem Trimming:</strong> Immediately after lifting, clip off the top leafy stem using sharp pruners, leaving a 1 to 2 cm stub above the corm. Leaving long stems drains corm moisture and accelerates rot transmission.</li>
        </ul>

        <h2>2. Two-Stage Curing Protocol</h2>
        <p>Curing is the single most important phytosanitary phase of the entire growing year. Freshly dug corms carry high internal moisture and fragile skin layers prone to infection.</p>
        <p>Execute curing across two distinct environmental stages:</p>

        <h3>Stage A: High-Temperature Shock Curing (First 2 Weeks)</h3>
        <p>Arrange trimmed corms in a single layer inside slatted, breathable wooden or plastic crates. Position crates in a warm, dry, well-ventilated room held between 25 °C and 28 °C for 14 days. High heat rapidly calluses basal harvest wounds and forms a protective cork layer over exposed tissue.</p>

        <h3>Stage B: Secondary Drying Phase (Next 3 to 4 Weeks)</h3>
        <p>After two weeks, lower ambient curing temperature to 18 °C–20 °C and allow corms to cure for an additional 3 weeks. Total curing duration spans 5 to 6 weeks.</p>

        <h2>3. Cleaning, Grading, and Corm Separation</h2>
        <p>Perform cleaning only after curing is fully complete, when dried tissues separate effortlessly without tearing living flesh:</p>
        <ol>
          <li><strong>Old Corm Separation:</strong> Press your thumb against the base of the corm to snap away the old, shriveled mother corm and dry roots from the smooth new replacement corm above. If separation requires force, curing is incomplete!</li>
          <li><strong>Debris Removal:</strong> Peel away dirty outer husks, leaving 1 to 2 tight protective tunic layers intact around the corm body.</li>
          <li><strong>Size Grading:</strong> Sort corms by diameter into size tiers (Jumbo 4+ cm, Grade #1 3–4 cm, Grade #2 2–3 cm, Cormels). Store tiny cormels separately in paper bags.</li>
          <li><strong>Sanitation Cull:</strong> Rigorously discard any corms exhibiting soft lesions, dark sunken scab spots, or mold. Burn or dispose of culled corms in household waste—never compost them!</li>
        </ol>

        <h2>4. Ideal Winter Cellar Storage Conditions</h2>
        <p>Place cleaned, graded corms into shallow wooden crates, open mesh onion sacks, or paper trays lined with newspaper.</p>
        <h3>Storage Environment Parameters:</h3>
        <ul>
          <li><strong>Temperature:</strong> Maintain a consistent temperature range between **4 °C and 8 °C**. Temperatures above 10 °C trigger premature sprout emergence and wake overwintering thrips. Temperatures below 0 °C cause irreversible freezing damage.</li>
          <li><strong>Relative Humidity:</strong> Keep humidity between 65% and 70%. Excessively dry air shrivels corms; high humidity encourages mold outbreaks.</li>
          <li><strong>Air Circulation:</strong> Ensure storage rooms remain dark, cool, and gently ventilated throughout winter.</li>
        </ul>
        <p><strong>Monthly Inspections:</strong> Inspect stored crates once a month. Immediately remove and discard any corms showing signs of decay to protect adjacent healthy stock.</p>
      `
    }
  }
];

