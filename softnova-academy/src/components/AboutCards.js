"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, Users } from "lucide-react";
import styles from "../app/about/about.module.css";

const features = [
  {
    icon: <Users size={32} />,
    title: "Industry Experts",
    desc: "Learn directly from professionals who have built products for top-tier tech companies.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Real-Time Projects",
    desc: "Gain hands-on experience by building production-ready applications.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Placement Support",
    desc: "Dedicated placement cell to help you secure your dream job in tech.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Internship Opportunity",
    desc: "Guaranteed internship opportunities for top-performing students.",
  },
];

export default function AboutCards() {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          Why Choose Us
        </h2>
      </motion.div>

      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${styles.glassCard} ${styles.featureCard}`}
            whileHover={{ y: -10 }}
          >
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>{feature.title}</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
