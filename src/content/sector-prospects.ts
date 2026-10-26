import type { BilingualText } from "./b2b-data";

export interface ProspectClient {
  name: BilingualText;
  hub: BilingualText;
  dmTitle: BilingualText;
  painPoint: BilingualText;
  outreachPitch: BilingualText;
}

export const sectorProspects: Record<string, ProspectClient[]> = {
  ngos: [
    {
      name: {
        en: "World Food Programme (WFP) Sudan",
        ar: "برنامج الأغذية العالمي (WFP) — السودان",
      },
      hub: {
        en: "Port Sudan & Khartoum Hubs",
        ar: "مراكز بورتسودان والخرطوم",
      },
      dmTitle: {
        en: "Country Director / Head of Cash-Based Transfers (CBT) & Lead ICT Officer (ETC)",
        ar: "المدير القطري / رئيس التحويلات النقدية (CBT) ومسؤول تقنية المعلومات",
      },
      painPoint: {
        en: "Leads the Emergency Telecommunications Cluster (ETC) which lost 2026 central funding, while managing massive cash-for-food disbursements that require instant SMS/USSD confirmation and donor audit logs.",
        ar: "يقود قطاع الاتصالات في الطوارئ (ETC) الذي توقف تمويله المركزي لعام 2026، ويدير تحويلات نقدية ضخمة للمستفيدين تتطلب تأكيداً فورياً بالرسائل وسجلات تدقيق للمانحين.",
      },
      outreachPitch: {
        en: "Pitch the Connected Aid bundle: Bede Corporate bulk cash disbursement paired with Franco Pinto's bilingual donor reconciliation portal and licensed 4G/APN compound connectivity before the Nov 2026 Starlink deadline.",
        ar: "طرح حزمة «الإغاثة المتصلة»: صرف المساعدات النقدية بالجملة عبر Bede Corporate مع بوابة المطابقة وتقارير المانحين وربط المقرات المرخص قبل موعد نوفمبر 2026 لانتهاء مهلة Starlink.",
      },
    },
    {
      name: {
        en: "UNICEF Sudan",
        ar: "منظمة الأمم المتحدة للطفولة (UNICEF) — السودان",
      },
      hub: {
        en: "Port Sudan, Kassala & Returning Khartoum Office",
        ar: "بورتسودان، كسلا، والمكتب العائد في الخرطوم",
      },
      dmTitle: {
        en: "Chief of Operations / ICT Manager & Social Policy (Cash Plus) Lead",
        ar: "رئيس العمليات / مدير تقنية المعلومات وقائد برامج الدعم النقدي",
      },
      painPoint: {
        en: "Paying thousands of frontline health workers, teachers and Mother-and-Child Cash Transfer beneficiaries across SAF-held states where physical banking cash is unavailable.",
        ar: "صرف مستحقات آلاف الكوادر الصحية والمعلمين ومستفيدي برنامج دعم الأم والطفل في الولايات الآمنة وسط شح السيولة النقدية.",
      },
      outreachPitch: {
        en: "Offer spreadsheet-driven Bede Corporate stipend payouts with automated SMS/IVR beneficiary verification and Zain Hybrid staff SIM pools.",
        ar: "تقديم حل صرف الحوافز والمساعدات عبر جداول Bede Corporate مع التحقق الآلي من الاستلام بالرسائل والرد الآلي وباقات شرائح الموظفين.",
      },
    },
    {
      name: {
        en: "International Organization for Migration (IOM) Sudan",
        ar: "المنظمة الدولية للهجرة (IOM) — السودان",
      },
      hub: {
        en: "Port Sudan, Kassala, Gedaref & Khartoum",
        ar: "بورتسودان، كسلا، القضارف، والخرطوم",
      },
      dmTitle: {
        en: "Chief of Mission / Head of Resources Management & DTM Coordinator",
        ar: "رئيس البعثة / مدير إدارة الموارد ومنسق مصفوفة تتبع النزوح (DTM)",
      },
      painPoint: {
        en: "Tracking over 9.3M internally displaced people and 2.2M returnees to Khartoum and Aj Jazirah while migrating field hubs off unlicensed satellite dishes.",
        ar: "تتبع حركة النازحين والعائدين (أكثر من 2.2 مليون عائد للخرطوم والجزيرة) مع الحاجة لنقل المكاتب الميدانية من أطباق الأقمار غير المرخصة إلى اتصالات مرخصة.",
      },
      outreachPitch: {
        en: "Deploy offline-tolerant field data sync + USSD/SMS registration lines for DTM teams and dual-path APN for IOM transit centres.",
        ar: "نشر نظام مزامنة البيانات الميدانية دون اتصال وخطوط التسجيل عبر USSD والرسائل لفرق التتبع مع ربط APN مزدوج للمراكز.",
      },
    },
    {
      name: {
        en: "Norwegian Refugee Council (NRC) Sudan",
        ar: "المجلس النرويجي للاجئين (NRC) — السودان",
      },
      hub: {
        en: "Port Sudan, Kassala & Gedaref",
        ar: "بورتسودان، كسلا، والقضارف",
      },
      dmTitle: {
        en: "Country Director / Head of Support (Logistics & ICT) & Cash Lead",
        ar: "المدير القطري / رئيس الدعم اللوجستي والتقني وقائد البرامج النقدية",
      },
      painPoint: {
        en: "Multi-purpose cash assistance (MPCA) in eastern displacement camps suffers when mobile IP data drops and WhatsApp calls are restricted.",
        ar: "تواجه برامج المساعدات النقدية متعددة الأغراض في معسكرات الشرق صعوبات عند انقطاع بيانات الإنترنت وتقييد مكالمات واتساب.",
      },
      outreachPitch: {
        en: "Lead with a 30-day pilot: toll-free beneficiary IVR accountability hotline + Bede disbursement pilot in Kassala and Gedaref.",
        ar: "البدء بمشروع تجريبي لمدة 30 يوماً: خط رد آلي مجاني لمساءلة المستفيدين مع صرف تجريبي عبر محفظة Bede في كسلا والقضارف.",
      },
    },
    {
      name: {
        en: "International Medical Corps (IMC) Sudan",
        ar: "الهيئة الطبية الدولية (IMC) — السودان",
      },
      hub: {
        en: "Port Sudan, Red Sea, Kassala & Blue Nile",
        ar: "بورتسودان، البحر الأحمر، كسلا، والنيل الأزرق",
      },
      dmTitle: {
        en: "Country Director / Logistics & Field Security Coordinator",
        ar: "المدير القطري / منسق اللوجستيات والأمن الميداني",
      },
      painPoint: {
        en: "Keeping mobile medical teams, ambulances and remote clinics connected after Thuraya's termination (Feb 2026) and ahead of the Nov 2026 Starlink cutoff.",
        ar: "إبقاء الفرق الطبية المتنقلة والعيادات متصلة بعد توقف خدمات الثريا (فبراير 2026) وقبل انتهاء مهلة Starlink في نوفمبر 2026.",
      },
      outreachPitch: {
        en: "Bundle Zain Fleet VTS for medical vehicles, Push-to-Talk group voice, and 4G CPE routers with licensed VSAT failover.",
        ar: "دمج تتبع المركبات الطبية (VTS)، وخدمة الاتصال الجماعي الفوري (Push-to-Talk)، وراوترات 4G مع مسار قمر صناعي مرخص.",
      },
    },
  ],
  banking: [
    {
      name: {
        en: "Omdurman National Bank (ONB)",
        ar: "بنك أم درمان الوطني (ONB)",
      },
      hub: {
        en: "Khartoum State (22 Operating Branches) & Port Sudan",
        ar: "ولاية الخرطوم (22 فرعاً عاملاً) وبورتسودان",
      },
      dmTitle: {
        en: "Chief Information Officer (CIO) / Head of Digital Banking (O-Cash & Banki-Net)",
        ar: "رئيس تقنية المعلومات (CIO) / مدير القنوات الرقمية (O-Cash وBanki-Net)",
      },
      painPoint: {
        en: "First bank to reconnect to the restored national payment switch (Aug 2026) with 22 branches reopening in Khartoum state—requires zero-downtime ATM/POS APN links and high-priority OTP delivery.",
        ar: "أول مصرف يرتبط بالمقسم القومي المعاد تشغيله (أغسطس 2026) مع تشغيل 22 فرعاً بولاية الخرطوم — يحتاج لاستمرارية دوائر APN للصرافات وسرعة وصول رسائل OTP.",
      },
      outreachPitch: {
        en: "Expand the existing Zain × ONB relationship with dual-path APN failover for the 22 Khartoum branches and SMPP OTP delivery-receipt reconciliation.",
        ar: "توسيع شراكة زين وبنك أم درمان الوطني عبر مسارات APN المزدوجة للفروع الـ 22 في الخرطوم ولوحة مطابقة رسائل التحقق (SMPP OTP).",
      },
    },
    {
      name: {
        en: "Bank of Khartoum (BOK — Bankak)",
        ar: "بنك الخرطوم (تطبيق «بنكك» — Bankak)",
      },
      hub: {
        en: "Khartoum, Omdurman & Port Sudan Corporate HQ",
        ar: "الخرطوم، أم درمان، والمقر الرئيسي في بورتسودان",
      },
      dmTitle: {
        en: "Chief Technology Officer (CTO) / Head of Digital Channels & Payments",
        ar: "رئيس القطاع التقني (CTO) / رئيس القنوات الرقمية والمدفوعات",
      },
      painPoint: {
        en: "Bankak has ~7M users and an 85% surge in post-war activations, creating massive OTP SMS spikes, password-reset call-centre congestion, and branch APN reconnection pressure.",
        ar: "يضم تطبيق «بنكك» نحو 7 ملايين مستخدم مع زيادة 85% في التفعيلات، ما يولد ضغطاً هائلاً على رسائل التحقق ومراكز الاتصال وإعادة ربط الفروع.",
      },
      outreachPitch: {
        en: "Pitch neutral high-throughput SMPP OTP routing with live delivery analytics plus automated Arabic/English IVR self-service to offload BOK's contact centre.",
        ar: "تقديم مسارات SMPP عالية السعة والمحايدة لرسائل التحقق مع لوحات متابعة لحظية، ونظام رد آلي ذكي لتخفيف الضغط عن مركز الاتصال.",
      },
    },
    {
      name: {
        en: "Faisal Islamic Bank (Sudan) — Fawry",
        ar: "بنك فيصل الإسلامي السوداني (تطبيق «فوري» — Fawry)",
      },
      hub: {
        en: "Port Sudan & Returning Khartoum Branches",
        ar: "بورتسودان والفروع العائدة في الخرطوم",
      },
      dmTitle: {
        en: "Head of Information Technology / AGM Digital Banking & Cards",
        ar: "مدير قطاع التقنية / مساعد المدير العام للمصرفية الرقمية والبطاقات",
      },
      painPoint: {
        en: "Rebuilding POS merchant acceptance and ATM availability as commercial activity returns to Khartoum, while ensuring disaster-recovery backup outside conflict zones.",
        ar: "إعادة بناء شبكة نقاط البيع والصرافات الآلية مع عودة النشاط التجاري للخرطوم، وتأمين النسخ الاحتياطي للبيانات خارج مناطق النزاع.",
      },
      outreachPitch: {
        en: "Offer Zain dual-SIM POS connectivity bundles, dedicated branch APN tunnels, and ZainCloud / Zdrop disaster-recovery replication.",
        ar: "طرح باقات ربط نقاط البيع مزدوجة الشريحة، وأنفاق APN الخاصة للفروع، وحلول النسخ الاحتياطي السحابي عبر ZainCloud وZdrop.",
      },
    },
    {
      name: {
        en: "Al Salam Bank Sudan",
        ar: "مصرف السلام — السودان",
      },
      hub: {
        en: "Port Sudan & Khartoum Corporate Banking",
        ar: "بورتسودان وقطاع الشركات في الخرطوم",
      },
      dmTitle: {
        en: "Head of IT & Digital Transformation / Chief Operating Officer (COO)",
        ar: "مدير تقنية المعلومات والتحول الرقمي / رئيس العمليات (COO)",
      },
      painPoint: {
        en: "Modernizing corporate e-banking, host-to-host ERP links, and secure branch interconnect between Port Sudan and Khartoum without relying on damaged terrestrial fibre.",
        ar: "تحديث الخدمات المصرفية للشركات والربط المباشر مع أنظمة العملاء وربط مقرات بورتسودان والخرطوم دون الاعتماد على الألياف الأرضية المتضررة.",
      },
      outreachPitch: {
        en: "Position Zain Private APN + SD-WAN over 4G with Franco Pinto API middleware for corporate treasury and transaction alerts.",
        ar: "تقديم دوائر APN الخاصة مع تقنية SD-WAN عبر 4G وطبقة ربط Franco Pinto لعمليات الخزينة وإشعارات الشركات.",
      },
    },
    {
      name: {
        en: "Cashi / SudanPay (Licensed E-Money Operators)",
        ar: "منصتا «كاشي» (Cashi) و«سودان باي» (SudanPay)",
      },
      hub: {
        en: "Port Sudan, Kassala, Atbara & Khartoum Markets",
        ar: "أسواق بورتسودان، كسلا، عطبرة، والخرطوم",
      },
      dmTitle: {
        en: "Managing Director / Head of Payment Operations & Agent Network",
        ar: "المدير التنفيذي / مدير عمليات الدفع وشبكة الوكلاء",
      },
      painPoint: {
        en: "Merchant POS terminals and agent phones fail during mobile data blackouts or exam shutdowns, halting cashless retail transactions.",
        ar: "توقف أجهزة نقاط البيع وهواتف الوكلاء أثناء انقطاعات بيانات الإنترنت أو حجب الامتحانات، ما يعطل معاملات البيع اليومية.",
      },
      outreachPitch: {
        en: "Sell neutral Zain POS APN SIM pools + USSD/SMS transaction fallback so their terminals clear payments even when IP data is restricted.",
        ar: "توفير شرائح APN محايدة لنقاط البيع مع مسار بديل عبر USSD والرسائل لضمان إتمام المدفوعات حتى عند تقييد بيانات الإنترنت.",
      },
    },
  ],
  logistics: [
    {
      name: {
        en: "Sudan Customs Authority (Jointech Smart Cargo Expansion)",
        ar: "هيئة الجمارك السودانية (توسيع منظومة الشحن الذكي Jointech)",
      },
      hub: {
        en: "Port Sudan Red Sea Gates, Atbara & Dry Ports",
        ar: "موانئ بورتسودان، عطبرة، والموانئ الجافة",
      },
      dmTitle: {
        en: "Director of IT & Smart Customs / Head of Transit & Risk Monitoring",
        ar: "مدير الإدارة العامة لتقنية المعلومات والجمارك الذكية / مدير الرقابة العابرة",
      },
      painPoint: {
        en: "Scaling the January 2026 Zain × Jointech IoT e-seal agreement across inland checkpoints where cellular coverage has dead zones between towns.",
        ar: "توسيع اتفاقية زين وJointech (يناير 2026) للأختام الإلكترونية ومراقبة الشحنات عبر نقاط العبور الداخلية التي تتخللها مناطق ضعف تغطية.",
      },
      outreachPitch: {
        en: "Add Franco Pinto's store-and-forward telemetry buffer, geofencing breach alerts, and clearance SMS notifications for importers.",
        ar: "إضافة طبقة التخزين والإرسال التلقائي لتجاوز مناطق انقطاع التغطية، وتنبيهات السياج الجغرافي، وإشعارات التخليص الآلية للمستوردين.",
      },
    },
    {
      name: {
        en: "DAL Group Supply Chain & Logistics Fleet",
        ar: "أسطول الإمداد واللوجستيات — مجموعة دال (DAL Group)",
      },
      hub: {
        en: "Port Sudan – Atbara – Khartoum Corridor",
        ar: "ممر بورتسودان – عطبرة – الخرطوم",
      },
      dmTitle: {
        en: "Supply Chain & Fleet Director / Group CIO",
        ar: "مدير سلاسل الإمداد والأسطول / رئيس تقنية المعلومات للمجموعة",
      },
      painPoint: {
        en: "High-value food, flour and industrial cargo moving across long corridors faces fuel pilferage, route delays and cash driver-allowance risks.",
        ar: "حركة الشحنات الغذائية والصناعية على المسارات الطويلة تواجه تحديات مراقبة الوقود وتأخر الرحلات ومخاطر تسليم النقد للسائقين.",
      },
      outreachPitch: {
        en: "Pitch the Export Corridor bundle: Zain Fleet VTS + fuel sensors integrated into ERP, paired with Bede Corporate cashless driver & fuel payouts.",
        ar: "طرح حزمة «ممر الصادرات»: تتبع الأسطول وحساسات الوقود المربوطة بنظام ERP، مع صرف مخصصات السائقين والوقود إلكترونياً عبر Bede.",
      },
    },
    {
      name: {
        en: "CTC Group Logistics & Agribusiness Transport",
        ar: "قطاع اللوجستيات والنقل — مجموعة سيتك (CTC Group)",
      },
      hub: {
        en: "Port Sudan, Gedaref, Kassala & Khartoum",
        ar: "بورتسودان، القضارف، كسلا، والخرطوم",
      },
      dmTitle: {
        en: "Head of Logistics & Fleet Operations / Head of IT",
        ar: "مدير عمليات اللوجستيات والأسطول / مدير تقنية المعلومات",
      },
      painPoint: {
        en: "Coordinating heavy transport and warehouse yards across Port Sudan and eastern agricultural states with fragmented voice and tracking tools.",
        ar: "تنسيق أساطيل النقل الثقيل وساحات التخزين بين بورتسودان وولايات الإنتاج الزراعي بالشرق في ظل تشتت أدوات التتبع والاتصال.",
      },
      outreachPitch: {
        en: "Combine Zain VTS fleet tracking, Push-to-Talk group dispatch, and private APN for warehouse inventory sync.",
        ar: "دمج تتبع الأساطيل (VTS)، والاتصال الجماعي الفوري (Push-to-Talk) للتوجيه، ودوائر APN لمزامنة المستودعات.",
      },
    },
    {
      name: {
        en: "Mahgoub Sons Group — Export & Port Corridor",
        ar: "مجموعة محجوب أولاده — قطاع الصادرات والنقل",
      },
      hub: {
        en: "Port Sudan, Gedaref & River Nile",
        ar: "بورتسودان، القضارف، ونهر النيل",
      },
      dmTitle: {
        en: "Export Operations Director / Logistics & Fleet Manager",
        ar: "مدير عمليات التصدير / مدير اللوجستيات والأسطول",
      },
      painPoint: {
        en: "Moving thousands of tonnes of sesame, cotton and agricultural exports to Port Sudan terminals while port congestion delays vessel loading.",
        ar: "نقل آلاف الأطنان من صادرات السمسم والقطن إلى موانئ بورتسودان وسط ازدحام الميناء والحاجة لمعرفة مواعيد الوصول بدقة.",
      },
      outreachPitch: {
        en: "Deploy automated milestone SMS alerts from truck GPS triggers so port clearing agents prepare customs paperwork before trucks arrive.",
        ar: "تفعيل إشعارات الرسائل النصية الآلية المرتبطة بموقع الشاحنة لتجهيز إجراءات التخليص في الميناء قبل وصول الشاحنات.",
      },
    },
    {
      name: {
        en: "WFP / Logistics Cluster Contracted Commercial Transporters",
        ar: "شركات النقل التجاري المتعاقدة مع مجموعة اللوجستيات (Logistics Cluster)",
      },
      hub: {
        en: "Port Sudan, Kassala, Kosti & Khartoum",
        ar: "بورتسودان، كسلا، كوستي، والخرطوم",
      },
      dmTitle: {
        en: "General Manager / Fleet Operations Lead at Contracted Haulier Firms",
        ar: "المدير العام / مدير تشغيل الأسطول في شركات النقل المتعاقدة",
      },
      painPoint: {
        en: "UN and INGO tenders increasingly require real-time GPS cargo visibility and verified proof-of-delivery to release freight payments.",
        ar: "تشترط عقود الأمم المتحدة والمنظمات بشكل متزايد توفر تتبع لحظي للشحنات وإثبات تسليم موثق لصرف مستحقات النقل.",
      },
      outreachPitch: {
        en: "Offer a fast 10-truck VTS + SMS Proof-of-Delivery starter package that makes local hauliers compliant with UN Logistics Cluster standards.",
        ar: "تقديم باقة بداية سريعة (تتبع 10 شاحنات + تأكيد التسليم بالرسائل) تؤهل شركات النقل المحلية لمتطلبات عقود المنظمات الدولية.",
      },
    },
  ],
  "retail-smes": [
    {
      name: {
        en: "Port Sudan Chamber of Commerce & Relocated Wholesale Merchants",
        ar: "الغرفة التجارية ببورتسودان وتجار الجملة المنتقلون",
      },
      hub: {
        en: "Port Sudan Central Market & Red Sea Commercial Zone",
        ar: "السوق المركزي والمنطقة التجارية في بورتسودان",
      },
      dmTitle: {
        en: "Chamber Secretary-General / Wholesale Trading Company Owners",
        ar: "الأمين العام للغرفة التجارية / أصحاب شركات تجارة الجملة",
      },
      painPoint: {
        en: "Hundreds of relocated Khartoum wholesalers now operate from Port Sudan and struggle to notify former customers and collect B2B/B2C payments without cash.",
        ar: "مئات من تجار الجملة المنتقلين من الخرطوم يعملون الآن من بورتسودان ويحتاجون لإبلاغ عملائهم بمواقعهم الجديدة وتحصيل المدفوعات دون نقد.",
      },
      outreachPitch: {
        en: "Co-host a Chamber rollout of 'Business in a Box': Business Flex SIMs, Bede Merchant QR/POS, and targeted Zain Aalin location-announcement SMS.",
        ar: "إطلاق حملة مشتركة لحزمة «أعمالك في باقة واحدة»: شرائح Business Flex، ونقاط بيع Bede QR، ورسائل «زين أعلن» للإعلان عن المواقع الجديدة.",
      },
    },
    {
      name: {
        en: "Omdurman Souq Libya & Al-Hara Reopening Merchants",
        ar: "تجار سوق ليبيا والحارات التجارية العائدة في أم درمان",
      },
      hub: {
        en: "Omdurman & Bahri / Khartoum Commercial Markets",
        ar: "أسواق أم درمان والخرطوم التجارية",
      },
      dmTitle: {
        en: "Shop Owners, FMCG Distributors & Market Traders Committee Leads",
        ar: "أصحاب المتاجر، وموزعو السلع الاستهلاكية،ولجان التجار",
      },
      painPoint: {
        en: "Physical banknotes are scarce and damaged; merchants rely on screenshots of banking apps that are slow to verify and prone to fraud during data congestion.",
        ar: "شح الأوراق النقدية يدفع التجار للاعتماد على صور إشعارات التحويل التي يصعب التحقق منها لحظياً وتتعرض للتلاعب أثناء ضعف الإنترنت.",
      },
      outreachPitch: {
        en: "Deliver Bede Merchant QR with instant SMS payment verification to the cashier's phone—sold through Zain Authorized Sales Partners right in the market.",
        ar: "توفير الدفع عبر رمز Bede QR مع رسالة تأكيد فورية لهاتف التاجر — تباع مباشرة عبر وكلاء زين المعتمدين داخل السوق.",
      },
    },
    {
      name: {
        en: "Kassala & Gedaref FMCG & Food Wholesale Distributors",
        ar: "موزعو المواد الغذائية والسلع الاستهلاكية في كسلا والقضارف",
      },
      hub: {
        en: "Kassala & Gedaref Commercial Markets",
        ar: "أسواق كسلا والقضارف التجارية",
      },
      dmTitle: {
        en: "General Manager / Sales & Distribution Manager",
        ar: "المدير العام / مدير المبيعات والتوزيع",
      },
      painPoint: {
        en: "Managing field sales vans, stock levels and retailer credit across eastern towns using paper ledgers and personal WhatsApp lines.",
        ar: "إدارة مناديب التوزيع والمخزون وحسابات تجار التجزئة في مدن الشرق عبر الدفاتر الورقية وخطوط واتساب الشخصية.",
      },
      outreachPitch: {
        en: "Pitch Blue Enterprise ERP / Franco Pinto lightweight mobile POS & inventory app bundled with Zain Hybrid SIMs for sales reps.",
        ar: "تقديم نظام Blue Enterprise ERP أو تطبيق نقاط البيع والمخزون الخفيف من Franco Pinto مدمجاً مع شرائح Zain Hybrid للمناديب.",
      },
    },
    {
      name: {
        en: "Atbara & Dongola Hardware, Solar & Auto-Parts Traders",
        ar: "تجار المعدات والطاقة الشمسية وقطع الغيار في عطبرة ودنقلا",
      },
      hub: {
        en: "Atbara (River Nile) & Dongola (Northern State)",
        ar: "عطبرة (نهر النيل) ودنقلا (الولاية الشمالية)",
      },
      dmTitle: {
        en: "Business Owner / Commercial Branch Manager",
        ar: "صاحب العمل / مدير الفرع التجاري",
      },
      painPoint: {
        en: "High-ticket sales of solar panels, batteries, generators and spare parts require reliable business connectivity, customer warranty SMS and digital invoicing.",
        ar: "مبيعات الألواح الشمسية والمولدات وقطع الغيار عالية القيمة تتطلب اتصالاً تجارياً مستقراً ورسائل ضمان وفواتير رقمية.",
      },
      outreachPitch: {
        en: "Offer 4G CPE broadband + Business Flex + automated Arabic WhatsApp text front desk (works even with voice calls restricted).",
        ar: "تقديم راوتر 4G للأعمال مع باقة Business Flex ومكتب الرد النصي الآلي عبر واتساب باللغة العربية لخدمة العملاء.",
      },
    },
    {
      name: {
        en: "Al-Amal & Regional Retail Pharmacy Chains",
        ar: "سلاسل الصيدليات والمراكز التجارية الإقليمية",
      },
      hub: {
        en: "Port Sudan, Wad Madani / Kosti & Khartoum",
        ar: "بورتسودان، كوستي، والخرطوم",
      },
      dmTitle: {
        en: "Managing Owner / Operations & Inventory Manager",
        ar: "المالك المدير / مدير العمليات والمخزون",
      },
      painPoint: {
        en: "Customers constantly search for scarce essential medicines while multi-branch pharmacies need real-time stock sync and cashless counter payments.",
        ar: "يبحث المواطنون باستمرار عن الأدوية الضرورية، بينما تحتاج الصيدليات متعددة الفروع لمزامنة المخزون وقبول الدفع الإلكتروني السريع.",
      },
      outreachPitch: {
        en: "Deploy an automated Arabic SMS/WhatsApp medicine-availability lookup desk + Bede POS + 4G branch router bundle.",
        ar: "نشر خدمة الاستعلام الآلي النصي عن توفر الدواء بالرسائل وواتساب مع نقاط بيع Bede وراوتر ربط الفروع.",
      },
    },
  ],
  government: [
    {
      name: {
        en: "Ministry of Finance & Economic Planning (Eisali Phase 2 Expansion)",
        ar: "وزارة المالية والتخطيط الاقتصادي (توسيع منظومة «إيصالي» — المرحلة الثانية)",
      },
      hub: {
        en: "Port Sudan & Returning Khartoum Ministries",
        ar: "بورتسودان والمقرات الوزارية العائدة في الخرطوم",
      },
      dmTitle: {
        en: "Director General of Information Technology / Director of E-Collection (Eisali)",
        ar: "مدير عام تقنية المعلومات / مدير منظومة التحصيل الإلكتروني («إيصالي»)",
      },
      painPoint: {
        en: "Following the 4 Oct 2026 Eisali SMS signing, state revenue is only 4.0% of GDP—the Ministry needs rapid onboarding of dozens of revenue-collecting units and automated ledger reconciliation.",
        ar: "عقب توقيع اتفاقية رسائل «إيصالي» في 4 أكتوبر 2026، ومع بقاء الإيرادات عند 4% من الناتج المحلي، تحتاج الوزارة لربط سريع لعشرات الوحدات الإيرادية ومطابقة آلية للحسابات.",
      },
      outreachPitch: {
        en: "Through Zain's government-relations team, offer Franco Pinto's turnkey reconciliation portal and Bede digital fee-collection rail on top of the Eisali SMS short code.",
        ar: "عبر فريق العلاقات الحكومية بزين، تقديم بوابة المطابقة الآلية من Franco Pinto وقناة التحصيل عبر Bede فوق منظومة رسائل «إيصالي».",
      },
    },
    {
      name: {
        en: "Taxation Chamber (ديوان الضرائب)",
        ar: "ديوان الضرائب السوداني",
      },
      hub: {
        en: "Port Sudan, Khartoum & Safe State Capitals",
        ar: "بورتسودان، الخرطوم، وعواصم الولايات الآمنة",
      },
      dmTitle: {
        en: "Secretary-General / Director of IT & E-Taxation",
        ar: "الأمين العام لديوان الضرائب / مدير تقنية المعلومات والضرائب الإلكترونية",
      },
      painPoint: {
        en: "Tax offices operating from temporary premises lack fixed fibre lines and need reliable taxpayer SMS filing reminders and cashless tax-clearance receipts.",
        ar: "تعمل مكاتب الضرائب من مقرات مؤقتة تفتقر للخطوط الثابتة وتحتاج لإشعارات تذكير الممولين وإيصالات خلو طرف إلكترونية موثوقة.",
      },
      outreachPitch: {
        en: "Replicate the Eisali template: dedicated tax notification short code, citizen IVR lookup, and 'Khartoum Return' 4G/APN office connectivity kits.",
        ar: "تكرار نموذج «إيصالي»: رقم مختصر لإشعارات الضرائب، واستعلام آلي (IVR)، وحقيبة ربط مكاتب «العودة للخرطوم» عبر APN و4G.",
      },
    },
    {
      name: {
        en: "Civil Registry & Passports Corporation (السجل المدني والجوازات)",
        ar: "الإدارة العامة للسجل المدني والجوازات",
      },
      hub: {
        en: "Port Sudan, Kassala, Atbara, Dongola & Khartoum Service Centres",
        ar: "مراكز خدمات بورتسودان، كسلا، عطبرة، دنقلا، والخرطوم",
      },
      dmTitle: {
        en: "Director of Technical & Information Systems (Civilian E-Services)",
        ar: "مدير الأنظمة التقنية والمعلوماتية (خدمات الوثائق المدنية)",
      },
      painPoint: {
        en: "Millions of displaced and returning citizens are queuing for national numbers, birth certificates and passport status updates; Zain already lists Civil Registry on its APN page.",
        ar: "ملايين المواطنين يراجعون لاستخراج الرقم الوطني والجوازات؛ وتدرج زين بالفعل السجل المدني ضمن حالات استخدام دوائر APN الخاصة بها.",
      },
      outreachPitch: {
        en: "Provide dual-path APN for reopened Khartoum registry centres plus an automated SMS/USSD document-ready notification line to eliminate physical crowding.",
        ar: "توفير ربط APN مزدوج للمراكز المعاد افتتاحها بالخرطوم مع خدمة إشعارات جاهزية الجواز والوثائق عبر الرسائل وUSSD لتخفيف الازدحام.",
      },
    },
    {
      name: {
        en: "Khartoum State Government — Returning Ministries Complex",
        ar: "حكومة ولاية الخرطوم — مجمع الوزارات والمحليات العائدة",
      },
      hub: {
        en: "Khartoum, Omdurman & Bahri",
        ar: "الخرطوم، أم درمان، وبحري",
      },
      dmTitle: {
        en: "Director General of Khartoum Information Center / State Digital Transformation Lead",
        ar: "مدير عام مركز معلومات ولاية الخرطوم / مسؤول التحول الرقمي بالولاية",
      },
      painPoint: {
        en: "Following the 11 Jan 2026 formal return and end-October staff reporting deadline, ministries are working from hosted buildings (such as SMRC HQ) where copper and fibre were destroyed.",
        ar: "عقب العودة الرسمية في يناير 2026 وموعد مباشرة الموظفين بنهاية أكتوبر، تعمل الوزارات من مبانٍ مستضافة في ظل تضرر شبكات الألياف الأرضية.",
      },
      outreachPitch: {
        en: "Pitch the 'Khartoum Return' rapid office kit: 4G CPE routers, private APN interconnect, ZainCloud hosting, and Cisco-based UCaaS.",
        ar: "تقديم حزمة «العودة للخرطوم» لتجهيز المقرات فوراً: راوترات 4G، ربط APN خاص، استضافة سحابة زين، والاتصالات الموحدة (UCaaS).",
      },
    },
    {
      name: {
        en: "Red Sea & Kassala State Chambers of Zakat & Municipal Revenue",
        ar: "ديوان الزكاة وإدارات الإيرادات المحلية — ولايتي البحر الأحمر وكسلا",
      },
      hub: {
        en: "Port Sudan & Kassala",
        ar: "بورتسودان وكسلا",
      },
      dmTitle: {
        en: "State IT Director / Head of Revenue Collection & Social Disbursement",
        ar: "مدير تقنية المعلومات بالولاية / مدير التحصيل والمصارف الاجتماعية",
      },
      painPoint: {
        en: "Collecting municipal fees and distributing social support in the busiest eastern host states requires cashless channels and transparent reconciliation.",
        ar: "تحصيل الرسوم المحلية وتوزيع الدعم الاجتماعي في أكثر ولايات الشرق استضافة للنازحين والنشاط التجاري يتطلب قنوات غير نقدية ومطابقة دقيقة.",
      },
      outreachPitch: {
        en: "Offer Bede Corporate for social payouts alongside Eisali-modelled SMS receipting for municipal fee collections (strictly screened & Zain-led).",
        ar: "توفير Bede Corporate لصرف الدعم الاجتماعي إلى جانب إشعارات التحصيل الإلكتروني للرسوم المحلية (تحت قيادة زين وفحص الامتثال).",
      },
    },
  ],
  health: [
    {
      name: {
        en: "WHO Sudan & Federal EPI (Expanded Programme on Immunization)",
        ar: "منظمة الصحة العالمية (WHO) وبرنامج التحصين الموسع الاتحادي",
      },
      hub: {
        en: "Port Sudan, Kassala, Gedaref & Khartoum Cold-Chain Hubs",
        ar: "مراكز سلسلة التبريد في بورتسودان، كسلا، القضارف، والخرطوم",
      },
      dmTitle: {
        en: "WHO Health Operations / Cold-Chain & EPI Logistics Officer",
        ar: "مدير العمليات الصحية بمنظمة الصحة العالمية / مسؤول لوجستيات سلسلة التبريد واللقاحات",
      },
      painPoint: {
        en: "Vaccine cold-chain fridges run on unstable solar/diesel power across 13 states, and community health workers need timely stipend payouts and outbreak reporting.",
        ar: "تعمل ثلاجات حفظ اللقاحات على طاقة شمسية أو مولدات متذبذبة في 13 ولاية، مع الحاجة لصرف حوافز الكوادر الميدانية والإبلاغ الفوري عن الأوبئة.",
      },
      outreachPitch: {
        en: "Deploy Franco Pinto solar IoT temperature loggers on Zain M2M SIMs with instant SMS excursion alerts, plus Bede stipends for vaccination teams.",
        ar: "نشر حساسات حرارة تعمل بالطاقة الشمسية وشرائح زين IoT مع تنبيهات فورية بالرسائل عند تغير حرارة الثلاجات، وصرف حوافز فرق التطعيم عبر Bede.",
      },
    },
    {
      name: {
        en: "Al-ribat / Royal Care & Private Specialist Hospitals (Port Sudan & Khartoum)",
        ar: "المستشفيات التخصصية والمراكز الطبية الخاصة (بورتسودان والخرطوم)",
      },
      hub: {
        en: "Port Sudan, Atbara & Reopening Khartoum Clinics",
        ar: "بورتسودان، عطبرة، والمراكز العائدة في الخرطوم",
      },
      dmTitle: {
        en: "Hospital Medical Director / IT & Patient Services Manager",
        ar: "المدير الطبي للمستشفى / مدير تقنية المعلومات وخدمات المرضى",
      },
      painPoint: {
        en: "Visiting specialist doctors rotate between cities; patients miss appointments or lab results without automated SMS notices and cashless billing.",
        ar: "يتنقل الأطباء الاختصاصيون بين المدن؛ ويحتاج المرضى لإشعارات مواعيد العيادات ونتائج المعامل وسداد الرسوم إلكترونياً.",
      },
      outreachPitch: {
        en: "Pitch the lightweight clinic appointment & lab-result SMS confirmation portal + Bede QR counter acceptance + 4G/APN clinic connectivity.",
        ar: "تقديم نظام حجز المواعيد وإشعارات نتائج المعامل بالرسائل النصية مع الدفع عبر رمز Bede QR وربط العيادات عبر APN.",
      },
    },
    {
      name: {
        en: "Al-Borg / Total Lab Care Diagnostic Laboratories",
        ar: "سلاسل المعامل والمختبرات الطبية التشخيصية",
      },
      hub: {
        en: "Port Sudan, Kassala, Wad Madani, Atbara & Khartoum",
        ar: "بورتسودان، كسلا، عطبرة، والخرطوم",
      },
      dmTitle: {
        en: "General Manager / Laboratory Information System (LIS) Manager",
        ar: "المدير العام / مدير نظام معلومات المختبرات (LIS)",
      },
      painPoint: {
        en: "Patients travel long distances just to collect paper lab results when mobile data is congested or WhatsApp PDF delivery fails.",
        ar: "يتكبد المرضى عناء التنقل لاستلام نتائج الفحوصات الورقية عند ضعف الإنترنت أو تعذر إرسال الملفات عبر واتساب.",
      },
      outreachPitch: {
        en: "Integrate Zain Bulk SMS / SMPP directly with their LIS to send instant critical lab alerts and low-bandwidth result links.",
        ar: "ربط بوابة رسائل زين (SMPP) مباشرة بنظام المختبر لإرسال إشعارات جاهزية الفحوصات والنتائج الحرجة فور صدورها.",
      },
    },
    {
      name: {
        en: "Amipharma / Blue Nile Pharmaceutical Distributors",
        ar: "شركات توزيع واستيراد الأدوية (أميفرما وموزعو الإمداد الدوائي)",
      },
      hub: {
        en: "Port Sudan Warehouses & Eastern/Northern Distribution Routes",
        ar: "مستودعات بورتسودان ومسارات التوزيع للشرق والشمال والخرطوم",
      },
      dmTitle: {
        en: "Supply Chain & Cold-Storage Director / Commercial Manager",
        ar: "مدير الإمداد والتخزين المبرد / المدير التجاري",
      },
      painPoint: {
        en: "Temperature-sensitive insulin and biologics require monitored cold warehouses and refrigerated transport trucks from Port Sudan.",
        ar: "تتطلب الأدوية الحساسة للحرارة والأنسولين مراقبة دقيقة للمستودعات المبردة وشاحنات التوزيع المنطلقة من بورتسودان.",
      },
      outreachPitch: {
        en: "Combine Zain Fleet VTS + cold-chain IoT sensors for pharma trucks with Bede B2B payment collection from retail pharmacies.",
        ar: "دمج تتبع الشاحنات (VTS) وحساسات التبريد (IoT) لسيارات التوزيع مع تحصيل مدفوعات الصيدليات عبر محفظة Bede.",
      },
    },
    {
      name: {
        en: "Sudanese Red Crescent Society (SRCS) & Maternal Health Clinics",
        ar: "جمعية الهلال الأحمر السوداني وعيادات الرعاية الأولية",
      },
      hub: {
        en: "National Network Across All Safe States & Khartoum",
        ar: "شبكة الفروع والعيادات في الولايات الآمنة والخرطوم",
      },
      dmTitle: {
        en: "Secretary-General / Director of Health & Disaster Management",
        ar: "الأمين العام / مدير الإدارة الصحية وإدارة الطوارئ",
      },
      painPoint: {
        en: "Coordinating thousands of volunteers, blood-bank alerts and community clinics across states when internet blackouts occur.",
        ar: "تنسيق آلاف المتطوعين ونداءات بنوك الدم والعيادات المجتمعية في مختلف الولايات أثناء انقطاعات الإنترنت.",
      },
      outreachPitch: {
        en: "Provide Zain Short Code & Auto-Dialer emergency dispatch, volunteer Bede micro-stipends, and offline-capable SMS reporting.",
        ar: "توفير رقم مختصر ونظام اتصال آلي لنداءات الطوارئ، وصرف حوافز المتطوعين عبر Bede، ونظام تقارير ميدانية يعمل بالرسائل النصية.",
      },
    },
  ],
  agriculture: [
    {
      name: {
        en: "Gedaref Digital Crop Market & Sesame Exporters Union",
        ar: "أسواق محاصيل القضارف واتحاد مصدّري السمسم",
      },
      hub: {
        en: "Gedaref State & Port Sudan Export Terminal",
        ar: "ولاية القضارف وميناء التصدير في بورتسودان",
      },
      dmTitle: {
        en: "Crop Market Director / Chairman of Sesame Exporters Association",
        ar: "مدير أسواق المحاصيل / رئيس اتحاد مصدّري السمسم",
      },
      painPoint: {
        en: "Sesame exports reached US$333.7M (288,941 t) in 2025, but farmers and brokers lack real-time daily auction prices and face severe cash shortages during harvest.",
        ar: "بلغت صادرات السمسم 333.7 مليون دولار في 2025، لكن المزارعين والتجار يفتقرون لأسعار البورصة اليومية الفورية ويواجهون شحاً حاداً في النقد عند الحصاد.",
      },
      outreachPitch: {
        en: "Launch Zain's written Smart Agriculture ('Hagool') + daily crop-price SMS subscription + Bede outgrower cashless harvest settlements.",
        ar: "إطلاق خدمة الزراعة الذكية («حقول») من زين مع اشتراك يومي لأسعار المحاصيل بالرسائل وتسوية مشتريات الحصاد إلكترونياً عبر Bede.",
      },
    },
    {
      name: {
        en: "FAO Sudan (Emergency Seed & Food Security Programmes)",
        ar: "منظمة الأغذية والزراعة للأمم المتحدة (FAO) — السودان",
      },
      hub: {
        en: "Port Sudan, Gedaref, Kassala & River Nile",
        ar: "بورتسودان، القضارف، كسلا، ونهر النيل",
      },
      dmTitle: {
        en: "FAO Representative / Emergency & Rehabilitation Coordinator",
        ar: "ممثل منظمة الفاو / منسق برامج الطوارئ وإعادة التأهيل الزراعي",
      },
      painPoint: {
        en: "Reaching hundreds of thousands of smallholder farmers with flood/weather alerts (after 2025 floods hit Kassala and Gedaref) and redeemable input vouchers.",
        ar: "الوصول لمئات الآلاف من صغار المزارعين بإنذارات الفيضانات والطقس وقسائم البذور والمدخلات الزراعية القابلة للصرف.",
      },
      outreachPitch: {
        en: "Offer Franco Pinto's SMS/USSD e-voucher farmer registry connected to Bede Corporate and localized IVR weather/pest advisory.",
        ar: "تقديم سجل المزارعين والقسائم الإلكترونية عبر الرسائل وUSSD المربوط بمحفظة Bede Corporate مع إرشاد صوتي آلي للطقس والآفات.",
      },
    },
    {
      name: {
        en: "Afritec / River Nile & Northern State Commercial Pivot Farms",
        ar: "مشاريع الزراعة المروية الكبرى (أفريتيك ومشاريع نهر النيل والشمالية)",
      },
      hub: {
        en: "Atbara, Ed Damer, Berber & Dongola",
        ar: "عطبرة، الدامر، بربر، ودنقلا",
      },
      dmTitle: {
        en: "Farm Operations Director / Irrigation & Agricultural Engineering Lead",
        ar: "مدير العمليات الزراعية / رئيس هندسة الري والميكنة",
      },
      painPoint: {
        en: "Large fodder and wheat pivot farms rely on solar and diesel river pumps spread across vast estates that require remote telemetry and crew coordination.",
        ar: "تعتمد مشاريع الأعلاف والقمح المحورية على مضخات ري شمسية وديزل موزعة على مساحات شاسعة تتطلب مراقبة عن بُعد وتنسيقاً للفرق.",
      },
      outreachPitch: {
        en: "Pitch Zain IoT SIMs for solar irrigation pump telemetry, Fleet VTS for harvesters, and Hybrid Flex SIMs for estate engineers.",
        ar: "توفير شرائح زين IoT لمراقبة مضخات الري الشمسية عن بُعد، وتتبع الحصادات، وباقات Hybrid Flex لمهندسي المشاريع.",
      },
    },
    {
      name: {
        en: "Nopec / Gum Arabic Processing & Export Companies",
        ar: "شركات تصنيع وتصدير الصمغ العربي والمحاصيل النقدية",
      },
      hub: {
        en: "Port Sudan, White Nile (Kosti) & Blue Nile (Damazine)",
        ar: "بورتسودان، كوستي (النيل الأبيض)، والدمازين (النيل الأزرق)",
      },
      dmTitle: {
        en: "Managing Director / Procurement & Upcountry Supply Chain Manager",
        ar: "المدير التنفيذي / مدير المشتريات وسلاسل الإمداد بالولايات",
      },
      painPoint: {
        en: "Gum arabic exports (US$78.2M / 62,514 t in 2025) depend on paying local collectors and producers in cash-starved rural markets and tracking trucks to Port Sudan.",
        ar: "تعتمد صادرات الصمغ العربي (78.2 مليون دولار في 2025) على الشراء من المنتجين المحليين في أسواق تعاني من شح النقد وتتبع الشاحنات حتى بورتسودان.",
      },
      outreachPitch: {
        en: "Deploy Bede outgrower mobile payouts + SMS buying-price bulletins + Export Corridor VTS truck tracking to Port Sudan.",
        ar: "تفعيل مدفوعات المنتجين عبر محفظة Bede مع نشرات أسعار الشراء بالرسائل وتتبع شاحنات الصادر إلى بورتسودان.",
      },
    },
    {
      name: {
        en: "Kassala & Halfa Agricultural Cooperatives & Horticultural Unions",
        ar: "الجمعيات التعاونية الزراعية واتحادات البساتين في كسلا وحلفا",
      },
      hub: {
        en: "Kassala (Gash / Horticultural Belt) & New Halfa",
        ar: "كسلا (حزام البساتين والقاش) وحلفا الجديدة",
      },
      dmTitle: {
        en: "Cooperative Union Chairman / Secretary-General",
        ar: "رئيس اتحاد الجمعيات التعاونية / الأمين العام",
      },
      painPoint: {
        en: "Perishable fruit and vegetable harvests spoil when transport coordination and buyer payments between Kassala, Port Sudan and Khartoum are delayed.",
        ar: "تتعرض محاصيل الخضر والفاكهة للتلف عند تأخر تنسيق شاحنات النقل المبرد وتسوية مدفوعات التجار بين كسلا وبورتسودان والخرطوم.",
      },
      outreachPitch: {
        en: "Offer a cooperative group bundle: SMS buyer-matching board, Bede instant settlement, and solar pump IoT monitoring.",
        ar: "تقديم حزمة تعاونية موحدة: لوحة ربط المشترين بالرسائل النصية، والتسوية الفورية عبر Bede، ومراقبة مضخات الطاقة الشمسية.",
      },
    },
  ],
  mining: [
    {
      name: {
        en: "Sudanese Mineral Resources Company (SMRC — Civilian Administration)",
        ar: "الشركة السودانية للموارد المعدنية (SMRC — الإدارة الفنية والمدنية)",
      },
      hub: {
        en: "Port Sudan & Khartoum Headquarters (South Khartoum)",
        ar: "بورتسودان والمقر الرئيسي في جنوب الخرطوم",
      },
      dmTitle: {
        en: "Director of IT & Digital Transformation / Head of Production Supervision",
        ar: "مدير تقنية المعلومات والتحول الرقمي / مدير الرقابة على الإنتاج",
      },
      painPoint: {
        en: "SMRC reported 70 t of gold produced in 2025 (113% of target) and hosts 7 federal ministries in its Khartoum HQ, requiring reliable campus links and production-site telemetry.",
        ar: "سجلت الشركة إنتاج 70 طناً من الذهب في 2025 (113% من المستهدف) وتستضيف 7 وزارات في مقرها بالخرطوم، ما يتطلب ربطاً قوياً للمقر ومراقبة لمواقع الإنتاج.",
      },
      outreachPitch: {
        en: "Strictly under Zain-led legal clearance: provide 'Khartoum Return' APN/4G campus connectivity + fleet tracking for civilian supervision vehicles.",
        ar: "تحت قيادة زين وموافقتها القانونية حصراً: توفير ربط APN و4G للمقر الرئيسي بالخرطوم وتتبع مركبات الرقابة المدنية.",
      },
    },
    {
      name: {
        en: "Ariab Mining Company (Red Sea State Concession)",
        ar: "شركة أرياب للتعدين (مربع امتياز ولاية البحر الأحمر)",
      },
      hub: {
        en: "Port Sudan HQ & Ariab Concession (Red Sea State)",
        ar: "مقر بورتسودان وموقع امتياز أرياب بولاية البحر الأحمر",
      },
      dmTitle: {
        en: "Site Operations Manager / IT & Communications Lead",
        ar: "مدير عمليات الموقع / مسؤول تقنية المعلومات والاتصالات",
      },
      painPoint: {
        en: "Remote Red Sea concession sites sit beyond normal cellular coverage, requiring satellite backhaul, heavy-vehicle tracking and cashless worker payroll.",
        ar: "تقع مواقع الإنتاج في البحر الأحمر خارج التغطية الخلوية المعتادة، وتحتاج لربط فضائي مرخص وتتبع للآليات وصرف رواتب العاملين دون نقد.",
      },
      outreachPitch: {
        en: "After formal Zain sanctions due diligence: bundle TPRA-licensed Partner VSAT + Zain Fleet VTS + Bede remote site payroll.",
        ar: "بعد استكمال فحص الامتثال بقيادة زين: دمج ربط VSAT المرخص مع تتبع الآليات (VTS) وصرف الأجور عبر محفظة Bede.",
      },
    },
    {
      name: {
        en: "Delgo / Northern State Licensed Concession Operators",
        ar: "شركات الامتياز والتعدين المرخصة في الولاية الشمالية (دلقو ووادي حلفا)",
      },
      hub: {
        en: "Dongola, Delgo & Wadi Halfa (Northern State)",
        ar: "دنقلا، دلقو، ووادي حلفا (الولاية الشمالية)",
      },
      dmTitle: {
        en: "General Manager / HSE & Fleet Security Manager",
        ar: "المدير العام / مدير السلامة المهنية وأمن الأسطول",
      },
      painPoint: {
        en: "Fuel tankers and heavy excavators operating in remote Northern desert blocks suffer from fuel theft, breakdowns and communication blackouts.",
        ar: "تواجه صهاريج الوقود والحفارات العاملة في المربعات الصحراوية بالشمالية مخاطر سرقة الوقود والأعطال وانقطاع الاتصال.",
      },
      outreachPitch: {
        en: "Subject to Zain compliance sign-off: deploy store-and-forward VTS trackers, fuel-level telemetry, and Push-to-Talk radio over cellular.",
        ar: "بشرط الاعتماد الرقابي من زين: نشر أجهزة تتبع بخاصية التخزين والإرسال، ومراقبة الوقود، والاتصال الجماعي (Push-to-Talk).",
      },
    },
    {
      name: {
        en: "River Nile (Atbara / Abu Hamad) Licensed Processing Plants",
        ar: "مصانع وشركات معالجة مخلفات التعدين المرخصة في ولاية نهر النيل",
      },
      hub: {
        en: "Atbara & Abu Hamad (River Nile State)",
        ar: "عطبرة وأبو حمد (ولاية نهر النيل)",
      },
      dmTitle: {
        en: "Plant Operations Director / Finance & Payroll Manager",
        ar: "مدير تشغيل المصنع / المدير المالي ومسؤول الأجور",
      },
      painPoint: {
        en: "Paying hundreds of plant technicians and drivers in Abu Hamad and Atbara without physical cash while securing plant perimeters.",
        ar: "صرف أجور مئات الفنيين والسائقين في أبو حمد وعطبرة دون سيولة نقدية، مع الحاجة لمراقبة وتأمين مواقع المصانع.",
      },
      outreachPitch: {
        en: "Under Zain due diligence: offer Bede Corporate spreadsheet payroll + 4G CPE plant connectivity + VSaaS cloud video surveillance.",
        ar: "بعد فحص العناية الواجبة من زين: تقديم صرف الرواتب عبر Bede Corporate وربط 4G للمصانع والمراقبة المرئية السحابية (VSaaS).",
      },
    },
    {
      name: {
        en: "Geological Research Authority (GRAS) — Technical Survey Teams",
        ar: "الهيئة العامة للأبحاث الجيولوجية — فرق المسح الفني",
      },
      hub: {
        en: "Port Sudan & Khartoum Technical Offices",
        ar: "المكاتب الفنية في بورتسودان والخرطوم",
      },
      dmTitle: {
        en: "Director of Technical Information & GIS / Survey Operations Lead",
        ar: "مدير المعلومات الفنية ونظم المعلومات الجغرافية (GIS)",
      },
      painPoint: {
        en: "Rebuilding geological databases lost during 2023–2024 and equipping field survey vehicles in safe eastern and northern states.",
        ar: "استعادة قواعد البيانات الجيولوجية المتضررة خلال 2023–2024 وتجهيز مركبات المسح الميداني في ولايات الشرق والشمال الآمنة.",
      },
      outreachPitch: {
        en: "Zain-led government track: ZainCloud + Zdrop backup for GIS records and VTS tracking for field survey vehicles.",
        ar: "ضمن المسار الحكومي بقيادة زين: استضافة سحابة زين ونسخ Zdrop الاحتياطي لقواعد البيانات وتتبع مركبات المسح.",
      },
    },
  ],
  education: [
    {
      name: {
        en: "University of Khartoum (UofK — Campus Return & Remote Faculty)",
        ar: "جامعة الخرطوم (العودة للحرم الجامعي والربط مع الأساتذة بالخارج)",
      },
      hub: {
        en: "Khartoum Main Campus & Regional Exam Centres",
        ar: "الحرم الرئيسي بالخرطوم ومراكز الامتحانات الإقليمية",
      },
      dmTitle: {
        en: "Director of University ICT Center (UofK) / Academic Registrar",
        ar: "مدير مركز تقنية المعلومات بجامعة الخرطوم / أمين الشؤون العلمية",
      },
      painPoint: {
        en: "Ordered back to Khartoum campuses by Aug 2026 while 71% of UofK academics remain abroad [62]—requires hybrid learning, fee collection and exam SMS.",
        ar: "صدرت توجيهات العودة للحرم الجامعي بالخرطوم بينما لا يزال 71% من أساتذة الجامعة بالخارج [62] — ما يتطلب تعليماً هجيناً وتحصيلاً للرسوم وإعلان النتائج بالرسائل.",
      },
      outreachPitch: {
        en: "Pitch Zain's written EDU-PRO / LMS-PRO platform + campus 4G/APN bundles + Bede tuition fee payment + Bulk SMS exam results.",
        ar: "تقديم منصة EDU-PRO / LMS-PRO من زين مع باقات ربط الحرم الجامعي وسداد الرسوم عبر Bede ونتائج الامتحانات بالرسائل النصية.",
      },
    },
    {
      name: {
        en: "Sudan University of Science & Technology (SUST)",
        ar: "جامعة السودان للعلوم والتكنولوجيا (SUST)",
      },
      hub: {
        en: "Khartoum Campuses & Safe-State Exam Hubs",
        ar: "مجمعات الخرطوم ومراكز الامتحانات في الولايات الآمنة",
      },
      dmTitle: {
        en: "Director of Computer & Information Technology Center / Dean of Admissions",
        ar: "مدير مركز الحاسوب وتقنية المعلومات / عميد القبول والتسجيل",
      },
      painPoint: {
        en: "One of Sudan's largest student bodies spread across states needs low-bandwidth lecture access, registration SMS notifications and cashless tuition settlement.",
        ar: "تضم الجامعة إحدى أكبر القواعد الطلابية المنتشرة في الولايات وتحتاج لوصـول للمحاضرات باستهلاك بيانات منخفض وإشعارات تسجيل وسداد إلكتروني للرسوم.",
      },
      outreachPitch: {
        en: "Deploy Franco Pinto's low-bandwidth student portal integrated with Zain Bill Payment / Bede and student Flex data bundles.",
        ar: "نشر بوابة الطلاب خفيفة الاستهلاك للبيانات مربوطة بنظام سداد الفواتير ومحفظة Bede وباقات بيانات الطلاب.",
      },
    },
    {
      name: {
        en: "University of Medical Sciences & Technology (UMST — Mamouniry)",
        ar: "جامعة العلوم الطبية والتكنولوجيا (UMST — مأمون حميدة)",
      },
      hub: {
        en: "Port Sudan / Safe Hubs & Returning Khartoum Facilities",
        ar: "مراكز بورتسودان والمرافق العائدة في الخرطوم",
      },
      dmTitle: {
        en: "Vice President for Administration & Finance / IT Director",
        ar: "نائب الرئيس للشؤون الإدارية والمالية / مدير تقنية المعلومات",
      },
      painPoint: {
        en: "Private fee-paying medical and engineering students expect uninterrupted online lectures, clinical scheduling and digital fee receipts.",
        ar: "يتوقع طلاب الطب والهندسة في الجامعات الخاصة استمرارية المحاضرات الإلكترونية وجدولة التدريب السريري وإيصالات السداد الرقمية.",
      },
      outreachPitch: {
        en: "Offer dedicated Zain APN + 4G campus routers, Cisco-based UCaaS for international lecturers, and automated SMS/Bede tuition reconciliation.",
        ar: "توفير ربط APN وراوترات 4G للحرم الجامعي، ونظام UCaaS للمحاضرين من الخارج، ومطابقة آلية للرسوم الدراسية عبر Bede.",
      },
    },
    {
      name: {
        en: "Red Sea University (Port Sudan) & University of Kassala",
        ar: "جامعة البحر الأحمر (بورتسودان) وجامعة كسلا",
      },
      hub: {
        en: "Port Sudan & Kassala Campuses",
        ar: "الحرم الجامعي في بورتسودان وكسلا",
      },
      dmTitle: {
        en: "University ICT Director / Secretary of Scientific Affairs",
        ar: "مدير تقنية المعلومات بالجامعة / أمين الشؤون العلمية",
      },
      painPoint: {
        en: "Hosting thousands of transferred students and national exams from other universities, straining campus Wi-Fi and registrar offices.",
        ar: "استضافة آلاف الطلاب الممتحنين والمحولين من جامعات أخرى، ما يضاعف الضغط على شبكة الجامعة ومكاتب التسجيل.",
      },
      outreachPitch: {
        en: "Sell high-capacity 4G campus broadband + Short Code exam-seat and result lookup + Bede exam-fee collection.",
        ar: "تقديم باقات إنترنت 4G عالية السعة للحرم الجامعي مع رقم مختصر للاستعلام عن أرقام الجلوس والنتائج وتحصيل رسوم الامتحانات عبر Bede.",
      },
    },
    {
      name: {
        en: "National Ribat / International Private School Chains (Port Sudan & Khartoum)",
        ar: "الجامعات الخاصة وسلاسل المدارس الدولية والخاصة (بورتسودان والخرطوم)",
      },
      hub: {
        en: "Port Sudan, Atbara & Khartoum",
        ar: "بورتسودان، عطبرة، والخرطوم",
      },
      dmTitle: {
        en: "School Chain Principal / Finance & Parent Relations Manager",
        ar: "مدير عام المدارس / المدير المالي ومسؤول التواصل مع أولياء الأمور",
      },
      painPoint: {
        en: "Exam-season internet shutdowns (3.5 hours/day in Apr 2026 [40]) block WhatsApp parent groups and disrupt installment fee collection.",
        ar: "حجب الإنترنت اليومي أثناء موسم الامتحانات (3.5 ساعة يومياً في أبريل 2026 [40]) يعطل مجموعات واتساب لأولياء الأمور وتحصيل الأقساط.",
      },
      outreachPitch: {
        en: "Provide an offline-safe Parent SMS Alert & Bede Tuition Installment Bundle that reaches every parent's phone during data shutdowns.",
        ar: "توفير حزمة تنبيهات أولياء الأمور بالرسائل النصية وسداد الأقساط عبر Bede التي تصل لكل هاتف حتى أثناء حجب الإنترنت.",
      },
    },
  ],
  energy: [
    {
      name: {
        en: "Bashayer Pipeline Company (BAPCO — Port Sudan Marine Terminal)",
        ar: "شركة بشائر لخطوط الأنابيب (BAPCO — ميناء بشائر ببورتسودان)",
      },
      hub: {
        en: "Bashayer Terminal (South of Port Sudan) & Port Sudan Offices",
        ar: "ميناء بشائر (جنوب بورتسودان) ومكاتب بورتسودان",
      },
      dmTitle: {
        en: "IT & Telecommunications Manager / Terminal Operations & SCADA Lead",
        ar: "مدير تقنية المعلومات والاتصالات / مدير عمليات الميناء وأنظمة التحكم (SCADA)",
      },
      painPoint: {
        en: "Critical crude export terminal handling oil exports near Port Sudan [63] requires ultra-secure private data links, telemetry and crew communications.",
        ar: "محطة التصدير البحرية الحيوية قرب بورتسودان [63] تتطلب روابط بيانات خاصة عالية الأمان وقياسات عن بُعد واتصالات ميدانية للفرق.",
      },
      outreachPitch: {
        en: "Pitch hardened Zain Private APN for SCADA/terminal telemetry, Fleet VTS for crew vehicles, and Push-to-Talk secure group voice.",
        ar: "تقديم دوائر APN الخاصة المؤمنة لبيانات التحكم والقياس، وتتبع مركبات الفرق الميدانية، والاتصال الجماعي الفوري (Push-to-Talk).",
      },
    },
    {
      name: {
        en: "DAL Engineering / Cat Power & Commercial Solar Installers",
        ar: "دال الهندسية وموزعو ومقاولو أنظمة الطاقة الشمسية والمولدات التجارية",
      },
      hub: {
        en: "Port Sudan, Atbara, Kassala, Gedaref & Khartoum",
        ar: "بورتسودان، عطبرة، كسلا، القضارف، والخرطوم",
      },
      dmTitle: {
        en: "Energy & Solar Division Manager / After-Sales & Telemetry Lead",
        ar: "مدير قطاع الطاقة والطاقة الشمسية / مدير خدمات ما بعد البيع والمراقبة عن بُعد",
      },
      painPoint: {
        en: "Solar imports surged 6x in a year [31] and diesel power costs US$0.45/kWh [30]—installers need remote inverter/fuel telemetry SIMs for hundreds of client sites.",
        ar: "تضاعفت واردات الطاقة الشمسية 6 مرات خلال عام [31] وتبلغ تكلفة الديزل 0.45 دولار/كيلوواط ساعة [30] — ويحتاج المقاولون لشرائح مراقبة عن بُعد لمئات المواقع.",
      },
      outreachPitch: {
        en: "Establish a Solar & Generator Reseller Channel: bundle Zain IoT M2M SIMs + Franco Pinto inverter/fuel alerting dashboards into every commercial installation.",
        ar: "تأسيس قناة بيع عبر موزعي الطاقة الشمسية: دمج شرائح زين IoT ولوحة مراقبة المحولات والوقود من Franco Pinto مع كل منظومة تجارية.",
      },
    },
    {
      name: {
        en: "Sudanese Electricity Distribution Co. (SEDC — Khartoum & East Grid Rehab)",
        ar: "الشركة السودانية لتوزيع الكهرباء (إعادة تأهيل شبكات الخرطوم والشرق)",
      },
      hub: {
        en: "Port Sudan, Atbara, Kassala & Returning Khartoum Substations",
        ar: "بورتسودان، عطبرة، كسلا، ومحطات الخرطوم العائدة للخدمة",
      },
      dmTitle: {
        en: "Director of Smart Metering & Prepayment / IT & Communications Director",
        ar: "مدير العدادات الذكية والدفع المسبق / مدير تقنية المعلومات والاتصالات",
      },
      painPoint: {
        en: "Grid damage is estimated at up to US$3bn [28]; as substations reopen in Khartoum, SEDC needs APN links for electricity meters (already listed on Zain's APN page) and prepaid token sales.",
        ar: "تقدر أضرار الشبكة بنحو 3 مليارات دولار [28]؛ ومع إعادة تأهيل المحطات تحتاج الشركة لربط العدادات عبر APN (المدرج لدى زين) وبيع الكهرباء مسبقة الدفع.",
      },
      outreachPitch: {
        en: "Reconnect metering concentrators via Zain Private APN and enable instant prepaid electricity token purchases + SMS delivery through Bede and Bill Payment.",
        ar: "إعادة ربط مجمعات العدادات عبر دوائر APN الخاصة من زين وتفعيل شراء كروت الكهرباء وإرسالها بالرسائل عبر Bede وسداد الفواتير.",
      },
    },
    {
      name: {
        en: "Nile Petroleum / Bashaer Energy Fuel Distribution Networks",
        ar: "شركات توزيع المشتقات البترولية ومحطات الوقود (النيل للبترول وبشائر)",
      },
      hub: {
        en: "Port Sudan Depot to Kassala, Gedaref, Atbara & Khartoum Stations",
        ar: "مستودعات بورتسودان ومحطات الخدمة في الشرق والشمال والخرطوم",
      },
      dmTitle: {
        en: "Retail Network & Logistics Manager / Head of IT & Payment Systems",
        ar: "مدير شبكة المحطات والإمداد / مدير تقنية المعلومات وأنظمة الدفع",
      },
      painPoint: {
        en: "Tracking fuel tankers from Port Sudan depots to service stations, monitoring underground tank levels, and collecting cashless payments at the pump.",
        ar: "تتبع تناكر الوقود من مستودعات بورتسودان إلى المحطات، ومراقبة مخزون الخزانات الأرضية، وتحصيل قيمة الوقود إلكترونياً في المحطات.",
      },
      outreachPitch: {
        en: "Combine Zain Fleet VTS for fuel tankers, IoT tank-level sensors, and Bede Corporate / POS QR fuel vouchers for commercial fleets.",
        ar: "دمج تتبع تناكر الوقود (VTS)، وحساسات مستوى الخزانات (IoT)، وقسائم الوقود الإلكترونية للشركات عبر Bede QR.",
      },
    },
    {
      name: {
        en: "Commercial Solar Microgrid Developers (Agri & Industrial Estates)",
        ar: "مطورو محطات الطاقة الشمسية التجارية والمصانع (الشرق ونهر النيل)",
      },
      hub: {
        en: "Atbara, Dongola, Kassala & Port Sudan Industrial Zones",
        ar: "المناطق الصناعية والزراعية في عطبرة ودنقلا وكسلا وبورتسودان",
      },
      dmTitle: {
        en: "Technical Director / O&M (Operations & Maintenance) Manager",
        ar: "المدير الفني / مدير التشغيل والصيانة (O&M)",
      },
      painPoint: {
        en: "Commercial solar-as-a-service operators lose revenue when remote inverters trip or batteries overheat without real-time SMS/dashboard alerts.",
        ar: "يفقد مشغلو محطات الطاقة الشمسية التجارية عوائدهم عند تعطل المحولات أو ارتفاع حرارة البطاريات في المواقع البعيدة دون تنبيه فوري.",
      },
      outreachPitch: {
        en: "Provide a turnkey Solar O&M Telemetry Pack: Zain APN/IoT SIM + Franco Pinto real-time yield & fault SMS alerting portal.",
        ar: "توفير حزمة مراقبة وصيانة الطاقة الشمسية: شرائح زين APN/IoT مع بوابة تنبيهات الأعطال وكفاءة التوليد الفورية بالرسائل.",
      },
    },
  ],
  construction: [
    {
      name: {
        en: "UNDP Sudan — Urban Infrastructure & Khartoum Rehabilitation Programme",
        ar: "برنامج الأمم المتحدة الإنمائي (UNDP) — مشاريع تأهيل البنية التحتية والخرطوم",
      },
      hub: {
        en: "Port Sudan & Khartoum Field Engineering Offices",
        ar: "مكاتب الهندسة الميدانية في بورتسودان والخرطوم",
      },
      dmTitle: {
        en: "Head of Infrastructure & Stabilization / Procurement & Project Manager",
        ar: "مدير مشاريع البنية التحتية والاستقرار / مدير المشتريات والمشاريع",
      },
      painPoint: {
        en: "Rehabilitating water stations, solar clinics, roads and public buildings in Khartoum requires verified site progress reporting and cashless daily-worker stipends.",
        ar: "تأهيل محطات المياه والعيادات الشمسية والطرق والمباني في الخرطوم يتطلب تقارير إنجاز موقعية موثقة وصرف أجور العمالة اليومية دون نقد.",
      },
      outreachPitch: {
        en: "Offer the Construction Site Kit: 4G site routers, Franco Pinto mobile site-progress reporting app, and Bede daily-worker payroll.",
        ar: "تقديم «حقيبة مواقع الإعمار»: راوترات 4G للمواقع، وتطبيق تقارير إنجاز المشاريع، وصرف أجور العمالة اليومية عبر محفظة Bede.",
      },
    },
    {
      name: {
        en: "Atbara & Berber Cement Factories (River Nile State)",
        ar: "مصانع الأسمنت ومواد البناء في عطبرة وبربر (ولاية نهر النيل)",
      },
      hub: {
        en: "Atbara & Berber Industrial Corridor",
        ar: "الممر الصناعي في عطبرة وبربر",
      },
      dmTitle: {
        en: "Plant General Manager / Logistics, Dispatch & IT Director",
        ar: "المدير العام للمصنع / مدير اللوجستيات والتوزيع وتقنية المعلومات",
      },
      painPoint: {
        en: "Cement and building materials are the backbone of Khartoum and eastern reconstruction—factories need heavy truck dispatch tracking, dealer ordering SMS and plant links.",
        ar: "يمثل الأسمنت ومواد البناء عصب إعادة الإعمار في الخرطوم والشرق — وتحتاج المصانع لتتبع شاحنات التوزيع وأتمتة طلبات الوكلاء بالرسائل وربط المصانع.",
      },
      outreachPitch: {
        en: "Pitch Zain Fleet VTS for bulk cement trucks, Private APN between plant and city offices, and automated dealer order/dispatch SMS.",
        ar: "طرح تتبع شاحنات الأسمنت (VTS)، وربط APN خاص بين المصنع والمكاتب، ونظام إشعارات الطلبات والشحن للوكلاء بالرسائل النصية.",
      },
    },
    {
      name: {
        en: "Khartoum State Roads, Bridges & Water Rehabilitation Contractors",
        ar: "مقاولو تأهيل الطرق والجسور والمياه والصرف الصحي بولاية الخرطوم",
      },
      hub: {
        en: "Khartoum, Omdurman & Bahri Rehabilitation Sites",
        ar: "مواقع التأهيل في الخرطوم وأم درمان وبحري",
      },
      dmTitle: {
        en: "Project Director / Heavy Equipment & Fleet Manager",
        ar: "مدير المشروع / مدير الآليات الثقيلة والأسطول",
      },
      painPoint: {
        en: "Excavators, graders and generators deployed across open Khartoum rehabilitation sites are exposed to theft, unauthorized use and fuel pilferage.",
        ar: "تتعرض الحفارات والآليات والمولدات المنتشرة في مواقع تأهيل الخرطوم المفتوحة لمخاطر السرقة والاستخدام غير المصرح به وسحب الوقود.",
      },
      outreachPitch: {
        en: "Deploy Zain IoT heavy-equipment GPS/geofence trackers + Push-to-Talk site radio + Bede subcontractor payouts (screened for compliance).",
        ar: "نشر أجهزة تتبع الآليات الثقيلة والسياج الجغرافي (IoT) مع الاتصال الجماعي للمواقع (Push-to-Talk) وصرف مستحقات المقاولين عبر Bede.",
      },
    },
    {
      name: {
        en: "Port Sudan & Red Sea Warehouse & Commercial Real-Estate Developers",
        ar: "مطورو المستودعات والمجمعات التجارية والإدارية في بورتسودان",
      },
      hub: {
        en: "Port Sudan Logistics & Commercial Expansion Zones",
        ar: "مناطق التوسع اللوجستي والتجاري في بورتسودان",
      },
      dmTitle: {
        en: "Managing Director / Chief Engineer & Facility Manager",
        ar: "المدير التنفيذي / كبير المهندسين ومدير المرافق",
      },
      painPoint: {
        en: "New warehouses and commercial offices in Port Sudan need pre-installed broadband, perimeter CCTV surveillance and smart utility monitoring.",
        ar: "تحتاج المستودعات والمكاتب التجارية الجديدة في بورتسودان إلى إنترنت مؤسسي جاهز ومراقبة مرئية أمنية ومراقبة للمولدات.",
      },
      outreachPitch: {
        en: "Pre-bundle Zain 4G/APN enterprise broadband, VSaaS cloud video surveillance, and generator IoT monitoring into new commercial compounds.",
        ar: "دمج إنترنت الأعمال من زين (4G/APN) وخدمة المراقبة المرئية السحابية (VSaaS) ومراقبة المولدات في المجمعات التجارية الجديدة.",
      },
    },
    {
      name: {
        en: "Sudanese Contractors Association — Rebuilding Consortiums",
        ar: "اتحاد المقاولين السودانيين — تحالفات شركات الهندسة والإعمار",
      },
      hub: {
        en: "Port Sudan & Khartoum",
        ar: "بورتسودان والخرطوم",
      },
      dmTitle: {
        en: "Association Chairman / Operations Directors at Member Engineering Firms",
        ar: "رئيس اتحاد المقاولين / مديرو العمليات في شركات الهندسة الأعضاء",
      },
      painPoint: {
        en: "Engineering firms restarting operations need turnkey mobile site offices, cloud document backup (after losing 2023–2024 blueprints) and crew payroll.",
        ar: "تحتاج شركات الهندسة العائدة للعمل إلى تجهيز سريع للمكاتب الموقعية، ونسخ احتياطي سحابي للمخططات الهندسية، ونظام صرف أجور للورش.",
      },
      outreachPitch: {
        en: "Partner with the Association to offer a standard 'Zain Contractor Ready-Kit': Hybrid Flex SIMs, 4G routers, Zdrop blueprint backup, and Bede payroll.",
        ar: "التعاون مع الاتحاد لتقديم «حقيبة المقاول الجاهزة من زين»: شرائح Hybrid Flex، وراوترات 4G، ونسخ Zdrop الاحتياطي للمخططات، وصرف الأجور عبر Bede.",
      },
    },
  ],
  hospitality: [
    {
      name: {
        en: "Coral Port Sudan & Red Sea Premier Business Hotels",
        ar: "فندق كورال بورتسودان وفنادق الأعمال الكبرى بالبحر الأحمر",
      },
      hub: {
        en: "Port Sudan Waterfront & Business District",
        ar: "الكورنيش ومنطقة الأعمال في بورتسودان",
      },
      dmTitle: {
        en: "Hotel General Manager / IT & Guest Experience Manager",
        ar: "المدير العام للفندق / مدير تقنية المعلومات وتجربة النزلاء",
      },
      painPoint: {
        en: "Hosting top UN officials, diplomats and corporate executives who demand resilient conference Wi-Fi, failover links and instant booking confirmations.",
        ar: "استضافة كبار مسؤولي الأمم المتحدة والدبلوماسيين والتنفيذيين الذين يشترطون إنترنت فائق الاستقرار للقاعات ومساراً احتياطياً وتأكيداً فورياً للحجوزات.",
      },
      outreachPitch: {
        en: "Provide dual-path Zain 4G/APN enterprise backhaul + Franco Pinto captive-portal guest Wi-Fi management + automated booking SMS & Bede POS.",
        ar: "توفير ربط إنترنت مؤسسي مزدوج المسار من زين مع نظام إدارة بوابة واي فاي النزلاء وإشعارات الحجز الآلية بالرسائل ونقاط بيع Bede.",
      },
    },
    {
      name: {
        en: "UN & INGO Diplomatic Guesthouses & Compounds (Port Sudan & Kassala)",
        ar: "استراحات ومجمعات إقامة موظفي الأمم المتحدة والمنظمات والبعثات (بورتسودان وكسلا)",
      },
      hub: {
        en: "Port Sudan (44 hubs) & Kassala (21 hubs) [35]",
        ar: "بورتسودان (44 موقعاً) وكسلا (21 موقعاً) [35]",
      },
      dmTitle: {
        en: "Guesthouse Operator / Compound Facility & ICT Coordinator",
        ar: "مشغل الاستراحة / منسق المرافق والاتصالات بالمجمع السكني",
      },
      painPoint: {
        en: "Shared humanitarian connectivity hubs move to cost-sharing in 2026 [33] and unlicensed Starlink grace period ends Nov 2026 [36]—guesthouses compete on legal, reliable internet.",
        ar: "تحول مراكز الاتصالات المشتركة إلى تشارك التكلفة في 2026 [33] وانتهاء مهلة Starlink في نوفمبر 2026 [36] — ما يجعل الفنادق والاستراحات تتنافس على توفر إنترنت قانوني ومستقر.",
      },
      outreachPitch: {
        en: "Transition compound guesthouses to Zain postpaid broadband + APN failover + licensed VSAT backup before the November deadline.",
        ar: "تحويل استراحات ومجمعات الإقامة إلى إنترنت زين آجل الدفع مع مسار APN احتياطي وقمر صناعي مرخص قبل موعد نوفمبر.",
      },
    },
    {
      name: {
        en: "Khartoum Returning Diplomatic & Executive Guesthouses",
        ar: "فنادق واستراحات البعثات الدبلوماسية ورجال الأعمال العائدة في الخرطوم",
      },
      hub: {
        en: "Khartoum Safe Administrative Districts",
        ar: "الأحياء الإدارية الآمنة في الخرطوم",
      },
      dmTitle: {
        en: "Owner / General Manager & Security/IT Lead",
        ar: "المالك / المدير العام ومسؤول التقنية والأمن",
      },
      painPoint: {
        en: "Embassies and international agencies are scouting secure premises in Khartoum [51] where fixed fibre is still cut and power relies on solar/diesel.",
        ar: "تبحث السفارات والمنظمات عن مقرات واستراحات آمنة في الخرطوم [51] حيث لا تزال الألياف الأرضية متضررة وتعتمد الطاقة على الشمس والديزل.",
      },
      outreachPitch: {
        en: "Equip returning Khartoum guesthouses with the 'Khartoum Return' connectivity kit: 4G CPE routers, APN failover, generator IoT monitoring, and VSaaS security cameras.",
        ar: "تجهيز استراحات الخرطوم العائدة بحقيبة «العودة للخرطوم»: راوترات 4G، مسار APN احتياطي، مراقبة المولدات عبر IoT، وكاميرات المراقبة السحابية.",
      },
    },
    {
      name: {
        en: "Atbara, Dongola & Wad Madani / Kosti Transit Business Hotels",
        ar: "فنادق واستراحات رجال الأعمال والمسافرين في عطبرة ودنقلا وكوستي",
      },
      hub: {
        en: "Atbara, Dongola & Kosti",
        ar: "عطبرة، دنقلا، وكوستي",
      },
      dmTitle: {
        en: "Hotel Owner / Front-Office & Reservations Manager",
        ar: "مالك الفندق / مدير الاستقبال والحجوزات",
      },
      painPoint: {
        en: "High occupancy from traders, engineers and returning families, but manual phone bookings and cash-only reception cause missed reservations.",
        ar: "إشغال مرتفع من التجار والمهندسين والأسر العائدة، لكن الحجز الهاتفي اليدوي والاعتماد على النقد يسببان ضياع الحجوزات.",
      },
      outreachPitch: {
        en: "Fold into the SME 'Business in a Box' offer: Franco Pinto lightweight SMS booking confirmation engine + Bede QR deposit acceptance + guest Wi-Fi.",
        ar: "تضمينها في حزمة «أعمالك في باقة واحدة»: محرك تأكيد الحجوزات بالرسائل النصية وقبول العربون عبر رمز Bede QR وواي فاي النزلاء.",
      },
    },
    {
      name: {
        en: "Port Sudan Conference Halls, Serviced Apartments & Travel Agencies",
        ar: "قاعات المؤتمرات والشقق الفندقية ووكالات السفر والطيران في بورتسودان",
      },
      hub: {
        en: "Port Sudan Airport Corridor & Downtown",
        ar: "ممر مطار بورتسودان ووسط المدينة",
      },
      dmTitle: {
        en: "General Manager / Corporate Events & Ticketing Manager",
        ar: "المدير العام / مدير الفعاليات والحجوزات للشركات",
      },
      painPoint: {
        en: "Port Sudan Airport is Sudan's primary international gateway; travel agencies and serviced apartments need instant flight/booking SMS alerts and corporate billing.",
        ar: "يُعد مطار بورتسودان البوابة الدولية الأولى للبلاد؛ وتحتاج وكالات السفر والشقق الفندقية لإشعارات فورية بالحجوزات وتعديلات الرحلات وفوترة الشركات.",
      },
      outreachPitch: {
        en: "Offer Zain Bulk SMS flight/booking notifications, CCaaS/IVR customer hotline, and Bede Corporate settlement.",
        ar: "تقديم رسائل زين النصية لتأكيد وتحديثات الحجوزات، وخطوط الرد الآلي لخدمة المسافرين، وتسوية مدفوعات الشركات عبر Bede.",
      },
    },
  ],
};
