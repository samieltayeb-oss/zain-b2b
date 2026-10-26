export type Locale = "en" | "ar";
export type EvidenceClass = "VERIFIED" | "REPORTED" | "INFERENCE" | "UNKNOWN";

export interface BilingualText {
  en: string;
  ar: string;
}

export interface HeadlineStat {
  id: string;
  value: BilingualText;
  label: BilingualText;
  source: BilingualText;
  citation: string;
  evidence: EvidenceClass;
}

export interface SectorItem {
  rank: number;
  salesRank: number;
  strategyRank: number;
  strategyScore: number;
  tier: 1 | 2 | 3 | 4;
  tierLabel: BilingualText;
  id: string;
  name: BilingualText;
  leadBundle: BilingualText;
  approachQuote: BilingualText;
  route: BilingualText;
  buyer: BilingualText;
  marketState: { text: BilingualText; evidence: EvidenceClass; citation?: string }[];
  pains: BilingualText[];
  zainOffers: BilingualText[];
  whyItWorks: BilingualText;
  whyZain: BilingualText;
  francoPintoAdds: BilingualText[];
  flags: BilingualText[];
}

export interface BundleItem {
  id: string;
  number: string;
  name: BilingualText;
  target: BilingualText;
  productsInside: BilingualText[];
  whyItWins: BilingualText;
  francoPintoLayer: BilingualText;
  evidence: EvidenceClass;
  citations: string;
}

export const headlineStats: HeadlineStat[] = [
  {
    id: "customers",
    value: { en: "12.4M", ar: "12.4 مليون" },
    label: {
      en: "Zain Sudan customers in Q1 2026, up 13% year on year",
      ar: "مشترك لدى زين السودان في الربع الأول 2026، بنمو سنوي 13%",
    },
    source: { en: "Zain Group Q1 2026 release", ar: "بيان نتائج مجموعة زين للربع الأول 2026" },
    citation: "[7]",
    evidence: "VERIFIED",
  },
  {
    id: "revenue",
    value: { en: "US$157M", ar: "157 مليون دولار" },
    label: {
      en: "Zain Sudan Q1 2026 revenue (+34% YoY); data represents 37% of revenue",
      ar: "إيرادات زين السودان في الربع الأول 2026 (+34% سنوياً)؛ تشكل البيانات 37% من الإيرادات",
    },
    source: { en: "Zain Group Q1 2026 release", ar: "بيان نتائج مجموعة زين للربع الأول 2026" },
    citation: "[7]",
    evidence: "VERIFIED",
  },
  {
    id: "starlink",
    value: { en: "Nov 2026", ar: "نوفمبر 2026" },
    label: {
      en: "End of the Starlink grace period for humanitarian users; Thuraya ended 1 Feb 2026",
      ar: "انتهاء المهلة الاستثنائية لخدمة Starlink للمنظمات الإنسانية؛ وتوقف خدمات الثريا منذ 1 فبراير 2026",
    },
    source: { en: "Logistics Cluster, ETC", ar: "مجموعة اللوجستيات، قطاع الاتصالات في الطوارئ (ETC)" },
    citation: "[36,33]",
    evidence: "VERIFIED",
  },
  {
    id: "hnrp",
    value: { en: "14%", ar: "14%" },
    label: {
      en: "Share of the US$2.87bn 2026 humanitarian plan funded; 33.7M people in need",
      ar: "نسبة تمويل خطة الاستجابة الإنسانية لعام 2026 البالغة 2.87 مليار دولار؛ مع وجود 33.7 مليون شخص بحاجة للمساعدة",
    },
    source: { en: "OCHA HNRP 2026", ar: "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية (OCHA) 2026" },
    citation: "[26]",
    evidence: "VERIFIED",
  },
  {
    id: "currency",
    value: { en: "~48%", ar: "~48%" },
    label: {
      en: "Fall of the Sudanese pound (Dec 2025 to Jul 2026); inflation 51.3% y/y at end-June 2026",
      ar: "تراجع قيمة الجنيه السوداني (ديسمبر 2025 إلى يوليو 2026)؛ وبلوغ التضخم السنوي 51.3% بنهاية يونيو 2026",
    },
    source: { en: "World Bank MPO Oct 2026", ar: "تقرير آفاق الاقتصاد الكلي والفقر للبنك الدولي – أكتوبر 2026" },
    citation: "[20]",
    evidence: "VERIFIED",
  },
  {
    id: "khartoum",
    value: { en: "Jan 2026", ar: "يناير 2026" },
    label: {
      en: "Government formally returned to Khartoum; ministries, banks and UN agencies re-establishing",
      ar: "عودة الحكومة رسمياً إلى الخرطوم؛ والوزارات والمصارف ووكالات الأمم المتحدة تعيد تأسيس مقراتها",
    },
    source: { en: "Sudan Tribune, SUNA", ar: "سودان تريبيون، وكالة السودان للأنباء (سونا)" },
    citation: "[48]",
    evidence: "VERIFIED",
  },
];

