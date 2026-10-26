import type { BilingualText, EvidenceClass } from "./b2b-data";

export const roadmapPhases = [
  {
    id: "phase-1",
    window: { en: "0 to 90 Days", ar: "من 0 إلى 90 يوماً" },
    theme: { en: "Prove it", ar: "إثبات النجاح" },
    sectors: {
      en: "NGOs / UN & Humanitarian; Banking & Fintech; SME bundle design",
      ar: "المنظمات والأمم المتحدة؛ المصارف والتقنية المالية؛ وتصميم حزمة الشركات الصغيرة",
    },
    gate: {
      en: "Partner agreement signed and at least one live pilot operating",
      ar: "توقيع اتفاقية الشراكة وتشغيل مشروع تجريبي حي واحد على الأقل",
    },
    actions: [
      {
        en: "Agree the partner framework, co-selling rules and per-sector engagement model.",
        ar: "الاتفاق على إطار الشراكة وقواعد البيع المشترك ونموذج العمل لكل قطاع.",
      },
      {
        en: "Complete joint sanctions, KYC and data-protection compliance reviews.",
        ar: "استكمال المراجعات المشتركة للامتثال للعقوبات وإجراءات اعرف عميلك (KYC) وحماية البيانات.",
      },
      {
        en: "Zain nominates one pilot customer per Tier-1 sector (one NGO/UN agency and one bank).",
        ar: "ترشيح زين لعميل تجريبي واحد في كل قطاع من الفئة الأولى (منظمة/وكالة أممية واحدة ومصرف واحد).",
      },
      {
        en: "Build the Connected Aid demo: Bede disbursement reconciliation portal with SMS confirmations and an IVR feedback line (Arabic & English, offline-tolerant).",
        ar: "بناء النموذج العملي لحزمة «الإغاثة المتصلة»: بوابة مطابقة مدفوعات Bede مع تأكيدات الرسائل وخط رد آلي للملاحظات (بالعربية والإنجليزية، يعمل دون اتصال).",
      },
      {
        en: "Engage agencies through ETC and Logistics Cluster forums ahead of the November 2026 Starlink deadline.",
        ar: "التواصل مع الوكالات عبر منتديات قطاع الاتصالات (ETC) ومجموعة اللوجستيات قبل الموعد النهائي لمهلة Starlink في نوفمبر 2026.",
      },
      {
        en: "Start a bank OTP SMPP and dual-path APN pilot.",
        ar: "بدء مشروع تجريبي لربط رسائل التحقق (OTP SMPP) ومسار APN المزدوج مع أحد المصارف.",
      },
    ],
  },
  {
    id: "phase-2",
    window: { en: "3 to 6 Months", ar: "من 3 إلى 6 أشهر" },
    theme: { en: "Repeat it", ar: "تكرار النموذج" },
    sectors: {
      en: "Government (Zain-led); Logistics & Ports; Retail & SMEs",
      ar: "القطاع الحكومي (بقيادة زين)؛ اللوجستيات والموانئ؛ التجزئة والشركات الصغيرة",
    },
    gate: {
      en: "Repeat paying customers in at least two sectors",
      ar: "تحقيق عملاء متكررين في قطاعين على الأقل",
    },
    actions: [
      {
        en: "Turn Tier-1 pilots into repeatable packages with standard technical onboarding.",
        ar: "تحويل المشاريع التجريبية الأولى إلى باقات قياسية قابلة للتكرار السريع.",
      },
      {
        en: "Replicate the Ministry of Finance Eisali template for a second state agency, led by Zain.",
        ar: "تكرار نموذج «إيصالي» الخاص بوزارة المالية مع جهة حكومية ثانية بقيادة زين.",
      },
      {
        en: "Launch 'Business in a Box' through Zain's Authorized Sales Partners.",
        ar: "إطلاق حزمة «أعمالك في باقة واحدة» عبر وكلاء المبيعات المعتمدين لدى زين.",
      },
      {
        en: "Start the Export Corridor fleet & automated cargo SMS pilot in Port Sudan.",
        ar: "بدء المشروع التجريبي لتتبع أساطيل «ممر الصادرات» وإشعارات الشحن الآلية في بورتسودان.",
      },
      {
        en: "Target 3 to 5 paying enterprise customers (an operational target, not a forecast).",
        ar: "استهداف 3 إلى 5 عملاء مؤسسات مشتركين فعلياً (كمستهدف تشغيلي مرحلي).",
      },
    ],
  },
  {
    id: "phase-3",
    window: { en: "6 to 12 Months", ar: "من 6 إلى 12 شهراً" },
    theme: { en: "Scale it", ar: "التوسع والنمو" },
    sectors: {
      en: "Health; Agriculture; Mining (gated); Energy & Solar; Construction",
      ar: "الصحة؛ الزراعة؛ التعدين (المشروط)؛ الطاقة الشمسية؛ والمقاولات",
    },
    gate: {
      en: "Partner packages contributing measurable incremental traffic & Bede volume",
      ar: "مساهمة باقات الشراكة بحجم ملموس وقابل للقياس في حركة الرسائل ومعاملات Bede",
    },
    actions: [
      {
        en: "Roll out health reminders, cold-chain IoT and agriculture advisory through NGO/FAO partners.",
        ar: "توسيع حلول التذكير الصحي ومراقبة سلسلة التبريد والإرشاد الزراعي عبر شركاء المنظمات والفاو.",
      },
      {
        en: "Bring a TPRA-licensed VSAT partner and SD-WAN over 4G into the market.",
        ar: "إدخال شريك أقمار صناعية (VSAT) مرخص من TPRA وخدمة SD-WAN عبر 4G إلى السوق.",
      },
      {
        en: "Publish Zain's written internal products (UCaaS, Push-to-Talk, VSaaS, Zdrop, EDU-PRO, Hagool).",
        ar: "نشر وإطلاق منتجات زين المجهزة داخلياً (UCaaS، Push-to-Talk، VSaaS، Zdrop، التعليم، و«حقول»).",
      },
      {
        en: "Engage licensed mining and energy accounts strictly under Zain-led compliance clearance.",
        ar: "التعامل مع حسابات التعدين والطاقة المرخصة حصرياً بعد اجتياز الفحص القانوني بقيادة زين.",
      },
      {
        en: "Have the Khartoum reconstruction site kit ready as donor funding opens.",
        ar: "تجهيز حزمة مواقع إعادة الإعمار لتكون جاهزة فور تدفق التمويل الدولي.",
      },
    ],
  },
];

