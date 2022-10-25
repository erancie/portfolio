import React, { useState, useMemo, useRef, useEffect, useCallback, createContext, useContext } from "react"
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
  const outterMap = useLoader(TextureLoader, 'earth-clouds-2k-lossy.jpg')
  const innerNightMap = useLoader(TextureLoader, 'earth-night-2k-lossless.jpg')
  // const innerDayMap = useLoader(TextureLoader, 'earth-8k.jpg')
  // https://www.solarsystemscope.com/textures/
 
  const scrollPos = useScrollContext()
  // const scrollPos = useScrollStore((s)=>s.scrollPos)
  // const scrollPos = 0



  //scale according to scroll
  const [scaling, positionZ] = useMemo(() => {
    const th = 800
    if(scrollPos < th)
      return [1-scrollPos/2500, 4.4-scrollPos/300]
    return [ 1-th/2500, 4.4-th/300 ]
  }, [scrollPos])

  console.log('scroll: ', scrollPos)
  // console.log(`scaling w/ (useMemo): ${scaling}`)


  //animate changes in scale/position w/ spring
  const { scale, position } = useSpring({ 
    scale: [scaling, scaling, scaling],
    position: [0, 1.42, positionZ]
  })

  useFrame(() => {
    innerRef.current.rotation.x += .0002
    outterRef.current.rotation.x += .0002
  })

  return (
    <>
      <animated.mesh
        ref={innerRef}
        scale={[1, 1, 1]}
        // scale={scale}
        position={position} 
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

      {/* -scrollPos/2500 */}

      <animated.mesh
        ref={outterRef}
        scale={[1, 1, 1]}
        // scale={scale}
        position={position} 
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
          emissiveIntensity={.4}
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



//on dep change useCallback returns cb ref --> call once, apply for all dimensions
// const scaling = useCallback(() => {
//   if(scrollPos < 1800)
//     return 1-scrollPos/2500
// }, [scrollPos])
// const s = scaling() 
// console.log(`scaling w/ useCallback: ${scaling}`)
// console.log(`scaling(): ${s}`)

// onPointerOver={() => setHovered(true)}
// onPointerOut={() => setHovered(false)}
// scale={props.scale}



// const [hovered, setHovered] = useState(false)
// const [active, setActive] = useState(false)
// const props = useSpring({
//   scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//   color: hovered ? "hotpink" : "gray",
// })