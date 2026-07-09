const defaultDepartments = {
    tk: ["Bakalawr", "Magistratura", "Lukmançylyk ugurlary", "Inženerçilik"],
    tr: ["Lisans", "Yüksek lisans", "Sağlık programları", "Mühendislik"],
    en: ["Undergraduate", "Graduate", "Health programs", "Engineering"],
    ru: ["Бакалавриат", "Магистратура", "Медицинские направления", "Инженерия"],
    uz: ["Bakalavr", "Magistratura", "Tibbiyot yo'nalishlari", "Muhandislik"]
};

const defaultHighlights = {
    tk: ["2026 tassyklanan sanawda", "WhatsApp arkaly maslahat", "Bahalar aýratyn sanawdan berilýär"],
    tr: ["2026 onaylı listede", "WhatsApp ile danışmanlık", "Ücretler ayrı listeden paylaşılır"],
    en: ["On the 2026 approved list", "WhatsApp guidance", "Prices are shared from a separate list"],
    ru: ["В списке утвержденных на 2026 год", "Консультация через WhatsApp", "Цены предоставляются отдельным списком"],
    uz: ["2026 tasdiqlangan ro'yxatda", "WhatsApp orqali maslahat", "Narxlar alohida ro'yxatdan beriladi"]
};

const approvedDescription = {
    tk: "2026-njy ýyl üçin tassyklanan uniwersitetleriň sanawyndaky okuw mekdebi. Bölüm, töleg we kabul şertleri barada iň soňky maglumat üçin biziň bilen habarlaşyň.",
    tr: "2026 yılı için onaylı üniversiteler listesindeki okul. Bölüm, ücret ve kabul şartları için en güncel bilgiyi bizden isteyin.",
    en: "A university on the 2026 approved list. Contact us for the latest information about programs, tuition, and admission requirements.",
    ru: "Университет из утвержденного списка на 2026 год. Свяжитесь с нами для актуальной информации о программах, стоимости и поступлении.",
    uz: "2026 yil tasdiqlangan ro'yxatidagi universitet. Yo'nalishlar, narxlar va qabul shartlari bo'yicha eng yangi ma'lumot uchun biz bilan bog'laning."
};

const partnerDescription = {
    tk: "Bu biziň resmi hyzmatdaş uniwersitetimizdir. Bölüm, töleg we kabul şertleri barada iň soňky maglumat üçin biziň bilen habarlaşyň.",
    tr: "Bu bizim resmi partner üniversitemizdir. Bölüm, ücret ve kabul şartları için en güncel bilgiyi bizden isteyin.",
    en: "An official partner university. Contact us for the latest information about programs, tuition, and admission requirements.",
    ru: "Это наш официальный университет-партнер. Свяжитесь с нами для актуальной информации о программах, стоимости и поступлении.",
    uz: "Bu bizning rasmiy hamkor universitetimizdir. Yo'nalishlar, narxlar va qabul shartlari bo'yicha eng yangi ma'lumot uchun biz bilan bog'laning."
};

const universityLogoSlugs = {
    "Acibadem University": "acibadem",
    "Altinbas University": "altinbas",
    "Atilim University": "atilim",
    "Bahcesehir University": "bahcesehir",
    "Baskent University": "baskent",
    "Beykent University": "beykent",
    "Bezmialem Vakif University": "bezmialem-vakif",
    "Bilkent University": "bilkent",
    "Biruni University": "biruni",
    "Cankaya University": "cankaya",
    "Istanbul Okan University": "istanbul-okan",
    "Istinye University": "istinye",
    "Izmir University of Economics": "izmir-economics",
    "Kadir Has University": "kadir-has",
    "Koc University": "koc",
    "Ozyegin University": "ozyegin",
    "Sabanci University": "sabanci",
    "Istanbul Aydin University": "istanbul-aydin",
    "Istanbul Bilgi University": "istanbul-bilgi",
    "Istanbul Gelisim University": "istanbul-gelisim",
    "Istanbul Medipol University": "istanbul-medipol",
    "TOBB University of Economics and Technology": "tobb-etuu",
    "Uskudar University": "uskudar",
    "Yasar University": "yasar",
    "Yeditepe University": "yeditepe"
};

