import React from "react";
import HospitalContext from "./HospitalContext";
import { useState, useEffect } from "react";

const HospitalState = (props) => {
  const BASE_URL = "http://13.60.53.148:5000/api/hospital/"; // Replace with your server URL
  const [hospitalData, setHospitalData] = useState(null);
  const fetchHospitalData = async () => {
    try {
      const response = await fetch(BASE_URL + "getHospitalInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("hospitalToken"),
        },
      });

      const data = await response.json();
      
      setHospitalData(data);
    } catch (error) {
      console.error("Error fetching hospital data", error);
    }
  };
  useEffect(() => {
    fetchHospitalData();
  }, []);

  return (
    <HospitalContext.Provider value={{hospitalData, fetchHospitalData}}>
      {props.children}
    </HospitalContext.Provider>
  );
};

export default HospitalState;
