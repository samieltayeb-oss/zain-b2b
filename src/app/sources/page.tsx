"use client";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { reportSources } from "@/content/sources-data";
import { Reveal, Badge, EvidenceBadge } from "@/components/ui";
import {
  FileText,
  ExternalLink,
  Search,
  Download,
  ShieldCheck,
} from "lucide-react";

export default function SourcesPage() {
  const { isAr } = useLocale();
  const [query, setQuery] = useState("");

  const filtered = reportSources.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.url.toLowerCase().includes(query.toLowerCase()) ||
      String(s.id) === query.trim(),
  );

  return (
    <div className="page">
      <Reveal>
        <div className="page-heading">
          <div>
            <div className="eyebrow">
              <span className="tiny-square" />
              {isAr
                ? "الملحق (أ) · منهجية الأدلة والمصادر الموثقة (صفحة 32–34)"
                : "APPENDIX A · EVIDENCE METHODOLOGY & VERIFIED SOURCES (PAGES 32–34)"}
            </div>
            <h1>
              {isAr
                ? "دليل الأدلة والمصادر العامة (71 مصدراً)"
                : "Evidence Markers & Public Sources Registry"}
            </h1>
            <p>
              {isAr
                ? "كل حقيقة مادية في هذا التقرير تحمل علامة تصنيف ورقم مصدر موثق (تم الاطلاع عليها حتى 26 أكتوبر 2026). عند غياب رقم رسمي معلن، يُذكر ذلك صراحةً دون أي تقدير عشوائي."
                : "Every material fact carries an evidence marker and a numbered public source accessed up to 26 October 2026. Where no public figure exists, nothing has been estimated in its place."}
            </p>
          </div>
          <a
            href="/Zain_Sudan_B2B_Market_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            <Download size={15} />
            <span>
              {isAr ? "تنزيل تقرير PDF الكامل (34 صفحة)" : "Download Full 34-Page PDF"}
            </span>
          </a>
        </div>
      </Reveal>

      {/* How to read the evidence markers (Page 2) */}
      <Reveal delay={0.06}>
        <section className="panel evidence-legend-card">
          <h2>
            {isAr
              ? "كيف تقرأ علامات تصنيف الأدلة في التقرير"
              : "How to Read the Evidence Markers"}
          </h2>
          <div className="evidence-markers-grid">
            <div className="evidence-marker-box">
              <EvidenceBadge type="VERIFIED" />
              <p>
                {isAr
                  ? "مصدر أولي أو رسمي تمت قراءته مباشرة (مثل بيانات مجموعة زين، بنك السودان المركزي، البنك الدولي، الأمم المتحدة OCHA/ETC)."
                  : "Primary or official source read directly (e.g., Zain Group filings, CBOS, World Bank, IMF, OCHA, ETC, OFAC)."}
              </p>
            </div>
            <div className="evidence-marker-box">
              <EvidenceBadge type="REPORTED" />
              <p>
                {isAr
                  ? "مصدر ثانوي أو إخباري موثوق (مثل رويترز، سودان تريبيون، سونا، تقارير المراقبة الدولية)."
                  : "Credible secondary or news source (e.g., Reuters, Sudan Tribune, SUNA, third-party monitors)."}
              </p>
            </div>
            <div className="evidence-marker-box">
              <EvidenceBadge type="INFERENCE" />
              <p>
                {isAr
                  ? "استنتاج تحليلي وتجاري من Franco Pinto مبني مباشرةً على الحقائق الموثقة."
                  : "Franco Pinto's analytical and commercial reasoning built directly from cited facts."}
              </p>
            </div>
            <div className="evidence-marker-box">
              <EvidenceBadge type="UNKNOWN" />
              <p>
                {isAr
                  ? "لم يتم العثور على رقم عام معلن؛ ولم يتم وضع أي تقدير تخميني مكانه التزاماً بالدقة."
                  : "No public figure found; nothing has been estimated in its place."}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Searchable Sources Table */}
      <Reveal delay={0.12}>
        <section className="panel" style={{ marginTop: 28 }}>
          <div className="section-heading">
            <div>
              <h2>
                {isAr
                  ? "قائمة المصادر المرجعية المرقمة"
                  : "Numbered Reference Sources"}
              </h2>
              <p>
                {isAr
                  ? "ابحث برقم المصدر أو اسم المؤسسة (مثل Zain، World Bank، OCHA، CBOS، Starlink)"
                  : "Filter by source number, institution or topic (e.g., Zain, World Bank, OCHA, CBOS, Starlink)"}
              </p>
            </div>

            <div className="source-search-box">
              <Search size={15} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  isAr ? "ابحث في المصادر..." : "Search sources or citation #..."
                }
              />
            </div>
          </div>

          <div className="sources-list-grid">
            {filtered.map((src) => (
              <article key={src.id} className="source-row-card">
                <span className="source-id-badge">[{src.id}]</span>
                <div className="source-main-info">
                  <strong>
                    {src.title}{" "}
                    {src.arabic && (
                      <Badge tone="purple">
                        {isAr ? "مصدر عربي" : "[Arabic]"}
                      </Badge>
                    )}
                  </strong>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                  >
                    {src.url}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
