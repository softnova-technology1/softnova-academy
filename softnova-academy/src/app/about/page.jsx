"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import styles from "./about.module.css";

import AboutHero from "../../components/AboutHero";
import AboutCards from "../../components/AboutCards";
import Stats from "../../components/Stats";
import Team from "../../components/Team";
import LifeAtSoftnova from "../../components/LifeAtSoftnova";
import EnrollModal from "../../components/EnrollModal/EnrollModal";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.aboutPage}>
      {/* 1. Hero Section */}
      <AboutHero />

      {/* Background Blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>

      {/* 2. About Softnova */}
      <section className={styles.section}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutSplit}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.aboutText}
            >
              <h2>Transforming Tech Education</h2>
              <p>
                At Softnova Academy, we believe that traditional education often falls short in preparing students for the fast-paced tech industry. That's why we've built a curriculum that focuses on practical, real-world skills.
              </p>
              <p>
                Our mission is to empower the next generation of software engineers with the tools, knowledge, and mentorship they need to build innovative products and shape the future of technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.aboutImageWrapper}
            >
              <video
                src="/Images/gallery/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.aboutVideo}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <AboutCards />

      {/* 4. Stats Section */}
      <Stats />

      {/* 5. Team Section */}
      <Team />

      {/* 6. Vision & Mission */}
      <section className={styles.section}>
        <div className={styles.visionGrid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.glassCard}
          >
            <div className={styles.iconWrapper} style={{ marginBottom: "1.5rem" }}>
              <Lightbulb size={32} />
            </div>
            <h2>Our Vision</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              To be the globally recognized hub for tech talent, fostering a community where innovation meets execution, and every learner transforms into a creator.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.glassCard}
          >
            <div className={styles.iconWrapper} style={{ marginBottom: "1.5rem" }}>
              <Target size={32} />
            </div>
            <h2>Our Mission</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
              To provide industry-aligned, hands-on training that equips students with the exact skills companies are looking for, bridging the talent gap in the tech ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. Life at Softnova */}
      <LifeAtSoftnova />

      {/* 8. CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.ctaFooter}
      >
        <div className={styles.glow} />
        <h2 style={{ position: "relative", zIndex: 1 }}>Start Your Career Today</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2.5rem", position: "relative", zIndex: 1 }}>
          Join the ranks of top-tier developers. The future is waiting for you.
        </p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.ctaButton}
          style={{ 
            background: "white", 
            color: "var(--primary-orange)", 
            zIndex: 1,
            display: "inline-block",
            textDecoration: "none",
            textAlign: "center"
          }}
        >
          Enroll Now
        </motion.button>
      </motion.section>

      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default AboutPage;
