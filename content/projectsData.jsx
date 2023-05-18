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

const url = 'https://ik.imagekit.io/kv4ohthhz/mern1-1280_qH3SRTAhB'

const IKRoot = 'https://ik.imagekit.io/kv4ohthhz'

const mernDesktop = '/mern-home-desk_-QhnLFzBJ'
const mernLaptop = '/mern-task-lap_3dZTcgxpi'
const mernTablet = '/mern-new-tab_0nAsdBvUP'
const mernMobile = '/mern-experts-mob_XYr5kcQMw'

const honeyDesktop = '/honey-desk-2_nu764Oqyo.PNG'
const honeyLaptop = '/honey-lap-2_T5x-T05rF.PNG'
const honeyTablet = '/honey-tab-3_I7RMjjk18.PNG'
const honeyMobile = '/honey-mobile_BJW5P7JcQ'

const psgDesktop = '/psg-desktop_iUe4PJHEC.PNG'
const psgLaptop = '/psg-laptop_o0fPjWkZl.PNG'
const psgTablet = '/psg-tablet_nbD2CNwVi.PNG'
const psgMobile = '/psg-mobile-2_F7MRd90mr.PNG'

const circularDesktop = '/circular-desktop_O2p2xyWdK.PNG'
const circularLaptop = '/circular-laptop_cOy72qQILd.PNG'
const circularTablet = '/circular-tablet_cNLvk29I5.PNG'
const circularMobile = '/circular-mobile_zxQx1vTbI.PNG'

const tools = {
  html: html,
  css: css,
  js: js,
  react: react,
  node: node,
  express: express,
  mongodb: mongodb,
  sass: sass,
  svg: svg,
  bootstrap: bootstrap,
  gpt: openai,
  speechRec: speechRec,
  wordpress: wordpress,
  webpack: webpack,
  firebase: firebase,
  three: three,
  gsap: gsap,
  gatsby: gatsby,            
}
    //use this object schema and use obejcts for projects tools when figure out 'for in' for jsx {} error
    // const tools = {
    //           html: html ,
    //           css: css ,
    //           js: js ,
    //         },
export const thisSite = {
  tools: [
    { label: 'react', icon: react },
    { label: 'three', icon: three },
    { label: 'gsap', icon: gsap },
    { label: 'sass', icon: sass },
    { label: 'gatsby', icon: gatsby },
    { label: 'mailchimp', icon: mailchimp },
  ]
}

const projects = [
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
    desc: 'A crowd funding platform powered by AI and circular economics.',
    tools: [
      { label: 'html', icon: html },
      { label: 'javascript', icon: js },
      { label: 'sass', icon: sass },
      { label: 'webpack', icon: webpack },
      { label: 'svg', icon: svg },
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
    desc: 'Professional Basketball Platform.',
    tools: [
      { label: 'html', icon: html },
      { label: 'css', icon: css },
      { label: 'javascript', icon: js },
      { label: 'wordpress', icon: wordpress },

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
    desc: 'A full stack project bringing experts and clients together.',
    tools: [
      { label: 'mongo', icon: mongodb },
      { label: 'express', icon: express },
      { label: 'react', icon: react },
      { label: 'node', icon: node },

     ],    
     link: 'https://young-bastion-06311.herokuapp.com/'
  },

  {
    name: 'honey',
    title: 'Whole Honey',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: honeyDesktop,
      laptop: honeyLaptop,
      tablet: honeyTablet,
      mobile: honeyMobile
    },
    desc: 'E-commerce website selling organic honey.',
    tools: [
      { label: 'html', icon: html },
      { label: 'css', icon: css },
      { label: 'bootstrap', icon: bootstrap },

     ],       
     link: 'https://honey-8cd45.web.app/'
  },
  // {
  //   name: 'gpt',
  //   title: 'GPT-3 App',
  //   imgRoot: IKRoot,
  //   imgSrc: {
  //     desktop: null,
  //     laptop: null,
  //     tablet: null,
  //     mobile: null
  //   },
  //   desc: 'A front end implementation using the GPT-3 API',
  //   tools: [
  //     { label: 'openai', icon: openai },
  //     { label: 'react', icon: react },
  //     { label: 'speech recognition', icon: speechRec },
  //   ],
  //   link: ''
  // },

]

export default projects