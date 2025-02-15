import Header from './Header';
import frontend1 from '../assets/E-commerce.png';
import fs from '../assets/fs.png';
import frontend2 from '../assets/two.png';
import frontend3 from '../assets/movie.png';

import RN1 from '../assets/Company.mp4';
import RN2 from '../assets/w.mp4';
import RN3 from '../assets/video.mp4';

// ICONS
import ReactIcon  from '../assets/ReactIcon.svg';
import MongoDB from '../assets/MongoDB.svg';
import Node from '../assets/node.svg';
import Expowhite from '../assets/expowhite.svg';
import JavaScript from '../assets/javascript.svg';
import Html from '../assets/html.svg';
import CSS from '../assets/css.svg';
import TypeScripe from '../assets/typescript.svg';
import Tailwind from '../assets/tailwind.svg';
import Gradle from '../assets/gradle.svg';
import Compose from '../assets/compose.svg';
import Kotlin from '../assets/kotlin.svg';
import { useMediaQuery } from 'react-responsive';
const Project = () => {


  
  const isMobile = useMediaQuery({query: "(max-width: 800px)"});
  const is1150 = useMediaQuery({query: "(max-width:1150px)"});
  
  return (
    
    <div>
      {
      isMobile ? (
        <div className='flex flex-col min-h-[405vh] w-full justify-evenly'>
          <div id='project' className='scroll-mt-20 self-center mt-40 mb-10'>
            <Header text="PROJECT"/>
          </div>
          <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight mt-24 mb-6 ">
            <h1 className='select-none'>Frontend Projects</h1>
          </div>

          <div className="flex flex-col max-w-96  gap-4">
            <div className="">
              <div className="relative w-full group">
                <img
                  src={frontend1}
                  className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:blur-sm"
                  alt="Project Picture"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div>
                    <a className=" text-sky-blue text-base border border-sky-blue font-medium py-2 px-3 rounded-none" href="https://ashutoshburman.github.io/frontend-project-e-commerce.github.io/" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>E-Commerce App</h1>
                  <div className='flex flex-row mt-1 justify-center items-center w-full'>
                    <img src={Tailwind} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                  </div>
              </div>  

            </div>
            <div className="">
              <div className="">
                <div className="relative h-full w-full group">
                  <img
                    src={frontend3}
                    className="object-cover h-full w-full bg-white"
                    alt="Project Picture"
                  />
                </div>
                <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>Movie App</h1>
                  <div className='flex flex-row mt-1 justify-center items-center w-full'>
                    <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={ReactIcon} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white self-center">
              <div className=" max-h-[10rem] max-w-[24rem]">
                    <div className="relative h-full w-full group">
                      <img
                        src={frontend2}
                        className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:blur-sm"
                        alt="Project Picture"
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <div>
                          <a className=" text-pink text-base border border-pink font-medium py-2 px-3 rounded-none" href="https://ashutoshburman.github.io/frontend-project-twogood.github.io/" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                      <h1 className='text-white font-inter font-light select-none '>E-Commerce App</h1>
                      <div className='flex flex-row mt-1 justify-center items-center w-full'>
                        <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                        <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                        <img src={JavaScript} alt="" className="h-8 w-8 mx-3 relative" />
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full items-center">
            <div className="justify-center  items-center flex flex-row mt-44 text-white font-inter font-extralight mb-8">
              <h1 className='select-none'>Mobile Application</h1>
            </div>
            <div>
              <video className='relative max-h-[35rem] justify-center max-w-80' autoPlay loop muted>
                <source src={RN1} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>Company App</h1>
                  <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={Kotlin} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Gradle} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Compose} alt="" className="h-7 w-7 mx-3 relative" />
                  </div>
              </div> 
            </div>
            <div className='my-4'>
              <video className='relative max-h-[35rem] justify-center bg-white w-full' autoPlay loop muted>
                  <source src={RN2} type="video/mp4"/>
                </video>
                <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>Weather App</h1>
                  <div className='flex flex-row mt-1 justify-center items-center w-full'>
                    <img src={TypeScripe} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Expowhite} alt="" className="h-7 w-7 mx-3 relative" />
                    <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                  </div>          
                </div>
            </div>
            <div>
              <video className='relative max-h-[35rem] justify-center bg-white w-full' autoPlay loop muted>
                <source src={RN3} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Movie App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={TypeScripe} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Expowhite} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div> 
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="justify-center items-center flex flex-row mt-16 text-white font-inter font-extralight mb-8">
              <h1 className='select-none'>Full stack</h1>
            </div>
            <div>
              <div className=" max-w-96 ">
                <div className="relative h-ful w-full group">
                  <img
                    src={fs}
                    className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-90 group-hover:blur-sm"
                    alt="Project Picture"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div>
                      <a className="text-purple-Heart text-base border border-purple-Heart font-medium py-2 px-3 rounded-none" href="https://todoapplication-todo.onrender.com" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                  </div>
                </div>
                <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>Todo App</h1>
                  <div className='flex flex-row justify-center items-center w-full'>
                    <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={JavaScript} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={MongoDB} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      ):
      is1150 ? (
        <div className='flex flex-col min-h-[235vh] w-full items-center'>
          <div id='project' className='scroll-mt-20 mb-12 mt-80'>
            <Header text="PROJECT"/>
          </div>
          <div className="flex flex-col h-[70rem] max-w-[50rem] mx-4">
                <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight mb-8 mt-20 ">
                  <h1 className='select-none'>Frontend Projects</h1>
                </div>
            <div className="flex gap-4 flex-row">
              <div className="">
              <div className="max-h-[45vh]">
                <div className="relative h-full w-full group">
                <img
                  src={frontend1}
                  className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:blur-sm"
                  alt="Project Picture"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div>
                    <a className=" text-sky-blue text-base border border-sky-blue font-medium py-2 px-3 rounded-none" href="https://ashutoshburman.github.io/frontend-project-e-commerce.github.io/" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
                  <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                      <h1 className='text-white font-inter font-light '>E-Commerce App</h1>
                      <div className='flex flex-row mt-1 justify-center items-center w-full'>
                        <img src={Tailwind} alt="" className="h-8 w-8 mx-3 relative" />
                        <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                        <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                      </div>
                  </div>
                </div>

              </div>
              <div className="">
                <div className="max-h-[45vh] aspect-w-1 aspect-h-1 ">
                <div className="relative h-full w-full group">
                  <img
                    src={frontend3}
                    className="object-cover h-full w-full bg-white"
                    alt="Project Picture"
                  />
                </div>
                <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>Movie App</h1>
                  <div className='flex flex-row mt-1 justify-center items-center w-full'>
                    <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={ReactIcon} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                  </div>
                </div>
              </div>

              </div>

            </div>
            <div className='flex flex-row mt-4 h-[10rem] w-full justify-center items-start'>
              <div className=" max-h-[10rem] max-w-[22rem]">
                  <div className="relative h-full w-full group">
                    <img
                      src={frontend2}
                      className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:blur-sm"
                      alt="Project Picture"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                      <div>
                        <a className=" text-pink text-base border border-pink font-medium py-2 px-3 rounded-none" href="https://ashutoshburman.github.io/frontend-project-twogood.github.io/" target="_blank" rel="noopener noreferrer">Demo</a>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                    <h1 className='text-white font-inter font-light select-none '>E-Commerce App</h1>
                    <div className='flex flex-row mt-1 justify-center items-center w-full'>
                      <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                      <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                      <img src={JavaScript} alt="" className="h-8 w-8 mx-3 relative" />
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight mt-28 mb-10">
            <h1 className='select-none'>Mobile Application</h1>
          </div>

          <div className="flex flex-row h-[50rem] gap-4">
            <div>
              <video className='relative max-h-[35rem] justify-center bg-white w-full' autoPlay loop muted>
                <source src={RN1} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                  <h1 className='text-white font-inter font-light '>Company App</h1>
                  <div className='flex flex-row mt-1 justify-center items-center w-full'>
                    <img src={Kotlin} alt="" className="h-7 w-7 mx-3 relative" />
                    <img src={Gradle} alt="" className="h-8 w-8 mx-3 relative" />
                    <img src={Compose} alt="" className="h-7 w-7 mx-3 relative" />
                  </div>
              </div> 
            </div>
            <div>
              <video className='relative max-h-[35rem] justify-center bg-white w-full' autoPlay loop muted>
                <source src={RN2} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Weather App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={TypeScripe} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Expowhite} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div>          
              </div>
            </div>
            <div>
              <video className='relative max-h-[35rem] justify-center bg-white w-full' autoPlay loop muted>
                <source src={RN3} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Movie App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={TypeScripe} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Expowhite} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div>  
            </div>
            </div>
          </div>


          <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight  mt-20 mb-10">
            <h1 className='select-none'>Full Stack</h1>
          </div>
          <div className='flex flex-row h-[30rem] justify-center'>
          <div className="max-h-[20vh]">
              <div className="relative h-full w-full group">
                <img
                  src={fs}
                  className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-90 group-hover:blur-sm"
                  alt="Project Picture"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div>
                    <a className="text-purple-Heart text-base border border-purple-Heart font-medium py-2 px-3 rounded-none" href="https://todoapplication-todo.onrender.com" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Todo App</h1>
                <div className='flex flex-row justify-center items-center w-full'>
                  <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={JavaScript} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={MongoDB} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    :(
      <div className='flex flex-col w-full  items-center justify-around'>
        <div id='project' className='scroll-mt-20 mb-20'>
          <Header text="PROJECT"/>
        </div>
        <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight mb-10">
          <h1 className='select-none'>Frontend Project</h1>
        </div>
        <div className="grid grid-row-3 gap-6 grid-flow-col h-full w-full max-w-[70rem]">

          <div className="max-h-[45vh] aspect-w-1 aspect-h-1 ">
            <div className="relative h-full w-full group">
              <img
                src={frontend1}
                className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:blur-sm"
                alt="Project Picture"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div>
                  <a className=" text-sky-blue text-base border border-sky-blue font-medium py-2 px-3 rounded-none" href="https://ashutoshburman.github.io/frontend-project-e-commerce.github.io/" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>E-Commerce App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={Tailwind} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div>
            </div>
          </div>
            <div className="max-h-[45vh] aspect-w-1 aspect-h-1 ">
              <div className="relative h-full w-full group">
                <img
                  src={frontend3}
                  className="object-cover h-full w-full bg-white"
                  alt="Project Picture"
                />
              </div>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Movie App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={ReactIcon} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div>
              </div>
            </div>
            <div className="max-h-[45vh] aspect-w-1 aspect-h-1">
              <div className="relative h-full w-full group">
                <img
                  src={frontend2}
                  className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:blur-sm"
                  alt="Project Picture"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div>
                    <a className=" text-pink text-base border border-pink font-medium py-2 px-3 rounded-none" href="https://ashutoshburman.github.io/frontend-project-twogood.github.io/" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light select-none '>E-Commerce App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={JavaScript} alt="" className="h-8 w-8 mx-3 relative" />
                </div>
              </div>
            </div>
        </div>

        <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight mb-10 mt-40 ">
          <h1 className='select-none'>Mobile Application</h1>
        </div>

        <div className="grid grid-row-3 grid-flow-col justify-around h-full w-full max-w-[70rem]">
          <div >
            <video className='relative max-h-[45rem] justify-center bg-white w-full' autoPlay loop muted>
              <source src={RN1} type="video/mp4"/>
            </video>
            <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Company App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={Kotlin} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Gradle} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Compose} alt="" className="h-7 w-7 mx-3 relative" />
                </div>
            </div>
          </div>
            <div>
              <video className='relative max-h-[45rem] justify-center bg-white w-full' autoPlay loop muted>
                <source src={RN2} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Weather App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={TypeScripe} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Expowhite} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div>          
              </div>
            </div>

            <div>
              <video className='relative max-h-[45rem] justify-center bg-white w-full' autoPlay loop muted>
                <source src={RN3} type="video/mp4"/>
              </video>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Movie App</h1>
                <div className='flex flex-row mt-1 justify-center items-center w-full'>
                  <img src={TypeScripe} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Expowhite} alt="" className="h-7 w-7 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                </div>  
            </div>
            </div>
        </div>

        <div className="justify-center  items-center flex flex-row w-full text-white font-inter font-extralight mb-10 mt-20 ">
          <h1>Full Stack</h1>
        </div>

        <div className="justify-center w-full max-w-[30rem]">
            <div className="max-h-[45vh] ">
              <div className="relative h-full w-full group">
                <img
                  src={fs}
                  className="object-fit h-full w-full bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-90 group-hover:blur-sm"
                  alt="Project Picture"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div>
                    <a className="text-purple-Heart text-base border border-purple-Heart font-medium py-2 px-3 rounded-none" href="https://todoapplication-todo.onrender.com" target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
              <div className='bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] to-[hsla(0,0%,0%,0.1)] h-20 justify-center flex flex-col items-center w-full'>
                <h1 className='text-white font-inter font-light '>Todo App</h1>
                <div className='flex flex-row justify-center items-center w-full'>
                  <img src={CSS} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={JavaScript} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={MongoDB} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Node} alt="" className="h-8 w-8 mx-3 relative" />
                  <img src={Html} alt="" className="h-8 w-8 mx-3 relative" />
                </div>
              </div>
            </div>
        </div>
      </div>
    )}
    </div>

  )
}

export default Project;