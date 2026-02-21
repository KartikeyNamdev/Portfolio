"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useInView } from "motion/react";

function Web3Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
          emissive="#1E40AF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#60A5FA"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Orbiting particles/rings */}
      <group rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#94A3B8" transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Web3Animation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px] relative cursor-pointer"
    >
      {isInView ? (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#F472B6"
          />

          <React.Suspense fallback={null}>
            <Web3Crystal />
          </React.Suspense>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      ) : (
        <div className="w-full h-full bg-slate-50/10 rounded-full animate-pulse blur-xl" />
      )}
    </div>
  );
}