export const fiveFindings = [
  {
    num: "01",
    title: {
      en: "The addressable market is the SAF-held east, north and centre, now including Khartoum again.",
      ar: "السوق القابل للخدمة يتركز في الشرق والشمال والوسط الخاضع لسيطرة القوات المسلحة، ويشمل الخرطوم مجدداً.",
    },
    detail: {
      en: "Port Sudan, Kassala, Gedaref, Atbara, Dongola, Kosti, Damazine and Khartoum have working networks; Darfur and most of Kordofan do not and remain out of scope.",
      ar: "تتوفر شبكات عاملة في بورتسودان وكسلا والقضارف وعطبرة ودنقلا وكوستي والدمازين والخرطوم؛ بينما تخرج دارفور ومعظم كردفان عن النطاق حالياً لغياب الشبكات والقيود الأمنية.",
    },
    evidence: "VERIFIED" as EvidenceClass,
    citation: "[35,36]",
  },
  {
    num: "02",
    title: {
      en: "Alternatives to licensed operators are being squeezed in the same quarter.",
      ar: "البدائل غير المرخصة تواجه تضييقاً متزامناً في الربع نفسه.",
    },
    detail: {
      en: "Starlink is unlicensed and its humanitarian grace period ends in November 2026, Thuraya was terminated in February, and the humanitarian telecom cluster has no 2026 funding and moved to cost-sharing. Organisations now have to buy their own licensed connectivity.",
      ar: "خدمة Starlink غير مرخصة وتنتهي مهلة استخدامها الإنساني في نوفمبر 2026، كما توقفت خدمات الثريا في فبراير، وانتقل قطاع الاتصالات الإنساني إلى نموذج تشارك التكلفة لغياب تمويل 2026. بات على المؤسسات شراء اتصالات مرخصة من ميزانياتها الخاصة.",
    },
    evidence: "VERIFIED" as EvidenceClass,
    citation: "[36,33]",
  },
  {
    num: "03",
    title: {
      en: "Zain already has most of what the market needs—plus two fresh reference wins.",
      ar: "تمتلك زين بالفعل معظم ما يحتاجه السوق، مدعوماً بعقدين مرجعيين حديثين.",
    },
    detail: {
      en: "From APN and Bulk SMS to IoT, Fleet, Cloud and the Bede wallet with Bede Corporate disbursement. Zain also won reference deals with the Ministry of Finance (Eisali SMS, Oct 2026) and Sudan Customs (IoT cargo supervision, Jan 2026).",
      ar: "من دوائر APN والرسائل النصية المؤسسية إلى إنترنت الأشياء وإدارة الأساطيل والسحابة ومحفظة Bede لمدفوعات المؤسسات. كما فازت زين بعقدين مرجعيين مع وزارة المالية (نظام إيصالي، أكتوبر 2026) وقوات الجمارك (مراقبة الشحنات عبر IoT، يناير 2026).",
    },
    evidence: "VERIFIED" as EvidenceClass,
    citation: "[1,12,13,14]",
  },
  {
    num: "04",
    title: {
      en: "Portfolio gaps against Sudani and Zain's Gulf peers can be closed through partners.",
      ar: "الفجوات في المحفظة مقارنةً بـ «سوداني» وشركات زين في الخليج يمكن سدّها عبر الشركاء دون بناء شبكة جديدة.",
    },
    detail: {
      en: "The gaps are fixed fibre, satellite (VSAT), managed security and data-centre co-location, where Sudani markets offers and Zain Sudan lists none. Dual-path APN, a TPRA-licensed VSAT partner and published internal products close this fast.",
      ar: "تتمثل الفجوات في الألياف البصرية الثابتة، والأقمار الصناعية (VSAT)، والأمن السيبراني المُدار، واستضافة مراكز البيانات حيث تسوّق «سوداني» عروضاً مباشرة. ويمكن سد هذه الفجوات سريعاً عبر مسارات APN المزدوجة وشريك VSAT مرخص من TPRA.",
    },
    evidence: "INFERENCE" as EvidenceClass,
    citation: "[17,1]",
  },
  {
    num: "05",
    title: {
      en: "The main constraints are commercial and operational, not customer demand.",
      ar: "القيود الأساسية تجارية وتشغيلية وليست في حجم الطلب.",
    },
    detail: {
      en: "A depreciating currency with multiple exchange rates, network outages and state-ordered exam shutdowns, and targeted international sanctions require indexed pricing, offline-tolerant design and strict counterparty screening.",
      ar: "تراجع العملة وتعدد أسعار الصرف، وانقطاعات الشبكة وحجب الإنترنت أثناء الامتحانات، والعقوبات الدولية الموجهة، كلها تتطلب تسعيراً مرجعياً، وتصميماً يعمل دون اتصال، وفحصاً دقيقاً للأطراف المقابلة.",
    },
    evidence: "VERIFIED" as EvidenceClass,
    citation: "[23,40,64]",
  },
];

