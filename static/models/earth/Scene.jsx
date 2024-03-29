/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Jacobs Development (https://sketchfab.com/Jacobs_Development)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-planet-earth-7b1dc4f802a54a6297e7a46888a85f77
Title: Low Poly Planet Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_Planet_0.geometry} material={materials.Planet} position={[-0.05, 1.25, 0.07]} rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
