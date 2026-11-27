import type { Locale } from "../../i18n/LocaleContext";

function Arrow(): JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 20" className="mx-auto h-5 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v15m-4-4 4 4 4-4" />
    </svg>
  );
}

function Node({ title, detail }: { title: string; detail: string }): JSX.Element {
  return (
    <div className="min-w-0 rounded-lg border border-(--line) bg-(--surface) p-3 wrap-anywhere">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="mt-1 leading-5 text-slate-700">{detail}</p>
    </div>
  );
}

export function BoxMatchSecurityArchitecture({ locale }: { locale: Locale }): JSX.Element {
  const zh = locale === "zh";
  const t = (en: string, tw: string) => zh ? tw : en;
  const enforcement = [
    [t("Existing access controls", "既有存取控制"), t("CORS, request limits, verified Firebase ID tokens and edit capabilities", "CORS、請求限制、Firebase ID Token 驗證與編輯權杖")],
    [t("Business integrity", "業務一致性"), t("Server-side validation, transactions and idempotency", "後端驗證、交易與冪等")],
    [t("Business Firestore", "業務 Firestore"), t("Public catalog, owner-scoped reservations and private metadata", "公開目錄、擁有者限定預約與私人中繼資料")]
  ];
  const observation = [
    [t("Request intelligence", "請求情資"), t("Trusted source resolution, privacy-conscious correlation and client/risk signals", "可信來源解析、兼顧隱私的關聯及用戶端／風險訊號")],
    [t("Passive Security Probe Intelligence", "被動式安全探測情資"), t("Categorize suspicious path patterns and actual response outcomes; bounded source correlation", "分類可疑路徑模式及實際回應結果，建立有界限的來源關聯")],
    [t("Daily aggregation", "每日彙總"), t("Bounded memory and duplicate-resistant aggregate persistence", "有界限的記憶體與防重複彙總寫入")],
    [t("Protected dashboard", "受保護儀表板"), t("Separate Firebase administrator session, verified custom claim, bounded query and CSV", "獨立 Firebase 管理員工作階段、驗證自訂權限、有界限查詢與 CSV")]
  ];
  return (
    <section className="space-y-2">
      <h3 id="boxmatch-security-heading" className="text-sm font-semibold text-slate-900">{t("Integrated security architecture", "整體資安架構")}</h3>
      <figure aria-labelledby="boxmatch-security-heading" aria-describedby="boxmatch-security-caption" className="panel-soft space-y-2 p-3 text-sm sm:p-4">
        <Node title={t("Public entry points", "公開入口")} detail={t("Flutter clients and HTTP requests / crawlers; administrator uses a separate sign-in", "Flutter 用戶端與 HTTP 請求／爬蟲；管理員採獨立登入")} />
        <Arrow />
        <Node title="Express / Render" detail={t("Request lifecycle and normal response handling", "請求生命週期與正常回應處理")} />
        <svg aria-hidden="true" className="hidden h-7 w-full text-slate-500 sm:block" viewBox="0 0 100 28" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M50 0v12H25v14m25-14h25v14" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="min-w-0 rounded-lg border border-(--line) p-2">
            <p className="mb-2 font-semibold text-slate-900">{t("Security enforcement", "安全防護")}</p>
            <ol role="list" className="space-y-1">
              {enforcement.map(([title, detail], index) => (
                <li key={title}>{index > 0 && <Arrow />}<Node title={title} detail={detail} /></li>
              ))}
            </ol>
          </div>
          <div className="min-w-0 rounded-lg border border-(--line) p-2">
            <p className="mb-2 font-semibold text-(--brand)">{t("Passive observation", "被動觀測")}</p>
            <ol role="list" className="space-y-1">
              {observation.map(([title, detail], index) => (
                <li key={title}>{index > 0 && <Arrow />}<Node title={title} detail={detail} /></li>
              ))}
            </ol>
          </div>
        </div>
        <Node title={t("Separate direct-read boundary", "獨立直接讀取邊界")} detail={t("Firebase Auth → Firestore Rules → public catalog or opt-in owner-only reservations; direct reads bypass Express observation.", "Firebase Auth → Firestore Rules → 公開目錄或可選擁有者限定預約；直接讀取不經 Express 觀測。")} />
        <figcaption id="boxmatch-security-caption" className="leading-6 text-slate-600">
          {t("Source architecture, not live traffic evidence. Probe collection is optional and observation-only: no decoys, active blocking or raw identifiers in probe aggregates. Only requests reaching Express are observable.", "原始碼架構，並非正式流量證據。探測收集為可選且僅供觀測：不建立誘餌、不主動封鎖、不在探測聚合保存原始識別資料。僅觀測到達 Express 的請求。")}
        </figcaption>
        <p className="border-t border-(--line) pt-3 leading-6 text-slate-700">{t("Automated backend, Flutter, authorization-rule and browser checks support reliable delivery.", "透過後端、Flutter、授權規則與瀏覽器自動化驗證，支援可靠交付。")}</p>
      </figure>
    </section>
  );
}
