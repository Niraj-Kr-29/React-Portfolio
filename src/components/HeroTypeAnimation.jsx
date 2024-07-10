import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroTypeAnimation = () => {
  return (
    <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Niraj Kumar",
        1000, 
        "An Engineer",
        1000,
        "A Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{fontSize:'1em', display: 'inline-block' }}
      className='text-customPink'
      repeat={Infinity}
    />
    </div>
  )
}

export default HeroTypeAnimation