const availableLogoSlugs = new Set([
    "altinbas",
    "atilim",
    "acibadem",
    "bahcesehir",
    "baskent",
    "beykent",
    "bezmialem-vakif",
    "biruni",
    "istanbul-aydin",
    "istanbul-bilgi",
    "istanbul-medipol",
    "koc",
    "sabanci",
    "yeditepe",
    "ozyegin",
    "uskudar",
    "tobb-etuu",
    "cankaya",
    "istanbul-okan",
    "istinye",
    "bilkent",
    "kadir-has",
    "izmir-economics",
    "tobb-etuu",
    "istanbul-gelisim",
    "yasar"
]);

const departmentLabels = {
    "Medicine": {
        tk: "Lukmançylyk",
        tr: "Tıp",
        en: "Medicine",
        ru: "Медицина",
        uz: "Tibbiyot"
    },
    "Dentistry": {
        tk: "Stomatologiýa",
        tr: "Diş hekimliği",
        en: "Dentistry",
        ru: "Стоматология",
        uz: "Stomatologiya"
    },
    "Pharmacy": {
        tk: "Farmasiýa",
        tr: "Eczacılık",
        en: "Pharmacy",
        ru: "Фармация",
        uz: "Farmatsiya"
    },
    "Engineering": {
        tk: "Inženerçilik",
        tr: "Mühendislik",
        en: "Engineering",
        ru: "Инженерия",
        uz: "Muhandislik"
    },
    "Architecture & Design": {
        tk: "Arhitektura we dizaýn",
        tr: "Mimarlık ve tasarım",
        en: "Architecture & Design",
        ru: "Архитектура и дизайн",
        uz: "Arxitektura va dizayn"
    },
    "Health Sciences": {
        tk: "Saglyk ylymlary",
        tr: "Sağlık bilimleri",
        en: "Health Sciences",
        ru: "Науки о здоровье",
        uz: "Sog'liqni saqlash fanlari"
    },
    "Aviation & Pilotage": {
        tk: "Awiasiýa we pilotaj",
        tr: "Havacılık ve pilotaj",
        en: "Aviation & Pilotage",
        ru: "Авиация и пилотаж",
        uz: "Aviatsiya va pilotaj"
    },
    "Business & Social Sciences": {
        tk: "Işewürlik we sosial ylymlar",
        tr: "İşletme ve sosyal bilimler",
        en: "Business & Social Sciences",
        ru: "Бизнес и социальные науки",
        uz: "Biznes va ijtimoiy fanlar"
    },
    "Law": {
        tk: "Hukuk",
        tr: "Hukuk",
        en: "Law",
        ru: "Право",
        uz: "Huquq"
    },
    "Education": {
        tk: "Mugallymçylyk",
        tr: "Eğitim",
        en: "Education",
        ru: "Педагогика",
        uz: "Ta'lim"
    },
    "Communication & Media": {
        tk: "Kommunikasiýa we media",
        tr: "İletişim ve medya",
        en: "Communication & Media",
        ru: "Коммуникации и медиа",
        uz: "Kommunikatsiya va media"
    },
    "Arts & Conservatory": {
        tk: "Sungat we konserwatoriýa",
        tr: "Sanat ve konservatuvar",
        en: "Arts & Conservatory",
        ru: "Искусство и консерватория",
        uz: "San'at va konservatoriya"
    },
    "Applied Sciences": {
        tk: "Amaly ylymlar",
        tr: "Uygulamalı bilimler",
        en: "Applied Sciences",
        ru: "Прикладные науки",
        uz: "Amaliy fanlar"
    },
    "Associate & Vocational": {
        tk: "Ön lisans we hünär ugurlary",
        tr: "Ön lisans ve meslek programları",
        en: "Associate & Vocational",
        ru: "Колледж и профессиональные программы",
        uz: "Kasbiy va qisqa dasturlar"
    }
};

const makeDepartmentRange = (department, range) => ({
    department: departmentLabels[department] || department,
    range
});

const getStartingPrice = (ranges) => {
    const prices = ranges.flatMap(item => {
        const matches = String(item.range || "").match(/\d[\d,]*/g) || [];
        return matches
            .map(value => Number(value.replace(/,/g, "")))
            .filter(value => Number.isFinite(value));
    });

    if (!prices.length) return null;

    return `$${Math.min(...prices).toLocaleString("en-US")}`;
};

