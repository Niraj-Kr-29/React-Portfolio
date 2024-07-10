import React from "react";
import HeroImage from "../assets/HeroImage.svg";
import contactAvatar from "../assets/contactAvatar.gif";
import mailIcon from "../assets/mailIcon.gif";
import CustomButton from "./CustomButton";
import CustomBox from "./CustomBox";
import { motion } from "framer-motion";
import HeroTypeAnimation from "./HeroTypeAnimation";

const Hero = () => {
  return (
    <>
      <div id="Hero" className="flex flex-wrap w-[100%] [h-570px] justify-evenly pb-5 mt-48">
        <div className="sm:w-[95%] lg:w-[45%] h-[570px]">
          <div className="w-[100%] h-[400px] pb-2">

            <div
              className="h-[380px] w-[100%] bg-[#212428] rounded-xl"
              style={{
                boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              }}
            >
              
                <div className="w-[100%] p-8">
                  <img className="w-16 h-16" src={contactAvatar} alt="" />
                </div>

                <div
                 className="sm:text-5xl lg:text-5xl text-3xl font-bold pl-8 flex gap-3"
                >
                  <span>I'm</span><HeroTypeAnimation />
                </div>

                <div className="sm:text-xl lg:text-xl text-lg pt-6 pl-8 text-neutral-300">
                  A full stack web developer on a journey through the dynamic
                  landscape of programming.
                </div>

                <div className="flex pl-8 pt-2">
                  <img className="w-16 h-16" src={mailIcon} alt="mailIcon" />
                  <span className="text-xl p-4 text-neutral-300">
                    nkr2348@gmail.com
                  </span>
                </div>
              
            </div>
          </div>
          

          {/* <div
            className={`h-[140px] w-[100%] bg-[#212428] rounded-xl`}
            style={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            }}
          >
            <div className="w-[100%] h-[100%] flex justify-evenly items-center">
              <p className="hidden lg:block sm:block">Download my Curriculum Vitae :</p>
              <CustomButton ButtonTxt="DOWNLOAD CV" />
            </div>
          </div> */}

          <CustomBox height="140px">
              <p className="hidden lg:block sm:block">Download my Curriculum Vitae :</p>
              <CustomButton ButtonTxt="DOWNLOAD CV" link="https://drive.usercontent.google.com/u/0/uc?id=1n6gI1l3jbslFE87NqADQdqveJw-0N3qK&export=download" />
          </CustomBox>
        </div>

        <div
          className="relative h-[540px] sm:w-[95%] lg:w-[45%] bg-[#212428] rounded-xl flex justify-center align-middle"
          style={{
            boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
          }}
        >
          <img className="w-[80%] h-[80%] mt-10" src={HeroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
