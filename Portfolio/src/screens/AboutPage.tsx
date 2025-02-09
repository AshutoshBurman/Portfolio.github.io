import { useRef } from 'react';
import Header from '../components/Header';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CV from '../assets/AshutoshBurman_CV.pdf';
import EmailButton from '../components/Gmail';
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const is400 = useMediaQuery({ query: "(max-width: 400px)" });
  const is460 = useMediaQuery({ query: "(max-width: 460px)" });
  const is540 = useMediaQuery({ query: "(max-width: 540px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const is705 = useMediaQuery({ query: "(max-width: 705px)" });
  const isTab = useMediaQuery({ query: "(max-width: 905px)" });
  const is1270 = useMediaQuery({ query: "(max-width: 1270px)" });

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

  const getHeight = () => {
    if (is400) return 'h-[126vh]';
    if (is460) return 'h-[122vh]';
    if (isMobile) return 'h-[100vh]';
    if (is705) return 'h-[95vh]';
    if (isTab) return 'h-[90vh]';
    if (is1270) return 'h-[80vh]';
    return 'h-[80vh]'; // default height
  };

  const containerHeight = () => {
   
    if (is400) return 'h-[15rem]]';
    if (is460) return 'h-[42rem]';
    if (is540) return 'h-[38rem]';
    if (isMobile) return 'h-[33rem]';
    if (is705) return 'h-[35rem]';
    if (isTab) return 'h-[35rem]';
    if (is1270) return 'h-[35rem]';

    return 'h-[25rem]';
  }

  const getFontSize = () => {
    if (is400) return 'text-base ';
    if (is460) return 'text-base';
    if (isMobile) return 'text-base';
    return 'text-lg'; // default font size
  }

  return (
    <div className={`flex ${getHeight()} overflow-hidden flex-col items-center justify-center select-none`}>
      <div id="about" className='mb-24 scroll-mt-20'>
        <Header text="ABOUT" />
      </div>
      <div className={`flex flex-col bg-[hsl(0,0%,0%)] ${containerHeight()} mx-6 text-center gap-y-10 max-w-[80rem] text-rose overflow-hidden justify-center items-center px-12 py-16 font-inter font-extralight ${getFontSize()}`}>
        <div className='flex flex-col h-full w-full justify-center'>
          <div ref={textRef} className='flex flex-col justify-center mt-10 h-full w-full'>
            <p>I am a student at JAMK University of Applied Sciences in Finland, pursuing a degree in Information and Communication Technology, with a passion for exploring innovative technologies and their potential to transform and enhance our daily lives.</p>
            <p><br />Alongside my technical interests, I value soft skills such as communication, collaboration, and teamwork, which I believe are critical for achieving meaningful and impactful results, and I am deeply committed to delivering high-quality work in every project I undertake.</p>
            <p><br />My goal is to contribute to the development of exceptional products and solutions by constantly seeking opportunities to expand my knowledge, refine my skills, and stay ahead in an ever-evolving technological landscape, ensuring that every project I work on reflects my best possible work.</p>
          </div>
          <div className='mt-10 relative'>
            <EmailButton />
          </div>
        </div>
      </div>
      <div className='justify-center mt-24'>
        <a href={CV} download="Ashutosh_Burman_CV.pdf">
          <button className="button-64" role="button"><span className="font-inter font-light">Download CV</span></button>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;