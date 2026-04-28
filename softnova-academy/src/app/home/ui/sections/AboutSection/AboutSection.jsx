"use client";
import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div className={styles.liquidWrapper}>
        <div className={styles.liquidBlob1}></div>
        <div className={styles.liquidBlob2}></div>
        <div className={styles.liquidBlob3}></div>
      </div>
      
      <div className={styles.glassCard}>
        <h2 className={styles.heading} id="about-title">About Our Softnova Technology Pvt.,</h2>
        <p className={styles.paragraph}>
          At SoftNova, we recognize that every business is unique, which is why we offer tailored digital solutions designed to make your business stand out. We create personalized strategies to drive your success, from custom website design to effective lead generation techniques. Our approach is rooted in a deep understanding of the industries we serve, allowing us to combine technical expertise with creative insights to deliver high-performing websites, e-commerce platforms, and comprehensive digital marketing services. With proven expertise across diverse sectors, our team ensures that every solution is aligned with your business goals, providing seamless integration, enhanced user experiences, and measurable outcomes. Our client-centric approach prioritizes your objectives, and we work closely with you to deliver results-driven, scalable solutions.
        </p>
        <button className={styles.button} suppressHydrationWarning>View To Page</button>
      </div>
    </section>
  );
}
