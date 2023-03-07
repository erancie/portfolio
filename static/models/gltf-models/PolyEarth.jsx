/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 low_poly_earth.gltf
*/
import * as THREE from "three"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export function PolyEarth(props) {
  const { nodes, materials } = useGLTF('/models/gltf-models/low_poly_earth.gltf')
  
    const orange = new THREE.Color(0xb87c26);
    const green = new THREE.Color(0x0f613e);
    const darkblue = new THREE.Color(0x19374c);
    const teal = new THREE.Color(0x1d868a);
    const light = new THREE.Color(0x749c8d);
    const brown = new THREE.Color(0x989260);

    const outterMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-60/earth-clouds-2k-lossless_Fx89Vwggc.jpg')
    const innerNightMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-80/earth-night-8k_dMIDkPbA_.jpg')
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere004.geometry} 
            material={materials.water} 
            material-color={darkblue}
            // material-color={teal}
      >
      </mesh>
      <mesh geometry={nodes.Sphere004_1.geometry} 
            material={materials.earth} 
            material-color={green}
            // material-color={orange}
            // material-color={brown}
      >
      </mesh>
    </group>
  )
}

useGLTF.preload('/low_poly_earth.gltf')