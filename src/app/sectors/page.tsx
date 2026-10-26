"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/components/locale-provider";
import { sectorsData, type SectorItem } from "@/content/sectors-data";
import { sectorProspects } from "@/content/sector-prospects";
import { Reveal, Badge, EvidenceBadge } from "@/components/ui";
import { PriorityRankingVisualizer } from "@/features/charts/priority-ranking";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldAlert,
  Quote,
  Compass,
  Target,
  MapPin,
  UserCheck,
  Send,
} from "lucide-react";

const sectorHeroVisuals: Record<
  string,
  { img: string; captionEn: string; captionAr: string }
> = {
  ngos: {
    img: "/assets/report/connected-aid-vsat.jpg",
    captionEn:
      "Connected Aid Infrastructure: Licensed 4G/VSAT compound failover, Bede Corporate bulk cash & offline telemetry",
    captionAr:
      "بنية الإغاثة المتصلة: مسار 4G/VSAT مرخص للمقرات، صرف نقدي بالجملة عبر Bede ومزامنة ميدانية",
  },
  banking: {
    img: "/assets/report/banking-database.jpg",
    captionEn:
      "Financial Grade Architecture: Dual-Path MPLS/APN, Direct SMPP OTP Gateways & Geo-Redundant Database Sync",
    captionAr:
      "بنية المصارف والمدفوعات: مسار MPLS/APN مزدوج، بوابة SMPP لرموز التحقق (OTP) وتكرار قواعد البيانات",
  },
  ports: {
    img: "/assets/report/port-sudan-iot.jpg",
    captionEn:
      "Port Sudan Maritime & Corridor Telemetry: Fleet VTS, Customs APN & Cold-Chain Container IoT",
    captionAr:
      "القياس اللوجستي في بورتسودان: تتبع الأسطول (VTS)، شبكات APN للتخليص الجمركي وحاويات التبريد",
  },
  agriculture: {
    img: "/assets/report/solar-agro-telemetry.jpg",
    captionEn:
      "Agro-Industrial Telemetry: Solar Pump IoT, Grain Silo Sensors & Bede Grower Payouts",
    captionAr:
      "القياس الزراعي والصناعي: استشعار مضخات الطاقة الشمسية والصوامع وصرف مستحقات المزارعين عبر Bede",
  },
  energy: {
    img: "/assets/report/solar-agro-telemetry.jpg",
    captionEn:
      "Clean Energy & Microgrid Telemetry: M2M SIMs for Solar Inverters, Pay-As-You-Go Metering & Bede Billing",
    captionAr:
      "قياس الطاقة الشمسية والشبكات المصغرة: شرائح M2M للعاكسات، والعدادات الذكية والفوترة عبر Bede",
  },
  healthcare: {
    img: "/assets/report/connected-aid-vsat.jpg",
    captionEn:
      "Connected Healthcare & Cold-Chain: Vaccine Fridge IoT Alerts, Hospital APN & Tele-Consultation Hotlines",
    captionAr:
      "الرعاية الصحية وسلاسل التبريد: تنبيهات ثلاجات اللقاحات، شبكات المستشفيات وخطوط الاستشارة",
  },
  education: {
    img: "/assets/report/cloud-datacenter.jpg",
    captionEn:
      "University & Exam Infrastructure: ZainCloud LMS Hosting, Zero-Rated Student Portals & Bede Tuition",
    captionAr:
      "بنية الجامعات والامتحانات: استضافة المنصات التعليمية على ZainCloud وبوابات الطلاب بدون رصيد",
  },
  mining: {
    img: "/assets/report/port-sudan-iot.jpg",
    captionEn:
      "Red Sea & Northern Concession Connectivity: Licensed VSAT + 4G CUG, Convoy VTS & Bede Payroll",
    captionAr:
      "ربط امتيازات التعدين في البحر الأحمر والشمالية: قمر صناعي مرخص و4G وتتبع القوافل ورواتب Bede",
  },
  "real-estate": {
    img: "/assets/report/cover-hero.jpg",
    captionEn:
      "Khartoum & East Nile Reconstruction: Rapid 4G Site Office Boxes, Crew SIM Pools & Equipment VTS",
    captionAr:
      "إعمار الخرطوم وشرق النيل: صناديق ربط المواقع الهندسية بـ 4G، شرائح الفرق وتتبع المعدات",
  },
  retail: {
    img: "/assets/report/banking-database.jpg",
    captionEn:
      "Wholesale & FMCG Distribution: Dual-SIM POS Connectivity, Delivery Fleet VTS & Bede B2B Collection",
    captionAr:
      "توزيع السلع والتجارة: شرائح نقاط البيع (POS)، تتبع شاحنات التوزيع والتحصيل الرقمي عبر Bede",
  },
  public: {
    img: "/assets/report/cloud-datacenter.jpg",
    captionEn:
      "Sovereign e-Government & Utilities: In-Country ZainCloud Hosting, SMPP Citizen Alerts & Bede Revenue Collection",
    captionAr:
      "الحكومة الإلكترونية والمرافق: استضافة سيادية داخل السودان على ZainCloud وتنبيهات الرسائل والتحصيل",
  },
  smes: {
    img: "/assets/report/cover-hero.jpg",
    captionEn:
      "Business-in-a-Box for Returning SMEs: 4G CPE Router, Staff Hybrid SIMs, Toll-Free 800 & Bede Merchant",
    captionAr:
      "حزمة «شركة في صندوق» للمنشآت العائدة: راوتر 4G، شرائح الموظفين، الرقم الموحد وقبول الدفع عبر Bede",
  },
};

