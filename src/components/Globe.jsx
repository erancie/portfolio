import React, { useState, useMemo, useRef, useEffect, useCallback, createContext, useContext, Suspense } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { animated, useSpring, useTransition, config } from "@react-spring/three"
import "../styles/box.module.css"
import { ScrollProvider, useScrollContext } from './utils/useScrollContext'
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
  const outterMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-20/earth-clouds-2k-lossless_Fx89Vwggc.jpg')
  const innerNightMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-90/earth-night-2k-lossless_HedixKXNh.jpg')
  const scrollPos = useScrollContext()
  
  //get Z coord according to scroll position
  const positionZ = useMemo(() => {
    const thold = 800
    if(scrollPos < thold)
      return 4.4-scrollPos/300
    return 4.4-thold/300 
  }, [scrollPos])

  //animate changes in scale/position w/ spring
  const { position } = useSpring({ 
    position: [0, 1.4, positionZ]
  })

  useFrame(() => {
    innerRef.current.rotation.x += .0002
    outterRef.current.rotation.x += .0002
  })

  //TODO:-------- globe to fade in when loaded --------

  // const [show, setShow] = useState(false)

  // const transition = useTransition(show, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0.5 },
  //   config: { duration: 2000 },
  //   // config: config.molasses,
  //   onRest: () => setShow((pre)=>!pre),
  //   trail: 100
  // })

  // return transition( ({ opacity }, item) => (    
  // item && <>

  return ( <>

      <animated.mesh
        ref={innerRef}
        scale={[1, 1, 1]}
        transparent
        // opacity={opacity}
        // opacity={ opacity.to({ range: [0.0, 1.0], output: [0, 1] }) }
        position={position} 
        rotation={[2*Math.PI, 0, Math.PI/2]}
      >   
        <sphereGeometry args={[1, 80, 80]} />
        <meshBasicMaterial
          // transparent
          // opacity={opacity}
          ref={matRef} 
          // map={innerDayMap}
          map={innerNightMap}
          // map={surface}
          color="#fff"
          />
      </animated.mesh>

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
    // ) 
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
              <Suspense>
                <Sphere />
              </Suspense>
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
// const [hovered, setHovered] = useState(false)
// const [active, setActive] = useState(false)



//use memo returns a value from a function when its dependencies change
//are props these dependencies when memoizing functional components?



