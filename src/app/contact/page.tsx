import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact LYDesign",
};

export default function ContactPage() {
  return (
    <div className={`${styles.page} pageReveal`}>
      <div className={styles.body}>
        <div className={styles.fields}>
          <div className={styles.field}>
            <span className={styles.label}>Email</span>
            <p className={styles.value}>
              <a href="mailto:leo@lydesign.co.nz">leo@lydesign.co.nz</a>
            </p>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Phone</span>
            <p className={styles.value}>
              <a href="tel:021573123">021 573 123</a>
            </p>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Address</span>
            <p className={styles.value}>
              Unit H, Building 2,<br />
              5 Ceres Court,<br />
              Rosedale, Auckland 0632
            </p>
          </div>
        </div>
      </div>

      <iframe
        className={styles.map}
        src="https://maps.google.com/maps?q=5+Ceres+Court,+Rosedale,+Auckland+0632&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="LYDesign location"
      />
    </div>
  );
}
