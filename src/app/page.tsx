"use client";
import { useLocale } from "@/components/locale-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Layers3,
  Waypoints,
  Download,
  Sparkles,
  CheckCircle2,
  Building2,
  HeartHandshake,
  Landmark,
  Truck,
} from "lucide-react";
import { Reveal, Badge, EvidenceBadge } from "@/components/ui";
import { headlineStats, fiveFindings } from "@/content/b2b-data";
import { B2BHeroPreview } from "@/features/ecosystem/hero-preview";
import { B2BSudaneseEcosystem } from "@/features/ecosystem/b2b-ecosystem";
import { MarketContextCharts } from "@/features/charts/market-charts";
import { PriorityRankingVisualizer } from "@/features/charts/priority-ranking";

export default function HomePage() {
  const { b, isAr } = useLocale();
  const router = useRouter();

  return (
    <div className="page overview-page">
      <Reveal>
        <div className="page-heading">
          <div>
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "تقرير أبحاث السوق · أكتوبر 2026 · أُعدّ لـ تنزيل الصادق مهدي حسين (قائد فريق السحابة والاستضافة وما قبل البيع لحلول الأعمال B2B)"
                : "MARKET RESEARCH REPORT · OCT 2026 · PREPARED FOR TANZEEL ELSADIG MAHDI HUSSEIN (CLOUD & HOSTING / B2B PRESALES TEAM LEADER)"}
            </div>
            <h1>
              {isAr
                ? "زين أعمال السودان: فرصة سوق الشركات والمؤسسات (B2B)"
                : "Zain Sudan Business: Sudan B2B Market Opportunity"}
            </h1>
            <p>
              {isAr
                ? "ما الذي يمكن أن تقدمه زين لشركات ومؤسسات السودان، وبمن نبدأ أولاً، ولماذا سينجح هذا التوجه، ولماذا تُعد زين المشغل الأجدر بالقيادة — مرتباً قطاعاً بقطاع ومبنياً على 71 مصدراً عاماً موثقاً."
                : "What Zain can offer Sudan's businesses and institutions, who to serve first, why it will work, and why Zain is the right operator to lead—organised sector by sector across 71 verified sources."}
            </p>
          </div>
          <a
            className="text-link"
            href="/Zain_Sudan_B2B_Market_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isAr ? "استعراض تقرير PDF الكامل" : "Open full 34-page PDF"}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="grafana-symbol">◉</span>{" "}
              {isAr ? "زين أعمال السودان" : "Zain Sudan Business"}{" "}
              <span className="hero-divider" />{" "}
              {isAr ? "شراكة الحلول المتكاملة" : "Executive Strategy Portal"}
            </div>
            <h2>
              {isAr ? (
                <>هنا تتواصل أعمال السودان.</>
              ) : (
                <>
                  Where Sudan&apos;s
                  <br />
                  Business Connects.
                </>
              )}
            </h2>
            <p>
              {isAr
                ? "ابدأ بالمنظمات الدولية والأمم المتحدة والمصارف خلال الـ 90 يوماً القادمة عبر حزمتين جاهزتين للبيع مبنيتين على منتجات زين الحالية: حزمة «الإغاثة المتصلة» قبل انتهاء مهلة Starlink في نوفمبر 2026، وحزمة «رسائل المعاملات وربط الصرافات» مع عودة المصارف للمقسم القومي."
                : "Lead with NGOs/UN and banks in the next 90 days using two ready-to-sell bundles built on existing Zain products: Connected Aid ahead of the November 2026 Starlink deadline, and Transaction Messaging & Terminal Connectivity as banks reconnect to the restored national switch."}
            </p>
            <div className="hero-actions">
              <Link className="button button-white" href="/sectors">
                {isAr
                  ? "استكشف دليل القطاعات الـ 12"
                  : "Explore the 12 Sectors Playbook"}
                <ArrowRight size={17} />
              </Link>
              <span>
                <Sparkles size={14} />{" "}
                {isAr ? "12 قطاعاً مرتباً بالأولوية" : "12 Ranked Sectors & 5 Bundles"}
                <br />
                <small>
                  {isAr
                    ? "عربي / إنجليزي · تفاعلي بالكامل"
                    : "Bilingual EN/AR · Interactive topology"}
                </small>
              </span>
            </div>
            <a
              href="#b2b-interactive-architecture"
              className="hero-secondary"
              onClick={() => {
                const explorer = document.querySelector<HTMLDetailsElement>(
                  "#b2b-interactive-architecture",
                );
                if (explorer) explorer.open = true;
              }}
            >
              {isAr
                ? "افتح المحاكاة الحية للشبكة والبدائل التلقائية"
                : "Launch Interactive B2B Network & Resilience Simulator"}
              <ArrowUpRight size={14} />
            </a>
            <div className="hero-footnote">
              <ShieldCheck size={14} />{" "}
              {isAr
                ? "مُهدى إلى: تنزيل الصادق مهدي حسين · إعداد: Franco Pinto (سامي سليمان · مدير العمليات والتقنية)"
                : "Prepared for Tanzeel Elsadig Mahdi Hussein · By Franco Pinto (Sami Suliman, Manager, Business Operations & Tech)"}
            </div>
          </div>
          <B2BHeroPreview />
        </section>
      </Reveal>

      {/* 6 Headline Metrics Strip (Page 3 of Report) */}
      <Reveal delay={0.1}>
        <section className="b2b-kpi-grid" aria-label={isAr ? "أبرز مؤشرات التقرير" : "Executive summary metrics"}>
          {headlineStats.map((stat) => (
            <article key={stat.id} className="b2b-kpi-card">
              <div className="b2b-kpi-top">
                <strong>{b(stat.value)}</strong>
                <EvidenceBadge type={stat.evidence} citation={stat.citation} />
              </div>
              <p>{b(stat.label)}</p>
              <small>{b(stat.source)}</small>
            </article>
          ))}
        </section>
      </Reveal>

      {/* Interactive Living B2B Ecosystem Simulator (like ONB portal) */}
      <details
        id="b2b-interactive-architecture"
        className="optional-observability featured-exploration"
        open
      >
        <summary>
          <span className="featured-exploration-icon" aria-hidden="true">
            <Waypoints size={25} strokeWidth={1.5} />
          </span>
          <div className="featured-exploration-copy">
            <span className="featured-exploration-label">
              {isAr
                ? "مخطط معماري تفاعلي حي · جرب سيناريوهات السوق"
                : "Interactive Architecture & Scenario Simulator"}
            </span>
            <strong>
              {isAr
                ? "استكشف كيف تربط زين وFranco Pinto قطاعات الأعمال مع استمرارية الخدمة عند الانقطاع"
                : "Explore Zain × Franco Pinto B2B Architecture & Disruption Failover Scenarios"}
            </strong>
            <p>
              {isAr
                ? "حاكِ انتهاء مهلة Starlink للمنظمات في نوفمبر 2026، أو ذروة رسائل التحقق للمصارف عبر المقسم القومي، أو التحول التلقائي لبدائل SMS/USSD أثناء حجب الإنترنت."
                : "Simulate the November 2026 Starlink NGO migration, the national payment switch OTP surge, or automatic SMS/USSD fallback during exam shutdowns."}
            </p>
          </div>
          <span className="featured-exploration-launch">
            <span className="featured-open">
              {isAr ? "فتح المخطط التفاعلي" : "Open interactive simulator"}
            </span>
            <span className="featured-close">
              {isAr ? "طي المخطط التفاعلي" : "Collapse simulator"}
            </span>
            <ArrowUpRight size={16} />
          </span>
        </summary>
        <B2BSudaneseEcosystem defaultOpen={true} />
      </details>

      {/* Five Findings & Top Recommendation (Page 3) */}
      <Reveal delay={0.14}>
        <div className="overview-grid">
          <section className="journey-panel">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span className="tiny-square" />
                  {isAr ? "01 · خلاصة النتائج الخمس" : "01 · AT A GLANCE: FIVE CORE FINDINGS"}
                </div>
                <h2>
                  {isAr
                    ? "ما الذي يتغير في السوق، ومن نخدم أولاً"
                    : "What Is Changing, Who to Serve, and Where Zain Leads"}
                </h2>
              </div>
              <Badge tone="purple">
                {isAr ? "5 نتائج موثقة" : "5 Verified Findings"}
              </Badge>
            </div>

            <div className="findings-list">
              {fiveFindings.map((f) => (
                <article key={f.num} className="finding-row">
                  <span className="finding-num">{f.num}</span>
                  <div className="finding-body">
                    <div className="finding-head">
                      <strong>{b(f.title)}</strong>
                      <EvidenceBadge type={f.evidence} citation={f.citation} />
                    </div>
                    <p>{b(f.detail)}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="overview-aside">
            <section className="b2b-top-rec-card">
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr ? "التوصية التنفيذية الأولى" : "TOP RECOMMENDATION"}
              </div>
              <h3>
                {isAr
                  ? "القيادة بالمنظمات والمصارف خلال 90 يوماً"
                  : "Lead with NGOs/UN & Banking in the Next 90 Days"}
              </h3>
              <p>
                {isAr
                  ? "البدء بحزمتين جاهزتين للبيع مبنيتين على منتجات زين القائمة حالياً:"
                  : "Move immediately with two ready-to-sell bundles built on existing Zain products:"}
              </p>
              <div className="rec-bundle-Highlight">
                <strong>
                  1. {isAr ? "حزمة الإغاثة المتصلة (Connected Aid)" : "Connected Aid (NGOs & UN)"}
                </strong>
                <span>
                  {isAr
                    ? "صرف المساعدات عبر Bede Corporate، رسائل/رد آلي للمستفيدين، باقات شرائح للموظفين، ومسار APN احتياطي قبل موعد نوفمبر 2026 لانتهاء مهلة Starlink."
                    : "Bede Corporate disbursement, beneficiary SMS/IVR, staff SIM pools, and APN/data-card failover timed against the Nov 2026 Starlink deadline."}
                </span>
              </div>
              <div className="rec-bundle-Highlight">
                <strong>
                  2.{" "}
                  {isAr
                    ? "رسائل المعاملات وربط الصرافات ونقاط البيع"
                    : "Transaction Messaging & Terminal Connectivity"}
                </strong>
                <span>
                  {isAr
                    ? "رسائل التحقق عبر SMPP ومسار APN مزدوج لأجهزة الصراف ونقاط البيع بالتزامن مع إعادة ربط المصارف بالمقسم القومي للمدفوعات."
                    : "SMPP OTP and dual-path APN for POS and ATMs as banks reconnect to the restored national payment switch."}
                </span>
              </div>
              <p className="rec-footnote">
                {isAr
                  ? "يتبع ذلك قطاع اللوجستيات والشركات الصغيرة ومسار حكومي بقيادة زين يستنسخ نجاح عقد «إيصالي». وتوفر Franco Pinto طبقة التكامل والمطابقة والصمود."
                  : "Follow with logistics, SMEs and a Zain-led government track replicating Eisali. Franco Pinto supplies the integration, reconciliation and resilience layer."}
              </p>
              <div className="rec-actions">
                <Link className="button button-white full" href="/bundles">
                  {isAr ? "استعرض الحزم الـ 5 وفجوات المحفظة" : "Inspect the 5 Bundles & Portfolio Gaps"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </section>

            <section className="partners-card">
              <h3>
                {isAr
                  ? "فريق القيادة والتنفيذ المشترك"
                  : "Executive Leadership & Partnership"}
              </h3>
              <p>
                {isAr
                  ? "مواءمة حلول الأعمال والسحابة وما قبل البيع مع احتياجات السوق"
                  : "Cloud, Hosting & B2B Presales alignment with Franco Pinto"}
              </p>
              <div className="partner-line">
                <div className="partner-monogram zain-mini">z</div>
                <div>
                  <strong>
                    {isAr
                      ? "تنزيل الصادق مهدي حسين"
                      : "Tanzeel Elsadig Mahdi Hussein"}
                  </strong>
                  <span>
                    {isAr
                      ? "قائد فريق السحابة والاستضافة / ما قبل البيع لحلول الأعمال (B2B)"
                      : "Cloud & Hosting Team Leader / B2B Business Solutions Presales Team Leader"}
                  </span>
                </div>
                <Badge tone="purple">{isAr ? "زين السودان" : "Zain Lead"}</Badge>
              </div>
              <div className="partner-line">
                <div className="partner-monogram fp-mini">FP</div>
                <div>
                  <strong>
                    {isAr ? "سامي سليمان · Franco Pinto" : "Sami Suliman · Franco Pinto"}
                  </strong>
                  <span>
                    {isAr
                      ? "مدير العمليات التجارية والتقنية · طبقة التكامل والصمود"
                      : "Manager, Business Operations & Tech · Integration Layer"}
                  </span>
                </div>
                <Badge tone="green">{isAr ? "الشريك التقني" : "Partner"}</Badge>
              </div>
            </section>

            <section className="partners-card">
              <h3>
                {isAr
                  ? "هيكلة الأولويات حسب الفئات الأربع"
                  : "Four-Tier Execution Horizon"}
              </h3>
              <p>
                {isAr
                  ? "توزيع القطاعات الـ 12 حسب جاهزية الشراء والجدول الزمني"
                  : "How the 12 sectors map to immediate and phased execution"}
              </p>
              <div className="partner-line">
                <div className="partner-monogram zain-mini">1</div>
                <div>
                  <strong>
                    {isAr ? "تحرك فوري (0–90 يوماً)" : "Move now (0 to 90 days)"}
                  </strong>
                  <span>
                    {isAr
                      ? "المنظمات والأمم المتحدة؛ المصارف والتقنية المالية"
                      : "NGOs / UN / humanitarian; Banking & fintech"}
                  </span>
                </div>
                <Badge tone="purple">{isAr ? "الفئة 1" : "Tier 1"}</Badge>
              </div>
              <div className="partner-line">
                <div className="partner-monogram fp-mini">2</div>
                <div>
                  <strong>
                    {isAr ? "التوسع التالي (3–6 أشهر)" : "Build next (3 to 6 months)"}
                  </strong>
                  <span>
                    {isAr
                      ? "اللوجستيات والموانئ؛ التجزئة والشركات؛ الحكومة (بقيادة زين)"
                      : "Logistics & ports; Retail & SMEs; Government (Zain-led)"}
                  </span>
                </div>
                <Badge tone="green">{isAr ? "الفئة 2" : "Tier 2"}</Badge>
              </div>
              <div className="partner-line">
                <div className="partner-monogram onb-mini">3</div>
                <div>
                  <strong>
                    {isAr ? "عبر البرامج (6–12 شهراً)" : "Programme-led (6 to 12 months)"}
                  </strong>
                  <span>
                    {isAr
                      ? "الصحة؛ الزراعة والصادرات (عبر برامج المنظمات والمانحين)"
                      : "Health; Agriculture & exports (via NGO/donor programmes)"}
                  </span>
                </div>
                <Badge tone="amber">{isAr ? "الفئة 3" : "Tier 3"}</Badge>
              </div>
              <div className="partner-line">
                <div className="partner-monogram fp-mini">4</div>
                <div>
                  <strong>
                    {isAr ? "مقيدة أو لاحقة (+12 شهراً)" : "Gated or later (12+ months)"}
                  </strong>
                  <span>
                    {isAr
                      ? "التعدين (بفحص زين فقط)؛ التعليم؛ الطاقة؛ المقاولات؛ الضيافة"
                      : "Mining (Zain due diligence); Education; Energy; Construction; Hospitality"}
                  </span>
                </div>
                <Badge tone="gray">{isAr ? "الفئة 4" : "Tier 4"}</Badge>
              </div>
            </section>
          </aside>
        </div>
      </Reveal>

      {/* Section 2: Market Context Interactive Charts */}
      <Reveal delay={0.18}>
        <div style={{ marginTop: 32 }}>
          <MarketContextCharts />
        </div>
      </Reveal>

      {/* Section 5: Interactive Priority Ranking Visualizer */}
      <Reveal delay={0.22}>
        <div style={{ marginTop: 32 }}>
          <PriorityRankingVisualizer
            onSelectSector={(sector) => {
              router.push(`/sectors?sector=${sector.id}`);
            }}
          />
        </div>
      </Reveal>
    </div>
  );
}
