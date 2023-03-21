import React from 'react'
import { useScrollContext } from './utils/useScrollContext'
import { useScrollStore } from '../store'

export default function LandingHeaders() {

  const scrollPos = useScrollContext()
    // console.log(scrollPos)
    // console.log(scrollPos/100)
  return (
         <div style={ 
                scrollPos < 550 
                ? { transform:`scale(${1-scrollPos/550})` } 
                : { display:`none` } } 
              className="landing"> 
                    {/* { transform:`scale(.0)` } */}





          <div className="logo-wrapper">



            <svg className='logo-landing'  viewBox="0 0 458 479" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#paint0_linear_12_2208)" fill-opacity="0.25" d="M302.931 79.4067C313.743 79.5716 323.688 85.3581 329.173 94.6763L403.716 221.299C409.335 230.843 409.435 242.66 403.979 252.298L331.831 379.742C326.375 389.38 316.192 395.375 305.117 395.468L158.674 396.709C147.599 396.803 137.315 390.981 131.697 381.437L57.24 254.96C51.7078 245.563 51.52 233.95 56.7453 224.379L128.302 93.3075C133.818 83.2052 144.476 76.9901 155.984 77.1656L302.931 79.4067Z" />
              <path fill='black' fill-opacity="0.25" d="M165.862 405.715C148.355 405.654 132.801 396.228 125.057 381.664C102.755 339.721 76.4248 298.041 51.7313 255.937C51.7313 255.937 105.174 241.141 208.993 226.062C312.811 210.983 408.506 235.02 408.506 235.02C415.073 248.187 406.428 245.67 333.476 380.902C325.177 396.287 308.363 406.214 290.327 406.151L165.862 405.715Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M301.15 77.0027C315.23 76.8086 328.322 84.2198 335.401 96.3926L406.685 218.966C413.653 230.947 413.739 245.725 406.911 257.786L336.005 383.037C329.177 395.098 316.461 402.629 302.603 402.82L160.822 404.775C146.742 404.969 133.651 397.558 126.571 385.385L55.2872 262.811C48.3197 250.831 48.2338 236.052 55.0616 223.992L119.085 110.898L57.9575 222.866C52.7321 232.437 52.92 244.05 58.4521 253.447L131.886 378.187C137.505 387.731 147.788 393.552 158.863 393.459L303.291 392.235C314.366 392.141 324.549 386.146 330.005 376.508L401.159 250.819C406.616 241.181 406.516 229.364 400.897 219.82L327.377 94.9343C321.891 85.6161 311.947 79.8296 301.135 79.6648L209.469 78.2668L301.15 77.0027ZM264.432 266.8L257.325 258.965C256.575 258.353 255.799 257.773 254.998 257.224L255.451 256.898L181.843 175.749L188.179 171.655L206.676 176.937C207.796 170.785 210.217 165.06 213.938 159.761C217.607 154.405 222.322 149.866 228.083 146.144L251.222 131.194L272.329 154.464L249.19 169.414C246.438 171.192 244.26 173.324 242.655 175.808C241.051 178.292 240.077 180.911 239.733 183.666C239.389 186.421 239.688 189.213 240.63 192.042C241.572 194.871 243.155 197.512 245.38 199.964L280.621 238.816L280.741 238.73C283.075 241.041 285.233 243.493 287.215 246.086L291.164 250.439L290.547 250.838C290.629 250.965 290.711 251.093 290.792 251.222C293.677 255.687 296.024 260.398 297.833 265.356C299.65 270.236 300.861 275.27 301.466 280.457C302.156 285.582 302.214 290.737 301.64 295.922C300.671 304.666 298.145 312.578 294.06 319.659C289.984 326.662 284.742 332.478 278.336 337.107C271.937 341.659 264.596 344.793 256.311 346.508C247.95 348.207 239.004 348.086 229.473 346.145C219.713 344.156 210.981 340.677 203.28 335.705C195.578 330.734 189.201 324.806 184.147 317.922C179.102 310.96 175.429 303.327 173.126 295.025C170.831 286.645 170.168 278.083 171.136 269.339C171.71 264.154 172.886 259.211 174.665 254.509C176.443 249.807 178.729 245.486 181.523 241.545C184.325 237.526 187.632 233.927 191.442 230.747C195.175 227.551 199.28 224.906 203.756 222.811L268.307 296.728C268.828 295.568 269.234 294.385 269.525 293.178C269.739 291.956 269.914 290.726 270.051 289.487C270.394 286.392 270.301 283.327 269.773 280.292C269.244 277.256 268.349 274.344 267.086 271.555C266.315 269.887 265.431 268.302 264.432 266.8ZM205.2 267.257C204.499 268.618 203.991 270.018 203.674 271.456C203.366 272.818 203.127 274.273 202.955 275.82C202.475 280.153 202.828 284.419 204.014 288.617C205.131 292.722 206.992 296.503 209.595 299.961C212.207 303.342 215.499 306.267 219.469 308.737C223.362 311.192 227.884 312.944 233.033 313.993C234.186 314.228 235.497 314.455 236.966 314.675C238.443 314.818 239.963 314.93 241.526 315.011C243.021 314.999 244.481 314.94 245.907 314.835C247.334 314.73 248.619 314.477 249.764 314.078L205.2 267.257ZM269.368 179.653C262.574 182.687 260.125 190.2 263.898 196.434L265.954 199.83C269.727 206.063 278.293 208.656 285.087 205.622C291.88 202.587 294.329 195.074 290.556 188.841L288.5 185.445C284.727 179.211 276.161 176.618 269.368 179.653Z" />
              <defs>
                <linearGradient id="paint0_linear_12_2208" x1="220.5" y1="220.5" x2="160" y2="87" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#45A496"/>
                    <stop offset="1" stop-color="#45A496" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>


            <svg className='sparkle-1'  viewBox="0 0 457 497" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="354.418" cy="372.803" rx="74.5659" ry="2.10721" transform="rotate(-143.324 354.418 372.803)" fill="url(#paint0_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="346.455" cy="366.873" rx="51.0971" ry="3.57846" transform="rotate(-42.0747 346.455 366.873)" fill="url(#paint1_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="346.455" cy="366.873" rx="34.4603" ry="3.57846" transform="rotate(88.544 346.455 366.873)" fill="url(#paint2_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="62.2795" cy="223.465" rx="48.9883" ry="1.22179" transform="rotate(-129.304 62.2795 223.465)" fill="url(#paint3_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="62.2773" cy="223.463" rx="29.6269" ry="2.07485" transform="rotate(-28.0546 62.2773 223.463)" fill="url(#paint4_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="62.2773" cy="223.463" rx="19.9806" ry="2.07485" transform="rotate(102.564 62.2773 223.463)" fill="url(#paint5_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="255.129" cy="417.196" rx="57.1945" ry="1.88238" transform="rotate(67.005 255.129 417.196)" fill="url(#paint6_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="247.989" cy="400.372" rx="45.6452" ry="2.49194" transform="rotate(168.255 247.989 400.372)" fill="url(#paint7_radial_0_1)" fill-opacity="0.7"/>
              <ellipse cx="247.989" cy="400.373" rx="27.8656" ry="2.49194" transform="rotate(113.622 247.989 400.373)" fill="url(#paint8_radial_0_1)" fill-opacity="0.7"/>
              <defs>
                <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(354.418 372.803) rotate(90) scale(2.10721 74.5659)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(346.455 366.873) rotate(90) scale(3.57846 51.0971)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(346.455 366.873) rotate(90) scale(3.57846 34.4603)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.2795 223.465) rotate(90) scale(1.22179 48.9883)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint4_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.2773 223.463) rotate(90) scale(2.07485 29.6269)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint5_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.2773 223.463) rotate(90) scale(2.07485 19.9806)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint6_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(255.129 417.196) rotate(90) scale(1.88238 57.1945)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint7_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(247.989 400.372) rotate(90) scale(2.49194 45.6452)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint8_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(247.989 400.373) rotate(90) scale(2.49194 27.8656)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg>
            <svg className='sparkle-2'  viewBox="0 0 463 515" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="149.908" cy="133.135" rx="99.594" ry="2.48393" transform="rotate(-129.568 149.908 133.135)" fill="url(#paint10_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="149.905" cy="133.132" rx="60.2318" ry="3.28828" transform="rotate(-28.3179 149.905 133.132)" fill="url(#paint11_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="149.906" cy="133.132" rx="36.7705" ry="3.28828" transform="rotate(-82.951 149.906 133.132)" fill="url(#paint12_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="354.989" cy="401.635" rx="84.4895" ry="2.10721" transform="rotate(-129.304 354.989 401.635)" fill="url(#paint13_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="354.986" cy="401.631" rx="51.0971" ry="3.57846" transform="rotate(-28.0546 354.986 401.631)" fill="url(#paint14_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="354.986" cy="401.631" rx="34.4603" ry="3.57846" transform="rotate(102.564 354.986 401.631)" fill="url(#paint15_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="62.346" cy="263.22" rx="46.8006" ry="1.16723" transform="rotate(-138.802 62.346 263.22)" fill="url(#paint16_radial_0_1)" fill-opacity="0.35"/>
              <ellipse cx="62.3437" cy="263.22" rx="28.3038" ry="2.17001" transform="rotate(-37.5526 62.3437 263.22)" fill="url(#paint17_radial_0_1)" fill-opacity="0.35"/>
              <defs>
                <radialGradient id="paint10_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(149.908 133.135) rotate(90) scale(2.48393 99.594)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint11_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(149.905 133.132) rotate(90) scale(3.28828 60.2318)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint12_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(149.906 133.132) rotate(90) scale(3.28828 36.7705)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint13_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(354.989 401.635) rotate(90) scale(2.10721 84.4895)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint14_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(354.986 401.631) rotate(90) scale(3.57846 51.0971)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint15_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(354.986 401.631) rotate(90) scale(3.57846 34.4603)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint16_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.346 263.22) rotate(90) scale(1.16723 46.8006)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint17_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.3437 263.22) rotate(90) scale(2.17001 28.3038)">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="titles-wrapper">
            <div className='title-1-container'>
              <h1 className="title-1">Out of this world</h1>
              <h1 className="title-1b">Out of this world</h1>
              <h1 className="title-1c">Out of this world</h1>
              <h1 className="title-1d">Out of this world</h1>
            </div>
            <div className="title-2-container">
              <h1 className="title-2">..experiences on the web</h1>
              <h1 className="title-2b">..experiences on the web</h1>
              <h1 className="title-2c">..experiences on the web</h1>
              <h1 className="title-2d">..experiences on the web</h1>
            </div>
          </div>

        </div>
  )
}


{/* compelling user experiences for brands on the web. </h3> */}
