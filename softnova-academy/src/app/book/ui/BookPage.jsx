"use client";
import React from 'react';
import styles from './BookPage.module.css';

const BOOKS = [
  { id: 1, title: 'Web Design Fundamentals', author: 'James Carter', rating: 5, voters: '1,987,765', desc: 'Master the art of creating visually stunning and user-friendly websites. This guide covers layout theory, color palettes, and modern UI principles for beginners.', imgColor: '#ff7c30' },
  { id: 2, title: 'UI/UX Masterclass', author: 'Emily Watson', rating: 4, voters: '856,120', desc: 'Deep dive into user research, wireframing, and interactive prototyping. Learn how to craft digital experiences that users will love and return to.', imgColor: '#6c5ce7' },
  { id: 3, title: 'Advanced React Patterns', author: 'Sarah Jenkins', rating: 5, voters: '2,110,400', desc: 'Take your React skills to the professional level. Master high-order components, custom hooks, and scalable state management for large enterprise apps.', imgColor: '#00cec9' },
  { id: 4, title: 'Full Stack Roadmap', author: 'David Miller', rating: 5, voters: '1,200,890', desc: 'The ultimate guide to becoming a full stack developer. From database architecture to modern cloud deployments, learn the entire delivery pipeline.', imgColor: '#fab1a0' },
  { id: 5, title: 'Digital Marketing Tech', author: 'Michael Ross', rating: 4, voters: '540,230', desc: 'Learn how to leverage technology to drive business growth. SEO, lead generation, and social media automation strategies tailored for tech startups.', imgColor: '#fd79a8' },
  { id: 6, title: 'Cyber Security Basics', author: 'Anna Smith', rating: 5, voters: '980,111', desc: 'Protect your digital assets in the modern age. Understand the fundamentals of network security, encryption, and safe application development.', imgColor: '#55efc4' }
];

const BookCard = ({ book }) => (
  <div className={styles.card} suppressHydrationWarning>
    <div className={styles.coverWrapper}>
      <div className={styles.coverInner} style={{ borderTop: `10px solid ${book.imgColor}` }}>
        <div className={styles.coverTitle}>{book.title}</div>
        <div style={{ fontSize: '0.7rem', color: '#b2bec3' }}>SOFTNOVA ACADEMY</div>
        <div style={{ width: '100%', height: '100px', background: `${book.imgColor}22`, borderRadius: '5px', marginTop: '10px' }}></div>
      </div>
    </div>
    <div className={styles.infoSide}>
      <div className={styles.author} suppressHydrationWarning>by {book.author}</div>
      <h2 className={styles.title} suppressHydrationWarning>{book.title}</h2>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < book.rating ? '#ffb800' : '#dcdde1' }}>★</span>
        ))}
        <span className={styles.stats}>{book.voters} voters</span>
      </div>
      <p className={styles.description} suppressHydrationWarning>{book.desc}</p>
      <button className={styles.seeBookBtn} suppressHydrationWarning>See The Book</button>
    </div>
  </div>
);

const BookPage = () => {
  return (
    <div className={styles.section}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} suppressHydrationWarning>
            Expand your mind, <br /> reading a book
          </h1>
          <p className={styles.heroSubtitle} suppressHydrationWarning>
            Reading books is a wonderful way to spend your time. Here at Softnova Academy, 
            we believe reading will help you make deeper technical connections.
          </p>
          <div className={styles.btnGroup}>
            <button className={styles.primaryBtn} suppressHydrationWarning>Download Now</button>
            <button className={styles.secondaryBtn} suppressHydrationWarning>Read Free Book</button>
          </div>

          <div className={styles.heroImageContainer}>
            {/* Glowing 3D Lightbulb */}
            <div className={styles.ideaBulb}>
                <svg viewBox="0 0 100 120" fill="none">
                    <defs>
                        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffb800" />
                            <stop offset="100%" stopColor="#ff7c30" />
                        </radialGradient>
                    </defs>
                    <path d="M50 90h15M45 85h25M50 75c-15-10-22-25-22-40 0-12 10-22 22-22s22 10 22 22c0 15-7 30-22 40" stroke="#2d3436" strokeWidth="2" fill="url(#bulbGlow)" />
                    <rect x="42" y="90" width="16" height="5" rx="2" fill="#dcdde1" />
                    <rect x="42" y="97" width="16" height="5" rx="2" fill="#dcdde1" />
                    <circle cx="50" cy="35" r="15" fill="white" opacity="0.2" />
                </svg>
            </div>

            <div className={styles.bookComposition}>
                {/* Layered Book Stacks matching image composition */}
                <div className={styles.bookStack}>
                    <svg viewBox="0 0 600 200" fill="none">
                        {/* Pink / Red Stack Behind */}
                        <g opacity="0.9">
                            <rect x="50" y="80" width="160" height="40" rx="4" fill="#fd79a8" />
                            <rect x="50" y="82" width="160" height="4" fill="rgba(0,0,0,0.05)" />
                            <rect x="60" y="40" width="140" height="40" rx="4" fill="#fc5c9c" />
                        </g>
                        {/* Blue Stack Right */}
                        <g opacity="0.9">
                            <rect x="400" y="70" width="170" height="45" rx="4" fill="#74b9ff" />
                            <rect x="420" y="25" width="150" height="45" rx="4" fill="#0984e3" />
                            <rect x="520" y="30" width="10" height="30" rx="2" fill="#ff7c30" /> {/* Ribbon */}
                        </g>
                        {/* Yellow / Orange Stack */}
                        <g opacity="0.8">
                            <rect x="80" y="20" width="120" height="30" rx="4" fill="#ffeaa7" />
                        </g>
                    </svg>
                </div>

                {/* Main Open Book with Bookmark (Yellow) */}
                <div className={styles.openBookMain}>
                   <svg viewBox="0 0 400 200" fill="none">
                      <path d="M200 180 C 150 180 40 160 40 60 L 40 40 C 40 40 140 40 200 55 C 260 40 360 40 360 40 L 360 60 C 360 160 250 180 200 180" fill="white" stroke="#2d3436" strokeWidth="1" />
                      <path d="M200 180 C 150 180 40 160 40 60 L 40 40 L 200 55 Z" fill="#f8f9fa" opacity="0.5" />
                      
                      {/* Spine */}
                      <path d="M200 55 V 180" stroke="#dcdde1" strokeWidth="2" />
                      
                      {/* Accurate Yellow Bookmark */}
                      <path d="M210 52 V 195 L 218 188 L 226 195 V 53" fill="#ffb800" />
                      
                      {/* Faint lines for pages */}
                      <g stroke="#f1f2f6" strokeWidth="2">
                        <path d="M70 70 h 90 M70 90 h 90 M70 110 h 70" />
                        <path d="M240 75 h 90 M240 95 h 90 M240 115 h 60" />
                      </g>
                   </svg>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <div className={styles.container} style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <h2 className={styles.collectionTitle} suppressHydrationWarning>Library Collection</h2>
          <div className={styles.grid}>
            {BOOKS.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default BookPage;
