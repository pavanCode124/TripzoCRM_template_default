import type { ItineraryDay } from "./types";
import { BusIcon, CheckCircleIcon, MapPinIcon, UtensilsIcon } from "./icons";
import { Rich } from "./Rich";
import styles from "./Itinerary.module.css";
import shell from "./QuotationTemplate.module.css";

/** One day's card — each one is rendered on its own <PrintPage/> by QuotationTemplate. */
export function DayCard({ day }: { day: ItineraryDay }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.dayBadge}>
          <span className={styles.dayBadgeLabel}>DAY</span>
          <span className={styles.dayBadgeNumber}>
            {String(day.day).padStart(2, "0")}
          </span>
        </div>
        <div>
          <h3 className={styles.cardTitle}>{day.title}</h3>
          {(day.location || day.date) && (
            <p className={styles.cardMeta}>
              {day.location && (
                <>
                  <MapPinIcon width={11} height={11} />
                  {day.location}
                </>
              )}
              {day.location && day.date && <span className={styles.dot}>•</span>}
              {day.date}
            </p>
          )}
        </div>
      </div>

      <div className={day.imageUrl ? styles.cardBody : styles.cardBodyNoImage}>
        {day.imageUrl && (
          <div className={styles.imageWrap}>
            <img className={styles.image} src={day.imageUrl} alt={day.title} />
          </div>
        )}

        <div>
          <h4 className={styles.activityTitle}>
            <CheckCircleIcon width={17} height={17} />
            {day.title}
          </h4>

          <ul className={styles.bullets}>
            {day.bullets.map((b, i) => (
              <li key={i} className={styles.bulletItem}>
                <span className={styles.bulletDot} />
                <span>
                  <Rich text={b} />
                </span>
              </li>
            ))}
          </ul>

          {day.note && (
            <div className={styles.note}>
              <p className={styles.noteHeading}>{day.note.heading}</p>
              <ul className={styles.noteLines}>
                {day.note.lines.map((line, i) => (
                  <li key={i}>
                    <Rich text={line} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {day.italicNote && (
            <p className={styles.italicNote}>{day.italicNote}</p>
          )}

          {day.transferTag && (
            <div className={styles.transferTag}>
              <span className={styles.pill}>
                <BusIcon width={12} height={12} />
                {day.transferTag}
              </span>
            </div>
          )}

          {day.meals.length > 0 && (
            <>
              <hr className={shell.divider} style={{ margin: "14px 0" }} />
              <div className={styles.mealsRow}>
                <UtensilsIcon width={13} height={13} />
                Meals:
                {day.meals.map((meal) => (
                  <span key={meal} className={styles.mealTag}>
                    {meal}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
