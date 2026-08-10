"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-label"><span>05</span> EDUCATION</div>
      <div className="education-grid">
        <motion.div className="education-card"
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <GraduationCap size={25} />
          <span>2021 — 2025</span>
          <h3>Sarjana Teknik Informatika</h3>
          <p>Universitas Muhammadiyah Cirebon</p>
          <strong>IPK 3.67 / 4.00</strong>
          <small>
            Skripsi: Perancangan Sistem Otomatisasi Laporan Lalu Lintas Kapal
            Berbasis Machine Learning dan Natural Language Processing.
          </small>
        </motion.div>

        <motion.div className="education-card"
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: .1 }}>
          <Award size={25} />
          <span>CERTIFICATION</span>
          <h3>Junior Operator Computer</h3>
          <p>BNSP</p>
          <strong>2025</strong>
          <small>Certification supporting professional computer operation and office technology competency.</small>
        </motion.div>
      </div>
    </section>
  );
}
