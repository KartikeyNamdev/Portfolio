"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
interface avatar {
  modelPath: string;
  scale: number;
  position?: number[];
  rotation?: number[];
}
function AvatarModel({
  modelPath,
  scale = 1,
  position = [0, -1, 0], // Adjusted position to center the model vertically
  rotation = [0, 0, 0],
}: avatar) {
  const modelRef = useRef<THREE.Mesh | null>(null);
  const { scene } = useGLTF(modelPath);

  // Auto-rotate effect (can be disabled if needed)
  useFrame(() => {
    if (modelRef.current) {
      // Slow down the rotation for better viewing
      modelRef.current.rotation.y += 0.02;
    }
  });

  useEffect(() => {
    // Center the model on load
    if (scene) {
      // Optional: If you need to adjust materials for better visibility
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export default function AvatarDisplay({ modelPath = "/your-avatar.glb" }) {
  return (
    <div className="w-full h-96 md:h-[500px] relative">
      {/* Controls info overlay */}
      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs p-2 rounded z-10">
        Drag to rotate • Scroll to zoom • Shift + drag to pan
      </div>
      <Canvas shadows>
        {/* Adjusted camera position to see the full model including face */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={80} />

        {/* Better lighting setup */}
        <ambientLight intensity={0.8} />
        <spotLight
          position={[5, 10, 7]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-10, 0, -10]} intensity={0.5} />

        {/* Front light to illuminate the face */}
        <pointLight position={[0, 2, 5]} intensity={0.8} />

        <AvatarModel modelPath={modelPath} scale={2} />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
          target={[0, 0, 0]} // Focus point (center of the model)
          enableDamping={true}
          dampingFactor={0.05}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
