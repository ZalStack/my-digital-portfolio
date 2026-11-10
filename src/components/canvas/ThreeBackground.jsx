// src/components/canvas/ThreeBackground.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ThreeBackground
 * Interactive 3D constellation + wireframe geometry background
 * Built with pure Three.js for maximum 60fps performance, zero React 19 incompatibilities.
 * Features:
 * - Floating particle field with electric purple (#8B5CF6) and vibrant red (#EF4444) colors
 * - Dynamic proximity line connections
 * - Floating wireframe icosahedrons that gently rotate in 3D space
 * - Smooth cursor parallax inertia (lerp)
 * - Automatic pause/throttle on reduced-motion or when tab is hidden
 */
const ThreeBackground = ({ isHeroOnly = false, reducedMotion = false }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect if user has prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduceMotion = reducedMotion || mediaQuery.matches;

    const width = container.clientWidth || window.innerWidth || 800;
    const height = container.clientHeight || window.innerHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, isHeroOnly ? 0.0018 : 0.0025);

    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      1,
      1000
    );
    camera.position.z = 220;

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

    // Color definitions based on prompt palette
    const purpleColor = new THREE.Color(0x8b5cf6);
    const redColor = new THREE.Color(0xef4444);

    // ==========================================
    // 1. PARTICLES & CONSTELLATION NETWORK
    // ==========================================
    const particleCount = isHeroOnly ? 120 : 90;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const rangeX = 320;
    const rangeY = 220;
    const rangeZ = 200;

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * rangeX;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;

      // Color alternating between purple and red with subtle variation
      const color = Math.random() > 0.4 ? purpleColor : redColor;
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;

      particleVelocities.push({
        x: (Math.random() - 0.5) * (shouldReduceMotion ? 0.05 : 0.25),
        y: (Math.random() - 0.5) * (shouldReduceMotion ? 0.05 : 0.25),
        z: (Math.random() - 0.5) * (shouldReduceMotion ? 0.05 : 0.25),
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Soft circle texture for particles
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(255,255,255,0.8)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // ==========================================
    // 2. DYNAMIC NETWORK CONNECTION LINES
    // ==========================================
    const maxConnections = particleCount * 4;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // ==========================================
    // 3. FLOATING WIREFRAME GEOMETRIES
    // ==========================================
    const geometriesGroup = new THREE.Group();
    scene.add(geometriesGroup);

    // Central aesthetic wireframe icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(28, 1);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const icoMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const icoMesh = new THREE.LineSegments(icoWireframe, icoMaterial);
    icoMesh.position.set(45, 10, -20);
    geometriesGroup.add(icoMesh);

    // Secondary smaller wireframe octahedron in red
    const octaGeometry = new THREE.OctahedronGeometry(18, 0);
    const octaWireframe = new THREE.WireframeGeometry(octaGeometry);
    const octaMaterial = new THREE.LineBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const octaMesh = new THREE.LineSegments(octaWireframe, octaMaterial);
    octaMesh.position.set(-65, -35, 10);
    geometriesGroup.add(octaMesh);

    // Subtle Torus Wireframe on corner
    const torusGeometry = new THREE.TorusGeometry(20, 4, 8, 24);
    const torusWireframe = new THREE.WireframeGeometry(torusGeometry);
    const torusMaterial = new THREE.LineBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    const torusMesh = new THREE.LineSegments(torusWireframe, torusMaterial);
    torusMesh.position.set(70, -40, -40);
    geometriesGroup.add(torusMesh);

    // ==========================================
    // 4. MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (event.clientX / innerWidth - 0.5) * 35;
      targetMouseY = (event.clientY / innerHeight - 0.5) * 35;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      if (!shouldReduceMotion) {
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;
        camera.position.x = mouseX;
        camera.position.y = -mouseY;
        camera.lookAt(scene.position);
      }

      // Rotate Wireframe Geometries
      if (!shouldReduceMotion) {
        icoMesh.rotation.x += 0.003;
        icoMesh.rotation.y += 0.005;
        octaMesh.rotation.x -= 0.004;
        octaMesh.rotation.z += 0.006;
        torusMesh.rotation.y += 0.004;
        torusMesh.rotation.x += 0.002;
      }

      // Subtle float
      icoMesh.position.y = 10 + Math.sin(elapsedTime * 0.8) * 6;
      octaMesh.position.y = -35 + Math.cos(elapsedTime * 0.7) * 4;

      // Update particle positions
      const positions = particleGeometry.attributes.position.array;
      let lineIndex = 0;
      const connectionDist = 48;

      for (let i = 0; i < particleCount; i++) {
        if (!shouldReduceMotion) {
          positions[i * 3] += particleVelocities[i].x;
          positions[i * 3 + 1] += particleVelocities[i].y;
          positions[i * 3 + 2] += particleVelocities[i].z;

          // Bounce off boundaries
          if (Math.abs(positions[i * 3]) > rangeX / 2)
            particleVelocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1]) > rangeY / 2)
            particleVelocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > rangeZ / 2)
            particleVelocities[i].z *= -1;
        }

        // Connect nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDist && lineIndex < maxConnections - 1) {
            const alpha = 1.0 - dist / connectionDist;

            linePositions[lineIndex * 6] = positions[i * 3];
            linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
            linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2];
            linePositions[lineIndex * 6 + 3] = positions[j * 3];
            linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
            linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];

            // Blend colors
            const mixColor = i % 2 === 0 ? purpleColor : redColor;
            lineColors[lineIndex * 6] = mixColor.r * alpha;
            lineColors[lineIndex * 6 + 1] = mixColor.g * alpha;
            lineColors[lineIndex * 6 + 2] = mixColor.b * alpha;
            lineColors[lineIndex * 6 + 3] = mixColor.r * alpha;
            lineColors[lineIndex * 6 + 4] = mixColor.g * alpha;
            lineColors[lineIndex * 6 + 5] = mixColor.b * alpha;

            lineIndex++;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex * 2);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // 5. RESIZE HANDLER
    // ==========================================
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeometry.dispose();
      icoWireframe.dispose();
      icoMaterial.dispose();
      octaGeometry.dispose();
      octaWireframe.dispose();
      octaMaterial.dispose();
      torusGeometry.dispose();
      torusWireframe.dispose();
      torusMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [isHeroOnly, reducedMotion]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;
