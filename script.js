// --- HEADER SCROLL EFFECT ---
const header = document.getElementById("main-header");

if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}

// --- FADE-IN ANIMATION ON SCROLL ---
const animatedElements = document.querySelectorAll(".anim-fade-in");

if (typeof window.IntersectionObserver === "function") {
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
} else {
    animatedElements.forEach(el => el.classList.add("visible"));
}

// --- FAQ ACCORDION ---
function attachFAQAccordions() {
    document.querySelectorAll(".faq-item").forEach(item => {
        const btn = item.querySelector(".faq-question");

        if (!btn || btn.dataset.bound === "true") return;

        btn.dataset.bound = "true";
        btn.addEventListener("click", () => {
            item.classList.toggle("active");
            btn.setAttribute("aria-expanded", item.classList.contains("active") ? "true" : "false");
            const toggle = btn.querySelector(".faq-toggle");
            if (toggle) toggle.textContent = item.classList.contains("active") ? "-" : "+";
        });
    });
}

// --- I18N (LANGUAGE SWITCHER) ---
const translations = {
    tk: {
        navServices: "Işimiz",
        navAbout: "Biz",
        navFacts: "Netijeler",
        navFAQ: "FAQ",
        navUniversities: "Uniwersitetler",
        contactBtn: "Habarlaş",
        heroEyebrow: "Türkiýede okuw üçin doly goldaw",
        heroTitle: "Okasaň boldy. Galany bizden.",
        heroText: "Uniwersitet saýlamakdan başlap resminama, kabul, wiza we ýerleşiş maslahatlaryna çenli ýanyňyzda bolýarys.",
        heroBtn: "Habar et",
        heroSecondary: "Uniwersitetleri gör",
        visualEyebrow: "Istanbul, kampuslar, maslahat",
        visualTitle: "Okuw ýoluny göz öňüňize getiriň",
        visualIntro: "Talyplar üçin şäher, uniwersitet durmuşy we dogry maslahat bir ýerde jemlenende karar bermek has aňsat bolýar.",
        photoIstanbulTitle: "Istanbulda talyp durmuşy",
        photoIstanbulText: "Medeniýet, mümkinçilik we halkara talyp jemgyýeti bilen doly şäher.",
        photoCampusTitle: "Kampus saýlawlary",
        photoCampusText: "Hünäriňize, býujetiňize we dil islegiňize görä uniwersitetleri deňeşdirýäris.",
        photoTeamTitle: "Ýakyndan maslahat",
        photoTeamText: "Her talyp üçin aýratyn ýol kartasy, resminama sanawy we kabul meýilnamasy taýýarlanýar.",
        photoArrivalTitle: "Täze başlangyç",
        photoArrivalText: "Şäher, uniwersitet we ilkinji ädimler barada öňünden anyk ýol görkezýäris.",
        photoCampusWalkTitle: "Kampus atmosferasy",
        photoCampusWalkText: "Okuw gurşawyny, şäheri we gündelik talyp durmuşyny bilelikde bahalandyrýarys.",
        photoAdmissionTitle: "Kabul meýilnamasy",
        photoAdmissionText: "Resminama, möhlet we uniwersitet talaplary tertipli görnüşde yzarlaýar.",
        servicesTitle: "Bitirýän işlerimiz",
        service1Title: "Uniwersitet",
        service1Desc: "Türkiýedäki ýokary okuw mekdeplerine ýüz tutmak üçin uniwersitet, bölüm we býujet boýunça giňişleýin görkezme.",
        service2Title: "Karýera maslahaty",
        service2Desc: "Uzak möhletli hünär maksatlaryňyz bilen akademik ugurlaryňyzy utgaşdyrmaga kömek edýäris.",
        service3Title: "Wiza işleri",
        service3Desc: "Talyp wizasy üçin resminama taýýarlygy, barlag sanawy we tabşyrmak tapgyrlarynda goldaw berýäris.",
        service4Title: "Taýýarlyk",
        service4Desc: "Dil, giriş synagy we uniwersitet talaplary üçin zerur taýýarlyk ýoluny saýlamaga kömek edýäris.",
        aboutEyebrow: "Oguz Academy",
        aboutTitle: "Biz kim?",
        aboutText1: "Oguz Academy talyplara Türkiýedäki uniwersitetleri dogry saýlamaga, resminamalary taýýarlamaga we kabul prosesini ynamly geçmäge kömek edýän maslahat merkezidir.",
        aboutText2: "Biz her talybyň maksadyny, býujetini, dil derejesini we hünär meýilnamasyny diňläp, şol maglumatlara görä iň laýyk wariantlary hödürleýäris.",
        aboutPoint1: "Uniwersitet we bölüm deňeşdirmesi",
        aboutPoint2: "Resminama we möhlet gözegçiligi",
        aboutPoint3: "Kabuldan soňky ýol görkezme",
        factsTitle: "Esasy netijeler",
        fact1: "Goldaw berlen talyp",
        fact2: "Türkiýedäki uniwersitet",
        fact3: "Dil boýunça hyzmat",
        faqEyebrow: "Sorag-jogap",
        faqTitle: "Köp soralýan soraglar",
        faqQ1: "Haýsy uniwersitet maňa laýyk?",
        faqA1: "Býujetiňizi, isleýän bölümiňizi, dil derejesini we şäher islegiňizi göz öňünde tutup, size laýyk sanaw taýýarlaýarys.",
        faqQ2: "Bahalar näme üçin “başlaýan baha” bolup görkezilýär?",
        faqA2: "Sebäbi töleg bölüm, okuw dili, stipendiýa we okuw ýylyna görä üýtgäp bilýär. Kartlarda iň pes başlanýan baha, jikme-jik bölüm bahalary bolsa uniwersitet sahypasynda görkezilýär.",
        faqQ3: "Dil şahadatnamasy hökmanymy?",
        faqA3: "Köp uniwersitetlerde dil şahadatnamasy peýdaly bolýar, ýöne käbirlerinde içerki synag ýa-da taýýarlyk ýyly warianty bar.",
        faqQ4: "Wiza prosesi näçe wagt alýar?",
        faqA4: "Adatça 2-4 hepde aralygynda dowam edýär. Wagt resminamalaryň taýýarlygyna we konsullygyň iş ýüküne bagly bolup biler.",
        faqQ5: "Stipendiýa almak mümkinmi?",
        faqA5: "Käbir hususy uniwersitetlerde akademik netije, bölüm we möhletlere görä arzanladyş ýa-da stipendiýa mümkinçiligi bolýar.",
        faqQ6: "Haýsy resminamalar gerek?",
        faqA6: "Adatça pasport, attestat ýa-da diplom, transkript, surat we dil ýa-da synag netijeleri gerek bolýar. Saýlanan uniwersitete görä sanaw takyklaşdyrylýar.",
        faqQ7: "Türkiýä gelenden soň goldaw barmy?",
        faqA7: "Hawa, kabuldan soňky ädimler, umumy ýerleşiş maslahaty we uniwersitet bilen aragatnaşyk boýunça ýol görkezýäris.",
        faqQ8: "Hyzmat tölegi näçe?",
        faqA8: "Hyzmat tölegi saýlanan uniwersitet, bölüm we gerek bolan goldaw derejesine görä üýtgeýär. Takyk teklip üçin biziň bilen habarlaşyň.",
        contactEyebrow: "Indiki ädim",
        contactTitle: "Habarlaş",
        contactSub: "Kelläňizdäki islendik soragyňyzy beriň. Size laýyk uniwersitetleri bilelikde saýlap başlarys.",
        phoneTr: "Telefon (Türkiýe)",
        phoneTm: "Telefon (Türkmenistan)",
        contactSocial: "Biziň bilen boluň",
        contactAddress: "<strong>Adres:</strong> Aşgabat şäheri, Parahat 7",
        uniHeroEyebrow: "Uniwersitet saýlawy",
        uniPageTitle: "Döwlet tarapyndan tassyklanan uniwersitetler",
        uniPageIntro: "Başlaýan baha belliklerini, depozit maglumatlaryny, meşhur bölümleri we täze baha sanawy üçin aragatnaşyk ýoluny bir ýerde görüň.",
        priceEyebrow: "Bahalar we maglumat",
        priceIntro: "Kartlarda umumy maglumat görkezilýär. Täze bölüm bahalary üçin WhatsApp arkaly habarlaşyň ýa-da soň goşuljak baha faýlyny göçüriň.",
        approvedEyebrow: "Döwlet tarapyndan tassyklanan",
        approvedIntro: "Aşakdaky sanaw şäherler boýunça toparlanan. Has giňişleýin maglumat üçin biziň bilen habarlaşyp bilersiňiz.",
        uniGovTitle: "Tassyklanan uniwersitetler",
        uniPartnerTitle: "Tassyklanan uniwersitetler",
        cityLabel: "Şäher",
        startPrice: "Başlaýan baha",
        deposit: "Depozit",
        departmentsLabel: "Meşhur bölümler",
        highlightsLabel: "Üstünlikleri",
        priceDetails: "Bölüm baha aralyklaryny gör",
        programLabel: "Programma",
        departmentLabel: "Bölüm",
        priceRangeLabel: "Baha aralygy",
        languageLabel: "Dil",
        tuitionLabel: "Ýyllyk töleg",
        perYear: "/ ýyl",
        officialWebsite: "WhatsApp arkaly habarlaş",
        priceNote: "Bahalar bölüm, stipendiýa we okuw ýylyna görä üýtgäp biler. Iň soňky takyk sanaw üçin biziň bilen habarlaşyň.",
        illustrativePhoto: "Kampus durmuşy",
        contactForPrice: "Bahasy üçin habarlaşyň",
        priceFileComingSoon: "Jikme-jik baha sanawy üçin WhatsApp arkaly habarlaşyň.",
        downloadPriceList: "Baha sanawyny göçürip al",
        priceRangesComingSoon: "Bölüm boýunça baha aralyklary faýllar goşulandan soň görkeziler."
    },
    tr: {
        navServices: "Hizmetler",
        navAbout: "Biz",
        navFacts: "Sonuçlar",
        navFAQ: "SSS",
        navUniversities: "Üniversiteler",
        contactBtn: "İletişim",
        heroEyebrow: "Türkiye'de eğitim için tam destek",
        heroTitle: "Sen oku. Gerisi bizde.",
        heroText: "Üniversite seçiminden evraklara, kabul, vize ve yerleşme danışmanlığına kadar yanınızdayız.",
        heroBtn: "Bize yaz",
        heroSecondary: "Üniversiteleri gör",
        visualEyebrow: "İstanbul, kampüsler, danışmanlık",
        visualTitle: "Eğitim yolunu gözünde canlandır",
        visualIntro: "Şehri, kampüs hayatını ve doğru danışmanlığı birlikte görmek karar vermeyi kolaylaştırır.",
        photoIstanbulTitle: "İstanbul'da öğrenci hayatı",
        photoIstanbulText: "Kültür, fırsat ve uluslararası öğrenci topluluğu ile dolu bir şehir.",
        photoCampusTitle: "Kampüs seçenekleri",
        photoCampusText: "Üniversiteleri bölüm, bütçe, eğitim dili ve şehir tercihine göre karşılaştırıyoruz.",
        photoTeamTitle: "Yakından danışmanlık",
        photoTeamText: "Her öğrenci için özel yol haritası, evrak listesi ve kabul planı hazırlanır.",
        photoArrivalTitle: "Yeni başlangıç",
        photoArrivalText: "Şehir, üniversite ve ilk adımlar hakkında önceden net yol gösteriyoruz.",
        photoCampusWalkTitle: "Kampüs atmosferi",
        photoCampusWalkText: "Eğitim ortamını, şehri ve günlük öğrenci hayatını birlikte değerlendiriyoruz.",
        photoAdmissionTitle: "Kabul planı",
        photoAdmissionText: "Evrak, son tarih ve üniversite şartlarını düzenli şekilde takip ediyoruz.",
        servicesTitle: "Ne yapıyoruz",
        service1Title: "Üniversite",
        service1Desc: "Türkiye'deki üniversitelere başvuru için üniversite, bölüm ve bütçe konusunda kapsamlı rehberlik.",
        service2Title: "Kariyer danışmanlığı",
        service2Desc: "Akademik tercihinizi uzun vadeli kariyer hedeflerinizle uyumlu hale getirmeye yardımcı oluyoruz.",
        service3Title: "Vize desteği",
        service3Desc: "Öğrenci vizesi için evrak hazırlığı, kontrol listesi ve başvuru aşamalarında destek veriyoruz.",
        service4Title: "Hazırlık",
        service4Desc: "Dil, giriş sınavı ve üniversite şartları için doğru hazırlık yolunu seçmenize yardımcı oluyoruz.",
        aboutEyebrow: "Oguz Academy",
        aboutTitle: "Biz kimiz?",
        aboutText1: "Oguz Academy, öğrencilere Türkiye'deki üniversiteleri doğru seçme, evrakları hazırlama ve kabul sürecini güvenle geçme konusunda destek veren bir danışmanlık merkezidir.",
        aboutText2: "Her öğrencinin hedefini, bütçesini, dil seviyesini ve kariyer planını dinleyerek en uygun seçenekleri sunuyoruz.",
        aboutPoint1: "Üniversite ve bölüm karşılaştırması",
        aboutPoint2: "Evrak ve son tarih takibi",
        aboutPoint3: "Kabul sonrası yol gösterme",
        factsTitle: "Temel sonuçlar",
        fact1: "Destek verilen öğrenci",
        fact2: "Türkiye'deki üniversite",
        fact3: "Hizmet dili",
        faqEyebrow: "Soru-cevap",
        faqTitle: "Sık sorulan sorular",
        contactEyebrow: "Sonraki adım",
        contactTitle: "İletişim",
        contactSub: "Aklınızdaki herhangi bir soruyu sorun. Size uygun üniversiteleri birlikte seçmeye başlayalım.",
        phoneTr: "Telefon (Türkiye)",
        phoneTm: "Telefon (Türkmenistan)",
        contactSocial: "Bizi takip edin",
        contactAddress: "<strong>Adres:</strong> Aşkabat, Parahat 7",
        uniHeroEyebrow: "Üniversite seçimi",
        uniPageTitle: "Devlet tarafından onaylanan üniversiteler",
        uniPageIntro: "Başlangıç fiyatları, depozito bilgileri, popüler bölümler ve ücret notlarını tek yerde görün.",
        priceEyebrow: "Fiyatlar ve bilgiler",
        priceIntro: "Kartlarda genel bilgi gösterilir. Güncel bölüm ücretleri için WhatsApp üzerinden bizimle iletişime geçin.",
        approvedEyebrow: "Devlet tarafından onaylanan",
        approvedIntro: "Liste şehirler halinde gruplandı. Kabul şartları ve programlar için bizimle iletişime geçebilirsiniz.",
        uniGovTitle: "Onaylanan üniversiteler",
        uniPartnerTitle: "Onaylanan üniversiteler",
        cityLabel: "Şehir",
        startPrice: "Başlangıç fiyatı",
        deposit: "Depozito",
        departmentsLabel: "Popüler bölümler",
        highlightsLabel: "Öne çıkanlar",
        priceDetails: "Bölüm ücret aralıklarını gör",
        programLabel: "Program",
        departmentLabel: "Bölüm",
        priceRangeLabel: "Ücret aralığı",
        languageLabel: "Dil",
        tuitionLabel: "Yıllık ücret",
        perYear: "/ yıl",
        officialWebsite: "WhatsApp ile iletişime geç",
        priceNote: "Ücretler bölüm, burs ve akademik yıla göre değişebilir. En güncel liste için bizimle iletişime geçin.",
        illustrativePhoto: "Kampüs hayatı",
        contactForPrice: "Fiyat için iletişime geçin",
        priceFileComingSoon: "Detaylı fiyat listesi için WhatsApp üzerinden bizimle iletişime geçin.",
        downloadPriceList: "Fiyat listesini indir",
        priceRangesComingSoon: "Bölüm bazlı ücret aralıkları dosyalar eklendikten sonra gösterilecek."
    },
    en: {
        navServices: "Services",
        navAbout: "About",
        navFacts: "Results",
        navFAQ: "FAQ",
        navUniversities: "Universities",
        contactBtn: "Contact",
        heroEyebrow: "Full support for studying in Turkey",
        heroTitle: "Just study. Leave the rest to us.",
        heroText: "From choosing a university to documents, admission, visa, and arrival guidance, we stay beside you.",
        heroBtn: "Message us",
        heroSecondary: "See universities",
        visualEyebrow: "Istanbul, campuses, guidance",
        visualTitle: "Picture your study path",
        visualIntro: "Choosing becomes easier when students can see the city, campus life, and the support available to them.",
        photoIstanbulTitle: "Student life in Istanbul",
        photoIstanbulText: "A city full of culture, opportunity, and an international student community.",
        photoCampusTitle: "Campus options",
        photoCampusText: "We compare universities by your major, budget, preferred language, and city.",
        photoTeamTitle: "Personal guidance",
        photoTeamText: "Every student receives a tailored roadmap, document checklist, and admission plan.",
        photoArrivalTitle: "A new start",
        photoArrivalText: "We give clear guidance on the city, university life, and the first steps before arrival.",
        photoCampusWalkTitle: "Campus atmosphere",
        photoCampusWalkText: "We compare the study environment, city, and everyday student life together.",
        photoAdmissionTitle: "Admission planning",
        photoAdmissionText: "Documents, deadlines, and university requirements are tracked in an organized way.",
        servicesTitle: "What we do",
        service1Title: "University",
        service1Desc: "Complete guidance on universities, departments, and budgets for applications in Turkey.",
        service2Title: "Career consulting",
        service2Desc: "We help align your academic direction with your long-term career goals.",
        service3Title: "Visa support",
        service3Desc: "We support student visa preparation with document checklists and application guidance.",
        service4Title: "Preparation",
        service4Desc: "We help you choose the right preparation path for language, entrance exams, and university requirements.",
        aboutEyebrow: "Oguz Academy",
        aboutTitle: "Who we are",
        aboutText1: "Oguz Academy is an education consulting center helping students choose universities in Turkey, prepare documents, and move through admission with confidence.",
        aboutText2: "We listen to each student’s goals, budget, language level, and career plan, then suggest the most suitable options.",
        aboutPoint1: "University and department comparison",
        aboutPoint2: "Document and deadline tracking",
        aboutPoint3: "Guidance after admission",
        factsTitle: "Key results",
        fact1: "Students supported",
        fact2: "Universities in Turkey",
        fact3: "Service languages",
        faqEyebrow: "Questions",
        faqTitle: "Frequently asked questions",
        faqQ1: "Which university is right for me?",
        faqA1: "We prepare a suitable list based on your budget, preferred department, language level, and city preference.",
        faqQ2: "Why do prices show “starting from”?",
        faqA2: "Tuition changes by program, language, scholarship, and academic year. Cards show the lowest starting price, while detailed program prices are shown on the universities page.",
        faqQ3: "Is a language certificate required?",
        faqA3: "A certificate helps for many universities, but some offer their own exam or a preparation year.",
        faqQ4: "How long does the visa process take?",
        faqA4: "It usually takes 2-4 weeks. Timing can depend on document readiness and consulate workload.",
        faqQ5: "Can I get a scholarship?",
        faqA5: "Some private universities offer discounts or scholarships depending on academic results, program, and deadlines.",
        faqQ6: "Which documents are required?",
        faqA6: "Usually passport, certificate or diploma, transcript, photo, and language or exam results are needed. The final list depends on the chosen university.",
        faqQ7: "Do you support students after arrival in Turkey?",
        faqA7: "Yes. We guide students through post-admission steps, general settling advice, and communication with the university.",
        faqQ8: "How much is your service fee?",
        faqA8: "The service fee depends on the university, program, and level of support needed. Contact us for an exact offer.",
        contactEyebrow: "Next step",
        contactTitle: "Contact us",
        contactSub: "Ask any question you have. We will start choosing suitable universities together.",
        phoneTr: "Phone (Turkey)",
        phoneTm: "Phone (Turkmenistan)",
        contactSocial: "Stay connected",
        contactAddress: "<strong>Address:</strong> Ashgabat, Parahat 7",
        uniHeroEyebrow: "University choice",
        uniPageTitle: "Government Approved Universities",
        uniPageIntro: "See starting price notes, deposit information, popular departments, and the best contact path for current price lists.",
        priceEyebrow: "Prices and details",
        priceIntro: "Cards show summary information. Contact us on WhatsApp for current program prices, or add downloadable price files later.",
        approvedEyebrow: "Government approved",
        approvedIntro: "The list below is grouped by city. Contact us for more details about admission requirements and programs.",
        uniGovTitle: "Approved universities",
        uniPartnerTitle: "Approved universities",
        cityLabel: "City",
        startPrice: "Starting from",
        deposit: "Deposit",
        departmentsLabel: "Popular departments",
        highlightsLabel: "Highlights",
        priceDetails: "View department price ranges",
        programLabel: "Program",
        departmentLabel: "Department",
        priceRangeLabel: "Price range",
        languageLabel: "Language",
        tuitionLabel: "Annual tuition",
        perYear: "/ year",
        officialWebsite: "Contact on WhatsApp",
        priceNote: "Prices can vary by program, scholarship, and academic year. Contact us for the latest exact price list.",
        illustrativePhoto: "Campus life",
        contactForPrice: "Contact us for price",
        priceFileComingSoon: "Contact us on WhatsApp for the detailed price list.",
        downloadPriceList: "Download price list",
        priceRangesComingSoon: "Department-level price ranges will appear after the fee files are added."
    },
    ru: {
        navServices: "Услуги",
        navAbout: "О нас",
        navFacts: "Результаты",
        navFAQ: "FAQ",
        navUniversities: "Университеты",
        contactBtn: "Связаться",
        heroEyebrow: "Полная поддержка для учебы в Турции",
        heroTitle: "Учись. Остальное оставь нам.",
        heroText: "Мы помогаем с выбором университета, документами, поступлением, визой и первыми шагами после приезда.",
        heroBtn: "Написать нам",
        heroSecondary: "Смотреть университеты",
        visualEyebrow: "Стамбул, кампусы, консультации",
        visualTitle: "Представьте свой путь к учебе",
        visualIntro: "Выбирать легче, когда видны город, университетская жизнь и поддержка на каждом этапе.",
        photoIstanbulTitle: "Студенческая жизнь в Стамбуле",
        photoIstanbulText: "Город культуры, возможностей и международного студенческого сообщества.",
        photoCampusTitle: "Варианты кампусов",
        photoCampusText: "Мы сравниваем университеты по специальности, бюджету, языку обучения и городу.",
        photoTeamTitle: "Личная консультация",
        photoTeamText: "Для каждого студента готовится индивидуальная дорожная карта, список документов и план поступления.",
        photoArrivalTitle: "Новое начало",
        photoArrivalText: "Мы заранее объясняем город, университетскую жизнь и первые шаги после приезда.",
        photoCampusWalkTitle: "Атмосфера кампуса",
        photoCampusWalkText: "Вместе оцениваем учебную среду, город и повседневную студенческую жизнь.",
        photoAdmissionTitle: "План поступления",
        photoAdmissionText: "Документы, сроки и требования университета отслеживаются в понятном порядке.",
        servicesTitle: "Что мы делаем",
        service1Title: "Университет",
        service1Desc: "Полное сопровождение по выбору университета, направления и бюджета для поступления в Турции.",
        service2Title: "Карьерная консультация",
        service2Desc: "Помогаем связать академический выбор с долгосрочными профессиональными целями.",
        service3Title: "Визовая поддержка",
        service3Desc: "Помогаем подготовить документы для студенческой визы и пройти этапы подачи.",
        service4Title: "Подготовка",
        service4Desc: "Помогаем выбрать подготовку к языку, вступительным экзаменам и требованиям университета.",
        aboutEyebrow: "Oguz Academy",
        aboutTitle: "Кто мы",
        aboutText1: "Oguz Academy — образовательный консультационный центр, который помогает студентам выбирать университеты в Турции, готовить документы и уверенно проходить поступление.",
        aboutText2: "Мы учитываем цели, бюджет, уровень языка и карьерный план каждого студента, затем предлагаем наиболее подходящие варианты.",
        aboutPoint1: "Сравнение университетов и направлений",
        aboutPoint2: "Контроль документов и сроков",
        aboutPoint3: "Сопровождение после поступления",
        factsTitle: "Ключевые результаты",
        fact1: "Студентов получили поддержку",
        fact2: "Университетов в Турции",
        fact3: "Языка обслуживания",
        faqEyebrow: "Вопросы",
        faqTitle: "Часто задаваемые вопросы",
        faqQ1: "Какой университет мне подходит?",
        faqA1: "Мы готовим подходящий список с учетом бюджета, направления, уровня языка и желаемого города.",
        faqQ2: "Почему цены указаны как “от”?",
        faqA2: "Стоимость зависит от программы, языка обучения, стипендии и учебного года. В карточках указана минимальная цена, а подробные цены по программам — на странице университетов.",
        faqQ3: "Нужен ли языковой сертификат?",
        faqA3: "Сертификат полезен для многих университетов, но некоторые предлагают внутренний экзамен или подготовительный год.",
        faqQ4: "Сколько занимает процесс визы?",
        faqA4: "Обычно 2-4 недели. Срок зависит от готовности документов и нагрузки консульства.",
        faqQ5: "Можно ли получить стипендию?",
        faqA5: "Некоторые частные университеты предлагают скидки или стипендии в зависимости от оценок, программы и сроков подачи.",
        faqQ6: "Какие документы нужны?",
        faqA6: "Обычно нужны паспорт, аттестат или диплом, транскрипт, фото и языковые или экзаменационные результаты. Итоговый список зависит от университета.",
        faqQ7: "Есть ли поддержка после приезда в Турцию?",
        faqA7: "Да. Мы помогаем с шагами после поступления, общими вопросами адаптации и коммуникацией с университетом.",
        faqQ8: "Сколько стоит ваша услуга?",
        faqA8: "Стоимость зависит от университета, программы и уровня поддержки. Свяжитесь с нами для точного предложения.",
        contactEyebrow: "Следующий шаг",
        contactTitle: "Связаться с нами",
        contactSub: "Задайте любой вопрос. Мы вместе начнем выбирать подходящие университеты.",
        phoneTr: "Телефон (Турция)",
        phoneTm: "Телефон (Туркменистан)",
        contactSocial: "Оставайтесь на связи",
        contactAddress: "<strong>Адрес:</strong> Ашхабад, Парахат 7",
        uniHeroEyebrow: "Выбор университета",
        uniPageTitle: "Утвержденные государством университеты",
        uniPageIntro: "Смотрите заметки о стартовых ценах, депозитах, популярных направлениях и способ связи для актуальных прайс-листов.",
        priceEyebrow: "Цены и информация",
        priceIntro: "В карточках показана краткая информация. Для актуальных цен по программам напишите нам в WhatsApp или позже добавьте файлы для скачивания.",
        approvedEyebrow: "Утвержденные государством",
        approvedIntro: "Список ниже сгруппирован по городам. Свяжитесь с нами, чтобы узнать больше о требованиях и программах.",
        uniGovTitle: "Утвержденные университеты",
        uniPartnerTitle: "Утвержденные университеты",
        cityLabel: "Город",
        startPrice: "Начиная от",
        deposit: "Депозит",
        departmentsLabel: "Популярные направления",
        highlightsLabel: "Преимущества",
        priceDetails: "Смотреть диапазоны цен по направлениям",
        programLabel: "Программа",
        departmentLabel: "Направление",
        priceRangeLabel: "Диапазон цен",
        languageLabel: "Язык",
        tuitionLabel: "Годовая оплата",
        perYear: "/ год",
        officialWebsite: "Написать в WhatsApp",
        priceNote: "Цены могут меняться в зависимости от программы, стипендии и учебного года. Свяжитесь с нами для актуального точного списка.",
        illustrativePhoto: "Жизнь в кампусе",
        contactForPrice: "Уточнить цену",
        priceFileComingSoon: "Напишите нам в WhatsApp, чтобы получить подробный прайс-лист.",
        downloadPriceList: "Скачать прайс-лист",
        priceRangesComingSoon: "Диапазоны цен по направлениям появятся после добавления файлов."
    },
    uz: {
        navServices: "Xizmatlar",
        navAbout: "Biz haqimizda",
        navFacts: "Natijalar",
        navFAQ: "FAQ",
        navUniversities: "Universitetlar",
        contactBtn: "Bog'lanish",
        heroEyebrow: "Turkiyada o'qish uchun to'liq yordam",
        heroTitle: "Faqat o'qing. Qolganini bizga qoldiring.",
        heroText: "Universitet tanlashdan hujjatlar, qabul, viza va kelish bo'yicha maslahatlargacha yoningizda bo'lamiz.",
        heroBtn: "Xabar yozish",
        heroSecondary: "Universitetlarni ko'rish",
        visualEyebrow: "Istanbul, kampuslar, maslahat",
        visualTitle: "O'qish yo'lingizni tasavvur qiling",
        visualIntro: "Shahar, kampus hayoti va kerakli yordam ko'rinib tursa, qaror qilish osonroq bo'ladi.",
        photoIstanbulTitle: "Istanbulda talabalik hayoti",
        photoIstanbulText: "Madaniyat, imkoniyat va xalqaro talabalar muhiti bilan to'la shahar.",
        photoCampusTitle: "Kampus variantlari",
        photoCampusText: "Universitetlarni yo'nalish, byudjet, ta'lim tili va shahar bo'yicha solishtiramiz.",
        photoTeamTitle: "Shaxsiy maslahat",
        photoTeamText: "Har bir talaba uchun alohida yo'l xaritasi, hujjatlar ro'yxati va qabul rejasi tayyorlanadi.",
        photoArrivalTitle: "Yangi boshlanish",
        photoArrivalText: "Shahar, universitet hayoti va ilk qadamlar bo'yicha oldindan aniq yo'l ko'rsatamiz.",
        photoCampusWalkTitle: "Kampus muhiti",
        photoCampusWalkText: "O'qish muhiti, shahar va kundalik talabalik hayotini birga baholaymiz.",
        photoAdmissionTitle: "Qabul rejasi",
        photoAdmissionText: "Hujjatlar, muddatlar va universitet talablari tartibli kuzatib boriladi.",
        servicesTitle: "Biz nima qilamiz",
        service1Title: "Universitet",
        service1Desc: "Turkiyada hujjat topshirish uchun universitet, yo'nalish va byudjet bo'yicha to'liq yo'l-yo'riq.",
        service2Title: "Karyera maslahati",
        service2Desc: "Akademik tanlovingizni uzoq muddatli kasbiy maqsadlaringiz bilan moslashtirishga yordam beramiz.",
        service3Title: "Viza yordami",
        service3Desc: "Talaba vizasi uchun hujjatlar ro'yxati va topshirish bosqichlarida yordam beramiz.",
        service4Title: "Tayyorgarlik",
        service4Desc: "Til, kirish imtihonlari va universitet talablariga mos tayyorgarlik yo'lini tanlashga yordam beramiz.",
        aboutEyebrow: "Oguz Academy",
        aboutTitle: "Biz kimmiz?",
        aboutText1: "Oguz Academy talabalar Turkiyadagi universitetlarni to'g'ri tanlashi, hujjatlarni tayyorlashi va qabul jarayonidan ishonch bilan o'tishi uchun yordam beradigan maslahat markazidir.",
        aboutText2: "Biz har bir talabaning maqsadi, byudjeti, til darajasi va karyera rejasini tinglab, eng mos variantlarni taklif qilamiz.",
        aboutPoint1: "Universitet va yo'nalishlarni solishtirish",
        aboutPoint2: "Hujjatlar va muddatlarni kuzatish",
        aboutPoint3: "Qabuldan keyingi yo'l-yo'riq",
        factsTitle: "Asosiy natijalar",
        fact1: "Yordam berilgan talabalar",
        fact2: "Turkiyadagi universitetlar",
        fact3: "Xizmat tillari",
        faqEyebrow: "Savol-javob",
        faqTitle: "Ko'p so'raladigan savollar",
        faqQ1: "Qaysi universitet menga mos?",
        faqA1: "Byudjet, yo'nalish, til darajasi va shahar tanlovingizga qarab mos ro'yxat tayyorlaymiz.",
        faqQ2: "Nega narxlar “boshlanish narxi” deb ko'rsatiladi?",
        faqA2: "To'lov yo'nalish, ta'lim tili, grant va o'quv yiliga qarab o'zgaradi. Kartalarda eng past boshlanish narxi, batafsil narxlar esa universitet sahifasida beriladi.",
        faqQ3: "Til sertifikati shartmi?",
        faqA3: "Ko'p universitetlar uchun sertifikat foydali, lekin ba'zilarida ichki imtihon yoki tayyorgarlik yili bor.",
        faqQ4: "Viza jarayoni qancha davom etadi?",
        faqA4: "Odatda 2-4 hafta davom etadi. Muddat hujjatlar tayyorligi va konsullik yuklamasiga bog'liq bo'lishi mumkin.",
        faqQ5: "Grant olish mumkinmi?",
        faqA5: "Ba'zi xususiy universitetlarda baholar, yo'nalish va topshirish muddatlariga qarab chegirma yoki grant bo'lishi mumkin.",
        faqQ6: "Qanday hujjatlar kerak?",
        faqA6: "Odatda pasport, attestat yoki diplom, transkript, rasm va til yoki imtihon natijalari kerak. Yakuniy ro'yxat tanlangan universitetga bog'liq.",
        faqQ7: "Turkiyaga kelgandan keyin yordam bormi?",
        faqA7: "Ha. Qabuldan keyingi qadamlar, umumiy joylashish maslahati va universitet bilan aloqa bo'yicha yo'l ko'rsatamiz.",
        faqQ8: "Xizmat narxi qancha?",
        faqA8: "Xizmat narxi universitet, yo'nalish va kerakli yordam darajasiga qarab o'zgaradi. Aniq taklif uchun biz bilan bog'laning.",
        contactEyebrow: "Keyingi qadam",
        contactTitle: "Biz bilan bog'laning",
        contactSub: "Har qanday savolingizni bering. Sizga mos universitetlarni birga tanlashni boshlaymiz.",
        phoneTr: "Telefon (Turkiya)",
        phoneTm: "Telefon (Turkmaniston)",
        contactSocial: "Biz bilan qoling",
        contactAddress: "<strong>Manzil:</strong> Ashxobod, Parahat 7",
        uniHeroEyebrow: "Universitet tanlovi",
        uniPageTitle: "Davlat tomonidan tasdiqlangan universitetlar",
        uniPageIntro: "Boshlanish narxi izohlari, depozit ma'lumotlari, mashhur yo'nalishlar va hozirgi narxlar uchun aloqa yo'lini bir joyda ko'ring.",
        priceEyebrow: "Narxlar va ma'lumot",
        priceIntro: "Kartalarda qisqa ma'lumot ko'rsatiladi. Hozirgi dastur narxlari uchun WhatsApp orqali bog'laning yoki keyin yuklab olinadigan fayllarni qo'shing.",
        approvedEyebrow: "Davlat tomonidan tasdiqlangan",
        approvedIntro: "Quyidagi ro'yxat shaharlar bo'yicha guruhlangan. Qabul talablari va dasturlar haqida batafsil ma'lumot uchun biz bilan bog'laning.",
        uniGovTitle: "Tasdiqlangan universitetlar",
        uniPartnerTitle: "Tasdiqlangan universitetlar",
        cityLabel: "Shahar",
        startPrice: "Boshlanish narxi",
        deposit: "Depozit",
        departmentsLabel: "Mashhur yo'nalishlar",
        highlightsLabel: "Afzalliklar",
        priceDetails: "Yo'nalish narx oralig'ini ko'rish",
        programLabel: "Dastur",
        departmentLabel: "Yo'nalish",
        priceRangeLabel: "Narx oralig'i",
        languageLabel: "Til",
        tuitionLabel: "Yillik to'lov",
        perYear: "/ yil",
        officialWebsite: "WhatsApp orqali bog'lanish",
        priceNote: "Narxlar yo'nalish, grant va o'quv yiliga qarab o'zgarishi mumkin. Eng yangi aniq ro'yxat uchun biz bilan bog'laning.",
        illustrativePhoto: "Kampus hayoti",
        contactForPrice: "Narx uchun bog'laning",
        priceFileComingSoon: "Batafsil narxlar ro'yxati uchun WhatsApp orqali biz bilan bog'laning.",
        downloadPriceList: "Narxlar ro'yxatini yuklab olish",
        priceRangesComingSoon: "Yo'nalish bo'yicha narx oraliqlari fayllar qo'shilgandan keyin ko'rsatiladi."
    }
};

