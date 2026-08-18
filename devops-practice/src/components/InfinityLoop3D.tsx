import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Curva matemática para el símbolo de infinito (Lissajous / Lemniscata en 3D)
class InfinityCurve extends THREE.Curve<THREE.Vector3> {
  scale: number;
  constructor(scale = 1) {
    super();
    this.scale = scale;
  }
  
  getPoint(t: number, optionalTarget = new THREE.Vector3()) {
    const radian = t * Math.PI * 2;
    const a = 4;
    const x = a * Math.sin(radian);
    const y = a * Math.sin(radian) * Math.cos(radian);
    const z = 1.5 * Math.cos(radian); // Profundidad
    
    return optionalTarget.set(x, y, z).multiplyScalar(this.scale);
  }
}

export const InfinityLoop3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRefInner = useRef<THREE.Mesh>(null);
  const path = new InfinityCurve(1.2);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.1;
    }
    if (meshRefInner.current) {
      meshRefInner.current.rotation.y += delta * 0.3;
      meshRefInner.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Tubo interior sólido oscuro */}
      <mesh ref={meshRefInner}>
        <tubeGeometry args={[path, 128, 0.3, 16, true]} />
        <meshStandardMaterial 
          color="#0A192F" 
          roughness={0.2} 
          metalness={0.8} 
        />
      </mesh>

      {/* Tubo exterior wireframe brillante */}
      <mesh ref={meshRef}>
        <tubeGeometry args={[path, 128, 0.35, 12, true]} />
        <meshStandardMaterial 
          color="#64FFDA" 
          wireframe={true} 
          emissive="#64FFDA"
          emissiveIntensity={0.8}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};
