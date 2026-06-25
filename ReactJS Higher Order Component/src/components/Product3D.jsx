import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';

const ProductMesh = ({ type }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  if (type === 'sphere') {
    return (
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial color="#ffffff" speed={2} distort={0.3} />
      </Sphere>
    );
  }

  return (
    <Box ref={meshRef} args={[1, 1, 1]} scale={2}>
      <MeshWobbleMaterial color="#888888" speed={1} factor={0.6} />
    </Box>
  );
};

const Product3D = ({ type }) => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <ProductMesh type={type} />
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Product3D;