export const partnershipDivision = {
  francoPinto: [
    {
      title: { en: "Integration & API Middleware", ar: "التكامل والربط البرمجي (Middleware)" },
      detail: {
        en: "Connecting Bede, SMPP and USSD APIs directly to client ERPs, core banking switches and NGO beneficiary databases.",
        ar: "ربط واجهات Bede وSMPP وUSSD مباشرة بأنظمة تخطيط الموارد (ERP) والأنظمة المصرفية الأساسية وقواعد بيانات المستفيدين بالمنظمات.",
      },
    },
    {
      title: { en: "Reconciliation & Donor Portals", ar: "بوابات المطابقة المالية وتقارير المانحين" },
      detail: {
        en: "Bilingual (Arabic/English) audit portals for corporate disbursements, fee collections and real-time delivery receipts.",
        ar: "بوابات تدقيق ومطابقة ثنائية اللغة (عربي/إنجليزي) لصرف المساعدات وتحصيل الرسوم وإشعارات التسليم اللحظية.",
      },
    },
    {
      title: { en: "Automated Messaging & IVR Flows", ar: "أتمتة الرسائل ومسارات الرد الآلي التفاعلي" },
      detail: {
        en: "Arabic and English messaging front desks, citizen notification templates, and interactive IVR menus.",
        ar: "مكاتب خدمة عملاء نصية آلية بالعربية والإنجليزية، وقوالب إشعارات المواطنين، وقوائم الرد الآلي التفاعلي.",
      },
    },
    {
      title: { en: "Fleet & IoT Analytics Dashboards", ar: "لوحات تحليلات الأساطيل وإنترنت الأشياء (IoT)" },
      detail: {
        en: "Custom telemetry views, geofencing alerts, cold-chain logs and fuel/solar monitoring.",
        ar: "لوحات متابعة القياسات عن بُعد، وتنبيهات السياج الجغرافي، وسجلات سلسلة التبريد ومراقبة الوقود والطاقة الشمسية.",
      },
    },
    {
      title: { en: "Resilience & Offline-First Engineering", ar: "هندسة الصمود والعمل دون اتصال" },
      detail: {
        en: "Store-and-forward sync, automatic SMS/USSD fallback when data drops, and dual-path APN failover architectures.",
        ar: "مزامنة البيانات بنظام التخزين والإرسال، والتحول التلقائي للرسائل وUSSD عند انقطاع الإنترنت، وتصميم مسارات APN المزدوجة.",
      },
    },
    {
      title: { en: "Solution Packaging & Technical Pre-Sales", ar: "تغليف الحلول والدعم الفني لما قبل البيع" },
      detail: {
        en: "Live technical demos, workshop architecture support, and dealer training kits.",
        ar: "بناء النماذج الحية، ودعم المعمارية الفنية في ورش عمل العملاء، وإعداد حقائب تدريب الوكلاء.",
      },
    },
  ],
  zainStays: [
    {
      title: { en: "Network, Spectrum & Licences", ar: "الشبكة والطيف الترددي والتراخيص" },
      detail: {
        en: "All cellular infrastructure, APN routing, SMPP gateways and TPRA regulatory licences remain 100% with Zain.",
        ar: "تظل كامل البنية التحتية للشبكة ومسارات APN وبوابات الرسائل وتراخيص جهاز تنظيم الاتصالات ملكاً خالصاً لزين.",
      },
    },
    {
      title: { en: "The Wallet Core & Regulated Finance", ar: "نواة محفظة Bede والعمليات المالية المنظمة" },
      detail: {
        en: "All CBOS-regulated e-money issuance, settlement and custody stay strictly inside Bede and Zain.",
        ar: "تبقى كافة عمليات إصدار النقود الإلكترونية والتسوية الخاضعة لرقابة بنك السودان المركزي داخل منظومة Bede وزين حصرياً.",
      },
    },
    {
      title: { en: "Customer Relationship, Contract & Brand", ar: "العلاقة مع العميل والعقد والعلامة التجارية" },
      detail: {
        en: "Zain owns the enterprise customer account, leads commercial contracting, and fronts the brand.",
        ar: "تمتلك زين حساب العميل المؤسسي، وتقود التعاقد التجاري، وتتصدر الواجهة بعلامتها التجارية.",
      },
    },
    {
      title: { en: "Government Relations", ar: "العلاقات الحكومية والقطاع العام" },
      detail: {
        en: "Led by Zain alone across federal ministries and state administrations.",
        ar: "تقودها زين منفردة مع كافة الوزارات الاتحادية والهيئات الحكومية والولائية.",
      },
    },
    {
      title: { en: "End-Customer Pricing & Tariffs", ar: "التسعير والتعرفات للعميل النهائي" },
      detail: {
        en: "Zain confirms and controls all product specifications, tariffs and bundle prices in the market.",
        ar: "تعتمد زين وتتحكم في كافة مواصفات المنتجات والتعرفات وأسعار الباقات المطروحة في السوق.",
      },
    },
  ],
};

