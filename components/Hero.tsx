"use client";

import { useState } from "react";
import HeroScene from "./HeroScene";

export default function Hero() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMouse({ x, y });
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
    >

      {/* =========================================
          GALAXY BACKGROUND
      ========================================= */}

      <div className="hero-3d-wrapper">
        <HeroScene />
      </div>

      <div className="hero-overlay" />

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className="hero-layout">

        {/* =====================================
            LEFT / TEXT
        ===================================== */}

        <div
          className="hero-copy"
          style={{
            transform: `
              perspective(1200px)
              rotateY(${mouse.x * -2}deg)
              rotateX(${mouse.y * 1.2}deg)
              translate3d(${mouse.x * 8}px, ${mouse.y * 5}px, 0)
            `,
          }}
        >

          <div className="eyebrow">
            <span className="dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <div className="hero-name">

            <span>RIZKY</span>
            <span>RESI</span>
            <span>JULIAN</span>

            <div className="hero-name-outline">
              <span>RIZKY</span>
              <span>RESI</span>
              <span>JULIAN</span>
            </div>

          </div>

          <div className="hero-role">
            INFORMATICS ENGINEER
          </div>

          <div className="hero-skills">
            <span>WEB</span>
            <b>•</b>
            <span>AI</span>
            <b>•</b>
            <span>DATA</span>
            <b>•</b>
            <span>IoT</span>
          </div>

          <a
            href="#about"
            className="explore"
          >
            <span>EXPLORE</span>
            <span className="arrow">↓</span>
          </a>

        </div>


        {/* =====================================
            RIGHT / PROFILE
        ===================================== */}

        <div
          className="hero-profile-wrapper"
          style={{
            transform: `
              perspective(1000px)
              rotateY(${mouse.x * 4}deg)
              rotateX(${mouse.y * -3}deg)
              translate3d(
                ${mouse.x * 8}px,
                ${mouse.y * 5}px,
                0
              )
            `,
          }}
        >

          <div className="profile-glow" />

          <div className="profile-ring ring-one" />
          <div className="profile-ring ring-two" />

          <div className="profile-card">

            <div className="profile-image">

              <img
                src="/images/profile.jpeg"
                alt="Rizky Resi Julian"
              />

            </div>

            <div className="profile-label">

              <span>
                RIZKY RESI JULIAN S.T.
              </span>

              <small>
                INFORMATICS ENGINEER
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="hero-bottom">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line" />

      </div>


      {/* =========================================
          PAGE INDICATOR
      ========================================= */}

      <div className="hero-corner">
        <span>01</span>
        <span>/</span>
        <span>06</span>
      </div>

    </section>
  );
}