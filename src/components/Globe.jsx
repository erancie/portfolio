import React, { useState, useRef, useEffect, useCallback, createContext, useContext } from "react"
import * as THREE from "three"
// import { useSpring, animated } from '@react-spring/three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { animated, useSpring } from "@react-spring/three"
import "../styles/box.module.css"
import { ScrollProvider, useScrollContext } from './utils/scrollContext'
import { useScrollStore } from './../store'


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
 
  const scrollPos = useScrollContext()
  // const scrollPos = useScrollStore((s)=>s.scrollPos)
  // const scrollPos = 0

  //scale according to scroll
  const scaling = 1-scrollPos/2500
  //animate changes in scale w/ spring
  const { scale } = useSpring({ scale: [scaling, scaling, scaling] })

  useFrame(() => {
    innerRef.current.rotation.x += .0002
    outterRef.current.rotation.x += .0002
  })

  return (
    <>
      <animated.mesh
        ref={innerRef}
        scale={scale}
        position={[0, 1.44, 4.2]} 
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
      </animated.mesh>

      <animated.mesh
        ref={outterRef}
        scale={scale}
        position={[0, 1.44, 4.2]} 
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
      </animated.mesh>
    </>
  )
}

const Globe = () => {

  const scroll = useScrollContext()

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
          <ScrollProvider value={scroll}>
              {/* <ambientLight intensity={.03} /> */}
              <pointLight color="white" intensity={.8} position={[-1, .6, -8]} />
              <fog attach="fog" args={["black", 10, 25]} />
              <Controls />
              <Sphere />
          </ScrollProvider>
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