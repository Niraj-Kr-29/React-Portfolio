import React from 'react'

const CustomBox = ({children,height = "200px",width = "100%"}) => {
  return (
    <div>
        <div className="bg-[#212428] rounded-xl" style={{ height,width,boxShadow:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"}}>
          <div className='w-[100%] h-[100%] flex justify-evenly items-center'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default CustomBox