import React from "react";
import SecEdu from '../assets/SecEdu.gif'


const EducationCard = ({Year='2019 - 2020',Education='Secondary Education',Institute='IIT Delhi',Score='100', Text='Hello World',Icon=SecEdu}) => {
  return (
    <div className="h-[100%] w-[100%]">
      <div className="p-7 pb-4">
        <p className="bg-slate-500 py-4 px-7 rounded-3xl w-[150px]">
          {Year}
        </p>
      </div>

      <div>
        <p className="text-customPink text-3xl font-semibold tracking-tight">
          {Education}
        </p>
        <p className="pt-4 text-2xl text-neutral-300">{Institute}</p>
        <p className="pt-4 text-2xl text-neutral-300">Score : {Score} %</p>
        <p className="pt-4 text-2xl text-neutral-300">{Text}</p>
        <div className="flex justify-center pt-2">
          <img className="w-20" src={Icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
