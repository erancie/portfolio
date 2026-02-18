import React from 'react'
import MosaicGridPortrait from './MosaicGridPortrait'

const designs = [
  { name: 'wd3-1', src: 'https://ik.imagekit.io/kv4ohthhz/econic-1_MVSHV3LGg.PNG' },
  { name: 'wd3-2', src: 'https://ik.imagekit.io/kv4ohthhz/econic-2_gaAcvly7G.PNG' },
  { name: 'wd3-4', src: 'https://ik.imagekit.io/kv4ohthhz/econic-4_E746MTrdl.PNG' },
  { name: 'wd3-3', src: 'https://ik.imagekit.io/kv4ohthhz/econic-5_s-gt4d55M.png' },

]

export default function Design2() {
  return (
    <section id="design2" className="design design2">
      <MosaicGridPortrait designs={designs} variant="landscape" title="Econic" />
    </section>
  )
}
