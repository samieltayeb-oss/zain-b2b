"use client";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  MapPin,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Ship,
  Sun,
} from "lucide-react";
import { currencyRates, exports2025 } from "@/content/b2b-data";
import { EvidenceBadge } from "@/components/ui";

export function MarketContextCharts() {
  const { b, isAr } = useLocale();
  const reduce = useReducedMotion();
  const [zoneTab, setZoneTab] = useState<"saf" | "rsf">("saf");

  const gdpData = [
    { year: "2023", val: -29.4, label: "-29.4%", negative: true },
    { year: "2024", val: -14.0, label: "-14.0%", negative: true },
    { year: "2025", val: 3.1, label: "+3.1%", negative: false },
    { year: "2026e (WB)", val: 2.1, label: "+2.1%", negative: false },
    { year: "2026e (IMF)", val: 7.0, label: "+7.0%", negative: false, imf: true },
  ];

  return (
    <div className="b2b-charts-stack">
      {/* Row 1: GDP Trajectory + Exchange Rate Reality */}
      <div className="b2b-two-col">
        <section className="panel b2b-chart-card">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr ? "النمو الحقيقي للناتج المحلي الإجمالي" : "REAL GDP GROWTH TRAJECTORY"}
              </div>
              <h2>
                {isAr
                  ? "اقتصاد حرب يعود تدريجياً للنمو"
                  : "A War Economy Returning to Modest Growth"}
              </h2>
              <p>
                {isAr
                  ? "انكمش الاقتصاد بنحو النصف خلال 2023 و2024 ثم عاد للنمو في المناطق الخاضعة لسيطرة الحكومة."
                  : "Sudan's economy contracted by almost half over 2023–2024 and has returned to growth where networks and banks operate."}
              </p>
            </div>
            <EvidenceBadge type="VERIFIED" citation="[20,21]" />
          </div>

          <div className="gdp-bars-container">
            {gdpData.map((d, idx) => {
              const absH = Math.max(14, Math.abs(d.val) * 3.8);
              return (
                <div key={d.year} className="gdp-bar-col">
                  <div className="gdp-bar-stage">
                    <motion.div
                      className={`gdp-bar-fill ${d.negative ? "is-neg" : d.imf ? "is-imf" : "is-pos"}`}
                      initial={{ height: reduce ? absH : 0 }}
                      animate={{ height: absH }}
                      transition={{ duration: 0.55, delay: idx * 0.08 }}
                    >
                      <span>{d.label}</span>
                    </motion.div>
                  </div>
                  <strong>{d.year}</strong>
                </div>
              );
            })}
          </div>

          <div className="b2b-chart-Callout">
            <TrendingUp size={16} />
            <p>
              {isAr
                ? "يتفق البنك الدولي (+2.1%) وصندوق النقد الدولي (+7.0%) على الاتجاه الإيجابي لعام 2026: النشاط التجاري يعود في الولايات الآمنة والخرطوم رغم هشاشة القاعدة الاقتصادية (الفقر المدقع 59.7% وإيرادات الدولة 4.0% من الناتج المحلي)."
                : "Both World Bank (+2.1%) and IMF (+7.0%) agree on the 2026 direction: commercial activity is restarting in government-controlled hubs despite a fragile base (59.7% extreme poverty; state revenue at 4.0% of GDP)."}
            </p>
          </div>
        </section>

        <section className="panel b2b-chart-card">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr ? "أسعار الصرف المعلنة (جنيه لكل دولار)" : "REPORTED SDG PER US DOLLAR"}
              </div>
              <h2>
                {isAr
                  ? "عدة أسعار صرف، واتجاه واحد واضح"
                  : "Several Exchange Rates, All Moving One Way"}
              </h2>
              <p>
                {isAr
                  ? "أرقام من مصادر وتواريخ متعددة (ليست سلسلة واحدة) توضح تآكل القيمة الشرائية للجنيه."
                  : "Figures from separate sources and dates shown side-by-side rather than merged."}
              </p>
            </div>
            <EvidenceBadge type="VERIFIED" citation="[20,23,24]" />
          </div>

          <div className="fx-bars-list">
            {currencyRates.map((item, idx) => {
              const pct = Math.max(6, (item.rate / 10000) * 100);
              return (
                <div key={item.label.en} className="fx-bar-row">
                  <div className="fx-bar-meta">
                    <strong>{b(item.label)}</strong>
                    <small>{item.source}</small>
                  </div>
                  <div className="fx-bar-track">
                    <motion.span
                      className={item.parallel ? "is-parallel" : "is-official"}
                      initial={{ width: reduce ? `${pct}%` : "0%" }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.55, delay: idx * 0.06 }}
                    />
                  </div>
                  <span className="fx-bar-value">
                    {item.rate.toLocaleString("en")}
                    {item.rate === 5600 ? "+" : ""} <small>SDG</small>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="b2b-chart-Callout is-magenta">
            <DollarSign size={16} />
            <p>
              <strong>
                {isAr ? "ماذا يعني هذا لعروض الشركات (B2B):" : "What this means for B2B offers:"}
              </strong>{" "}
              {isAr
                ? "أي عقد مسعّر بالجنيه السوداني يفقد قيمته خلال أشهر. يجب تصميم عروض المؤسسات بتسعير مرجعي أو مربوط بالعملة الصعبة حيثما تسمح الضوابط، مع دورات فوترة قصيرة ودفع مسبق لأعمال التأسيس."
                : "Any contract priced in Sudanese pounds loses value within months. Enterprise offers must use indexed or hard-currency reference pricing where rules allow, short billing cycles, and prepayment for setup work."}
            </p>
          </div>
        </section>
      </div>

      {/* Row 2: Addressable Map Comparison + Official Exports */}
      <div className="b2b-two-col">
        <section className="panel b2b-chart-card">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr ? "الخريطة القابلة للخدمة" : "WHERE ZAIN CAN SELL: THE ADDRESSABLE MAP"}
              </div>
              <h2>
                {isAr
                  ? "مقارنة النطاق التشغيلي والأمني"
                  : "Operational & Commercial Addressability"}
              </h2>
            </div>
            <div className="demo-state-controls" role="tablist">
              <button
                role="tab"
                aria-selected={zoneTab === "saf"}
                aria-pressed={zoneTab === "saf"}
                onClick={() => setZoneTab("saf")}
              >
                {isAr ? "الشرق والشمال والوسط والخرطوم" : "SAF-Held Hubs + Khartoum"}
              </button>
              <button
                role="tab"
                aria-selected={zoneTab === "rsf"}
                aria-pressed={zoneTab === "rsf"}
                onClick={() => setZoneTab("rsf")}
              >
                {isAr ? "دارفور وأجزاء من كردفان" : "RSF-Held: Darfur / Kordofan"}
              </button>
            </div>
          </div>

          {zoneTab === "saf" ? (
            <div className="zone-comparison-box is-safe">
              <div className="zone-banner">
                <CheckCircle2 size={18} />
                <div>
                  <strong>
                    {isAr
                      ? "نطاق عمل زين أعمال الآن (Addressable Now)"
                      : "Zain B2B Fit: Addressable Now [INFERENCE]"}
                  </strong>
                  <span>
                    {isAr
                      ? "بورتسودان، كسلا، القضارف، عطبرة، دنقلا، كوستي، الدمازين، والخرطوم"
                      : "Port Sudan, Kassala, Gedaref, Atbara, Dongola, Kosti, Damazine & Khartoum"}
                  </span>
                </div>
              </div>
              <dl className="zone-specs">
                <div>
                  <dt>{isAr ? "شبكات الجوال" : "Mobile networks"}</dt>
                  <dd>
                    {isAr
                      ? "تعمل بشكل جزئي إلى جيد (مع بعض الازدحام). أكثر من 90% من مواقع زين نشطة في المناطق الآمنة (الربع الأول 2026) [11,35,36]."
                      : "Partial to good. Zain reports >90% of its network active in safe areas (Q1 2026) [11,35,36]."}
                  </dd>
                </div>
                <div>
                  <dt>{isAr ? "الأقمار الصناعية" : "Satellite"}</dt>
                  <dd>
                    {isAr
                      ? "خدمة Starlink محظورة رسمياً منذ يناير 2024؛ وتنتهي المهلة الاستثنائية للمنظمات في نوفمبر 2026 [36,39]."
                      : "Starlink banned since Jan 2024; humanitarian grace period ends Nov 2026 [36,39]."}
                  </dd>
                </div>
                <div>
                  <dt>{isAr ? "القطاع المصرفي" : "Banking"}</dt>
                  <dd>
                    {isAr
                      ? "إعادة تشغيل المقسم القومي للمدفوعات (أغسطس 2026)؛ وإعادة افتتاح الفروع في الخرطوم وأم درمان [52]."
                      : "National payment switch restored Aug 2026; branches reopening in Khartoum & Omdurman [52]."}
                  </dd>
                </div>
                <div>
                  <dt>{isAr ? "النشاط الاقتصادي" : "Business activity"}</dt>
                  <dd>
                    {isAr
                      ? "التجارة عبر بورتسودان، عودة المؤسسات للخرطوم (يناير 2026)، والزراعة في القضارف وكسلا ونهر النيل."
                      : "Trade through Port Sudan; formal government & UN return to Khartoum; eastern agriculture."}
                  </dd>
                </div>
              </dl>
            </div>
          ) : (
            <div className="zone-comparison-box is-blocked">
              <div className="zone-banner">
                <XCircle size={18} />
                <div>
                  <strong>
                    {isAr
                      ? "خارج النطاق (Not Addressable)"
                      : "Zain B2B Fit: Not Addressable (Security, Sanctions & Reputational Risk)"}
                  </strong>
                  <span>
                    {isAr
                      ? "معظم ولايات دارفور وأجزاء واسعة من كردفان"
                      : "Most of Darfur and parts of Kordofan"}
                  </span>
                </div>
              </div>
              <dl className="zone-specs">
                <div>
                  <dt>{isAr ? "شبكات الجوال" : "Mobile networks"}</dt>
                  <dd>
                    {isAr
                      ? "شبه منعدمة: قطع في الألياف البصرية، تدمير للأبراج، وتوقف قسري للخدمة [33,35]."
                      : "Minimal or none: fibre cuts, damaged towers and shutdowns [33,35]."}
                  </dd>
                </div>
                <div>
                  <dt>{isAr ? "الأقمار الصناعية" : "Satellite"}</dt>
                  <dd>
                    {isAr
                      ? "أجهزة Starlink المهربة ومقاهي الإنترنت الفضائي (بسعر 2 إلى 6 دولارات للساعة) مع فرض جبايات ومصادرات متفرقة [39,55,56]."
                      : "Smuggled Starlink kits (~US$2,500 + levies) and Wi-Fi cafés at US$2–6/hour [39,55,56]."}
                  </dd>
                </div>
                <div>
                  <dt>{isAr ? "القطاع المصرفي" : "Banking"}</dt>
                  <dd>
                    {isAr
                      ? "تقييد تطبيقات المصارف، إعلان بنك مركزي موازٍ في نيالا (مايو 2026)، وعمولات تحويل تصل إلى 23–25% [22,54]."
                      : "Parallel central bank announced in Nyala (May 2026); transfer fees of 23–25% reported [22,54]."}
                  </dd>
                </div>
                <div>
                  <dt>{isAr ? "القاعدة التشغيلية" : "Operational rule"}</dt>
                  <dd>
                    {isAr
                      ? "مستبعدة تماماً من نطاق الشراكة لأسباب أمنية وقانونية ولتجنب مخاطر العقوبات الدولية."
                      : "Strictly excluded from scope for security, compliance and sanctions reasons."}
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </section>

        <section className="panel b2b-chart-card">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr ? "الصادرات الرسمية للسودان 2025" : "SUDAN OFFICIAL EXPORTS 2025 (PRELIMINARY)"}
              </div>
              <h2>
                {isAr
                  ? "محركات النقد الأجنبي والتجارة: 2.64 مليار دولار"
                  : "Hard-Currency Export Engines: US$2.64bn Total"}
              </h2>
              <p>
                {isAr
                  ? "المصدر: الموجز الإحصائي للتجارة الخارجية لبنك السودان المركزي (الربع الرابع 2025) [25]."
                  : "Source: Central Bank of Sudan Foreign Trade Digest Q4 2025 [25]."}
              </p>
            </div>
            <EvidenceBadge type="VERIFIED" citation="[25]" />
          </div>

          <div className="fx-bars-list">
            {exports2025.map((exp, idx) => {
              const pct = Math.max(4, (exp.valueUsdM / 1536) * 100);
              return (
                <div key={exp.product.en} className="fx-bar-row">
                  <div className="fx-bar-meta">
                    <strong>{b(exp.product)}</strong>
                    {exp.volume && <small>{exp.volume}</small>}
                  </div>
                  <div className="fx-bar-track">
                    <motion.span
                      className={idx === 0 ? "is-parallel" : "is-official"}
                      initial={{ width: reduce ? `${pct}%` : "0%" }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.55, delay: idx * 0.06 }}
                    />
                  </div>
                  <span className="fx-bar-value">
                    ${exp.valueUsdM.toLocaleString("en")}M
                  </span>
                </div>
              );
            })}
          </div>

          <div className="b2b-chart-Callout">
            <Sun size={16} />
            <p>
              {isAr
                ? "الاستقلال الطاقي: تضاعفت واردات الألواح الشمسية 6 مرات خلال العام المنتهي في يونيو 2025 [31]؛ حيث تكلف الكهرباء بالديزل 0.45 دولار/كيلوواط ساعة مقابل 0.02 بالشبكة [30]. كل موقع عمل بعيد أصبح موقع طاقة شمسية يحتاج للمراقبة عبر IoT."
                : "Power independence: Solar-panel imports rose 6x in the 12 months to June 2025 [31]; diesel generation costs ~US$0.45/kWh vs US$0.02 from the grid [30]. Every remote site is now a solar site needing IoT monitoring."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
