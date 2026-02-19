import React from 'react'
import MosaicGridPortrait from './MosaicGridPortrait'

const designs = [
  { name: 'omni1', src: 'https://ik.imagekit.io/kv4ohthhz/omni4_LsxuL4dgK.PNG' },
  { name: 'omni2', src: 'https://ik.imagekit.io/kv4ohthhz/omni1b_UwQ-vjaA7.PNG' },
  { name: 'omni3', src: 'https://ik.imagekit.io/kv4ohthhz/omni2_h0hHExUu-.PNG' },
  { name: 'omni4', src: 'https://ik.imagekit.io/kv4ohthhz/omni3_VyxZ47NNL.PNG' },
]

export default function Design3() {
  return (
    <section id="design3" className="design design3 side-viewing">
      <MosaicGridPortrait designs={designs} variant="landscape" title="CyberComply" />
    </section>
  )
}
