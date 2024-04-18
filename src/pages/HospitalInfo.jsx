import React from "react";
import Hospital from "../assets/Hospital.png";
import { useContext, useEffect } from "react";
import HospitalContext from "../context/HospitalContext";
const HospitalInfo = () => {
  const context = useContext(HospitalContext);
  const { hospitalData, fetchHospitalData } = context;
  useEffect(() => {
    fetchHospitalData();
    console.log(hospitalData);
  }, []);
  return (
    <div>
      <div className="flex flex-row mt-5 m-auto w-4/5 border-2 shadow-sm space-x-4">
        <img src={Hospital} alt="" className="w-24 h-24 m-3" />
        <div className="flex flex-col mt-9">
          <div className="flex flex-col -mt-6">
            <span className="text-2xl">{hospitalData.name}</span>
            <span className="">{hospitalData.address}</span>
          </div>
          <div className="flex flex-row justify-between">
            <div>{hospitalData.email}</div>
            <div>{hospitalData.phoneNo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
