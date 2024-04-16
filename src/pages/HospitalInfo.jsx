import React from "react";
import Hospital from "../assets/Hospital.png";
const HospitalInfo = () => {
  return (
    <div>
      <div className="flex flex-row mt-5 m-auto w-4/5 border-2 shadow-sm space-x-4">
        <img src={Hospital} alt="" className="w-24 h-24 m-3" />
        <div className="flex items-center">
          <div className="flex flex-col -mt-6">
            <span className="text-2xl">Nayantara Hospital</span>
            <span>Mangalwar peth,Kolhapur</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HospitalInfo;
