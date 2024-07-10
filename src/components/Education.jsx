import React from 'react'
import CustomBox from './CustomBox'
import SecEdu from '../assets/SecEdu.gif'
import EducationCard from './EducationCard';
import UniEdu from '../assets/UniEdu.gif'
import IntEdu from '../assets/IntEdu.gif'
import SwiperContainer from './SwiperContainer';

const Education = () => {
  return (
    <div id='Education' className="lg:p-12 sm:p-12 p-4">
      <CustomBox height="650px">
        <div className="text-center w-[100%]">
          <div className="pb-16">
            <div className="text-customPink font-semibold sm:text-4xl lg:text-4xl text-2xl">
              EDUCATION
            </div>
          </div>

          <div>
            <SwiperContainer />
          </div>

        </div>
      </CustomBox>
    </div>
  );
}

export default Education