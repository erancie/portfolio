import React, { useRef } from 'react'
import { useLoader } from "react-three-fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { animated } from "@react-spring/three"

// {/* 2 Three Geometries with 2 raster map materials */}

export default function EarthRaster() {

  const outterMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-60/earth-clouds-2k-lossless_Fx89Vwggc.jpg')
  const innerNightMap = useLoader(TextureLoader, 'https://ik.imagekit.io/kv4ohthhz/tr:q-80/earth-night-8k_dMIDkPbA_.jpg')

return (
    <>
      {/* Earth */}
      <animated.mesh scale={[1, 1, 1]}>   
        <sphereGeometry args={[1, 80, 80]} />
        <meshBasicMaterial
          map={innerNightMap}
          color="#fff"
          />
      </animated.mesh>

      {/* Clouds */}
      <animated.mesh scale={[1, 1, 1]} >   
        <sphereGeometry args={[1.03, 80, 80]} />
        <meshStandardMaterial
          transparent
          opacity={.15}
          alphaMap={outterMap} 
          emissive={"white"}
          emissiveIntensity={.4}
          />
      </animated.mesh>  
    </>
  )
}
