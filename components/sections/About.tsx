"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-label"><span>01</span> ABOUT</div>
      <div className="about-grid">
        <motion.div className="section-heading"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .2 }}>
          <p className="eyebrow">PROFILE / 2026</p>
          <h2>Building digital solutions with <em>technology & curiosity.</em></h2>
        </motion.div>

        <motion.div className="about-copy"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: .12 }}>
          <p>
            Informatics Engineering graduate with a practical background in
            web systems, IT support, data processing, machine learning,
            natural language processing, and IoT.
          </p>
          <p>
            I enjoy turning operational problems into useful digital systems —
            from web-based information systems to AI-assisted workflows.
          </p>
          <a className="text-link" href="#work">EXPLORE PROJECTS <ArrowUpRight size={16} /></a>
        </motion.div>
      </div>

      <div className="about-stats">
        <div><strong>01</strong><span>Web Development</span></div>
        <div><strong>02</strong><span>AI & Machine Learning</span></div>
        <div><strong>03</strong><span>Data & SQL</span></div>
        <div><strong>04</strong><span>IoT & Systems</span></div>
      </div>
    </section>
  );
}
