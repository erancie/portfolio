const url = 'https://ik.imagekit.io/kv4ohthhz/mern1-1280_qH3SRTAhB'


const IKRoot = 'https://ik.imagekit.io/kv4ohthhz'

const mernDesktop = '/mern-home-desk_-QhnLFzBJ'
const mernLaptop = '/mern-task-lap_3dZTcgxpi'
const mernTablet = '/mern-new-tab_0nAsdBvUP'
const mernMobile = '/mern-experts-mob_XYr5kcQMw'

const honeyDesktop = '/honey-desktop_KU_SERKnt'
const honeyLaptop = '/honey-laptop_UGfEzF1Hw'
const honeyTablet = '/honey-tablet_VX5Yrl8EH'
const honeyMobile = '/honey-mobile_BJW5P7JcQ'

const projects = [
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
    link: ''
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