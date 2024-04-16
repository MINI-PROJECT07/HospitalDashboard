import React from "react";
import Hospital from "../assets/Hospital.png";
const HospitalInfo = () => {
  return (
    <div>
      <div className="flex flex-row mt-5 m-auto w-4/5 border-2 h-20 shadow-sm">
        <img src={Hospital} alt="" className="w-9 h-9 m-3" />
        <div className="flex flex-col">
          <span className="text-2xl">Nayantara Hospital</span>
          <span>Mangalwar peth,Kolhapur</span>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default HospitalInfo;
