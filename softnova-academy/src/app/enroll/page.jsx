"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Phone, 
  Mail, 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Send,
  CheckCircle2
} from "lucide-react";
import styles from "./enroll.module.css";

const EnrollPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
    address: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className={styles.enrollPage}>
      {/* Background Elements */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Application Form</h1>
          <p>Join Softnova Academy and kickstart your professional tech journey.</p>
        </motion.div>

        <div className={styles.formCard}>
          {isSubmitted ? (
            <motion.div 
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={80} color="var(--primary)" />
              <h2>Application Submitted!</h2>
              <p>Thank you for applying. Our team will contact you shortly.</p>
              <button 
                className={styles.backBtn}
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGrid}>
                {/* Name */}
                <div className={styles.inputGroup}>
                  <label><User size={18} /> Name of the Applicant *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className={styles.inputGroup}>
                  <label><Phone size={18} /> Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Email */}
                <div className={styles.inputGroup}>
                  <label><Mail size={18} /> Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Education */}
                <div className={styles.inputGroup}>
                  <label><GraduationCap size={18} /> Education Qualification *</label>
                  <input 
                    type="text" 
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    placeholder="e.g. B.E Computer Science"
                    required
                  />
                </div>

                {/* Course Selection */}
                <div className={styles.inputGroup}>
                  <label><BookOpen size={18} /> Preferred Course *</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select a Course</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Software Testing">Software Testing</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cyber Security">Cyber Security</option>
                  </select>
                </div>

                {/* Address */}
                <div className={styles.inputGroup}>
                  <label><MapPin size={18} /> Address *</label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your permanent address"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>

              <motion.button 
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Submit Application</span>
                <Send size={18} />
              </motion.button>
            </form>
          )}
        </div>

        {/* Form Footer Info */}
        <div className={styles.footerInfo}>
          <p>By submitting this form, you agree to be contacted by Softnova Academy representatives.</p>
        </div>
      </div>
    </main>
  );
};

export default EnrollPage;
