import React, { useState, useMemo, useRef, useEffect, useCallback, createContext, useContext, Suspense } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useLoader, useThree, useFrame } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { animated, useSpring, useTransition, config } from "@react-spring/three"
// import "../styles/box.module.css"
import { ScrollProvider, useScrollContext } from './utils/useScrollContext'
import Grid from '../components/Grid'

// import { useGLTF } from '@react-three/drei'

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
  const outterRef = React.useRef()
  const innerRef = React.useRef()
  const matRef = React.useRef()
  const outterMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-20/earth-clouds-2k-lossless_Fx89Vwggc.jpg')
  const innerNightMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-90/earth-night-2k-lossless_HedixKXNh.jpg')
  const scrollPos = useScrollContext()




  //get Z pos and rotation according to scroll position
  const [ positionZ, rotationZ ] = useMemo(() => {
    const thold = 800
    if(scrollPos < thold)
      return [ 4.1-scrollPos/300, Math.PI/2-scrollPos*((Math.PI/2)/thold) ]
    return [ 4.1-thold/300, 0 ] 
  }, [scrollPos])

  //animate changes in scale & position w/ spring
  const { position, rotation } = useSpring({ 
    position: [0, 1.55, positionZ],
    rotation: [0, 0, rotationZ]
  })

  useFrame(() => {
    innerRef.current.rotation.y -= .0003 
    // outterRef.current.rotation.y -= .0003 
    // groupRef.current.rotation.y -= .0003 
      //every time scroll changes it sets new rotation transform, map is put back at beginning
      //then useframe restarts rotation from start new rotation setting 
      //have to use group container that transforms its rotation on scroll
      //then have inner mesh that will keep rotating via useFrame relative to its parent group's no matter its transformed rotation
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

  const obj = useLoader(OBJLoader, '/models/scene.obj')
  const gltf = useLoader(GLTFLoader, '/models/gemer/scene.gltf')

  const orange = new THREE.Color(0xffa500);
  const crimson = new THREE.Color(0xdc143c);
  const teal = new THREE.Color(0x008080);
  const steelblue = new THREE.Color(0x4682b4);
  
  return ( <>
    <animated.group
      ref={groupRef}
      position={position} 
      rotation={rotation}
      scale={[.2, .2, .2]}
    >
        <animated.group 
        // args={[.1]} 
        ref={innerRef} >
          <Suspense fallback={null}>
            <primitive object={gltf.scene} color={orange}/>
          </Suspense>
        </animated.group>

      {/* <Grid size={5} /> */}

      {/* <animated.mesh
        ref={innerRef}
        scale={[1, 1, 1]}
      >   
        <sphereGeometry args={[1, 80, 80]} />
        <meshBasicMaterial
          ref={matRef} 
          map={innerNightMap}
          // map={surface}
          color="#fff"
          />
      </animated.mesh>

      <animated.mesh
        ref={outterRef}
        scale={[1, 1, 1]}
        // scale={scale}
        // position={position} 
        // rotation={rotation}
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
      </animated.mesh> */}
    </animated.group>      
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
          resize={{ scroll: false }}
          camera={{ position: [0, 0, 5.1] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          
          <ScrollProvider value={scroll}>
              {/* <Grid size={5} /> */}
              <ambientLight intensity={.3} />
              <pointLight color="white" intensity={50} position={[-5, 8, 6]} />
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


// controls sandbox
// https://codesandbox.io/s/react-three-fiber-lighting-essentials-qwxb8?file=/src/App.js



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



  //change degree of rotation of x and y based on scroll position
      //dont need to do this - just wrap in group to change rotation from scroll
        // & constantly change rotation of inner mesh w useframe
  // let rotateX = .0002 - scrollPos*(.0002/thold)
  // let rotateY = 0 + scrollPos*(.0002/thold)

  // useFrame(() => {
    // if(scrollPos < 800){
    //   innerRef.current.rotation.x += rotateX
    //   outterRef.current.rotation.x += rotateX
    //   innerRef.current.rotation.y -= rotateY
    //   outterRef.current.rotation.y -= rotateY
    // }
    // else{
    //   innerRef.current.rotation.y -= .0002
    //   outterRef.current.rotation.y -= .0002
    // }
  // })