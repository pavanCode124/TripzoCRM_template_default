import type { PriceSummary, ServiceKey, TripDetails } from "./types";
import { InfoIcon, resolveServiceIcon } from "./icons";
import styles from "./TripOverview.module.css";
import shell from "./QuotationTemplate.module.css";

function Field({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <p className={styles.fieldLabel}>{label.toUpperCase()}</p>
      <p className={styles.fieldValue}>{value}</p>
    </div>
  );
}

export function TripOverview({
  trip,
  price,
  servicesInclude,
}: {
  trip: TripDetails;
  price: PriceSummary;
  servicesInclude: ServiceKey[];
}) {
  return (
    <section className={shell.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.detailsHead}>
            <InfoIcon width={15} height={15} />
            <h2>TRIP DETAILS</h2>
          </div>
          <div className={styles.fields}>
            <Field label="Name" value={trip.customerName} />
            <Field label="Destination" value={trip.destination} />
            <Field label="Duration" value={trip.duration} />
            <Field label="Travel Date" value={trip.travelDate} />
            <Field label="Pax" value={trip.pax} />
            <Field label="Rooms" value={trip.rooms} />
            <Field label="Prepared By" value={trip.preparedBy} />
          </div>
        </div>

        <div className={styles.priceCard}>
          <h3>Total Package Price</h3>
          <div className={styles.priceRow}>
            <span className={styles.priceRowLabel}>
              {price.perPersonLabel}
            </span>
            <span className={styles.priceRowValue}>
              {price.perPersonAmount}
            </span>
          </div>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>{price.totalLabel}</span>
            <span className={styles.totalValue}>{price.totalAmount}</span>
          </div>
        </div>
      </div>

      <hr className={shell.divider} style={{ margin: "20px 0" }} />

      <div>
        <p className={styles.servicesLabel}>SERVICES INCLUDE</p>
        <div className={styles.servicesRow}>
          {servicesInclude.map((service) => {
            const Icon = resolveServiceIcon(service);
            return (
              <div key={service} className={styles.serviceItem}>
                <span className={styles.serviceIcon}>
                  <Icon width={24} height={24} />
                </span>
                <span className={styles.serviceName}>{service}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
