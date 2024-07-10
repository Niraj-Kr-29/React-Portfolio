import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Footer = () => {
  return (
    <div className='h-36 bg-cardGrey flex flex-col gap-3 pt-7'>
      <div className='flex justify-center items-center'>
      <div className="font-bold text-neutral-300 lg:text-xl sm:text-xl text-sm p-5">
        <TypeAnimation
      sequence={[
        '"There are 10 types of people in the world: those who understand binary, and those who do not."',
        1000,
        '"I would love to change the world, but they will not give me the source code."',
        1000,
        '"Why do programmers prefer dark mode? Because light attracts bugs."',
        1000,
        '"Software development is 10% writing code and 90% understanding why it does not work."',
        1000,

      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </div>
      </div>
      <div className='flex justify-center text-neutral-300 text-lg'>
        Thank You!
      </div>
    </div>
  )
}

export default Footer