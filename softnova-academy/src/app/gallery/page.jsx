"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  X, 
  Camera, 
  Users, 
  Zap, 
  Globe,
  Layout,
  Award
} from "lucide-react";
import styles from "./gallery.module.css";

const CATEGORIES = [
  { id: "all", label: "All", icon: <Layout size={20} /> },
  { id: "campus", label: "Campus", icon: <Globe size={20} /> },
  { id: "events", label: "Events", icon: <Zap size={20} /> },
  { id: "students", label: "Students", icon: <Users size={20} /> },
];

const GALLERY_IMAGES = [
  { id: 1, title: "Our Modern Campus", category: "campus", img: "/gallery/classroom1.png", size: "tall" },
  { id: 2, title: "Student Collaboration", category: "students", img: "/gallery/celebration1.png", size: "short" },
  { id: 3, title: "Annual Tech Event", category: "events", img: "/gallery/event1.png", size: "tall" },
  { id: 4, title: "Learning in Progress", category: "students", img: "/gallery/Akka.png", size: "short" },
  { id: 5, title: "Team Leadership", category: "students", img: "/gallery/dharshi.jpg", size: "tall" },
  { id: 6, title: "Dev Spirit", category: "events", img: "/gallery/dev.jpg", size: "short" },
  { id: 7, title: "Tech Workshop", category: "events", img: "/gallery/classroom1.png", size: "tall" },
  { id: 8, title: "Vibrant Campus", category: "campus", img: "/gallery/celebration1.png", size: "short" },
  { id: 9, title: "Student Success", category: "students", img: "/gallery/event1.png", size: "tall" },
];

const Column = ({ images, y, onImageClick }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((img, idx) => (
        <div key={idx} className={`${styles.card} ${styles[img.size]}`} onClick={() => onImageClick(img)}>
          <img src={img.img} alt={img.title} className={styles.cardImg} />
          <div className={styles.cardOverlay}>
            <span className={styles.cardTitle}>{img.title}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smY2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const smY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const filteredImages = useMemo(() => {
    return activeCat === "all" 
      ? GALLERY_IMAGES 
      : GALLERY_IMAGES.filter(img => img.category === activeCat);
  }, [activeCat]);

  // Split images into 3 columns
  const columns = useMemo(() => {
    const cols = [[], [], []];
    filteredImages.forEach((img, i) => {
      cols[i % 3].push(img);
    });
    return cols;
  }, [filteredImages]);

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
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
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
                <span>{CATEGORIES.find(c => c.id === selectedImg.category)?.label}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sidebar Filter */}
      <nav className={styles.sidebarFilter}>
        {CATEGORIES.map((cat) => (
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
          <Column images={columns[0]} y={smY1} onImageClick={setSelectedImg} />
          <Column images={columns[1]} y={smY2} onImageClick={setSelectedImg} />
          <Column images={columns[2]} y={smY3} onImageClick={setSelectedImg} />
        </div>

        {/* Bottom Spacer */}
        <div className={styles.bottomSpacer}></div>
      </div>
    </main>
  );
}
