import React from 'react'
import MosaicGridPortrait from './MosaicGridPortrait'

const designs = [
  { name: '4shots', src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/4shots-panel_bamBv0ygn.PNG?updatedAt=1698475443621' },
  { name: 'cb', src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/circle-blue-panel_yJ6zoqywg.PNG?updatedAt=1698502843019' },
  { name: 'circles', src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/circle2-panel_sDuLFglqe.PNG?updatedAt=1698503075084' },
  { name: 'cb2', src: 'https://ik.imagekit.io/kv4ohthhz/tr:q-100/circle1-panel_XLEfzN80d.PNG?updatedAt=1698502842445' },
]

export default function MobDesign() {
  return (
    <section id="design" className="design mob-design">
      <MosaicGridPortrait designs={designs} variant="landscape" title='Mobile Native' />
    </section>
  )
}
