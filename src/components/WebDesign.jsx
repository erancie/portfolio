import React from 'react'
import DesignMosaicGrid from './DesignMosaicGrid'

const designs = [
  { name: 'datakey-nn8', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn5_blfRprsrl.PNG?updatedAt=1709099966509' },
  { name: 'datakey-nn1', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn1_a6AxIEhKZ.PNG?updatedAt=1709099968755' },
  { name: 'datakey-nn2', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn4_zC3UJnBaom.PNG?updatedAt=1709099966615' },
  { name: 'datakey-nn3', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn7_gvFBoLQnf.PNG?updatedAt=1709099966526' },
  { name: 'datakey-nn4', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn5_blfRprsrl.PNG?updatedAt=1709099966509' },
  { name: 'datakey-nn5', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn2_FFJyGt5SiQ.PNG?updatedAt=1709099966417' },
  { name: 'datakey-nn6', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn3_bA_uaUyZ3.PNG?updatedAt=1709099966348' },
  { name: 'datakey-nn7', src: 'https://ik.imagekit.io/kv4ohthhz/datakey-nn6_BKzAY3MBm.PNG?updatedAt=1709099966350' },
]

export default function WebDesign() {
  return (
    <DesignMosaicGrid
      sectionId="web-design"
      title="UI  UX"
      designs={designs}
      variant="portrait"
    />
  )
}
