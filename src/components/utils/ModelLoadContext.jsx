import React, { createContext, useContext, useState, useRef, useEffect } from "react"

const ModelLoadContext = createContext(null)

export function ModelLoadProvider({ children }) {
  const [progress, setProgress] = useState(0)
  const [isModelReady, setIsModelReady] = useState(false)
  const reportedRef = useRef(false)

  const reportReady = () => {
    if (reportedRef.current) return
    reportedRef.current = true
    setIsModelReady(true)
  }

  const value = {
    progress,
    setProgress,
    isModelReady,
    reportReady,
  }

  return (
    <ModelLoadContext.Provider value={value}>
      {children}
    </ModelLoadContext.Provider>
  )
}

export function useModelLoad() {
  const ctx = useContext(ModelLoadContext)
  if (!ctx) throw new Error("useModelLoad must be used within ModelLoadProvider")
  return ctx
}
