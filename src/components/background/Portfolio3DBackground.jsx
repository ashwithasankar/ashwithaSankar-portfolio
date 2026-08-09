import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const GoldParticles = () => {
  const pointsRef = useRef();

  const count = 900;

  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.025;
    pointsRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#d4af37"
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FlowingLines = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.z += delta * 0.025;
    groupRef.current.rotation.y += delta * 0.015;
  });

  return (
    <group ref={groupRef}>

      <mesh rotation={[0.8, 0.2, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 180]} />

        <meshBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.22}
        />
      </mesh>

      <mesh rotation={[1.2, -0.3, 0.4]}>
        <torusGeometry args={[2.5, 0.009, 16, 160]} />

        <meshBasicMaterial
          color="#c8a96a"
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh rotation={[0.4, 0.8, 0.8]}>
        <torusGeometry args={[1.8, 0.008, 16, 140]} />

        <meshBasicMaterial
          color="#f0d98a"
          transparent
          opacity={0.16}
        />
      </mesh>

    </group>
  );
};

const FloatingCore = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.18;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.08;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={meshRef} position={[2.8, 0, 0]}>
      <icosahedronGeometry args={[0.65, 2]} />

      <meshBasicMaterial
        color="#d4af37"
        wireframe
        transparent
        opacity={0.32}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <GoldParticles />
      <FlowingLines />
      <FloatingCore />
    </>
  );
};

const Portfolio3DBackground = () => {
  return (
    <div className="portfolio-3d-background">

      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 50,
        }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>

    </div>
  );
};

export default Portfolio3DBackground;