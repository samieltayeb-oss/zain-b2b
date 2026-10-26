import type { SectorItem, BilingualText, EvidenceClass } from "./b2b-data";
export type { SectorItem };

export const sectorsData: SectorItem[] = [
  {
    rank: 1,
    salesRank: 1,
    strategyRank: 2,
    strategyScore: 4.3,
    tier: 1,
    tierLabel: { en: "Tier 1 · Move now (0–90 days)", ar: "الفئة الأولى · تحرك فوري (0–90 يوماً)" },
    id: "ngos",
    name: { en: "NGOs, UN & Humanitarian", ar: "المنظمات الدولية والأمم المتحدة والعمل الإنساني" },
    leadBundle: {
      en: "A beneficiary SMS/IVR line plus a Bede disbursement pilot for one agency.",
      ar: "خط رسائل ورد آلي (SMS/IVR) للمستفيدين مع مشروع تجريبي لصرف المساعدات عبر محفظة Bede لوكالة واحدة.",
    },
    approachQuote: {
      en: "Reach beneficiaries by SMS and IVR, pay them through Bede, and keep your staff connected—even when data is down.",
      ar: "تواصلوا مع المستفيدين عبر الرسائل النصية والرد الآلي، واصرفوا المساعدات عبر محفظة Bede، وأبقوا فرقكم متصلة حتى عند انقطاع الإنترنت.",
    },
    route: {
      en: "Zain enterprise sales through ETC, Logistics Cluster and cash working-group forums.",
      ar: "مبيعات المؤسسات في زين عبر منتديات قطاع الاتصالات في الطوارئ (ETC) ومجموعة اللوجستيات ومجموعات العمل النقدي.",
    },
    buyer: {
      en: "ICT Manager, Logistics Coordinator and Country Operations Manager at UN agencies and INGOs (WFP, IOM, UNICEF, IMC, NRC).",
      ar: "مدير تقنية المعلومات، منسق اللوجستيات، ومدير العمليات القطرية في وكالات الأمم المتحدة والمنظمات الدولية (WFP، IOM، UNICEF، IMC، NRC).",
    },
    marketState: [
      {
        text: {
          en: "33.7M people in need; the 2026 plan requires US$2.87bn (14% funded); 170+ organisations operating across Sudan.",
          ar: "33.7 مليون شخص بحاجة للمساعدة؛ تتطلب خطة 2026 نحو 2.87 مليار دولار (مموّلة بنسبة 14%)؛ وتعمل أكثر من 170 منظمة في البلاد.",
        },
        evidence: "VERIFIED",
        citation: "[26]",
      },
      {
        text: {
          en: "Emergency Telecommunications Cluster (ETC) had no 2026 funding in Jan 2026 and moved hubs to a cost-sharing, on-demand model.",
          ar: "أعلن قطاع الاتصالات في الطوارئ (ETC) في يناير 2026 عدم توفر تمويل لعام 2026، وحوّل مراكزه إلى نموذج تشارك التكلفة حسب الطلب.",
        },
        evidence: "VERIFIED",
        citation: "[33]",
      },
      {
        text: {
          en: "TPRA ended Thuraya services from 1 Feb 2026. Humanitarian Starlink users must register kits and move to enterprise plans before the grace period ends in November 2026.",
          ar: "أنهى جهاز تنظيم الاتصالات خدمات «الثريا» منذ 1 فبراير 2026، ويجب على مستخدمي Starlink في القطاع الإنساني تسجيل الأجهزة والانتقال لباقات المؤسسات قبل انتهاء المهلة في نوفمبر 2026.",
        },
        evidence: "VERIFIED",
        citation: "[33,36]",
      },
      {
        text: {
          en: "Shared humanitarian telecom service supported ~1,700 users at 70 locations (44 in Port Sudan, 21 in Kassala) in Aug 2026; agencies are returning offices to Khartoum.",
          ar: "دعمت خدمة الاتصالات الإنسانية المشتركة نحو 1,700 مستخدم في 70 موقعاً (44 في بورتسودان و21 في كسلا) في أغسطس 2026؛ مع بدء انتقال مكاتب الوكالات إلى الخرطوم.",
        },
        evidence: "VERIFIED",
        citation: "[35,51]",
      },
    ],
    pains: [
      {
        en: "Connectivity budgets have shifted from the central cluster to each individual agency just as satellite options close.",
        ar: "انتقلت أعباء ميزانيات الاتصال من المظلة المشتركة إلى ميزانية كل منظمة على حدة بالتزامن مع إغلاق خيارات الأقمار الصناعية غير المرخصة.",
      },
      {
        en: "Reaching beneficiaries and confirming cash aid delivery when mobile data and WhatsApp calls fail.",
        ar: "صعوبة الوصول للمستفيدين وتأكيد استلام المساعدات النقدية عند انقطاع بيانات الهاتف أو تقييد مكالمات واتساب.",
      },
      {
        en: "Fast staff connectivity in newly re-opened Khartoum premises and clean audit trails for international donors.",
        ar: "الحاجة لربط سريع للموظفين في المقرات العائدة بالخرطوم، وتوفير مسار تدقيق ومطابقة واضح للمانحين الدوليين.",
      },
    ],
    zainOffers: [
      {
        en: "Bede Corporate bulk fund disbursement and salary distribution—already explicitly marketed 'for NGOs'.",
        ar: "خدمة Bede Corporate لصرف المساعدات النقدية والرواتب بالجملة — المسوّقة رسمياً للمنظمات.",
      },
      {
        en: "Bulk SMS, Short Code, IVR and Auto-Dialer for beneficiary feedback and accountability hotlines.",
        ar: "الرسائل النصية الجماعية، الرقم المختصر، والرد الآلي (IVR) لخطوط المساءلة وتلقي ملاحظات المستفيدين.",
      },
      {
        en: "Staff SIM pools on Zain Hybrid or Business Flex; APN and 4G data cards with failover for compounds and guesthouses.",
        ar: "مجموعات شرائح الموظفين عبر باقات Zain Hybrid أو Business Flex؛ ودوائر APN وشرائح بيانات مع مسار احتياطي للمقرات والاستراحات.",
      },
      {
        en: "Fleet Management for field vehicles; Push-to-Talk once published.",
        ar: "إدارة الأساطيل للمركبات الميدانية؛ وخدمة الاتصال الجماعي الفوري (Push-to-Talk) فور إطلاقها.",
      },
    ],
    whyItWorks: {
      en: "Three facts land in the same quarter: the cluster's funding is gone, Thuraya is gone, and the Starlink grace period ends in November. Every agency must now buy licensed connectivity and messaging on its own budget, making Q4 2026 the decisive window.",
      ar: "ثلاثة متغيرات حاسمة تجتمع في الربع نفسه: انتهاء تمويل الاتصالات المشترك، وتوقف الثريا، وانتهاء مهلة Starlink في نوفمبر. باتت كل وكالة ملزمة بشراء خدمات اتصال ورسائل مرخصة من ميزانيتها الخاصة، مما يجعل الربع الرابع من 2026 نافذة الفرصة الحاسمة.",
    },
    whyZain: {
      en: "Largest licensed operator (12.4M customers), restored coverage in the SAF-held hubs where agencies operate, and SIMs, messaging and a licensed corporate wallet under one contract.",
      ar: "أكبر مشغل مرخص (12.4 مليون مشترك)، وتغطية مستعادة في المراكز الآمنة التي تعمل بها الوكالات، مع توفير الشرائح والرسائل والمحفظة المؤسسية المرخصة في عقد واحد.",
    },
    francoPintoAdds: [
      { en: "Reconciliation and donor reporting portal for Bede disbursements, in Arabic and English.", ar: "بوابة مطابقة وتقارير للمانحين لمدفوعات Bede باللغتين العربية والإنجليزية." },
      { en: "Beneficiary registration with SMS and USSD fallback; interactive IVR feedback lines.", ar: "تسجيل المستفيدين مع مسار احتياطي عبر SMS وUSSD؛ وخطوط رد آلي تفاعلية للمساءلة." },
      { en: "Offline data sync and integration with agency beneficiary management systems.", ar: "مزامنة البيانات دون اتصال والربط المباشر مع أنظمة إدارة المستفيدين لدى الوكالات." },
      { en: "Custom fleet visibility and safety dashboards.", ar: "لوحات متابعة مخصصة لحركة وسلامة الأساطيل الميدانية." },
    ],
    flags: [
      { en: "UN procurement is formal: tenders, vendor rosters, strict data-protection and neutrality rules.", ar: "مشتريات الأمم المتحدة رسمية وتخضع للعطاءات وسجلات الموردين وقواعد صارمة لحماية البيانات والحياد." },
      { en: "MTN's MoMo was cited by the World Bank in 2025 as the incumbent humanitarian mobile-money provider; Bede must displace it with superior reporting and reach.", ar: "وصفت وثيقة للبنك الدولي عام 2025 محفظة MoMo من MTN بأنها المزود السائد في العمل الإنساني؛ لذا تحتاج Bede لتفوق واضح في التقارير والتغطية." },
      { en: "Every payout requires sanctions and KYC screening; agency policies on operating areas differ.", ar: "تتطلب كل عملية صرف فحص العقوبات واعرف عميلك (KYC)؛ مع مراعاة اختلاف سياسات الوكالات حسب مناطق العمل." },
    ],
  },
  {
    rank: 2,
    salesRank: 2,
    strategyRank: 1,
    strategyScore: 4.3,
    tier: 1,
    tierLabel: { en: "Tier 1 · Move now (0–90 days)", ar: "الفئة الأولى · تحرك فوري (0–90 يوماً)" },
    id: "banking",
    name: { en: "Banking & Fintech", ar: "المصارف والتقنية المالية (Fintech)" },
    leadBundle: {
      en: "An OTP SMPP pilot with one bank, and dual-path APN for one POS or ATM estate.",
      ar: "مشروع تجريبي لربط رسائل التحقق (OTP SMPP) مع مصرف واحد، ومسار APN مزدوج لشبكة نقاط بيع أو صراف آلي.",
    },
    approachQuote: {
      en: "Transaction messaging and terminal connectivity that keep running through disruption.",
      ar: "رسائل معاملات فورية وربط لأجهزة الصراف ونقاط البيع يستمر في العمل رغم الانقطاعات.",
    },
    route: {
      en: "Zain key-account managers, with Franco Pinto in the technical architecture workshops.",
      ar: "مديرو الحسابات الكبرى في زين، بمشاركة Franco Pinto في ورش العمل الفنية والتكامل.",
    },
    buyer: {
      en: "Head of Digital Channels, CIO and Head of Payments at banks; heads of operations at microfinance institutions and wallet operators.",
      ar: "رئيس القنوات الرقمية، رئيس تقنية المعلومات (CIO)، ورئيس المدفوعات في المصارف؛ ومديرو العمليات في مؤسسات التمويل الأصغر والمحافظ الرقمية.",
    },
    marketState: [
      {
        text: {
          en: "Central bank restored the national payment switch in August 2026, connecting Omdurman National Bank first; Bank of Khartoum reopened Omdurman and corporate branches; ONB reports 22 operating branches in Khartoum state.",
          ar: "أعاد بنك السودان المركزي تشغيل المقسم القومي للمدفوعات في أغسطس 2026 وربط بنك أم درمان الوطني أولاً؛ وأعاد بنك الخرطوم افتتاح فروع بأم درمان وفرع للشركات؛ ويشغّل بنك أم درمان 22 فرعاً بولاية الخرطوم.",
        },
        evidence: "REPORTED",
        citation: "[52]",
      },
      {
        text: {
          en: "Eight e-money issuers are licensed by CBOS: Bede (Zain), MoMo (MTN), SAH (Sudani + Africa Gulf Bank, 867k+ users), SudanPay, Cashi, Bravo, Zikher and Nil Pay.",
          ar: "ثماني جهات مرخصة لإصدار النقود الإلكترونية من بنك السودان: Bede (زين)، MoMo (MTN)، ساه (سوداني مع بنك الخليج أفريقيا – أكثر من 867 ألف مستخدم)، سودان باي، كاشي، برافو، ذخر، ونيل باي.",
        },
        evidence: "VERIFIED",
        citation: "[12,18]",
      },
      {
        text: {
          en: "Bank of Khartoum's Bankak app reached ~7M users with an 85% surge in activations after the war began.",
          ar: "وصل تطبيق «بنكك» التابع لبنك الخرطوم إلى نحو 7 ملايين مستخدم مع ارتفاع بنسبة 85% في التفعيلات منذ اندلاع الحرب.",
        },
        evidence: "REPORTED",
        citation: "[53]",
      },
      {
        text: {
          en: "The monetary system is split: new banknotes are valid only in SAF-held areas, while a parallel central bank was announced in Nyala in May 2026.",
          ar: "انقسام النظام النقدي: الفئات النقدية الجديدة سارية في مناطق سيطرة الحكومة، بينما أُعلن عن كيان موازٍ في نيالا في مايو 2026.",
        },
        evidence: "REPORTED",
        citation: "[22]",
      },
    ],
    pains: [
      {
        en: "The February 2024 blackout halted electronic payments entirely—operational continuity is now a board-level priority.",
        ar: "أدى انقطاع فبراير 2024 إلى توقف المدفوعات الإلكترونية، ما جعل استمرارية الخدمة أولوية قصوى لدى مجالس إدارات المصارف.",
      },
      {
        en: "Reliable, low-latency OTP delivery for mobile banking apps experiencing heavy user growth.",
        ar: "ضمان وصول رسائل التحقق (OTP) بسرعة واعتمادية للتطبيقات المصرفية التي تشهد نمواً هائلاً في الاستخدام.",
      },
      {
        en: "ATM and POS uptime as branches reopen in Khartoum, Omdurman and eastern commercial hubs.",
        ar: "جاهزية واستمرارية اتصال أجهزة الصراف الآلي ونقاط البيع مع إعادة افتتاح الفروع في الخرطوم وأم درمان ومدن الشرق.",
      },
      {
        en: "Heavy contact-centre load from returning customers resetting accounts and credentials.",
        ar: "ضغط كبير على مراكز الاتصال من العملاء العائدين لتحديث حساباتهم واستعادة بيانات الدخول.",
      },
    ],
    zainOffers: [
      {
        en: "SMPP, Bulk SMS and Short Code for high-priority OTP and transaction alerts.",
        ar: "ربط SMPP والرسائل النصية والأرقام المختصرة لرسائل التحقق (OTP) وإشعارات المعاملات الفورية.",
      },
      {
        en: "APN private data for branches, ATMs and POS (already published by Zain), architected with a second failover path.",
        ar: "دوائر بيانات APN الخاصة للفروع والصرافات ونقاط البيع (ضمن حالات الاستخدام المنشورة لدى زين) مع تصميم مسار احتياطي ثانٍ.",
      },
      {
        en: "IVR and CCaaS; ZainCloud; Zdrop backup once published.",
        ar: "الرد الآلي التفاعلي ومراكز الاتصال السحابية (CCaaS)؛ وسحابة زين؛ وخدمة Zdrop للنسخ الاحتياطي فور نشرها.",
      },
      {
        en: "Bede corporate payouts and collections; Bill Payment and Bulk Recharge.",
        ar: "التحصيل والصرف المؤسسي عبر Bede؛ وسداد الفواتير وشحن الرصيد الجماعي.",
      },
    ],
    whyItWorks: {
      en: "Cash is scarce and the currency is depreciating rapidly, making digital money an everyday necessity while every bank reconnects to the restored national switch.",
      ar: "شح النقد الورقي وتراجع العملة يجعلان الدفع الرقمي ضرورة يومية، في وقت تعيد فيه جميع المصارف والمحافظ الارتباط بالمقسم القومي للمدفوعات.",
    },
    whyZain: {
      en: "Zain owns the SIM base, the SMS rails and a licensed Visa-partnered wallet, and already supports ATM-to-data-centre and POS APN use cases.",
      ar: "تمتلك زين أكبر قاعدة شرائح ومسارات الرسائل ومحفظة مرخصة بالشراكة مع Visa، وتدعم فعلياً ربط الصرافات ونقاط البيع بمراكز بيانات المصارف عبر APN.",
    },
    francoPintoAdds: [
      { en: "SMPP and API integration middleware with core banking and wallet platforms.", ar: "طبقة ربط وتكامل برمجي (SMPP وواجهات API) مع الأنظمة المصرفية الأساسية ومنصات المحافظ." },
      { en: "Dual-path APN resilience architecture for POS and ATM estates.", ar: "تصميم معماري مزدوج المسار عبر APN لضمان استمرارية نقاط البيع والصرافات الآلية." },
      { en: "Real-time delivery-receipt monitoring and financial reconciliation dashboards.", ar: "لوحات مراقبة لحظية لإشعارات تسليم الرسائل ومطابقة المعاملات المالية." },
      { en: "Automated bilingual IVR banking menus to offload call centres.", ar: "قوائم رد آلي مصرفية ذكية باللغتين لتخفيف الضغط عن مراكز الاتصال." },
    ],
    flags: [
      { en: "Bede competes with bank wallets, MoMo and SAH—keep connectivity and SMPP messaging offers strictly neutral so rival wallets buy from Zain.", ar: "تنافس محفظة Bede محافظ البنوك وMoMo و«ساه» — لذا يجب إبقاء عروض الربط والرسائل النصية محايدة تماماً لتشتريها المحافظ المنافسة بثقة." },
      { en: "Central bank KYC rules and international sanctions apply: screen bank ownership (e.g., Al Khaleej Bank is on Canada's Sudan sanctions list [65]).", ar: "تطبق قواعد بنك السودان وفحص العقوبات الدولية: يجب فحص هيكل ملكية كل مصرف (مثلاً: بنك الخليج مدرج في قائمة العقوبات الكندية [65])." },
    ],
  },
  {
    rank: 3,
    salesRank: 3,
    strategyRank: 5,
    strategyScore: 3.3,
    tier: 2,
    tierLabel: { en: "Tier 2 · Build next (3–6 months)", ar: "الفئة الثانية · التوسع التالي (3–6 أشهر)" },
    id: "logistics",
    name: { en: "Logistics, Ports & Transport", ar: "اللوجستيات والموانئ والنقل" },
    leadBundle: {
      en: "A small fleet pilot plus automated delivery SMS for one transport operator.",
      ar: "مشروع تجريبي لتتبع أسطول صغير مع رسائل إشعارات تسليم آلية لأحد مشغلي النقل.",
    },
    approachQuote: {
      en: "Track every truck, and tell customers automatically.",
      ar: "تتبّع كل شاحنة، وأبلغ عملاءك بموقع شحناتهم تلقائياً.",
    },
    route: {
      en: "Zain enterprise sales with Port Sudan fleet operators, freight forwarders and exporters.",
      ar: "مبيعات المؤسسات في زين بالتواصل المباشر مع مشغلي الأساطيل ووكلاء الشحن والمصدّرين في بورتسودان.",
    },
    buyer: {
      en: "Fleet Manager, Logistics Director and Operations IT at trucking firms, freight forwarders, exporters and port operators.",
      ar: "مدير الأسطول، مدير اللوجستيات، ومسؤول تقنية العمليات في شركات النقل البري والتخليص الجمركي والتصدير.",
    },
    marketState: [
      {
        text: {
          en: "Port Sudan is the principal conduit of Sudan's foreign trade; UNDP reports import delays and inland corridor bottlenecks.",
          ar: "تُعد بورتسودان الشريان الرئيسي للتجارة الخارجية للسودان؛ مع تسجيل برنامج الأمم المتحدة الإنمائي لتأخيرات في الاستيراد ورسوم عبور داخلية.",
        },
        evidence: "VERIFIED",
        citation: "[25,27]",
      },
      {
        text: {
          en: "In January 2026 Zain and Sudan Customs signed a strategic agreement with Jointech on smart customs and IoT cargo supervision.",
          ar: "وقعت زين وقوات الجمارك السودانية في يناير 2026 اتفاقية استراتيجية مع شركة Jointech للجمارك الذكية ومراقبة الشحنات عبر إنترنت الأشياء (IoT).",
        },
        evidence: "VERIFIED",
        citation: "[14]",
      },
      {
        text: {
          en: "Logistics Cluster operates from Port Sudan and Khartoum; networks work along Port Sudan, Kassala, Gedaref, Atbara, Damazine and Kosti.",
          ar: "تعمل مجموعة اللوجستيات انطلاقاً من بورتسودان والخرطوم؛ وتتوفر تغطية الشبكة على طول مسارات بورتسودان وكسلا والقضارف وعطبرة والدمازين وكوستي.",
        },
        evidence: "VERIFIED",
        citation: "[36]",
      },
    ],
    pains: [
      { en: "Route security, delays and cargo theft along the Port Sudan–Atbara–Khartoum and eastern corridors.", ar: "أمن الطرق والتأخير ومخاطر سرقة البضائع على ممرات بورتسودان – عطبرة – الخرطوم والشرق." },
      { en: "Fuel pilferage and driver accountability over long-haul trips.", ar: "مراقبة استهلاك الوقود ومساءلة السائقين في الرحلات الطويلة." },
      { en: "Merchants and aid agencies constantly calling to ask where their cargo is.", ar: "اتصالات مستمرة من التجار والمنظمات للاستفسار عن موقع الشحنات ومواعيد الوصول." },
    ],
    zainOffers: [
      { en: "Fleet Management (powered by Zain / Bashasha) and published VTS data bundles.", ar: "خدمة إدارة الأساطيل (بشراكة بشاشة وبدعم زين) وباقات بيانات تتبع المركبات (VTS)." },
      { en: "IoT and private APN for container yards and warehouses; VSaaS once published.", ar: "حلول IoT ودوائر APN للساحات والمستودعات؛ والمراقبة المرئية (VSaaS) فور نشرها." },
      { en: "Bulk SMS automated delivery notices; CCaaS for dispatch; Bede driver and fuel payouts.", ar: "رسائل نصية آلية لإشعارات الشحن؛ ومراكز اتصال للتوجيه؛ وصرف مخصصات السائقين والوقود عبر Bede." },
    ],
    whyItWorks: {
      en: "Almost everything entering Sudan moves by truck from Port Sudan, and commercial demand is shifting back toward Khartoum. Visibility directly cuts fuel and cargo losses.",
      ar: "معظم الواردات إلى السودان تنتقل بالشاحنات من بورتسودان، ومع عودة النشاط تدريجياً للخرطوم فإن الرؤية اللحظية لحركة الشاحنات توفر وفورات مالية مباشرة.",
    },
    whyZain: {
      en: "Zain already sells fleet products, its eastern corridor coverage is strongest, and the Customs/Jointech deal places Zain directly inside the trade flow.",
      ar: "تبيع زين بالفعل حلول الأساطيل، وتمتلك أقوى تغطية على الممر الشرقي، كما أن اتفاقية الجمارك/Jointech تضعها في قلب تدفق التجارة.",
    },
    francoPintoAdds: [
      { en: "Integration with customer transport-management systems (TMS) and ERP.", ar: "الربط البرمجي مع أنظمة إدارة النقل (TMS) وتخطيط الموارد لدى العملاء." },
      { en: "Automated milestone SMS alerts and fuel/driver performance analytics.", ar: "إشعارات رسائل نصية تلقائية عند نقاط العبور وتحليلات كفاءة الوقود والسائقين." },
      { en: "Store-and-forward hardware configurations for coverage dead zones.", ar: "ضبط أجهزة التتبع بخاصية التخزين والإرسال التلقائي لتجاوز مناطق انقطاع التغطية بين المدن." },
    ],
    flags: [
      { en: "Complement the Jointech customs layer—do not compete with it.", ar: "التكامل مع منظومة Jointech الجمركية وعدم منافستها." },
      { en: "Ports Engineering Company Ltd (Port Sudan state-owned firm) was designated by OFAC on 26 Jun 2026 [64]—screen every port and logistics counterparty.", ar: "أُدرجت شركة هندسة الموانئ المحدودة في بورتسودان ضمن عقوبات OFAC في 26 يونيو 2026 [64] — يجب فحص كل طرف تعاقدي في قطاع الموانئ واللوجستيات." },
    ],
  },
  {
    rank: 4,
    salesRank: 4,
    strategyRank: 4,
    strategyScore: 3.7,
    tier: 2,
    tierLabel: { en: "Tier 2 · Build next (3–6 months)", ar: "الفئة الثانية · التوسع التالي (3–6 أشهر)" },
    id: "retail-smes",
    name: { en: "Retail & SMEs (incl. Relocated Businesses)", ar: "التجزئة والشركات الصغيرة والمتوسطة (بما فيها المنتقلة)" },
    leadBundle: {
      en: "A Business Flex package with Bede POS/QR acceptance, sold through Authorized Sales Partners.",
      ar: "باقة Business Flex مدمجة مع قبول الدفع عبر رمز QR ونقاط بيع Bede، تُباع عبر وكلاء المبيعات المعتمدين.",
    },
    approachQuote: {
      en: "Get paid and reach your customers from one Zain account.",
      ar: "اقبل مدفوعاتك وتواصل مع عملائك من حساب زين واحد.",
    },
    route: {
      en: "Zain dealers and Authorized Sales Partners across Port Sudan, Kassala, Atbara and Omdurman/Khartoum markets.",
      ar: "وكلاء زين وشركاء المبيعات المعتمدون في أسواق بورتسودان وكسلا وعطبرة وأم درمان والخرطوم.",
    },
    buyer: {
      en: "Business owner or general manager; wholesale and retail traders; wallet and Bankak merchants.",
      ar: "صاحب العمل أو المدير العام؛ تجار الجملة والتجزئة؛ والتجار المتعاملون عبر المحافظ والتطبيقات المصرفية.",
    },
    marketState: [
      {
        text: {
          en: "Cash shortages push everyday buyers to digital apps, while SMEs keep operating on solar power (solar imports rose 6x in the year to June 2025).",
          ar: "يدفع شح النقد العملاء للتطبيقات الرقمية، بينما تحافظ الشركات الصغيرة على عملها بالطاقة الشمسية (تضاعفت واردات الألواح الشمسية 6 مرات حتى يونيو 2025).",
        },
        evidence: "VERIFIED",
        citation: "[22,28,31]",
      },
      {
        text: {
          en: "Zain publishes prepaid Business Flex tiers from daily MIN packs to MAX+ (100GB) and operates an Authorized Sales Partner network.",
          ar: "توفر زين باقات Business Flex مسبقة الدفع من الباقة اليومية المصغرة حتى باقة MAX+ (100 جيجابايت) وتدير شبكة وكلاء مبيعات معتمدين.",
        },
        evidence: "VERIFIED",
        citation: "[1,3]",
      },
    ],
    pains: [
      { en: "Accepting customer payments reliably without physical banknotes.", ar: "قبول مدفوعات العملاء بسهولة وموثوقية في ظل غياب الأوراق النقدية." },
      { en: "Letting existing customers know their new location after relocating to Port Sudan, the east or returning to Khartoum.", ar: "إبلاغ العملاء بالموقع الجديد للنشاط التجاري بعد الانتقال إلى بورتسودان أو الشرق أو العودة إلى الخرطوم." },
      { en: "Predictable staff mobile data costs and simple stock/sales tracking.", ar: "ضبط تكلفة اتصالات وإنترنت الموظفين ومتابعة المبيعات والمخزون بطريقة مبسطة." },
    ],
    zainOffers: [
      { en: "'Business in a Box': Business Flex or Hybrid SIMs, Bede merchant QR/POS, Bulk SMS and Advertising Solutions.", ar: "حزمة «أعمالك في باقة واحدة»: شرائح Business Flex أو Hybrid، وقبول الدفع عبر Bede QR/POS، والرسائل الإعلانية." },
      { en: "Blue Enterprise ERP for growing mid-sized firms; Call Signature once published.", ar: "نظام Blue Enterprise ERP للشركات النامية؛ وخدمة تعريف هوية المتصل (Call Signature) فور نشرها." },
    ],
    whyItWorks: {
      en: "Small firms buy fast when the bundle is simple and sold by a nearby dealer. Zain's retail footprint turns this into a high-volume channel play.",
      ar: "تشتري الشركات الصغيرة بسرعة عندما تكون الحزمة واضحة ويباعها وكيل قريب في السوق، مما يحول شبكة وكلاء زين إلى محرك مبيعات واسع الانتشار.",
    },
    whyZain: {
      en: "No competitor combines SIMs, cashless merchant payments and targeted SMS marketing in one account at Zain's 12.4M subscriber scale.",
      ar: "لا يوجد منافس يجمع الشرائح، وقبول مدفوعات التجار، والتسويق بالرسائل النصية في حساب واحد بحجم قاعدة مشتركي زين البالغة 12.4 مليون مشترك.",
    },
    francoPintoAdds: [
      { en: "Lightweight mobile POS and inventory app with a built-in SMS marketing connector.", ar: "تطبيق خفيف لنقاط البيع والمخزون مرتبط مباشرة بأداة إرسال عروض الرسائل النصية." },
      { en: "Automated Arabic WhatsApp text front desk (text-only, resilient to voice call restrictions).", ar: "رد آلي نصي باللغة العربية عبر واتساب لخدمة العملاء (نصي فقط، متوافق مع قيود المكالمات)." },
      { en: "Turnkey partner training and onboarding kit for Zain dealers.", ar: "حقيبة تدريب وتأهيل جاهزة لوكلاء مبيعات زين." },
    ],
    flags: [
      { en: "Low ticket size and higher churn; SDG prices lose value monthly so use short prepaid cycles.", ar: "متوسط قيمة اشتراك منخفض وتذبذب أعلى؛ كما أن التسعير بالجنيه يفقد قيمته شهرياً مما يستدعي دورات دفع مسبقة قصيرة." },
      { en: "Design co-selling rules carefully to avoid channel conflict with Zain's own dealers.", ar: "تنظيم قواعد البيع المشترك بدقة لتجنب أي تضارب مع وكلاء زين الحاليين." },
    ],
  },
  {
    rank: 5,
    salesRank: 12,
    strategyRank: 3,
    strategyScore: 4.0,
    tier: 2,
    tierLabel: { en: "Tier 2 · Zain-led track (3–6 months)", ar: "الفئة الثانية · مسار بقيادة زين مباشرة (3–6 أشهر)" },
    id: "government",
    name: { en: "Government & Public Sector", ar: "القطاع الحكومي والخدمة العامة" },
    leadBundle: {
      en: "A citizen notification & fee-collection short code for one additional agency, modelled on Eisali.",
      ar: "رقم مختصر لإشعارات المواطنين والتحصيل الإلكتروني لجهة حكومية إضافية، على غرار نموذج «إيصالي».",
    },
    approachQuote: {
      en: "Reliable citizen notification and collection, live in weeks.",
      ar: "إشعارات موثوقة للمواطنين وتحصيل إلكتروني للإيرادات، جاهز للتشغيل خلال أسابيع.",
    },
    route: {
      en: "Strictly through Zain's government-relations team; Franco Pinto supports technical delivery in the background.",
      ar: "حصرياً عبر فريق العلاقات الحكومية والقطاع العام في زين؛ بينما تقدم Franco Pinto الدعم الفني والتكاملي في الخلفية.",
    },
    buyer: {
      en: "Ministry IT Directors and Digital Transformation Leads; state governments of Red Sea, Kassala, Gedaref, River Nile, Northern, White Nile and Khartoum.",
      ar: "مديرو تقنية المعلومات والتحول الرقمي بالوزارات؛ وحكومات ولايات البحر الأحمر وكسلا والقضارف ونهر النيل والشمالية والنيل الأبيض والخرطوم.",
    },
    marketState: [
      {
        text: {
          en: "Government formally returned to Khartoum on 11 Jan 2026; Cabinet stressed 'digital transformation across all state institutions' on 5 Mar 2026.",
          ar: "عادت الحكومة رسمياً إلى الخرطوم في 11 يناير 2026؛ وأكد مجلس الوزراء في 5 مارس 2026 أولوية «التحول الرقمي في كافة مؤسسات الدولة».",
        },
        evidence: "VERIFIED",
        citation: "[48]",
      },
      {
        text: {
          en: "On 4 Oct 2026 the Ministry of Finance signed an SMS agreement with Zain for the state Eisali e-collection system.",
          ar: "وقعت وزارة المالية في 4 أكتوبر 2026 اتفاقية خدمات رسائل نصية مع زين لتشغيل منظومة التحصيل الإلكتروني الحكومي «إيصالي».",
        },
        evidence: "VERIFIED",
        citation: "[13]",
      },
      {
        text: {
          en: "Government revenue is only 4.0% of GDP (World Bank), making revenue collection systems an urgent fiscal priority.",
          ar: "تبلغ الإيرادات الحكومية 4.0% فقط من الناتج المحلي الإجمالي (البنك الدولي)، ما يجعل أنظمة التحصيل الإلكتروني أولوية مالية قصوى.",
        },
        evidence: "VERIFIED",
        citation: "[20]",
      },
    ],
    pains: [
      { en: "Notifying citizens and collecting state fees reliably without cash leakage.", ar: "إشعار المواطنين وتحصيل الرسوم الحكومية بموثوقية ودون تسرب نقدي." },
      { en: "Operating from hosted or temporary premises in Khartoum (e.g., seven ministries hosted at SMRC headquarters) with no fixed fibre.", ar: "العمل من مقرات مستضافة أو مؤقتة في الخرطوم (مثل استضافة 7 وزارات في مقر الشركة السودانية للموارد المعدنية) دون خطوط أرضية ثابتة." },
      { en: "Rebuilding records and continuity after 2023–2024 infrastructure losses.", ar: "استعادة السجلات واستمرارية الخدمات بعد الأضرار التي لحقت بالبنية التحتية خلال 2023–2024." },
    ],
    zainOffers: [
      { en: "The Eisali template: notification and e-collection short codes for tax, customs, passports and civil registry.", ar: "نموذج «إيصالي»: أرقام مختصرة للإشعارات والتحصيل للضرائب والجمارك والجوازات والسجل المدني." },
      { en: "Citizen IVR and CCaaS; Bill Payment and Bede collection.", ar: "أنظمة الرد الآلي ومراكز خدمة المواطن؛ وسداد الفواتير والتحصيل عبر Bede." },
      { en: "'Khartoum Return' office kit: data cards, APN, ZainCloud, plus UCaaS and Zdrop once published.", ar: "تجهيز مكاتب «العودة للخرطوم»: شرائح بيانات، دوائر APN، سحابة زين، وخدمات UCaaS وZdrop فور نشرها." },
    ],
    whyItWorks: {
      en: "A live reference deal now exists with the Ministry of Finance. Every fee-collecting agency faces the exact same challenge—replicating Eisali is much faster than pitching from scratch.",
      ar: "يوجد الآن عقد مرجعي حي مع وزارة المالية؛ وكل هيئة حكومية محصّلة للرسوم تواجه التحدي ذاته، وتكرار نموذج «إيصالي» الناجح أسرع بكثير من بيع فكرة جديدة.",
    },
    whyZain: {
      en: "Zain holds the Eisali and Customs references plus documented ministerial engagement in Khartoum (Apr 2026) and Kuwait (Aug 2026).",
      ar: "تمتلك زين مرجعية «إيصالي» والجمارك إلى جانب لقاءات وزارية موثقة في الخرطوم (أبريل 2026) والكويت (أغسطس 2026).",
    },
    francoPintoAdds: [
      { en: "Turnkey e-service citizen portals with SMS and IVR integration.", ar: "بوابات خدمات إلكترونية جاهزة للمواطنين مربوطة بالرسائل النصية والرد الآلي." },
      { en: "Automated reconciliation of digital collections against agency ledgers.", ar: "مطابقة آلية للمتحصلات الرقمية مع دفاتر الحسابات الحكومية." },
      { en: "Reusable onboarding templates that make each subsequent agency faster to launch.", ar: "قوالب تقنية قابلة لإعادة الاستخدام لتسريع تدشين كل جهة حكومية تالية." },
    ],
    flags: [
      { en: "Slow payment cycles in depreciating SDG.", ar: "بطء دورات السداد الحكومي وبالجنيه السوداني." },
      { en: "Sanctions compliance: designated individuals sit in the SAF-aligned administration [64,65]; counsel review required so no benefit reaches a listed person.", ar: "الامتثال للعقوبات: وجود أشخاص مدرجين في قوائم العقوبات ضمن الإدارة الحكومية [64,65] يستوجب مراجعة قانونية دقيقة لضمان عدم وصول أي منفعة لجهة مدرجة." },
      { en: "Strictly civilian e-services only—stay completely out of anything defence or security-related.", ar: "التركيز الحصري على الخدمات المدنية الخدمية، والابتعاد التام عن أي نشاط ذي صلة بالدفاع أو الأمن." },
    ],
  },
  {
    rank: 6,
    salesRank: 5,
    strategyRank: 6,
    strategyScore: 3.3,
    tier: 3,
    tierLabel: { en: "Tier 3 · Programme-led (6–12 months)", ar: "الفئة الثالثة · عبر البرامج والمنظمات (6–12 شهراً)" },
    id: "health",
    name: { en: "Health", ar: "القطاع الصحي" },
    leadBundle: {
      en: "An SMS appointment/vaccination reminder pilot with one NGO health programme or private hospital chain.",
      ar: "مشروع تجريبي لتذكيرات المواعيد والتطعيم عبر الرسائل النصية مع برنامج صحي تابع لمنظمة أو مجموعة مستشفيات خاصة.",
    },
    approachQuote: {
      en: "Reminders and cold-chain alerts that work on any phone.",
      ar: "تذكيرات للمرضى وتنبيهات لسلسلة التبريد تعمل على أي هاتف.",
    },
    route: {
      en: "NGO health partners (WHO, UNICEF, IMC) and private hospital/diagnostic chains in Port Sudan and Khartoum.",
      ar: "شركاء البرامج الصحية بالمنظمات (WHO، UNICEF، IMC) وشبكات المستشفيات والمعامل الخاصة في بورتسودان والخرطوم.",
    },
    buyer: {
      en: "Hospital Director, private hospital and pharmacy chain owners, NGO Health Programme Managers, Federal Ministry of Health.",
      ar: "مدير المستشفى، ملاك سلاسل المستشفيات والصيدليات الخاصة، مديرو البرامج الصحية بالمنظمات، ووزارة الصحة الاتحادية.",
    },
    marketState: [
      {
        text: {
          en: "Government reports ~75% of health facilities resumed operations by July 2026; WHO logged 153 suspended and 182 reduced-capacity facilities across 13 states in Aug 2026.",
          ar: "تشير التقارير الحكومية لعودة نحو 75% من المرافق الصحية للعمل بحلول يوليو 2026؛ بينما رصدت منظمة الصحة العالمية توقف 153 مرفقاً وعمل 182 بطاقة منخفضة في أغسطس 2026.",
        },
        evidence: "REPORTED",
        citation: "[61]",
      },
      {
        text: {
          en: "Digital health was explicitly on the agenda of Zain's April 2026 meeting with the Telecom Minister in Khartoum.",
          ar: "كانت الصحة الرقمية بنداً رئيسياً على جدول أعمال اجتماع زين مع وزير الاتصالات في الخرطوم في أبريل 2026.",
        },
        evidence: "VERIFIED",
        citation: "[15]",
      },
    ],
    pains: [
      { en: "Patient appointment, maternal health and vaccination reminders across displaced populations.", ar: "تذكير المرضى بالمواعيد ورعاية الأمومة وحملات التطعيم وسط السكان النازحين والعائدين." },
      { en: "Vaccine and medicine cold-chain monitoring on unreliable power.", ar: "مراقبة درجات حرارة ثلاجات اللقاحات والأدوية (سلسلة التبريد) مع تذبذب التيار الكهربائي." },
      { en: "Paying community health workers in remote clinics without cash.", ar: "صرف حوافز الكوادر الصحية المجتمعية في العيادات الطرفية دون الحاجة لنقل النقد." },
    ],
    zainOffers: [
      { en: "Bulk SMS and IVR reminders; CCaaS for health hotlines.", ar: "رسائل نصية جماعية ورد آلي للتذكير؛ ومراكز اتصال للخطوط الساخنة الصحية." },
      { en: "IoT and APN/data cards for clinics; ZainCloud; Bede payments to health workers.", ar: "إنترنت الأشياء ودوائر APN وشرائح البيانات للعيادات؛ وسحابة زين؛ ودفع الحوافز عبر Bede." },
    ],
    whyItWorks: {
      en: "Health programmes depend on simple SMS reach, field reporting and micro-stipends—selling through donor-funded NGO health programmes accelerates procurement.",
      ar: "تعتمد البرامج الصحية على الرسائل النصية البسيطة والتقارير الميدانية والمدفوعات الصغيرة — والبيع عبر برامج المنظمات الممولة يسرّع التعاقد.",
    },
    whyZain: {
      en: "National reach plus messaging, connectivity and payments in one operator, backed by existing ministerial alignment on digital health.",
      ar: "انتشار وطني يجمع الرسائل والاتصال والمدفوعات لدى مشغل واحد، مدعوماًبتوافق وزاري مسبق حول الصحة الرقمية.",
    },
    francoPintoAdds: [
      { en: "Solar-powered IoT temperature loggers with instant SMS excursion alerts.", ar: "حساسات حرارة تعمل بالطاقة الشمسية وإنترنت الأشياء مع تنبيهات فورية عبر الرسائل عند تغير الحرارة." },
      { en: "Lightweight clinic appointment and patient SMS confirmation system.", ar: "نظام مبسط لحجز مواعيد العيادات وتأكيدها عبر الرسائل النصية." },
      { en: "Privacy-aware hosting outside conflict zones.", ar: "استضافة سحابية تراعي خصوصية البيانات الصحية خارج مناطق النزاع." },
    ],
    flags: [
      { en: "Health cluster is only 3% funded [26]—focus on funded INGO programmes and private chains.", ar: "تمويل القطاع الصحي الإنساني لا يتجاوز 3% [26] — لذا يجب التركيز على البرامج الممولة والمستشفيات الخاصة." },
      { en: "Sudan lacks a comprehensive data-protection law [70]; patient data requires strict contractual safeguards.", ar: "غياب قانون شامل لحماية البيانات في السودان [70] يستلزم ضوابط تعاقدية وتقنية صارمة لحماية سرية بيانات المرضى." },
    ],
  },
  {
    rank: 7,
    salesRank: 6,
    strategyRank: 7,
    strategyScore: 3.05,
    tier: 3,
    tierLabel: { en: "Tier 3 · Programme-led (6–12 months)", ar: "الفئة الثالثة · عبر البرامج والمنظمات (6–12 شهراً)" },
    id: "agriculture",
    name: { en: "Agriculture & Exports", ar: "الزراعة والصادرات الزراعية" },
    leadBundle: {
      en: "A market-price SMS service and Bede outgrower payout pilot with one cooperative or food-security programme.",
      ar: "خدمة أسعار المحاصيل عبر الرسائل النصية مع مشروع تجريبي لمدفوعات المزارعين عبر Bede بالتعاون مع جمعية تعاونية أو برنامج أمن غذائي.",
    },
    approachQuote: {
      en: "One SMS line to every farmer, and cashless payments at harvest.",
      ar: "خط رسائل مباشر لكل مزارع، ومدفوعات غير نقدية عند الحصاد.",
    },
    route: {
      en: "Agricultural cooperatives, sesame/gum arabic exporters' associations, and FAO / NGO food-security programmes.",
      ar: "الجمعيات التعاونية الزراعية، واتحادات مصدّري السمسم والصمغ العربي، وبرامج الأمن الغذائي التابعة للفاو والمنظمات.",
    },
    buyer: {
      en: "Agribusiness GMs, exporters of sesame, livestock and gum arabic, cooperative managers, and FAO/NGO programme leads.",
      ar: "مديرو الشركات الزراعية، ومصدّرو السمسم والثروة الحيوانية والصمغ العربي، ومديرو التعاونيات وبرامج الفاو.",
    },
    marketState: [
      {
        text: {
          en: "2025 preliminary official exports: livestock US$466.3M, sesame US$333.7M (288,941 t), gum arabic US$78.2M (62,514 t), cotton US$64.1M.",
          ar: "الصادرات الرسمية الأولية لعام 2025: الثروة الحيوانية 466.3 مليون دولار، السمسم 333.7 مليون دولار، الصمغ العربي 78.2 مليون دولار، والقطن 64.1 مليون دولار.",
        },
        evidence: "VERIFIED",
        citation: "[25]",
      },
      {
        text: {
          en: "Gedaref, Kassala and River Nile are the core SAF-held producing states; Zain holds a written Smart Agriculture ('Hagool') product ready to publish.",
          ar: "تُعد القضارف وكسلا ونهر النيل ولايات الإنتاج الرئيسية الآمنة؛ وتمتلك زين منتج الزراعة الذكية («حقول») الجاهز للنشر.",
        },
        evidence: "VERIFIED",
        citation: "[1,26]",
      },
    ],
    pains: [
      { en: "Getting accurate daily crop market prices and weather/pest advice to farmers.", ar: "إيصال أسعار المحاصيل اليومية وإرشادات الطقس والآفات للمزارعين." },
      { en: "Monitoring remote solar irrigation pumps reliably.", ar: "مراقبة مضخات الري التي تعمل بالطاقة الشمسية في المشاريع الزراعية." },
      { en: "Paying outgrowers and purchasing harvest crops without transporting physical cash.", ar: "تمويل المزارعين وشراء المحاصيل دون مخاطر نقل السيولة النقدية." },
    ],
    zainOffers: [
      { en: "Bulk SMS and IVR advisory; Smart Agriculture ('Hagool') once published.", ar: "الإرشاد عبر الرسائل النصية والرد الآلي؛ ومنصة الزراعة الذكية («حقول») فور نشرها." },
      { en: "IoT for solar irrigation pumps; Fleet VTS for export trucking to Port Sudan.", ar: "إنترنت الأشياء لمضخات الري الشمسية؛ وتتبع شاحنات التصدير المتجهة إلى بورتسودان." },
      { en: "Bede input-credit and harvest payouts; Hybrid Flex for estate staff.", ar: "صرف تمويل المدخلات وشراء المحاصيل عبر Bede؛ وباقات Hybrid Flex للعاملين." },
    ],
    whyItWorks: {
      en: "Agriculture is Sudan's broadest non-gold economic base and farmers already carry mobile phones. Selling through exporters and FAO/NGO programmes reaches scale without one-to-one sales.",
      ar: "الزراعة هي أوسع قاعدة اقتصادية غير تعدينية ويحمل المزارعون هواتف جوالة بالفعل. البيع عبر المصدّرين وبرامج المنظمات يحقق انتشاراً واسعاً دون بيع فردي مكلف.",
    },
    whyZain: {
      en: "12.4M-customer reach across Gedaref, Kassala and River Nile, a written agriculture product ('Hagool'), and a licensed wallet.",
      ar: "انتشار يضم 12.4 مليون مشترك يغطي القضارف وكسلا ونهر النيل، ومنتج زراعي جاهز («حقول»)، ومحفظة مرخصة.",
    },
    francoPintoAdds: [
      { en: "Farmer registry with automated Arabic SMS/IVR market-price and weather advisory.", ar: "سجل رقمي للمزارعين مع إرسال آلي لأسعار المحاصيل والطقس بالرسائل والرد الآلي." },
      { en: "Solar irrigation pump telemetry and soil sensor dashboards.", ar: "لوحات مراقبة عن بُعد لمضخات الري الشمسية وحساسات التربة." },
      { en: "Outgrower payout reconciliation for exporters and donor programmes.", ar: "نظام مطابقة مدفوعات المزارعين لصالح شركات التصدير وبرامج المانحين." },
    ],
    flags: [
      { en: "Seasonal cashflows and low individual ability to pay—anchor contracts on exporters and NGO/FAO programmes.", ar: "موسمية التدفقات النقدية وضعف القدرة الشرائية الفردية — لذا يجب ربط العقود بشركات التصدير وبرامج الفاو والمنظمات." },
    ],
  },
  {
    rank: 8,
    salesRank: 7,
    strategyRank: 8,
    strategyScore: 3.0,
    tier: 4,
    tierLabel: { en: "Tier 4 · Gated (Zain-led due diligence only)", ar: "الفئة الرابعة · مقيدة (بعد فحص العناية الواجبة بقيادة زين فقط)" },
    id: "mining",
    name: { en: "Mining & Gold", ar: "التعدين والذهب" },
    leadBundle: {
      en: "Tracking for a small vehicle fleet at one licensed government-side mining operator.",
      ar: "تتبع أسطول مركبات صغير لدى شركة تعدين مرخصة واحدة في المناطق الخاضعة للحكومة.",
    },
    approachQuote: {
      en: "Know where every vehicle and asset is.",
      ar: "اعرف موقع كل مركبة ومعدة في مواقع الإنتاج.",
    },
    route: {
      en: "Zain enterprise account team, strictly after Zain-led legal and sanctions due diligence.",
      ar: "فريق حسابات المؤسسات في زين، حصرياً بعد استكمال إجراءات العناية الواجبة وفحص العقوبات بقيادة زين.",
    },
    buyer: {
      en: "Site Operations Manager, IT Lead and Security Manager at licensed mining companies; SMRC.",
      ar: "مدير عمليات الموقع، مسؤول تقنية المعلومات، ومدير الأمن في شركات التعدين المرخصة؛ والشركة السودانية للموارد المعدنية.",
    },
    marketState: [
      {
        text: {
          en: "State miner SMRC reported 70 t of gold produced in 2025 (113% of target); official gold exports were 14.7 t worth US$1.536bn.",
          ar: "أعلنت الشركة السودانية للموارد المعدنية إنتاج 70 طناً من الذهب في 2025 (113% من المستهدف)؛ وبلغت الصادرات الرسمية 14.7 طن بقيمة 1.536 مليار دولار.",
        },
        evidence: "VERIFIED",
        citation: "[25,57]",
      },
      {
        text: {
          en: "About 79% of gold output is reported not to pass through official exports, creating severe sanctions and conflict-minerals exposure.",
          ar: "تشير التقارير إلى أن نحو 79% من إنتاج الذهب لا يمر عبر القنوات الرسمية، ما يخلق مخاطر عالية تتعلق بالعقوبات ومعادن النزاعات.",
        },
        evidence: "REPORTED",
        citation: "[58]",
      },
    ],
    pains: [
      { en: "Remote concession sites far beyond cellular coverage.", ar: "مواقع امتياز نائية خارج نطاق التغطية الخلوية المعتادة." },
      { en: "Tracking heavy vehicles, fuel tankers and site equipment.", ar: "تتبع المركبات الثقيلة وصهاريج الوقود ومعدات المواقع." },
      { en: "Worker safety and paying site crews without moving cash across long desert routes.", ar: "سلامة العاملين وصرف الأجور في المواقع البعيدة دون نقل النقد عبر الطرق الصحراوية." },
    ],
    zainOffers: [
      { en: "IoT, Fleet, VTS, APN and data cards; Push-to-Talk once published.", ar: "إنترنت الأشياء، إدارة الأساطيل (VTS)، دوائر APN وشرائح البيانات؛ وخدمة Push-to-Talk فور نشرها." },
      { en: "Site payroll through Bede; Partner VSAT for sites beyond coverage.", ar: "صرف الرواتب عبر Bede؛ وربط VSAT عبر شريك مرخص للمواقع خارج التغطية." },
    ],
    whyItWorks: {
      en: "Gold is Sudan's largest hard-currency earner and licensed concessions need tracking, site links and cashless payroll.",
      ar: "الذهب هو أكبر مصدر للنقد الأجنبي في السودان، وتحتاج شركات الامتياز المرخصة إلى تتبع المعدات والربط وصرف الأجور إلكترونياً.",
    },
    whyZain: {
      en: "National presence in River Nile, Northern and Red Sea states plus combined connectivity-and-wallet payroll.",
      ar: "حضور قوي في ولايات نهر النيل والشمالية والبحر الأحمر مع دمج الاتصال ومحفظة الرواتب في حل واحد.",
    },
    francoPintoAdds: [
      { en: "Geofencing, route deviation alerts and heavy-equipment telemetry.", ar: "السياج الجغرافي وتنبيهات الخروج عن المسار وقياسات المعدات الثقيلة عن بُعد." },
      { en: "Store-and-forward tracking devices and ERP integration.", ar: "أجهزة تتبع بخاصية التخزين والإرسال والربط بأنظمة تخطيط الموارد (ERP)." },
    ],
    flags: [
      { en: "HIGH REPUTATIONAL & SANCTIONS RISK: Gold is linked to armed-group financing and targeted US/EU/UN designations. Exclude gold traders and anything in RSF-held areas; proceed only with formal Zain legal clearance.", ar: "مخاطر سمعة وعقوبات عالية جداً: يرتبط قطاع الذهب بتمويل النزاع والعقوبات الدولية الموجهة. يجب استبعاد تجار الذهب وأي نشاط في مناطق الدعم السريع، وعدم المضي إلا بموافقة قانونية رسمية من زين." },
    ],
  },
  {
    rank: 9,
    salesRank: 9,
    strategyRank: 10,
    strategyScore: 2.95,
    tier: 4,
    tierLabel: { en: "Tier 4 · Later (12+ months)", ar: "الفئة الرابعة · مرحلة لاحقة (12+ شهراً)" },
    id: "education",
    name: { en: "Education", ar: "التعليم والجامعات" },
    leadBundle: {
      en: "A campus data bundle plus exam-result SMS & Bede fee collection with one returning university.",
      ar: "باقة بيانات للحرم الجامعي مع خدمة نتائج الامتحانات بالرسائل النصية وتحصيل الرسوم عبر Bede لجامعة واحدة.",
    },
    approachQuote: {
      en: "Keep students connected and informed wherever faculty are located.",
      ar: "أبقِ الطلاب متصلين ومطلعين على نتائجهم ومحاضراتهم أينما تواجد أعضاء هيئة التدريس.",
    },
    route: {
      en: "University consortia, private schools/universities and the Ministry of Higher Education.",
      ar: "اتحادات الجامعات، والجامعات والمدارس الخاصة، ووزارة التعليم العالي.",
    },
    buyer: {
      en: "University ICT Directors, Registrars, private school owners, Ministry of Higher Education.",
      ar: "مديرو تقنية المعلومات والمسجلون بالجامعات، ملاك المدارس الخاصة، ووزارة التعليم العالي.",
    },
    marketState: [
      {
        text: {
          en: "Universities were ordered back to Khartoum campuses by August 2026, while ~71% of University of Khartoum academics remain abroad.",
          ar: "صُدرت توجيهات بعودة الجامعات إلى مقراتها بالخرطوم بحلول أغسطس 2026، في حين لا يزال نحو 71% من أساتذة جامعة الخرطوم خارج البلاد.",
        },
        evidence: "REPORTED",
        citation: "[62]",
      },
      {
        text: {
          en: "Zain holds written EDU-PRO / LMS-PRO and Zees education products, not yet published on public menus.",
          ar: "تمتلك زين أنظمة تعليمية جاهزة في محتواها الداخلي (EDU-PRO / LMS-PRO وZees) غير منشورة بعد في القوائم العامة.",
        },
        evidence: "VERIFIED",
        citation: "[1]",
      },
    ],
    pains: [
      { en: "Teaching returning students in Khartoum while most faculty remain abroad.", ar: "تدريس الطلاب العائدين في الخرطوم بينما يتواجد معظم الأساتذة في الخارج." },
      { en: "Collecting tuition fees and publishing exam results across displaced student cohorts.", ar: "تحصيل الرسوم الدراسية وإعلان نتائج الامتحانات للطلاب المنتشرين في ولايات مختلفة." },
    ],
    zainOffers: [
      { en: "Campus data bundles, Business Flex and data cards for staff and students.", ar: "باقات بيانات الحرم الجامعي وBusiness Flex وشرائح البيانات للأساتذة والطلاب." },
      { en: "Bulk SMS for exam results; Bill Payment and Bede for tuition fees; EDU-PRO / LMS-PRO once published.", ar: "رسائل نصية لنتائج الامتحانات؛ وتحصيل الرسوم عبر الفواتير ومحفظة Bede؛ ومنصة EDU-PRO فور نشرها." },
    ],
    whyItWorks: {
      en: "Restarting universities with dispersed faculty makes low-bandwidth learning platforms and SMS communication a precondition.",
      ar: "استئناف الدراسة الجامعية مع وجود الأساتذة بالخارج يجعل منصات التعلم خفيفة الاستهلاك والرسائل النصية شرطاً أساسياً للتشغيل.",
    },
    whyZain: {
      en: "A ready education product in Zain's system plus student data bundles and mobile fee payments.",
      ar: "وجود منتج تعليمي جاهز لدى زين إلى جانب باقات الطلاب وسداد الرسوم عبر الهاتف.",
    },
    francoPintoAdds: [
      { en: "Low-bandwidth, offline-capable learning portal and student SMS result lookup.", ar: "بوابة تعلم إلكتروني تعمل بكفاءة مع السرعات المنخفضة وخدمة الاستعلام عن النتائج بالرسائل." },
      { en: "Automated tuition fee-payment integration with university registrar records.", ar: "ربط آلي لسداد الرسوم الدراسية مع سجلات القبول والتسجيل بالجامعة." },
    ],
    flags: [
      { en: "Very constrained public budgets (education cluster is 1.2% funded [26]); exam-season internet shutdowns disrupt live classes.", ar: "ميزانيات عامة محدودة للغاية (تمويل قطاع التعليم الإنساني 1.2% فقط [26])؛ كما أن حجب الإنترنت أثناء الامتحانات يعطل الفصول الافتراضية الحية." },
    ],
  },
  {
    rank: 10,
    salesRank: 8,
    strategyRank: 11,
    strategyScore: 2.65,
    tier: 4,
    tierLabel: { en: "Tier 4 · Later (12+ months)", ar: "الفئة الرابعة · مرحلة لاحقة (12+ شهراً)" },
    id: "energy",
    name: { en: "Oil, Energy & Solar", ar: "النفط والطاقة والطاقة الشمسية" },
    leadBundle: {
      en: "Generator fuel and solar-inverter IoT monitoring at one commercial site or through a solar installer.",
      ar: "مراقبة استهلاك وقود المولدات ومنظومات الطاقة الشمسية عبر IoT في موقع تجاري أو عبر موزع طاقة شمسية.",
    },
    approachQuote: {
      en: "Secure private data links and remote generator/solar monitoring.",
      ar: "روابط بيانات خاصة آمنة ومراقبة عن بُعد للمولدات ومنظومات الطاقة الشمسية.",
    },
    route: {
      en: "Zain key accounts and commercial solar importers/installers.",
      ar: "حسابات المؤسسات الكبرى في زين ومستوردو ومقاولو أنظمة الطاقة الشمسية التجارية.",
    },
    buyer: {
      en: "Field IT Manager and HSE Manager at energy operators; commercial solar importers and installers.",
      ar: "مدير تقنية المعلومات الميداني ومدير السلامة في شركات الطاقة؛ ومستوردو ومقاولو الطاقة الشمسية.",
    },
    marketState: [
      {
        text: {
          en: "Solar is booming: imports rose ~6x in a year; diesel generation costs ~US$0.45/kWh vs US$0.02 on the grid; UNDP puts grid damage at up to US$3bn.",
          ar: "طفرة في الطاقة الشمسية: تضاعفت الواردات 6 مرات خلال عام؛ وتبلغ تكلفة التوليد بالديزل 0.45 دولار/كيلوواط ساعة مقابل 0.02 بالشبكة؛ مع تقدير أضرار الشبكة بنحو 3 مليارات دولار.",
        },
        evidence: "VERIFIED",
        citation: "[28,30,31]",
      },
      {
        text: {
          en: "Oil exports (including South Sudan crude) run via the Bashayer terminal near Port Sudan.",
          ar: "تمر صادرات النفط (بما فيها خام جنوب السودان) عبر ميناء بشائر قرب بورتسودان.",
        },
        evidence: "REPORTED",
        citation: "[63]",
      },
    ],
    pains: [
      { en: "Telemetry from pipelines, terminals and commercial solar installations.", ar: "نقل بيانات القياس عن بُعد من خطوط الأنابيب والمحطات ومنظومات الطاقة الشمسية التجارية." },
      { en: "Generator diesel monitoring and theft prevention at commercial compounds.", ar: "مراقبة استهلاك الديزل في المولدات ومنع السرقة في المجمعات التجارية." },
    ],
    zainOffers: [
      { en: "Private APN and IoT SIMs for SCADA and inverter telemetry.", ar: "دوائر APN خاصة وشرائح IoT لأنظمة التحكم (SCADA) ومحولات الطاقة الشمسية." },
      { en: "Fleet VTS for field crews; solar-installer reseller channel for monitoring SIMs.", ar: "تتبع مركبات الفرق الميدانية؛ وقناة بيع لشرائح المراقبة عبر شركات تركيب الطاقة الشمسية." },
    ],
    whyItWorks: {
      en: "Every commercial generator and solar array is a high-value asset worth monitoring, and solar installers offer a ready distribution channel.",
      ar: "كل مولد تجاري ومنظومة طاقة شمسية يمثل أصلاً عالي القيمة يستحق المراقبة، ويشكل مركّبو الطاقة الشمسية قناة توزيع جاهزة.",
    },
    whyZain: {
      en: "Private APN and IoT SIM management in one operator with eastern terminal reach.",
      ar: "توفر دوائر APN الخاصة وإدارة شرائح IoT لدى مشغل واحد يغطي موانئ التصدير الشرقية.",
    },
    francoPintoAdds: [
      { en: "Generator fuel-level and solar-yield telemetry dashboards with SMS alerting.", ar: "لوحات مراقبة لمستوى وقود المولدات وإنتاجية الطاقة الشمسية مع تنبيهات فورية بالرسائل." },
      { en: "Hardened APN security design for industrial telemetry.", ar: "تصميم أمني معزز لدوائر APN الخاصة ببيانات القياس الصناعية." },
    ],
    flags: [
      { en: "Upstream oil fields sit in contested areas; OFAC designated SBL Energy on 26 Jun 2026 [64]—screen all energy supply chains.", ar: "تقع حقول الإنتاج في مناطق متنازع عليها؛ كما أدرجت OFAC شركة SBL Energy في 26 يونيو 2026 [64] — يجب فحص كافة سلاسل الإمداد." },
    ],
  },
  {
    rank: 11,
    salesRank: 11,
    strategyRank: 9,
    strategyScore: 3.0,
    tier: 4,
    tierLabel: { en: "Tier 4 · Prepare now, sell later", ar: "الفئة الرابعة · التجهيز الآن والبيع لاحقاً" },
    id: "construction",
    name: { en: "Construction & Reconstruction", ar: "المقاولات وإعادة الإعمار" },
    leadBundle: {
      en: "Equipment trackers and site data cards for one contractor working on a Khartoum rehabilitation project.",
      ar: "أجهزة تتبع للمعدات وشرائح بيانات موقعية لمقاول واحد يعمل في مشاريع تأهيل الخرطوم.",
    },
    approachQuote: {
      en: "Track equipment, connect sites, pay daily crews.",
      ar: "تتبّع معداتك، واربط مواقع العمل، وادفع أجور العمال اليومية إلكترونياً.",
    },
    route: {
      en: "Contractor associations and UNDP / donor-funded infrastructure rehabilitation programmes.",
      ar: "اتحادات المقاولين وبرامج تأهيل البنية التحتية الممولة من برنامج الأمم المتحدة الإنمائي والمانحين.",
    },
    buyer: {
      en: "Project Directors and Operations Managers at engineering and construction contractors.",
      ar: "مديرو المشاريع ومديرو العمليات في شركات الهندسة والمقاولات.",
    },
    marketState: [
      {
        text: {
          en: "Rehabilitation of power, water, roads, internet and ministry buildings is under way in Khartoum.",
          ar: "تتواصل أعمال تأهيل شبكات الكهرباء والمياه والطرق والإنترنت والمباني الوزارية في الخرطوم.",
        },
        evidence: "VERIFIED",
        citation: "[48]",
      },
    ],
    pains: [
      { en: "Heavy equipment tracking and theft prevention across open work sites.", ar: "تتبع الآليات والمعدات الثقيلة ومنع سرقتها في مواقع العمل المفتوحة." },
      { en: "Temporary site communications and paying subcontractors and daily labourers without cash.", ar: "اتصالات المواقع المؤقتة وصرف مستحقات مقاولي الباطن والعمالة اليومية دون نقد." },
    ],
    zainOffers: [
      { en: "Fleet and IoT equipment tracking; Push-to-Talk once published.", ar: "تتبع المركبات والمعدات عبر IoT؛ وخدمة الاتصال الجماعي (Push-to-Talk) فور نشرها." },
      { en: "4G data cards and Hybrid Flex for site engineers; workforce SMS and Bede payroll.", ar: "شرائح بيانات وباقات Hybrid Flex لمهندسي المواقع؛ وصرف أجور العمال عبر Bede." },
    ],
    whyItWorks: {
      en: "Reconstruction will be substantial when donor funding unlocks; contractors equipped early will standardize on Zain.",
      ar: "سيكون قطاع إعادة الإعمار ضخماً عند تدفق التمويل؛ والمقاولون الذين يعتمدون حلول زين مبكراً سيتوسعون بها تلقائياً.",
    },
    whyZain: {
      en: "The complete site kit (connectivity, heavy-asset tracking, mobile payroll) from one operator.",
      ar: "حقيبة الموقع المتكاملة (الاتصال، تتبع الآليات، وصرف الأجور عبر الهاتف) من مشغل واحد.",
    },
    francoPintoAdds: [
      { en: "Heavy-asset telemetry, mobile site-progress reporting app, and ERP cost-centre integration.", ar: "تتبع الآليات الثقيلة، وتطبيق تقارير إنجاز المواقع، والربط بمراكز التكلفة في نظام ERP." },
    ],
    flags: [
      { en: "Donor funding timelines remain uncertain; screen contractor ownership chains for sanctions compliance.", ar: "توقيت تدفق تمويل الإعمار غير محدد بعد؛ ويجب فحص سلاسل ملكية شركات المقاولات للامتثال للعقوبات." },
    ],
  },
  {
    rank: 12,
    salesRank: 10,
    strategyRank: 12,
    strategyScore: 2.65,
    tier: 4,
    tierLabel: { en: "Tier 4 · Within the SME bundle", ar: "الفئة الرابعة · ضمن حزمة الشركات الصغيرة والمتوسطة" },
    id: "hospitality",
    name: { en: "Hospitality & Guesthouses", ar: "الضيافة والفنادق والاستراحات" },
    leadBundle: {
      en: "4G/APN Wi-Fi backhaul plus booking confirmation SMS and Bede QR for one hotel or guesthouse group.",
      ar: "ربط إنترنت مزدوج للضيوف مع رسائل تأكيد الحجوزات والدفع عبر Bede لمجموعة فنادق أو استراحات.",
    },
    approachQuote: {
      en: "Reliable guest internet and instant booking confirmations.",
      ar: "إنترنت موثوق للضيوف وتأكيد فوري للحجوزات عبر الرسائل النصية.",
    },
    route: {
      en: "Zain account managers in Port Sudan and Khartoum; fold directly into the SME 'Business in a Box' motion.",
      ar: "مديرو الحسابات في بورتسودان والخرطوم؛ وتُباع ضمن حزمة «أعمالك في باقة واحدة» للشركات الصغيرة.",
    },
    buyer: {
      en: "Hotel General Manager or IT Manager in Port Sudan, Kassala and Khartoum guesthouses.",
      ar: "المدير العام أو مسؤول تقنية المعلومات في فنادق واستراحات بورتسودان وكسلا والخرطوم.",
    },
    marketState: [
      {
        text: {
          en: "Port Sudan hotels and Khartoum guesthouses host UN, NGO, diplomatic and visiting business staff.",
          ar: "تستضيف فنادق بورتسودان واستراحات الخرطوم موظفي الأمم المتحدة والمنظمات والبعثات الدبلوماسية ورجال الأعمال.",
        },
        evidence: "VERIFIED",
        citation: "[35,51]",
      },
    ],
    pains: [
      { en: "Guest Wi-Fi backhaul and failover—international aid and business guests choose accommodation based on internet reliability.", ar: "استقرار إنترنت الضيوف ووجود مسار احتياطي — حيث يختار الزوار الدوليون مقر إقامتهم بناءً على جودة الإنترنت." },
      { en: "Direct booking confirmations and cashless bill settlement.", ar: "تأكيد الحجوزات بشكل فوري وتسوية الفواتير دون نقد." },
    ],
    zainOffers: [
      { en: "Postpaid broadband, 4G CPE routers and data cards with APN failover; Bede POS/QR and booking SMS.", ar: "إنترنت آجل الدفع وراوترات 4G مع مسار APN احتياطي؛ ونقاط بيع Bede ورسائل تأكيد الحجز." },
    ],
    whyItWorks: {
      en: "Guesthouses compete directly on reliable connectivity for visiting UN and corporate staff.",
      ar: "تتنافس الفنادق والاستراحات بشكل مباشر على توفير إنترنت مستقر لموظفي المنظمات والشركات الزائرين.",
    },
    whyZain: {
      en: "Strongest restored coverage in Port Sudan and eastern hubs with a simple bundled offer.",
      ar: "أقوى تغطية مستعادة في بورتسودان والشرق ضمن باقة موحدة ومبسطة.",
    },
    francoPintoAdds: [
      { en: "Captive-portal guest Wi-Fi management and lightweight booking engine with SMS confirmations.", ar: "إدارة بوابة واي فاي الضيوف ونظام حجوزات خفيف مرتبط بتأكيدات الرسائل النصية." },
    ],
    flags: [
      { en: "Small niche sector—keep inside the standard SME bundle rather than building a dedicated sales track.", ar: "قطاع صغير الحجم — يُفضل خدمته ضمن حزمة الشركات الصغيرة والمتوسطة دون تخصيص مسار مبيعات مستقل." },
    ],
  },
];
