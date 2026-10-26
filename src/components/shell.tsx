"use client";
import { useLocale } from "@/components/locale-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  Boxes,
  Compass,
  FileText,
  ShieldCheck,
  Download,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Progress } from "./ui";

const navItems = [
  {
    href: "/",
    en: "Executive & Market View",
    ar: "الملخص التنفيذي والسوق",
    icon: LayoutDashboard,
  },
  {
    href: "/sectors",
    en: "12 Sectors Playbook",
    ar: "دليل القطاعات الـ 12",
    icon: Compass,
  },
  {
    href: "/bundles",
    en: "Bundles & Portfolio Gaps",
    ar: "الحزم المقترحة وفجوات المحفظة",
    icon: Boxes,
  },
  {
    href: "/roadmap",
    en: "Partnership & Roadmap",
    ar: "نموذج الشراكة وخارطة الطريق",
    icon: Layers,
  },
  {
    href: "/sources",
    en: "Evidence & 71 Sources",
    ar: "الأدلة والمصادر (71 مصدراً)",
    icon: FileText,
  },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const { locale, isAr, toggle } = useLocale();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const active = navItems.find((n) => n.href === path) || navItems[0];
    document.title = isAr
      ? `${active.ar} | زين أعمال السودان — فرصة سوق الشركات B2B`
      : `${active.en} | Zain Sudan Business — B2B Market Opportunity`;
  }, [isAr, path]);

  const activeNav = navItems.find((n) => n.href === path) || navItems[0];

  return (
    <div
      className="app-shell"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a href="#main" className="skip-link">
        {isAr ? "انتقل إلى المحتوى الرئيسي" : "Skip to content"}
      </a>

      <aside
        id="workspace-navigation"
        className={`sidebar ${open ? "is-open" : ""}`}
      >
        <Link
          href="/"
          className="brand"
          aria-label={isAr ? "زين السودان الرئيسية" : "Zain Sudan home"}
        >
          <img src="/brand/zain-white.png" alt="Zain" width="104" height="48" />
          <span>{isAr ? "السودان" : "Sudan"}</span>
        </Link>

        <div className="sidebar-product">
          {isAr ? "زين أعمال السودان" : "Zain Sudan Business"}
          <span>
            {isAr ? "هنا تتواصل أعمال السودان." : "Where Sudan's business connects."}
          </span>
        </div>

        <div className="customer-identity-region b2b-identity-region">
          <div className="b2b-badge-pill">
            <Sparkles size={12} />
            <span>
              {isAr ? "مُعدّ خصيصاً لـ · أكتوبر 2026" : "PREPARED FOR · OCT 2026"}
            </span>
          </div>
          <strong>
            {isAr
              ? "تنزيل الصادق مهدي حسين"
              : "Tanzeel Elsadig Mahdi Hussein"}
          </strong>
          <span>
            {isAr
              ? "قائد فريق السحابة والاستضافة / قائد فريق ما قبل البيع لحلول الأعمال (B2B)"
              : "Cloud & Hosting Team Leader / B2B Business Solutions Presales Team Leader"}
          </span>
        </div>

        <div className="nav-label">
          {isAr ? "أقسام البوابة التفاعلية" : "Interactive Portal"}
        </div>

        <nav aria-label={isAr ? "القائمة الرئيسية" : "Main navigation"}>
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={path === n.href ? "nav-item active" : "nav-item"}
              aria-current={path === n.href ? "page" : undefined}
            >
              <n.icon size={18} />
              {isAr ? n.ar : n.en}
              {path === n.href && <span className="active-dot" />}
            </Link>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="side-progress">
            <div>
              <span>
                {isAr ? "نافذة التحرك الفوري" : "Immediate action window"}
              </span>
              <strong>{isAr ? "90 يوماً" : "90 Days"}</strong>
            </div>
            <Progress value={100} label="90 day readiness" />
            <small>
              {isAr
                ? "الفئة 1: المنظمات (قبل مهلة Starlink في نوفمبر) والمصارف"
                : "Tier 1: NGOs/UN (Nov Starlink deadline) & Banking"}
            </small>
            <Link href="/sectors" onClick={() => setOpen(false)}>
              {isAr ? "استعرض القطاعات الـ 12" : "Explore all 12 sectors"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="sidebar-trust">
            <ShieldCheck size={18} />
            <span>
              {isAr ? "مبني على 71 مصدراً عاماً موثقاً." : "Built on 71 verified public sources."}
              <br />
              {isAr ? "بدون تقديرات عشوائية." : "Zero unverified estimates."}
            </span>
          </div>

          <div className="sidebar-programme">
            <small>{isAr ? "إعداد وتطوير" : "Prepared by"}</small>
            <strong>Franco Pinto</strong>
            <span>
              {isAr
                ? "سامي سليمان · مدير العمليات والتقنية"
                : "Sami Suliman · Business Operations & Tech"}
            </span>
          </div>
        </div>
      </aside>

      <div className="workspace-main">
        <header className="topbar">
          <div className="breadcrumb">
            <button
              className="icon-button mobile-menu"
              ref={menuButton}
              aria-expanded={open}
              aria-controls="workspace-navigation"
              aria-label={isAr ? "القائمة" : "Menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <span>{isAr ? "زين أعمال السودان" : "Zain Sudan Business"}</span>
            <span className="slash">/</span>
            <strong>{isAr ? activeNav.ar : activeNav.en}</strong>
          </div>

          <div className="topbar-actions">
            <a
              href="/Zain_Sudan_B2B_Market_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-top-link"
            >
              <Download size={13} />
              <span>{isAr ? "تقرير PDF (34 صفحة)" : "Full PDF (34p)"}</span>
            </a>

            <button
              className="language-toggle"
              onClick={toggle}
              aria-label={
                locale === "en" ? "Switch to Arabic" : "Switch to English"
              }
              lang={locale === "en" ? "ar" : "en"}
            >
              {locale === "en" ? "العربية" : "English"}
            </button>

            <span className="demo-indicator">
              <span />
              {isAr ? "أكتوبر 2026 · سري" : "Oct 2026 · Confidential"}
            </span>

            <div
              className="avatar"
              title="Tanzeel Elsadig Mahdi Hussein"
              aria-hidden="true"
            >
              TH
            </div>
          </div>
        </header>

        <main id="main" tabIndex={-1}>
          {children}
        </main>

        <footer className="app-footer">
          <span>
            {isAr
              ? "© أكتوبر 2026 · أُعدّ لـ تنزيل الصادق مهدي حسين (زين أعمال السودان) بواسطة Franco Pinto (سامي سليمان)"
              : "© October 2026 · Prepared for Tanzeel Elsadig Mahdi Hussein (Zain Sudan Business) by Franco Pinto (Sami Suliman)"}
          </span>
          <span>
            <Link href="/sources">
              {isAr ? "منهجية الأدلة والمصادر الـ 71" : "Evidence markers & 71 sources"}
            </Link>
            {" · "}
            <a
              href="/Zain_Sudan_B2B_Market_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isAr ? "تنزيل التقرير الأصلي (PDF)" : "Download Original PDF"}
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