export const commercialStructures = [
  {
    name: { en: "Setup & Integration", ar: "رسوم التأسيس والتكامل" },
    how: {
      en: "A milestone-based fee per enterprise client for initial API, SMPP or ERP integration work.",
      ar: "رسوم محددة لكل عميل مؤسسي مقابل أعمال الربط البرمجي والتكامل الأولي، تُسدد حسب مراحل الإنجاز.",
    },
  },
  {
    name: { en: "White-Label Software Licence", ar: "ترخيص البرمجيات بالعلامة البيضاء (تحت شعار زين)" },
    how: {
      en: "Franco Pinto portals and software modules sold under the Zain Business brand, per client per period.",
      ar: "تقديم بوابات وبرمجيات Franco Pinto تحت العلامة التجارية لـ «زين أعمال» باشتراك دوري لكل عميل.",
    },
  },
  {
    name: { en: "Managed Service Retainer", ar: "عقد الخدمات المُدارة والدعم الفني" },
    how: {
      en: "Ongoing technical support, monitoring and outage failover runbooks on a predictable retainer.",
      ar: "الدعم الفني المستمر والمراقبة وتشغيل خطط الطوارئ عند الانقطاعات مقابل اشتراك شهري ثابت.",
    },
  },
  {
    name: { en: "Performance Traffic Share", ar: "المشاركة في عوائد الحركة الإضافية" },
    how: {
      en: "An agreed share of incremental Zain traffic (SMS volume, Bede transactions) generated by partner solutions, with transparent attribution.",
      ar: "حصة متفق عليها من الحركة الإضافية الجديدة التي تولدها الحلول المشتركة (حجم الرسائل ومعاملات Bede) وفق قاعدة احتساب واضحة.",
    },
  },
];

