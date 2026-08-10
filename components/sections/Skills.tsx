"use client";

import { motion } from "framer-motion";

const groups = [
  {
    no: "01",
    title: "WEB",
    items: ["HTML", "CSS", "PHP", "Next.js", "React"],
  },
  {
    no: "02",
    title: "AI / DATA",
    items: ["Python", "Machine Learning", "NLP", "TF-IDF", "Naive Bayes", "SQL"],
  },
  {
    no: "03",
    title: "TOOLS",
    items: ["MySQL", "Microsoft Excel", "Google Sheets", "Git", "Figma", "Canva"],
  },
  {
    no: "04",
    title: "IoT / SUPPORT",
    items: ["Arduino", "Sensors", "Hardware", "Software", "Networking"],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-label"><span>03</span> TECH STACK</div>
      <div className="skills-intro">
        <p className="eyebrow">TOOLS I WORK WITH</p>
        <h2>A toolkit shaped by <em>real projects.</em></h2>
      </div>

      <div className="skill-grid">
        {groups.map((group, index) => (
          <motion.article className="skill-card" key={group.no}
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: index * .08 }}
            whileHover={{ y: -7, rotateX: 2, rotateY: -2 }}>
            <div className="skill-top"><span>{group.no}</span><span>+</span></div>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map(item => <span key={item}>{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
