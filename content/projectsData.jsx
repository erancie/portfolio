import html from '/static/svg/html.svg'
import css from '/static/svg/css.svg'
import js from '/static/svg/js.svg'
import react from '/static/svg/react.svg'
import node from '/static/svg/node.svg'
import express from '/static/svg/express.svg'
import mongodb from '/static/svg/mongodb.svg'
import bootstrap from '/static/svg/bootstrap.svg'
import openai from '/static/svg/openai.svg'
import wordpress from '/static/svg/wordpress.svg'
import speechRec from '/static/svg/speechrec.svg'
import sass from '/static/svg/sass.svg'
import svg from '/static/svg/svg.svg'
import webpack from '/static/svg/webpack.svg'
import three from '/static/svg/three.svg'
import gsap from '/static/svg/gsap.svg'
import gatsby from '/static/svg/gatsby.svg'
import firebase from '/static/svg/firebase.svg'
import mailchimp from '/static/svg/mailchimp.svg'
import imagekit from '/static/svg/imagekit.svg'
import figma from '/static/svg/figma.svg'
import blazor from '/static/svg/blazor.svg'
import dotnet from '/static/svg/dotnet.svg'
import csharp from '/static/svg/csharp.svg'
import syncfusion from '/static/svg/syncfusion.svg'
// import syncfusion from '/static/svg/syncfusion.png'

const url = 'https://ik.imagekit.io/kv4ohthhz/mern1-1280_qH3SRTAhB'

const IKRoot = 'https://ik.imagekit.io/kv4ohthhz'


const gptDesktop = '/clive-desk_ESSblQT1c.png'
const gptLaptop = '/clive-lap_RChUU6xXw.png?'
const gptTablet = '/clive-tab_OIXrLhuBC.png'
const gptMobile = '/clive-mob-walk_zNEL2jYL3.png'

const circularDesktop = '/circular-desktop_O2p2xyWdK.PNG'
const circularLaptop = '/circular-laptop_cOy72qQILd.PNG'
const circularTablet = '/circular-tablet_cNLvk29I5.PNG'
const circularMobile = '/circular-mobile_zxQx1vTbI.PNG'

const finsightDesktop = '/finsight-laptop_h79HB0BUi.PNG?updatedAt=1698581192993'
const finsightLaptop = '/finsight-desktop_2Tri_N31nq.PNG?updatedAt=1698581762816'
const finsightTablet = '/finsight-tablet_y80wVEUfZ.PNG?updatedAt=1698581700668'
const finsightMobile = '/finsight-mobile_IkmA-rwcs.PNG?updatedAt=1698581782017'

const psgDesktop = '/psg-desktop_iUe4PJHEC.PNG'
const psgLaptop = '/psg-laptop_o0fPjWkZl.PNG'
const psgTablet = '/psg-tablet_nbD2CNwVi.PNG'
const psgMobile = '/psg-mobile-2_F7MRd90mr.PNG'

const mernDesktop = '/mern-desk_rE4mgwQCZc.JPG'
const mernLaptop = '/mern-lap_QCo7qLXgKH.JPG'
const mernTablet = '/mern-tab_6w2R3dDAM.JPG'
const mernMobile = '/mern-mob_2X3tVvmyG.JPG'

const honeyDesktop = '/honey-desk-2_nu764Oqyo.PNG'
const honeyLaptop = '/honey-lap-2_T5x-T05rF.PNG'
const honeyTablet = '/honey-tab-3_I7RMjjk18.PNG'
const honeyMobile = '/honey-mobile_BJW5P7JcQ'


    
export const thisSite = {
  tools: [
    { label: 'React', icon: react, alt: 'React.js Icon' },
    { label: 'Three', icon: three, alt: 'Three.js Icon' },
    { label: 'GSAP', icon: gsap, alt: 'GSAP Icon'  },
    { label: 'Sass', icon: sass, alt: 'Sass Icon'  },
    { label: 'Gatsby', icon: gatsby, alt: 'Gatsby.js Icon' },
    { label: 'Mailchimp', icon: mailchimp, alt: 'Mailchimp Icon'  },
    { label: 'ImageKit', icon: imagekit, alt: 'ImageKit Icon'  },
    { label: 'Figma', icon: figma, alt: 'Figma Icon'  },
  ]
}

