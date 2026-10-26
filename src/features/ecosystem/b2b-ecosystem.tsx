"use client";
import { useState, useId } from "react";
import { useLocale } from "@/components/locale-provider";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Pause,
  Play,
  Database,
  Server,
  Network,
  Landmark,
  Layers3,
  Maximize2,
  Minus,
  Plus,
  X,
  Smartphone,
  Globe,
  CreditCard,
  Building2,
  Radio,
  ShieldCheck,
  Truck,
  HeartHandshake,
  MessageSquareText,
  Wifi,
  Satellite,
} from "lucide-react";
import type { BilingualText } from "@/content/b2b-data";

export type B2BScenarioId = "normal" | "starlink" | "switch" | "blackout";

interface B2BServiceNode {
  id: string;
  name: BilingualText;
  category: "Sector" | "Bundle" | "Core" | "Resilience";
  metric: BilingualText;
  description: BilingualText;
  monitored: BilingualText;
  zainProduct: BilingualText;
  francoPintoRole: BilingualText;
  x: number;
  y: number;
  icon: typeof Activity;
}

interface B2BScenario {
  id: B2BScenarioId;
  name: BilingualText;
  focus: string;
  impacted: string[];
  critical: string[];
  latency: number;
  requestRate: string;
  failoverRate: string;
  activeSites: string;
  bedeStatus: BilingualText;
  smppThroughput: string;
  apnPaths: BilingualText;
  trend: number[];
  alert: BilingualText;
  log: BilingualText;
  trace: BilingualText;
  investigate: BilingualText;
}