const langSwitcher = document.getElementById("langSwitcher");

function getCurrentLang() {
    return localStorage.getItem("oguzLang") || "tk";
}

function translate(key) {
    const lang = getCurrentLang();
    return translations[lang]?.[key] || translations.en[key] || key;
}

function localized(value, lang = getCurrentLang()) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value;
    return value[lang] || value.en || Object.values(value)[0] || "";
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getInitials(name) {
    return String(name)
        .replace(/&/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 3)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

function getWhatsAppLink(universityName) {
    const lang = getCurrentLang();
    const message = {
        tk: `Salam, ${universityName} barada maglumat almak isleýärin.`,
        tr: `Merhaba, ${universityName} hakkında bilgi almak istiyorum.`,
        en: `Hello, I would like to get information about ${universityName}.`,
        ru: `Здравствуйте, я хочу получить информацию об университете ${universityName}.`,
        uz: `Salom, ${universityName} haqida ma'lumot olmoqchiman.`
    };

    return `https://wa.me/905457272800?text=${encodeURIComponent(message[lang] || message.en)}`;
}

const faqContent = {
    tr: [
        {
            q: "Denklik belgesi nedir?",
            a: "Denklik, Türkmenistan'da veya başka ülkede alınan lise ya da üniversite diplomasının Türkiye'deki diplomalarla eşdeğer olduğunu gösteren belgedir. Başvuru edenklik.meb.gov.tr üzerinden yapılır; evraklar yüklendikten sonra onay maili ve randevu süreci takip edilir."
        },
        {
            q: "Üniversiteye nasıl başvuru yapılır?",
            a: "Özel üniversiteler için başvuruları kendi sistemimizden takip ediyoruz. Devlet üniversitelerinde her okulun yabancı öğrenci başvuru portalına gerekli belgeler yüklenir ve sonuç beklenir."
        },
        {
            q: "Kabul belgesi nedir?",
            a: "Kabul belgesi, öğrencinin üniversitede okumaya hak kazandığını gösteren belgedir. Belgenin QR kodlu olması ve üniversite tarafından ilgili gateway sistemine gönderilmesi gerekir."
        },
        {
            q: "Depozito ödemesi nedir?",
            a: "Depozito, özel üniversitenin ön kayıt yapan öğrencinin kesin geleceğini görmesi için alınır. Vize reddinde genelde iade edilir; keyfi iptallerde kesinti olabilir. Dekont mutlaka saklanmalıdır."
        },
        {
            q: "Türkmenistan'dan ödeme hangi bölümlere yapılmaz?",
            a: "Yüksek lisans, 2 yıllık ön lisans ve hazırlık programları için Türkmenistan'dan ödeme yapılmaz. Üniversitenin listede olup olmaması bu kuralı değiştirmez."
        },
        {
            q: "Hangi durumlarda öğrenci Türkmenistan'dan ödeme yapamaz?",
            a: "Öğrenci daha önce listedeki bir okul için Türkmenistan'dan ödeme aldıysa aynı sınıflar için tekrar ödeme alamaz. Kartına aylık para aktarımı yapılmış olması da ödeme kullanılmış gibi değerlendirilebilir."
        },
        {
            q: "Bir yılda Türkmenistan'dan en fazla ne kadarlık işlem yapılabilir?",
            a: "Yıllık toplam limit genelde 12.000 USD olarak hesaplanır. Okul ücreti ve 12 ay kart aktarımı toplamı bu limiti aşmamalıdır; örneğin 11.000 USD okul ücreti varsa kart aktarımı sadece sınırlı aylar için yapılabilir."
        },
        {
            q: "İkamet izni nedir?",
            a: "İkamet izni, Türkiye'de yasal olarak yaşama hakkı veren belgedir ve Göç İdaresi tarafından verilir. Öğrenciler kesin kayıt sonrası başvuru yapar; süre bitmeden 60 gün önce uzatma yapılabilir."
        },
        {
            q: "Adres kaydı nedir?",
            a: "Adres kaydı, ikamet alındıktan sonra Türkiye'deki kalınan adresin resmi olarak bildirilmesidir. Genelde 20 iş günü içinde yapılması gerekir ve randevu randevu.goc.gov.tr üzerinden alınabilir."
        },
        {
            q: "Adres kaydı için hangi evraklar gerekir?",
            a: "Kalış yerine göre tapu, noter onaylı kira sözleşmesi, otel/yurt belgesi veya yanında kalınan kişi için noter taahhüdü istenir. Üçüncü kişinin yanında kalınıyorsa güncel fatura ya da abonelik belgesi de gerekebilir."
        },
        {
            q: "Sağlık sigortası nedir?",
            a: "Sağlık sigortası, ikamet başvurusu için gereken temel sigortadır. Çoğu özel ve devlet hastanesinde kapsamı sınırlı olabilir; poliçede imza ve kaşe kontrol edilmelidir."
        },
        {
            q: "İkamet izni randevusu nasıl alınır?",
            a: "İkamet işlemleri e-ikamet.goc.gov.tr resmi adresinden ücretsiz yapılır. Başvuruda iletişim bilgileri doğru yazılmalı; Göç İdaresi ek bilgi veya belge isteyebilir."
        },
        {
            q: "İstanbul Kart nedir?",
            a: "İstanbul Kart, İstanbul içinde toplu taşıma için kullanılan karttır. Öğrenci olduktan sonra istanbulkart.istanbul üzerinden öğrenci kartı başvurusu yapılabilir."
        },
        {
            q: "Banka hesabı nasıl açılır?",
            a: "İkamet izni alındıktan sonra bankalardan hesap açmak daha kolay olur. Üniversitenin anlaşmalı olduğu banka varsa süreç daha hızlı ilerleyebilir; kredi kartı için banka depozito isteyebilir."
        },
        {
            q: "İkamet süresinde yurt dışına çıkılabilir mi?",
            a: "Geçerli ikamet süresi içinde Türkiye'ye giriş çıkış yapılabilir. Yeni başvuru sonrası seyahat edilecekse müracaat belgesi ve vergi ödeme dekontu yanında olmalıdır."
        },
        {
            q: "Turist vizesiyle üniversite kaydı yaptırabilir miyim?",
            a: "İstanbul'daki birçok özel üniversite turist vizesiyle veya vizesiz gelen öğrencileri kabul eder ve öğrenci ikameti alınabilir. Bazı devlet üniversiteleri ise öğrenci vizesi isteyebilir."
        },
        {
            q: "Öğrenci ikametiyle çalışabilir miyim?",
            a: "Öğrenci ikameti tek başına resmi çalışma hakkı vermez. Çalışma izni için genelde 2. sınıf ve üzeri olmak gerekir; şartlar başvuru türüne göre değişir."
        },
        {
            q: "Okula gitmezsem ne olur?",
            a: "Devlet üniversiteleri ve bazı özel üniversiteler yoklamayı ciddi takip eder. Çok fazla dersten başarısız olmak veya devamsızlık yapmak ikamet uzatma sürecinde sorun çıkarabilir."
        }
    ],
    tk: [
        {
            q: "Denklik resminamasy näme?",
            a: "Denklik, Türkmenistanda ýa-da başga ýurtda alnan orta mekdep ýa-da uniwersitet diplomynyň Türkiýedäki diplomlar bilen deň derejede kabul edilýändigini görkezýän resminamadyr. Ýüz tutma edenklik.meb.gov.tr arkaly edilýär."
        },
        {
            q: "Uniwersitete nädip ýüz tutmaly?",
            a: "Hususy uniwersitetler üçin ýüz tutmalary öz ulgamymyz arkaly yzarlaýarys. Döwlet uniwersitetlerinde bolsa her uniwersitetiň daşary ýurtly talyp portalyndan gerekli resminamalar ýüklenýär."
        },
        {
            q: "Kabul haty näme?",
            a: "Kabul haty, talybyň uniwersitetde okamaga hukuk gazanandygyny görkezýän resminamadyr. Resminama QR kodly bolmaly we uniwersitet tarapyndan degişli sistema iberilmelidir."
        },
        {
            q: "Depozit tölegi näme?",
            a: "Depozit, hususy uniwersitetiň öňünden ýazylan talybyň hakykatdan geljekdigini görmek üçin alýan tölegidir. Wiza ret edilse köplenç yzyna gaýtarylýar, ýöne sebäpsiz ýatyrylanda kesim bolup biler."
        },
        {
            q: "Türkmenistandan haýsy bölümler üçin töleg geçirilmeýär?",
            a: "Magistratura, 2 ýyllyk önlisans we taýýarlyk programmalary üçin Türkmenistandan töleg geçirilmeýär. Uniwersitetiň sanawda bolmagy bu düzgüni üýtgetmeýär."
        },
        {
            q: "Talyp haýsy ýagdaýda Türkmenistandan töleg alyp bilmez?",
            a: "Talyp öň sanawdaky bir uniwersitet üçin Türkmenistandan töleg alan bolsa, şol synplar üçin täzeden töleg alyp bilmez. Karta aýlyk pul geçirilmegi hem ulanylan töleg ýaly hasaplanyp biler."
        },
        {
            q: "Bir ýylda Türkmenistandan näçe işlem edilip bilner?",
            a: "Ýyllyk umumy limit köplenç 12 000 USD hökmünde hasaplanýar. Okuw tölegi we karta geçirilýän aýlyk pul bilelikde bu limiti geçmeli däldir."
        },
        {
            q: "Ikamet rugsady näme?",
            a: "Ikamet rugsady Türkiýede kanuny ýaşamaga mümkinçilik berýän resminamadyr we Göç edarasy tarapyndan berilýär. Talyplar kesin ýazgyndan soň ýüz tutýarlar, möhlet gutarmanka 60 gün öň uzaltmak bolýar."
        },
        {
            q: "Adres ýazgysy näme?",
            a: "Adres ýazgysy, ikamet alnandan soň Türkiýedäki ýaşaýan salgyňyzy resmi taýdan bildirmekdir. Adatça 20 iş güni içinde edilmelidir we randevu randevu.goc.gov.tr arkaly alynýar."
        },
        {
            q: "Adres ýazgysy üçin haýsy resminamalar gerek?",
            a: "Ýaşaýyş görnüşine görä tapu, notarius tassyklanan kärende şertnamasy, myhmanhana ýa-da umumy ýaşaýyş jaýy resminamasy, ýa-da biriniň öýünde galynsa notarius taahhüdi gerek bolup biler."
        },
        {
            q: "Saglyk ätiýaçlandyrmasy näme?",
            a: "Saglyk ätiýaçlandyrmasy ikamet ýüz tutmasy üçin zerur bolan esasy ätiýaçlandyrmadyr. Köp hassahanalarda çäkli ulanylýar; polisde gol we möhür bolandygyny barlamak gerek."
        },
        {
            q: "Ikamet randevusy nädip alynýar?",
            a: "Ikamet işlemleri e-ikamet.goc.gov.tr resmi sahypasyndan mugt edilýär. Aragatnaşyk maglumatlary dogry ýazylmaly we Göç edarasy goşmaça resminama sorap biler."
        },
        {
            q: "Istanbul Kart näme?",
            a: "Istanbul Kart, Istanbulda jemgyýetçilik ulaglary üçin ulanylýan kartdyr. Talyp bolanyňyzdan soň istanbulkart.istanbul sahypasyndan talyp kartyna ýüz tutup bolýar."
        },
        {
            q: "Bank hasaby nädip açylýar?",
            a: "Ikamet rugsady alnandan soň bank hasaby açmak has aňsat bolýar. Uniwersitetiň şertnamaly banky bar bolsa proses has çalt bolup biler."
        },
        {
            q: "Ikamet döwründe daşary ýurda gidip bolýarmy?",
            a: "Ikamet möhleti güýjünde bolsa Türkiýä girip-çykyp bolýar. Täze ýüz tutmadan soň syýahat edilse, müracaat resminamasy we töleg dekonty ýanyňyzda bolmaly."
        },
        {
            q: "Turist wizasy bilen uniwersitete ýazylmak bolýarmy?",
            a: "Istanbuldaky köp hususy uniwersitet turist wizasy bilen ýa-da wizasyz gelen talyplary kabul edýär. Käbir döwlet uniwersitetleri bolsa talyp wizasy talap edip biler."
        },
        {
            q: "Talyp ikameti bilen işläp bolýarmy?",
            a: "Talyp ikameti özbaşyna resmi iş hukugyny bermeýär. Iş rugsady üçin köplenç 2-nji synp ýa-da ondan ýokary bolmak gerek."
        },
        {
            q: "Okuwa gitmesem näme bolar?",
            a: "Döwlet uniwersitetleri we käbir hususy uniwersitetler gatnaşygyny çynlakaý yzarlaýar. Köp sapakdan galmak ýa-da şowsuz bolmak ikameti uzaltmakda mesele döredip biler."
        }
    ],
    en: [
        {
            q: "What is an equivalency certificate?",
            a: "It confirms that a high school or university diploma earned in Turkmenistan or another country is equivalent to diplomas in Turkey. The application is handled through edenklik.meb.gov.tr, followed by document review and an appointment."
        },
        {
            q: "How do I apply to a university?",
            a: "For private universities, we track applications through our system. For public universities, documents are uploaded to each university's international student application portal."
        },
        {
            q: "What is an acceptance letter?",
            a: "It is the document showing that a student has earned the right to study at the university. It should include a QR code and be sent by the university to the relevant gateway system."
        },
        {
            q: "What is a deposit payment?",
            a: "A deposit shows a private university that the pre-registered student is serious about enrollment. It is usually refunded after a visa rejection, while voluntary cancellations may include deductions."
        },
        {
            q: "Which programs cannot be paid from Turkmenistan?",
            a: "Payments from Turkmenistan are not made for master's, two-year associate degree, or preparatory programs, regardless of whether the university is on the approved list."
        },
        {
            q: "When can a student not pay from Turkmenistan?",
            a: "If a student previously used payments from Turkmenistan for a listed university, the same study years usually cannot be paid again. Monthly card transfers can also count as used support."
        },
        {
            q: "What is the yearly transaction limit from Turkmenistan?",
            a: "The yearly total is generally calculated as 12,000 USD. Tuition plus monthly card transfers should stay within that limit."
        },
        {
            q: "What is a residence permit?",
            a: "A residence permit allows a student to live legally in Turkey and is issued by the Migration Office. Students apply after final registration and can renew up to 60 days before expiry."
        },
        {
            q: "What is address registration?",
            a: "It is the official registration of your address in Turkey after receiving a residence permit. It is usually required within 20 business days, with appointments through randevu.goc.gov.tr."
        },
        {
            q: "Which documents are needed for address registration?",
            a: "Depending on housing type, you may need a title deed, notarized rental contract, hotel/dormitory document, or notarized undertaking from the host. A current utility bill may also be requested."
        },
        {
            q: "What is health insurance?",
            a: "It is the basic insurance needed for a residence permit application. Coverage can be limited in many hospitals, so the policy should be checked for signature and stamp."
        },
        {
            q: "How is a residence permit appointment made?",
            a: "Residence permit procedures are handled free of charge through e-ikamet.goc.gov.tr. Contact details must be entered correctly, and the Migration Office may request extra documents."
        },
        {
            q: "What is Istanbul Kart?",
            a: "Istanbul Kart is the public transport card used in Istanbul. After becoming a student, you can apply for a student card through istanbulkart.istanbul."
        },
        {
            q: "How can I open a bank account?",
            a: "Opening an account is easier after receiving a residence permit. If the university has a partner bank, the process may be faster; credit cards can require a deposit."
        },
        {
            q: "Can I travel abroad during my residence permit?",
            a: "Yes, you can enter and leave Turkey while your residence permit is valid. After a new application, carry the application document and tax payment receipt when traveling."
        },
        {
            q: "Can I enroll with a tourist visa?",
            a: "Many private universities in Istanbul accept students who arrive with a tourist visa or visa-free status. Some public universities may require a student visa."
        },
        {
            q: "Can I work with a student residence permit?",
            a: "A student residence permit alone does not grant official work rights. Work permit applications generally require the student to be in the 2nd year or above."
        },
        {
            q: "What happens if I do not attend classes?",
            a: "Public universities and some private universities monitor attendance carefully. Too many failed courses or absences may create problems during residence permit renewal."
        }
    ],
    ru: [
        {
            q: "Что такое документ о признании диплома?",
            a: "Это документ, подтверждающий, что школьный или университетский диплом, полученный в Туркменистане или другой стране, признается эквивалентным турецким документам. Заявка подается через edenklik.meb.gov.tr."
        },
        {
            q: "Как подать заявку в университет?",
            a: "Для частных университетов мы ведем заявки через нашу систему. Для государственных университетов документы загружаются на портал иностранных студентов каждого университета."
        },
        {
            q: "Что такое письмо о зачислении?",
            a: "Это документ, подтверждающий право студента учиться в университете. Он должен быть с QR-кодом и отправлен университетом в соответствующую gateway-систему."
        },
        {
            q: "Что такое депозит?",
            a: "Депозит показывает частному университету, что студент серьезно планирует поступление. При отказе в визе он обычно возвращается, а при добровольной отмене возможны удержания."
        },
        {
            q: "За какие программы нельзя оплатить из Туркменистана?",
            a: "Оплата из Туркменистана не проводится для магистратуры, двухлетних программ и подготовительных курсов, независимо от наличия университета в списке."
        },
        {
            q: "Когда студент не может оплатить из Туркменистана?",
            a: "Если студент уже использовал оплату из Туркменистана для университета из списка, те же курсы обычно нельзя оплатить повторно. Ежемесячные переводы на карту также могут считаться использованной поддержкой."
        },
        {
            q: "Какой годовой лимит операций из Туркменистана?",
            a: "Годовой общий лимит обычно рассчитывается как 12 000 USD. Оплата обучения и ежемесячные переводы на карту вместе не должны превышать этот лимит."
        },
        {
            q: "Что такое вид на жительство?",
            a: "Вид на жительство дает право легально жить в Турции и выдается миграционной службой. Студенты подают заявку после окончательной регистрации и могут продлить его за 60 дней до окончания."
        },
        {
            q: "Что такое регистрация адреса?",
            a: "Это официальное уведомление адреса проживания в Турции после получения вида на жительство. Обычно это нужно сделать в течение 20 рабочих дней через randevu.goc.gov.tr."
        },
        {
            q: "Какие документы нужны для регистрации адреса?",
            a: "В зависимости от жилья могут потребоваться документ о собственности, нотариальный договор аренды, справка из отеля или общежития, либо нотариальное обязательство принимающего лица."
        },
        {
            q: "Что такое медицинская страховка?",
            a: "Это базовая страховка, необходимая для заявки на вид на жительство. Покрытие во многих больницах может быть ограниченным, поэтому нужно проверить подпись и печать в полисе."
        },
        {
            q: "Как получить рандеву на вид на жительство?",
            a: "Процедуры выполняются бесплатно через официальный сайт e-ikamet.goc.gov.tr. Контактные данные должны быть верными; миграционная служба может запросить дополнительные документы."
        },
        {
            q: "Что такое Istanbul Kart?",
            a: "Istanbul Kart — карта для общественного транспорта в Стамбуле. После получения статуса студента можно подать заявку на студенческую карту через istanbulkart.istanbul."
        },
        {
            q: "Как открыть банковский счет?",
            a: "После получения вида на жительство открыть счет проще. Если у университета есть банк-партнер, процесс может быть быстрее; для кредитной карты банк может попросить депозит."
        },
        {
            q: "Можно ли выезжать за границу во время вида на жительство?",
            a: "Да, при действующем виде на жительство можно въезжать в Турцию и выезжать из нее. После новой заявки следует иметь при себе документ обращения и квитанцию об оплате налога."
        },
        {
            q: "Можно ли поступить с туристической визой?",
            a: "Многие частные университеты Стамбула принимают студентов с туристической визой или безвизовым въездом. Некоторые государственные университеты могут требовать студенческую визу."
        },
        {
            q: "Можно ли работать со студенческим ВНЖ?",
            a: "Студенческий ВНЖ сам по себе не дает официального права на работу. Для разрешения на работу обычно нужно быть студентом 2 курса или выше."
        },
        {
            q: "Что будет, если не посещать занятия?",
            a: "Государственные и некоторые частные университеты строго следят за посещаемостью. Большое количество пропусков или неуспешных предметов может создать проблемы при продлении ВНЖ."
        }
    ],
    uz: [
        {
            q: "Diplom tengligi hujjati nima?",
            a: "Bu Turkmaniston yoki boshqa davlatda olingan maktab yoki universitet diplomi Turkiyadagi diplomlarga teng ekanini ko'rsatadigan hujjat. Ariza edenklik.meb.gov.tr orqali beriladi."
        },
        {
            q: "Universitetga qanday ariza beriladi?",
            a: "Xususiy universitetlar uchun arizalarni o'z tizimimiz orqali kuzatamiz. Davlat universitetlarida hujjatlar har bir universitetning xorijiy talabalar portaliga yuklanadi."
        },
        {
            q: "Qabul hujjati nima?",
            a: "Qabul hujjati talabaning universitetda o'qishga qabul qilinganini ko'rsatadi. Unda QR kod bo'lishi va universitet uni tegishli gateway tizimiga yuborishi kerak."
        },
        {
            q: "Depozit to'lovi nima?",
            a: "Depozit xususiy universitetga talabaning ro'yxatdan o'tishga jiddiyligini ko'rsatadi. Viza rad etilganda odatda qaytariladi, ixtiyoriy bekor qilishda ushlab qolish bo'lishi mumkin."
        },
        {
            q: "Turkmanistondan qaysi dasturlar uchun to'lov qilinmaydi?",
            a: "Magistratura, ikki yillik kollej dasturlari va tayyorlov kurslari uchun Turkmanistondan to'lov qilinmaydi. Universitet ro'yxatda bo'lishi bu qoidani o'zgartirmaydi."
        },
        {
            q: "Qaysi holatda talaba Turkmanistondan to'lov qila olmaydi?",
            a: "Talaba oldin ro'yxatdagi universitet uchun Turkmanistondan to'lov olgan bo'lsa, o'sha kurslar uchun qayta to'lov ololmaydi. Kartaga oylik pul o'tkazilishi ham foydalanilgan yordam deb hisoblanishi mumkin."
        },
        {
            q: "Bir yilda Turkmanistondan qancha operatsiya qilish mumkin?",
            a: "Yillik umumiy limit odatda 12 000 USD deb hisoblanadi. O'qish to'lovi va kartaga oylik o'tkazmalar birgalikda bu limitdan oshmasligi kerak."
        },
        {
            q: "Yashash ruxsati nima?",
            a: "Yashash ruxsati Turkiyada qonuniy yashash imkonini beradigan hujjat bo'lib, Migratsiya idorasi tomonidan beriladi. Talabalar yakuniy ro'yxatdan o'tgandan keyin ariza beradi."
        },
        {
            q: "Manzil ro'yxati nima?",
            a: "Bu yashash ruxsatidan keyin Turkiyadagi manzilni rasmiy ro'yxatdan o'tkazishdir. Odatda 20 ish kuni ichida bajariladi va randevu.goc.gov.tr orqali uchrashuv olinadi."
        },
        {
            q: "Manzil ro'yxati uchun qaysi hujjatlar kerak?",
            a: "Turar joy turiga qarab mulk hujjati, notarial ijara shartnomasi, mehmonxona yoki yotoqxona ma'lumoti, yoki uy egasining notarial kafolati talab qilinishi mumkin."
        },
        {
            q: "Sog'liq sug'urtasi nima?",
            a: "Bu yashash ruxsati arizasi uchun kerak bo'ladigan asosiy sug'urtadir. Ko'p shifoxonalarda qamrovi cheklangan bo'lishi mumkin, shuning uchun imzo va muhrni tekshirish kerak."
        },
        {
            q: "Yashash ruxsati uchrashuvi qanday olinadi?",
            a: "Jarayonlar e-ikamet.goc.gov.tr rasmiy saytida bepul bajariladi. Aloqa ma'lumotlari to'g'ri yozilishi kerak; Migratsiya idorasi qo'shimcha hujjat so'rashi mumkin."
        },
        {
            q: "Istanbul Kart nima?",
            a: "Istanbul Kart Istanbuldagi jamoat transporti uchun ishlatiladigan kartadir. Talaba bo'lgach, istanbulkart.istanbul orqali talaba kartasiga ariza berish mumkin."
        },
        {
            q: "Bank hisobini qanday ochish mumkin?",
            a: "Yashash ruxsati olingandan keyin bank hisobini ochish osonroq bo'ladi. Universitetning hamkor banki bo'lsa, jarayon tezroq bo'lishi mumkin."
        },
        {
            q: "Yashash ruxsati davrida chet elga chiqish mumkinmi?",
            a: "Ha, yashash ruxsati amal qilayotgan paytda Turkiyaga kirib-chiqish mumkin. Yangi arizadan keyin safarga chiqilsa, ariza hujjati va soliq kvitansiyasi yoningizda bo'lishi kerak."
        },
        {
            q: "Turistik viza bilan universitetga yozilish mumkinmi?",
            a: "Istanbuldagi ko'p xususiy universitetlar turistik viza yoki vizasiz kelgan talabalarni qabul qiladi. Ba'zi davlat universitetlari talaba vizasini talab qilishi mumkin."
        },
        {
            q: "Talaba yashash ruxsati bilan ishlash mumkinmi?",
            a: "Talaba yashash ruxsati o'zi rasmiy ishlash huquqini bermaydi. Ish ruxsati uchun odatda 2-kurs yoki undan yuqori bo'lish talab qilinadi."
        },
        {
            q: "Darslarga bormasam nima bo'ladi?",
            a: "Davlat universitetlari va ba'zi xususiy universitetlar davomatni jiddiy kuzatadi. Ko'p darslardan qolish yoki muvaffaqiyatsizlik yashash ruxsatini uzaytirishda muammo tug'dirishi mumkin."
        }
    ]
};

function renderFAQ() {
    const faqList = document.getElementById("faq-list");
    if (!faqList) return;

    const lang = getCurrentLang();
    const items = faqContent[lang] || faqContent.en;

    faqList.innerHTML = items.map(item => `
        <article class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
                <span>${escapeHTML(item.q)}</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer">
                <p>${escapeHTML(item.a)}</p>
            </div>
        </article>
    `).join("");

    attachFAQAccordions();
}

function updateLanguage(lang) {
    localStorage.setItem("oguzLang", lang);
    document.documentElement.lang = lang;

    if (langSwitcher) langSwitcher.value = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = translations[lang]?.[key];

        if (value !== undefined) {
            el.innerHTML = value;
        }
    });

    renderFAQ();
    renderUniversityLogos();
    renderUniversities();
}

