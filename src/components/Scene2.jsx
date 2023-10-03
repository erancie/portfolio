import React, { useState, useMemo, useRef, useEffect, useCallback, createContext, useContext, Suspense, useLayoutEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { animated, useSpring, useTransition, config } from "@react-spring/three"
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

  useFrame(() => { rotationRef.current.rotation.y -= .0003 })

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
              <PolyEarth />
            </Suspense>
          </animated.group>
      </animated.group>    
    </>
  )
}

const Scene = () => {
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
          }} >
          <pointLight color="white" intensity={7} position={[-8, 15, 13]} />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />
          <Suspense>
            <Sphere />
          </Suspense>
        </Canvas>
      )}
    </>
  )
}

export default React.memo(Scene)