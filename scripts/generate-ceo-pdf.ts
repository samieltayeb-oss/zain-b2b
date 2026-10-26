import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  headlineStats,
  fiveFindings,
  currencyRates,
  exports2025,
  builtUnpublishedProducts,
  gulfBenchmarks,
  topBundles,
} from "../src/content/b2b-data";
import { sectorsData } from "../src/content/sectors-data";
import { sectorProspects } from "../src/content/sector-prospects";
import {
  partnershipDivision,
  roadmapPhases,
  risksAndSafeguards,
  immediateNextSteps,
  questionsForZain,
} from "../src/content/roadmap-and-risks";
import { reportSources } from "../src/content/sources-data";

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

function toDataUri(relPath: string): string {
  const full = path.join(PUBLIC_DIR, relPath);
  const buf = fs.readFileSync(full);
  const ext = path.extname(full).toLowerCase();
  const mime =
    ext === ".png"
      ? "image/png"
      : ext === ".svg"
        ? "image/svg+xml"
        : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

const zainLogoWhite = toDataUri("brand/zain-white.png");
const imgCoverHero = toDataUri("assets/report/cover-hero.jpg");
const imgCloudDc = toDataUri("assets/report/cloud-datacenter.jpg");
const imgBankingDb = toDataUri("assets/report/banking-database.jpg");
const imgConnectedAid = toDataUri("assets/report/connected-aid-vsat.jpg");
const imgPortSudan = toDataUri("assets/report/port-sudan-iot.jpg");
const imgSolarAgro = toDataUri("assets/report/solar-agro-telemetry.jpg");

const sectorImageMap: Record<string, string> = {
  ngos: imgConnectedAid,
  banking: imgBankingDb,
  ports: imgPortSudan,
  agriculture: imgSolarAgro,
  energy: imgSolarAgro,
  healthcare: imgConnectedAid,
  education: imgCloudDc,
  mining: imgPortSudan,
  "real-estate": imgCoverHero,
  retail: imgBankingDb,
  public: imgCloudDc,
  smes: imgCoverHero,
};

const TOTAL_PAGES = 20;

const macroTrajectory = [
  { year: "2023", wb: -29.4, imf: -37.5 },
  { year: "2024", wb: -13.5, imf: -23.4 },
  { year: "2025e", wb: 1.9, imf: -0.8 },
  { year: "2026f", wb: 3.2, imf: 9.5 },
];

function pageHeader(sectionLabel: string, sectionAr: string, pageNum: number) {
  return `
    <header class="page-topbar">
      <div class="topbar-left">
        <div class="topbar-logo-pill">
          <img src="${zainLogoWhite}" alt="Zain" />
        </div>
        <span class="topbar-divider"></span>
        <div class="topbar-titles">
          <strong>ZAIN SUDAN BUSINESS · B2B MARKET OPPORTUNITY</strong>
          <span>${sectionLabel}</span>
        </div>
      </div>
      <div class="topbar-right">
        <span class="topbar-ar" dir="rtl">${sectionAr}</span>
        <span class="topbar-page">PAGE ${String(pageNum).padStart(2, "0")} / ${TOTAL_PAGES}</span>
      </div>
    </header>
  `;
}

function pageFooter(pageNum: number) {
  return `
    <footer class="page-bottombar">
      <div>
        <strong>Prepared for:</strong> Tanzeel Elsadig Mahdi Hussein (Cloud &amp; Hosting / B2B Presales Team Leader)
      </div>
      <div>
        <strong>Prepared by:</strong> Franco Pinto — Sami Suliman, Manager, Business Operations &amp; Technology
      </div>
      <div class="bottom-brand">
        <span>Where Sudan's business connects · هنا تتواصل أعمال السودان</span>
        <strong>${pageNum}</strong>
      </div>
    </footer>
  `;
}

function buildHtml(): string {
  // Generate 12 Sector Pages (Pages 7 to 18)
  const sectorPagesHtml = sectorsData
    .map((sec, idx) => {
      const pageNum = 7 + idx;
      const prospects = sectorProspects[sec.id] || [];
      const heroImg = sectorImageMap[sec.id] || imgCoverHero;

      return `
      <!-- ==================== PAGE ${pageNum}: SECTOR #${sec.rank} (${sec.name.en}) ==================== -->
      <section class="pdf-page">
        ${pageHeader(
          `04 · SECTOR PLAYBOOK & TARGET ACCOUNTS · RANK #${sec.rank} OF 12`,
          `دليل القطاعات والعملاء المستهدفين · القطاع #${sec.rank}`,
          pageNum
        )}
        <div class="page-body">
          <!-- Sector Hero Banner -->
          <div class="sec-banner">
            <img src="${heroImg}" class="sec-banner-bg" alt="${sec.name.en}" />
            <div class="sec-banner-overlay">
              <div class="sec-rank-box tier-${sec.tier}">
                <small>COMBINED RANK</small>
                <strong>#${sec.rank}</strong>
              </div>
              <div class="sec-banner-titles">
                <div class="sec-pills">
                  <span class="pill-tier tier-${sec.tier}">${sec.tierLabel.en}</span>
                  <span class="pill-meta">Strategy Score: ${sec.strategyScore.toFixed(2)} / 5.0 (#${sec.strategyRank})</span>
                  <span class="pill-meta">Sales View Rank: #${sec.salesRank}</span>
                </div>
                <h2>${sec.name.en}</h2>
                <h3 dir="rtl">${sec.name.ar}</h3>
              </div>
            </div>
          </div>

          <!-- Top 3-Column Executive Digest of the Sector -->
          <div class="sec-grid-3">
            <div class="sec-box">
              <div class="sec-box-title">1. MARKET REALITY &amp; BUYER PERSONA</div>
              <p class="sec-buyer"><strong>Buyer:</strong> ${sec.buyer.en}</p>
              <ul class="sec-list">
                ${sec.marketState
                  .map(
                    (m) =>
                      `<li>${m.text.en} <span class="cite">[${m.evidence}${m.citation ? ` · ${m.citation}` : ""}]</span></li>`
                  )
                  .join("")}
              </ul>
              <div class="sec-sub-label">Operational Pain Points:</div>
              <ul class="sec-list compact">
                ${sec.pains.slice(0, 3).map((p) => `<li>${p.en}</li>`).join("")}
              </ul>
            </div>

            <div class="sec-box is-plum">
              <div class="sec-box-title">2. ZAIN SUDAN B2B SOLUTION &amp; ENTRY PITCH</div>
              <ul class="sec-list">
                ${sec.zainOffers.map((o) => `<li>${o.en}</li>`).join("")}
              </ul>
              <div class="sec-pitch-quote">
                <small>Recommended Presales Opening Line:</small>
                <strong>“${sec.approachQuote.en}”</strong>
              </div>
              <div class="sec-pilot-meta">
                <div><strong>Lead Bundle:</strong> ${sec.leadBundle.en}</div>
                <div><strong>Sales Route:</strong> ${sec.route.en}</div>
              </div>
            </div>

            <div class="sec-box">
              <div class="sec-box-title">3. FRANCO PINTO LAYER &amp; COMPLIANCE</div>
              <div class="sec-sub-label">Franco Pinto Integration Value-Add:</div>
              <ul class="sec-list compact">
                ${sec.francoPintoAdds.map((f) => `<li>${f.en}</li>`).join("")}
              </ul>
              <div class="sec-sub-label" style="margin-top:4px;color:#9a3412;">Commercial &amp; Risk Flags:</div>
              <ul class="sec-list compact">
                ${sec.flags.map((fl) => `<li>${fl.en}</li>`).join("")}
              </ul>
              <div class="sec-ar-summary" dir="rtl">
                <strong>ملخص العرض بالعربية:</strong> ${sec.whyItWorks.ar}
              </div>
            </div>
          </div>

          <!-- Bottom Section: TOP 5 POTENTIAL TARGET CLIENTS & DM OUTREACH PLAYBOOK -->
          <div class="prospects-section">
            <div class="prospects-header">
              <div>
                <strong>TOP 5 POTENTIAL TARGET CLIENTS &amp; DECISION-MAKER (DM) OUTREACH PLAYBOOK</strong>
                <span>Actionable target accounts for Zain B2B Presales &amp; Cloud/Hosting team to research, locate the Decision-Maker, and pitch</span>
              </div>
              <span class="prospects-badge" dir="rtl">أهم 5 عملاء محتملين ودليل صناع القرار</span>
            </div>

            <table class="prospects-table">
              <thead>
                <tr>
                  <th style="width:3%">#</th>
                  <th style="width:20%">Target Organization (EN / AR)</th>
                  <th style="width:13%">Operating Hub</th>
                  <th style="width:19%">Decision-Maker (DM) to Search</th>
                  <th style="width:22%">Why Target / Specific Pain Point</th>
                  <th style="width:23%">Recommended Presales Outreach Pitch</th>
                </tr>
              </thead>
              <tbody>
                ${prospects
                  .map(
                    (p, pIdx) => `
                  <tr>
                    <td class="td-num">${pIdx + 1}</td>
                    <td>
                      <strong class="org-en">${p.name.en}</strong>
                      <span class="org-ar" dir="rtl">${p.name.ar}</span>
                    </td>
                    <td>
                      <span class="hub-tag">${p.hub.en}</span>
                    </td>
                    <td class="td-dm">
                      <strong>${p.dmTitle.en}</strong>
                      <span dir="rtl">${p.dmTitle.ar}</span>
                    </td>
                    <td>${p.painPoint.en}</td>
                    <td class="td-pitch">${p.outreachPitch.en}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
        ${pageFooter(pageNum)}
      </section>
    `;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zain Sudan Business — CEO-Level B2B Market Opportunity &amp; Presales Playbook</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Noto+Sans+Arabic:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans Arabic', sans-serif;
      background: #160822;
      color: #1f122b;
      line-height: 1.38;
    }
    .pdf-page {
      width: 210mm;
      height: 297mm;
      page-break-after: always;
      break-after: page;
      position: relative;
      overflow: hidden;
      background: #fbf9fd;
      display: flex;
      flex-direction: column;
    }
    .pdf-page:last-child {
      page-break-after: auto;
      break-after: auto;
    }

    /* ==================== PAGE TOPBAR & BOTTOMBAR ==================== */
    .page-topbar {
      height: 13.5mm;
      background: linear-gradient(90deg, #210930 0%, #3d1152 60%, #5b1865 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 9mm;
      border-bottom: 2px solid #d41476;
      flex-shrink: 0;
    }
    .topbar-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .topbar-logo-pill {
      display: flex;
      align-items: center;
    }
    .topbar-logo-pill img {
      height: 22px;
      width: auto;
      display: block;
    }
    .topbar-divider {
      width: 1px;
      height: 20px;
      background: rgba(255,255,255,0.28);
    }
    .topbar-titles strong {
      display: block;
      font-size: 7.2pt;
      letter-spacing: 0.08em;
      color: #f9a8d4;
    }
    .topbar-titles span {
      display: block;
      font-size: 8.2pt;
      font-weight: 700;
      color: #fff;
    }
    .topbar-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .topbar-ar {
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 8pt;
      color: #e9d5ff;
      font-weight: 600;
    }
    .topbar-page {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7.2pt;
      font-weight: 600;
      background: rgba(255,255,255,0.14);
      padding: 3px 7px;
      border-radius: 4px;
      color: #fff;
    }

    .page-body {
      flex: 1;
      padding: 5mm 9mm 3.5mm;
      display: flex;
      flex-direction: column;
      gap: 3.5mm;
      overflow: hidden;
    }

    .page-bottombar {
      height: 8.5mm;
      background: #f2ecf7;
      border-top: 1px solid #dfd2ea;
      padding: 0 9mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 6.5pt;
      color: #584169;
      flex-shrink: 0;
    }
    .page-bottombar strong {
      color: #2e1142;
    }
    .bottom-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      color: #6b21a8;
    }
    .bottom-brand strong {
      background: #3d1152;
      color: #fff;
      padding: 1.5px 6px;
      border-radius: 3px;
      font-size: 6.8pt;
    }

    /* ==================== COVER PAGE (PAGE 1) ==================== */
    .cover-page {
      background: #150521;
      color: #fff;
      justify-content: space-between;
    }
    .cover-hero-wrap {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .cover-hero-wrap img {
      width: 100%;
      height: 62%;
      object-fit: cover;
      opacity: 0.42;
    }
    .cover-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(21, 5, 33, 0.72) 0%,
        rgba(38, 10, 58, 0.86) 44%,
        #160624 62%,
        #11041c 100%
      );
    }
    .cover-content {
      position: relative;
      z-index: 2;
      padding: 12mm 12mm 10mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .cover-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255,255,255,0.18);
      padding-bottom: 5mm;
    }
    .cover-logos {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .cover-zain-logo {
      height: 44px;
      width: auto;
    }
    .cover-partner-badge {
      border-left: 2px solid #d41476;
      padding-left: 12px;
    }
    .cover-partner-badge small {
      display: block;
      font-size: 7pt;
      letter-spacing: 0.14em;
      color: #f472b6;
      text-transform: uppercase;
      font-weight: 700;
    }
    .cover-partner-badge strong {
      font-size: 11pt;
      color: #fff;
      letter-spacing: 0.03em;
    }
    .cover-doc-meta {
      text-align: right;
      font-size: 7.8pt;
      color: #e9d5ff;
    }
    .cover-doc-meta strong {
      display: block;
      color: #fbbf24;
      font-size: 8.5pt;
    }

    .cover-Headline-zone {
      margin-top: 6mm;
    }
    .cover-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(212, 20, 118, 0.24);
      border: 1px solid rgba(244, 114, 182, 0.5);
      color: #fbcfe8;
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4mm;
    }
    .cover-title-en {
      font-size: 27pt;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    .cover-title-en span {
      color: #f472b6;
    }
    .cover-title-ar {
      margin-top: 3mm;
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 16.5pt;
      font-weight: 800;
      color: #f5d0fe;
    }
    .cover-subtitle {
      margin-top: 4mm;
      font-size: 9.8pt;
      color: #e2d4f0;
      max-width: 175mm;
      line-height: 1.5;
    }
    .cover-slogan-bar {
      margin-top: 5mm;
      display: inline-flex;
      align-items: center;
      gap: 14px;
      background: linear-gradient(90deg, #d41476 0%, #7e22ce 100%);
      padding: 6px 16px;
      border-radius: 8px;
      font-size: 9.5pt;
      font-weight: 700;
    }

    /* Dedication Card on Cover */
    .cover-dedication-card {
      margin-top: 6mm;
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid rgba(244, 114, 182, 0.45);
      border-left: 5px solid #f472b6;
      border-radius: 10px;
      padding: 4.5mm 6mm;
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 6mm;
    }
    .ded-col small {
      display: block;
      font-size: 6.8pt;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #f9a8d4;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .ded-col strong {
      display: block;
      font-size: 11.5pt;
      color: #fff;
      font-weight: 800;
    }
    .ded-col span {
      display: block;
      font-size: 8.2pt;
      color: #fde68a;
      font-weight: 600;
      margin-top: 2px;
    }
    .ded-col p {
      margin-top: 3px;
      font-size: 7.6pt;
      color: #d8b4fe;
    }

    /* Cover 6 KPI Strip */
    .cover-kpi-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3.5mm;
      margin-top: 4mm;
    }
    .cover-kpi-card {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 8px;
      padding: 3.2mm 4mm;
    }
    .cover-kpi-card strong {
      display: block;
      font-size: 13.5pt;
      font-weight: 800;
      color: #fbbf24;
    }
    .cover-kpi-card span {
      display: block;
      font-size: 7.4pt;
      font-weight: 700;
      color: #fff;
      margin-top: 1px;
      line-height: 1.3;
    }
    .cover-kpi-card small {
      display: block;
      font-size: 6.4pt;
      color: #cbd5e1;
      margin-top: 2px;
    }

    .cover-bottom-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255,255,255,0.15);
      padding-top: 3.5mm;
      font-size: 7.2pt;
      color: #cbd5e1;
    }

    /* ==================== COMMON SECTION HEADINGS & CARDS ==================== */
    .sec-head-strip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f3eaf8;
      border-left: 4px solid #6b21a8;
      padding: 2mm 3.5mm;
      border-radius: 5px;
      flex-shrink: 0;
    }
    .sec-head-strip h2 {
      font-size: 9.8pt;
      font-weight: 800;
      color: #2b0d3e;
    }
    .sec-head-strip span {
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 8.5pt;
      font-weight: 700;
      color: #7e22ce;
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5mm;
    }
    .three-col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3mm;
    }
    .card {
      background: #fff;
      border: 1px solid #e3d6ec;
      border-radius: 7px;
      padding: 3mm 3.5mm;
    }
    .card-plum {
      background: linear-gradient(145deg, #2b0d3e 0%, #461561 100%);
      color: #fff;
      border: 1px solid #6b21a8;
      border-radius: 7px;
      padding: 3mm 3.5mm;
    }
    .card h3 {
      font-size: 8.2pt;
      font-weight: 800;
      color: #3b1254;
      margin-bottom: 1.5mm;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .card-plum h3 {
      font-size: 8.2pt;
      font-weight: 800;
      color: #f9a8d4;
      margin-bottom: 1.5mm;
      text-transform: uppercase;
    }
    .card p {
      font-size: 7.2pt;
      color: #3a2747;
      line-height: 1.4;
    }
    .card-plum p {
      font-size: 7.2pt;
      color: #f3e8ff;
      line-height: 1.4;
    }

    /* Findings List */
    .finding-row {
      display: grid;
      grid-template-columns: 20px 1fr;
      gap: 7px;
      padding: 1.3mm 2.4mm;
      background: #fff;
      border: 1px solid #e5d8ef;
      border-radius: 5px;
      margin-bottom: 1.1mm;
    }
    .finding-num {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: #6b21a8;
      color: #fff;
      font-weight: 800;
      font-size: 7pt;
      display: grid;
      place-items: center;
    }
    .finding-row strong {
      font-size: 7.1pt;
      color: #260d38;
      display: block;
      line-height: 1.25;
    }
    .finding-row p {
      font-size: 6.3pt;
      color: #4b3659;
      margin-top: 0.5px;
      line-height: 1.28;
    }

    /* Tables */
    table.exec-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 6.2pt;
      background: #fff;
      border: 1px solid #dfd2ea;
      border-radius: 6px;
      overflow: hidden;
    }
    table.exec-table th {
      background: #300e45;
      color: #fff;
      text-align: left;
      padding: 1.2mm 2mm;
      font-weight: 700;
      font-size: 6.1pt;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    table.exec-table td {
      padding: 1.05mm 2mm;
      border-bottom: 1px solid #ede5f4;
      color: #2f1d3d;
      vertical-align: top;
      line-height: 1.25;
    }
    table.exec-table tr:nth-child(even) td {
      background: #faf7fc;
    }

    .tier-badge {
      display: inline-block;
      padding: 1.5px 6px;
      border-radius: 4px;
      font-weight: 800;
      font-size: 6.1pt;
      text-transform: uppercase;
    }
    .tier-1 { background: #dcfce7; color: #166534; }
    .tier-2 { background: #f3e8ff; color: #6b21a8; }
    .tier-3 { background: #fef3c7; color: #92400e; }
    .tier-4 { background: #f1f5f9; color: #475569; }

    /* ==================== SECTOR PLAYBOOK PAGES (PAGES 7-18) ==================== */
    .sec-banner {
      position: relative;
      height: 31mm;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #d41476;
      flex-shrink: 0;
    }
    .sec-banner-bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .sec-banner-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(24,6,38,0.94) 0%, rgba(49,14,74,0.82) 60%, rgba(24,6,38,0.45) 100%);
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0 5mm;
      color: #fff;
    }
    .sec-rank-box {
      width: 18mm;
      height: 20mm;
      border-radius: 7px;
      background: linear-gradient(135deg, #d41476, #7e22ce);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border: 1px solid rgba(255,255,255,0.35);
    }
    .sec-rank-box small {
      font-size: 5pt;
      letter-spacing: 0.08em;
      font-weight: 700;
      opacity: 0.9;
    }
    .sec-rank-box strong {
      font-size: 16pt;
      font-weight: 800;
      line-height: 1;
    }
    .sec-banner-titles {
      flex: 1;
    }
    .sec-pills {
      display: flex;
      gap: 6px;
      margin-bottom: 1mm;
      flex-wrap: wrap;
    }
    .pill-tier {
      font-size: 6.2pt;
      font-weight: 800;
      padding: 1.5px 7px;
      border-radius: 99px;
      background: #fbbf24;
      color: #1f0930;
    }
    .pill-meta {
      font-size: 6.2pt;
      font-weight: 700;
      padding: 1.5px 7px;
      border-radius: 99px;
      background: rgba(255,255,255,0.16);
      color: #f3e8ff;
    }
    .sec-banner-titles h2 {
      font-size: 12pt;
      font-weight: 800;
      color: #fff;
      line-height: 1.15;
    }
    .sec-banner-titles h3 {
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 9pt;
      font-weight: 700;
      color: #f9a8d4;
      margin-top: 1px;
    }

    .sec-grid-3 {
      display: grid;
      grid-template-columns: 1.05fr 1.05fr 0.95fr;
      gap: 2.8mm;
    }
    .sec-box {
      background: #fff;
      border: 1px solid #e1d4ec;
      border-radius: 7px;
      padding: 2.4mm 2.8mm;
      display: flex;
      flex-direction: column;
      gap: 1.2mm;
    }
    .sec-box.is-plum {
      background: #fdf9ff;
      border: 1.5px solid #a855f7;
    }
    .sec-box-title {
      font-size: 6.5pt;
      font-weight: 800;
      color: #581c87;
      letter-spacing: 0.05em;
      border-bottom: 1px solid #ede4f5;
      padding-bottom: 0.8mm;
    }
    .sec-buyer {
      font-size: 6.3pt;
      color: #331b47;
      background: #f6effb;
      padding: 1.2mm 1.8mm;
      border-radius: 4px;
    }
    .sec-sub-label {
      font-size: 6.2pt;
      font-weight: 800;
      color: #4c1d95;
      margin-top: 0.8mm;
    }
    .sec-list {
      padding-left: 3.2mm;
      font-size: 6.1pt;
      color: #362246;
      line-height: 1.3;
    }
    .sec-list li {
      margin-bottom: 0.8mm;
    }
    .sec-list.compact li {
      margin-bottom: 0.5mm;
    }
    .cite {
      font-size: 5.5pt;
      color: #7e22ce;
      font-weight: 700;
    }
    .sec-pitch-quote {
      margin-top: auto;
      background: linear-gradient(135deg, #2e0f44, #581c87);
      color: #fff;
      padding: 1.8mm 2.2mm;
      border-radius: 5px;
    }
    .sec-pitch-quote small {
      display: block;
      font-size: 5.5pt;
      color: #f9a8d4;
      text-transform: uppercase;
      font-weight: 700;
    }
    .sec-pitch-quote strong {
      font-size: 6.2pt;
      line-height: 1.28;
      display: block;
      margin-top: 0.5mm;
    }
    .sec-pilot-meta {
      font-size: 6pt;
      color: #3b1c50;
      display: flex;
      flex-direction: column;
      gap: 0.5mm;
      padding-top: 0.8mm;
    }
    .sec-ar-summary {
      margin-top: auto;
      background: #f5f0f9;
      border-right: 3px solid #d41476;
      padding: 1.5mm 2mm;
      border-radius: 4px;
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 6pt;
      color: #2e1042;
      line-height: 1.35;
    }

    /* Prospects Table on Each Sector Page */
    .prospects-section {
      background: #fff;
      border: 1.5px solid #4c1d95;
      border-radius: 7px;
      overflow: hidden;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .prospects-header {
      background: linear-gradient(90deg, #2e0f44 0%, #581c87 100%);
      color: #fff;
      padding: 1.6mm 3mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .prospects-header strong {
      display: block;
      font-size: 6.9pt;
      letter-spacing: 0.04em;
      color: #fbbf24;
    }
    .prospects-header span {
      font-size: 5.9pt;
      color: #e9d5ff;
    }
    .prospects-badge {
      font-family: 'Noto Sans Arabic', sans-serif;
      background: rgba(212, 20, 118, 0.35);
      border: 1px solid #f472b6;
      color: #fff !important;
      padding: 1.5px 8px;
      border-radius: 99px;
      font-size: 6.2pt !important;
      font-weight: 700;
    }
    table.prospects-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 5.95pt;
      flex: 1;
    }
    table.prospects-table th {
      background: #f3eaf8;
      color: #3b0f54;
      text-align: left;
      padding: 1.2mm 1.8mm;
      font-size: 5.8pt;
      font-weight: 800;
      border-bottom: 1px solid #d8c6e8;
      text-transform: uppercase;
    }
    table.prospects-table td {
      padding: 1.2mm 1.8mm;
      border-bottom: 1px solid #eee6f5;
      vertical-align: top;
      line-height: 1.28;
      color: #2c183b;
    }
    table.prospects-table tr:last-child td {
      border-bottom: none;
    }
    .td-num {
      font-weight: 800;
      color: #7e22ce;
      text-align: center;
      background: #faf5ff;
    }
    .org-en {
      display: block;
      font-size: 6.3pt;
      color: #1f0930;
    }
    .org-ar {
      display: block;
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 5.7pt;
      color: #6b21a8;
      margin-top: 0.4mm;
    }
    .hub-tag {
      display: inline-block;
      background: #f3e8ff;
      color: #581c87;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 5.6pt;
    }
    .td-dm strong {
      display: block;
      color: #9d174d;
      font-size: 6pt;
    }
    .td-dm span {
      display: block;
      font-family: 'Noto Sans Arabic', sans-serif;
      font-size: 5.5pt;
      color: #6b537a;
      margin-top: 0.4mm;
    }
    .td-pitch {
      background: #f4fbf7;
      color: #14532d !important;
      font-weight: 600;
    }

    /* Visual Showcase Cards */
    .img-card {
      position: relative;
      border-radius: 7px;
      overflow: hidden;
      height: 44mm;
      border: 1px solid #d8c6e8;
    }
    .img-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .img-card-caption {
      position: absolute;
      inset: auto 0 0 0;
      background: linear-gradient(180deg, transparent 0%, rgba(20,5,32,0.93) 100%);
      padding: 4mm 3.5mm 2.5mm;
      color: #fff;
    }
    .img-card-caption small {
      display: block;
      font-size: 5.8pt;
      color: #f472b6;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .img-card-caption strong {
      font-size: 7.8pt;
      color: #fff;
    }

    /* Sources 2-column index */
    .sources-columns {
      column-count: 2;
      column-gap: 4mm;
      font-size: 5.7pt;
      line-height: 1.28;
    }
    .src-item {
      break-inside: avoid;
      padding: 0.7mm 0;
      border-bottom: 1px dotted #e2d6ec;
      color: #352044;
    }
    .src-item strong {
      color: #6b21a8;
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 1: CEO COVER PAGE ==================== -->
  <section class="pdf-page cover-page">
    <div class="cover-hero-wrap">
      <img src="${imgCoverHero}" alt="Zain Sudan Business Cover" />
      <div class="cover-gradient"></div>
    </div>

    <div class="cover-content">
      <div>
        <div class="cover-top-row">
          <div class="cover-logos">
            <img src="${zainLogoWhite}" class="cover-zain-logo" alt="Zain Logo" />
            <div class="cover-partner-badge">
              <small>Strategic B2B Technology Partner</small>
              <strong>FRANCO PINTO</strong>
            </div>
          </div>
          <div class="cover-doc-meta">
            <strong>CEO &amp; PRESALES EXECUTIVE EDITION</strong>
            <span>19 April 2026 · 71 Verified Primary Citations</span>
          </div>
        </div>

        <div class="cover-Headline-zone">
          <div class="cover-eyebrow">
            <span>ZAIN SUDAN BUSINESS · ENTERPRISE &amp; CLOUD PLAYBOOK</span>
          </div>
          <h1 class="cover-title-en">
            Sudan B2B Market Opportunity<br />
            <span>&amp; 60-Account Outreach Playbook</span>
          </h1>
          <div class="cover-title-ar" dir="rtl">
            فرص سوق قطاع الأعمال (B2B) في السودان ودليل استهداف 60 مؤسسة قيادية
          </div>
          <p class="cover-subtitle">
            An evidence-grounded commercial strategy, cloud &amp; database infrastructure blueprint, 12 ranked sector playbooks, 5+1 ready-to-sell enterprise bundles, and 60 priority target clients with Decision-Maker (DM) outreach guides.
          </p>
          <div class="cover-slogan-bar">
            <span>Where Sudan’s business connects</span>
            <span>·</span>
            <span dir="rtl">هنا تتواصل أعمال السودان</span>
          </div>
        </div>

        <!-- Personalized Executive Dedication Box -->
        <div class="cover-dedication-card">
          <div class="ded-col">
            <small>Prepared Exclusively For · إهداء خاص إلى</small>
            <strong>Tanzeel Elsadig Mahdi Hussein</strong>
            <span>Cloud and Hosting Team Leader / B2B Business Solutions Presales Team Leader</span>
            <p>Zain Sudan — Empowering Cloud, Hosting, Connectivity, and Enterprise Presales Architecture across Sudan’s reconstruction and humanitarian hubs.</p>
          </div>
          <div class="ded-col">
            <small>Prepared By · إعداد وتطوير</small>
            <strong>Franco Pinto — Sami Suliman</strong>
            <span>Manager, Business Operations &amp; Technology</span>
            <p>Technical integration partner for custom enterprise applications, Bede Corporate APIs, donor reporting portals, and sovereign cloud deployment.</p>
          </div>
        </div>
      </div>

      <div>
        <div class="cover-kpi-grid">
          ${headlineStats
            .map(
              (m) => `
            <div class="cover-kpi-card">
              <strong>${m.value.en}</strong>
              <span>${m.label.en}</span>
              <small>${m.source.en} ${m.citation}</small>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="cover-bottom-bar" style="margin-top:5mm;">
          <span>CONFIDENTIAL · ZAIN SUDAN BUSINESS &amp; FRANCO PINTO JOINT BRIEFING</span>
          <span>20-PAGE CEO &amp; PRESALES EDITION · PAGE 01 / ${TOTAL_PAGES}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== PAGE 2: EXECUTIVE SUMMARY & 5 FINDINGS ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "01 · EXECUTIVE SUMMARY, STRATEGIC FINDINGS & 12-SECTOR PRIORITY RANKING",
      "الملخص التنفيذي والنتائج الخمس ومصفوفة الأولويات",
      2
    )}
    <div class="page-body">
      <div class="two-col">
        <div class="card-plum">
          <h3>Executive Thesis: Why Zain Sudan Business Leads Now</h3>
          <p>
            Despite wartime contraction in 2023–2024, Sudan’s economy returns to growth in 2025–2026 (+1.9% to +3.2% World Bank; +9.5% IMF). Over <strong>3.3 million people have returned</strong> to Khartoum (~1.7M) and Aj Jazirah (~1.0M), while Port Sudan, Kassala, Gedaref, River Nile, and Northern State operate as resilient enterprise corridors. With <strong>12.4M customers in Q1 2026 (+13% YoY)</strong>, <strong>US$157M Q1 revenue (+34% YoY)</strong>, the <strong>Bede mobile money platform</strong>, and the Nov 2026 Starlink deadline, Zain Sudan is uniquely positioned to capture enterprise connectivity, cloud hosting, and corporate payments.
          </p>
        </div>
        <div class="card" dir="rtl" style="font-family:'Noto Sans Arabic',sans-serif;">
          <h3 style="color:#6b21a8;">الرؤية التنفيذية: لماذا تقود «زين أعمال» السوق الآن</h3>
          <p style="font-size:7.3pt;line-height:1.5;">
            مع عودة أكثر من <strong>3.3 مليون مواطن</strong> إلى الخرطوم والجزيرة واستقرار المراكز التجارية في بورتسودان وكسلا والقضارف ونهر النيل والشمالية، تبرز نافذة استراتيجية غير مسبوقة لقطاع الأعمال. تمتلك زين السودان <strong>12.4 مليون مشترك</strong> وإيرادات ربع سنوية بلغت <strong>157 مليون دولار (+34%)</strong> ومنصة <strong>Bede</strong> للمدفوعات وبنية سحابية جاهزة (ZainCloud). ومع انتهاء مهلة Starlink في <strong>نوفمبر 2026</strong> وتوقف خدمات الثريا، تحتاج المنظمات والبنوك والشركات فوراً إلى بدائل مرخصة وموثوقة من زين.
          </p>
        </div>
      </div>

      <div class="sec-head-strip">
        <h2>FIVE VERIFIED STRATEGIC FINDINGS SHAPING THE B2B PLAYBOOK</h2>
        <span>النتائج الاستراتيجية الخمس الموثقة</span>
      </div>

      <div>
        ${fiveFindings
          .map(
            (f) => `
          <div class="finding-row">
            <div class="finding-num">${f.num}</div>
            <div>
              <strong>${f.title.en} <span style="color:#7e22ce;font-weight:600;">— ${f.title.ar}</span></strong>
              <p>${f.detail.en} <span class="cite">${f.citation}</span></p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="sec-head-strip">
        <h2>COMBINED 12-SECTOR PRIORITY RANKING (STRATEGY SCORE vs. SALES SPEED)</h2>
        <span>الترتيب الموحد للقطاعات الـ 12</span>
      </div>

      <table class="exec-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Sector Name (EN / AR)</th>
            <th>Execution Tier</th>
            <th>Strategy Score</th>
            <th>Sales Rank</th>
            <th>Lead Entry Bundle &amp; Immediate Hook</th>
          </tr>
        </thead>
        <tbody>
          ${sectorsData
            .map(
              (s) => `
              <tr>
                <td><strong>#${s.rank}</strong></td>
                <td><strong>${s.name.en}</strong> · <span dir="rtl">${s.name.ar}</span></td>
                <td><span class="tier-badge tier-${s.tier}">${s.tierLabel.en}</span></td>
                <td><strong>${s.strategyScore.toFixed(2)} / 5.0</strong> (#${s.strategyRank})</td>
                <td>#${s.salesRank}</td>
                <td>${s.leadBundle.en}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    </div>
    ${pageFooter(2)}
  </section>

  <!-- ==================== PAGE 3: MACRO & MARKET CONTEXT INFOGRAPHICS ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "02 · SUDAN MACROECONOMIC, CURRENCY & GEOGRAPHIC ADDRESSABILITY INFOGRAPHICS",
      "المؤشرات الاقتصادية وأسعار الصرف والخريطة الجغرافية",
      3
    )}
    <div class="page-body">
      <div class="two-col">
        <!-- SVG Chart 1: GDP Trajectory -->
        <div class="card">
          <h3>Real GDP Growth Trajectory (World Bank vs. IMF, 2023–2026f)</h3>
          <svg viewBox="0 0 420 150" style="width:100%;height:auto;margin-top:4px;">
            <rect x="0" y="0" width="420" height="150" fill="#faf7fc" rx="6" />
            <line x1="40" y1="60" x2="400" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
            <text x="8" y="63" font-size="8" fill="#64748b" font-weight="700">0%</text>
            ${macroTrajectory
              .map((d, i) => {
                const x = 60 + i * 80;
                const wbH = Math.abs(d.wb) * 1.7;
                const wbY = d.wb >= 0 ? 60 - wbH : 60;
                const imfH = Math.abs(d.imf) * 1.7;
                const imfY = d.imf >= 0 ? 60 - imfH : 60;
                return `
                  <rect x="${x}" y="${wbY}" width="20" height="${Math.max(wbH, 3)}" fill="#6b21a8" rx="2" />
                  <rect x="${x + 23}" y="${imfY}" width="20" height="${Math.max(imfH, 3)}" fill="#d41476" rx="2" />
                  <text x="${x + 10}" y="${d.wb >= 0 ? wbY - 4 : wbY + wbH + 9}" font-size="7.5" text-anchor="middle" fill="#4c1d95" font-weight="700">${d.wb > 0 ? "+" : ""}${d.wb}%</text>
                  <text x="${x + 33}" y="${d.imf >= 0 ? imfY - 4 : imfY + imfH + 9}" font-size="7.5" text-anchor="middle" fill="#be185d" font-weight="700">${d.imf > 0 ? "+" : ""}${d.imf}%</text>
                  <text x="${x + 21}" y="142" font-size="8.5" text-anchor="middle" fill="#1e1b4b" font-weight="800">${d.year}</text>
                `;
              })
              .join("")}
            <rect x="245" y="10" width="10" height="10" fill="#6b21a8" rx="2" />
            <text x="259" y="18" font-size="8" fill="#334155" font-weight="700">World Bank [20]</text>
            <rect x="335" y="10" width="10" height="10" fill="#d41476" rx="2" />
            <text x="349" y="18" font-size="8" fill="#334155" font-weight="700">IMF [21]</text>
          </svg>
          <p style="margin-top:4px;font-size:6.8pt;">
            <strong>Key Insight:</strong> Both institutions confirm the wartime economic trough passed in 2023–2024, with positive growth returning in 2025–2026 driven by gold exports, agriculture, and Khartoum/Jazirah returnees.
          </p>
        </div>

        <!-- SVG Chart 2: Multi-Rate SDG Currency Reality -->
        <div class="card">
          <h3>Multi-Rate SDG / USD Exchange Reality (Why Indexed Pricing Wins)</h3>
          <svg viewBox="0 0 420 150" style="width:100%;height:auto;margin-top:4px;">
            <rect x="0" y="0" width="420" height="150" fill="#faf7fc" rx="6" />
            ${currencyRates
              .slice(0, 5)
              .map((c, i) => {
                const y = 8 + i * 28;
                const w = Math.max((c.rate / 10000) * 210, 12);
                const colors = ["#64748b", "#7e22ce", "#0284c7", "#d97706", "#d41476"];
                return `
                  <text x="8" y="${y + 12}" font-size="7.5" fill="#1e1b4b" font-weight="700">${c.label.en}</text>
                  <text x="8" y="${y + 21}" font-size="6.2" fill="#64748b">${c.source}</text>
                  <rect x="150" y="${y + 3}" width="${w}" height="15" fill="${colors[i]}" rx="3" />
                  <text x="${155 + w}" y="${y + 14}" font-size="8" fill="${colors[i]}" font-weight="800">${c.rate.toLocaleString()} SDG</text>
                `;
              })
              .join("")}
          </svg>
          <p style="margin-top:4px;font-size:6.8pt;">
            <strong>Commercial Rule:</strong> Anchor international NGO, UN, port, and mining contracts in USD/hard currency while billing local SMEs and agricultural traders in SDG indexed to commercial bank transfer rates [20, 23, 24].
          </p>
        </div>
      </div>

      <!-- 2025 Official Exports Breakdown -->
      <div class="two-col">
        <div class="card">
          <h3>2025 Official Exports (US$2.64 Billion Total — Central Bank / Public Data)</h3>
          <svg viewBox="0 0 420 122" style="width:100%;height:auto;margin-top:4px;">
            ${exports2025
              .slice(0, 5)
              .map((ex, i) => {
                const y = 6 + i * 23;
                const w = Math.max((ex.valueUsdM / 1600) * 200, 10);
                return `
                  <text x="6" y="${y + 12}" font-size="7.5" fill="#1e1b4b" font-weight="700">${ex.product.en}</text>
                  <rect x="135" y="${y + 2}" width="${w}" height="14" fill="${i === 0 ? "#d97706" : "#6b21a8"}" rx="3" />
                  <text x="${140 + w}" y="${y + 12}" font-size="7.5" fill="#1e1b4b" font-weight="800">$${ex.valueUsdM.toLocaleString()}M ${ex.volume ? `(${ex.volume})` : ""}</text>
                `;
              })
              .join("")}
          </svg>
        </div>

        <div class="card-plum">
          <h3>The Nov 2026 Regulatory Catalyst: Starlink &amp; Thuraya</h3>
          <p style="margin-top:2mm;">
            <strong>1. TPRA Unlicensed Satellite Cutoff (Nov 2026):</strong> Sudan’s regulatory authority requires humanitarian and enterprise users to transition off unlicensed Starlink terminals by November 2026 [36].<br/><br/>
            <strong>2. Thuraya Service Termination (1 Feb 2026):</strong> Thuraya satellite voice/data services ended across Sudan in February 2026 [33].<br/><br/>
            <strong>3. ETC Funding Shift (2026):</strong> The UN Emergency Telecommunications Cluster has 0% central funding for 2026 and moved to cost-sharing — forcing UN agencies and INGOs to procure commercial SLAs directly from <strong>Zain Sudan Business</strong>.
          </p>
        </div>
      </div>

      <div class="sec-head-strip">
        <h2>GEOGRAPHIC ADDRESSABILITY: SAF-HELD ENTERPRISE CORRIDORS vs. RSF ZONES</h2>
        <span>الخريطة الجغرافية للمناطق القابلة للخدمة</span>
      </div>

      <table class="exec-table">
        <thead>
          <tr>
            <th>Operating Zone</th>
            <th>Key States &amp; Commercial Hubs</th>
            <th>Network &amp; Returnee Reality (2025–2026)</th>
            <th>Zain B2B Commercial Posture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="tier-badge tier-1">ZONE A · CORE B2B</span></td>
            <td><strong>Port Sudan (Red Sea), Kassala, Gedaref, River Nile (Atbara), Northern (Dongola), Sennar, White Nile, Blue Nile</strong></td>
            <td>Primary diplomatic &amp; humanitarian hubs, central banking, maritime port, gold mining concessions, and agro-industrial production [14, 35, 36].</td>
            <td><strong>Full Direct Enterprise Sales:</strong> Dedicated APN, ZainCloud, Bede Corporate, Fleet VTS, and licensed VSAT failover.</td>
          </tr>
          <tr>
            <td><span class="tier-badge tier-2">ZONE B · RETURN CORRIDOR</span></td>
            <td><strong>Khartoum State (~1.7M returnees) &amp; Aj Jazirah / Wad Madani (~1.0M returnees)</strong></td>
            <td>Government formally returned to Khartoum in Jan 2026 [48]; ministries, banks, universities, hospitals, and wholesalers reopening branches rapidly.</td>
            <td><strong>Rapid Re-Opening Kits:</strong> Khartoum Return 4G CPE kit, Site-Office Connectivity, Cloud DR sync with Port Sudan.</td>
          </tr>
          <tr>
            <td><span class="tier-badge tier-3">ZONE C · CONTESTED / RSF</span></td>
            <td><strong>Darfur States &amp; Most of Kordofan</strong></td>
            <td>Out of scope for direct network deployment; fragmented terrestrial infrastructure and strict sanctions compliance rules [35, 64, 69].</td>
            <td><strong>Out of Scope / HQ-Only Humanitarian Support:</strong> Serve HQ contracts in Port Sudan &amp; Khartoum only.</td>
          </tr>
        </tbody>
      </table>
    </div>
    ${pageFooter(3)}
  </section>

  <!-- ==================== PAGE 4: CLOUD, HOSTING, DATABASE & PRESALES ARCHITECTURE ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "03A · CLOUD, HOSTING, DATABASE & B2B PRESALES REFERENCE ARCHITECTURE",
      "البنية المرجعية للسحابة والاستضافة وقواعد البيانات وحلول ما قبل البيع",
      4
    )}
    <div class="page-body">
      <div class="two-col">
        <div class="img-card">
          <img src="${imgCloudDc}" alt="ZainCloud Sovereign Data Center" />
          <div class="img-card-caption">
            <small>Sovereign Cloud &amp; Hosting Layer</small>
            <strong>ZainCloud In-Country VPS, Disaster Recovery &amp; Zdrop Secure Backup</strong>
          </div>
        </div>
        <div class="img-card">
          <img src="${imgBankingDb}" alt="Geo-Redundant Database & Core Banking" />
          <div class="img-card-caption">
            <small>Active-Active Database &amp; Financial Switch Layer</small>
            <strong>Port Sudan ↔ Khartoum Database Replication, Dual-Path APN &amp; SMPP OTP</strong>
          </div>
        </div>
      </div>

      <div class="sec-head-strip">
        <h2>END-TO-END ENTERPRISE INFRASTRUCTURE, DATABASE &amp; FAILOVER TOPOLOGY (FOR B2B PRESALES)</h2>
        <span>مخطط البنية التحتية وقواعد البيانات والتوافر العالي</span>
      </div>

      <!-- Full Vector Architecture Diagram (SVG) -->
      <div class="card" style="padding:3mm;">
        <svg viewBox="0 0 740 245" style="width:100%;height:auto;">
          <defs>
            <linearGradient id="plumGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#2e0f44" />
              <stop offset="100%" stop-color="#581c87" />
            </linearGradient>
            <linearGradient id="magGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#be185d" />
              <stop offset="100%" stop-color="#7e22ce" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="740" height="245" fill="#faf7fc" rx="8" />

          <!-- Column 1: Enterprise Edge -->
          <rect x="10" y="10" width="168" height="225" fill="#fff" stroke="#d8b4fe" stroke-width="1.5" rx="6" />
          <rect x="10" y="10" width="168" height="24" fill="url(#plumGrad)" rx="6" />
          <text x="94" y="25" font-size="8" fill="#fff" font-weight="800" text-anchor="middle">1. ENTERPRISE EDGE &amp; ACCESS</text>

          <rect x="20" y="42" width="148" height="38" fill="#f3e8ff" rx="4" />
          <text x="94" y="56" font-size="7.5" fill="#3b0764" font-weight="800" text-anchor="middle">Dual-Path Private APN</text>
          <text x="94" y="68" font-size="6.5" fill="#581c87" text-anchor="middle">Dedicated Microwave + 4G Failover</text>

          <rect x="20" y="88" width="148" height="38" fill="#fce7f3" rx="4" />
          <text x="94" y="102" font-size="7.5" fill="#831843" font-weight="800" text-anchor="middle">Licensed VSAT + SD-WAN</text>
          <text x="94" y="114" font-size="6.5" fill="#9d174d" text-anchor="middle">TPRA-Compliant (Replaces Starlink)</text>

          <rect x="20" y="134" width="148" height="38" fill="#ecfdf5" rx="4" />
          <text x="94" y="148" font-size="7.5" fill="#065f46" font-weight="800" text-anchor="middle">IoT / M2M &amp; Fleet VTS SIMs</text>
          <text x="94" y="160" font-size="6.5" fill="#047857" text-anchor="middle">Solar Pumps, Cold-Chain, Trucks</text>

          <rect x="20" y="180" width="148" height="44" fill="#eff6ff" rx="4" />
          <text x="94" y="195" font-size="7.5" fill="#1e3a8a" font-weight="800" text-anchor="middle">4G CPE &amp; Hybrid CUG Pools</text>
          <text x="94" y="207" font-size="6.5" fill="#1d4ed8" text-anchor="middle">Returning Khartoum/Jazirah Offices</text>

          <!-- Arrows Col 1 -> Col 2 -->
          <path d="M178 61 L196 61 M178 107 L196 107 M178 153 L196 153 M178 202 L196 202" stroke="#9333ea" stroke-width="2" />

          <!-- Column 2: Zain Core & Offline-Resilient Channels -->
          <rect x="196" y="10" width="172" height="225" fill="#fff" stroke="#f472b6" stroke-width="1.5" rx="6" />
          <rect x="196" y="10" width="172" height="24" fill="url(#magGrad)" rx="6" />
          <text x="282" y="25" font-size="8" fill="#fff" font-weight="800" text-anchor="middle">2. ZAIN CORE &amp; FALLBACK CHANNELS</text>

          <rect x="206" y="42" width="152" height="42" fill="#fdf2f8" rx="4" />
          <text x="282" y="57" font-size="7.5" fill="#831843" font-weight="800" text-anchor="middle">Direct SMPP High-Speed Gateway</text>
          <text x="282" y="69" font-size="6.3" fill="#9d174d" text-anchor="middle">Priority Bank OTP &amp; Bulk SMS Alerts</text>
          <text x="282" y="78" font-size="6" fill="#be185d" text-anchor="middle">(Works even when Mobile IP Data is down)</text>

          <rect x="206" y="92" width="152" height="42" fill="#f3e8ff" rx="4" />
          <text x="282" y="107" font-size="7.5" fill="#3b0764" font-weight="800" text-anchor="middle">USSD Session Gateway (*200#)</text>
          <text x="282" y="119" font-size="6.3" fill="#581c87" text-anchor="middle">Feature-Phone Cash &amp; Field Check-In</text>
          <text x="282" y="128" font-size="6" fill="#6b21a8" text-anchor="middle">Zero-Internet Rural Beneficiary Reach</text>

          <rect x="206" y="142" width="152" height="42" fill="#fffbeb" rx="4" />
          <text x="282" y="157" font-size="7.5" fill="#78350f" font-weight="800" text-anchor="middle">CCaaS · Short Code · IVR · PTT</text>
          <text x="282" y="169" font-size="6.3" fill="#92400e" text-anchor="middle">Auto-Dialer &amp; Recorded Voice Hotlines</text>
          <text x="282" y="178" font-size="6" fill="#b45309" text-anchor="middle">Bypasses March 2026 VoIP / WhatsApp Ban</text>

          <rect x="206" y="192" width="152" height="34" fill="#f1f5f9" rx="4" />
          <text x="282" y="207" font-size="7.5" fill="#0f172a" font-weight="800" text-anchor="middle">UCaaS (Cisco) &amp; VSaaS</text>
          <text x="282" y="218" font-size="6.3" fill="#334155" text-anchor="middle">Unified Comms &amp; Cloud Video Security</text>

          <!-- Arrows Col 2 -> Col 3 -->
          <path d="M368 75 L386 75 M368 125 L386 125 M368 175 L386 175" stroke="#be185d" stroke-width="2" />

          <!-- Column 3: ZainCloud & Geo-Redundant Database -->
          <rect x="386" y="10" width="172" height="225" fill="#fff" stroke="#6b21a8" stroke-width="1.5" rx="6" />
          <rect x="386" y="10" width="172" height="24" fill="url(#plumGrad)" rx="6" />
          <text x="472" y="25" font-size="8" fill="#fff" font-weight="800" text-anchor="middle">3. ZAINCLOUD &amp; DATABASE LAYER</text>

          <rect x="396" y="42" width="152" height="52" fill="#f5f3ff" stroke="#8b5cf6" rx="4" />
          <text x="472" y="56" font-size="7.5" fill="#2e1065" font-weight="800" text-anchor="middle">ZainCloud Sovereign IaaS / VPS</text>
          <text x="472" y="68" font-size="6.3" fill="#4c1d95" text-anchor="middle">In-Country Compute &amp; Storage Nodes</text>
          <text x="472" y="79" font-size="6.3" fill="#6d28d9" font-weight="700" text-anchor="middle">Port Sudan Primary ↔ Khartoum Edge</text>
          <text x="472" y="89" font-size="5.8" fill="#5b21b6" text-anchor="middle">100% Data Sovereignty Compliance</text>

          <rect x="396" y="102" width="152" height="46" fill="#ecfeff" stroke="#06b6d4" rx="4" />
          <text x="472" y="116" font-size="7.5" fill="#164e63" font-weight="800" text-anchor="middle">Geo-Redundant Database Cluster</text>
          <text x="472" y="128" font-size="6.3" fill="#155e75" text-anchor="middle">Sync/Async DB Replication (PostgreSQL /</text>
          <text x="472" y="138" font-size="6.3" fill="#155e75" text-anchor="middle">Oracle / Core Banking Ledger Backup)</text>

          <rect x="396" y="156" width="152" height="34" fill="#f0fdf4" rx="4" />
          <text x="472" y="170" font-size="7.5" fill="#14532d" font-weight="800" text-anchor="middle">Bede Corporate Wallet Core</text>
          <text x="472" y="181" font-size="6.3" fill="#166534" text-anchor="middle">CBOS-Licensed · Bulk Cash &amp; Payroll</text>

          <rect x="396" y="196" width="152" height="30" fill="#fef3c7" rx="4" />
          <text x="472" y="210" font-size="7.2" fill="#78350f" font-weight="800" text-anchor="middle">Zdrop Backup + EDU-PRO + Hagool</text>
          <text x="472" y="220" font-size="6" fill="#92400e" text-anchor="middle">Built CMS Assets Ready for Activation</text>

          <!-- Arrows Col 3 -> Col 4 -->
          <path d="M558 68 L574 68 M558 125 L574 125 M558 173 L574 173" stroke="#6b21a8" stroke-width="2" />

          <!-- Column 4: Franco Pinto Enterprise Apps -->
          <rect x="574" y="10" width="156" height="225" fill="#fff" stroke="#15803d" stroke-width="1.5" rx="6" />
          <rect x="574" y="10" width="156" height="24" fill="#15803d" rx="6" />
          <text x="652" y="25" font-size="7.8" fill="#fff" font-weight="800" text-anchor="middle">4. FRANCO PINTO APP LAYER</text>

          <rect x="583" y="42" width="138" height="40" fill="#f0fdf4" rx="4" />
          <text x="652" y="56" font-size="7.2" fill="#14532d" font-weight="800" text-anchor="middle">Donor &amp; CFO Audit Portals</text>
          <text x="652" y="68" font-size="6.2" fill="#166534" text-anchor="middle">Bilingual (EN/AR) Reconciliation</text>

          <rect x="583" y="90" width="138" height="40" fill="#f0fdf4" rx="4" />
          <text x="652" y="104" font-size="7.2" fill="#14532d" font-weight="800" text-anchor="middle">Offline-First Field Apps</text>
          <text x="652" y="116" font-size="6.2" fill="#166534" text-anchor="middle">Store-and-Forward SQLite/SMS Sync</text>

          <rect x="583" y="138" width="138" height="40" fill="#f0fdf4" rx="4" />
          <text x="652" y="152" font-size="7.2" fill="#14532d" font-weight="800" text-anchor="middle">ERP &amp; Core Banking Bridges</text>
          <text x="652" y="164" font-size="6.2" fill="#166534" text-anchor="middle">ISO-8583 / REST / Webhook Gateways</text>

          <rect x="583" y="186" width="138" height="40" fill="#dcfce7" rx="4" />
          <text x="652" y="200" font-size="7.2" fill="#14532d" font-weight="800" text-anchor="middle">IoT Telemetry Dashboards</text>
          <text x="652" y="212" font-size="6.2" fill="#166534" text-anchor="middle">Solar, Cold-Chain &amp; Fleet Alerts</text>
        </svg>
      </div>

      <!-- 3 Presales Takeaways for Tanzeel's Team -->
      <div class="three-col">
        <div class="card">
          <h3>1. Cloud &amp; Database Continuity</h3>
          <p>Position <strong>ZainCloud VPS + Zdrop Backup + Managed Database Replication</strong> as the sovereign disaster-recovery backbone for banks, ministries, and universities operating split teams between Port Sudan and returning Khartoum HQs.</p>
        </div>
        <div class="card">
          <h3>2. Zero-Downtime Fallback</h3>
          <p>Every enterprise proposal combines <strong>IP connectivity (4G APN + Licensed VSAT)</strong> with <strong>non-IP continuity (SMPP SMS + USSD *200# + IVR Short Code)</strong> so operations never halt during fiber cuts or exam shutdowns.</p>
        </div>
        <div class="card">
          <h3>3. Turnkey Solution Presales</h3>
          <p>Zain provides the licensed telecom, cloud, and Bede wallet rails; <strong>Franco Pinto</strong> delivers the last-mile software integration, custom dashboards, and client onboarding — zero extra engineering burden on Zain’s core team.</p>
        </div>
      </div>
    </div>
    ${pageFooter(4)}
  </section>

  <!-- ==================== PAGE 5: 7 UNPUBLISHED CMS PRODUCTS & GULF BENCHMARK ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "03B · PORTFOLIO AUDIT: 7 BUILT UNPUBLISHED ASSETS & GULF BENCHMARK",
      "مراجعة محفظة زين: 7 منتجات جاهزة غير منشورة ومقارنة أسواق الخليج",
      5
    )}
    <div class="page-body">
      <div class="sec-head-strip">
        <h2>7 BUILT PRODUCTS IN ZAIN SUDAN (READY FOR IMMEDIATE PRESALES ACTIVATION)</h2>
        <span>7 منتجات مجهزة داخلياً وجاهزة للتفعيل التجاري الفوري</span>
      </div>

      <p style="font-size:7.3pt;color:#3b234a;">
        Zain Sudan already holds <strong>seven built enterprise products</strong> (including Cisco-based UCaaS, Push-to-Talk, VSaaS, Zdrop backup, EDU-PRO/LMS-PRO, Smart Agriculture Hagool, and Digital Ads/Call Signature) that are not yet published on the public B2B menu [1, 15]. For the <strong>Cloud, Hosting &amp; B2B Presales Team</strong>, activating and bundling these existing assets represents the fastest, zero-CAPEX path to new enterprise revenue:
      </p>

      <table class="exec-table">
        <thead>
          <tr>
            <th style="width:24%">Built Product Name</th>
            <th style="width:36%">Core Capability (EN / AR)</th>
            <th style="width:40%">Immediate Presales Fit &amp; Target Buyers</th>
          </tr>
        </thead>
        <tbody>
          ${builtUnpublishedProducts
            .map(
              (p) => `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td><strong>${p.what.en}</strong><br/><span dir="rtl" style="font-size:6.1pt;color:#6b21a8;">${p.what.ar}</span></td>
              <td><strong>${p.fit.en}</strong></td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>

      <div class="sec-head-strip" style="margin-top:1mm;">
        <h2>REGIONAL BENCHMARK: ZAIN SUDAN vs. ZAIN KSA, ZAIN KUWAIT &amp; ZAIN BAHRAIN</h2>
        <span>المقارنة المعيارية الإقليمية مع شركات مجموعة زين في الخليج</span>
      </div>

      <table class="exec-table">
        <thead>
          <tr>
            <th style="width:24%">Enterprise Capability</th>
            <th style="width:22%">Zain Sudan Public Menu</th>
            <th style="width:18%">Zain KSA [4]</th>
            <th style="width:18%">Zain Kuwait [5]</th>
            <th style="width:18%">Zain Bahrain [6]</th>
          </tr>
        </thead>
        <tbody>
          ${gulfBenchmarks
            .map(
              (b) => `
            <tr>
              <td><strong>${b.capability.en}</strong></td>
              <td style="background:${b.exposed ? "#fef2f2" : "#faf5ff"};"><strong>${b.sudan.en}</strong></td>
              <td>${b.ksa}</td>
              <td>${b.kuwait}</td>
              <td>${b.bahrain}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>

      <div class="card-plum" style="margin-top:auto;">
        <h3>Strategic Takeaway for Cloud &amp; B2B Presales Leadership</h3>
        <p>
          Zain KSA, Zain Kuwait, and Zain Bahrain generate substantial B2B margin from <strong>Cloud/Data Center, Managed Cybersecurity, SD-WAN, UCaaS, and Corporate Payment Collection</strong> [4, 5, 6]. Zain Sudan already possesses the core building blocks (<code>ZainCloud</code>, <code>Zdrop</code>, <code>UCaaS</code>, <code>VSaaS</code>, <code>VTS</code>, <code>SMPP</code>, and <code>Bede Corporate</code>). Publishing these 7 internal assets and packaging them with Franco Pinto’s vertical software layer closes the gap with Gulf sister OpCos and Sudatel [17] immediately.
        </p>
      </div>
    </div>
    ${pageFooter(5)}
  </section>

  <!-- ==================== PAGE 6: 5+1 READY-TO-SELL BUNDLES & BEDE CORPORATE ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "05 · FIVE+ONE READY-TO-SELL ENTERPRISE BUNDLES & BEDE CORPORATE",
      "الحزم الست الجاهزة للبيع وتسليط الضوء على محفظة Bede للشركات",
      6
    )}
    <div class="page-body">
      <div class="sec-head-strip">
        <h2>SIX OUTCOME-BASED BUNDLES BUILT FROM EXISTING ZAIN SUDAN ASSETS</h2>
        <span>6 حزم متكاملة مبنية من أصول زين الحالية</span>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2.8mm;">
        ${topBundles
          .map(
            (bd) => `
          <div class="card" style="border-top:3px solid #7e22ce;padding:2.5mm 3mm;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1mm;">
              <strong style="font-size:8pt;color:#2e0f44;">${bd.number}. ${bd.name.en}</strong>
              <span class="tier-badge tier-2">${bd.citations}</span>
            </div>
            <div style="font-size:6.3pt;color:#6b21a8;font-weight:700;margin-bottom:1mm;">Target: ${bd.target.en}</div>
            <ul class="sec-list compact">
              ${bd.productsInside.map((c) => `<li>${c.en}</li>`).join("")}
            </ul>
            <div style="margin-top:1.2mm;padding-top:1mm;border-top:1px dashed #e2d6ec;font-size:6pt;color:#14532d;">
              <strong>Franco Pinto Layer:</strong> ${bd.francoPintoLayer.en}
            </div>
            <div style="margin-top:0.8mm;font-size:5.9pt;color:#581c87;">
              <strong>Why It Wins Now:</strong> ${bd.whyItWins.en}
            </div>
          </div>
        `
          )
          .join("")}
      </div>

      <!-- Bede Corporate Spotlight -->
      <div class="card-plum" style="margin-top:auto;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5mm;">
          <h3>SPOTLIGHT: BEDE CORPORATE — SUDAN’S LICENSED ENTERPRISE DISBURSEMENT &amp; COLLECTION ENGINE [8, 12]</h3>
          <span style="font-family:'Noto Sans Arabic',sans-serif;font-size:8pt;color:#fbbf24;font-weight:700;" dir="rtl">محفظة Bede للشركات والمؤسسات</span>
        </div>
        <p style="margin-bottom:2mm;">
          Licensed by the Central Bank of Sudan (CBOS) and launched with Visa capabilities [8, 12], <strong>Bede Corporate</strong> is the crown jewel of Zain Sudan’s B2B value proposition—turning every connectivity deal into a recurring financial transaction relationship:
        </p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2.2mm;">
          <div style="background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.18);border-radius:6px;padding:2mm;">
            <strong style="display:block;font-size:6.9pt;color:#fde68a;margin-bottom:0.8mm;">1. Humanitarian Cash (CBT)</strong>
            <span style="display:block;font-size:6pt;color:#f3e8ff;line-height:1.3;">Bulk stipend &amp; cash-for-food payouts to thousands of beneficiaries with instant SMS confirmation and donor audit logs.</span>
          </div>
          <div style="background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.18);border-radius:6px;padding:2mm;">
            <strong style="display:block;font-size:6.9pt;color:#fde68a;margin-bottom:0.8mm;">2. Corporate Payroll</strong>
            <span style="display:block;font-size:6pt;color:#f3e8ff;line-height:1.3;">Salary and field-allowance disbursement for remote teachers, health workers, security guards, and mine/construction crews.</span>
          </div>
          <div style="background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.18);border-radius:6px;padding:2mm;">
            <strong style="display:block;font-size:6.9pt;color:#fde68a;margin-bottom:0.8mm;">3. B2B Merchant Collection</strong>
            <span style="display:block;font-size:6pt;color:#f3e8ff;line-height:1.3;">Cashless invoice collection for FMCG distributors, universities, hospitals, solar PAYG providers, and state utilities.</span>
          </div>
          <div style="background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.18);border-radius:6px;padding:2mm;">
            <strong style="display:block;font-size:6.9pt;color:#fde68a;margin-bottom:0.8mm;">4. Franco Pinto Portal</strong>
            <span style="display:block;font-size:6pt;color:#f3e8ff;line-height:1.3;">Bilingual maker-checker approval workflows, automated reconciliation, and ERP/Core-Banking connectors.</span>
          </div>
        </div>
      </div>
    </div>
    ${pageFooter(6)}
  </section>

  <!-- ==================== PAGES 7 TO 18: 12 FULL-PAGE SECTOR PLAYBOOKS + 60 TARGET CLIENTS ==================== -->
  ${sectorPagesHtml}

  <!-- ==================== PAGE 19: FRANCO PINTO PARTNERSHIP, ROADMAP, RISKS & NEXT STEPS ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "06 · FRANCO PINTO PARTNERSHIP MODEL, 12-MONTH ROADMAP & RISK SAFEGUARDS",
      "نموذج شراكة Franco Pinto وخارطة الطريق وإدارة المخاطر",
      19
    )}
    <div class="page-body">
      <div class="two-col">
        <div class="card">
          <h3>WHAT REMAINS 100% INSIDE ZAIN SUDAN</h3>
          <ul class="sec-list compact">
            ${partnershipDivision.zainStays.map((i) => `<li><strong>${i.title.en}:</strong> ${i.detail.en}</li>`).join("")}
          </ul>
        </div>
        <div class="card" style="border-color:#15803d;background:#f4fbf7;">
          <h3 style="color:#14532d;">WHAT FRANCO PINTO ADDS AS INTEGRATION PARTNER</h3>
          <ul class="sec-list compact">
            ${partnershipDivision.francoPinto.map((i) => `<li><strong>${i.title.en}:</strong> ${i.detail.en}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="sec-head-strip">
        <h2>PHASED EXECUTION ROADMAP (0–90 DAYS · 3–6 MONTHS · 6–12 MONTHS)</h2>
        <span>خارطة الطريق المرحلية للتنفيذ</span>
      </div>

      <div class="three-col">
        ${roadmapPhases
          .map(
            (ph, idx) => `
          <div class="card" style="border-top:3px solid ${idx === 0 ? "#16a34a" : idx === 1 ? "#7e22ce" : "#d41476"};">
            <span class="tier-badge tier-${idx + 1}">${ph.window.en} · ${ph.theme.en}</span>
            <p style="font-size:6.2pt;color:#6b21a8;font-weight:700;margin:1mm 0;">Focus: ${ph.sectors.en}</p>
            <ul class="sec-list compact">
              ${ph.actions.map((m) => `<li>${m.en}</li>`).join("")}
            </ul>
            <div style="margin-top:1mm;font-size:5.9pt;color:#14532d;font-weight:700;">Gate: ${ph.gate.en}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="sec-head-strip">
        <h2>FIVE CRITICAL RISKS &amp; BUILT-IN ARCHITECTURAL SAFEGUARDS</h2>
        <span>المخاطر الرئيسية وضوابط الحماية المدمجة</span>
      </div>

      <table class="exec-table">
        <thead>
          <tr>
            <th style="width:21%">Risk Factor</th>
            <th style="width:37%">Operational Reality in Sudan</th>
            <th style="width:42%">Built-In Technical &amp; Commercial Safeguard</th>
          </tr>
        </thead>
        <tbody>
          ${risksAndSafeguards
            .map(
              (rk) => `
            <tr>
              <td><strong>${rk.risk.en}</strong></td>
              <td>${rk.evidenceText.en}</td>
              <td><strong>${rk.safeguard.en}</strong></td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>

      <div class="two-col" style="margin-top:auto;">
        <div class="card-plum">
          <h3>6 Immediate Steps to First Live Pilot</h3>
          <ol class="sec-list compact" style="color:#f3e8ff;">
            ${immediateNextSteps.map((s) => `<li><strong>${s.title.en}:</strong> ${s.detail.en}</li>`).join("")}
          </ol>
        </div>
        <div class="card">
          <h3>5 Alignment Questions for Zain Leadership</h3>
          <ol class="sec-list compact">
            ${questionsForZain.map((q) => `<li>${q.en}</li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
    ${pageFooter(19)}
  </section>

  <!-- ==================== PAGE 20: EVIDENCE METHODOLOGY & 71 VERIFIED SOURCES ==================== -->
  <section class="pdf-page">
    ${pageHeader(
      "07 · EVIDENCE METHODOLOGY & COMPLETE 71-SOURCE VERIFIED REGISTRY",
      "منهجية توثيق الأدلة وسجل المصادر الـ 71 الكامل",
      20
    )}
    <div class="page-body">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2.5mm;">
        <div class="card" style="padding:2mm 2.5mm;">
          <span class="tier-badge tier-1">[VERIFIED · Public Fact]</span>
          <p style="font-size:6.1pt;margin-top:1mm;">Verified from official Zain Group filings, World Bank, IMF, UNOCHA, IOM, FAO, Central Bank, or TPRA announcements.</p>
        </div>
        <div class="card" style="padding:2mm 2.5mm;">
          <span class="tier-badge tier-2">[REPORTED · Regional]</span>
          <p style="font-size:6.1pt;margin-top:1mm;">Verified from Zain KSA, Zain Kuwait, Zain Bahrain, or reputable regional telecom reporting.</p>
        </div>
        <div class="card" style="padding:2mm 2.5mm;">
          <span class="tier-badge tier-3">[INFERENCE · Estimate]</span>
          <p style="font-size:6.1pt;margin-top:1mm;">Derived transparently from cited figures using explicit multi-criteria scoring weights.</p>
        </div>
        <div class="card" style="padding:2mm 2.5mm;">
          <span class="tier-badge tier-4">[UNKNOWN · Internal]</span>
          <p style="font-size:6.1pt;margin-top:1mm;">Flagged for validation with Zain Sudan’s internal network, billing, and B2B Presales teams.</p>
        </div>
      </div>

      <div class="sec-head-strip">
        <h2>COMPLETE REGISTRY OF 71 CITED PRIMARY SOURCES</h2>
        <span>سجل المراجع والمصادر الموثقة (1 – 71)</span>
      </div>

      <div class="card" style="flex:1;overflow:hidden;padding:2.5mm 3.5mm;">
        <div class="sources-columns">
          ${reportSources
            .map(
              (s) => `
            <div class="src-item">
              <strong>[${s.id}]</strong> ${s.title}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
    ${pageFooter(20)}
  </section>

</body>
</html>`;
}

async function main() {
  const htmlPath = path.join(PUBLIC_DIR, "Zain_Sudan_B2B_Market_Report.html");
  const pdfPath = path.join(PUBLIC_DIR, "Zain_Sudan_B2B_Market_Report.pdf");
  const downloadsPdfPath =
    "C:\\Users\\mcreg\\Downloads\\Zain_Sudan_B2B_Market_Report_CEO_Edition.pdf";
  const rootOnbPdfPath =
    "c:\\Users\\mcreg\\Desktop\\zain-onb\\Zain_Sudan_B2B_Market_Report.pdf";

  const html = buildHtml();
  fs.writeFileSync(htmlPath, html, "utf-8");
  console.log(`Wrote HTML to ${htmlPath} (${(html.length / 1024).toFixed(1)} KB)`);

  const chromeCandidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ];
  const browserExe = chromeCandidates.find((p) => fs.existsSync(p));
  if (!browserExe) {
    throw new Error("No Chrome or Edge executable found for headless PDF generation.");
  }

  const fileUrl = `file:///${htmlPath.replace(/\\/g, "/")}`;
  console.log(`Rendering PDF via ${browserExe}...`);
  execFileSync(
    browserExe,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--print-to-pdf-no-header",
      `--print-to-pdf=${pdfPath}`,
      fileUrl,
    ],
    { stdio: "inherit" }
  );

  const stat = fs.statSync(pdfPath);
  console.log(`Generated CEO PDF: ${pdfPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

  fs.copyFileSync(pdfPath, downloadsPdfPath);
  fs.copyFileSync(pdfPath, rootOnbPdfPath);
  console.log(`Copied to ${downloadsPdfPath} and ${rootOnbPdfPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
