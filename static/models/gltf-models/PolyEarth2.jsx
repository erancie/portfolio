import * as THREE from "three"
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PolyEarth(props) {
  const { nodes, materials } = useGLTF('/models/gltf-models/low_poly_earth.gltf')
  const darkblue = new THREE.Color(0x19374c);
  const darkblue2 = new THREE.Color(0x19273c);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere004.geometry} 
            material={materials.water} 
            material-color={darkblue2} >
      </mesh>

      <mesh geometry={nodes.Sphere004_1.geometry} >
        <meshStandardMaterial 
          material={materials.earth} 
          color={darkblue} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/low_poly_earth.gltf')