const b2bNodes: B2BServiceNode[] = [
  // Top row: Key Buyer Sectors (y = 85)
  {
    id: "ngos",
    name: { en: "NGOs & UN Agencies", ar: "المنظمات ووكالات الأمم المتحدة" },
    category: "Sector",
    metric: { en: "170+ agencies · Tier 1", ar: "+170 منظمة · الفئة الأولى" },
    description: {
      en: "Humanitarian cash aid distribution, beneficiary accountability hotlines and compound connectivity across Port Sudan, Kassala and Khartoum.",
      ar: "صرف المساعدات النقدية الإنسانية، وخطوط المساءلة للمستفيدين، وربط المقرات في بورتسودان وكسلا والخرطوم.",
    },
    monitored: {
      en: "Bede bulk payout settlement, SMS/IVR beneficiary reach, and compound APN/4G failover.",
      ar: "تسوية الدفعات الجماعية عبر Bede، والوصول للمستفيدين عبر الرسائل والرد الآلي، والمسار الاحتياطي للمقرات.",
    },
    zainProduct: {
      en: "Bede Corporate, Bulk SMS, Short Code, IVR, Zain Hybrid SIM pools, APN.",
      ar: "محفظة Bede Corporate، الرسائل الجماعية، الرقم المختصر، الرد الآلي، باقات شرائح الموظفين، وAPN.",
    },
    francoPintoRole: {
      en: "Bilingual donor audit & reconciliation portal, SMS/USSD beneficiary registration, offline data sync.",
      ar: "بوابة مطابقة وتدقيق للمانحين باللغتين، تسجيل المستفيدين عبر SMS/USSD، ومزامنة البيانات دون اتصال.",
    },
    x: 135,
    y: 85,
    icon: HeartHandshake,
  },
  {
    id: "banks",
    name: { en: "Banks & National Switch", ar: "المصارف والمقسم القومي" },
    category: "Sector",
    metric: { en: "Switch restored Aug 2026", ar: "عاد المقسم للعمل أغسطس 2026" },
    description: {
      en: "Commercial banks and 8 licensed e-money wallets reconnecting to the restored national payment switch and reopening Khartoum branches.",
      ar: "المصارف التجارية و8 محافظ مرخصة تعيد الارتباط بالمقسم القومي للمدفوعات وتعيد افتتاح فروع الخرطوم.",
    },
    monitored: {
      en: "SMPP OTP latency, ATM-to-data-centre APN tunnels, and dual-SIM POS uptime.",
      ar: "سرعة وصول رسائل التحقق (OTP)، وأنفاق APN بين الصرافات ومراكز البيانات، واستمرارية نقاط البيع.",
    },
    zainProduct: {
      en: "High-throughput SMPP, Private APN, POS connectivity bundles, IVR & CCaaS.",
      ar: "ربط SMPP عالي السعة، دوائر APN الخاصة، باقات ربط نقاط البيع، ومراكز الاتصال.",
    },
    francoPintoRole: {
      en: "Core banking SMPP middleware, real-time delivery-receipt reconciliation, dual-path APN design.",
      ar: "طبقة ربط الأنظمة المصرفية، لوحات مطابقة إشعارات التسليم اللحظية، وتصميم مسارات APN المزدوجة.",
    },
    x: 345,
    y: 85,
    icon: Landmark,
  },
  {
    id: "gov",
    name: { en: "Gov & Eisali E-Collection", ar: "الحكومة ومنظومة «إيصالي»" },
    category: "Sector",
    metric: { en: "MoF signed 4 Oct 2026", ar: "توقيع وزارة المالية 4 أكتوبر 2026" },
    description: {
      en: "Federal ministries and state agencies returning to Khartoum premises and replicating the Ministry of Finance Eisali notification & fee model.",
      ar: "الوزارات والهيئات العائدة إلى الخرطوم لتعميم نموذج «إيصالي» للإشعارات والتحصيل الإلكتروني.",
    },
    monitored: {
      en: "E-collection receipt SMS delivery, citizen IVR queues, and temporary ministry office links.",
      ar: "إشعارات إيصالات التحصيل الإلكتروني، وقوائم الرد الآلي للمواطنين، وروابط المقرات الوزارية المؤقتة.",
    },
    zainProduct: {
      en: "Short Codes, Bulk SMS, APN, 4G CPE routers, ZainCloud, UCaaS & Zdrop.",
      ar: "الأرقام المختصرة، الرسائل النصية، دوائر APN، راوترات 4G، سحابة زين، وخدمات UCaaS وZdrop.",
    },
    francoPintoRole: {
      en: "E-service citizen portals, automated ledger reconciliation, reusable agency templates (Zain-led).",
      ar: "بوابات خدمات المواطنين، المطابقة الآلية مع دفاتر الحسابات، وقوالب جاهزة للتوسع (بقيادة زين).",
    },
    x: 555,
    y: 85,
    icon: Building2,
  },
  {
    id: "logistics",
    name: { en: "Port Sudan & SMEs", ar: "لوجستيات بورتسودان والشركات" },
    category: "Sector",
    metric: { en: "Customs IoT · Jan 2026", ar: "جمارك IoT · يناير 2026" },
    description: {
      en: "Freight fleets along the Port Sudan–Atbara–Khartoum corridor plus relocated SMEs and merchants operating on solar.",
      ar: "أساطيل الشحن على ممر بورتسودان – عطبرة – الخرطوم والشركات الصغيرة والتجار المنتقلون.",
    },
    monitored: {
      en: "VTS truck telemetry, automated cargo arrival SMS, and Bede QR merchant settlements.",
      ar: "تتبع الشاحنات (VTS)، رسائل وصول الشحنات الآلية، وتسويات التجار عبر رمز Bede QR.",
    },
    zainProduct: {
      en: "Fleet VTS, IoT SIMs, Business Flex / Hybrid, Bede Merchant POS/QR, Blue ERP.",
      ar: "إدارة الأساطيل (VTS)، شرائح IoT، باقات Business Flex، نقاط بيع Bede، ونظام Blue ERP.",
    },
    francoPintoRole: {
      en: "Store-and-forward dead-zone tracking, lightweight POS/stock app, Arabic WhatsApp text desk.",
      ar: "تتبع المركبات بخاصية التخزين والإرسال، تطبيق نقاط البيع والمخزون، ومكتب الرد النصي الآلي بالعربية.",
    },
    x: 765,
    y: 85,
    icon: Truck,
  },

  // Second row: Integration & Bundle Layer (y = 240)
  {
    id: "bede",
    name: { en: "Bede Corporate & QR", ar: "محفظة Bede للمؤسسات والتجار" },
    category: "Bundle",
    metric: { en: "CBOS 2025/FIMP/4 · Visa", ar: "ترخيص بنك السودان · شراكة Visa" },
    description: {
      en: "Licensed e-money wallet supporting bulk NGO cash disbursements, corporate payroll uploads, bill payments and merchant QR acceptance.",
      ar: "محفظة نقود إلكترونية مرخصة تدعم صرف المساعدات الإنسانية بالجملة، والرواتب، وسداد الفواتير، والدفع عبر QR.",
    },
    monitored: {
      en: "Bulk spreadsheet disbursement batch status, KYC/sanctions gate, and instant SMS confirmation.",
      ar: "حالة دفعات الصرف الجماعي، بوابة فحص الامتثال (KYC)، وتأكيدات الاستلام الفورية بالرسائل.",
    },
    zainProduct: {
      en: "Bede Corporate portal, Visa integration, Bulk Recharge, Bill Payment.",
      ar: "بوابة Bede Corporate، تكامل Visa، الشحن الجماعي، وسداد الفواتير.",
    },
    francoPintoRole: {
      en: "Reconciliation & donor audit portal, ERP/beneficiary API connector, automated receipt matching.",
      ar: "بوابة المطابقة وتقارير المانحين، ربط واجهات الأنظمة المحاسبية، والمطابقة الآلية للإيصالات.",
    },
    x: 200,
    y: 240,
    icon: CreditCard,
  },
  {
    id: "hub",
    name: { en: "Zain × Franco Pinto Hub", ar: "منصة تكامل زين × Franco Pinto" },
    category: "Core",
    metric: { en: "Resilience & API Layer", ar: "طبقة التكامل والصمود" },
    description: {
      en: "The integration, reconciliation and offline-resilience middleware that turns Zain's telecom and fintech catalogue into turnkey enterprise solutions.",
      ar: "طبقة التكامل والمطابقة والعمل دون اتصال التي تحوّل منتجات زين إلى حلول مؤسسية متكاملة وجاهزة للتشغيل.",
    },
    monitored: {
      en: "End-to-end API health, automatic SMS/USSD fallback routing, and real-time partner traffic attribution.",
      ar: "سلامة واجهات الربط (APIs)، والتحول التلقائي لمسارات SMS/USSD، واحتساب الحركة الإضافية.",
    },
    zainProduct: {
      en: "Zain Sudan Business core network, licences, customer contract and brand.",
      ar: "الشبكة الأساسية لزين أعمال السودان، التراخيص، عقود العملاء، والعلامة التجارية.",
    },
    francoPintoRole: {
      en: "White-label portals, API middleware, offline-first sync engines and technical pre-sales.",
      ar: "البوابات البرمجية بالعلامة البيضاء، وسطاء API، محركات المزامنة دون اتصال، والدعم الفني قبل البيع.",
    },
    x: 450,
    y: 255,
    icon: Layers3,
  },
  {
    id: "messaging",
    name: { en: "SMPP, USSD & IVR Rails", ar: "قنوات SMPP وUSSD والرد الآلي" },
    category: "Bundle",
    metric: { en: "10k–10M SMS · Offline-safe", ar: "من 10 آلاف إلى 10 ملايين رسالة" },
    description: {
      en: "High-priority transactional messaging, interactive voice response and USSD menus that keep working on any handset even when mobile IP data is shut down.",
      ar: "رسائل المعاملات الفورية والرد الآلي وقوائم USSD التي تعمل على أي هاتف حتى أثناء انقطاع بيانات الإنترنت.",
    },
    monitored: {
      en: "SMPP bind health, OTP delivery latency, IVR call queues and USSD session completion.",
      ar: "سلامة ربط SMPP، زمن وصول رسائل OTP، قوائم انتظار الرد الآلي، وإتمام جلسات USSD.",
    },
    zainProduct: {
      en: "SMPP gateway, Bulk SMS, Zain Aalin, Auto-Dialer, Short Codes, CCaaS & IVR.",
      ar: "بوابة SMPP، الرسائل الجماعية، زين أعلن، الاتصال الآلي، الأرقام المختصرة، ومراكز الاتصال.",
    },
    francoPintoRole: {
      en: "Automated Arabic/English messaging front desks, fallback triggers, delivery-receipt analytics.",
      ar: "مكاتب خدمة العملاء النصية الآلية باللغتين، محفزات المسار البديل، وتحليلات إشعارات التسليم.",
    },
    x: 700,
    y: 240,
    icon: MessageSquareText,
  },

  // Bottom row: Network & Resilience Infrastructure (y = 435)
  {
    id: "apn",
    name: { en: "Dual-Path APN & 4G Flex", ar: "دوائر APN المزدوجة وشبكة 4G" },
    category: "Resilience",
    metric: { en: "2,153 sites · >90% safe areas", ar: "2,153 موقعاً · >90% بالمناطق الآمنة" },
    description: {
      en: "Private APN interconnect for bank branches, ATMs, POS and customs, paired with 4G CPE routers and data-card failover.",
      ar: "ربط APN خاص لفروع المصارف والصرافات ونقاط البيع والجمارك، مدعوماً براوترات وشرائح 4G احتياطية.",
    },
    monitored: {
      en: "Primary/secondary APN tunnel state, Port Sudan core switch routing, and packet loss.",
      ar: "حالة أنفاق APN الأساسية والاحتياطية، وتوجيه مقسم بورتسودان الرئيسي، ومعدل فقدان الحزم.",
    },
    zainProduct: {
      en: "Private APN, POS bundles, 4G CPE & MiFi routers, Business Flex & Hybrid SIMs.",
      ar: "دوائر APN الخاصة، باقات نقاط البيع، راوترات 4G، وشرائح Business Flex وHybrid.",
    },
    francoPintoRole: {
      en: "Dual-path failover design, SD-WAN over 4G edge policies, automated link health switching.",
      ar: "تصميم المسار الاحتياطي المزدوج، سياسات SD-WAN عبر 4G، والتبديل التلقائي عند ضعف الرابط.",
    },
    x: 200,
    y: 435,
    icon: Network,
  },
  {
    id: "cloud",
    name: { en: "Port Sudan Switch & Cloud", ar: "مقسم بورتسودان وسحابة زين" },
    category: "Resilience",
    metric: { en: "ZainCloud · Zdrop · Fleet IoT", ar: "سحابة زين · Zdrop · إنترنت الأشياء" },
    description: {
      en: "Resilient core switching in Port Sudan covering Red Sea, Kassala, Gedaref, Northern, River Nile and Khartoum, plus ZainCloud and store-and-forward IoT.",
      ar: "المقسم الرئيسي المرن في بورتسودان الذي يغطي البحر الأحمر وكسلا والقضارف والشمالية ونهر النيل والخرطوم، مع سحابة زين وIoT.",
    },
    monitored: {
      en: "Cloud VM availability, Zdrop backup sync, and store-and-forward GPS/cold-chain queues.",
      ar: "جاهزية الخوادم السحابية، مزامنة النسخ الاحتياطي Zdrop، وطوابير التخزين والإرسال لأجهزة التتبع.",
    },
    zainProduct: {
      en: "ZainCloud, Blue Enterprise ERP, Fleet VTS, plus Zdrop, UCaaS & VSaaS once published.",
      ar: "سحابة زين، نظام Blue ERP، تتبع الأساطيل، بالإضافة إلى Zdrop وUCaaS وVSaaS فور نشرها.",
    },
    francoPintoRole: {
      en: "Out-of-zone disaster recovery hosting, store-and-forward device buffering, telemetry alerts.",
      ar: "استضافة التعافي من الكوارث خارج مناطق النزاع، برمجة التخزين المؤقت للأجهزة، وتنبيهات القياس.",
    },
    x: 450,
    y: 435,
    icon: Server,
  },
  {
    id: "vsat",
    name: { en: "Licensed VSAT Partner Edge", ar: "حافة الأقمار الصناعية المرخصة (VSAT)" },
    category: "Resilience",
    metric: { en: "TPRA-licensed Starlink alt.", ar: "بديل قانوني مرخص من TPRA" },
    description: {
      en: "Partner VSAT satellite backhaul sold under Zain's account and bonded with 4G SD-WAN—closing the gap against Sudani and replacing unlicensed Starlink kits.",
      ar: "ربط فضائي عبر شريك VSAT مرخص تحت مظلة زين مدمج مع 4G SD-WAN — لسد الفجوة أمام «سوداني» وإحلال أجهزة Starlink غير المرخصة.",
    },
    monitored: {
      en: "Satellite link availability, SD-WAN terrestrial-to-VSAT failover time, and bandwidth shaping.",
      ar: "جاهزية الرابط الفضائي، سرعة التحول التلقائي من 4G إلى VSAT، وإدارة أولويات السعة.",
    },
    zainProduct: {
      en: "Partner VSAT bundled with Zain 4G APN & SD-WAN under a single enterprise contract.",
      ar: "خدمة VSAT عبر شريك مرخص مدمجة مع دوائر 4G APN تحت عقد مؤسسي واحد من زين.",
    },
    francoPintoRole: {
      en: "SD-WAN multi-transport bonding, low-bandwidth app optimization, unified NOC visibility.",
      ar: "دمج المسارات المتعددة عبر SD-WAN، تحسين التطبيقات للسرعات المنخفضة، ولوحة مراقبة موحدة.",
    },
    x: 700,
    y: 435,
    icon: Satellite,
  },
];

