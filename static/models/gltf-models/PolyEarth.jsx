/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 low_poly_earth.gltf
*/
import * as THREE from "three"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { MeshStandardMaterial } from "three"


export function PolyEarth(props) {

  const { nodes, materials } = useGLTF('/models/gltf-models/low_poly_earth.gltf')
  
  const orange = new THREE.Color(0xb87c26);
  const green = new THREE.Color(0x0f613e);
  const darkblue = new THREE.Color(0x19374c);
  const darkblue2 = new THREE.Color(0x19273c);
  const teal = new THREE.Color(0x1d868a);
  const light = new THREE.Color(0x749c8d);
  const brown = new THREE.Color(0x989260);
  const silver = new THREE.Color(0x1c1e10);
  const iron = new THREE.Color(0xadc3c7);

  // const outterMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-60/earth-clouds-2k-lossless_Fx89Vwggc.jpg')
  // const innerNightMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-80/earth-night-8k_dMIDkPbA_.jpg')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere004.geometry} 
            material={materials.water} 
            // material-color={iron}
            material-color={darkblue2}
            // material-transparent
            // material-opacity={.}
            // material-map={outterMap}
            // material-color={teal}
      >
      </mesh>
      {/* <mesh scale={[1, 1, 1]}>   
        <sphereGeometry args={[.985, 80, 80]} />
        <meshBasicMaterial
          // map={innerNightMap}
          color={darkblue}
          />
      </mesh> */}
      <mesh geometry={nodes.Sphere004_1.geometry} 
            // material={materials.earth} 
            // material-color={green}
            // material-color={orange}
            // material-color={brown}
            // transparent
            // material-opacity={.3}

      >
        <meshStandardMaterial 
          material={materials.earth} 
          color={darkblue}
          // color={'white'}
          // color={green}
          // normalMap={outterMap}
          // transparent
          // opacity={0.99}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/low_poly_earth.gltf')
