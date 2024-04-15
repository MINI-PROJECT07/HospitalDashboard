import React from "react";
import Logo from "../assets/logo.png";
// import ProfileImg from "../assets/profile.png";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" shadow-sm bg-slate-50">
      <div className="flex px-6 py-6 justify-between items-center">
        <div className="w-fit space-x-3 flex items-center justify-center cursor-pointer hover:scale-110 transition-all">
          <img className="h-9 w-9" src={Logo}></img>
          <Link to="/"><span className="text-xl font-semibold text-blue-900">
            Emergency-Alert
          </span></Link>
          
        </div>
        <div className="flex w-fit space-x-8 items-center text-lg mr-10">
          <div className="cursor-pointer hover:scale-110 transition-all">
            <Link to="/"><span>Dashboard</span></Link>
            
          </div>
          <div className="cursor-pointer hover:scale-110 transition-all ">
            <Link to="/cases">
              <span>Cases</span>
            </Link>
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
