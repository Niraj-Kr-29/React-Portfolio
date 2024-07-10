import React from 'react'

const CustomButton = ({ButtonTxt = "Click Me",width='150px',fontSize='14px',link=''}) => {
  return (
    <div>
      <button className='bg-gradient-to-tl from-buttonGrey1 to-buttonGrey2 pt-[16px] pb-[16px] text-customPink transition-all rounded-md  font-bold hover:to-black hover:scale-105'style={{fontSize, width,boxShadow:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"}} 
      
      onClick={()=>{
        let newTab = document.createElement('a')
        newTab.href = link
        newTab.target = '_blank'
        newTab.click()
      }}
      
      >{ButtonTxt}</button>

    </div>
  )
}

export default CustomButton