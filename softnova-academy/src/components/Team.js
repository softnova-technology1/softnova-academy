"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "./Icons";
import Image from "next/image";
import styles from "../app/about/about.module.css";

const teamMembers = [
  {
    name: "Mahetha",
    role: "HR",
    image: "/Images/gallery/Akka.png",
  },
  {
    name: "Dharshika",
    role: "TL",
    image: "/Images/gallery/New.jpg",
  },
  {
    name: "Adhi",
    role: "Developer",
    image: "/Images/gallery/dev.jpg",
  },
];

export default function Team() {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
      </motion.div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.teamCard}
            whileHover="hover"
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: "25px", overflow: "hidden", background: "#f0f0f0" }}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                className={styles.teamImage}
              />
              <motion.div 
                variants={{
                  hover: { opacity: 1, y: 0 }
                }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(230, 81, 0, 0.8)",
                  backdropFilter: "blur(4px)",
                  color: "white",
                  padding: "1rem",
                  textAlign: "center",
                  pointerEvents: "none"
                }}
              >
                <span style={{ fontWeight: "800", fontSize: "1.5rem", letterSpacing: "1px", textTransform: "uppercase" }}>{member.role}</span>
              </motion.div>
            </div>
            <div className={styles.teamInfo}>
              <h3 style={{ margin: "1rem 0 0.5rem" }}>{member.name}</h3>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
                <motion.a whileHover={{ y: -3, color: "var(--primary)" }} style={{ color: "var(--text-muted)", cursor: "pointer" }}><Linkedin size={18} /></motion.a>
                <motion.a whileHover={{ y: -3, color: "var(--primary)" }} style={{ color: "var(--text-muted)", cursor: "pointer" }}><Twitter size={18} /></motion.a>
                <motion.a whileHover={{ y: -3, color: "var(--primary)" }} style={{ color: "var(--text-muted)", cursor: "pointer" }}><Github size={18} /></motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