function SectorsExplorerContent() {
  const { b, isAr } = useLocale();
  const searchParams = useSearchParams();
  const initialId = searchParams.get("sector") || "ngos";
  const [selectedId, setSelectedId] = useState<string>(initialId);

  useEffect(() => {
    const paramId = searchParams.get("sector");
    if (paramId && sectorsData.some((s) => s.id === paramId)) {
      setSelectedId(paramId);
    }
  }, [searchParams]);

  const activeSector =
    sectorsData.find((s) => s.id === selectedId) || sectorsData[0];
  const currentIndex = sectorsData.findIndex((s) => s.id === activeSector.id);
  const prevSector = currentIndex > 0 ? sectorsData[currentIndex - 1] : null;
  const nextSector =
    currentIndex < sectorsData.length - 1 ? sectorsData[currentIndex + 1] : null;

  return (
    <div className="page">
      <Reveal>
        <div className="page-heading">
          <div>
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "04 · دليل القطاعات الـ 12 · بمن نبدأ أولاً"
                : "04 · WHO TO SERVE FIRST: SECTOR BY SECTOR"}
            </div>
            <h1>
              {isAr
                ? "دليل القطاعات الـ 12 المرتبة بالأولوية"
                : "Twelve Sectors, Ranked & Ready for Action"}
            </h1>
            <p>
              {isAr
                ? "يغطي كل فصل حالة السوق، وصانع القرار (المشتري)، والتحديات التشغيلية، وعرض زين، ولماذا سينجح، ولماذا زين، وطريقة الدخول، والقيمة المضافة من Franco Pinto، والتنبيهات الرقابية."
                : "Each chapter covers market state, buyer persona, operational pain, the Zain offer, why it works, why Zain leads, entry approach, Franco Pinto's contribution and compliance flags."}
            </p>
          </div>
          <Badge tone="purple">
            {isAr ? "12 قطاعاً مدروساً" : "12 Sector Playbooks"}
          </Badge>
        </div>
      </Reveal>

      <div className="sector-explorer-layout">
        {/* Left Rail: 12 Ranked Sectors */}
        <aside className="sector-rail" aria-label={isAr ? "قائمة القطاعات" : "Sectors list"}>
          <div className="sector-rail-head">
            <strong>{isAr ? "الترتيب الموحد (1–12)" : "Combined Rank (1–12)"}</strong>
            <small>{isAr ? "اختر قطاعاً لعرض الخطة" : "Select a sector"}</small>
          </div>
          <div className="sector-rail-list">
            {sectorsData.map((s) => {
              const isSelected = s.id === activeSector.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`sector-step-btn ${isSelected ? "is-active" : ""}`}
                  onClick={() => setSelectedId(s.id)}
                >
                  <span className={`sector-step-rank tier-${s.tier}`}>
                    {s.rank}
                  </span>
                  <div className="sector-step-copy">
                    <strong>{b(s.name)}</strong>
                    <small>
                      {isAr
                        ? `التقييم: ${s.strategyScore.toFixed(2)} · المبيعات #${s.salesRank}`
                        : `Score ${s.strategyScore.toFixed(2)} · Sales #${s.salesRank}`}
                    </small>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Sector Playbook Card */}
        <article className="panel sector-playbook-card" key={activeSector.id}>
          <header className="sector-playbook-header">
            <div className="sector-rank-banner">
              <div className={`sector-giant-rank tier-${activeSector.tier}`}>
                <span>{isAr ? "الترتيب" : "RANK"}</span>
                <strong>{activeSector.rank}</strong>
              </div>
              <div className="sector-title-block">
                <div className="sector-meta-pills">
                  <span className={`tier-pill tier-${activeSector.tier}`}>
                    {b(activeSector.tierLabel)}
                  </span>
                  <span className="score-pill">
                    {isAr
                      ? `ترتيب المبيعات: #${activeSector.salesRank}`
                      : `Sales view rank: #${activeSector.salesRank}`}
                  </span>
                  <span className="score-pill">
                    {isAr
                      ? `الترتيب الاستراتيجي: #${activeSector.strategyRank} (${activeSector.strategyScore.toFixed(2)} / 5)`
                      : `Strategy rank: #${activeSector.strategyRank} (${activeSector.strategyScore.toFixed(2)} / 5)`}
                  </span>
                </div>
                <h2>{b(activeSector.name)}</h2>
              </div>
            </div>
          </header>

          {/* Sector Architecture & Infrastructure Visual Showcase */}
          {sectorHeroVisuals[activeSector.id] && (
            <div className="sector-visual-showcase">
              <img
                src={sectorHeroVisuals[activeSector.id].img}
                alt={b(activeSector.name)}
              />
              <div className="sector-visual-overlay">
                <small>
                  {isAr
                    ? "البنية التحتية المقترحة لزين أعمال"
                    : "ZAIN SUDAN BUSINESS · ARCHITECTURE BLUEPRINT"}
                </small>
                <strong>
                  {isAr
                    ? sectorHeroVisuals[activeSector.id].captionAr
                    : sectorHeroVisuals[activeSector.id].captionEn}
                </strong>
              </div>
            </div>
          )}

          {/* Market State */}
          <section className="sector-block">
            <h3>
              <Compass size={16} />
              {isAr ? "حالة السوق والأدلة الموثقة" : "Market State & Public Evidence"}
            </h3>
            <ul className="sector-evidence-list">
              {activeSector.marketState.map((item, idx) => (
                <li key={idx}>
                  <span>{b(item.text)}</span>
                  <EvidenceBadge type={item.evidence} citation={item.citation} />
                </li>
              ))}
            </ul>
          </section>

          {/* Two columns: The Buyer & Pain vs What Zain Offers */}
          <div className="sector-two-col">
            <section className="sector-subcard">
              <h3>
                <Users size={16} />
                {isAr ? "صانع القرار (المشتري)" : "The Buyer"}
              </h3>
              <p className="buyer-persona-text">{b(activeSector.buyer)}</p>

              <h3 style={{ marginTop: 20 }}>
                <AlertTriangle size={16} />
                {isAr ? "التحديات والاحتياجات الفعلية" : "Their Operational Pain"}
              </h3>
              <ul className="sector-bullet-list">
                {activeSector.pains.map((p, i) => (
                  <li key={i}>{b(p)}</li>
                ))}
              </ul>
            </section>

            <section className="sector-subcard is-zain-offer">
              <h3>
                <CheckCircle2 size={16} />
                {isAr ? "ماذا تقدم زين أعمال" : "What Zain Sudan Business Offers"}
              </h3>
              <ul className="sector-bullet-list">
                {activeSector.zainOffers.map((o, i) => (
                  <li key={i}>{b(o)}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Why It Works & Why Zain */}
          <div className="sector-two-col">
            <section className="sector-subcard">
              <h3>{isAr ? "لماذا سينجح هذا العرض الآن" : "Why It Will Work"}</h3>
              <p>{b(activeSector.whyItWorks)}</p>
            </section>
            <section className="sector-subcard">
              <h3>{isAr ? "لماذا زين هي الأجدر بالقيادة" : "Why Zain"}</h3>
              <p>{b(activeSector.whyZain)}</p>
            </section>
          </div>

          {/* How to Approach Banner */}
          <section className="sector-approach-box">
            <div className="approach-quote">
              <Quote size={18} />
              <strong>&ldquo;{b(activeSector.approachQuote)}&rdquo;</strong>
            </div>
            <div className="approach-details">
              <div>
                <small>{isAr ? "عرض الدخول المقترح (Pilot):" : "Entry Offer (Pilot):"}</small>
                <span>{b(activeSector.leadBundle)}</span>
              </div>
              <div>
                <small>{isAr ? "مسار الوصول والبيع:" : "Sales Route:"}</small>
                <span>{b(activeSector.route)}</span>
              </div>
            </div>
          </section>

          {/* Franco Pinto Value-Add & Compliance Flags */}
          <div className="sector-two-col">
            <section className="sector-subcard is-fp-box">
              <h3>
                <Layers size={16} />
                {isAr
                  ? "القيمة المضافة والتكامل من Franco Pinto"
                  : "Franco Pinto Value-Add & Integration Layer"}
              </h3>
              <ul className="sector-bullet-list">
                {activeSector.francoPintoAdds.map((fp, i) => (
                  <li key={i}>{b(fp)}</li>
                ))}
              </ul>
            </section>

            <section className="sector-subcard is-flags-box">
              <h3>
                <ShieldAlert size={16} />
                {isAr ? "محاذير وتنبيهات التنفيذ" : "Commercial & Compliance Flags"}
              </h3>
              <ul className="sector-bullet-list">
                {activeSector.flags.map((fl, i) => (
                  <li key={i}>{b(fl)}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* 5 Potential Target Clients & Decision-Maker Outreach Playbook */}
          {sectorProspects[activeSector.id] && (
            <section className="prospects-playbook-block">
              <div className="prospects-playbook-head">
                <div>
                  <h3>
                    <Target size={18} />
                    {isAr
                      ? "أهم 5 جهات مستهدفة ودليل الوصول لصناع القرار (DM Outreach Playbook)"
                      : "Top 5 Potential Target Clients & Decision-Maker (DM) Outreach Playbook"}
                  </h3>
                  <p>
                    {isAr
                      ? "قائمة عملية لفريق مبيعات وحلول الأعمال (B2B Presales) للبحث عن صناع القرار والتواصل معهم مباشرة مع تحديد نقطة الألم وعرض الدخول المقترح لكل جهة."
                      : "Actionable account target list for the B2B Presales & Cloud/Hosting team to identify Decision-Makers, understand their operational pain points, and lead with a tailored pitch."}
                  </p>
                </div>
                <Badge tone="purple">
                  {isAr ? "5 عملاء محتملين للقطاع" : "5 Target Prospects"}
                </Badge>
              </div>

              <div className="prospects-cards-grid">
                {sectorProspects[activeSector.id].map((prospect, idx) => (
                  <div className="prospect-card" key={idx}>
                    <div className="prospect-card-top">
                      <div className="prospect-name-wrap">
                        <span className="prospect-num">{idx + 1}</span>
                        <strong>{b(prospect.name)}</strong>
                      </div>
                      <span className="prospect-hub-pill">
                        <MapPin size={12} />
                        {b(prospect.hub)}
                      </span>
                    </div>

                    <div className="prospect-details-grid">
                      <div className="prospect-detail-col is-dm">
                        <small>
                          <UserCheck size={12} />
                          {isAr
                            ? "صانع القرار المستهدف (DM Title)"
                            : "Target Decision-Maker (DM) to Search"}
                        </small>
                        <p>{b(prospect.dmTitle)}</p>
                      </div>

                      <div className="prospect-detail-col">
                        <small>
                          <AlertTriangle size={12} />
                          {isAr
                            ? "لماذا هذه الجهة / نقطة الألم المتوقعة"
                            : "Why Target / Expected Pain Point"}
                        </small>
                        <p>{b(prospect.painPoint)}</p>
                      </div>

                      <div className="prospect-detail-col is-pitch">
                        <small>
                          <Send size={12} />
                          {isAr
                            ? "زاوية التواصل والعرض المقترح"
                            : "Recommended Presales Outreach Pitch"}
                        </small>
                        <p>{b(prospect.outreachPitch)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Footer Navigation between sectors */}
          <footer className="sector-playbook-nav">
            {prevSector ? (
              <button
                type="button"
                className="button button-outline"
                onClick={() => setSelectedId(prevSector.id)}
              >
                <ArrowLeft size={15} />
                <span>
                  #{prevSector.rank} {b(prevSector.name)}
                </span>
              </button>
            ) : (
              <span />
            )}

            {nextSector && (
              <button
                type="button"
                className="button button-primary"
                onClick={() => setSelectedId(nextSector.id)}
              >
                <span>
                  #{nextSector.rank} {b(nextSector.name)}
                </span>
                <ArrowRight size={15} />
              </button>
            )}
          </footer>
        </article>
      </div>

      {/* Other opportunities outside the twelve (Page 12) */}
      <Reveal delay={0.12}>
        <section className="panel" style={{ marginTop: 28 }}>
          <div className="eyebrow">
            <span className="tiny-square" />
            {isAr
              ? "فرص إضافية خارج القطاعات الـ 12"
              : "OTHER OPPORTUNITIES OUTSIDE THE TWELVE (PAGE 12)"}
          </div>
          <h2>
            {isAr
              ? "مسارات مكملة للتوسع المستقبلي"
              : "Complementary Adjacencies Noted in the Report"}
          </h2>
          <div className="value-strip" style={{ borderBottom: 0, paddingBottom: 6 }}>
            <div>
              <span className="value-icon">
                <Sparkles size={19} />
              </span>
              <div>
                <strong>
                  {isAr
                    ? "تحويلات المغتربين (B2B2C)"
                    : "Diaspora Remittances (B2B2C)"}
                </strong>
                <p>
                  {isAr
                    ? "ربط شركاء التحويلات الدولية للدفع المباشر في محافظ Bede (حصلت على تقييم استراتيجي 3.65 / 5)."
                    : "Inbound remittance partners paying directly into Bede wallets; scored 3.65 / 5 in the strategy view."}
                </p>
              </div>
            </div>
            <div>
              <span className="value-icon">
                <Compass size={19} />
              </span>
              <div>
                <strong>
                  {isAr
                    ? "البعثات الدبلوماسية والسفارات"
                    : "Relocating Diplomatic Missions"}
                </strong>
                <p>
                  {isAr
                    ? "السفارات والبعثات المنتقلة من بورتسودان إلى الخرطوم تحتاج إلى روابط اتصال آمنة وموثوقة [51]."
                    : "Embassies relocating from Port Sudan back to Khartoum require dedicated secure connectivity [51]."}
                </p>
              </div>
            </div>
            <div>
              <span className="value-icon">
                <Layers size={19} />
              </span>
              <div>
                <strong>
                  {isAr
                    ? "مراكز الاتصال التعاقدية والإعلام"
                    : "Outsourced Contact Centres & Media"}
                </strong>
                <p>
                  {isAr
                    ? "توظيف خدمات CCaaS والرد الآلي (IVR) والاتصال الآلي لعمليات خدمة العملاء التعاقدية."
                    : "Leveraging Zain CCaaS, IVR and Auto-Dialer for outsourced customer service operations."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.16}>
        <div style={{ marginTop: 28 }}>
          <PriorityRankingVisualizer
            onSelectSector={(s) => {
              setSelectedId(s.id);
              window.scrollTo({ top: 120, behavior: "smooth" });
            }}
          />
        </div>
      </Reveal>
    </div>
  );
}

export default function SectorsPage() {
  return (
    <Suspense fallback={<div className="skeleton" />}>
      <SectorsExplorerContent />
    </Suspense>
  );
}
