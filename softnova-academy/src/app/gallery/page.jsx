"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Layers, GraduationCap, PartyPopper, Briefcase, LayoutGrid, X } from "lucide-react";
import styles from "./gallery.module.css";

const categories = [
  { id: "all", label: "All", icon: <Layers size={20} /> },
  { id: "skill", label: "Skill Program", icon: <GraduationCap size={20} /> },
  { id: "celebration", label: "Celebration", icon: <PartyPopper size={20} /> },
  { id: "recruitment", label: "Recruitment", icon: <Briefcase size={20} /> },
];

const galleryData = [
  // Institute / Skill Development
  { id: 1, title: "Skill Development 1", category: "skill", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img1.jpg", type: "tall" },
  { id: 2, title: "Skill Development 2", category: "skill", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img2.jpg", type: "short" },
  { id: 3, title: "Skill Development 3", category: "skill", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img5.jpg", type: "short" },
  { id: 4, title: "Skill Development 4", category: "skill", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img6.jpg", type: "tall" },
  { id: 5, title: "Skill Development 5", category: "skill", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img7.jpg", type: "tall" },

  // Celebration
  { id: 6, title: "Celebration 1", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel.jpeg", type: "short" },
  { id: 7, title: "Celebration 2", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel1.jpg", type: "tall" },
  { id: 8, title: "Celebration 3", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel2.jpg", type: "short" },
  { id: 9, title: "Celebration 4", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel8.jpg", type: "tall" },
  { id: 10, title: "Celebration 5", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel6.jpg", type: "short" },
  { id: 11, title: "Celebration 6", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel7.jpg", type: "tall" },
  { id: 12, title: "Celebration 7", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel9.jpg", type: "short" },
  { id: 13, title: "Celebration 8", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel11.jpg", type: "tall" },
  { id: 14, title: "Celebration 9", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel12.jpg", type: "short" },
  { id: 15, title: "Celebration 10", category: "celebration", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/cel15.jpg", type: "tall" },

  // Recruitment
  { id: 16, title: "Recruitment 1", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img8.jpg", type: "short" },
  { id: 17, title: "Recruitment 2", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img9.jpg", type: "tall" },
  { id: 18, title: "Recruitment 3", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img11.jpg", type: "short" },
  { id: 19, title: "Recruitment 4", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img20.jpg", type: "tall" },
  { id: 20, title: "Recruitment 5", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img22.jpg", type: "short" },
  { id: 21, title: "Recruitment 6", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img14.jpg", type: "tall" },
  { id: 22, title: "Recruitment 7", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img15.jpg", type: "short" },
  { id: 23, title: "Recruitment 8", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img16.jpg", type: "tall" },
  { id: 24, title: "Recruitment 9", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img17.jpg", type: "short" },
  { id: 25, title: "Recruitment 10", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img18.jpg", type: "tall" },
  { id: 26, title: "Recruitment 11", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img19.jpg", type: "short" },
  { id: 27, title: "Recruitment 12", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/img21.jpg", type: "tall" },
  { id: 28, title: "Recruitment 13", category: "recruitment", img: "https://softnova-institute-courses.s3.eu-north-1.amazonaws.com/uploads/gallery/Image20250723105648.jpg", type: "short" },
];





export default function StadiumGallery() {
  const [activeCat, setActiveCat] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);
  const containerRef = useRef(null);
  
  // Parallax scroll (relative to gallery container)
  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothScroll = useSpring(containerScrollProgress, { 
    stiffness: 50, 
    damping: 20,
    restDelta: 0.001
  });

  const smY1 = useTransform(smoothScroll, [0, 1], [0, -150]);
  const smY2 = useTransform(smoothScroll, [0, 1], [0, 150]);
  const smY3 = useTransform(smoothScroll, [0, 1], [0, -100]);
  const smY4 = useTransform(smoothScroll, [0, 1], [0, 100]);

  const filteredData = activeCat === "all" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCat);

  const columns = [
    filteredData.filter((_, i) => i % 3 === 0),
    filteredData.filter((_, i) => i % 3 === 1),
    filteredData.filter((_, i) => i % 3 === 2),
  ];

  const yValues = [smY1, smY2, smY3];

  const Column = ({ images, y }) => {
    return (
      <motion.div style={{ y }} className={styles.column}>
        <AnimatePresence mode="popLayout">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              className={`${styles.card} ${item.type === 'tall' ? styles.tall : styles.short}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImg(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className={styles.cardImg}
                loading="lazy"
              />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <main className={styles.galleryPage} ref={containerRef}>
        {/* Background Blobs */}
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}>
                <X size={32} />
              </button>
              <motion.div 
                className={styles.modalContent}
                initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotateY: -90, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.fullImgWrapper}>
                  <img 
                    src={selectedImg.img} 
                    alt={selectedImg.title} 
                    className={styles.fullImg}
                  />
                </div>
                <div className={styles.modalFooter}>
                  <h3>{selectedImg.title}</h3>
                  <span>{categories.find(c => c.id === selectedImg.category)?.label}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unique Floating Sidebar Filter */}
        <nav className={styles.sidebarFilter}>
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className={`${styles.filterIcon} ${activeCat === cat.id ? styles.activeIcon : ""}`}
              onClick={() => setActiveCat(cat.id)}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={styles.iconBox}>{cat.icon}</div>
              <span className={styles.iconLabel}>{cat.label}</span>
            </motion.div>
          ))}
        </nav>

        <div className={styles.contentWrapper}>
          {/* Header */}
          <motion.header 
            className={styles.header}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.tagline}>OUR VISUAL JOURNEY</span>
            <h1>Explore Softnova</h1>
            <p>A collection of moments that define our innovative spirit.</p>
          </motion.header>

          {/* Parallax Stadium Grid */}
          <div className={styles.stadiumGrid}>
            <Column images={columns[0]} y={smY1} />
            <Column images={columns[1]} y={smY2} />
            <Column images={columns[2]} y={smY3} />
          </div>

          {/* Bottom Spacer to prevent overlap with footer */}
          <div className={styles.bottomSpacer}></div>
        </div>
      </main>
  );
}
