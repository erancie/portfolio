import React, { useState, useMemo, useRef, useEffect, useCallback, createContext, useContext, Suspense, useLayoutEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useGLTF } from '@react-three/drei'
import { animated, useSpring, useTransition, config } from "@react-spring/three"
import { ScrollProvider, useScrollContext } from './utils/useScrollContext'
import Grid from './Grid'
import { Model } from "../../static/models/blue-globe/Scene"
import { Earth } from "../../static/models/earth/Earth"
import EarthRaster from "./EarthRaster"
import { PolyEarth } from "../../static/models/gltf-models/PolyEarth"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()
  useFrame(() => {
    orbitRef.current.update()
  })
  return (
    <orbitControls
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

//OPT: make this a wrapper for several globes - pass in position and rotation rate from app scene
const Sphere = () => {

  const groupRef = React.useRef()
  const rotationRef = React.useRef()
 
  const scrollPos = useScrollContext()

  const [ positionZ, rotationZ ] = (()=> {
    const thold = 1200
    if(scrollPos < thold)
      return [ 4.1-scrollPos/300, Math.PI/2-scrollPos*((Math.PI/2)/thold) ]
    return [ 4.1-thold/300, 0 ] 
  })()
  
  //animate changes in scale & position w/ spring
  const { position, rotation } = useSpring({ 
    position: [0, .55, positionZ],
    rotation: [0, 0, rotationZ]
  })

  useFrame(() => { rotationRef.current.rotation.y -= .0008 })

  return ( 
    <>
      <animated.group
        ref={groupRef}
        position={position} 
        rotation={rotation}
        scale={[1.35, 1.35, 1.35]}
      >
          <animated.group 
          ref={rotationRef} >
            <Suspense fallback={null}>
                  {/* <EarthRaster /> */}
                  <PolyEarth />
                  {/* <Earth/> */}
                  {/* <primitive object={scene} /> */}
            </Suspense>
          </animated.group>
        {/* <Grid size={5} /> */}
      </animated.group>    
    </>
  )
}

const Scene = () => {

  // const scroll = useScrollContext()

  const isBrowser = typeof window !== "undefined"
  return (
    <>
      {isBrowser && (
        <Canvas
          resize={{ scroll: false }}
          camera={{ position: [0, 0, 5.1] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          {/* works without bridge now??? */}
          {/* <ScrollProvider value={scroll}> */}
              {/* <Grid size={5} /> */}
              {/* <ambientLight intensity={.1} /> */}
              <pointLight color="white" intensity={7} position={[-8, 15, 13]} />
              {/* <pointLight color="white" intensity={.3} position={[-6, 12, 6]} /> */}
              <fog attach="fog" args={["black", 10, 25]} />
              <Controls />
              <Suspense>
                <Sphere />
              </Suspense>
          {/* </ScrollProvider> */}
        </Canvas>
      )}
    </>
  )
}

export default Scene
// export default React.memo(Scene)


// controls sandbox
// https://codesandbox.io/s/react-three-fiber-lighting-essentials-qwxb8?file=/src/App.js









  //IN SPHERE
  //
  //TODO:-------- globe to fade in when loaded -------- //////////////////////////
  // const [show, setShow] = useState(false)
  // const transition = useTransition(show, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0.5 },
  //   config: { duration: 2000 },
  //   // config: config.molasses,
  //   onRest: () => setShow((curr)=>!curr),
  //   trail: 100
  // })
  // return transition( ({ opacity }, item) => (    
  // item && <>

  // const obj = useLoader(OBJLoader, '/models/wire-globe.obj')
  // const { scene, nodes, materials } = useGLTF('/models/gemer/scene.gltf')

  // const orange = new THREE.Color(0xffa500);
  
  
  //find out how to change gltf materials - colors, roughness etc..
  
  // 3 ways to use 3D model mesh objects (Geometry nodes & Materials) 
  //  -use three mesh of gemoetry and a material
  //  -import obj or gltf file and pass into primitive as 'object' 
  //  -use gltfjsx to convert nodes and materials from gltf into R3F mesh JSX

  //gltf files house nodes - can refer to texture files