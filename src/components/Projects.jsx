import React from 'react'
import ProjectSwiperContainer from './ProjectSwiperContainer'
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <div id='Projects' className="lg:p-12 sm:p-12 p-4">
      <div className="text-customPink font-semibold sm:text-4xl lg:text-4xl text-2xl flex justify-center pb-14">
        PROJECTS
      </div>

      {/* <div className='flex'>

        <CardBox height="400px" width="350px">
            <div>
            <ProjectCard
                title="Todo List"
                description="React App with Local Storage"
                githubLink="https://github.com/Niraj-Kr-29/todoList"
                websiteLink="https://niraj-kr-29.github.io/todoList/"
                image={todoListImg}
            />
            </div>
        </CardBox>
        <CardBox height="400px" width="350px">
            <div>
            <ProjectCard
                title="Todo List"
                description="React App with Local Storage"
                githubLink="https://github.com/Niraj-Kr-29/todoList"
                websiteLink="https://niraj-kr-29.github.io/todoList/"
                image={musicPlayerImg}
            />
            </div>
        </CardBox>
        <CardBox height="400px" width="350px">
            <div>
            <ProjectCard
                title="Todo List"
                description="React App with Local Storage"
                githubLink="https://github.com/Niraj-Kr-29/todoList"
                websiteLink="https://niraj-kr-29.github.io/todoList/"
                image={passwordGenImg}
            />
            </div>
        </CardBox>
      </div> */}
      <ProjectSwiperContainer />
    </div>
  );
}

export default Projects