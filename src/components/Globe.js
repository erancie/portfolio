import React, { useState, useRef, useEffect, useCallback } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { a } from "@react-spring/three"
// import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'

import "../styles/box.module.css"
import useScrollListener from "./utils/useScrollListener"

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

const Sphere = () => {
  const outterRef = React.useRef()
  const innerRef = React.useRef()
  const matRef = React.useRef()
  const outterMap = useLoader(TextureLoader, 'earth-clouds-8k.jpg')
  const innerNightMap = useLoader(TextureLoader, 'earth-night-8k.jpg')
  // const innerDayMap = useLoader(TextureLoader, 'earth-8k.jpg')

  // https://www.solarsystemscope.com/textures/
 
  const [scale, setScale] = useState([1, 1, 1])
  // const scale = useRef([1, 1, 1])

  const handleScroll = useCallback(()=>{    
    if(window.scrollY < 1280)
      // scale = [1-window.scrollY/2500, 
      //           1-window.scrollY/2500, 
      //           1-window.scrollY/2500]
      setScale([1-window.scrollY/2500, 
                1-window.scrollY/2500, 
                1-window.scrollY/2500])
  }, [])

  useScrollListener(scale, handleScroll)

  useFrame(() => {
    innerRef.current.rotation.x += .0002
    outterRef.current.rotation.x += .0002
  })

  return (
    <>
      <a.mesh
        ref={innerRef}
        scale={scale}
        position={[0, 1.4, 4.48]} 
        rotation={[2*Math.PI, 0, Math.PI/2]}
      >   
        <sphereGeometry args={[1, 80, 80]} />
        <meshBasicMaterial
          ref={matRef} 
          // map={innerDayMap}
          map={innerNightMap}
          // map={surface}
          color="#fff"
          />
      </a.mesh>

      <a.mesh
        ref={outterRef}
        scale={scale}
        position={[0, 1.4, 4.48]} 
        rotation={[0, 0, Math.PI/2]}
      >   
        <sphereGeometry args={[1.03, 80, 80]} />
        <meshStandardMaterial
          transparent
          opacity={.15}
          // map={outterMap}
          alphaMap={outterMap} 
          // emissiveMap={outterMap}
          emissive={"white"}
          emissiveIntensity={100}
          />
      </a.mesh>
    </>
  )
}

 const Globe = () => {
  const isBrowser = typeof window !== "undefined"
  return (
    <>
      {isBrowser && (
        <Canvas
          camera={{ position: [0, 0, 5.1] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          {/* <ambientLight intensity={.03} /> */}
          <pointLight color="white" intensity={.8} position={[-1, .6, -8]} />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />

          <Sphere />

        </Canvas>
      )}
    </>
  )
}



export default Globe


// onPointerOver={() => setHovered(true)}
// onPointerOut={() => setHovered(false)}
// scale={props.scale}



// const [hovered, setHovered] = useState(false)
// const [active, setActive] = useState(false)
// const props = useSpring({
//   scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//   color: hovered ? "hotpink" : "gray",
// })