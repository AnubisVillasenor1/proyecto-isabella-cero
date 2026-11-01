'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Html, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const nodes = [
  { label: 'CROWN', color: '#d9b47c', position: [0, 1.25, 0] as [number, number, number] },
  { label: 'BookPI', color: '#f5d7a0', position: [-2.35, 0.2, 0.25] as [number, number, number] },
  { label: 'Memory Fabric', color: '#a9c4c8', position: [2.35, 0.2, 0.25] as [number, number, number] },
  { label: 'Agent Mesh', color: '#c58f6a', position: [0, -1.05, 0.15] as [number, number, number] },
]

function CoreNode({ label, color, position }: typeof nodes[number]) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += delta * 0.35 })
  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.18}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.45, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.32} metalness={0.8} roughness={0.22} />
      </mesh>
      <Html position={[0, -0.7, 0]} center distanceFactor={8}>
        <div className="scene-label">{label}</div>
      </Html>
    </Float>
  )
}

function Link({ a, b }: { a: [number, number, number]; b: [number, number, number] }) {
  const start = new THREE.Vector3(...a)
  const end = new THREE.Vector3(...b)
  const mid = start.clone().add(end).multiplyScalar(0.5)
  const direction = end.clone().sub(start)
  return (
    <mesh position={mid} rotation={[0, Math.atan2(direction.x, direction.z), Math.atan2(direction.y, direction.length())]}>
      <cylinderGeometry args={[0.025, 0.025, direction.length(), 8]} />
      <meshBasicMaterial color="#c99b65" transparent opacity={0.72} />
    </mesh>
  )
}

export function TamvScene() {
  return (
    <div className="tamv-canvas" aria-label="Interactive 3D TAMV workspace graph">
      <Canvas camera={{ position: [0, 0.2, 6], fov: 42 }}>
        <color attach="background" args={['#0a0b0d']} />
        <ambientLight intensity={0.55} />
        <pointLight position={[2, 3, 4]} intensity={12} color="#edc58e" />
        <pointLight position={[-3, -2, 2]} intensity={8} color="#9fb9c0" />
        <Sparkles count={80} scale={8} size={1.4} speed={0.25} color="#d9b47c" />
        {nodes.slice(1).map((node) => <Link key={node.label} a={nodes[0].position} b={node.position} />)}
        <Link a={nodes[1].position} b={nodes[3].position} />
        <Link a={nodes[2].position} b={nodes[3].position} />
        {nodes.map((node) => <CoreNode key={node.label} {...node} />)}
        <OrbitControls enablePan={false} minDistance={3.8} maxDistance={8} />
      </Canvas>
      <div className="scene-hud"><span>WEBGL / LIVE GRAPH</span><strong>drag to orbit</strong></div>
    </div>
  )
}
