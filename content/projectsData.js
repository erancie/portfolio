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

const projects = [
  {
    name: 'circular',
    title: 'Circular Banking',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: circularDesktop,
      laptop: circularLaptop,
      tablet: circularTablet,
      mobile: circularMobile
    },
    desc: 'A crowd funding platform powered by AI and circular economics',
    tools: [],
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
    desc: 'Professional Basketball Platform',
    tools: [],
    link: 'https://psgsports.co/'
  },
  
  {
    name:'mern',
    title: 'MERN Platform',
    imgRoot: IKRoot,
    imgSrc: {
      desktop: mernDesktop,
      laptop: mernLaptop,
      tablet: mernTablet,
      mobile: mernMobile
    },
    desc: 'A full stack project bringing experts and clients together.',
    tools: ['Mongo', 'Express', 'React', 'Node'],
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
    desc: 'E-commerce website selling organic honey',
    tools: [],
    link: 'https://honey-8cd45.web.app/'
  },


  // {
  //   name: 'gpt',
  //   title: 'GPT-3 App',
  //   imgRoot: IKRoot,
  //   imgSrc: {
  //     desktop: gptDesktop,
  //     laptop: gptLaptop,
  //     tablet: gptTablet,
  //     mobile: gptMobile
  //   },
  //   desc: 'A front end implementation using the GPT-3 API',
  //   tools: ['React', 'GPT-3', 'Speech Recognition'],
  //   link: ''
  // },

]

export default projects