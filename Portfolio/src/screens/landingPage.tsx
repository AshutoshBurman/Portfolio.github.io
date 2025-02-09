import MenuBar from "../components/MenuBar";

import IFrame from "../assets/Ellipse32.svg";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
// import Stack from "../assets/stack-overflow.png";
// import Medium from "../assets/medium.png";

const LandingPage = () => {
  return (
    <>
      {/* Background Element */}
      <div className="background blur-sm"></div>
      {/* Main Content */}
      <div id='FrontPage' className="w-[100vw] h-[100vh] items-start justify-center flex flex-row select-none">
        <div className="h-[80vh] max-w-[60rem] tab:w-full mx-4 items-start justify-center flex flex-wrap">
          <div className="h-[80%] w-[60%] flex flex-col items-center justify-around left-0 absolute z-0">
            <div className="h-10 blur-3xl w-48 rotate-12 flex flex-col rounded-full top-60 left-60 bg-pinkish-purple  shadowEffect2"></div>
            <div className="h-20 blur-3xl w-36 bg-electric-purple flex flex-col top-20 left-16 shadowEffect3"></div>
            <div className="h-0 w-44 flex blur-3xl flex-col rounded-full self-center absolute top-0 left-0 bg-royal-blue  shadowEffect"></div>
            <div className="h-0 w-0 flex blur-3xl flex-col rounded-full absolute top-72 left-0 bg-pinkish-purple  shadowEffect4"></div>
          </div>
          <MenuBar />
          <div className="flex flex-row h-[40vh] tab:flex-col-reverse tab:justify-center tab:h-[80vh] justify-between items-center w-full">
            <div className="flex flex-col h-72 overflow-hidden tab:justify-center tab:item-center tab:w-[90%] tab:mx-6 relative">
              <div className="flex flex-col justify-center tab:justify-center item-star h-full w-[40rem] select-none">
                <h1 className="font-josefinSlab text-white font-[200] tab:text-4xl text-5xl">Hello!</h1>
                <h1 className="font-josefinSlab text-white font-[200] tab:text-4xl text-5xl">
                  It's <span className="font-[400] tab:text-4xl text-slate-200">Ashutosh Burman</span>
                </h1>
                <h1 className="font-josefinSlab text-white font-[200] tab:text-4xl text-5xl">Software Engineer</h1>
              </div>
              <div className="flex flex-row justify-evenly w-52">
                <div className="bg-git h-10 w-10 flex tab:h-8 tab:w-8 justify-center items-center">
                  <a href="https://github.com/AshutoshBurman" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="Github-icon" className="h-7 w-7 tab:h-5 tab:w-5" />
                  </a>
                </div>
                <div className="bg-linkedIn h-10 w-10 flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/ashutoshburman/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn-icon" className="h-5 w-5 tab:h-5 tab:w-5" />
                  </a>
                </div>
                <div className=" h-10 w-10 flex justify-center items-center">  {/* TODO:bg-stack (for color)  */}
                  {/* <img src={Stack} alt="StackOverflow-icon" className="h-6 w-6 tab:h-5 tab:w-5" /> */}
                </div>
                <div className=" h-10 w-10 flex justify-center items-center"> {/* TODO:bg-medium (for color)  */}

                  {/* <img src={Medium} alt="Medium-icon" className="h-7 w-7 tab:h-5 tab:w-5" /> */}
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute w-[10rem] h-[10rem] rounded-full z-0 tab:w-[10rem] imageShadow tab:h-[10rem]"></div>
              <div className="relative flex justify-center tab:w-[15rem] tab:h-[15rem] overflow-hidden items-center z-10">
                <img src={IFrame} alt="ImageFrame" className="h-[25rem] w-[25rem]  overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;