if (langSwitcher) {
    langSwitcher.addEventListener("change", (event) => {
        updateLanguage(event.target.value);
    });
}

updateLanguage(getCurrentLang());

// --- UNIVERSITY LOGO CAROUSEL ---
function renderUniversityLogos() {
    const logoTrack = document.getElementById("university-logo-track");

    if (!logoTrack) return;
    if (typeof universities === "undefined") return;

    const lang = getCurrentLang();
    const approvedUnis = universities.filter(uni => uni.category === "partner");
    const carouselItems = [...approvedUnis, ...approvedUnis];

    logoTrack.innerHTML = carouselItems.map((uni, index) => {
        const displayName = localized(uni.displayName, lang) || uni.name;
        const initials = getInitials(uni.name);
        const hidden = index >= approvedUnis.length ? ' aria-hidden="true"' : "";
        const logo = uni.logo || "";

        return `
            <div class="university-logo-tile"${hidden}>
                <span class="uni-logo-mark">
                    ${logo ? `
                        <img src="${escapeHTML(logo)}" alt="" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
                        <span hidden>${escapeHTML(initials)}</span>
                    ` : `<span>${escapeHTML(initials)}</span>`}
                </span>
                <span class="uni-logo-name">${escapeHTML(displayName)}</span>
            </div>
        `;
    }).join("");
}

