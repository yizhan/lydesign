import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={`${styles.backgroundLayer} ${styles.frameOne}`} />
      <div className={`${styles.backgroundLayer} ${styles.frameTwo}`} />
      <div className={`${styles.backgroundLayer} ${styles.frameThree}`} />
      {/* <div className={styles.overlay} /> */}

      {/* <div className={`container ${styles.content} pageReveal`}>
        <p className={styles.kicker}>Residential Exterior Studio</p>
        <h1>Composed Homes Framed by Light, Material, and Landscape.</h1>
        <p className={styles.lead}>
          LYDesign shapes residential exteriors that feel calm and deliberate,
          balancing architectural rigor with warm everyday living.
        </p>
      </div> */}
    </section>
  );
}
