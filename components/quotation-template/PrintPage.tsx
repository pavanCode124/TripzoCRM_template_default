import type { ReactNode } from "react";
import type { AgencyInfo } from "./types";
import { PageFooter } from "./PageFooter";
import styles from "./PrintPage.module.css";

/**
 * One page of the quotation. 210mm wide always, but — like the reference
 * PDF, whose eleven pages are 397pt, 403pt, 439pt, 510pt, 607pt, 774pt,
 * 785pt, 884pt tall — only as tall as the content it holds, with a 140mm
 * floor. Nothing is stretched to A4 and nothing is clipped, so the footer
 * sits directly under the content instead of being stranded at the bottom
 * of a half-empty sheet.
 *
 * <PrintPageSizer> measures each of these elements and writes the matching
 * `@page { size: 210mm <h>mm }` rule, which is what carries the variable
 * height through to the printed/saved PDF.
 *
 * `hero` renders full-bleed above the padded body (only the cover page uses
 * it) — everything else sits inside the page's normal margins.
 */
export function PrintPage({
  children,
  hero,
  page,
  totalPages,
  agency,
  isLast = false,
  fill = false,
}: {
  children: ReactNode;
  hero?: ReactNode;
  page: number;
  totalPages: number;
  agency: AgencyInfo;
  isLast?: boolean;
  /** Keep a full A4 sheet instead of shrinking to the content (thank-you page). */
  fill?: boolean;
}) {
  return (
    <div
      data-qt-page={page}
      className={[
        styles.page,
        fill ? styles.pageFill : "",
        isLast ? styles.pageLast : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hero}
      <div className={`${styles.body} ${hero ? styles.bodyUnderHero : ""}`}>
        <div className={styles.content}>{children}</div>
        <PageFooter agency={agency} page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
