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
          
          {/* <div className="titles-wrapper"> */}





            <div className='title-1-container'>

              {/* <svg className='logo-landing-a' width="151"  height="118" viewBox="0 0 151 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#7b77de" fill-rule="evenodd" clip-rule="evenodd" 
                  d="M75.6825 72.3308L63.1119 59.9671L63.112 59.967L41.5354 38.7457C39.5666 36.8094 39.5666 33.6699 41.5354 31.7336L46.9765 26.382C48.9453 24.4457 52.1372 24.4457 54.106 26.3821L75.6826 47.6034L100.824 22.8761L109.83 31.7337C111.798 33.6701 111.798 36.8095 109.83 38.7459L75.6825 72.3308ZM58.5481 15.8709C56.5794 17.8073 56.5794 20.9467 58.5481 22.883L65.2409 29.4656C71.1472 35.2746 80.7232 35.2746 86.6295 29.4656L96.887 19.377L79.5 2.27624C77.5312 0.339888 74.3392 0.339887 72.3704 2.27624L58.5481 15.8709ZM59.7206 87.6032L72.0843 75.0326L38.4994 40.8854C36.563 38.9166 33.4236 38.9166 31.4872 40.8854L22.6297 49.8913L47.3569 75.0325L26.1356 96.6091C24.1993 98.5778 24.1993 101.77 26.1356 103.739L31.4871 109.18C33.4235 111.148 36.5629 111.148 38.4993 109.18L59.7205 87.6031L59.7206 87.6032ZM15.6244 92.167L2.02974 78.3447C0.093399 76.3759 0.0933991 73.1839 2.02974 71.2151L19.1305 53.8281L29.2191 64.0856C35.0282 69.9919 35.0282 79.5679 29.2191 85.4742L22.6366 92.167C20.7002 94.1357 17.5608 94.1357 15.6244 92.167ZM91.6449 62.4619L79.2812 75.0326L82.7785 78.5884L82.7874 78.5975L91.645 87.6033L112.866 109.18C114.802 111.148 117.942 111.148 119.878 109.18L128.736 100.174L104.009 75.0327L125.23 53.4562C127.166 51.4874 127.166 48.2954 125.23 46.3267L119.878 40.8856C117.942 38.9168 114.803 38.9168 112.866 40.8856L91.645 62.4621L91.6449 62.4619ZM135.741 57.8982L149.336 71.7205C151.272 73.6893 151.272 76.8812 149.336 78.85L132.235 96.2371L122.146 85.9795C116.337 80.0732 116.337 70.4973 122.146 64.591L128.729 57.8982C130.665 55.9294 133.805 55.9294 135.741 57.8982ZM72.1839 116.094C74.1202 118.062 77.2596 118.062 79.196 116.094L92.7907 102.271C94.727 100.303 94.727 97.1106 92.7907 95.1418L75.6899 77.7547L58.5892 95.1418C56.6528 97.1105 56.6528 100.303 58.5892 102.271L72.1839 116.094Z" />

              </svg>
              <svg className='logo-landing-b' width="151"  height="118" viewBox="0 0 151 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#b-gradient)" fill-rule="evenodd" clip-rule="evenodd" d="M75.6825 72.3308L63.1119 59.9671L63.112 59.967L41.5354 38.7457C39.5666 36.8094 39.5666 33.6699 41.5354 31.7336L46.9765 26.382C48.9453 24.4457 52.1372 24.4457 54.106 26.3821L75.6826 47.6034L100.824 22.8761L109.83 31.7337C111.798 33.6701 111.798 36.8095 109.83 38.7459L75.6825 72.3308ZM58.5481 15.8709C56.5794 17.8073 56.5794 20.9467 58.5481 22.883L65.2409 29.4656C71.1472 35.2746 80.7232 35.2746 86.6295 29.4656L96.887 19.377L79.5 2.27624C77.5312 0.339888 74.3392 0.339887 72.3704 2.27624L58.5481 15.8709ZM59.7206 87.6032L72.0843 75.0326L38.4994 40.8854C36.563 38.9166 33.4236 38.9166 31.4872 40.8854L22.6297 49.8913L47.3569 75.0325L26.1356 96.6091C24.1993 98.5778 24.1993 101.77 26.1356 103.739L31.4871 109.18C33.4235 111.148 36.5629 111.148 38.4993 109.18L59.7205 87.6031L59.7206 87.6032ZM15.6244 92.167L2.02974 78.3447C0.093399 76.3759 0.0933991 73.1839 2.02974 71.2151L19.1305 53.8281L29.2191 64.0856C35.0282 69.9919 35.0282 79.5679 29.2191 85.4742L22.6366 92.167C20.7002 94.1357 17.5608 94.1357 15.6244 92.167ZM91.6449 62.4619L79.2812 75.0326L82.7785 78.5884L82.7874 78.5975L91.645 87.6033L112.866 109.18C114.802 111.148 117.942 111.148 119.878 109.18L128.736 100.174L104.009 75.0327L125.23 53.4562C127.166 51.4874 127.166 48.2954 125.23 46.3267L119.878 40.8856C117.942 38.9168 114.803 38.9168 112.866 40.8856L91.645 62.4621L91.6449 62.4619ZM135.741 57.8982L149.336 71.7205C151.272 73.6893 151.272 76.8812 149.336 78.85L132.235 96.2371L122.146 85.9795C116.337 80.0732 116.337 70.4973 122.146 64.591L128.729 57.8982C130.665 55.9294 133.805 55.9294 135.741 57.8982ZM72.1839 116.094C74.1202 118.062 77.2596 118.062 79.196 116.094L92.7907 102.271C94.727 100.303 94.727 97.1106 92.7907 95.1418L75.6899 77.7547L58.5892 95.1418C56.6528 97.1105 56.6528 100.303 58.5892 102.271L72.1839 116.094Z" />
                <linearGradient id="b-gradient" 
                                x1="0.999999" y1="54" x2="154.5" y2="112.5" 
                                gradientUnits="userSpaceOnUse">
                      <stop offset="0.12" stop-color="#44A595"/>
                      <stop offset="0.30" stop-color="#fff"/>
                      <stop offset=".53" stop-color="#44A595"/>
                  </linearGradient>
              </svg>
              <svg className='logo-landing-c' width="151"  height="118" viewBox="0 0 151 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#c-gradient)" fill-rule="evenodd" clip-rule="evenodd" d="M75.6825 72.3308L63.1119 59.9671L63.112 59.967L41.5354 38.7457C39.5666 36.8094 39.5666 33.6699 41.5354 31.7336L46.9765 26.382C48.9453 24.4457 52.1372 24.4457 54.106 26.3821L75.6826 47.6034L100.824 22.8761L109.83 31.7337C111.798 33.6701 111.798 36.8095 109.83 38.7459L75.6825 72.3308ZM58.5481 15.8709C56.5794 17.8073 56.5794 20.9467 58.5481 22.883L65.2409 29.4656C71.1472 35.2746 80.7232 35.2746 86.6295 29.4656L96.887 19.377L79.5 2.27624C77.5312 0.339888 74.3392 0.339887 72.3704 2.27624L58.5481 15.8709ZM59.7206 87.6032L72.0843 75.0326L38.4994 40.8854C36.563 38.9166 33.4236 38.9166 31.4872 40.8854L22.6297 49.8913L47.3569 75.0325L26.1356 96.6091C24.1993 98.5778 24.1993 101.77 26.1356 103.739L31.4871 109.18C33.4235 111.148 36.5629 111.148 38.4993 109.18L59.7205 87.6031L59.7206 87.6032ZM15.6244 92.167L2.02974 78.3447C0.093399 76.3759 0.0933991 73.1839 2.02974 71.2151L19.1305 53.8281L29.2191 64.0856C35.0282 69.9919 35.0282 79.5679 29.2191 85.4742L22.6366 92.167C20.7002 94.1357 17.5608 94.1357 15.6244 92.167ZM91.6449 62.4619L79.2812 75.0326L82.7785 78.5884L82.7874 78.5975L91.645 87.6033L112.866 109.18C114.802 111.148 117.942 111.148 119.878 109.18L128.736 100.174L104.009 75.0327L125.23 53.4562C127.166 51.4874 127.166 48.2954 125.23 46.3267L119.878 40.8856C117.942 38.9168 114.803 38.9168 112.866 40.8856L91.645 62.4621L91.6449 62.4619ZM135.741 57.8982L149.336 71.7205C151.272 73.6893 151.272 76.8812 149.336 78.85L132.235 96.2371L122.146 85.9795C116.337 80.0732 116.337 70.4973 122.146 64.591L128.729 57.8982C130.665 55.9294 133.805 55.9294 135.741 57.8982ZM72.1839 116.094C74.1202 118.062 77.2596 118.062 79.196 116.094L92.7907 102.271C94.727 100.303 94.727 97.1106 92.7907 95.1418L75.6899 77.7547L58.5892 95.1418C56.6528 97.1105 56.6528 100.303 58.5892 102.271L72.1839 116.094Z" />
                <linearGradient id="c-gradient" 
                                x1="0.999999" y1="54" x2="154.5" y2="112.5" 
                                gradientUnits="userSpaceOnUse">
                      <stop offset="0.30" stop-color="#44A595"/>
                      <stop offset="0.52" stop-color="#fff"/>
                      <stop offset=".72" stop-color="#44A595"/>
                  </linearGradient>
              </svg>
              <svg className='logo-landing-d' width="151"  height="118" viewBox="0 0 151 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#d-gradient)" fill-rule="evenodd" clip-rule="evenodd" d="M75.6825 72.3308L63.1119 59.9671L63.112 59.967L41.5354 38.7457C39.5666 36.8094 39.5666 33.6699 41.5354 31.7336L46.9765 26.382C48.9453 24.4457 52.1372 24.4457 54.106 26.3821L75.6826 47.6034L100.824 22.8761L109.83 31.7337C111.798 33.6701 111.798 36.8095 109.83 38.7459L75.6825 72.3308ZM58.5481 15.8709C56.5794 17.8073 56.5794 20.9467 58.5481 22.883L65.2409 29.4656C71.1472 35.2746 80.7232 35.2746 86.6295 29.4656L96.887 19.377L79.5 2.27624C77.5312 0.339888 74.3392 0.339887 72.3704 2.27624L58.5481 15.8709ZM59.7206 87.6032L72.0843 75.0326L38.4994 40.8854C36.563 38.9166 33.4236 38.9166 31.4872 40.8854L22.6297 49.8913L47.3569 75.0325L26.1356 96.6091C24.1993 98.5778 24.1993 101.77 26.1356 103.739L31.4871 109.18C33.4235 111.148 36.5629 111.148 38.4993 109.18L59.7205 87.6031L59.7206 87.6032ZM15.6244 92.167L2.02974 78.3447C0.093399 76.3759 0.0933991 73.1839 2.02974 71.2151L19.1305 53.8281L29.2191 64.0856C35.0282 69.9919 35.0282 79.5679 29.2191 85.4742L22.6366 92.167C20.7002 94.1357 17.5608 94.1357 15.6244 92.167ZM91.6449 62.4619L79.2812 75.0326L82.7785 78.5884L82.7874 78.5975L91.645 87.6033L112.866 109.18C114.802 111.148 117.942 111.148 119.878 109.18L128.736 100.174L104.009 75.0327L125.23 53.4562C127.166 51.4874 127.166 48.2954 125.23 46.3267L119.878 40.8856C117.942 38.9168 114.803 38.9168 112.866 40.8856L91.645 62.4621L91.6449 62.4619ZM135.741 57.8982L149.336 71.7205C151.272 73.6893 151.272 76.8812 149.336 78.85L132.235 96.2371L122.146 85.9795C116.337 80.0732 116.337 70.4973 122.146 64.591L128.729 57.8982C130.665 55.9294 133.805 55.9294 135.741 57.8982ZM72.1839 116.094C74.1202 118.062 77.2596 118.062 79.196 116.094L92.7907 102.271C94.727 100.303 94.727 97.1106 92.7907 95.1418L75.6899 77.7547L58.5892 95.1418C56.6528 97.1105 56.6528 100.303 58.5892 102.271L72.1839 116.094Z" />
                <linearGradient id="d-gradient" 
                                x1="0.999999" y1="54" x2="154.5" y2="112.5" 
                                gradientUnits="userSpaceOnUse">
                      <stop offset="0.50" stop-color="#44A595"/>
                      <stop offset="0.72" stop-color="#fff"/>
                      <stop offset="0.94" stop-color="#44A595"/>
                  </linearGradient>
              </svg>



              <svg className='logo-landing-e' width="107" height="128" viewBox="0 0 107 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#7b77de" fill-rule="evenodd" clip-rule="evenodd" 
              d="M40.5344 37.1432L53.105 49.5068L87.2522 15.922C89.221 13.9856 89.221 10.8462 87.2522 8.90983L78.2463 0.0522461L53.1051 24.7795L31.5285 3.55815C29.5598 1.62181 26.3678 1.6218 24.399 3.55815L18.9579 8.90967C16.9891 10.846 16.9891 13.9855 18.9579 15.9218L40.5345 37.1431L40.5344 37.1432ZM37.1431 64.7793L49.5068 52.2087L15.9219 18.0615C13.9856 16.0927 10.8461 16.0928 8.90977 18.0615L0.0521851 27.0674L24.7794 52.2086L3.55814 73.7852C1.6218 75.7539 1.6218 78.9459 3.55814 80.9147L8.90966 86.3558C10.846 88.3246 13.9854 88.3246 15.9218 86.3558L37.1431 64.7792L37.1431 64.7793ZM69.0674 39.6382L56.7038 52.2088L60.2011 55.7646L60.2099 55.7737L69.0675 64.7796L90.2887 86.3559C92.225 88.3247 95.3645 88.3247 97.3008 86.3559L106.158 77.3501L81.4312 52.2089L102.652 30.6324C104.589 28.6636 104.589 25.4717 102.652 23.5029L97.3009 18.0618C95.3646 16.093 92.2251 16.093 90.2888 18.0618L69.0676 39.6383L69.0674 39.6382ZM52.7118 127.455L40.1412 115.091L40.1413 115.091L15 90.3635L24.0059 81.506C25.9746 79.5696 29.1666 79.5696 31.1354 81.506L52.7119 102.727L77.8531 78L90.4237 90.3636L65.2826 115.091L56.2767 123.948L56.2676 123.957L52.7118 127.455ZM36.0117 79.4475L53.1124 96.8346L70.2132 79.4475C72.1495 77.4788 72.1495 74.2868 70.2132 72.318L53.1124 54.931L36.0117 72.318C34.0753 74.2868 34.0753 77.4788 36.0117 79.4475Z" />

              </svg>
              <svg className='logo-landing-f' width="107" height="128" viewBox="0 0 107 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#f-gradient)" fill-rule="evenodd" clip-rule="evenodd"
              d="M40.5344 37.1432L53.105 49.5068L87.2522 15.922C89.221 13.9856 89.221 10.8462 87.2522 8.90983L78.2463 0.0522461L53.1051 24.7795L31.5285 3.55815C29.5598 1.62181 26.3678 1.6218 24.399 3.55815L18.9579 8.90967C16.9891 10.846 16.9891 13.9855 18.9579 15.9218L40.5345 37.1431L40.5344 37.1432ZM37.1431 64.7793L49.5068 52.2087L15.9219 18.0615C13.9856 16.0927 10.8461 16.0928 8.90977 18.0615L0.0521851 27.0674L24.7794 52.2086L3.55814 73.7852C1.6218 75.7539 1.6218 78.9459 3.55814 80.9147L8.90966 86.3558C10.846 88.3246 13.9854 88.3246 15.9218 86.3558L37.1431 64.7792L37.1431 64.7793ZM69.0674 39.6382L56.7038 52.2088L60.2011 55.7646L60.2099 55.7737L69.0675 64.7796L90.2887 86.3559C92.225 88.3247 95.3645 88.3247 97.3008 86.3559L106.158 77.3501L81.4312 52.2089L102.652 30.6324C104.589 28.6636 104.589 25.4717 102.652 23.5029L97.3009 18.0618C95.3646 16.093 92.2251 16.093 90.2888 18.0618L69.0676 39.6383L69.0674 39.6382ZM52.7118 127.455L40.1412 115.091L40.1413 115.091L15 90.3635L24.0059 81.506C25.9746 79.5696 29.1666 79.5696 31.1354 81.506L52.7119 102.727L77.8531 78L90.4237 90.3636L65.2826 115.091L56.2767 123.948L56.2676 123.957L52.7118 127.455ZM36.0117 79.4475L53.1124 96.8346L70.2132 79.4475C72.1495 77.4788 72.1495 74.2868 70.2132 72.318L53.1124 54.931L36.0117 72.318C34.0753 74.2868 34.0753 77.4788 36.0117 79.4475Z" />
              <linearGradient id="f-gradient" 
                                x1="0.350627" y1="43.1839" x2="112.207" y2="80.3091" 
                                gradientUnits="userSpaceOnUse">
                      <stop offset="0.12" stop-color="#44A595"/>
                      <stop offset="0.30" stop-color="#fff"/>
                      <stop offset=".53" stop-color="#44A595"/>
                  </linearGradient>
              </svg>
              <svg className='logo-landing-g' width="107" height="128" viewBox="0 0 107 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#g-gradient)" fill-rule="evenodd" clip-rule="evenodd" 
              d="M40.5344 37.1432L53.105 49.5068L87.2522 15.922C89.221 13.9856 89.221 10.8462 87.2522 8.90983L78.2463 0.0522461L53.1051 24.7795L31.5285 3.55815C29.5598 1.62181 26.3678 1.6218 24.399 3.55815L18.9579 8.90967C16.9891 10.846 16.9891 13.9855 18.9579 15.9218L40.5345 37.1431L40.5344 37.1432ZM37.1431 64.7793L49.5068 52.2087L15.9219 18.0615C13.9856 16.0927 10.8461 16.0928 8.90977 18.0615L0.0521851 27.0674L24.7794 52.2086L3.55814 73.7852C1.6218 75.7539 1.6218 78.9459 3.55814 80.9147L8.90966 86.3558C10.846 88.3246 13.9854 88.3246 15.9218 86.3558L37.1431 64.7792L37.1431 64.7793ZM69.0674 39.6382L56.7038 52.2088L60.2011 55.7646L60.2099 55.7737L69.0675 64.7796L90.2887 86.3559C92.225 88.3247 95.3645 88.3247 97.3008 86.3559L106.158 77.3501L81.4312 52.2089L102.652 30.6324C104.589 28.6636 104.589 25.4717 102.652 23.5029L97.3009 18.0618C95.3646 16.093 92.2251 16.093 90.2888 18.0618L69.0676 39.6383L69.0674 39.6382ZM52.7118 127.455L40.1412 115.091L40.1413 115.091L15 90.3635L24.0059 81.506C25.9746 79.5696 29.1666 79.5696 31.1354 81.506L52.7119 102.727L77.8531 78L90.4237 90.3636L65.2826 115.091L56.2767 123.948L56.2676 123.957L52.7118 127.455ZM36.0117 79.4475L53.1124 96.8346L70.2132 79.4475C72.1495 77.4788 72.1495 74.2868 70.2132 72.318L53.1124 54.931L36.0117 72.318C34.0753 74.2868 34.0753 77.4788 36.0117 79.4475Z" />
              <linearGradient id="g-gradient" 
                                x1="0.350627" y1="43.1839" x2="112.207" y2="80.3091" 
                                gradientUnits="userSpaceOnUse">
                      <stop offset="0.30" stop-color="#44A595"/>
                      <stop offset="0.52" stop-color="#fff"/>
                      <stop offset=".72" stop-color="#44A595"/>
                  </linearGradient>
              </svg>
              <svg className='logo-landing-h' width="107" height="128" viewBox="0 0 107 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#h-gradient)" fill-rule="evenodd" clip-rule="evenodd" 
              d="M40.5344 37.1432L53.105 49.5068L87.2522 15.922C89.221 13.9856 89.221 10.8462 87.2522 8.90983L78.2463 0.0522461L53.1051 24.7795L31.5285 3.55815C29.5598 1.62181 26.3678 1.6218 24.399 3.55815L18.9579 8.90967C16.9891 10.846 16.9891 13.9855 18.9579 15.9218L40.5345 37.1431L40.5344 37.1432ZM37.1431 64.7793L49.5068 52.2087L15.9219 18.0615C13.9856 16.0927 10.8461 16.0928 8.90977 18.0615L0.0521851 27.0674L24.7794 52.2086L3.55814 73.7852C1.6218 75.7539 1.6218 78.9459 3.55814 80.9147L8.90966 86.3558C10.846 88.3246 13.9854 88.3246 15.9218 86.3558L37.1431 64.7792L37.1431 64.7793ZM69.0674 39.6382L56.7038 52.2088L60.2011 55.7646L60.2099 55.7737L69.0675 64.7796L90.2887 86.3559C92.225 88.3247 95.3645 88.3247 97.3008 86.3559L106.158 77.3501L81.4312 52.2089L102.652 30.6324C104.589 28.6636 104.589 25.4717 102.652 23.5029L97.3009 18.0618C95.3646 16.093 92.2251 16.093 90.2888 18.0618L69.0676 39.6383L69.0674 39.6382ZM52.7118 127.455L40.1412 115.091L40.1413 115.091L15 90.3635L24.0059 81.506C25.9746 79.5696 29.1666 79.5696 31.1354 81.506L52.7119 102.727L77.8531 78L90.4237 90.3636L65.2826 115.091L56.2767 123.948L56.2676 123.957L52.7118 127.455ZM36.0117 79.4475L53.1124 96.8346L70.2132 79.4475C72.1495 77.4788 72.1495 74.2868 70.2132 72.318L53.1124 54.931L36.0117 72.318C34.0753 74.2868 34.0753 77.4788 36.0117 79.4475Z" />
              <linearGradient id="h-gradient" 
                                x1="0.350627" y1="43.1839" x2="112.207" y2="80.3091" 
                                gradientUnits="userSpaceOnUse">
                      <stop offset="0.50" stop-color="#44A595"/>
                      <stop offset="0.72" stop-color="#fff"/>
                      <stop offset="0.94" stop-color="#44A595"/>
                  </linearGradient>
              </svg> */}


              <h1 className="title-1">OUT OF THIS WORLD</h1>
              <h1 className="title-1b">OUT OF THIS WORLD</h1>
              <h1 className="title-1c">OUT OF THIS WORLD</h1>
              <h1 className="title-1d">OUT OF THIS WORLD</h1>


            </div>

            <div className="title-2-container">
              <h1 className="title-2">experiences on the web</h1>
              <h1 className="title-2b">experiences on the web</h1>
              <h1 className="title-2c">experiences on the web</h1>
              <h1 className="title-2d">experiences on the web</h1>
            </div>

          {/* </div> */}
          {/* compelling user experiences for brands on the web. </h3> */}

        </div>
  )
}