const b2bEdges: [string, string][] = [
  ["ngos", "bede"],
  ["ngos", "hub"],
  ["ngos", "vsat"],
  ["banks", "hub"],
  ["banks", "messaging"],
  ["banks", "apn"],
  ["gov", "hub"],
  ["gov", "messaging"],
  ["logistics", "hub"],
  ["logistics", "bede"],
  ["logistics", "cloud"],
  ["bede", "hub"],
  ["messaging", "hub"],
  ["hub", "apn"],
  ["hub", "cloud"],
  ["hub", "vsat"],
];

const b2bScenarios: Record<B2BScenarioId, B2BScenario> = {
  normal: {
    id: "normal",
    name: { en: "SAF-Held Hubs · Normal Operations", ar: "المراكز الآمنة · التشغيل الطبيعي" },
    focus: "hub",
    impacted: [],
    critical: [],
    latency: 42,
    requestRate: "1,840",
    failoverRate: "0.2%",
    activeSites: "2,153 (>90%)",
    bedeStatus: { en: "Active · Visa & CBOS", ar: "نشط · مرخص من بنك السودان" },
    smppThroughput: "99.4% delivered",
    apnPaths: { en: "Dual-path nominal", ar: "المساران يعملان بكفاءة" },
    trend: [38, 41, 39, 44, 42, 40, 43, 41, 42],
    alert: {
      en: "All SAF-held commercial corridors (Port Sudan, Kassala, Gedaref, Atbara, Dongola, Kosti, Damazine, Khartoum) operating normally.",
      ar: "جميع الممرات التجارية في المناطق الآمنة (بورتسودان، كسلا، القضارف، عطبرة، دنقلا، كوستي، الدمازين، الخرطوم) تعمل بشكل طبيعي.",
    },
    log: {
      en: "INFO [zain-b2b-hub] Eisali MoF shortcode & Customs Jointech IoT telemetry nominal · Bede corporate batch queue 0",
      ar: "INFO [zain-b2b-hub] الرقم المختصر لـ «إيصالي» وبيانات الجمارك IoT تعمل بانتظام · طابور دفعات Bede صفر",
    },
    trace: {
      en: "Core Switch (Port Sudan) → Private APN → Bank POS / NGO Portal: 42ms p95",
      ar: "مقسم بورتسودان ← دائرة APN الخاصة ← نقاط البيع / بوابة المنظمات: 42 ملي ثانية",
    },
    investigate: {
      en: "Click any sector or infrastructure node in the diagram to inspect the buyer pain, Zain's product stack, and Franco Pinto's integration layer.",
      ar: "اضغط على أي قطاع أو عقدة في المخطط لاستعراض تحديات العميل، ومنتجات زين، وطبقة التكامل من Franco Pinto.",
    },
  },
  starlink: {
    id: "starlink",
    name: { en: "Nov 2026 Starlink Deadline · NGO Migration", ar: "نوفمبر 2026 انتهاء مهلة Starlink · تحول المنظمات" },
    focus: "ngos",
    impacted: ["ngos", "bede", "hub", "vsat", "apn"],
    critical: ["vsat"],
    latency: 68,
    requestRate: "3,420",
    failoverRate: "100% legal cutover",
    activeSites: "70 NGO hubs migrating",
    bedeStatus: { en: "High NGO batch volume", ar: "حجم صرف مرتفع للمنظمات" },
    smppThroughput: "Beneficiary SMS/IVR surge",
    apnPaths: { en: "4G APN + Licensed VSAT", ar: "4G APN + قمر صناعي مرخص" },
    trend: [44, 49, 55, 62, 71, 69, 66, 70, 68],
    alert: {
      en: "ETC cluster 2026 funding ended + Thuraya terminated (Feb 2026) + Starlink grace period expires Nov 2026. 170+ agencies need licensed contracts.",
      ar: "توقف تمويل قطاع الاتصالات (ETC) لعام 2026 + انتهاء الثريا (فبراير) + انتهاء مهلة Starlink في نوفمبر 2026. أكثر من 170 منظمة تحتاج عقوداً مرخصة.",
    },
    log: {
      en: "MIGRATE [connected-aid] Unlicensed dish replaced → Zain 4G APN primary + TPRA-licensed VSAT failover + Bede Corporate payout live",
      ar: "MIGRATE [connected-aid] استبدال الطبق غير المرخص ← مسار زين 4G APN أساسي + VSAT مرخص احتياطي + تفعيل صرف Bede",
    },
    trace: {
      en: "INGO Compound (Khartoum/Kassala) → Zain Hybrid SIM & APN → Bede Beneficiary SMS Confirmation: 68ms",
      ar: "مقر المنظمة (الخرطوم/كسلا) ← شرائح زين وAPN ← تأكيد صرف المساعدة للمستفيد بالرسائل: 68 ملي ثانية",
    },
    investigate: {
      en: "Why Zain wins now: Every humanitarian agency must move connectivity & cash-aid confirmation onto its own licensed budget in Q4 2026.",
      ar: "لماذا تفوز زين الآن: يتوجب على كل منظمة إنسانية نقل خدمات الاتصال وتأكيد المساعدات النقدية إلى عقود مرخصة خلال الربع الرابع 2026.",
    },
  },
  switch: {
    id: "switch",
    name: { en: "National Switch Surge · Banking OTP & APN", ar: "ذروة المقسم القومي · رسائل التحقق وربط الصرافات" },
    focus: "banks",
    impacted: ["banks", "messaging", "apn", "hub"],
    critical: ["banks"],
    latency: 54,
    requestRate: "6,190",
    failoverRate: "Dual-APN active",
    activeSites: "Khartoum & Omdurman branches",
    bedeStatus: { en: "Neutral SMPP + Bede QR", ar: "حياد تام للرسائل + دفع Bede" },
    smppThroughput: "99.8% OTP priority",
    apnPaths: { en: "Primary + Secondary APN", ar: "مسار APN أساسي + احتياطي" },
    trend: [40, 48, 63, 59, 56, 52, 55, 53, 54],
    alert: {
      en: "Cash scarcity + restored CBOS national switch (Aug 2026) driving 85% surge in mobile banking activations and heavy OTP traffic.",
      ar: "شح السيولة النقدية + عودة المقسم القومي للعمل (أغسطس 2026) يدفعان نمواً بنسبة 85% في تفعيل التطبيقات المصرفية وكثافة رسائل OTP.",
    },
    log: {
      en: "PRIORITY [smpp-gateway] Bank OTP route prioritized · ATM/POS dual-path APN failover verified · Delivery receipt synced",
      ar: "PRIORITY [smpp-gateway] إعطاء الأولوية لمسار رسائل التحقق للمصارف · تأكيد جاهزية مسار APN المزدوج للصرافات",
    },
    trace: {
      en: "Core Banking Switch → Franco Pinto SMPP Middleware → Zain SMSC → Customer Handset: 1.4s OTP delivery",
      ar: "النظام المصرفي ← وسيط Franco Pinto SMPP ← مركز رسائل زين ← هاتف العميل: وصول رمز التحقق خلال 1.4 ثانية",
    },
    investigate: {
      en: "Key strategy rule: Keep SMPP messaging and dual-path APN offers strictly neutral so rival bank wallets (Bankak, SAH, Cashi, MoMo) buy connectivity from Zain.",
      ar: "قاعدة استراتيجية: إبقاء عروض رسائل SMPP وربط APN محايدة تماماً لتشتري المحافظ والمصارف المنافسة خدمات الربط من زين.",
    },
  },
  blackout: {
    id: "blackout",
    name: { en: "3.5h Exam Shutdown / Data Cut · Offline Fallback", ar: "حجب الإنترنت أثناء الامتحانات (3.5 ساعة) · المسار البديل" },
    focus: "messaging",
    impacted: ["messaging", "hub", "cloud", "bede", "logistics"],
    critical: ["apn"],
    latency: 95,
    requestRate: "2,890",
    failoverRate: "100% SMS/USSD & Store-Forward",
    activeSites: "Voice/SMS/USSD up · IP Data restricted",
    bedeStatus: { en: "USSD & SMS receipts active", ar: "التأكيد عبر USSD والرسائل نشط" },
    smppThroughput: "100% fallback routing",
    apnPaths: { en: "Store-and-forward buffered", ar: "تخزين مؤقت وإرسال تلقائي" },
    trend: [42, 45, 110, 105, 98, 96, 94, 95, 95],
    alert: {
      en: "State-ordered 3.5h exam shutdown or regional fibre cut active; WhatsApp voice/video restricted since July 2025.",
      ar: "تفعيل حجب بيانات الإنترنت الرسمي (3.5 ساعة أثناء الامتحانات) أو انقطاع ألياف إقليمي؛ مع استمرار تقييد مكالمات واتساب منذ يوليو 2025.",
    },
    log: {
      en: "FAILOVER [resilience-engine] Mobile IP data unreachable → Switched NGO/Bank workflows to SMPP SMS, USSD & IVR · VTS trackers buffering locally",
      ar: "FAILOVER [resilience-engine] انقطاع بيانات IP ← تحويل عمليات المنظمات والمصارف تلقائياً إلى الرسائل النصية وUSSD والرد الآلي · تخزين بيانات تتبع الشاحنات محلياً",
    },
    trace: {
      en: "Offline Field App / GPS Tracker → Local Encrypted Buffer → Auto-Sync via SMS/USSD & APN on restoration",
      ar: "تطبيق الميدان / جهاز التتبع ← تخزين محلي مشفر ← مزامنة تلقائية عبر الرسائل وUSSD فور عودة الخدمة",
    },
    investigate: {
      en: "Core design principle from page 6: Every Zain enterprise bundle is engineered to keep working when IP data is down—using SMS, USSD, IVR and store-and-forward devices.",
      ar: "مبدأ التصميم الأساسي (صفحة 6): كل حزمة مؤسسية من زين مصممة لتستمر في العمل عند انقطاع بيانات الإنترنت عبر الرسائل النصية وUSSD والرد الآلي وأجهزة التخزين والإرسال.",
    },
  },
};

