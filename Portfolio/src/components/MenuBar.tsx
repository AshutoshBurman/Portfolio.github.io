import { useMediaQuery } from "react-responsive";


const MenuBar = ( ) => {

    const isMobile = useMediaQuery({query:'(max-width:540px)'});


    return(
        
        // Mobile Screen
        <div>
            {isMobile ? (
                    <div className="flex-row card-wrapper relative flex rounded-full items-center overflow-hidden justify-evenly m-8">
                        <div className="flex justify-center overflow-hidden items-center relative">
                            <input type="checkbox" id="toggle-menu" className="peer hidden"/>
                            <label htmlFor="toggle-menu" className=" h-[2.2rem] w-[2.2rem] absolute flex rounded-full bg-black transition-opacity duration-75 peer-checked:h-[2rem] peer-checked:justify-center peer-checked:w-[19rem] z-0 peer-checked:z-10">
                                <div className="flex flex-row w-full justify-evenly font-inter font-extralight items-center ">
                                    <div className="text-white">
                                        <a href="#about">
                                            <p>About</p>
                                        </a>
                                    </div>
                                    <div className="text-white">
                                        <a href="#skills">
                                            <p>Skill</p>
                                        </a>
                                    </div>
                                    <div className="text-white">
                                        <a href="#project">
                                            <p>Project</p>
                                        </a>
                                    </div>
                                    <div className="text-white">
                                        <a href="#certificates">
                                            <p>Certificates</p>
                                        </a>
                                    </div> 
                                </div>
                            </label>

                            <label id="white-black" htmlFor="toggle-menu" className="absolute z-10 flex h-[2.2rem] w-[2.2rem] rounded-full bg-black items-center justify-center transition-opacity duration-500 peer-checked:z-0">
                                <p className="font-kings absolute text-white text-2xl cursor-pointer">A</p>
                            </label>

                            <div className="card-wrapper h-[3rem] w-[3rem] overflow-hidden shadow-glow-gradient flex justify-center peer-checked:justify-center items-center transition-all duration-500 peer-checked:w-[20.5rem] peer-checked:h-[3rem]">
                            </div>
                        </div>
                    </div>
             
            ):(
         
                // Default Screen Size
                <div className="flex-row card-wrapper z-50 relative flex h-[3rem] w-[24rem] rounded-full items-center overflow-hidden justify-evenly m-8">
                    <div  className=" bg-black relative flex h-[2.2rem] w-[2.2rem] rounded-full justify-center items-center ">
                        <p className="font-kings absolute font-bold text-white text-2xl cursor-pointer">A</p>
                    </div>
                    <div className="flex relative  h-[2.2rem] w-[20rem] bg-black rounded-full justify-start">
                        <div className="flex flex-row w-full justify-evenly font-inter font-extralight items-center ">
                            <div className="text-white ">
                                <a href="#about">
                                    <p>About</p>
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="#skills">
                                    <p>Skill</p>
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="#project">
                                    <p>Project</p>
                                </a>
                            </div>
                            <div className="text-white">
                                <a href="#certificates">
                                    <p>Certificates</p>
                                </a>
                            </div> 
                        </div>
                    </div>
                </div>

            )}

        </div>

    )
} 

export default MenuBar;