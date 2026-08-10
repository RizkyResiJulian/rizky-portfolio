"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-label"><span>04</span> SELECTED WORK</div>
      <div className="projects-heading">
        <div>
          <p className="eyebrow">CASE STUDIES</p>
          <h2>Projects that turn <em>problems into systems.</em></h2>
        </div>
        <p className="projects-note">
          Explore the thinking, technology, and role behind each project.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div key={project.slug}
            initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }} transition={{ delay: index * .08 }}>
            <Link href={`/projects/${project.slug}`} className="project-card">
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-stack">
                  {project.stack.slice(0, 4).map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="project-arrow"><ArrowUpRight size={24} /></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