export const risksAndSafeguards = [
  {
    risk: { en: "Security & Conflict Geography", ar: "الأمن والنطاق الجغرافي للنزاع" },
    evidenceText: {
      en: "Darfur under RSF control since Oct 2025; Kordofan is the conflict's epicentre; Blue Nile fighting intensified from Aug 2026 [69].",
      ar: "دارفور خارج سيطرة الحكومة منذ أكتوبر 2025؛ وكردفان مركز العمليات؛ مع تصاعد المواجهات في النيل الأزرق منذ أغسطس 2026 [69].",
    },
    safeguard: {
      en: "Serve SAF-held safe areas only; Franco Pinto delivers remotely with zero staff travel; host all cloud data outside conflict zones.",
      ar: "خدمة المناطق الآمنة الخاضعة لسيطرة الدولة فقط؛ تقديم Franco Pinto للدعم والتطوير عن بُعد دون سفر ميداني؛ واستضافة البيانات خارج مناطق النزاع.",
    },
    evidence: "VERIFIED" as EvidenceClass,
  },
  {
    risk: { en: "Network Outages & Exam Shutdowns", ar: "انقطاعات الشبكة وحجب الإنترنت أثناء الامتحانات" },
    evidenceText: {
      en: "46 shutdowns since 2019 (10 in the last 12 months); 3.5h daily exam shutdowns in Apr 2026 [40]; 6.5h national blackout on 22 Oct 2026 [42].",
      ar: "46 حالة حجب منذ 2019 (منها 10 خلال آخر 12 شهراً)؛ حجب يومي لمدة 3.5 ساعة أثناء امتحانات أبريل 2026 [40]؛ وانقطاع وطني لـ 6.5 ساعة في 22 أكتوبر 2026 [42].",
    },
    safeguard: {
      en: "Offline-tolerant engineering (SMS/USSD fallback, store-and-forward sync); no uptime SLAs tied to raw Sudanese links; explicit force-majeure carve-outs.",
      ar: "تصميم يتحمل الانقطاع (مسار بديل عبر SMS/USSD وتخزين وإرسال تلقائي)؛ وعدم ربط اتفاقيات مستوى الخدمة (SLA) باستقرار الشبكة العامة مع استثناء حالات الحجب الرسمي.",
    },
    evidence: "VERIFIED" as EvidenceClass,
  },
  {
    risk: { en: "Currency Collapse & Multi-Rate Distortion", ar: "تدهور العملة وتعدد أسعار الصرف" },
    evidenceText: {
      en: "Bank rate ~4,200, customs >5,600, parallel market ~10,000 SDG per US$ in Oct 2026 [23,24]. ~48% depreciation Dec 2025–Jul 2026 [20].",
      ar: "تباين الأسعار في أكتوبر 2026: المصارف ~4,200، الدولار الجمركي >5,600، والسوق الموازي ~10,000 جنيه للدولار [23,24].",
    },
    safeguard: {
      en: "Indexed or hard-currency reference pricing where regulations allow; short billing cycles; prepaid setup work; no SDG-denominated partner fees.",
      ar: "تسعير مرجعي مربوط بالعملة الصعبة حيثما تسمح الضوابط؛ دورات فوترة قصيرة؛ دفع مسبق لأعمال التأسيس؛ وعدم تسعير خدمات الشريك بالجنيه السوداني.",
    },
    evidence: "VERIFIED" as EvidenceClass,
  },
  {
    risk: { en: "Targeted International Sanctions", ar: "العقوبات الدولية الموجهة" },
    evidenceText: {
      en: "No country-wide embargo, but targeted US (E.O. 14098/13400 + 50% rule), Canadian, EU and UN 1591 regimes apply [64,65,66,67].",
      ar: "لا يوجد حظر شامل على البلاد، لكن تطبق أنظمة عقوبات موجهة من أمريكا وكندا والاتحاد الأوروبي والأمم المتحدة تشمل قاعدة الملكية بنسبة 50% [64,65,66,67].",
    },
    safeguard: {
      en: "Screen every customer, beneficial owner, bank and end-user against UN, US, Canadian, EU and UK lists before contract and at each payment; exclude defence, security, DIS/Giad-linked, gold-trading and RSF-area entities.",
      ar: "فحص كل عميل ومالك مستفيد ومصرف ومستخدم نهائي أمام قوائم الأمم المتحدة وأمريكا وكندا والاتحاد الأوروبي والمملكة المتحدة قبل التعاقد وعند كل دفعة؛ واستبعاد جهات الدفاع والأمن وتجارة الذهب.",
    },
    evidence: "VERIFIED" as EvidenceClass,
  },
  {
    risk: { en: "Cross-Border Settlement & Bank De-Risking", ar: "التحويلات الخارجية ومخاطر البنوك المراسلة" },
    evidenceText: {
      en: "Repatriating hard currency from inside Sudan is slow and uncertain; direct Sudan-based payers trigger international bank de-risking.",
      ar: "تحويل النقد الأجنبي من داخل السودان بطيء وغير مضمون؛ كما أن التحويل المباشر من حسابات داخل السودان يواجه قيود المخاطر لدى البنوك الدولية.",
    },
    safeguard: {
      en: "Contract and invoice through a Zain Group entity outside Sudan (e.g., Kuwait or Bahrain), paid from a named corporate account in EUR, AED or KWD.",
      ar: "التعاقد والفوترة عبر كيان تابع لمجموعة زين خارج السودان (مثل الكويت أو البحرين)، والسداد من حساب مصرفي باسم الشركة بعملة متفق عليها (مثل اليورو أو الدرهم الإماراتي أو الدينار الكويتي).",
    },
    evidence: "INFERENCE" as EvidenceClass,
  },
];