// --- DYNAMICALLY BUILD THE UNIVERSITY LIST ---
function renderUniversities() {
    const govContainer = document.getElementById("gov-university-list");
    const partnerContainer = document.getElementById("partner-university-list");

    if (!govContainer && !partnerContainer) return;
    if (typeof universities === "undefined") return;

    const lang = getCurrentLang();

    if (govContainer) {
        let currentCity = "";
        let cityHtml = "";
        const govUnis = universities
            .filter(uni => uni.category === "government")
            .sort((a, b) => a.city.localeCompare(b.city) || a.name.localeCompare(b.name));

        govUnis.forEach(uni => {
            if (uni.city !== currentCity) {
                if (currentCity !== "") cityHtml += "</div>";
                currentCity = uni.city;
                cityHtml += `<div class="city-group"><h3 class="city-name">${escapeHTML(currentCity)}</h3>`;
            }

            cityHtml += `
                <a href="${escapeHTML(getWhatsAppLink(uni.name))}" target="_blank" rel="noopener" class="uni-item">
                    <span>
                        <span class="uni-name">${escapeHTML(uni.name)}</span>
                        <span class="uni-meta">${escapeHTML(translate("cityLabel"))}: ${escapeHTML(uni.city)}</span>
                    </span>
                    <span class="uni-arrow" aria-hidden="true">→</span>
                </a>
            `;
        });

        if (currentCity !== "") cityHtml += "</div>";
        govContainer.innerHTML = cityHtml;
    }

    if (partnerContainer) {
        const partnerUnis = universities.filter(uni => uni.category === "partner");

        partnerContainer.innerHTML = partnerUnis.map(uni => {
            const displayName = localized(uni.displayName, lang) || uni.name;
            const departments = localized(uni.departments, lang);
            const highlights = localized(uni.highlights, lang);
            const departmentRanges = localized(uni.departmentRanges, lang) || uni.departmentRanges || [];
            const image = uni.image || "./images/campus-life.jpg";
            const contactHref = getWhatsAppLink(displayName);
            const priceFile = localized(uni.priceFile, lang);
            const startingPrice = uni.startingPrice
                ? `${escapeHTML(uni.startingPrice)} ${escapeHTML(translate("perYear"))}`
                : escapeHTML(translate("contactForPrice"));
            const depositValue = uni.deposit
                ? escapeHTML(uni.deposit)
                : escapeHTML(translate("contactForPrice"));
            const hasDepartmentRanges = Array.isArray(departmentRanges) && departmentRanges.length > 0;

            const departmentTags = Array.isArray(departments)
                ? departments.map(item => `<span>${escapeHTML(item)}</span>`).join("")
                : "";
            const highlightList = Array.isArray(highlights)
                ? highlights.map(item => `<li>${escapeHTML(item)}</li>`).join("")
                : "";
            const rangeRows = Array.isArray(departmentRanges) ? departmentRanges.map(item => `
                <tr>
                    <td>${escapeHTML(localized(item.department, lang))}</td>
                    <td>${escapeHTML(localized(item.range, lang) || translate("contactForPrice"))}</td>
                </tr>
            `).join("") : "";
            const priceDetailsContent = hasDepartmentRanges
                ? `
                    <div class="table-wrap">
                        <table class="department-range-table">
                            <thead>
                                <tr>
                                    <th>${escapeHTML(translate("departmentLabel"))}</th>
                                    <th>${escapeHTML(translate("priceRangeLabel"))}</th>
                                </tr>
                            </thead>
                            <tbody>${rangeRows}</tbody>
                        </table>
                    </div>
                    <p>${escapeHTML(translate("priceNote"))}</p>
                `
                : priceFile
                    ? `
                        <a href="${escapeHTML(priceFile)}" class="price-file-link" download>
                            ${escapeHTML(translate("downloadPriceList"))}
                        </a>
                        <p>${escapeHTML(translate("priceNote"))}</p>
                    `
                    : `<p class="price-note-inline">${escapeHTML(translate("priceRangesComingSoon"))}</p>`;

            return `
                <article class="partner-card">
                    <div class="partner-image-wrap">
                        <img src="${escapeHTML(image)}" alt="${escapeHTML(translate("illustrativePhoto"))}">
                        <span>${escapeHTML(translate("illustrativePhoto"))}</span>
                    </div>
                    <div class="partner-details">
                        <div class="partner-topline">${escapeHTML(translate("cityLabel"))}: ${escapeHTML(uni.city)}</div>
                        <h3 class="partner-name">${escapeHTML(displayName)}</h3>
                        <p class="partner-description">${escapeHTML(localized(uni.description, lang))}</p>

                        <div class="price-summary">
                            <div>
                                <span>${escapeHTML(translate("startPrice"))}</span>
                                <strong>${startingPrice}</strong>
                            </div>
                            <div>
                                <span>${escapeHTML(translate("deposit"))}</span>
                                <strong>${depositValue}</strong>
                            </div>
                        </div>

                        <div class="partner-block">
                            <strong>${escapeHTML(translate("departmentsLabel"))}</strong>
                            <div class="tag-list">${departmentTags}</div>
                        </div>

                        <div class="partner-block">
                            <strong>${escapeHTML(translate("highlightsLabel"))}</strong>
                            <ul class="compact-list">${highlightList}</ul>
                        </div>

                        <details class="price-details"${hasDepartmentRanges ? " open" : ""}>
                            <summary>${escapeHTML(translate("priceDetails"))}</summary>
                            ${priceDetailsContent}
                        </details>

                        <a href="${escapeHTML(contactHref)}" target="_blank" rel="noopener" class="partner-link">${escapeHTML(translate("officialWebsite"))}</a>
                    </div>
                </article>
            `;
        }).join("");
    }
}
