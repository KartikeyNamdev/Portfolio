"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

interface AvatarProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

function AvatarModel({
  modelPath,
  scale = 3.5,
  position = [0, -3.2, 0],
}: AvatarProps) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      modelRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
    />
  );
}

function LoadingBox() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3B82F6" wireframe />
    </mesh>
  );
}

export default function AvatarDisplay({ modelPath = "/me2.glb" }) {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative mt-[-20px] outline-none">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} />

        <Suspense fallback={<LoadingBox />}>
          <AvatarModel modelPath={modelPath} />
          <ContactShadows
            opacity={0.4}
            scale={10}
            blur={2.4}
            far={4.5}
            color="#000000"
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