export const immediateNextSteps = [
  {
    step: 1,
    title: { en: "Leadership Workshop", ar: "ورشة عمل القيادة التنفيذية" },
    detail: {
      en: "Session with Zain Sudan Business leadership to confirm sector focus, Tier-1 priorities and account owners.",
      ar: "جلسة عمل مع قيادة «زين أعمال السودان» لاعتماد القطاعات ذات الأولوية وتحديد مسؤولي الحسابات.",
    },
    outcome: { en: "Agreed priorities & owners", ar: "اعتماد الأولويات ومسؤولي الملفات" },
  },
  {
    step: 2,
    title: { en: "Zain Product & API Briefing", ar: "الإحاطة الفنية للمنتجات وواجهات الربط" },
    detail: {
      en: "Confirm technical specifications, SLAs, SMPP/USSD/Bede API access and readiness of unpublished products.",
      ar: "تأكيد المواصفات الفنية واتفاقيات الخدمة وإتاحة واجهات SMPP وUSSD وBede وجاهزية المنتجات غير المنشورة.",
    },
    outcome: { en: "Bundles built on confirmed specs", ar: "حزم مبنية على مواصفات مؤكدة" },
  },
  {
    step: 3,
    title: { en: "Partner Commercial Framework", ar: "إطار الشراكة والنموذج التجاري" },
    detail: {
      en: "Agree engagement model (referral, resale or white-label delivery), co-selling rules and commercial terms.",
      ar: "الاتفاق على نموذج العمل وقواعد البيع المشترك والشروط التجارية.",
    },
    outcome: { en: "Signed partner framework", ar: "توقيع إطار الشراكة" },
  },
  {
    step: 4,
    title: { en: "Joint Compliance & Legal Review", ar: "المراجعة المشتركة للامتثال والشؤون القانونية" },
    detail: {
      en: "Confirm sanctions screening workflow, KYC, data-processing agreement and Zain Group offshore payment route.",
      ar: "اعتماد آلية فحص العقوبات وحماية البيانات ومسار التعاقد والسداد عبر مجموعة زين.",
    },
    outcome: { en: "Counsel sign-off", ar: "الاعتماد القانوني والرقابي" },
  },
  {
    step: 5,
    title: { en: "Tier-1 Pilot Nomination", ar: "ترشيح عملاء المشاريع التجريبية (الفئة الأولى)" },
    detail: {
      en: "Zain nominates one humanitarian agency (NGO/UN) and one commercial bank for immediate scoping.",
      ar: "ترشيح زين لمنظمة إنسانية أو وكالة أممية واحدة ومصرف تجاري واحد لتحديد النطاق التنفيذي.",
    },
    outcome: { en: "Two pilots scoped with KPIs", ar: "تحديد نطاق مشروعين تجريبيين بمؤشرات أداء" },
  },
  {
    step: 6,
    title: { en: "Connected Aid Live Demo", ar: "العرض الحي لحزمة «الإغاثة المتصلة»" },
    detail: {
      en: "Deliver the working Bede reconciliation + SMS/IVR demo ahead of the November 2026 Starlink deadline.",
      ar: "تقديم العرض الحي لبوابة مطابقة Bede مع الرسائل والرد الآلي قبل انتهاء مهلة Starlink في نوفمبر 2026.",
    },
    outcome: { en: "Live demonstration for agencies", ar: "عرض عملي جاهز أمام المنظمات" },
  },
];

