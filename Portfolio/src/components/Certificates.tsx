import Header from './Header'
import AWS from '../assets/aws.png'
import AWS2 from '../assets/aws2.png'
import AWS3 from '../assets/aws3.png'
import Arrow from '../assets/arrow.svg'
import { motion, useMotionValue, useTransform } from "motion/react"
import { useMediaQuery } from 'react-responsive'



const Certificates= () => {


    const is1292 = useMediaQuery({query:'(max-width:1292px)'});


    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -10]);
    const rotateY = useTransform(x, [-100, 100], [-20, 50]);
    const x2 = useMotionValue(0);
    const y2 = useMotionValue(0);
    const rotateX2 = useTransform(y2, [-100, 100], [30, -30])
    const rotateY2 = useTransform(x2, [-100, 100], [-30, 30])
    const x3 = useMotionValue(0);
    const y3 = useMotionValue(0);
    const rotateX3 = useTransform(y3, [-100, 100], [30, -10])
    const rotateY3 = useTransform(x3, [100, -100], [10, -40])
    const x6 = useMotionValue(0)
    const y6 = useMotionValue(0)
    const rotateX6 = useTransform(y6, [-100, 100], [30, -30])
    const rotateY6 = useTransform(x6, [-100, 100], [-30, 30])
    const x4 = useMotionValue(0);
    const y4 = useMotionValue(0);
    const rotateX4 = useTransform(y4, [-100, 100], [30, -30])
    const rotateY4 = useTransform(x4, [-100, 100], [-30, 30])
    const x5 = useMotionValue(0);
    const y5 = useMotionValue(0);
    const rotateX5 = useTransform(y5, [-100, 100], [30, -30])
    const rotateY5 = useTransform(x5, [-100, 100], [-30, 30])

  return (
    <div>
        {is1292 ? (
        <div className='min-h-[100vh] justify-around select-none mx-auto items-center flex flex-col '>
            <div className="flex flex-col h-full w-[80%] justify-evenly items-center">
                <div id='certificates' className='scroll-mt-20 mt-40 mb-28'>
                    <Header text="CERTIFICATES"/>
                </div>
                <div className='flex self-start w-full'>
                    <motion.div style={{x: x6, y: y6, rotateX: rotateX6, rotateY: rotateY6, z:110}} drag dragElastic={0.15}
                    dragConstraints={{top:0, left:0, right:0, bottom:0}}>
                        <img src={AWS}   className="h-40 w-full cursor-grabbing shadow-[0px_0px_30px] shadow-[hsla(0,0%,100%,0.4)] relative" alt="AWSCertificate" />
                    </motion.div>
                </div>
                <div className="flex self-center my-4">
                    <motion.div style={{x: x4, y: y4, rotateX: rotateX4, rotateY: rotateY4, z:110}} drag dragElastic={0.15}
                    dragConstraints={{top:0, left:0, right:0, bottom:0}}>
                        <img src={AWS2} className='h-40 w-full cursor-grabbing shadow-[0px_0px_30px] shadow-[hsla(0,0%,100%,0.4)] relative' alt="AWSCertificate" />
                    </motion.div>
                </div>
                <div className="flex self-end">
                    <motion.div style={{x: x5, y: y5, rotateX: rotateX5, rotateY: rotateY5, z:100}} drag dragElastic={0.15}
                    dragConstraints={{top:0, left:0, right:0, bottom:0}}>
                        <img src={AWS3}   className="h-40 w-full cursor-grabbing shadow-[0px_0px_30px] shadow-[hsla(0,0%,100%,0.4)] relative" alt="AWSCertificate" />
                    </motion.div>
                </div>
            </div>
            <div className='h-10 w-10 sm:h-8 sm:w-8 flex flex-col button-footer self-end mr-14 mt-20 justify-center items-center '>
                <a href="#FrontPage">
                    <div className='sm:h-8 sm:w-8 h-10 w-10 justify-center items-center flex flex-row '>
                        <img src={Arrow} className='absolute h-7 sm:h-5' alt="move to the front page" />
                    </div>
                </a>
            </div>
        </div>
        ) : (
        <div className='min-h-[90vh] w-full select-none justify-around  items-center flex flex-col'>
            <div id='certificates' className='scroll-mt-20 mt-40 mb-20'>
                <Header text="CERTIFICATES"/>
            </div>            
            <div className='grid grid-row-1 grid-flow-col gap-4'>  
                <div >
                    <motion.img style={{x, y, rotateX, rotateY, z:100}} drag dragElastic={0.15}
                    dragConstraints={{top:0, left:0, right:0, bottom:0}} src={AWS}   className="h-40 w-full cursor-grabbing shadow-[-10px_10px_30px] shadow-[hsla(0,0%,100%,0.4)] relative" alt="AWSCertificate" />
                </div>
                <div >
                    <motion.img style={{x: x2, y: y2, rotateX: rotateX2, rotateY: rotateY2, z:110}} drag dragElastic={0.15}
                    dragConstraints={{top:0, left:0, right:0, bottom:0}} src={AWS2} className='h-40 w-full cursor-grabbing shadow-lg shadow-[hsla(0,0%,100%,0.4)] relative' alt="AWSCertificate" />
                </div>
                <div>
                    <motion.img style={{x: x3, y: y3, rotateX: rotateX3, rotateY: rotateY3, z:100}} drag dragElastic={0.15}
                    dragConstraints={{top:0, left:0, right:0, bottom:0}} src={AWS3}   className="h-40 w-full cursor-grabbing shadow-[10px_10px_30px] shadow-[hsla(0,0%,100%,0.4)] relative" alt="AWSCertificate" />
                </div>
            </div>
            <div className='h-10 w-10 flex flex-col button-footer self-end mr-14 justify-center items-center '>
                <a href="#FrontPage">
                    <div className='h-10 w-10 justify-center items-center flex flex-row '>
                        <img src={Arrow} className='absolute h-7' alt="move to the front page" />
                    </div>
                </a>
            </div>
        </div>
        )}
    </div>
  )
}

export default Certificates;