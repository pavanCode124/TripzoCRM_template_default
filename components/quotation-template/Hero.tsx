import type { AgencyInfo } from "./types";
import { CompassIcon, MapPinIcon } from "./icons";
import styles from "./Hero.module.css";

export function Hero({
  agency,
  quotationNumber,
  heroImageUrl,
  destinationTag,
  title,
  subtitle,
}: {
  agency: AgencyInfo;
  quotationNumber: string;
  heroImageUrl: string;
  destinationTag: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className={styles.hero}>
      <img className={styles.image} src={heroImageUrl} alt={title} />
      <div className={styles.gradient} />

      <div className={styles.topBar}>
        <div className={styles.logo}>
          {agency.logoUrl ? (
            <img
              src={agency.logoUrl}
              alt={agency.name}
              style={{ height: 46, width: "auto" }}
            />
          ) : (
            <>
              <CompassIcon
                width={26}
                height={26}
                style={{ color: "var(--qt-brand)" }}
              />
              <span className={styles.logoText}>
                {agency.name.toUpperCase().replace(/\s+/g, "\n")}
              </span>
            </>
          )}
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeText}>
            QUOTATION #{quotationNumber}
          </span>
        </div>
      </div>

      <div className={styles.caption}>
        <p className={styles.tag}>
          <MapPinIcon width={14} height={14} />
          {destinationTag}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
