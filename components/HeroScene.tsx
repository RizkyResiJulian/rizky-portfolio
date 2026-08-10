"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* =========================================================
   GALAXY SPIRAL
========================================================= */

function Galaxy() {
  const group = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const count = 4200;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorCyan = new THREE.Color("#4deaff");
    const colorWhite = new THREE.Color("#e8fbff");
    const colorViolet = new THREE.Color("#927cff");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      /* Radius galaxy */
      const radius =
        Math.pow(Math.random(), 0.65) * 5.5;

      /* Spiral arms */
      const arm = i % 4;

      const baseAngle =
        (arm / 4) * Math.PI * 2;

      const spiralAngle =
        baseAngle +
        radius * 1.35 +
        (Math.random() - 0.5) * 0.65;

      /* Galaxy thickness */
      const thickness =
        (Math.random() - 0.5) *
        (0.18 + radius * 0.055);

      positions[i3] =
        Math.cos(spiralAngle) *
          radius +
        (Math.random() - 0.5) * 0.15;

      positions[i3 + 1] =
        thickness;

      positions[i3 + 2] =
        Math.sin(spiralAngle) *
          radius;

      /* Color distribution */
      const random = Math.random();

      let color: THREE.Color;

      if (random < 0.58) {
        color = colorWhite;
      } else if (random < 0.85) {
        color = colorCyan;
      } else {
        color = colorViolet;
      }

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return {
      positions,
      colors,
    };
  }, []);

  /* Galaxy rotation */
  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.025;

    group.current.rotation.z =
      Math.sin(
        state.clock.elapsedTime * 0.08
      ) * 0.025;
  });

  return (
    <group
      ref={group}
      rotation={[0.35, 0, -0.15]}
      position={[-1.4, 0.15, -1.8]}
    >

      {/* =====================================================
          GALAXY PARTICLES
      ===================================================== */}

      <points>

        <bufferGeometry>

          <bufferAttribute
            attach="attributes-position"
            args={[
              particles.positions,
              3,
            ]}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[
              particles.colors,
              3,
            ]}
          />

        </bufferGeometry>

        <pointsMaterial
          size={0.026}
          vertexColors
          transparent
          opacity={0.58}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />

      </points>


      {/* =====================================================
          GALAXY CORE
      ===================================================== */}

      <mesh>

        <sphereGeometry
          args={[0.75, 32, 32]}
        />

        <meshBasicMaterial
          color="#8defff"
          transparent
          opacity={0.035}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />

      </mesh>


      {/* =====================================================
          INNER CORE GLOW
      ===================================================== */}

      <mesh>

        <sphereGeometry
          args={[0.3, 32, 32]}
        />

        <meshBasicMaterial
          color="#dfffff"
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />

      </mesh>

    </group>
  );
}


/* =========================================================
   GALAXY DUST
========================================================= */

function GalaxyDust() {
  return (
    <>

      {/* White dust */}

      <Sparkles
        count={500}
        scale={[12, 5, 10]}
        size={1.15}
        speed={0.08}
        opacity={0.32}
        color="#dffcff"
      />


      {/* Cyan dust */}

      <Sparkles
        count={260}
        scale={[9, 3.5, 8]}
        size={1.7}
        speed={0.05}
        opacity={0.2}
        color="#38e8ff"
      />


      {/* Violet dust */}

      <Sparkles
        count={140}
        scale={[7, 2.5, 7]}
        size={1.8}
        speed={0.04}
        opacity={0.16}
        color="#9b7cff"
      />

    </>
  );
}


/* =========================================================
   BACKGROUND STAR FIELD
========================================================= */

function BackgroundStars() {
  return (
    <Stars
      radius={10}
      depth={7}
      count={350}
      factor={2.5}
      saturation={0.2}
      fade
      speed={0.12}
    />
  );
}


/* =========================================================
   CAMERA MOTION
========================================================= */

function CameraMotion() {
  useFrame((state) => {
    const time =
      state.clock.elapsedTime;

    /*
     * Very subtle cinematic camera movement
     */

    state.camera.position.x =
      Math.sin(time * 0.08) * 0.12;

    state.camera.position.y =
      Math.cos(time * 0.06) * 0.08;

    state.camera.position.z = 6;

    state.camera.lookAt(
      -0.4,
      0,
      -1
    );
  });

  return null;
}


/* =========================================================
   HERO SCENE
========================================================= */

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 6],
        fov: 48,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
    >

      {/* ===================================================
          LIGHTING
      =================================================== */}

      <ambientLight
        intensity={0.08}
      />

      <pointLight
        position={[3, 2, 4]}
        intensity={1.5}
        color="#38e8ff"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={0.8}
        color="#7c3aed"
      />


      {/* ===================================================
          MAIN GALAXY
      =================================================== */}

      <Galaxy />


      {/* ===================================================
          DUST / PARTICLES
      =================================================== */}

      <GalaxyDust />


      {/* ===================================================
          BACKGROUND STARS
      =================================================== */}

      <BackgroundStars />


      {/* ===================================================
          CAMERA
      =================================================== */}

      <CameraMotion />

    </Canvas>
  );
}