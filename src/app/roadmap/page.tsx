"use client";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import {
  roadmapPhases,
  partnershipDivision,
  commercialStructures,
  risksAndSafeguards,
  immediateNextSteps,
  questionsForZain,
} from "@/content/roadmap-and-risks";
import { Reveal, Badge, EvidenceBadge } from "@/components/ui";
import {
  Layers,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Handshake,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function RoadmapAndPartnershipPage() {
  const { b, isAr } = useLocale();
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="page">
      <Reveal>
        <div className="page-heading">
          <div>
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "07، 08، 09، 10 · نموذج الشراكة، خارطة الطريق، الضمانات، والخطوات التالية"
                : "07–10 · PARTNERSHIP MODEL, 90-DAY ROADMAP, SAFEGUARDS & NEXT STEPS"}
            </div>
            <h1>
              {isAr
                ? "نموذج الشراكة مع Franco Pinto وخارطة الطريق التنفيذية"
                : "The Franco Pinto Partnership Model & Execution Roadmap"}
            </h1>
            <p>
              {isAr
                ? "تحتفظ زين بالشبكة والتراخيص والعلاقة مع العميل، بينما تبني Franco Pinto طبقة التكامل والمطابقة والصمود التي تحوّل منتجات زين إلى حلول عمل متكاملة."
                : "Zain keeps the network, the licences and the customer. Franco Pinto builds the integration, reconciliation and resilience layer that turns Zain products into working solutions."}
            </p>
          </div>
          <Badge tone="purple">
            {isAr ? "أثبت النجاح · كرره · وسّعه" : "Prove it · Repeat it · Scale it"}
          </Badge>
        </div>
      </Reveal>

      {/* Section 07: Partnership Division of Responsibility */}
      <Reveal delay={0.06}>
        <div className="b2b-two-col">
          <section className="panel partnership-col is-fp-side">
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr ? "ما الذي تبنيه Franco Pinto" : "WHAT FRANCO PINTO BUILDS"}
            </div>
            <h2>
              {isAr
                ? "طبقة التكامل والبرمجيات وهندسة الصمود"
                : "Integration, Portals & Offline-First Engineering"}
            </h2>
            <div className="division-list">
              {partnershipDivision.francoPinto.map((item) => (
                <div key={item.title.en} className="division-item">
                  <CheckCircle2 size={16} />
                  <div>
                    <strong>{b(item.title)}</strong>
                    <p>{b(item.detail)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="panel partnership-col is-zain-side">
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr ? "ما الذي يبقى لدى زين السودان" : "WHAT STAYS WITH ZAIN SUDAN"}
            </div>
            <h2>
              {isAr
                ? "الشبكة والتراخيص والملكية التجارية الكاملة"
                : "Network, Licences, Regulated Wallet & Customer Ownership"}
            </h2>
            <div className="division-list">
              {partnershipDivision.zainStays.map((item) => (
                <div key={item.title.en} className="division-item">
                  <ShieldCheck size={16} />
                  <div>
                    <strong>{b(item.title)}</strong>
                    <p>{b(item.detail)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="b2b-chart-Callout is-magenta" style={{ marginTop: 20 }}>
              <Handshake size={16} />
              <p>
                <strong>{isAr ? "الهياكل التجارية المقترحة للنقاش:" : "Commercial structures for discussion:"}</strong>{" "}
                {commercialStructures.map((c) => b(c.name)).join(" · ")}.{" "}
                {isAr
                  ? "تفضل Franco Pinto التعاقد والفوترة عبر كيان تابع لمجموعة زين خارج السودان (مثل الكويت أو البحرين) للأسباب الرقابية والمصرفية الموضحة في القسم 9."
                  : "Franco Pinto's preference is to contract with, and be paid by, a Zain Group entity outside Sudan (e.g., Kuwait or Bahrain)."}
              </p>
            </div>
          </section>
        </div>
      </Reveal>

      {/* Section 08: Interactive 90-Day, 6-Month, 12-Month Roadmap */}
      <Reveal delay={0.12}>
        <section className="panel" style={{ marginTop: 30 }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr
                  ? "08 · خارطة الطريق: 90 يوماً، 6 أشهر، و12 شهراً"
                  : "08 · THE ROAD AHEAD: 90-DAY, 6-MONTH & 12-MONTH ROADMAP"}
              </div>
              <h2>
                {isAr
                  ? "خطة تنفيذية مرحلية ببوابات قرار واضحة (Go / No-Go Gates)"
                  : "Phased Execution with Clear Go / No-Go Gates"}
              </h2>
            </div>

            <div className="demo-state-controls" role="tablist">
              {roadmapPhases.map((p, idx) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={activePhase === idx}
                  aria-pressed={activePhase === idx}
                  onClick={() => setActivePhase(idx)}
                >
                  {b(p.window)} · {b(p.theme)}
                </button>
              ))}
            </div>
          </div>

          <div className="roadmap-phases-grid">
            {roadmapPhases.map((phase, idx) => {
              const isFocused = activePhase === idx;
              return (
                <article
                  key={phase.id}
                  className={`roadmap-phase-card ${isFocused ? "is-focused" : ""}`}
                  onClick={() => setActivePhase(idx)}
                >
                  <header>
                    <span className="phase-window">{b(phase.window)}</span>
                    <h3>{b(phase.theme)}</h3>
                    <small>{b(phase.sectors)}</small>
                  </header>
                  <ul>
                    {phase.actions.map((act, i) => (
                      <li key={i}>{b(act)}</li>
                    ))}
                  </ul>
                  <footer>
                    <small>{isAr ? "بوابة العبور (Go/No-Go Gate):" : "Go / No-Go Gate:"}</small>
                    <strong>{b(phase.gate)}</strong>
                  </footer>
                </article>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* Section 09: Risks & Safeguards */}
      <Reveal delay={0.16}>
        <section className="panel" style={{ marginTop: 30 }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr
                  ? "09 · المخاطر والضمانات الوقائية (صفحة 29–30)"
                  : "09 · RISKS AND SAFEGUARDS (PAGES 29–30)"}
              </div>
              <h2>
                {isAr
                  ? "حوكمة العقوبات، استمرارية الشبكة، وحماية المدفوعات"
                  : "Sanctions Screening, Outage Resilience & Settlement Safeguards"}
              </h2>
              <p>
                {isAr
                  ? "ملخص للأغراض التجارية والإدارية (وليس استشارة قانونية؛ يلزم اعتماد المستشار القانوني قبل التعاقد)."
                  : "A practical summary for business leadership (not legal advice; qualified counsel review required before contracting)."}
              </p>
            </div>
            <Lock size={20} color="#600e69" />
          </div>

          <div className="risks-grid">
            {risksAndSafeguards.map((r) => (
              <article key={r.risk.en} className="risk-card">
                <div className="risk-card-top">
                  <strong>{b(r.risk)}</strong>
                  <EvidenceBadge type={r.evidence} />
                </div>
                <p className="risk-evidence">{b(r.evidenceText)}</p>
                <div className="risk-safeguard">
                  <small>{isAr ? "الضمانة الوقائية:" : "Operational Safeguard:"}</small>
                  <p>{b(r.safeguard)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Section 10: What We Propose Now (6 Steps) + Questions for Zain */}
      <Reveal delay={0.2}>
        <div className="b2b-two-col" style={{ marginTop: 30 }}>
          <section className="panel">
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "10 · ما نقترحه الآن (صفحة 31)"
                : "10 · WHAT WE PROPOSE NOW (PAGE 31)"}
            </div>
            <h2>
              {isAr
                ? "ست خطوات للانتقال من هذا التقرير إلى أول مشروع تجريبي حي"
                : "Six Steps from This Report to a First Live Pilot"}
            </h2>
            <div className="next-steps-list">
              {immediateNextSteps.map((st) => (
                <div key={st.step} className="next-step-row">
                  <span className="step-num-circle">{st.step}</span>
                  <div className="next-step-copy">
                    <strong>{b(st.title)}</strong>
                    <p>{b(st.detail)}</p>
                  </div>
                  <span className="step-outcome-badge">{b(st.outcome)}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "أسئلة مطروحة لفريق زين (صفحة 31)"
                : "QUESTIONS FOR ZAIN LEADERSHIP (PAGE 31)"}
            </div>
            <h2>
              {isAr
                ? "خمسة أسئلة لتأكيد المواصفات وتسمية مسؤولي الملفات"
                : "Five Questions to Confirm Specs & Account Ownership"}
            </h2>
            <ul className="questions-zain-list">
              {questionsForZain.map((q, idx) => (
                <li key={idx}>
                  <HelpCircle size={17} />
                  <span>{b(q)}</span>
                </li>
              ))}
            </ul>

            <div className="b2b-chart-Callout" style={{ marginTop: 22 }}>
              <Calendar size={16} />
              <p>
                <strong>
                  {isAr ? "الجهات المعنية والتواصل المباشر:" : "Executive Lead & Direct Contact:"}
                </strong>{" "}
                {isAr
                  ? "أُعدّ هذا العمل لـ تنزيل الصادق مهدي حسين (قائد فريق السحابة والاستضافة / قائد فريق ما قبل البيع لحلول الأعمال B2B — زين السودان) بواسطة سامي سليمان (مدير العمليات التجارية والتقنية، Franco Pinto)."
                  : "Prepared for Tanzeel Elsadig Mahdi Hussein (Cloud and Hosting Team Leader / B2B Business Solutions Presales Team Leader — Zain Sudan) by Sami Suliman (Manager, Business Operations & Technology, Franco Pinto)."}
              </p>
            </div>
          </section>
        </div>
      </Reveal>
    </div>
  );
}
