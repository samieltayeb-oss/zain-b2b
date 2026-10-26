"use client";
import { useLocale } from "@/components/locale-provider";
import { motion, useReducedMotion } from "framer-motion";
import {
  Radio,
  CreditCard,
  MessageSquareText,
  ShieldCheck,
  ArrowUpRight,
  Layers3,
  Activity,
} from "lucide-react";

export function B2BHeroPreview() {
  const { isAr } = useLocale();
  const reduce = useReducedMotion();

  return (
    <figure className="observability-preview">
      <div className="software-dashboard" dir="ltr">
        <div className="software-top">
          <span>
            <Radio size={12} color="#ed088d" />
            Zain Sudan Business · B2B Opportunity Radar
          </span>
          <strong>OCTOBER 2026 · VERIFIED</strong>
        </div>
        <div className="software-body">
          <div className="software-rail" aria-hidden="true">
            <Layers3 size={13} />
            <Activity size={13} />
            <CreditCard size={13} />
            <MessageSquareText size={13} />
            <ShieldCheck size={13} />
          </div>
          <div className="software-content">
            <div className="software-title">
              <div>
                <strong>
                  {isAr
                    ? "Zain Sudan Q1 2026 & Priority Sector Readiness"
                    : "Zain Sudan Q1 2026 & Priority Sector Readiness"}
                </strong>
                <span>
                  SAF-held East, North, Centre & Khartoum · 2,153 active sites (&gt;90% in safe areas)
                </span>
              </div>
              <span>12 SECTORS RANKED</span>
            </div>

            <div className="software-stats">
              <div>
                <span>CUSTOMERS (Q1 2026)</span>
                <strong>12.4M</strong>
                <small>+13% YoY · Market leader [7]</small>
              </div>
              <div>
                <span>Q1 2026 REVENUE</span>
                <strong>$157M</strong>
                <small>+34% YoY · 58% EBITDA [7]</small>
              </div>
              <div>
                <span>STARLINK DEADLINE</span>
                <strong>Nov 26</strong>
                <small>NGO grace period ends [36]</small>
              </div>
              <div>
                <span>PAYMENT SWITCH</span>
                <strong>Restored</strong>
                <small>Aug 2026 · 8 wallets [52,12]</small>
              </div>
            </div>

            <div className="software-charts">
              <section>
                <div className="software-panel-title">
                  <span>Strategy Weighted Score (Top 6 Sectors)</span>
                  <strong>0–5 scale [Sec 5]</strong>
                </div>
                <svg viewBox="0 0 280 86" role="img" aria-label="Top sector scores">
                  {[
                    { name: "1. NGOs & UN", score: 4.3, w: 172, color: "#ed088d" },
                    { name: "2. Banking", score: 4.3, w: 172, color: "#ed088d" },
                    { name: "3. Logistics", score: 3.3, w: 132, color: "#9c65b1" },
                    { name: "4. Retail/SME", score: 3.7, w: 148, color: "#9c65b1" },
                    { name: "5. Government", score: 4.0, w: 160, color: "#9c65b1" },
                  ].map((row, idx) => {
                    const y = 6 + idx * 16;
                    return (
                      <g key={row.name} transform={`translate(0, ${y})`}>
                        <text
                          x="0"
                          y="9"
                          fill="#d8c9e2"
                          fontSize="7.5"
                          fontFamily="Manrope, sans-serif"
                        >
                          {row.name}
                        </text>
                        <rect
                          x="68"
                          y="2"
                          width="178"
                          height="8"
                          rx="3"
                          fill="#ffffff0d"
                        />
                        <motion.rect
                          x="68"
                          y="2"
                          height="8"
                          rx="3"
                          fill={row.color}
                          initial={{ width: reduce ? row.w : 0 }}
                          animate={{ width: row.w }}
                          transition={{ duration: 0.65, delay: 0.1 + idx * 0.08 }}
                        />
                        <text
                          x="252"
                          y="9"
                          fill="#f2e9f6"
                          fontSize="7.5"
                          fontWeight="600"
                          fontFamily="Manrope, sans-serif"
                        >
                          {row.score.toFixed(2)}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </section>

              <section>
                <div className="software-panel-title">
                  <span>Recent Reference Wins</span>
                  <strong>VERIFIED</strong>
                </div>
                <div className="oracle-demo">
                  <span>
                    <span>MoF Eisali SMS</span>
                    <strong>4 Oct 2026 [13]</strong>
                  </span>
                  <span>
                    <span>Customs IoT (Jointech)</span>
                    <strong>28 Jan 2026 [14]</strong>
                  </span>
                  <span>
                    <span>Bede Corporate + Visa</span>
                    <strong>2025/FIMP/4 [8,12]</strong>
                  </span>
                  <span>
                    <span>Port Sudan Core Switch</span>
                    <strong>24h restore [16]</strong>
                  </span>
                </div>
              </section>
            </div>

            <div className="software-lower">
              <section>
                <div className="software-panel-title">
                  <span>Lead 90-Day Bundles</span>
                  <strong>Ready to sell</strong>
                </div>
                <div className="software-service">
                  <span>Connected Aid (NGOs/UN)</span>
                  <span>Bede + SMS/IVR + APN</span>
                  <span className="healthy">Tier 1 · Now</span>
                </div>
                <div className="software-service">
                  <span>Transaction Messaging (Banks)</span>
                  <span>SMPP OTP + Dual APN</span>
                  <span className="healthy">Tier 1 · Now</span>
                </div>
              </section>
              <section>
                <div className="software-panel-title">
                  <span>Resilience Architecture</span>
                  <strong>Offline-first</strong>
                </div>
                <p>
                  <span>SMS + USSD Fallback</span> · Store-and-forward VTS · Dual-path APN
                </p>
                <code className="trace-demo">
                  Zain Network + Licences × Franco Pinto Integration Layer
                </code>
              </section>
            </div>
          </div>
        </div>
      </div>
      <figcaption>
        {isAr
          ? "ملخص تنفيذي لمؤشرات زين السودان للربع الأول 2026، وترتيب القطاعات الـ 12، والعقود المرجعية الموثقة."
          : "Live executive snapshot of Zain Sudan Q1 2026 performance, sector priority scoring, and verified reference wins."}
      </figcaption>
    </figure>
  );
}