export const currencyRates = [
  { label: { en: "Pre-war (2023)", ar: "قبل الحرب (2023)" }, rate: 600, source: "Reuters, 22 Sep 2026", parallel: false },
  { label: { en: "Dec 2025", ar: "ديسمبر 2025" }, rate: 2400, source: "Zain report summary [11]", parallel: false },
  { label: { en: "Mar 2026", ar: "مارس 2026" }, rate: 3100, source: "Zain report summary [11]", parallel: false },
  { label: { en: "Sep 2026 (Bank of Khartoum)", ar: "سبتمبر 2026 (بنك الخرطوم)" }, rate: 4200, source: "Reuters, 22 Sep 2026 [23]", parallel: false },
  { label: { en: "Oct 2026 (Customs dollar)", ar: "أكتوبر 2026 (الدولار الجمركي)" }, rate: 5600, source: "Reuters / CNBC Africa [24]", parallel: false },
  { label: { en: "Sep 2026 (Parallel market)", ar: "سبتمبر 2026 (السوق الموازي)" }, rate: 7500, source: "Reuters, 22 Sep 2026 [23]", parallel: true },
  { label: { en: "Oct 2026 (Parallel market)", ar: "أكتوبر 2026 (السوق الموازي)" }, rate: 10000, source: "Reuters / CNBC Africa [24]", parallel: true },
];

export const exports2025 = [
  { product: { en: "Gold (official exports)", ar: "الذهب (الصادرات الرسمية)" }, valueUsdM: 1536, volume: "14.7 t" },
  { product: { en: "Livestock", ar: "الثروة الحيوانية" }, valueUsdM: 466.3, volume: "" },
  { product: { en: "Sesame", ar: "السمسم" }, valueUsdM: 333.7, volume: "288,941 t" },
  { product: { en: "Gum arabic", ar: "الصمغ العربي" }, valueUsdM: 78.2, volume: "62,514 t" },
  { product: { en: "Cotton", ar: "القطن" }, valueUsdM: 64.1, volume: "" },
  { product: { en: "Melon seeds", ar: "حب البطيخ (التسالي)" }, valueUsdM: 59.2, volume: "" },
  { product: { en: "Fodder", ar: "الأعلاف" }, valueUsdM: 35.2, volume: "" },
];