const departmentRangeData = {
    "bahcesehir": [
        makeDepartmentRange("Medicine", "$24,000-$28,000"),
        makeDepartmentRange("Pharmacy", "$15,000"),
        makeDepartmentRange("Engineering", "$9,000-$12,000"),
        makeDepartmentRange("Architecture & Design", "$6,800-$8,500"),
        makeDepartmentRange("Health Sciences", "$6,375"),
        makeDepartmentRange("Aviation & Pilotage", "$9,000"),
        makeDepartmentRange("Business & Social Sciences", "$8,500"),
        makeDepartmentRange("Law", "$10,000"),
        makeDepartmentRange("Education", "$5,950"),
        makeDepartmentRange("Communication & Media", "$6,800"),
        makeDepartmentRange("Arts & Conservatory", "$5,950"),
        makeDepartmentRange("Applied Sciences", "$5,950"),
        makeDepartmentRange("Associate & Vocational", "$3,500")
    ],
    "istanbul-gelisim": [
        makeDepartmentRange("Dentistry", "$13,500-$17,250"),
        makeDepartmentRange("Engineering", "$4,500-$6,000"),
        makeDepartmentRange("Architecture & Design", "$4,000-$4,750"),
        makeDepartmentRange("Health Sciences", "$4,000-$5,000"),
        makeDepartmentRange("Aviation & Pilotage", "$4,000-$4,250"),
        makeDepartmentRange("Business & Social Sciences", "$4,000-$4,500"),
        makeDepartmentRange("Communication & Media", "$4,000-$4,250"),
        makeDepartmentRange("Applied Sciences", "$4,000-$4,250"),
        makeDepartmentRange("Associate & Vocational", "$3,000-$3,250")
    ],
    "istinye": [
        makeDepartmentRange("Medicine", "$23,000-$29,000"),
        makeDepartmentRange("Dentistry", "$20,000-$24,500"),
        makeDepartmentRange("Pharmacy", "$14,000-$15,000"),
        makeDepartmentRange("Engineering", "$8,000"),
        makeDepartmentRange("Architecture & Design", "$7,000-$8,000"),
        makeDepartmentRange("Health Sciences", "$8,000"),
        makeDepartmentRange("Business & Social Sciences", "$8,000"),
        makeDepartmentRange("Communication & Media", "$7,000"),
        makeDepartmentRange("Applied Sciences", "$8,000")
    ],
    "istanbul-aydin": [
        makeDepartmentRange("Medicine", "$25,000"),
        makeDepartmentRange("Dentistry", "$23,000"),
        makeDepartmentRange("Pharmacy", "$11,000-$15,000"),
        makeDepartmentRange("Engineering", "$5,000-$6,500"),
        makeDepartmentRange("Architecture & Design", "$5,000-$6,500"),
        makeDepartmentRange("Health Sciences", "$6,500-$8,000"),
        makeDepartmentRange("Aviation & Pilotage", "$6,000-$8,000"),
        makeDepartmentRange("Business & Social Sciences", "$5,000-$6,500"),
        makeDepartmentRange("Law", "$6,500"),
        makeDepartmentRange("Education", "$5,000"),
        makeDepartmentRange("Communication & Media", "$5,000-$6,000"),
        makeDepartmentRange("Arts & Conservatory", "$5,000"),
        makeDepartmentRange("Applied Sciences", "$5,000-$6,500"),
        makeDepartmentRange("Associate & Vocational", "$3,000")
    ],
    "istanbul-okan": [
        makeDepartmentRange("Medicine", "$19,500-$22,500"),
        makeDepartmentRange("Dentistry", "$15,000-$18,000"),
        makeDepartmentRange("Pharmacy", "$8,000-$9,000"),
        makeDepartmentRange("Engineering", "$4,500-$5,000"),
        makeDepartmentRange("Architecture & Design", "$4,500-$5,000"),
        makeDepartmentRange("Health Sciences", "$4,500-$5,000"),
        makeDepartmentRange("Aviation & Pilotage", "$4,500-$8,000"),
        makeDepartmentRange("Business & Social Sciences", "$4,500-$5,000"),
        makeDepartmentRange("Law", "$4,500"),
        makeDepartmentRange("Education", "$4,500-$5,000"),
        makeDepartmentRange("Communication & Media", "$4,500"),
        makeDepartmentRange("Arts & Conservatory", "$4,500"),
        makeDepartmentRange("Applied Sciences", "$4,500-$5,000")
    ],
    "biruni": [
        makeDepartmentRange("Medicine", "$19,000-$21,000"),
        makeDepartmentRange("Dentistry", "$19,000-$21,000"),
        makeDepartmentRange("Pharmacy", "$10,000-$12,000"),
        makeDepartmentRange("Engineering", "$4,000-$5,000"),
        makeDepartmentRange("Architecture & Design", "$4,000-$5,000"),
        makeDepartmentRange("Health Sciences", "$4,000-$5,000"),
        makeDepartmentRange("Business & Social Sciences", "$4,000"),
        makeDepartmentRange("Education", "$4,000-$5,000"),
        makeDepartmentRange("Applied Sciences", "$4,000"),
        makeDepartmentRange("Associate & Vocational", "$5,000")
    ]
};

