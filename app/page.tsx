import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Section } from "@/components/Section";
import { experiences, projects } from "@/data";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <Hero />

        {/* =========================================================
            ABOUT / PROFILE
        ========================================================= */}
        <Section
          id="about"
          kicker="01 / PROFILE"
          title="Building practical digital solutions."
        >
          <div className="about-grid">
            <div>
              <p className="lead">
                I’m Rizky Resi Julian, an Informatics Engineering graduate
                focused on Web Development, AI, Data and IT Support.
              </p>

              <p className="muted">
                I enjoy turning operational problems into useful digital
                systems—from web-based information systems and vessel traffic
                reporting to AI-assisted communication and IoT prototypes.
              </p>
            </div>

            <div className="stat-grid">
              <div className="stat">
                <strong>3.67</strong>
                <small>GPA / 4.00</small>
              </div>

              <div className="stat">
                <strong>2025</strong>
                <small>GRADUATION</small>
              </div>

              <div className="stat">
                <strong>4+</strong>
                <small>CORE DOMAINS</small>
              </div>

              <div className="stat">
                <strong>BNSP</strong>
                <small>JUNIOR OPERATOR COMPUTER</small>
              </div>
            </div>
          </div>
        </Section>

        {/* =========================================================
            EXPERIENCE
        ========================================================= */}
        <Section
          id="experience"
          kicker="02 / CAREER"
          title="Experience with real operations."
        >
          <div className="timeline">
            {experiences.map((experience) => (
              <div className="exp" key={experience.company}>
                <span className="exp-dot" />

                <div className="exp-card">
                  <div className="logo">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                    />
                  </div>

                  <div>
                    <h3>{experience.company}</h3>

                    <div className="company">
                      {experience.role}
                    </div>

                    <div className="tags">
                      {experience.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="date">
                    {experience.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================
            PROJECTS
        ========================================================= */}
        <Section
          id="work"
          kicker="03 / SELECTED WORK"
          title="Projects recruiters can explore."
        >
          <div className="projects">
            {projects.map((project) => (
              <a
                className="project"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <div className="project-img">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                  />
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>

                  <p>{project.desc}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="view"
                    style={{ marginTop: 20 }}
                  >
                    VIEW CASE STUDY →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* =========================================================
            TOOLBOX
        ========================================================= */}
        <Section
          kicker="04 / TOOLBOX"
          title="Technologies I work with."
        >
          <div className="tech-cloud">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Python",
              "PHP",
              "MySQL",
              "SQL",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Git",
              "Figma",
              "Canva",
              "Arduino",
              "Machine Learning",
              "NLP",
              "Excel",
            ].map((technology) => (
              <span className="tech" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </Section>

        {/* =========================================================
            EDUCATION
        ========================================================= */}
        <Section
          kicker="05 / EDUCATION"
          title="Academic."
        >
          <div className="edu-grid">
            <div className="edu">
              <h3>
                Universitas Muhammadiyah Cirebon
              </h3>

              <p>
                S1 Teknik Informatika · Okt 2021 — Sep 2025
              </p>

              <strong>
                IPK 3.67 / 4.00
              </strong>
            </div>

            <div className="edu">
              <h3>
                Universitas Hasanuddin
              </h3>

              <p>
                Pertukaran Mahasiswa Merdeka Batch 4 · Feb 2024 — Juni 2024
              </p>

              <strong>
                IoT · Robotics · AI
              </strong>
            </div>
          </div>
        </Section>

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <Section
          id="contact"
          kicker="06 / CONTACT"
          title="Let’s build something useful."
        >
          <div className="contact">
            <div className="terminal">
              <div>
                <b>rizky@portfolio</b>:~$ contact
              </div>

              <p>
                Open to opportunities in Web Development,
                IT Support, AI and Data.
              </p>

              <div>
                <b>email</b> → rizkyresijulian@gmail.com
              </div>

              <div>
                <b>location</b> → Cirebon, Indonesia
              </div>
            </div>

            <div className="contact-links">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/rizkyresijulian"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
                <span>↗</span>
              </a>

              <a
                className="contact-link"
                href="https://github.com/rizkyresijulian"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
                <span>↗</span>
              </a>

              <a
                className="contact-link"
                href="mailto:rizkyresijulian@gmail.com"
              >
                EMAIL
                <span>↗</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="container footer">
        <span>
          RIZKY RESI JULIAN · 2026
        </span>

        <span>
          NEXT.JS · BUILT FOR THE WEB
        </span>
      </footer>
    </>
  );
}