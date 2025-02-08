import {useRef} from 'react'
import Header from '../components/Header'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CV from '../assets/AshutoshBurman_CV.pdf';
import EmailButton from '../components/Gmail';
import { useMediaQuery } from "react-responsive";



gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {


  const is400 =useMediaQuery({query: "(max-width: 400px"})
  const is460 =useMediaQuery({query: "(max-width: 460px"})
  const isMobile = useMediaQuery({query: "(max-width: 600px"})
  const is705 = useMediaQuery({query: "(max-width: 705px"})
  const isTab = useMediaQuery({query: "(max-width: 905px"})
  const is1270 = useMediaQuery({query: "(max-width: 1270px)"})



  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "top 45%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 1,
      });
    }
  }, { scope: textRef });


  return (

    <div>
    {is400?(
        <div className='flex h-[138vh] overflow-hidden flex-col items-center justify-center'>
            <div id="about" className=' mb-20 scroll-mt-20'>
              <Header text="ABOUT" />
            </div>
                  
            <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center gap-y-10 text-rose overflow-hidden h-[55rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
                <div className='flex flex-col text-base h-full w-full justify-center'>
                <div ref={textRef} className='flex flex-col justify-center mt-10 h-full w-full'>
                  <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                  <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                  <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
                </div>
                  <div className='mt-10 relative'>
                    <EmailButton />
                  </div>
               </div>
              </div>
                <div className='justify-center mt-20'>
                <a href={CV} download="Ashutosh_Burman_CV.pdf">
                    <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
                </a>
            </div>
          </div>

    ):
    
    is460?(
            <div className='flex h-[114vh] overflow-hidden flex-col items-center justify-center'>
            <div id="about" className=' mb-20 scroll-mt-20'>
              <Header text="ABOUT" />
            </div>
            
              <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center gap-y-10 text-rose overflow-hidden h-[50rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
                <div className='flex flex-col text-base h-full w-full justify-center'>
                  <div ref={textRef} className='flex flex-col justify-center mt-10 h-full w-full'>
                      <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                      <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                      <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
                  </div>
                  <div className='mt-10 relative'>
                    <EmailButton />
                  </div>
                </div>
              </div>
              <div className='justify-center mt-20'>
                <a href={CV} download="Ashutosh_Burman_CV.pdf">
                  <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
                </a>
              </div>
            </div>

    ):

    isMobile? (
      <div className='flex h-[100vh] overflow-hidden flex-col items-center justify-center'>
      <div id="about" className=' mb-20 scroll-mt-20'>
        <Header text="ABOUT" />
      </div>
      
        <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center gap-y-10 text-rose overflow-hidden h-[50rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
          <div className='flex flex-col text-base h-full w-full justify-center'>
            <div ref={textRef} className='flex flex-col justify-center mt-10 h-full w-full'>
                <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
            </div>
            <div className='mt-10 relative'>
              <EmailButton />
            </div>
          </div>
        </div>
        <div className='justify-center mt-20'>
          <a href={CV} download="Ashutosh_Burman_CV.pdf">
            <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
          </a>
        </div>
      </div>
    ):
    is705?(
      <div className='flex h-[78vh] overflow-hidden flex-col items-center justify-center'>
      <div id="about" className=' mb-20 scroll-mt-20'>
        <Header text="ABOUT" />
      </div>
      
        <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center gap-y-10 text-rose overflow-hidden h-[50rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
          <div className='flex flex-col h-full w-full justify-center'>
            <div ref={textRef} className='flex flex-col text-base justify-center mt-10 h-full w-full'>
                <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
            </div>
            <div className='mt-10 relative'>
              <EmailButton />
            </div>
          </div>
        </div>
        <div className='justify-center mt-10'>
          <a href={CV} download="Ashutosh_Burman_CV.pdf">
            <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
          </a>
        </div>
      </div>

    ):
    
    isTab?(

    <div className='flex h-[80vh] overflow-hidden flex-col items-center justify-center'>
      <div id="about" className=' mb-20 scroll-mt-20'>
        <Header text="ABOUT" />
      </div>
      
        <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center gap-y-10 text-rose overflow-hidden h-[50rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
          <div className='flex flex-col mt-10 h-full w-full justify-center'>
            <div ref={textRef} className='flex flex-col justify-center mt-10 h-full w-full'>
                <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
            </div>
            <div className='mt-10 relative'>
              <EmailButton />
            </div>
          </div>
        </div>
        <div className='justify-center mt-10'>
          <a href={CV} download="Ashutosh_Burman_CV.pdf">
            <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
          </a>
        </div>
      </div>
    ):

    is1270?(
      <div className='flex h-[75vh] overflow-hidden flex-col items-center justify-center'>
           <div id="about" className=' mb-20 scroll-mt-20'>
             <Header text="ABOUT" />
           </div>
           
           <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center gap-y-10 text-rose overflow-hidden h-[30rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
              <div className='flex flex-col h-full w-full justify-center'>
               <div ref={textRef} className='flex flex-col justify-center h-full w-full'>
                   <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                   <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                   <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
               </div>
               <div className='mt-10 relative'>
                 <EmailButton />
               </div>
              </div>
           </div>
           <div className='justify-center mt-10'>
             <a href={CV} download="Ashutosh_Burman_CV.pdf">
               <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
             </a>
           </div>
       </div>
    )
     : (
      <div className='flex h-[75vh] overflow-hidden flex-col items-center justify-center'>
           <div id="about" className=' mb-20 scroll-mt-20'>
             <Header text="ABOUT" />
           </div>
           
           <div className="flex flex-col bg-[hsl(0,0%,0%)] mx-6 text-center text-rose overflow-hidden h-[30rem] max-w-[80rem] justify-center items-center px-12 py-16 font-inter text-extralight text-lg">
              <div className='flex flex-col h-full w-full justify-center'>
               <div ref={textRef} className='flex flex-col justify-center h-full w-full'>
                   <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology,<br/> with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
                   <p><br/>Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for<br/> achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
                   <p><br/>My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my <br/>knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project <br/> I work on reflects my best possible work.</p>
               </div>
               <div className='flex flex-col item-end bottom-20 justify-end'>
                 <EmailButton />
               </div>
              </div>
           </div>
           <div className='justify-center mt-10'>
             <a href={CV} download="Ashutosh_Burman_CV.pdf">
               <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
             </a>
           </div>
       </div>
    )}

  </div>
  )
}


export default AboutPage