import React, { useEffect, useRef } from "react"
import { useProgress } from "@react-three/drei"
import { useModelLoad } from "./utils/ModelLoadContext"

/**
 * Must be rendered inside Canvas. Reports Three.js loader progress
 * to ModelLoadContext and calls reportReady when the 3D model is loaded.
 */
export default function ModelLoadReporter() {
  const { active, progress, loaded, total } = useProgress()
  const { setProgress, reportReady } = useModelLoad()
  const reportedRef = useRef(false)

  useEffect(() => {
    setProgress(progress)
  }, [progress, setProgress])

  useEffect(() => {
    const hasLoaded = total > 0
    const done = hasLoaded && (!active && (progress >= 100 || loaded >= total))
    if (done && !reportedRef.current) {
      reportedRef.current = true
      setProgress(100)
      reportReady()
    }
  }, [active, progress, loaded, total, setProgress, reportReady])

  return null
}