export const builtUnpublishedProducts = [
  {
    name: "UCaaS (Cisco-based)",
    what: { en: "Unified communications as a service", ar: "الاتصالات الموحدة كخدمة (مبنية على Cisco)" },
    fit: { en: "Ministries and banks re-establishing offices in Khartoum", ar: "الوزارات والمصارف التي تعيد تأسيس مكاتبها في الخرطوم" },
  },
  {
    name: "Push-to-Talk",
    what: { en: "Group voice over the mobile network", ar: "الاتصال الصوتي الجماعي الفوري عبر شبكة الجوال" },
    fit: { en: "Logistics, NGO field teams, mining, construction", ar: "اللوجستيات، الفرق الميدانية للمنظمات، التعدين، المقاولات" },
  },
  {
    name: "VSaaS",
    what: { en: "Video surveillance as a service", ar: "المراقبة المرئية السحابية كخدمة" },
    fit: { en: "Warehouses, bank branches, compounds", ar: "المستودعات، فروع المصارف، المجمعات والمقرات" },
  },
  {
    name: "Zdrop",
    what: { en: "Backup and disaster recovery", ar: "النسخ الاحتياطي والتعافي من الكوارث" },
    fit: { en: "Any organisation that lost data in 2023–2024; banks, government", ar: "أي مؤسسة فقدت بياناتها خلال 2023–2024؛ المصارف والجهات الحكومية" },
  },
  {
    name: "EDU-PRO / LMS-PRO, Zees",
    what: { en: "Education and learning-management systems", ar: "أنظمة إدارة التعليم والتعلم الإلكتروني" },
    fit: { en: "Universities returning to Khartoum with faculty abroad", ar: "الجامعات العائدة للخرطوم مع وجود أعضاء هيئة التدريس بالخارج" },
  },
  {
    name: "Smart Agriculture (Hagool)",
    what: { en: "Agriculture advisory and IoT solution", ar: "حلول الزراعة الذكية والإرشاد («حقول»)" },
    fit: { en: "Gedaref, Kassala and River Nile producers and cooperatives", ar: "المنتجون والجمعيات التعاونية في القضارف وكسلا ونهر النيل" },
  },
  {
    name: "Digital Ads & Call Signature",
    what: { en: "Targeted digital campaigns; branded caller identity", ar: "الإعلانات الرقمية الموجهة؛ تعريف هوية المتصل للمؤسسات" },
    fit: { en: "Retail, banks, SMEs", ar: "قطاع التجزئة، المصارف، الشركات الصغيرة والمتوسطة" },
  },
];

export const gulfBenchmarks = [
  {
    capability: { en: "Dedicated internet access (DIA)", ar: "إنترنت مخصص للمؤسسات (DIA)" },
    sudan: { en: "Not listed", ar: "غير مدرج" },
    ksa: "DIA",
    kuwait: "—",
    bahrain: "Dedicated Internet",
    exposed: true,
  },
  {
    capability: { en: "IP-VPN / branch interconnect", ar: "ربط الفروع والشبكات الخاصة (IP-VPN)" },
    sudan: { en: "APN only", ar: "APN فقط" },
    ksa: "IP-VPN",
    kuwait: "—",
    bahrain: "Local / global connectivity",
    exposed: true,
  },
  {
    capability: { en: "Fixed wireless / 5G broadband", ar: "البرودباند اللاسلكي الثابت / 5G" },
    sudan: { en: "4G data cards & routers", ar: "شرائح وراوترات بيانات 4G" },
    ksa: "Zain AirFiber",
    kuwait: "5G / wireless fixed",
    bahrain: "Wireless broadband",
    exposed: false,
  },
  {
    capability: { en: "SIP trunk / fixed voice / PABX", ar: "بدالات الصوت والربط الهاتفي (SIP / PABX)" },
    sudan: { en: "Not listed", ar: "غير مدرج" },
    ksa: "SIP trunk; SBCaaS",
    kuwait: "HCS",
    bahrain: "Landline & PABX",
    exposed: true,
  },
  {
    capability: { en: "UCaaS / collaboration", ar: "الاتصالات الموحدة والتعاون (UCaaS)" },
    sudan: { en: "Built, unpublished", ar: "مجهز داخلياً، غير منشور" },
    ksa: "Video conferencing",
    kuwait: "Teams, WebEx, M365",
    bahrain: "UCaaS",
    exposed: false,
  },
  {
    capability: { en: "SD-WAN / managed router", ar: "شبكات SD-WAN والراوترات المُدارة" },
    sudan: { en: "Not listed", ar: "غير مدرج" },
    ksa: "SD-WAN; managed router",
    kuwait: "SD-WAN bundles",
    bahrain: "SD-WAN (Fortinet)",
    exposed: true,
  },
  {
    capability: { en: "Managed security (SOC / FWaaS)", ar: "الأمن السيبراني المُدار (SOC / Anti-DDoS)" },
    sudan: { en: "Not listed", ar: "غير مدرج" },
    ksa: "Anti-DDoS, FWaaS, SASE, SOC",
    kuwait: "MDR / SOCaaS",
    bahrain: "Managed security",
    exposed: true,
  },
  {
    capability: { en: "Data centre / co-location", ar: "مراكز البيانات والاستضافة المشتركة" },
    sudan: { en: "Not listed", ar: "غير مدرج" },
    ksa: "—",
    kuwait: "Zain Business Data Center",
    bahrain: "Co-location",
    exposed: true,
  },
  {
    capability: { en: "Business payment collection", ar: "تحصيل وصرف مدفوعات المؤسسات" },
    sudan: { en: "Bede (consumer-framed on B2B site)", ar: "Bede (معروضة كمحفظة أفراد في موقع الأعمال)" },
    ksa: "Zain Collect",
    kuwait: "—",
    bahrain: "—",
    exposed: false,
  },
];

