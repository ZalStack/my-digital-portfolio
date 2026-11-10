// src/components/canvas/Hero3DCanvas.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero3DCanvas
 * An interactive 3D futuristic holographic wireframe emblem
 * Consisting of:
 * - Nested wireframe Icosahedron & Dodecahedron
 * - Pulsing particle orbital ring with purple-to-red glow
 * - Dynamic mouse tracking response
 */
const Hero3DCanvas = ({ className = "w-full h-full", reducedMotion = false }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduce = reducedMotion || mediaQuery.matches;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 70;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or initialization error:", e);
      return;
    }

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Inner wireframe Icosahedron (Electric Purple)
    const innerGeo = new THREE.IcosahedronGeometry(14, 1);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const innerMesh = new THREE.LineSegments(innerWire, innerMat);
    rootGroup.add(innerMesh);

    // Outer wireframe Dodecahedron (Vibrant Red)
    const outerGeo = new THREE.DodecahedronGeometry(19, 0);
    const outerWire = new THREE.WireframeGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const outerMesh = new THREE.LineSegments(outerWire, outerMat);
    rootGroup.add(outerMesh);

    // Glowing core sphere
    const coreGeo = new THREE.SphereGeometry(6, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Orbital Particle Ring
    const ringCount = 80;
    const ringPositions = new Float32Array(ringCount * 3);
    const ringColors = new Float32Array(ringCount * 3);
    const radius = 25;

    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      ringPositions[i * 3] = Math.cos(angle) * radius;
      ringPositions[i * 3 + 1] = Math.sin(angle) * radius;
      ringPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      const t = i / ringCount;
      // Gradient from purple (#8B5CF6) to red (#EF4444)
      const r = 0.54 + 0.39 * t;
      const g = 0.36 - 0.1 * t;
      const b = 0.96 - 0.7 * t;

      ringColors[i * 3] = r;
      ringColors[i * 3 + 1] = g;
      ringColors[i * 3 + 2] = b;
    }

    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute("position", new THREE.BufferAttribute(ringPositions, 3));
    ringGeo.setAttribute("color", new THREE.BufferAttribute(ringColors, 3));

    const ringMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const ringMesh = new THREE.Points(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    rootGroup.add(ringMesh);

    // Secondary tilted ring
    const ringMesh2 = ringMesh.clone();
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 6;
    rootGroup.add(ringMesh2);

    // Cursor tracking
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    container.addEventListener("mousemove", onMouseMove);

    let reqId;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      reqId = requestAnimationFrame(renderLoop);
      const time = clock.getElapsedTime();

      if (!shouldReduce) {
        innerMesh.rotation.x += 0.005;
        innerMesh.rotation.y += 0.008;

        outerMesh.rotation.x -= 0.004;
        outerMesh.rotation.y -= 0.006;

        ringMesh.rotation.z += 0.006;
        ringMesh2.rotation.z -= 0.005;

        // Smooth cursor responsiveness
        rootGroup.rotation.y += (targetX - rootGroup.rotation.y) * 0.05;
        rootGroup.rotation.x += (-targetY - rootGroup.rotation.x) * 0.05;

        // Gentle floating bounce
        rootGroup.position.y = Math.sin(time * 1.2) * 2;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      innerGeo.dispose();
      innerWire.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerWire.dispose();
      outerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div
      ref={mountRef}
      className={`relative select-none pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Software Architecture Emblem"
    />
  );
};

export default Hero3DCanvas;
