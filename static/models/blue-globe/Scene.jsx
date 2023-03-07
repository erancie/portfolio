/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: SHARK FIN (https://sketchfab.com/mo7amed85)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-downloadable-pixel-earth-low-poly-139cb0a9b41a4e088dd42ca4871a3125
Title: Free downloadable PIXEL EARTH ( LOW POLY )
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/blue-globe/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            {/* <group name="Sphere" position={[0.5, -0.26, 1.88]}> */}
            <group name="Sphere" position={[0, 0, 0]}>
              <mesh name="Sphere_0" geometry={nodes.Sphere_0.geometry} material={materials['Material.001']} />
            </group>
            <group name="Lamp" position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]}>
              <group name="Lamp_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
