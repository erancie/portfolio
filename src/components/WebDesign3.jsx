import React from 'react'
import DesignMosaicGrid from './DesignMosaicGrid'

const designs = [
  { name: 'wd3-1', src: 'https://ik.imagekit.io/kv4ohthhz/econic1_fiR6UMxza.PNG' },
  { name: 'wd3-2', src: 'https://ik.imagekit.io/kv4ohthhz/econic2_FeLEhRu51.PNG' },
  { name: 'wd3-3', src: 'https://ik.imagekit.io/kv4ohthhz/econic3_ugiTcb-t4s.PNG' },
  { name: 'wd3-4', src: 'https://ik.imagekit.io/kv4ohthhz/econic4_Ar-K4JLtE.PNG' },
  { name: 'wd3-5', src: 'https://ik.imagekit.io/kv4ohthhz/econic5_7FxB4fn5bQ.PNG' },
  { name: 'wd3-6', src: 'https://ik.imagekit.io/kv4ohthhz/econic6_WklrkR0_M.PNG' },
  { name: 'wd3-7', src: 'https://ik.imagekit.io/kv4ohthhz/econic5_7FxB4fn5bQ.PNG' },
  { name: 'wd3-8', src: 'https://ik.imagekit.io/kv4ohthhz/econic8_XZjK7ixUPH.PNG' },
  { name: 'wd3-9', src: 'https://ik.imagekit.io/kv4ohthhz/econic9_KJ4lrUIiZ.PNG' },
  { name: 'wd3-10', src: 'https://ik.imagekit.io/kv4ohthhz/econic10_hA8qBdzUk.PNG' },
  { name: 'wd3-11', src: 'https://ik.imagekit.io/kv4ohthhz/econic11_uEpVBdE_F.PNG' },
]

export default function WebDesign3() {
  return (
    <DesignMosaicGrid
      sectionId="web-design3"
      designs={designs}
      variant="landscape"
    />
  )
}
