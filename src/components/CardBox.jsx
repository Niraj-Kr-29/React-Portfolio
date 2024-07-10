import React from "react";

const CardBox = ({ children, height = "200px", width = "100%" }) => {
  return (
    <div>
      <div
        className="bg-gradient-to-br from-cardGrey to-customGrey rounded-xl"
        style={{
          height,
          width,
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        }}
      >
        <div className="w-full h-full flex justify-evenly items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardBox;
