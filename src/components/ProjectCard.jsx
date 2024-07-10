import React from 'react'
import todoListImg from '../assets/todoListImg.jpg'
import CustomButton from './CustomButton'

const ProjectCard = ({title='Title',description='Hello World',image=todoListImg,githubLink='',websiteLink=''}) => {
  return (
    <div className='w-[330px]'>
        <div className='p-5'>
            <div className='h-[200px] bg-cover bg-center'style={{backgroundImage:`url(${image})`}}>
             
            </div>
            <div className='pt-4 break-words w-full flex flex-col'>
              <span className='text-customPink font-semibold'>{title}</span>  
              <div className='flex break-words'>
              <span className='break-words'>{description}</span>
              </div>
            </div>
            <div className='flex justify-evenly pt-5'>
                <CustomButton ButtonTxt='Link' width='120px' link={websiteLink}/>
                <CustomButton ButtonTxt='Github' width='120px' link={githubLink}/>
            </div>
          </div>
    </div>
  )
}

export default ProjectCard