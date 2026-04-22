import styles from "./BenefitsSection.module.css";

const BENEFITS = [
  {
    number: "01",
    title: "Flexible Learning Schedule",
    description:
      "Learn at your own pace, without the pressure of fixed class timings. Access course materials anytime—at home, at work, or on the go.",
  },
  {
    number: "02",
    title: "Expert Instructors",
    description:
      "Get insights from instructors who are seasoned industry professionals. Benefit from real-world skills, practical examples, and project-based guidance.",
  },
  {
    number: "03",
    title: "Diverse Course Offerings",
    description:
      "Choose from a broad range of courses—from design to development to business and networking—and stay ahead with the latest tools and trends.",
  },
  {
    number: "04",
    title: "Updated Curriculum",
    description:
      "Stay ahead with a syllabus that evolves with industry practices. Build in-demand skills with hands-on training aligned with global standards.",
  },
  {
    number: "05",
    title: "Practical Projects and Assignments",
    description:
      "Put theory into action with real-world projects that build your portfolio and confidence by solving realistic challenges.",
  },
  {
    number: "06",
    title: "Interactive Learning Environment",
    description:
      "Engage in discussions, group activities, and live support. Receive continuous feedback to track your progress and improve effectively.",
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.header}>
        <h2 className={styles.heading} id="benefits-title">
          Benefits
        </h2>
        <p className={styles.lead}>
          Our programs offer an up-to-date, industry-relevant curriculum with hands-on training
          through real-world projects. Learn from experienced professionals with the flexibility
          to study anytime, anywhere.
        </p>
      </div>

      <div className={styles.grid}>
        {BENEFITS.map((b) => (
          <article className={styles.card} key={b.number}>
            <div className={styles.cardTop}>
              <div className={styles.cardTitleWrap}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
              </div>
              <div className={styles.number} aria-hidden="true">
                {b.number}
              </div>
            </div>

            <p className={styles.cardDesc}>{b.description}</p>

            <div className={styles.cardFooter}>
              <span className={styles.accentDot} aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

