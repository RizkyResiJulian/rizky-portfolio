import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="case-hero">

        <div className="container">

          <Link
            href="/#work"
            className="back"
          >
            ← BACK TO WORK
          </Link>

          <div
            className="section-kicker"
            style={{ marginTop: 40 }}
          >
            {project.number} / CASE STUDY
          </div>

          <h1 className="section-title">
            {project.title}
          </h1>

          <p
            className="lead"
            style={{ maxWidth: 850 }}
          >
            {project.desc}
          </p>

          <div className="case-meta">

            <span className="tag">
              {project.category}
            </span>

            <span className="tag">
              {project.year}
            </span>

            <span className="tag">
              {project.role}
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          PROJECT CONTENT
      ========================================= */}

      <section className="section">

        <div className="container">

          <div className="case-grid">


            {/* =====================================
                MAIN CONTENT
            ===================================== */}

            <article className="case-content">


              {/* PROJECT IMAGE */}

              <div className="case-cover">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>


              {/* =================================
                  OVERVIEW
              ================================= */}

              <section>

                <div className="section-kicker">
                  01 / OVERVIEW
                </div>

                <h2>
                  {project.overviewTitle}
                </h2>

                <p>
                  {project.overview}
                </p>

              </section>


              {/* =================================
                  CHALLENGE
              ================================= */}

              <section>

                <div className="section-kicker">
                  02 / CHALLENGE
                </div>

                <h2>
                  The Challenge
                </h2>

                <p>
                  {project.challenge}
                </p>

              </section>


              {/* =================================
                  SOLUTION
              ================================= */}

              <section>

                <div className="section-kicker">
                  03 / SOLUTION
                </div>

                <h2>
                  The Solution
                </h2>

                <p>
                  {project.solution}
                </p>

              </section>


              {/* =================================
                  RESULTS
              ================================= */}

              <section>

                <div className="section-kicker">
                  04 / RESULTS
                </div>

                <h2>
                  Project Outcomes
                </h2>

                <ul>

                  {project.results.map(
                    (result, index) => (
                      <li key={index}>
                        {result}
                      </li>
                    )
                  )}

                </ul>

              </section>


              {/* =================================
                  TECHNOLOGY
              ================================= */}

              <section>

                <div className="section-kicker">
                  05 / TECHNOLOGY
                </div>

                <h2>
                  Technology Stack
                </h2>

                <div className="tech-cloud">

                  {project.tags.map(
                    (technology) => (
                      <span
                        className="tech"
                        key={technology}
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </section>


              {/* =================================
                  GALLERY
              ================================= */}

              {project.gallery &&
                project.gallery.length > 0 && (

                  <section>

                    <div className="section-kicker">
                      06 / GALLERY
                    </div>

                    <h2>
                      Project Visuals
                    </h2>

                    <div className="project-gallery">

                      {project.gallery.map(
                        (image, index) => (

                          <div
                            className="gallery-item"
                            key={image}
                          >

                            <img
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                            />

                          </div>

                        )
                      )}

                    </div>

                  </section>

                )}

            </article>


            {/* =====================================
                SIDEBAR
            ===================================== */}

            <aside className="side-box">

              <strong>
                PROJECT INFO
              </strong>


              <div className="side-info">

                <span>
                  PROJECT
                </span>

                <b>
                  {project.title}
                </b>

              </div>


              <div className="side-info">

                <span>
                  CATEGORY
                </span>

                <b>
                  {project.category}
                </b>

              </div>


              <div className="side-info">

                <span>
                  YEAR
                </span>

                <b>
                  {project.year}
                </b>

              </div>


              <div className="side-info">

                <span>
                  ROLE
                </span>

                <b>
                  {project.role}
                </b>

              </div>


              <div className="side-info">

                <span>
                  STACK
                </span>

                <div className="side-stack">

                  {project.tags.map(
                    (technology) => (

                      <span
                        className="tag"
                        key={technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* =================================
                  GITHUB
              ================================= */}

              {project.github && (

                <a
                  className="view"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW GITHUB →
                </a>

              )}


              {/* =================================
                  LIVE PROJECT
              ================================= */}

              {project.live && (

                <a
                  className="view"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE PROJECT →
                </a>

              )}

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}