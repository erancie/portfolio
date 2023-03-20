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
            <svg className='logo-landing' width="461" height="518" viewBox="0 0 461 518" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M144.306 451.57C130.5 451.57 117.821 446.275 109.554 437.056L67.0839 389.696C65.2797 387.684 63.7096 385.511 62.3948 383.207L35.9392 336.833C35.9392 336.833 85.6986 320.091 182.885 308.565C280.071 297.038 375.757 318.513 375.757 318.513C375.757 318.513 373.766 324.295 370.499 335.439C365.399 352.836 353.252 371.753 350.11 376.479C349.609 377.232 349.125 377.98 348.659 378.749L319.387 427.096C310.355 442.013 292.664 451.569 274.08 451.569L144.306 451.57Z" fill="url(#paint0_radial_0_1)" fill-opacity="0.2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M315.734 170.509C304.843 151.782 284.702 140.38 263.04 140.679L183.633 141.774L267.436 143.052C283.13 143.291 297.566 151.691 305.529 165.217L370.959 276.361C379.115 290.216 379.261 307.369 371.34 321.36L308.15 432.981C300.23 446.972 285.447 455.674 269.371 455.811L141.109 456.897C125.032 457.033 110.105 448.582 101.949 434.728L36.643 323.796C28.6124 310.155 28.3398 293.298 35.925 279.404L93.2475 174.406L35.1609 277.012C24.6566 295.567 24.7888 318.303 35.508 336.735L94.564 438.282C105.455 457.009 125.596 468.411 147.258 468.112L264.717 466.493C286.037 466.199 305.6 454.612 316.104 436.057L375.137 331.779C385.642 313.224 385.509 290.488 374.79 272.056L315.734 170.509Z" fill="#7B77DE"/>
              <path d="M265.327 313.947L239.116 330.882L156.006 239.256L162.343 235.162L180.839 240.444C181.959 234.292 184.38 228.567 188.101 223.268C191.771 217.912 196.486 213.373 202.246 209.651L225.385 194.701L246.492 217.971L223.354 232.921C220.601 234.7 218.423 236.831 216.818 239.315C215.214 241.799 214.24 244.418 213.896 247.173C213.552 249.928 213.851 252.72 214.793 255.549C215.735 258.378 217.318 261.019 219.543 263.471L265.327 313.947Z" fill="#7B77DE"/>
              <path d="M242.47 360.234C242.991 359.075 243.397 357.891 243.688 356.685C243.902 355.462 244.077 354.232 244.214 352.994C244.557 349.899 244.464 346.833 243.936 343.798C243.407 340.763 242.512 337.85 241.249 335.061C239.918 332.179 238.245 329.543 236.23 327.155C234.147 324.673 231.791 322.532 229.161 320.73L254.904 302.236C258.728 306.022 262.079 310.186 264.955 314.728C267.84 319.193 270.187 323.904 271.996 328.862C273.813 333.742 275.024 338.776 275.629 343.963C276.319 349.089 276.377 354.244 275.803 359.428C274.834 368.172 272.308 376.084 268.223 383.165C264.147 390.168 258.905 395.984 252.499 400.614C246.1 405.166 238.759 408.299 230.474 410.014C222.113 411.713 213.167 411.592 203.636 409.651C193.876 407.663 185.144 404.183 177.443 399.212C169.741 394.24 163.364 388.313 158.31 381.428C153.266 374.466 149.592 366.834 147.289 358.531C144.994 350.151 144.331 341.589 145.299 332.845C145.874 327.661 147.05 322.717 148.828 318.015C150.606 313.314 152.892 308.992 155.686 305.051C158.488 301.033 161.795 297.433 165.605 294.253C169.338 291.057 173.443 288.412 177.919 286.317L242.47 360.234ZM179.363 330.763C178.662 332.124 178.154 333.524 177.837 334.963C177.529 336.324 177.29 337.779 177.118 339.326C176.638 343.66 176.991 347.925 178.177 352.123C179.294 356.228 181.155 360.009 183.758 363.467C186.37 366.848 189.662 369.773 193.632 372.244C197.525 374.698 202.047 376.45 207.196 377.499C208.349 377.734 209.66 377.962 211.129 378.182C212.606 378.324 214.126 378.436 215.689 378.517C217.184 378.505 218.644 378.446 220.071 378.341C221.497 378.236 222.782 377.984 223.927 377.584L179.363 330.763Z" fill="#7B77DE"/>
              <path d="M238.061 259.941C234.288 253.707 236.737 246.194 243.53 243.16V243.16C250.324 240.125 258.89 242.718 262.663 248.952L264.719 252.348C268.492 258.581 266.043 266.094 259.249 269.129V269.129C252.456 272.163 243.89 269.57 240.117 263.337L238.061 259.941Z" fill="#7B77DE"/>
              <defs>
                <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(193.92 250.613) rotate(93.7537) scale(154.819 540.341)">
                  <stop stop-color="#7B77DE"/>
                  <stop offset="1" stop-color="#7B77DE" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg> 
            <svg className='sparkle-1' width="457" height="497" viewBox="0 0 457 497" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg className='sparkle-2' width="463" height="515" viewBox="0 0 463 515" xmlns="http://www.w3.org/2000/svg">
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
              <h1 className="title-1">Out of This World</h1>
              <h1 className="title-1b">Out of This World</h1>
              <h1 className="title-1c">Out of This World</h1>
              <h1 className="title-1d">Out of This World</h1>
            </div>
            <div className="title-2-container">
              <h1 className="title-2">experiences on the web</h1>
              <h1 className="title-2b">experiences on the web</h1>
              <h1 className="title-2c">experiences on the web</h1>
              <h1 className="title-2d">experiences on the web</h1>
            </div>
          </div>

        </div>
  )
}


{/* compelling user experiences for brands on the web. </h3> */}
