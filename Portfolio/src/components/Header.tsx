import React from 'react'


interface HeaderProps {
  text: string;
}


const Header: React.FC<HeaderProps> = ({text}) => {
  return (
    <div>
        <div className=' h-14 w-72 flex flex-col select-none justify-between items-center relative text-white sm:h-12 sm:w-64  '>
          <div className=' absolute bg-gradient-to-r from-[hsla(0,0%,0%,0.3)] via-[hsla(0,0%,0%,0.6)] to-[hsla(0,0%,0%,0.3)]  h-14 w-64 z-0'></div>
           <h1 className='text-4xl sm:text-3xl font-inter italic z-10 font-extralight text-white'>{text}</h1>
           <div className='h-[2px] w-full z-10 bg-pink rounded-full'></div>
        </div>
    </div>
  )
}

export default Header;