const universities = [
    {
        name: "Acibadem University",
        displayName: "Ajybadem Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/acibadem.webp"
    },
    {
        name: "Altinbas University",
        displayName: "Altynbas Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/altinbas.jpg"
    },
    {
        name: "Atilim University",
        displayName: "Atylym Uniwersiteti",
        city: "Ankara",
        image: "./images/universities/atilim.jpg"
    },
    {
        name: "Bahcesehir University",
        displayName: "Bahcesehir Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/bahcesehir.jpg"
    },
    {
        name: "Baskent University",
        displayName: "Baskent Uniwersiteti",
        city: "Ankara",
        image: "./images/universities/baskent.jpg"
    },
    {
        name: "Beykent University",
        displayName: "Beykent Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/beykent.png"
    },
    {
        name: "Bezmialem Vakif University",
        displayName: "Bezmialem Vakyf Universiteti",
        city: "Istanbul",
        image: "./images/universities/bezmialem-vakif.jpg"
    },
    {
        name: "Bilkent University",
        displayName: "Bilkent Uniwersiteti",
        city: "Ankara",
        image: "./images/universities/bilkent.jpg"
    },
    {
        name: "Biruni University",
        displayName: "Biruni Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/biruni.jpg"
    },
    {
        name: "Cankaya University",
        displayName: "Çankaya Uniwersiteti",
        city: "Ankara",
        image: "./images/universities/cankaya.jpg"
    },
    {
        name: "Istanbul Okan University",
        displayName: "Istanbul Okan Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/istanbul-okan.jpg"
    },
    {
        name: "Istinye University",
        displayName: "Istinye Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/istinye.jpg"
    },
    {
        name: "Izmir University of Economics",
        displayName: "Izmir Ekonomi Uniwersiteti",
        city: "Izmir",
        image: "./images/universities/izmir-economics.jpg"
    },
    {
        name: "Kadir Has University",
        displayName: "Kadir Has Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/kadir-has.jpg"
    },
    {
        name: "Koc University",
        displayName: "Koc Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/koc.jpg"
    },
    {
        name: "Ozyegin University",
        displayName: "Özyegin Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/ozyegin.jpg"
    },
    {
        name: "Sabanci University",
        displayName: "Sabanjy Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/sabanci.png"
    },
    {
        name: "Istanbul Aydin University",
        displayName: "Stambul Aýdin Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/istanbul-aydin.jpg"
    },
    {
        name: "Istanbul Bilgi University",
        displayName: "Stambul Bilgi Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/bilgi.jpg"
    },
    {
        name: "Istanbul Gelisim University",
        displayName: "Stambul Gelisim Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/istanbul-gelisim-card.jpg"
    },
    {
        name: "Istanbul Medipol University",
        displayName: "Stambul Medipol Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/medipol.jpg"
    },
    {
        name: "TOBB University of Economics and Technology",
        displayName: "TOBB Ekonomi ve Teknoloji Uniwersiteti",
        city: "Ankara",
        image: "./images/universities/tobb-etuu.jpg"
    },
    {
        name: "Uskudar University",
        displayName: "Üsküdar Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/uskudar.jpg"
    },
    {
        name: "Yasar University",
        displayName: "Yasar Uniwersiteti",
        city: "Izmir",
        image: "./images/universities/yasar.jpg"
    },
    {
        name: "Yeditepe University",
        displayName: "Yeditepe Uniwersiteti",
        city: "Istanbul",
        image: "./images/universities/yeditepe.jpg"
    }
].map(uni => {
    const slug = universityLogoSlugs[uni.name];
    const departmentRanges = departmentRangeData[slug] || [];

    return {
        ...uni,
        slug,
        logo: availableLogoSlugs.has(slug)
            ? `./images/university-logos/${slug}.png`
            : null,
        category: "partner",
        startingPrice: getStartingPrice(departmentRanges) || "$4,000",
        deposit: "$1000",
        description: (uni.name === "Bahcesehir University" || uni.name === "Istanbul Medipol University") ? approvedDescription : partnerDescription,
        departments: defaultDepartments,
        highlights: defaultHighlights,
        departmentRanges,
        priceFile: null,
        programs: []
    };
});
