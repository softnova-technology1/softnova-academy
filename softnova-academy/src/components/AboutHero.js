"use client";

import { motion } from "framer-motion";
import styles from "../app/about/about.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.heroHeading}
      >
        Empowering Future Developers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.heroSubtext}
      >
        Softnova Academy is a premier IT training institute dedicated to bridging the gap between academic learning and industry demands. We forge the tech leaders of tomorrow.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.ctaButton}
      >
        Explore Courses
      </motion.button>
    </section>
  );
}
