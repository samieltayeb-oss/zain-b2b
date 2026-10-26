"use client";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { motion, useReducedMotion } from "framer-motion";
import { sectorsData, type SectorItem } from "@/content/sectors-data";
import { ArrowUpRight, Filter, BarChart3, Award } from "lucide-react";

export function PriorityRankingVisualizer({
  onSelectSector,
}: {
  onSelectSector?: (sector: SectorItem) => void;
}) {
  const { b, isAr } = useLocale();
  const reduce = useReducedMotion();
  const [sortBy, setSortBy] = useState<"combined" | "sales" | "strategy">("combined");
  const [tierFilter, setTierFilter] = useState<number | "all">("all");

  const sorted = [...sectorsData]
    .filter((s) => (tierFilter === "all" ? true : s.tier === tierFilter))
    .sort((a, bItem) => {
      if (sortBy === "sales") return a.salesRank - bItem.salesRank;
      if (sortBy === "strategy") return a.strategyRank - bItem.strategyRank;
      return a.rank - bItem.rank;
    });

  return (
    <section className="panel priority-visualizer">
      <div className="section-heading priority-header">
        <div>
          <div className="eyebrow">
            <span className="tiny-square" />
            {isAr
              ? "05 · ترتيب الأولويات الموحد من زاويتين"
              : "05 · PRIORITY RANKING FROM TWO INDEPENDENT VIEWS"}
          </div>
          <h2>
            {isAr
              ? "القطاعات الـ 12 مرتبة حسب سرعة العائد والملاءمة الاستراتيجية"
              : "Twelve Sectors Ranked by Sales Urgency & Strategic Fit"}
          </h2>
          <p>
            {isAr
              ? "يرتب «منظور المبيعات» القطاعات حسب إلحاح الحاجة وسهولة الوصول للمشتري بمنتج قائم، بينما يقيّم «المنظور الاستراتيجي» الحجم النسبي (35%) وسرعة الإيراد (35%) والملاءمة لعلامة زين (30%). اضغط على أي قطاع لفتح خطة العمل التفصيلية."
              : "The sales view ranks by urgency and buyer access; the strategy view scores relative size (35%), speed to revenue (35%) and brand fit (30%). Click any row to open its full sector playbook."}
          </p>
        </div>

        <div className="priority-controls">
          <div className="demo-state-controls" aria-label={isAr ? "ترتيب حسب" : "Sort by"}>
            <button
              aria-pressed={sortBy === "combined"}
              onClick={() => setSortBy("combined")}
            >
              {isAr ? "الترتيب الموحد" : "Combined Rank"}
            </button>
            <button
              aria-pressed={sortBy === "sales"}
              onClick={() => setSortBy("sales")}
            >
              {isAr ? "منظور المبيعات" : "Sales View"}
            </button>
            <button
              aria-pressed={sortBy === "strategy"}
              onClick={() => setSortBy("strategy")}
            >
              {isAr ? "المنظور الاستراتيجي" : "Strategy Score"}
            </button>
          </div>

          <div className="demo-state-controls" aria-label={isAr ? "تصفية حسب الفئة" : "Filter by tier"}>
            <button
              aria-pressed={tierFilter === "all"}
              onClick={() => setTierFilter("all")}
            >
              {isAr ? "الكل (12)" : "All (12)"}
            </button>
            <button
              aria-pressed={tierFilter === 1}
              onClick={() => setTierFilter(1)}
            >
              {isAr ? "الفئة 1: الآن" : "Tier 1: Now"}
            </button>
            <button
              aria-pressed={tierFilter === 2}
              onClick={() => setTierFilter(2)}
            >
              {isAr ? "الفئة 2: التالي" : "Tier 2: Next"}
            </button>
            <button
              aria-pressed={tierFilter === 3}
              onClick={() => setTierFilter(3)}
            >
              {isAr ? "الفئة 3: البرامج" : "Tier 3"}
            </button>
            <button
              aria-pressed={tierFilter === 4}
              onClick={() => setTierFilter(4)}
            >
              {isAr ? "الفئة 4: لاحقاً" : "Tier 4"}
            </button>
          </div>
        </div>
      </div>

      <div className="priority-bars-table">
        <div className="priority-table-head">
          <span>{isAr ? "#" : "RANK"}</span>
          <span>{isAr ? "القطاع" : "SECTOR"}</span>
          <span>
            {isAr
              ? "التقييم الاستراتيجي المرجح (من 5.00)"
              : "STRATEGY WEIGHTED SCORE (0 TO 5.00)"}
          </span>
          <span>{isAr ? "ترتيب المبيعات" : "SALES RANK"}</span>
          <span>{isAr ? "الفئة الزمنية" : "TIER"}</span>
        </div>

        {sorted.map((s, idx) => {
          const pct = (s.strategyScore / 5.0) * 100;
          const barClass =
            s.tier === 1
              ? "tier-1-bar"
              : s.tier === 2
                ? "tier-2-bar"
                : s.tier === 3
                  ? "tier-3-bar"
                  : "tier-4-bar";

          return (
            <button
              key={s.id}
              type="button"
              className="priority-row-btn"
              onClick={() => onSelectSector && onSelectSector(s)}
            >
              <span className={`priority-rank-badge tier-${s.tier}`}>
                {s.rank}
              </span>
              <div className="priority-sector-info">
                <strong>{b(s.name)}</strong>
                <small>{b(s.leadBundle)}</small>
              </div>
              <div className="priority-score-col">
                <div className="priority-score-track">
                  <motion.span
                    className={barClass}
                    initial={{ width: reduce ? `${pct}%` : "0%" }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  />
                </div>
                <strong>{s.strategyScore.toFixed(2)}</strong>
              </div>
              <div className="priority-sales-circle" title="Sales rank">
                <span>#{s.salesRank}</span>
              </div>
              <div className="priority-tier-col">
                <span className={`tier-pill tier-${s.tier}`}>
                  {s.tier === 1
                    ? isAr
                      ? "الفئة 1 · تحرك فوري"
                      : "Tier 1 · Move now"
                    : s.tier === 2
                      ? s.id === "government"
                        ? isAr
                          ? "الفئة 2 · بقيادة زين"
                          : "Tier 2 · Zain-led"
                        : isAr
                          ? "الفئة 2 · التوسع التالي"
                          : "Tier 2 · Build next"
                      : s.tier === 3
                        ? isAr
                          ? "الفئة 3 · عبر البرامج"
                          : "Tier 3 · Programme-led"
                        : s.id === "mining"
                          ? isAr
                            ? "الفئة 4 · مقيدة"
                            : "Tier 4 · Gated"
                          : isAr
                            ? "الفئة 4 · لاحقاً"
                            : "Tier 4 · Later"}
                </span>
                <ArrowUpRight size={15} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="priority-adjustments-note">
        <strong>
          {isAr ? "ثلاثة تعديلات منهجية في الترتيب الموحد:" : "Three decisive adjustments in the combined ranking:"}
        </strong>
        <ul>
          <li>
            {isAr
              ? "1. تتقدم المنظمات (NGOs/UN) على المصارف عند التعادل لأن الموعد النهائي لمهلة Starlink في نوفمبر 2026 يجعل التوقيت حاسماً."
              : "1. NGOs/UN lead Banking on a tie because the November 2026 Starlink deadline makes Q4 timing decisive."}
          </li>
          <li>
            {isAr
              ? "2. تتقدم اللوجستيات على التجزئة عند التعادل لأن زين تبيع بالفعل منتجات تتبع الأساطيل وتشارك في اتفاقية الجمارك."
              : "2. Logistics leads Retail/SMEs on a tie because Zain already sells fleet products and is inside the customs cargo flow."}
          </li>
          <li>
            {isAr
              ? "3. يتقدم القطاع الحكومي إلى المرتبة الخامسة (كـمسار تقوده زين مباشرة) استناداً إلى العقد المرجعي المبرم مع وزارة المالية لنظام «إيصالي» في 4 أكتوبر 2026."
              : "3. Government moves up to fifth as a Zain-led track because the Ministry of Finance Eisali contract signed on 4 October 2026 proves Zain can win and deliver there."}
          </li>
        </ul>
      </div>
    </section>
  );
}