const projects = [
  {
    name: 'clever-clive',
    title: 'Clever Clive',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: gptDesktop,
      laptop: gptLaptop,
      tablet: gptTablet,
      mobile: gptMobile
    },
    imgAlt: {
      desktop: 'Clever Clive - AI Bot Social Platform- desktop screenshot',
      laptop: 'Clever Clive - AI Bot Social Platform- laptop screenshot',
      tablet: 'Clever Clive - AI Bot Social Platform- tablet screenshot',
      mobile: 'Clever Clive - AI Bot Social Platform- mobile screenshot'
    },
    desc: 'Your Social AI Asssitant',
    tools: [
      { label: 'ApenAI', icon: openai, alt: 'OpenAI Icon'},
      { label: 'React', icon: react, alt: 'React Icon' },
      { label: 'Speech Recognition', icon: speechRec, alt: 'Speech Recognition Icon' },
      { label: 'Firebase', icon: firebase, alt: 'Google Firebase Icon' },
    ],
    link: 'https://quickstories-60609.web.app/'
  },

  {
    name: 'circular',
    title: 'Circular Economies',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: circularDesktop,
      laptop: circularLaptop,
      tablet: circularTablet,
      mobile: circularMobile
    },
    imgAlt: {
      desktop: 'Circular Economies - desktop screenshot',
      laptop: 'Circular Economies - laptop screenshot',
      tablet: 'Circular Economies - tablet screenshot',
      mobile: 'Circular Economies - mobile screenshot'
    },
    desc: 'A crowd funding platform powered by AI and circular economics.',
    tools: [
      { label: 'HTML', icon: html, alt:'HTML Icon' },
      { label: 'JavaScript', icon: js, alt:'Javascript Icon' },
      { label: 'Sass', icon: sass, alt:'Sass Icon' },
      { label: 'Webpack', icon: webpack, alt:'Webpack Icon' },
      { label: 'SVG', icon: svg, alt:'SVG Icon' },
    ],
    link: 'https://circular-e8a2f.web.app/'
  },

  {
    name: 'finsight',
    title: 'Finsight',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: finsightDesktop,
      laptop: finsightLaptop,
      tablet: finsightTablet,
      mobile: finsightMobile
    },
    imgAlt: {
      desktop: 'Finsight - desktop screenshot',
      laptop: 'Finsight - laptop screenshot',
      tablet: 'Finsight - tablet screenshot',
      mobile: 'Finsight - mobile screenshot'
    },
    desc: 'A collated snapshot of your fiat and crypto holdings.',
    tools: [
      { label: 'React', icon: react, alt: 'React Icon' },
      { label: 'Blazor', icon: blazor, alt: 'Blazor Icon' },
      { label: 'SyncFusion', icon: syncfusion, alt: 'SyncFusion Icon' },
      { label: 'C#', icon: csharp, alt: 'C# Icon' },
      { label: '.NET', icon: dotnet, alt: '.NET Icon' },
      { label: 'Webpack', icon: webpack, alt:'Webpack Icon' },
      ,
    ],
    link: ''
  },

  {
    name: 'psg',
    title: 'PSG Sports',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: psgDesktop,
      laptop: psgLaptop,
      tablet: psgTablet,
      mobile: psgMobile
    },
    imgAlt: {
      desktop: 'PSG Sports - desktop screenshot',
      laptop: 'PSG Sports - laptop screenshot',
      tablet: 'PSG Sports - tablet screenshot',
      mobile: 'PSG Sports - mobile screenshot'
    },
    desc: 'Professional Basketball Services Platform.',
    tools: [
      { label: 'HTML', icon: html, alt:'HTML Icon'},
      { label: 'CSS', icon: css, alt:'CSS Icon'},
      { label: 'JavaScript', icon: js, alt:'Javascript Icon'},
      { label: 'Wordpress', icon: wordpress, alt:'Wordpress Icon'},
    ],
    link: 'https://psgsports.co/'
  },
  
  {
    name:'mern',
    title: 'iService',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: mernDesktop,
      laptop: mernLaptop,
      tablet: mernTablet,
      mobile: mernMobile
    },
    imgAlt: {
      desktop: 'iService Task Platform - desktop screenshot',
      laptop: 'iService Task Platform - laptop screenshot',
      tablet: 'iService Task Platform - tablet screenshot',
      mobile: 'iService Task Platform - mobile screenshot'
    },
    desc: 'Bringing experts and clients together.',
    tools: [
      { label: 'MongoDB', icon: mongodb, alt: 'MongoDB Icon' },
      { label: 'Express', icon: express, alt: 'Express.js Icon' },
      { label: 'React', icon: react, alt: 'React.js Icon' },
      { label: 'Node', icon: node, alt: 'Node.js Icon' },
     ],    
     link: 'https://iservice.onrender.com'
  },

  {
    name: 'whole-honey',
    title: 'Whole Honey',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: honeyDesktop,
      laptop: honeyLaptop,
      tablet: honeyTablet,
      mobile: honeyMobile
    },
    imgAlt: {
      desktop: 'Whole Honey Online Shop - desktop screenshot',
      laptop: 'Whole Honey Online Shop - laptop screenshot',
      tablet: 'Whole Honey Online Shop - tablet screenshot',
      mobile: 'Whole Honey Online Shop - mobile screenshot'
    },
    desc: 'Online shop selling organic honey from Australia.',
    tools: [
      { label: 'HTML', icon: html, alt:'HTML Icon' },
      { label: 'CSS', icon: css, alt:'CSS Icon'},
      { label: 'Bootstrap', icon: bootstrap, alt: 'Bootstrap Icon' },
     ],       
    //  link: 'https://honey-8cd45.web.app/'
  },

]

export default projects