export const topBundles: BundleItem[] = [
  {
    id: "connected-aid",
    number: "01",
    name: { en: "Connected Aid", ar: "حزمة الإغاثة المتصلة (Connected Aid)" },
    target: { en: "NGOs, UN agencies & humanitarian hubs", ar: "المنظمات غير الحكومية ووكالات الأمم المتحدة والمراكز الإنسانية" },
    productsInside: [
      { en: "Bede Corporate bulk disbursement & payroll", ar: "صرف المساعدات النقدية والرواتب بالجملة عبر Bede Corporate" },
      { en: "Bulk SMS, Short Code, IVR & Auto-Dialer accountability lines", ar: "الرسائل النصية الجماعية والرقم المختصر والرد الآلي (IVR) للتواصل مع المستفيدين" },
      { en: "Staff SIM pools (Zain Hybrid / Business Flex)", ar: "باقات شرائح الموظفين (Zain Hybrid وBusiness Flex)" },
      { en: "APN & 4G data-card failover for compounds; Fleet VTS", ar: "ربط APN وشرائح بيانات احتياطية للمقرات؛ وتتبع المركبات الميدانية" },
    ],
    whyItWins: {
      en: "ETC cluster funding shift, Thuraya exit and the November 2026 Starlink deadline land in the same quarter. The licensed corporate wallet already exists.",
      ar: "توقف تمويل الاتصالات المجاني، وخروج الثريا، وانتهاء مهلة Starlink في نوفمبر 2026 كلها تجتمع في ربع واحد، بينما محفظة Bede المؤسسية جاهزة ومرخصة.",
    },
    francoPintoLayer: {
      en: "Bilingual reconciliation & donor audit portal for Bede payouts, SMS/USSD beneficiary registration fallback, and offline-tolerant field sync.",
      ar: "بوابة مطابقة وتقارير تدقيق للمانحين باللغتين العربية والإنجليزية، وتسجيل المستفيدين عبر SMS/USSD، ومزامنة البيانات الميدانية دون اتصال.",
    },
    evidence: "VERIFIED",
    citations: "[12,33,36]",
  },
  {
    id: "transaction-messaging",
    number: "02",
    name: {
      en: "Transaction Messaging & Terminal Connectivity",
      ar: "رسائل المعاملات المصرفية وربط أجهزة الصراف ونقاط البيع",
    },
    target: { en: "Banks, microfinance institutions & licensed wallets", ar: "المصارف ومؤسسات التمويل الأصغر والمحافظ المرخصة" },
    productsInside: [
      { en: "High-throughput SMPP OTP & transaction alerts", ar: "ربط SMPP عالي الاعتمادية لرسائل التحقق (OTP) وإشعارات المعاملات" },
      { en: "Dual-path private APN for POS estates and ATMs to bank data centres", ar: "ربط APN خاص مزدوج المسار لأجهزة الصراف الآلي ونقاط البيع" },
      { en: "IVR & CCaaS for returning customer load; Bede payouts & collections", ar: "أنظمة الرد الآلي ومراكز الاتصال؛ والتحصيل والصرف عبر Bede" },
    ],
    whyItWins: {
      en: "Banks are reconnecting to the restored national payment switch (Aug 2026) while cash scarcity drives massive mobile app volume.",
      ar: "تعيد المصارف ربط أنظمتها بالمقسم القومي للمدفوعات (المُعاد تشغيله في أغسطس 2026) وسط شح السيولة النقدية والاعتماد الكثيف على التطبيقات.",
    },
    francoPintoLayer: {
      en: "SMPP & core-banking API middleware, automatic delivery-receipt reconciliation dashboards, and dual-SIM/APN failover architecture.",
      ar: "طبقة ربط SMPP وواجهات الأنظمة المصرفية الأساسية، ولوحات مطابقة إشعارات التسليم اللحظية، وتصميم المسار الاحتياطي التلقائي لأجهزة الصراف.",
    },
    evidence: "VERIFIED",
    citations: "[3,12,52]",
  },
  {
    id: "khartoum-return",
    number: "03",
    name: { en: "Khartoum Return", ar: "حزمة العودة إلى الخرطوم (Khartoum Return)" },
    target: { en: "Ministries, state agencies, returning bank HQ & diplomatic missions", ar: "الوزارات والهيئات الحكومية والمقرات الرئيسية للمصارف والبعثات الدبلوماسية" },
    productsInside: [
      { en: "Eisali-style citizen notification & e-collection short codes", ar: "أرقام مختصرة للإشعارات والتحصيل الإلكتروني على غرار نموذج «إيصالي»" },
      { en: "Rapid temporary-office kit: 4G routers, data cards & private APN", ar: "تجهيز سريع للمقرات المؤقتة: راوترات 4G وشرائح بيانات ودوائر APN" },
      { en: "ZainCloud, CCaaS, plus UCaaS & Zdrop backup once published", ar: "سحابة زين ومراكز الاتصال، مع خدمات UCaaS وZdrop للنسخ الاحتياطي فور نشرها" },
    ],
    whyItWins: {
      en: "Replicates Zain's October 2026 Ministry of Finance Eisali reference deal across agencies returning to temporary premises with no fixed lines.",
      ar: "تستنسخ نجاح عقد زين المرجعي مع وزارة المالية (نظام إيصالي – أكتوبر 2026) للجهات العائدة إلى مقرات مؤقتة تفتقر للخطوط الثابتة.",
    },
    francoPintoLayer: {
      en: "Rapid e-service citizen portals with SMS/IVR hooks and automated ledger reconciliation (delivered behind Zain's government-relations team).",
      ar: "بوابات خدمات إلكترونية سريعة الإطلاق مرتبطة بالرسائل والرد الآلي مع مطابقة آلية لدفاتر التحصيل (بدعم خلفي لفريق العلاقات الحكومية بزين).",
    },
    evidence: "VERIFIED",
    citations: "[13,48,49]",
  },
  {
    id: "export-corridor",
    number: "04",
    name: { en: "Export Corridor", ar: "حزمة ممر الصادرات واللوجستيات (Export Corridor)" },
    target: { en: "Trucking fleets, freight forwarders, exporters & Port Sudan operators", ar: "أساطيل النقل البري ووكلاء الشحن والمصدّرون ومشغلو العمليات في بورتسودان" },
    productsInside: [
      { en: "Fleet Management & VTS data bundles", ar: "إدارة الأساطيل وباقات بيانات تتبع المركبات (VTS)" },
      { en: "IoT & private APN for yards and warehouses; VSaaS once published", ar: "إنترنت الأشياء ودوائر APN للساحات والمستودعات" },
      { en: "Automated Bulk SMS cargo notices; Bede driver & fuel payouts", ar: "إشعارات الشحن الآلية عبر الرسائل النصية؛ وصرف مستحقات السائقين والوقود عبر Bede" },
    ],
    whyItWins: {
      en: "Port Sudan carries the country's trade to Khartoum and the east, and Zain's Jan 2026 Customs/Jointech IoT agreement puts Zain inside the cargo flow.",
      ar: "يمر معظم التجارة الخارجية عبر بورتسودان باتجاه الخرطوم والشرق، كما أن اتفاقية زين والجمارك مع Jointech (يناير 2026) تضع زين في قلب حركة الشحن.",
    },
    francoPintoLayer: {
      en: "Store-and-forward telemetry for coverage dead zones, transport-management integration, and fuel/driver analytics.",
      ar: "أجهزة تتبع بخاصية التخزين والإرسال التلقائي لتجاوز مناطق انقطاع التغطية، والربط بأنظمة إدارة النقل، وتحليلات استهلاك الوقود.",
    },
    evidence: "VERIFIED",
    citations: "[14,25,36]",
  },
  {
    id: "business-in-a-box",
    number: "05",
    name: { en: "Business in a Box", ar: "أعمالك في باقة واحدة (Business in a Box)" },
    target: { en: "SMEs, relocated merchants, clinics & guesthouses", ar: "الشركات الصغيرة والمتوسطة والتجار المنتقلون والعيادات وبيوت الضيافة" },
    productsInside: [
      { en: "Business Flex or Hybrid SIMs for predictable staff connectivity", ar: "شرائح Business Flex أو Hybrid لاتصالات الموظفين بتكلفة واضحة" },
      { en: "Bede merchant QR & POS acceptance", ar: "قبول المدفوعات الرقمية للتجار عبر رمز QR ونقاط بيع Bede" },
      { en: "Bulk SMS & targeted Advertising Solutions; Blue Enterprise ERP", ar: "الرسائل التسويقية والحلول الإعلانية؛ ونظام Blue Enterprise ERP" },
    ],
    whyItWins: {
      en: "Sold as a simple volume play through Zain's Authorized Sales Partners—combining SIM, cashless payments and customer reach in one account.",
      ar: "تُباع كحزمة مبسطة واسعة الانتشار عبر وكلاء المبيعات المعتمدين لدى زين، وتجمع الاتصال والدفع الإلكتروني والوصول للعملاء في حساب واحد.",
    },
    francoPintoLayer: {
      en: "Lightweight mobile POS & stock app with SMS marketing connector, Arabic WhatsApp text front desk (calls restricted), and dealer onboarding kit.",
      ar: "تطبيق خفيف لنقاط البيع والمخزون مرتبط بحملات الرسائل النصية، ومكتب خدمة عملاء نصي آلي بالعربية، وحقيبة تدريب للوكلاء.",
    },
    evidence: "INFERENCE",
    citations: "[1,3,12]",
  },
  {
    id: "licensed-satellite",
    number: "+",
    name: { en: "Licensed Satellite Partnership", ar: "شراكة الأقمار الصناعية المرخصة (VSAT + SD-WAN)" },
    target: { en: "NGOs in deep field sites, licensed mining & remote infrastructure", ar: "المنظمات في المناطق النائية، وشركات التعدين المرخصة، والمواقع البعيدة" },
    productsInside: [
      { en: "TPRA-licensed partner VSAT sold under Zain enterprise account", ar: "خدمة أقمار صناعية (VSAT) عبر شريك مرخص من جهاز تنظيم الاتصالات تحت مظلة حساب زين" },
      { en: "Combined with SD-WAN over 4G for seamless terrestrial/satellite failover", ar: "مدمجة مع تقنية SD-WAN عبر شبكة 4G للتبديل التلقائي السلس بين الشبكة الأرضية والفضائية" },
    ],
    whyItWins: {
      en: "Closes Zain's largest portfolio gap against Sudani while giving humanitarian and enterprise buyers a legal, licensed alternative to Starlink.",
      ar: "تسد أكبر فجوة في محفظة زين أمام «سوداني»، وتمنح المنظمات والمؤسسات بديلاً قانونياً مرخصاً وموثوقاً عن أجهزة Starlink غير المرخصة.",
    },
    francoPintoLayer: {
      en: "Multi-link SD-WAN edge configuration, traffic shaping for low-bandwidth links, and unified uptime monitoring.",
      ar: "إعداد أجهزة SD-WAN متعددة المسارات، وإدارة أولويات حركة البيانات للروابط محدودة السعة، ولوحة مراقبة موحدة للاستمرارية.",
    },
    evidence: "VERIFIED",
    citations: "[17,37]",
  },
];