export const questionsForZain: BilingualText[] = [
  {
    en: "Can Zain confirm its FY2025 and Q1 2026 figures and share the enterprise (B2B) revenue split for use in the final operational plan?",
    ar: "هل يمكن لزين تأكيد أرقام السنة المالية 2025 والربع الأول 2026 ومشاركة نسبة مساهمة قطاع الأعمال (B2B) لاعتمادها في الخطة النهائية؟",
  },
  {
    en: "Which written but unpublished products (UCaaS, Push-to-Talk, VSaaS, Zdrop, EDU-PRO, Hagool) are commercially ready to sell today?",
    ar: "أي من المنتجات المجهزة داخلياً وغير المنشورة (UCaaS، Push-to-Talk، VSaaS، Zdrop، EDU-PRO، «حقول») جاهز تجارياً للبيع اليوم؟",
  },
  {
    en: "Does ZainTECH or any Zain Group partner cover Sudan for SD-WAN, managed security, data-centre co-location or VSAT?",
    ar: "هل تغطي شركة ZainTECH أو أي شريك لمجموعة زين سوق السودان في خدمات SD-WAN أو الأمن السيبراني المُدار أو مراكز البيانات أو الأقمار الصناعية (VSAT)؟",
  },
  {
    en: "Are documented USSD and Bede Corporate APIs available to technical integration partners, and under which onboarding terms?",
    ar: "هل تتوفر واجهات برمجة تطبيقات (APIs) موثقة لخدمات USSD ومحفظة Bede Corporate لشركاء التكامل التقني، وما هي شروط الربط؟",
  },
  {
    en: "Which Zain Sudan team owns the humanitarian/UN accounts and the Emergency Telecommunications Cluster (ETC) relationship?",
    ar: "أي فريق داخل زين السودان يتولى إدارة حسابات المنظمات والأمم المتحدة والعلاقة مع قطاع الاتصالات في الطوارئ (ETC)؟",
  },
];
