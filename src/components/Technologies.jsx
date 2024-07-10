import React from 'react'
import CustomBox from './CustomBox'
import tailwind from '../assets/tailwind.png'
import Tailwind from '../assets/Tailwind.svg'
import Node from '../assets/Node.svg'
import Express from '../assets/Express.svg'


const Technologies = () => {
  return (
    <div id='Technologies' className='lg:p-12 sm:p-12 p-4'>
      <CustomBox height='250px'>
        <div>
          <div className='flex justify-center p-4'>
            <div><span className='text-customPink font-semibold sm:text-4xl lg:text-4xl text-2xl'>TECHNOLOGIES</span></div>
          </div>

          <div className='flex flex-wrap lg:gap-10 sm:gap-1 gap-2 p-4'>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12' src="https://techstack-generator.vercel.app/js-icon.svg" alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 pt-4 w-12' src="https://techstack-generator.vercel.app/cpp-icon.svg" alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12' src="https://techstack-generator.vercel.app/react-icon.svg" alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12' src="https://techstack-generator.vercel.app/redux-icon.svg" alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12' src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12' src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12 pt-2 animate-pulse' src={Tailwind} alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12 pt-4 animate-bounce' src={Node} alt="" /></div>
            <div className="hover:scale-110 transition-all"><img className='sm:w-20 lg:w-20 w-12 animate-pulse' src={Express} alt="" /></div>
          </div>

        </div>
      </CustomBox>
    </div>
  )
}

export default Technologies