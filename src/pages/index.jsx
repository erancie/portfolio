import React, { Suspense, useState, useEffect, useLayoutEffect} from "react"
import '../styles/global.sass'
import Layout from "../components/Layout"
import BackgroundScene from "../components/BackgroundScene"
import LandingHeaders from "../components/LandingHeaders"
import Intro from "../components/Intro"
import ProjectsList from "../components/ProjectsList"
import { ScrollContextProvider } from "../components/utils/useScrollContext"
import SEO from "../components/SEO"
import About from "../components/About"
import MobDesign from "../components/MobDesign"
import WebDesign from "../components/WebDesign"
import WebDesign2 from "../components/WebDesign2"

// import LocomotiveScroll from 'locomotive-scroll';


export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    setTimeout(()=>{
      setIsLoaded(true)
    }, [2000])
  },[])


  return (
    <ScrollContextProvider>

        {isLoaded ? <>
          <Layout >
            <SEO />
            <BackgroundScene />
            <LandingHeaders />
            <About />
            <WebDesign />
            {/* <WebDesign2 /> */}
            <MobDesign />
            <Intro />
            <ProjectsList /> 
          </Layout> 
        </> 
        : <div className="loading-splash">
            <div className="loading-container">
              <svg className='loading-logo' viewBox="0 0 102 167" xmlns="http://www.w3.org/2000/svg">
                <path d="M77.9963 39.7322C77.683 52.9144 79.8427 63.2601 79.8427 63.2601C79.8427 63.2601 63.7386 50.1241 62.1369 46.1802C60.5353 42.2364 62.7872 37.5958 67.1666 35.8152C71.5461 34.0346 76.3947 35.7883 77.9963 39.7322Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3083 0.903367L43.9696 12.2752C39.5991 15.1416 36.029 18.6263 33.2593 22.7294C30.8477 26.2143 29.1675 29.9343 28.2186 33.8894L28.2207 33.8906C28.2207 33.8906 27.1549 39.1805 26.8702 42.5837C26.6461 45.2618 26.8824 50.9006 26.8824 50.9006C26.4656 52.4093 25.865 52.5682 25.0729 52.7777C24.5325 52.9207 23.9028 53.0872 23.1815 53.7223L67.3697 98.8475L72.2292 104.146C72.9972 105.288 73.6785 106.493 74.2731 107.761C75.2483 109.883 75.9444 112.1 76.3613 114.413C76.7782 116.726 76.8634 119.064 76.617 121.427C76.5185 122.372 76.3906 123.311 76.2334 124.245C76.0176 125.167 75.7139 126.071 75.3223 126.959L26.2522 71.3849C24.2705 68.7966 19.2454 63.6351 19.2454 63.6351C19.2454 63.6351 22.0267 68.5623 18.3981 73.7415C16.8121 76.0054 15.6294 77.5001 14.8006 78.4654C12.6031 80.5289 10.6544 82.7973 8.95472 85.2704C6.84504 88.29 5.12414 91.5974 3.792 95.1925C2.45986 98.7877 1.58744 102.564 1.17472 106.522C0.478645 113.197 1.02429 119.725 2.81167 126.107C4.6052 132.43 7.43986 138.235 11.3157 143.522C15.1976 148.75 20.0836 153.242 25.9737 156.998C31.8638 160.754 38.5311 163.368 45.9757 164.839C53.2444 166.275 60.0594 166.325 66.4206 164.989C72.7232 163.642 78.3007 161.217 83.1529 157.715C88.0113 154.153 91.9764 149.692 95.0482 144.33C98.1262 138.909 100.013 132.862 100.709 126.187C101.122 122.229 101.053 118.297 100.504 114.39C100.019 110.436 99.0724 106.602 97.6649 102.887C96.2636 99.1137 94.4536 95.5308 92.2349 92.1383L92.1603 92.0224L83.9322 82.1817L57.3998 53.2503C55.6937 51.3899 54.4752 49.3829 53.7444 47.2292C53.0137 45.0756 52.7726 42.9471 53.0214 40.8439C53.2701 38.7407 53.9997 36.7379 55.2101 34.8354C56.4206 32.9329 58.0699 31.2969 60.158 29.9274L62.9382 28.104C62.2608 24.3804 60.9389 16.4688 60.8162 10.8175C60.7515 7.83657 60.9927 4.20615 61.3083 0.903367ZM25.9698 107.984C26.2041 106.885 26.5849 105.815 27.1123 104.774L61.2797 140.281C60.4097 140.591 59.4318 140.79 58.3459 140.877C57.2599 140.964 56.1478 141.015 55.0094 141.032C53.8185 140.977 52.66 140.899 51.534 140.797C50.4141 140.636 49.4145 140.469 48.5352 140.295C44.6077 139.519 41.1553 138.204 38.1778 136.35C35.1418 134.484 32.6209 132.268 30.6151 129.701C28.6155 127.075 27.1805 124.199 26.3099 121.073C25.3869 117.877 25.0979 114.624 25.4429 111.316C25.5661 110.135 25.7417 109.024 25.9698 107.984Z" />
              </svg>
              <h1 className="">Preparing for departure<span className="blink">.</span><span className="blink-delayed">.</span></h1>
            </div>
          </div> }
        
    </ScrollContextProvider>
  )
}

