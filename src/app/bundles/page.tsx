"use client";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import {
  topBundles,
  builtUnpublishedProducts,
  gulfBenchmarks,
} from "@/content/b2b-data";
import { Reveal, Badge, EvidenceBadge } from "@/components/ui";
import {
  Boxes,
  CheckCircle2,
  Sparkles,
  Layers,
  CreditCard,
  AlertCircle,
  ShieldCheck,
  Radio,
  Globe,
} from "lucide-react";

export default function BundlesAndPortfolioPage() {
  const { b, isAr } = useLocale();
  const [onlyExposed, setOnlyExposed] = useState(false);

  const visibleBenchmarks = onlyExposed
    ? gulfBenchmarks.filter((g) => g.exposed)
    : gulfBenchmarks;

  return (
    <div className="page">
      <Reveal>
        <div className="page-heading">
          <div>
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "03 و 06 · الحزم المقترحة، محفظة زين اليوم، وفجوات السوق"
                : "03 & 06 · TOP OFFERS, PORTFOLIO ASSETS & GULF BENCHMARK GAPS"}
            </div>
            <h1>
              {isAr
                ? "خمس حزم جاهزة للبيع، ومنتجات كامنة، وخطة سد الفجوات"
                : "Five Ready-to-Sell Bundles, Hidden Assets & Portfolio Gap Closure"}
            </h1>
            <p>
              {isAr
                ? "حزم مبنية بالكامل من منتجات تبيعها زين السودان اليوم، بالإضافة إلى شراكة أقمار صناعية مرخصة تسد أكبر فجوة تنافسية دون الحاجة لبناء شبكة جديدة."
                : "Five bundles built directly from products Zain Sudan already sells, plus one licensed satellite partnership that closes the largest competitive gap without new network build."}
            </p>
          </div>
          <Badge tone="purple">
            {isAr ? "5 حزم + شراكة VSAT" : "5 Bundles + Licensed VSAT"}
          </Badge>
        </div>
      </Reveal>

      {/* Section 06: The 5+1 Bundles Grid */}
      <Reveal delay={0.06}>
        <div className="bundles-grid">
          {topBundles.map((bundle) => (
            <article
              key={bundle.id}
              className={`panel bundle-card ${bundle.number === "+" ? "is-satellite-bundle" : ""}`}
            >
              <header className="bundle-card-head">
                <span className="bundle-number">{bundle.number}</span>
                <div>
                  <h3>{b(bundle.name)}</h3>
                  <span className="bundle-target">{b(bundle.target)}</span>
                </div>
                <EvidenceBadge
                  type={bundle.evidence}
                  citation={bundle.citations}
                />
              </header>

              <div className="bundle-section">
                <small>
                  {isAr ? "منتجات زين داخل الحزمة:" : "Zain Products Inside:"}
                </small>
                <ul>
                  {bundle.productsInside.map((prod, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} />
                      <span>{b(prod)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bundle-section is-why-wins">
                <small>{isAr ? "لماذا تفوز هذه الحزمة:" : "Why It Wins Now:"}</small>
                <p>{b(bundle.whyItWins)}</p>
              </div>

              <div className="bundle-section is-fp-layer">
                <small>
                  <Layers size={13} />{" "}
                  {isAr
                    ? "طبقة التكامل والصمود من Franco Pinto:"
                    : "Franco Pinto Integration & Resilience Layer:"}
                </small>
                <p>{b(bundle.francoPintoLayer)}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* Highlight Box: Bede for Business + Built Unpublished Products (Page 9) */}
      <Reveal delay={0.12}>
        <div className="b2b-two-col" style={{ marginTop: 30 }}>
          <section className="panel bede-spotlight-card">
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "أصل استراتيجي غير مستغل بالكامل (صفحة 9)"
                : "AN UNDER-SOLD ASSET: BEDE FOR BUSINESS (PAGE 9)"}
            </div>
            <h2>
              {isAr
                ? "إعادة تموضع محفظة Bede كمنصة تحصيل ورواتب وصرف للمؤسسات"
                : "Repositioning Bede Corporate as Sudan's Premier B2B Payout & Collection Rail"}
            </h2>
            <p style={{ marginTop: 10 }}>
              {isAr
                ? "في موقع زين للأعمال، تُعرض محفظة Bede كمحفظة للأفراد فقط. لكن موقع Bede الرسمي يسوّق بالفعل خدمة «Bede Corporate»: توزيع الأموال بالجملة «للمنظمات غير الحكومية» وصرف الرواتب عبر رفع ملفات الجداول (Spreadsheet upload) بترخيص بنك السودان (2025/FIMP/4) وشراكة Visa [8,12]."
                : "On Zain's Business site, Bede is presented as a consumer wallet. Its own site, however, already markets Bede Corporate: bulk fund distribution 'for NGOs' and salary distribution from a spreadsheet upload under CBOS licence 2025/FIMP/4 and Visa partnership [8,12]."}
            </p>
            <div className="b2b-chart-Callout is-magenta" style={{ marginTop: 18 }}>
              <CreditCard size={18} />
              <p>
                <strong>
                  {isAr ? "أسرع مكسب تجاري في هذا التقرير:" : "One of the fastest wins in this report:"}
                </strong>{" "}
                {isAr
                  ? "إبراز Bede Corporate في واجهة عروض الشركات كمنتج للتحصيل وصرف الرواتب والمساعدات الإنسانية — بنفس الطريقة التي تبيع بها زين السعودية خدمة Zain Collect [4]."
                  : "Repositioning Bede on the B2B shelf as an enterprise collections, payroll and NGO disbursement product—just as Zain KSA sells Zain Collect [4]."}
              </p>
            </div>

            <div className="three-moves-box">
              <h3>
                {isAr
                  ? "ثلاث خطوات في المحفظة تعزز كل حزمة:"
                  : "Three Portfolio Moves That Strengthen Every Bundle:"}
              </h3>
              <ol>
                <li>
                  {isAr
                    ? "إعادة تقديم Bede كمنتج مؤسسي (تحصيل، رواتب، صرف مساعدات) وليس محفظة أفراد فقط."
                    : "Reposition Bede as a business product (collections, payroll, disbursement), not only a consumer wallet."}
                </li>
                <li>
                  {isAr
                    ? "نشر المنتجات المجهزة داخلياً في نظام محتوى زين (UCaaS، Push-to-Talk، VSaaS، Zdrop، التعليم، و«حقول»)."
                    : "Publish the products already written in Zain's CMS (UCaaS, Push-to-Talk, VSaaS, Zdrop, EDU-PRO, Hagool)."}
                </li>
                <li>
                  {isAr
                    ? "إضافة خدمات الربط المؤسسي (DIA، IP-VPN) وSD-WAN مع الأمن المُدار بالاستفادة من خبرات زين السعودية والكويت والبحرين."
                    : "Add enterprise connectivity (DIA, IP-VPN) and SD-WAN with managed security, drawing on Zain KSA, Kuwait and Bahrain."}
                </li>
              </ol>
            </div>
          </section>

          <section className="panel">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span className="tiny-square" />
                  {isAr
                    ? "مبنية داخلياً ولكنها غير منشورة بعد (صفحة 9)"
                    : "BUILT, BUT NOT YET ON THE SHELF (PAGE 9)"}
                </div>
                <h2>
                  {isAr
                    ? "7 منتجات جاهزة في نظام محتوى زين السودان"
                    : "7 Products Already Written in Zain Sudan's CMS"}
                </h2>
                <p>
                  {isAr
                    ? "يحتفظ نظام إدارة المحتوى في موقع زين السودان بأوصاف كاملة لسبع خدمات غير منشورة كصفحات عامة، وكل منها يلبي طلباً مباشراً موثقاً في هذا التقرير:"
                    : "Zain Sudan's content system already holds product descriptions for seven services not published as public pages [1]. Publishing them widens the portfolio with minimal effort:"}
                </p>
              </div>
              <EvidenceBadge type="VERIFIED" citation="[1]" />
            </div>

            <div className="unpublished-list">
              {builtUnpublishedProducts.map((item) => (
                <div key={item.name} className="unpublished-row">
                  <div>
                    <strong>{item.name}</strong>
                    <span>{b(item.what)}</span>
                  </div>
                  <p>{b(item.fit)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Reveal>

      {/* Section 03 (Pages 10-11): Gulf Peer Benchmark & Sudani Exposure Table */}
      <Reveal delay={0.16}>
        <section className="panel" style={{ marginTop: 30 }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="tiny-square" />
                {isAr
                  ? "مقارنة المحفظة مع شركات زين في الخليج ومنافسة «سوداني» (صفحة 10)"
                  : "GAPS AGAINST ZAIN'S OWN GULF OPERATIONS & SUDANI (PAGE 10)"}
              </div>
              <h2>
                {isAr
                  ? "مصفوفة المقارنة: زين السودان مقابل زين السعودية والكويت والبحرين"
                  : "Capability Matrix: Zain Sudan vs. Zain KSA, Kuwait & Bahrain"}
              </h2>
              <p>
                {isAr
                  ? "تسوّق شركة «سوداني» المنافسة خدمات الألياف البصرية، والأقمار الصناعية، والخدمات المُدارة، ومركزي بيانات من الفئة الثالثة (Tier III) [17]. الصفوف المميزة باللون الوردي توضح المجالات الأكثر عرضة للمنافسة محلياً."
                  : "Sudani already markets fibre, satellite connectivity, managed services and two Tier III data centres [17]. Highlighted rows show where Zain is most exposed at home."}
              </p>
            </div>

            <div className="demo-state-controls">
              <button
                aria-pressed={!onlyExposed}
                onClick={() => setOnlyExposed(false)}
              >
                {isAr ? "عرض كافة القدرات" : "Show All Capabilities"}
              </button>
              <button
                aria-pressed={onlyExposed}
                onClick={() => setOnlyExposed(true)}
              >
                {isAr ? "الفجوات الحرجة أمام «سوداني» فقط" : "Critical Sudani Gaps Only"}
              </button>
            </div>
          </div>

          <div className="benchmark-table-wrap">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>{isAr ? "القدرة / الخدمة المؤسسية" : "Enterprise Capability"}</th>
                  <th>{isAr ? "زين السودان" : "Zain Sudan"}</th>
                  <th>{isAr ? "زين السعودية" : "Zain KSA"}</th>
                  <th>{isAr ? "زين الكويت" : "Zain Kuwait"}</th>
                  <th>{isAr ? "زين البحرين" : "Zain Bahrain"}</th>
                </tr>
              </thead>
              <tbody>
                {visibleBenchmarks.map((row) => (
                  <tr
                    key={row.capability.en}
                    className={row.exposed ? "is-exposed-row" : ""}
                  >
                    <td>
                      <strong>{b(row.capability)}</strong>
                      {row.exposed && (
                        <span className="exposed-tag">
                          {isAr ? "فجوة أمام سوداني" : "Sudani active"}
                        </span>
                      )}
                    </td>
                    <td>{b(row.sudan)}</td>
                    <td>{row.ksa}</td>
                    <td>{row.kuwait}</td>
                    <td>{row.bahrain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
