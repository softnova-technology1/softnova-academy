import BenefitsSection from "./sections/BenefitsSection/BenefitsSection";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Home</h1>
          <p className={styles.subtitle}>
            Learn with industry-relevant curriculum, expert mentors, and hands-on projects.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <BenefitsSection />
      </main>
    </div>
  );
}

