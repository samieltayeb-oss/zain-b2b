"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/components/locale-provider";
import { sectorsData, type SectorItem } from "@/content/sectors-data";
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
} from "lucide-react";

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
