"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const experience = [
  {
    year: "NOV 2025 — MAY 2026",
    company: "MAGANGHUB KEMNAKER — LAPAS KELAS I CIREBON",
    role: "Pengelola Fasilitas Umum",
    points: [
      "Troubleshooting komputer, jaringan, dan perangkat lunak.",
      "Merancang dan membangun sistem informasi BON barang & keuangan berbasis website.",
      "Mengolah data menggunakan Microsoft Excel dan Google Sheets.",
      "Membuat serta mengelola laporan administrasi kepegawaian.",
    ],
  },
  {
    year: "JUL 2024 — DES 2024",
    company: "DISTRIK NAVIGASI TANJUNG PRIOK TIPE B — VTS CIREBON",
    role: "IT Support / Radio Operator (PKL)",
    points: [
      "Monitoring sistem pelaporan berbasis web.",
      "Instalasi dan troubleshooting software pada perangkat operasional.",
      "Pengecekan dan pemeliharaan perangkat komputer.",
      "Validasi dan pengolahan data harian untuk menjaga akurasi.",
      "Koordinasi dengan tim operasional dalam pengelolaan data dan sistem.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-label"><span>02</span> EXPERIENCE</div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <motion.article className="experience-item" key={item.company}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }}>
            <div className="experience-year">{item.year}</div>
            <div className="experience-content">
              <div className="experience-title">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <BriefcaseBusiness size={19} />
              </div>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