function healthForNode(id: string, scenario: B2BScenario): "Healthy" | "Warning" | "Critical" {
  if (scenario.critical.includes(id)) return "Critical";
  if (scenario.impacted.includes(id)) return "Warning";
  return "Healthy";
}

function relatedToNode(id: string): string[] {
  return b2bEdges.reduce<string[]>((acc, [a, b]) => {
    if (a === id) acc.push(b);
    if (b === id) acc.push(a);
    return acc;
  }, []);
}

function Sparkline({
  values,
  color = "#bfa0e6",
  label,
}: {
  values: number[];
  color?: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  const points = values
    .map((v, i) => `${(i * 200) / (values.length - 1)},${84 - Math.min(75, v * 0.6)}`)
    .join(" ");
  return (
    <svg className="eco-spark" viewBox="0 0 200 88" role="img" aria-label={label}>
      <path d="M0 20H200M0 45H200M0 70H200" stroke="#ffffff0b" fill="none" />
      <motion.polyline
        points={points}
        animate={{ points }}
        transition={{ duration: reduce ? 0 : 0.5 }}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d={`M0 88L${points.replaceAll(" ", "L")}L200 88Z`}
        fill={color}
        opacity=".08"
      />
    </svg>
  );
}

export function B2BSudaneseEcosystem({ defaultOpen = true }: { defaultOpen?: boolean }) {
  const { b, isAr, locale } = useLocale();
  const [scenarioId, setScenario] = useState<B2BScenarioId>("normal");
  const [selected, setSelected] = useState<string>("hub");
  const [hover, setHover] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [detail, setDetail] = useState(defaultOpen);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const uid = useId().replaceAll(":", "");

  const scenario = b2bScenarios[scenarioId];
  const focus = hover || selected;
  const related = relatedToNode(focus);
  const hoverNode = b2bNodes.find((n) => n.id === hover);
  const selectedNode = b2bNodes.find((n) => n.id === selected) || b2bNodes[5];
  const getNode = (id: string) => b2bNodes.find((n) => n.id === id)!;

  const chooseScenario = (id: B2BScenarioId) => {
    setScenario(id);
    setSelected(b2bScenarios[id].focus);
    setDetail(true);
  };

  const counts = b2bNodes.reduce(
    (acc, n) => {
      acc[healthForNode(n.id, scenario)]++;
      return acc;
    },
    { Healthy: 0, Warning: 0, Critical: 0 },
  );

  return (
    <section
      id="living-ecosystem"
      className={`living-ecosystem ${reduce ? "reduced-motion" : ""}`}
      aria-labelledby="eco-title"
      dir={isAr ? "rtl" : "ltr"}
    >
      <header className="eco-heading">
        <div>
          <span className="eco-brand-label">
            {isAr
              ? "زين أعمال السودان × FRANCO PINTO · معمارية الحلول التفاعلية"
              : "ZAIN SUDAN BUSINESS × FRANCO PINTO · INTERACTIVE ARCHITECTURE"}
          </span>
          <span className="eco-optional-label">
            {isAr
              ? "محاكاة تفاعلية حية لكيفية ربط القطاعات ذات الأولوية بحزم زين وطبقة الصمود والتكامل."
              : "Interactive simulation showing how priority sectors connect to Zain bundles and Franco Pinto's resilience layer."}
          </span>
          <h2 id="eco-title">
            {isAr
              ? "منظومة أعمال السودان المتصلة. مصممة للعمل في كل الظروف."
              : "Where Sudan's Business Connects. Engineered for Disruption."}
          </h2>
          <p>
            {isAr
              ? "اختر أحد سيناريوهات السوق الأربعة أدناه (مثل انتهاء مهلة Starlink في نوفمبر 2026، أو ذروة المقسم القومي للمصارف، أو حجب الإنترنت أثناء الامتحانات) لترى كيف تستجيب حزم زين تلقائياً."
              : "Switch between four real market scenarios below—the November 2026 Starlink deadline, the restored national payment switch surge, or a 3.5-hour exam data shutdown—to see how Zain's bundles respond."}
          </p>
        </div>
        <div className="eco-demonstration">
          <span>
            <i /> {isAr ? "نموذج معماري تفاعلي" : "Interactive Architecture"}
          </span>
          <strong>{isAr ? "بيانات موثقة · أكتوبر 2026" : "VERIFIED DATA · OCT 2026"}</strong>
          <small>
            {isAr ? "المناطق الآمنة: بورتسودان، الشرق،" : "Safe hubs: Port Sudan, East,"}
            <br />
            {isAr ? "الشمال، الوسط، والخرطوم." : "North, Centre & Khartoum."}
          </small>
        </div>
      </header>

      <p className="eco-topology-disclosure">
        {isAr
          ? "مبدأ التصميم الأساسي: كل عرض مؤسسي يستمر في العمل عند انقطاع بيانات الإنترنت عبر بدائل SMS وUSSD والرد الآلي والتخزين المحلي."
          : "Core design principle: Every enterprise offer keeps working when IP data is down—via SMS/USSD fallback, IVR and store-and-forward sync."}
        <span>
          {isAr
            ? "اضغط على أي عقدة في الشبكة لاستعراض تفاصيل القطاع، ومنتجات زين الداخلة فيه، ودور Franco Pinto."
            : "Select any node in the topology to inspect buyer pain, Zain products inside, and Franco Pinto's value-add."}
        </span>
      </p>

      <div className="eco-toolbar">
        <div className="eco-scenarios" aria-label={isAr ? "سيناريوهات السوق" : "Market scenarios"}>
          {(Object.values(b2bScenarios) as B2BScenario[]).map((s) => (
            <button
              key={s.id}
              aria-pressed={scenario.id === s.id}
              onClick={() => chooseScenario(s.id)}
            >
              <i
                className={
                  s.id === "normal"
                    ? "healthy"
                    : s.id === "blackout"
                      ? "critical"
                      : "warning"
                }
              />
              {b(s.name)}
            </button>
          ))}
        </div>
        <div className="eco-tools">
          <button
            aria-label={
              paused
                ? isAr
                  ? "تشغيل تدفق الإشارات"
                  : "Resume signal flow"
                : isAr
                  ? "إيقاف تدفق الإشارات مؤقتاً"
                  : "Pause signal flow"
            }
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </div>

      <div className="eco-workspace">
        <div className={`eco-topology ${paused ? "paused" : ""}`}>
          <div className="eco-map-meta">
            <span>
              <span className="eco-live-dot" />{" "}
              {isAr
                ? "مخطط تدفق حزم زين للأعمال ومسارات البدائل التلقائية"
                : "Zain Sudan Business bundle topology & automatic fallback paths"}
            </span>
            <div>
              <button
                aria-label="Zoom out"
                disabled={zoom <= 1}
                onClick={() => setZoom((z) => Math.max(1, z - 0.15))}
              >
                <Minus size={13} />
              </button>
              <button aria-label="Reset zoom" onClick={() => setZoom(1)}>
                <Maximize2 size={13} />
              </button>
              <button
                aria-label="Zoom in"
                disabled={zoom >= 1.5}
                onClick={() => setZoom((z) => Math.min(1.5, z + 0.15))}
              >
                <Plus size={13} />
              </button>
            </div>
          </div>

          <div className="eco-desktop-map">
            <svg
              style={{ direction: "ltr" }}
              viewBox="0 0 900 540"
              aria-label="Interactive B2B architecture map"
            >
              <defs>
                <radialGradient id={`${uid}glow`}>
                  <stop stopColor="#ed088d" stopOpacity=".16" />
                  <stop offset="1" stopColor="#9064ad" stopOpacity="0" />
                </radialGradient>
                <marker
                  id={`${uid}arrow`}
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="4"
                  markerHeight="4"
                  orient="auto"
                >
                  <path d="M0 0L8 4L0 8" fill="#9c83b6" />
                </marker>
              </defs>
              <ellipse
                cx="450"
                cy="265"
                rx="420"
                ry="250"
                fill={`url(#${uid}glow)`}
              />
              <motion.g
                animate={{ scale: zoom }}
                style={{ transformOrigin: "450px 265px" }}
                transition={{ duration: reduce ? 0 : 0.35 }}
              >
                <g className="eco-zone-labels">
                  <text x="28" y="32">
                    {isAr ? "قطاعات العملاء ذات الأولوية" : "PRIORITY BUYER SECTORS"}
                  </text>
                  <text x="28" y="195">
                    {isAr ? "طبقة التكامل والحزم والمدفوعات" : "BUNDLE, WALLET & INTEGRATION LAYER"}
                  </text>
                  <text x="28" y="385">
                    {isAr ? "شبكة زين ومسارات الصمود والبدائل" : "ZAIN CORE NETWORK & RESILIENCE RAILS"}
                  </text>
                </g>

                {b2bEdges.map(([a, bEdge], i) => {
                  const from = getNode(a);
                  const to = getNode(bEdge);
                  const d = `M${from.x} ${from.y} C${from.x} ${(from.y + to.y) / 2},${to.x} ${(from.y + to.y) / 2},${to.x} ${to.y}`;
                  const active =
                    a === focus ||
                    bEdge === focus ||
                    (scenario.id !== "normal" &&
                      scenario.impacted.includes(a) &&
                      scenario.impacted.includes(bEdge));
                  const alert = active && scenario.id !== "normal";
                  return (
                    <g
                      key={`${a}-${bEdge}`}
                      className={`eco-edge ${active ? "active" : ""} ${alert ? "incident" : ""}`}
                    >
                      <path d={d} markerEnd={`url(#${uid}arrow)`} />
                      {(active || i % 3 === 0) && !reduce && (
                        <path
                          className="eco-packet"
                          d={d}
                          style={{ animationDelay: `-${i * 0.37}s` }}
                        />
                      )}
                    </g>
                  );
                })}

                {b2bNodes.map((s) => {
                  const health = healthForNode(s.id, scenario);
                  const Icon = s.icon;
                  const isHub = s.id === "hub";
                  const r = isHub ? 38 : s.category === "Sector" ? 25 : 23;
                  const isSelected = selected === s.id;
                  const isHighlighted = related.includes(s.id);
                  return (
                    <g
                      key={s.id}
                      className={`eco-node ${health.toLowerCase()} ${isSelected ? "selected" : ""} ${isHighlighted ? "highlighted" : ""} ${isHub ? "hub" : ""}`}
                      transform={`translate(${s.x} ${s.y})`}
                      role="button"
                      tabIndex={0}
                      aria-label={b(s.name)}
                      aria-pressed={isSelected}
                      onClick={() => {
                        setSelected(s.id);
                        setDetail(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelected(s.id);
                          setDetail(true);
                        }
                      }}
                      onMouseEnter={() => setHover(s.id)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <circle className="node-halo" r={r + 8} />
                      {s.category === "Bundle" ? (
                        <path
                          className="node-face"
                          d="M-24-13L0-27L24-13V13L0 27L-24 13Z"
                        />
                      ) : (
                        <circle className="node-face" r={r} />
                      )}
                      <Icon
                        x={isHub ? -16 : -10}
                        y={isHub ? -16 : -10}
                        width={isHub ? 32 : 20}
                        height={isHub ? 32 : 20}
                        strokeWidth={1.5}
                      />
                      <circle
                        className="node-status"
                        cx={r * 0.78}
                        cy={-r * 0.72}
                        r="4"
                      />
                      <text y={r + 22} textAnchor="middle" className="node-name">
                        {b(s.name)}
                      </text>
                      <text y={r + 36} textAnchor="middle" className="node-metric">
                        {b(s.metric)}
                      </text>
                    </g>
                  );
                })}
              </motion.g>
            </svg>
          </div>

          <div className="eco-mobile-explorer">
            <label htmlFor="eco-b2b-select">
              {isAr ? "اختر عنصراً لاستعراضه" : "Select a component to inspect"}
            </label>
            <select
              id="eco-b2b-select"
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value);
                setDetail(true);
              }}
            >
              {b2bNodes.map((n) => (
                <option key={n.id} value={n.id}>
                  {b(n.name)}
                </option>
              ))}
            </select>
          </div>

          {hoverNode && (
            <div className="eco-tooltip" role="tooltip">
              <strong>{b(hoverNode.name)}</strong>
              <span>{b(hoverNode.metric)}</span>
              <small>{b(hoverNode.zainProduct)}</small>
            </div>
          )}

          <div className="eco-map-legend">
            <span>
              <i className="healthy" />{" "}
              {isAr ? "تشغيل اعتيادي" : "Nominal operation"}
            </span>
            <span>
              <i className="warning" />{" "}
              {isAr ? "تحول/ضغط نشط" : "Active surge / migration"}
            </span>
            <span>
              <i className="critical" />{" "}
              {isAr ? "مسار طوارئ بديل" : "Fallback engaged"}
            </span>
            <span className="eco-select-hint">
              {isAr
                ? "اضغط على أي دائرة لعرض التفاصيل المعمارية"
                : "Click any node to inspect solution architecture"}
            </span>
          </div>
        </div>

        <aside
          className="eco-console"
          aria-label={isAr ? "مؤشرات الشبكة والحزم" : "Network & bundle telemetry"}
        >
          <div className="eco-health">
            <span>
              {isAr ? "حالة المنظومة" : "System posture"}
              <small>
                {b2bNodes.length} {isAr ? "وحدات متصلة" : "connected modules"}
              </small>
            </span>
            <div>
              <span>
                <i className="healthy" />
                <strong>{counts.Healthy}</strong>
                <small>{isAr ? "اعتيادي" : "Nominal"}</small>
              </span>
              <span>
                <i className="warning" />
                <strong>{counts.Warning}</strong>
                <small>{isAr ? "نشط" : "Active"}</small>
              </span>
              <span>
                <i className="critical" />
                <strong>{counts.Critical}</strong>
                <small>{isAr ? "بديل" : "Fallback"}</small>
              </span>
            </div>
          </div>

          <section className="eco-console-block">
            <header>
              <span>{isAr ? "زمن استجابة المعاملات" : "Transaction latency"}</span>
              <small>p95</small>
            </header>
            <div className="eco-latency">
              <strong>
                {scenario.latency}
                <small>ms</small>
              </strong>
              <span className={scenario.id === "normal" ? "healthy" : "warning"}>
                {scenario.failoverRate}
              </span>
            </div>
            <Sparkline
              values={scenario.trend}
              color={scenario.id === "normal" ? "#93d5ba" : "#ed088d"}
              label="Latency sparkline"
            />
            <div className="eco-inline-metrics">
              <div>
                <small>{isAr ? "معدل الطلبات" : "Throughput"}</small>
                <strong>
                  {scenario.requestRate} <small>tx/m</small>
                </strong>
              </div>
              <div>
                <small>{isAr ? "المواقع النشطة" : "Active sites"}</small>
                <strong>{scenario.activeSites}</strong>
              </div>
            </div>
          </section>

          <section className="eco-console-block eco-oracle">
            <header>
              <span>
                <ShieldCheck size={13} />{" "}
                {isAr ? "جاهزية ركائز زين" : "Zain pillar readiness"}
              </span>
              <small>{isAr ? "مباشر" : "Live"}</small>
            </header>
            <dl>
              <div>
                <dt>{isAr ? "محفظة Bede" : "Bede Corporate"}</dt>
                <dd>{b(scenario.bedeStatus)}</dd>
              </div>
              <div>
                <dt>{isAr ? "بوابة SMPP / USSD" : "SMPP / USSD"}</dt>
                <dd>{scenario.smppThroughput}</dd>
              </div>
              <div>
                <dt>{isAr ? "دوائر APN والربط" : "APN & Backhaul"}</dt>
                <dd>{b(scenario.apnPaths)}</dd>
              </div>
            </dl>
          </section>
        </aside>
      </div>

      <section
        className={`eco-evidence ${scenario.id === "normal" ? "is-healthy" : ""}`}
        aria-live="polite"
      >
        <div className="eco-evidence-title">
          <span>
            <Activity size={15} />{" "}
            {isAr ? "قراءة السيناريو الحالي" : "Scenario intelligence"}
          </span>
          <span className="eco-demo-tag">
            {locale === "ar" ? "أكتوبر 2026" : "OCTOBER 2026"}
          </span>
        </div>
        <div className="eco-evidence-grid">
          <div>
            <small>{isAr ? "محفز السوق" : "Market trigger"}</small>
            <strong>{b(scenario.alert)}</strong>
          </div>
          <div>
            <small>{isAr ? "استجابة المنظومة" : "System response"}</small>
            <code>{b(scenario.log)}</code>
          </div>
          <div>
            <small>{isAr ? "مسار الخدمة" : "Service path"}</small>
            <code>{b(scenario.trace)}</code>
          </div>
        </div>
        <p>
          <strong>{isAr ? "الخلاصة التنفيذية:" : "Strategic takeaway:"}</strong>{" "}
          {b(scenario.investigate)}
        </p>
      </section>

      <AnimatePresence>
        {detail && selectedNode && (
          <motion.section
            className="eco-detail"
            id="eco-service-detail"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
          >
            <header>
              <div>
                <small>
                  {selectedNode.category} · {b(selectedNode.metric)}
                </small>
                <h3>{b(selectedNode.name)}</h3>
                <p>{b(selectedNode.description)}</p>
              </div>
              <button
                onClick={() => setDetail(false)}
                aria-label={isAr ? "إغلاق التفاصيل" : "Close details"}
              >
                <X size={17} />
              </button>
            </header>
            <dl>
              <div>
                <dt>
                  {isAr
                    ? "منتجات زين السودان المستخدمة"
                    : "Zain Sudan Business products inside"}
                </dt>
                <dd>{b(selectedNode.zainProduct)}</dd>
              </div>
              <div>
                <dt>
                  {isAr
                    ? "القيمة المضافة والتكامل من Franco Pinto"
                    : "Franco Pinto integration & resilience layer"}
                </dt>
                <dd>{b(selectedNode.francoPintoRole)}</dd>
              </div>
              <div>
                <dt>
                  {isAr
                    ? "ما الذي تتم مراقبته وضمان استمراريته"
                    : "Operational continuity & telemetry"}
                </dt>
                <dd>{b(selectedNode.monitored)}</dd>
              </div>
            </dl>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}
