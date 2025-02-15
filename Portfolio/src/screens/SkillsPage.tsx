import Header from "../components/Header";
import 'boxicons/css/boxicons.min.css';
import { useMediaQuery } from "react-responsive";
import ReactIcon  from '../assets/ReactIcon.svg';
import Tailwind from '../assets/Tailwind.svg';
import Mysql from '../assets/mysql.svg';
import MongoDB from '../assets/MongoDB.svg';
import JavaScript from '../assets/javascript.svg';
import TypeScript from '../assets/typescript.svg';
import Python from '../assets/python.svg';
import Node from '../assets/node.svg';
import Express from '../assets/express.svg';
import Sass from '../assets/sass.svg';
import Aws from '../assets/aws.svg';
import Azure from '../assets/azure.svg';
import Expo from '../assets/expo.svg';
import Figma from '../assets/figma.svg';
import Canva from '../assets/canva.svg';
import Inkscape from '../assets/inkscape.svg';
import Android from '../assets/android.svg';
import Gitlab from '../assets/gitlab.svg';
import Bug from '../assets/bug.svg';
import Docker from '../assets/docker.svg';



const SkillsPage = () => {

    const isMobile = useMediaQuery({query: "(max-width: 660px"});
    const is1130 = useMediaQuery({query: "(max-width: 1130px)"});

  return (
    <div>
        {isMobile? (
            <div className="flex select-none min-h-[100vh] pt-20 flex-col justify-center items-center">
                {/* header */}
                <div id='skills' className='scroll-mt-20 mt-20'>
                    <Header text="SKILLS" />
                </div>               
                <div className=" grid grid-rows-8 mt-14 justify-center gap-2 grid-flow-col">
                    <div className=" h-64 w-full">
                           {/* Frontend */}
                           <div className="flex flex-col h-96 w-80 items-center ">  
                                <div className="flex flex-col bg-[hsla(333,93%,56%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                                    <h1 className=" font-inter text-xl font-normal text-white">Frontend</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-9 w-9 absolute rounded-full bg-[hsla(191,65%,60%,0.4)] blur-sm">
                                        </div>
                                        <img className="h-7 w-7 relative" src={ReactIcon} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-base font-inter">React</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-9 w-9 absolute rounded-full bg-[hsl(199,95%,60%,0.4)] blur-sm"></div>
                                        <img className="h-7 w-7 relative" src={Tailwind} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-base font-inter"> Tailwind CSS</h1>
                                </div>
                            {/* ------ */}
                            </div>

                    </div>
                    <div className=" h-64 w-80 items-center flex flex-col">
                        {/* Database */}
                        <div className="flex flex-col bg-[hsla(309,77%,40%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Database</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(191,98%,28%,0.4)] blur-sm"></div>
                                <img className="h-8 w-8 relative" src={Mysql} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">MySQL</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(145,100%,47%,0.3)] blur-sm">
                                </div>
                                <img className="h-8 w-8 relative" src={MongoDB} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">MongoDB</h1>
                        </div>
                    </div>
                    <div className=" h-64 w-80 flex flex-col items-center">
                    {/* Backend */}
                        <div className="flex flex-col  bg-[hsl(276,91%,38%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Backend</h1>
                        </div>
                            {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                <div className=" justify-center flex flex-row items-center">
                                    <div className="h-9 w-9 absolute rounded-full bg-[hsla(108,34%,47%,0.4)] blur-sm"></div>
                                    <img className="h-7 w-7 relative" src={Node} alt="ReactIcon" />
                                </div>
                            <h1 className="text-white mx-4 text-base font-inter">Node Js</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(0,0%,100%,0.6)] blur-sm">
                                </div>
                                <img className="h-5 w-5 relative" src={Express} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Express</h1>
                        </div>
                    </div>
                    {/* Languages */}
                    <div className=" h-64 w-80 flex flex-col items-center">
                    <div className="flex flex-col  bg-[hsl(268,88%,36%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Languages</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(53,94%,54%,0.3)] blur-sm"></div>
                                <img className="h-7 w-7 relative" src={JavaScript} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">JavaScript</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(211,61%,48%,0.4)] blur-sm"></div>
                                <img className="h-7 w-7 relative" src={TypeScript} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">TypeScript</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(207,52%,40%,0.4)] blur-sm"></div>
                                <img className="h-7 w-7 relative" src={Python} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Python</h1>
                        </div>

                    </div>
                    {/* Cloud */}
                    <div className=" h-64 w-80 flex flex-col items-center">
                    <div className="flex flex-col  bg-[hsla(243,57%,50%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Cloud</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(37,100%,67%,0.5)] blur-sm">
                                </div>
                                <img className="h-6 w-6 relative" src={Aws} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">AWS</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(199,62%,58%,0.4)] blur-sm"></div>
                                <img className="h-6 w-6 relative" src={Azure} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Azure</h1>
                        </div>
                    </div>
                    {/* Mobile App */}
                    <div className=" h-64 w-80 flex flex-col items-center">
                        <div className="flex flex-col  bg-[hsla(229,83%,60%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Mobile App</h1>
                        </div>
                        {/* Icon */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(191,65%,60%,0.3)] blur-sm"></div>
                                <img className="h-7 w-7 relative" src={ReactIcon} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">React Native</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-7 w-7 absolute rounded-full bg-[hsla(0,0%,100%,0.4)] blur-sm">
                                </div>
                                <img className="h-6 w-6 relative" src={Expo} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Expo</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(147,69%,55%,0.4)] blur-sm">
                                </div>
                                <img className="h-7 w-7 relative" src={Android} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Android</h1>
                        </div>
                    </div>
                    {/*  */}
                    <div className=" h-64 w-80 flex flex-col items-center">
                    <div className="flex flex-col  bg-[hsla(212,84%,61%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Design Tools</h1>
                        </div>
                        {/* Icon */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-8 w-8 absolute rounded-full bg-[hsla(6,97%,68%,0.4)] blur-sm"></div>
                                <img className="h-6 w-6 relative" src={Figma} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Figma</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(0,0%,100%,0.4)] blur-sm">
                                </div>
                                <img className="h-6 w-6 relative" src={Inkscape} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Inkscape</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(194,94%,67%,0.3)] blur-sm">
                                </div>
                                <img className="h-6 w-6 relative" src={Canva} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Canva</h1>
                        </div>
                    </div>
                    {/* Other */}
                    <div className=" h-64 w-80 flex flex-col items-center">
                        <div className="flex flex-col  bg-[hsla(194,85%,62%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-16 w-[18rem]">
                            <h1 className=" font-inter text-xl font-normal text-white">Others</h1>
                        </div>
                        {/* Icon */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(21,98%,56%,0.3)] blur-sm"></div>
                                <img className="h-6 w-6 relative" src={Gitlab} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">GitLab</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(220,85%,52%,0.5)] blur-sm"></div>
                                <img className="h-6 w-6 relative" src={Docker} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Docker</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(33,86%,58%,0.4)] blur-sm"></div>
                                <img className="h-6 w-6 relative" src={Bug} alt="Bitbucket" />
                            </div>
                            <h1 className="text-white mx-4 text-base font-inter">Web Security Test</h1>
                        </div>
                    </div>

                </div>

            </div>

        ): 
        is1130 ? (
            <div className=" flex flex-col select-none min-h-[150vh] pb-20 pt-20 w-full justify-center items-center">
                <div className="flex flex-col  h-full max-w-[70rem] justify-center items-center">
                    {/* header */}
                    <div id='skills' className='scroll-mt-20'>
                        <Header text="SKILLS" />
                    </div>
                <div className=" flex flex-col  min-h-[50vh] max-w-[70rem]  relative top-28 justify-normal items-center">
                    <div className="flex flex-col  justify-center h-full w-full relative">
                        <div className="flex flex-col h-96 z-50 w-full  left-36 relative space-y-10 items-center justify-between">
                            {/* Database */}
                            <div className="flex flex-col h-96 w-80 mt-4">
                                <div className="flex flex-col bg-[hsla(309,77%,40%,0.2)]  justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Database</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-12 w-12 absolute rounded-full bg-[hsla(191,98%,28%,0.4)] blur-sm"></div>
                                        <img className="h-10 w-10 relative" src={Mysql} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">MySQL</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-10 w-10 absolute rounded-full bg-[hsla(145,100%,47%,0.3)] blur-sm">
                                        </div>
                                        <img className="h-9 w-9 relative" src={MongoDB} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">MongoDB</h1>
                                </div>
                                {/* ------ */}
                            </div>
        
                            {/* Languages */}
                            <div className="flex flex-col h-96 w-80">  
                                <div className="flex flex-col  bg-[hsl(268,88%,36%,0.2)] justify-center self-end items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Languages</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(53,94%,54%,0.3)] blur-sm"></div>
                                        <img className="h-8 w-8 relative" src={JavaScript} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">JavaScript</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(211,61%,48%,0.4)] blur-sm"></div>
                                        <img className="h-8 w-8 relative" src={TypeScript} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">TypeScript</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(207,52%,40%,0.4)] blur-sm"></div>
                                        <img className="h-9 w-9 relative" src={Python} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Python</h1>
                                </div>
                                    {/* ------ */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  h-[30rem] w-[20rem] z-10 right-36 absolute justify-between  items-start">
                                {/* Frontend */}
                            <div className="flex flex-col h-96 w-80 ">  
                                <div className="flex flex-col bg-[hsla(333,93%,56%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Frontend</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(191,65%,60%,0.4)] blur-sm">
                                        </div>
                                        <img className="h-9 w-9 relative" src={ReactIcon} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">React</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-10 w-10 absolute rounded-full bg-[hsl(199,95%,60%,0.4)] blur-sm"></div>
                                        <img className="h-9 w-9 relative" src={Tailwind} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter"> Tailwind CSS</h1>
                                </div>
                                {/* ------ */}
                            </div>
                            {/* Backend */}
                            <div className="flex flex-col h-96 w-80 ">  
                                <div className="flex flex-col  bg-[hsl(276,91%,38%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Backend</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                        <div className=" justify-center flex flex-row items-center">
                                            <div className="h-11 w-11 absolute rounded-full bg-[hsla(108,34%,47%,0.4)] blur-sm"></div>
                                            <img className="h-9 w-9 relative" src={Node} alt="ReactIcon" />
                                        </div>
                                        <h1 className="text-white mx-4 text-xl font-inter">Node Js</h1>
                                    </div>
                                    <div className="flex flex-row h-14 w-80 justify-center items-center">
                                        <div className=" justify-center flex flex-row items-center">
                                            <div className="h-10 w-10 absolute rounded-full bg-[hsla(0,0%,100%,0.6)] blur-sm">
                                            </div>
                                            <img className="h-7 w-7 relative" src={Express} alt="ReactIcon" />
                                        </div>
                                        <h1 className="text-white mx-4 text-xl font-inter">Express</h1>
                                    </div>
                                    {/* ------ */}
                            </div>
                        </div>
                    </div>

                    {/* second half */}
                <div className=" flex flex-col min-h-[50vh] max-w-[70rem]  relative top-28 justify-normal items-center">
                    <div className="flex flex-col justify-center h-full w-full relative">
                        <div className="flex flex-col h-96 z-50 mt-40 w-full left-36 relative space-y-10 items-center justify-between">
                            {/* Mobile App */}
                            <div className="flex flex-col h-96 w-80 mt-2">
                                <div className="flex flex-col bg-[hsla(229,83%,60%,0.2)]  justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Mobile App</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(191,65%,60%,0.3)] blur-sm"></div>
                                        <img className="h-9 w-9 relative" src={ReactIcon} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">React Native</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-9 w-9 absolute rounded-full bg-[hsla(0,0%,100%,0.4)] blur-sm">
                                        </div>
                                        <img className="h-7 w-7 relative" src={Expo} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Expo</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(147,69%,55%,0.4)] blur-sm">
                                        </div>
                                        <img className="h-9 w-9 relative" src={Android} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Android</h1>
                                </div>
                                {/* ------ */}
                            </div>
        
                            {/* Others */}
                            <div className="flex flex-col  h-96 w-80 ">  
                                <div className="flex flex-col  bg-[hsla(194,85%,62%,0.2)] justify-center self-end items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Others</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(21,98%,56%,0.3)] blur-sm"></div>
                                        <img className="h-8 w-8 relative" src={Gitlab} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">GitLab</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(220,85%,52%,0.5)] blur-sm"></div>
                                        <img className="h-8 w-8 relative" src={Docker} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Docker</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-10 w-10 absolute rounded-full bg-[hsla(33,86%,58%,0.4)] blur-sm"></div>
                                        <img className="h-7 w-7 relative" src={Bug} alt="Bitbucket" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Web Security Test</h1>
                                </div>
                                    {/* ------ */}  
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col  h-[30rem] w-[20rem] z-10 mt-32 right-36 absolute justify-between  items-start">
                                {/* Cloud */}
                            <div className="flex flex-col h-96 w-80 ">  
                                <div className="flex flex-col bg-[hsla(243,57%,50%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Cloud</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(37,100%,67%,0.5)] blur-sm">
                                        </div>
                                        <img className="h-8 w-8 relative" src={Aws} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">AWS</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-10 w-10 absolute rounded-full bg-[hsla(199,62%,58%,0.4)] blur-sm"></div>
                                        <img className="h-7 w-7 relative" src={Azure} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Azure</h1>
                                </div>
                                {/* ------ */}
                            </div>
                            {/* Design tools */}
                            <div className="flex flex-col h-96 w-80 mt-20">  
                                <div className="flex flex-col  bg-[hsla(212,84%,61%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                                    <h1 className=" font-inter text-2xl font-normal text-white">Design Tools</h1>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-10 w-10 absolute rounded-full bg-[hsla(6,97%,68%,0.4)] blur-sm"></div>
                                        <img className="h-8 w-8 relative" src={Figma} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Figma</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(0,0%,100%,0.4)] blur-sm">
                                        </div>
                                        <img className="h-8 w-8 relative" src={Inkscape} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Inkscape</h1>
                                </div>
                                <div className="flex flex-row h-14 w-80 justify-center items-center">
                                    <div className=" justify-center flex flex-row items-center">
                                        <div className="h-11 w-11 absolute rounded-full bg-[hsla(194,94%,67%,0.3)] blur-sm">
                                        </div>
                                        <img className="h-8 w-8 relative" src={Canva} alt="ReactIcon" />
                                    </div>
                                    <h1 className="text-white mx-4 text-xl font-inter">Canva</h1>
                                </div>
                                    {/* ------ */}
                            </div>
                        </div>
                    </div>
                    

                {/* ------ */}
                </div>
            </div>
        ):(

        <div className=" select-none flex flex-col  min-h-[60rem] mb-10 w-full justify-start items-center">
        <div className="flex flex-col relative max-w-[70rem] justify-between items-center">
            {/* header */}
            <div id='skills' className='scroll-mt-20 pt-20'>
                <Header text="SKILLS" />
            </div>
           
           <div className=" flex flex-col min-h-[20rem] w-[70rem] relative mt-28 items-center">
            <div className="flex flex-col h-full w-full">
                <div className="flex flex-row h-60 z-50 w-[75%] top-10 absolute items-start self-end justify-between">
                    {/* Database */}

                    <div className="flex flex-col h-96 w-80">
                        <div className="flex flex-col bg-[hsla(309,77%,40%,0.2)]  justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Database</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-12 w-12 absolute rounded-full bg-[hsla(191,98%,28%,0.4)] blur-sm"></div>
                                <img className="h-10 w-10 relative" src={Mysql} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">MySQL</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(145,100%,47%,0.3)] blur-sm">
                                </div>
                                <img className="h-9 w-9 relative" src={MongoDB} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">MongoDB</h1>
                        </div>
                        {/* ------ */}
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col h-96 w-80 ">  
                        <div className="flex flex-col  bg-[hsl(268,88%,36%,0.2)] justify-center self-end items-center backdrop-blur-[1.5px] h-20 w-[19rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Languages</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(53,94%,54%,0.3)] blur-sm"></div>
                                <img className="h-8 w-8 relative" src={JavaScript} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">JavaScript</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(211,61%,48%,0.4)] blur-sm"></div>
                                <img className="h-8 w-8 relative" src={TypeScript} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">TypeScript</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(207,52%,40%,0.4)] blur-sm"></div>
                                <img className="h-9 w-9 relative" src={Python} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">Python</h1>
                        </div>
                            {/* ------ */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row min-h-60 min-w-[54rem] z-10 absolute justify-between  self-start items-start">

                        {/* Frontend */}
                    <div className="flex flex-col h-96 w-80 ">  
                        <div className="flex flex-col bg-[hsla(333,93%,56%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Frontend</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(191,65%,60%,0.4)] blur-sm">
                                </div>
                                <img className="h-9 w-9 relative" src={ReactIcon} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">React</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(199,95%,60%,0.4)] blur-sm"></div>
                                <img className="h-9 w-9 relative" src={Tailwind} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter"> Tailwind CSS</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(330,52%,61%,0.4)] blur-sm"></div>
                                <img className="h-9 w-9 relative" src={Sass} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter"> Sass</h1>
                        </div>
                        {/* ------ */}
                    </div>

                    <div className="flex flex-col h-96 w-80 ">  
                        <div className="flex flex-col  bg-[hsla(276,91%,38%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Backend</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                <div className=" justify-center flex flex-row items-center">
                                    <div className="h-11 w-11 absolute rounded-full bg-[hsla(108,34%,47%,0.4)] blur-sm"></div>
                                    <img className="h-9 w-9 relative" src={Node} alt="ReactIcon" />
                                </div>
                                <h1 className="text-white mx-4 text-xl font-inter">Node Js</h1>
                            </div>
                            <div className="flex flex-row h-14 w-80 justify-center items-center">
                                <div className=" justify-center flex flex-row items-center">
                                    <div className="h-10 w-10 absolute rounded-full bg-[hsla(0,0%,100%,0.6)] blur-sm">
                                    </div>
                                    <img className="h-7 w-7 relative" src={Express} alt="ReactIcon" />
                                </div>
                                <h1 className="text-white mx-4 text-xl font-inter">Express</h1>
                            </div>
                            {/* ------ */}
                    </div>
                </div>
            </div>
           {/* Second Half */}
           <div className=" flex flex-col h-[50vh] w-[70rem] relative top-28 items-center">
            <div className="flex flex-col justify- h-full w-full">
                <div className="flex flex-row h-60 z-50 w-[75%] top-10 absolute items-start self-end justify-between">
                    {/* Mobile App */}
                    <div className="flex flex-col h-96 w-80">
                        <div className="flex flex-col bg-[hsla(229,83%,60%,0.2)]  justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Mobile App</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(191,65%,60%,0.3)] blur-sm"></div>
                                <img className="h-9 w-9 relative" src={ReactIcon} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">React Native</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-9 w-9 absolute rounded-full bg-[hsla(0,0%,100%,0.4)] blur-sm">
                                </div>
                                <img className="h-7 w-7 relative" src={Expo} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">Expo</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(147,69%,55%,0.4)] blur-sm">
                                </div>
                                <img className="h-9 w-9 relative" src={Android} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">Android</h1>
                        </div>
                        {/* ------ */}
                    </div>

                    {/* Others */}
                    <div className="flex flex-col h-96 w-80 ">  
                        <div className="flex flex-col  bg-[hsla(194,85%,62%,0.2)] justify-center self-end items-center backdrop-blur-[1.5px] h-20 w-[19rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Others</h1>
                        </div>
                        {/* Icon */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(21,98%,56%,0.3)] blur-sm"></div>
                                <img className="h-8 w-8 relative" src={Gitlab} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">GitLab</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(220,85%,52%,0.5)] blur-sm"></div>
                                <img className="h-8 w-8 relative" src={Docker} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">Docker</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(33,86%,58%,0.4)] blur-sm"></div>
                                <img className="h-7 w-7 relative" src={Bug} alt="Bitbucket" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">Web Security Test</h1>
                        </div>

                            {/* ------ */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-60 min-w-[54rem] z-10 absolute justify-between  self-start items-start">

                        {/* Cloud */}
                    <div className="flex flex-col h-96 w-80 ">  
                        <div className="flex flex-col bg-[hsla(243,57%,50%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Cloud</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-11 w-11 absolute rounded-full bg-[hsla(37,100%,67%,0.5)] blur-sm">
                                </div>
                                <img className="h-8 w-8 relative" src={Aws} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">AWS</h1>
                        </div>
                        <div className="flex flex-row h-14 w-80 justify-center items-center">
                            <div className=" justify-center flex flex-row items-center">
                                <div className="h-10 w-10 absolute rounded-full bg-[hsla(199,62%,58%,0.4)] blur-sm"></div>
                                <img className="h-7 w-7 relative" src={Azure} alt="ReactIcon" />
                            </div>
                            <h1 className="text-white mx-4 text-xl font-inter">Azure</h1>
                        </div>
                        {/* ------ */}
                    </div>

                    {/* Design Tools */}
                    <div className="flex flex-col h-96 w-80 ">  
                        <div className="flex flex-col  bg-[hsla(212,84%,61%,0.2)] justify-center items-center backdrop-blur-[1.5px] h-20 w-[20rem]">
                            <h1 className=" font-inter text-2xl font-normal text-white">Design Tools</h1>
                        </div>
                        {/* Icons */}
                        <div className="flex flex-row h-14 w-80 mt-4 justify-center items-center">
                                <div className=" justify-center flex flex-row items-center">
                                    <div className="h-10 w-10 absolute rounded-full bg-[hsla(6,97%,68%,0.4)] blur-sm"></div>
                                    <img className="h-8 w-8 relative" src={Figma} alt="ReactIcon" />
                                </div>
                                <h1 className="text-white mx-4 text-xl font-inter">Figma</h1>
                            </div>
                            <div className="flex flex-row h-14 w-80 justify-center items-center">
                                <div className=" justify-center flex flex-row items-center">
                                    <div className="h-11 w-11 absolute rounded-full bg-[hsla(0,0%,100%,0.4)] blur-sm">
                                    </div>
                                    <img className="h-8 w-8 relative" src={Inkscape} alt="ReactIcon" />
                                </div>
                                <h1 className="text-white mx-4 text-xl font-inter">Inkscape</h1>
                            </div>
                            <div className="flex flex-row h-14 w-80 justify-center items-center">
                                <div className=" justify-center flex flex-row items-center">
                                    <div className="h-11 w-11 absolute rounded-full bg-[hsla(194,94%,67%,0.3)] blur-sm">
                                    </div>
                                    <img className="h-8 w-8 relative" src={Canva} alt="ReactIcon" />
                                </div>
                                <h1 className="text-white mx-4 text-xl font-inter">Canva</h1>
                            </div>
                            {/* ------ */}
                    </div>
                </div>
            </div>
           </div>
           </div>
        ) }

    </div>
  )
}

export default SkillsPage;