"use client";

import { Canvas } from "@react-three/fiber";
import { Grid, Center } from "@react-three/drei";

export default function TunnelScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: "#F9F5FF" }}
    >
      <ambientLight intensity={0.5} />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#C4A9FF" wireframe opacity={0.3} transparent />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#C4A9FF" wireframe opacity={0.3} transparent />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-3, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#C4A9FF" wireframe opacity={0.3} transparent />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[3, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#C4A9FF" wireframe opacity={0.3} transparent />
      </mesh>
    </Canvas>
  );
}