import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CustomBox from "./CustomBox";
import EducationCard from "./EducationCard";
import UniEdu from "../assets/UniEdu.gif";
import IntEdu from "../assets/IntEdu.gif";
import useWindowSize from "./useWindowSize"; // Import the custom hook
import { Navigation, Autoplay,Pagination } from "swiper/modules";



const SwiperContainer = () => {
  const size = useWindowSize();

  return (
    <div className="container mx-auto p-4">
      {size.width < 768 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Time interval between slides in milliseconds
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          modules={[Autoplay,Pagination]}
        >
          <SwiperSlide className="flex justify-center">
            <CustomBox height="400px" width="350px">
              <EducationCard
                Year="2022 - 2026"
                Education="B. Technology"
                Institute="NIT Jamshedpur"
                Score="84.3"
                Text="ECM"
                Icon={UniEdu}
              />
            </CustomBox>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CustomBox height="400px" width="350px">
              <EducationCard
                Year="2020 - 2022"
                Education="Inter. Education"
                Institute="R. Mitra High School"
                Score="91.2"
                Text="PCM"
                Icon={IntEdu}
              />
            </CustomBox>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <CustomBox height="400px" width="350px">
              <EducationCard
                Institute="R. Mitra High School"
                Education="Sec. Education"
                Score="94.8"
                Text="District Rank 1st"
              />
            </CustomBox>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex pb-5 gap-8 md:justify-evenly p-6">
            <div className="hover:scale-105 transition-all">
              <CustomBox height="400px" width="350px">
                <EducationCard
                  Year="2022 - 2026"
                  Education="B. Technology"
                  Institute="NIT Jamshedpur"
                  Score="84.3"
                  Text="ECM"
                  Icon={UniEdu}
                />
              </CustomBox>
            </div>
            <div className="hover:scale-105 transition-all">
              <CustomBox height="400px" width="350px">
                <EducationCard
                  Year="2020 - 2022"
                  Education="Inter. Education"
                  Institute="R. Mitra High School"
                  Score="91.2"
                  Text="PCM"
                  Icon={IntEdu}
                />
              </CustomBox>
            </div>

            <div className="hover:scale-105 transition-all">
              <CustomBox height="400px" width="350px">
                <EducationCard
                  Institute="R. Mitra High School"
                  Education="Sec. Education"
                  Score="94.8"
                  Text="District Rank 1st"
                />
              </CustomBox>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperContainer;
