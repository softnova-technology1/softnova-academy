"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "../app/about/about.module.css";

const stats = [
  { label: "Students Trained", value: 5000, suffix: "+" },
  { label: "Courses Offered", value: 25, suffix: "+" },
  { label: "Placement Rate", value: 98, suffix: "%" },
  { label: "Years of Experience", value: 10, suffix: "+" },
];


function Counter({ from, to, suffix }) {
  const [displayValue, setDisplayValue] = useState(from);
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return (
    <span ref={nodeRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.statItem}
          >
            <h3>
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
