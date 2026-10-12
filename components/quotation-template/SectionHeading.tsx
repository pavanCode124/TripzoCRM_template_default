import type { ComponentType, SVGProps } from "react";
import styles from "./SectionHeading.module.css";

export function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <span className={styles.iconBox}>
          <Icon width={20} height={20} />
        </span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.rule} />
    </div>
  );
}
