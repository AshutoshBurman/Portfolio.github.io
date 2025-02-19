import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const isMobile = useMediaQuery({query: "(max-width: 660px)"});
    const isTablet = useMediaQuery({query: "(max-width: 880px)"});
    const is990 = useMediaQuery({query: "(max-width:990px)"});
    const isDesktop = useMediaQuery({query: "(max-width: 1200px)"});
    const is1400 = useMediaQuery({query: "(max-width: 1400px)"});

    return (

        <div>
            {isMobile? (
                 <div className="flex h-[30vh] w-full overflow-hidden flex-col relative justify-end items-center">
                 <div className="bg-white/0 overflow-hidden backdrop-blur-sm h-8 max-w-[80vw] absolute justify-center items-center flex-row flex bottom-3 z-10">
                     <p className="text-white select-none font-thin text-xs font-inter">Copyright 2025 © Ashutosh Burman. All rights reserved.</p>
                 </div>
     
                 <div className="footer h-[10rem] overflow-hidden flex flex-row justify-between items-end w-full">
                     <div className="group relative flex h-16 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                         <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-20 w-1 rounded-t-full bg-[#b5179d]">
                         <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                     </div>
                     <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                         <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-28 w-1 rounded-t-full bg-[#560bad]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3a0ca3]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3f37c9]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-24 w-1 rounded-t-full bg-[#4361ee]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-20 w-1 rounded-t-full bg-[#4895ef]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-16 w-1 rounded-t-full bg-[#4cc9f0]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-20 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                     </div>
                     <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-36 w-1 rounded-t-full bg-[#560bad]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3a0ca3]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-24 w-1 rounded-t-full bg-[#3f37c9]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-20 w-1 rounded-t-full bg-[#4361ee]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-16 w-1 rounded-t-full bg-[#4895ef]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                     </div>
                     <div className="group relative flex h-20 w-1 rounded-t-full bg-[#4cc9f0]">
                         <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                         <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                     </div>
                 </div>
             </div>

            ) : isTablet ? (
                <div className="flex h-[30vh] w-full flex-col relative justify-end items-center">
                <div className="bg-white/0 backdrop-blur-sm h-10 min-w-[20rem] absolute justify-center items-center flex-row flex bottom-3 z-10">
                    <p className="text-white select-none font-thin text-xs font-inter">Copyright 2025 © Ashutosh Burman. All rights reserved.</p>
                </div>
    
                <div className="footer h-[12rem] overflow-hidden flex flex-row justify-evenly items-end w-full">
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                </div>
            </div>

            ) : is990 ?  (
                <div className="flex h-[30vh] w-full flex-col relative justify-end items-center">
                <div className="bg-white/0 backdrop-blur-sm h-10 min-w-[26rem] absolute justify-center items-center flex-row flex bottom-5 z-10">
                    <p className="text-white select-none font-extralight text-sm font-inter">Copyright 2025 © Ashutosh Burman. All rights reserved.</p>
                </div>
    
                <div className="footer h-[12rem] overflow-hidden flex flex-row justify-evenly items-end w-full">
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>   
                </div>
            </div>
            ) : isDesktop ? (

                <div className="flex h-[30vh] w-full flex-col relative justify-end items-center">
                <div className="bg-white/0 backdrop-blur-sm h-10 min-w-[26rem] absolute justify-center items-center flex-row flex bottom-5 z-10">
                    <p className="text-white select-none font-extralight text-sm font-inter">Copyright 2025 © Ashutosh Burman. All rights reserved.</p>
                </div>
    
                <div className="footer h-[12rem] overflow-hidden flex flex-row justify-evenly items-end w-full">
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                </div>
            </div>

            ): is1400 ? (
                <div className="flex h-[30vh] w-full flex-col relative justify-end items-center">
                <div className="bg-white/0 backdrop-blur-sm h-10 min-w-[26rem] absolute justify-center items-center flex-row flex bottom-5 z-10">
                    <p className="text-white select-none font-extralight text-sm font-inter">Copyright 2025 © Ashutosh Burman. All rights reserved.</p>
                </div>
    
                <div className="footer h-[12rem] overflow-hidden flex flex-row justify-evenly items-end w-full">
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4895ef]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4cc9f0]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-32 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#b5179d]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-20 w-1 rounded-t-full bg-[#560bad]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-24 w-1 rounded-t-full bg-[#3a0ca3]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                    </div>
                    <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3f37c9]">
                        <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                        <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                    </div>
                </div>
            </div>


            ) :(
                    <div className="flex h-[30vh] w-full flex-col relative justify-end items-center">
                    <div className="bg-white/0 backdrop-blur-sm h-10 min-w-[26rem] absolute justify-center items-center flex-row flex bottom-5 z-10">
                        <p className="text-white select-none font-extralight text-sm font-inter">Copyright 2025 © Ashutosh Burman. All rights reserved.</p>
                    </div>
        
                    <div className="footer h-[12rem] overflow-hidden flex flex-row justify-evenly items-end w-full">
                        <div className="group relative flex h-20 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                            <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                            <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                            <div className="absolute -inset-8  rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#560bad]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3a0ca3]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-44 w-1 rounded-t-full bg-[#3f37c9]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4895ef]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#4cc9f0]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-20 w-1 rounded-t-full bg-[#b5179d]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#560bad]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3a0ca3]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#3f37c9]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4361ee]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4cc9f0]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                        </div>
                        <div className="group relative flex h-20 w-1 rounded-t-full bg-[#7209b7]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3a0ca3]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#3f37c9]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4361ee]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4895ef]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4cc9f0]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#b5179d]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-20 w-1 rounded-t-full bg-[#560bad]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#3a0ca3]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#3f37c9]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4361ee]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4895ef]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-44 w-1 rounded-t-full bg-[#4cc9f0]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#b5179d]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#7209b7]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-20 w-1 rounded-t-full bg-[#3a0ca3]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-24 w-1 rounded-t-full bg-[#3f37c9]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-28 w-1 rounded-t-full bg-[#4361ee]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-32 w-1 rounded-t-full bg-[#4895ef]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
                        </div>
                        <div className="group relative flex h-36 w-1 rounded-t-full bg-[#4cc9f0]">
                            <div className="absolute -inset-8 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-100 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
                        </div>
                    </div>
                </div>

            )}

        </div>

        
    )
}


export default Footer;