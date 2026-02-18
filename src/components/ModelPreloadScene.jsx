import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { PolyEarth } from "../../static/models/gltf-models/PolyEarth"
import ModelLoadReporter from "./ModelLoadReporter"

const preloadCanvasStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  pointerEvents: "none",
  zIndex: -1,
  visibility: "hidden",
}

/**
 * Hidden Canvas that preloads the 3D model and reports progress via ModelLoadContext.
 * Renders nothing visible; used only to trigger loading and progress.
 */
export default function ModelPreloadScene() {
  const isBrowser = typeof window !== "undefined"
  if (!isBrowser) return null
  return (
    <Canvas style={preloadCanvasStyle} camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <PolyEarth />
      </Suspense>
      <ModelLoadReporter />
    </Canvas>
  )
}
