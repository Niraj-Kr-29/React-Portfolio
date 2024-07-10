import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import todoListImg from '../assets/todoListImg.jpg'
import passwordGenImg from '../assets/passwordGenImg.jpg'
import musicPlayerImg from '../assets/musicPlayerImg.jpg'
import ProjectCard from './ProjectCard'
import useWindowSize from "./useWindowSize"; // Import the custom hook
import CardBox from "./CardBox";
import { motion } from "framer-motion";

const SwiperContainer = () => {
  const size = useWindowSize();

  return (
    <div className="container mx-auto p-4">
      {size.width < 768 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Time interval between slides in milliseconds
            disableOnInteraction: false,
          }}
          modules={[Autoplay,Pagination]}
        >
          <SwiperSlide className="flex justify-center">
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
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CardBox height="400px" width="350px">
              <div>
                <ProjectCard
                  title="Dynamic Music Player"
                  description="Javascript App with all functionalities"
                  githubLink="https://github.com/Niraj-Kr-29/Dynamic-Music-Player"
                  websiteLink="https://niraj-kr-29.github.io/todoList/"
                  image={musicPlayerImg}
                />
              </div>
            </CardBox>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CardBox height="400px" width="350px">
              <div>
                <ProjectCard
                  title="Password Generator"
                  description="React App"
                  githubLink="https://github.com/Niraj-Kr-29/passwordGenerator"
                  websiteLink="https://niraj-kr-29.github.io/passwordGenerator/"
                  image={passwordGenImg}
                />
              </div>
            </CardBox>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex pb-5 gap-8 md:justify-evenly p-6">
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-200}}
             transition={{duration:1,delay:0.5}}
             whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
              }}
             className="hover:scale-105 transition-all">
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
            </motion.div>
            <motion.div
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0,y:-200}}
             transition={{duration:1,delay:0.5}}
             whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
              }}
             className="hover:scale-105 transition-all">
              <CardBox height="400px" width="350px">
                <div>
                  <ProjectCard
                    title="Dynamic Music Player"
                    description="Javascript App with all functionalities"
                    githubLink="https://github.com/Niraj-Kr-29/Dynamic-Music-Player"
                    websiteLink=""
                    image={musicPlayerImg}
                  />
                </div>
              </CardBox>
            </motion.div>

            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:200}}
             transition={{duration:1,delay:0.5}}
             whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
              }}
             className="hover:scale-105 transition-all">
              <CardBox height="400px" width="350px">
                <div>
                  <ProjectCard
                    title="Password Generator"
                    description="React App"
                    githubLink="https://github.com/Niraj-Kr-29/passwordGenerator"
                    websiteLink="https://niraj-kr-29.github.io/passwordGenerator/"
                    image={passwordGenImg}
                  />
                </div>
              </CardBox>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperContainer;
