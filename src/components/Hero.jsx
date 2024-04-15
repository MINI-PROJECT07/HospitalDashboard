import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="p-8 grid grid-cols-4 gap-6">
        <div className="h-48 bg-slate-100 rounded-md shadow-md cursor-pointer">
          <div className="flex items-center space-x-4 bg-blue-400 p-4 rounded-t-md h-1/2">
            {/* <img src={ItemsImg} className="w-14 h-14"></img> */}
            <div className="text-slate-800 text-2xl py-2">Total Beds</div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-center">
            <span className="text-3xl">0</span>
          </div>
        </div>
        <div className="h-48 bg-slate-100 rounded-md shadow-md cursor-pointer">
          <div className="flex items-center space-x-4 bg-red-400 p-4 rounded-t-md h-1/2">
            {/* <img src={StockImg} className="w-14 h-14"></img> */}
            <div className="text-slate-800 text-2xl py-2">Engaged Bed</div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-center">
            <span className="text-3xl">0</span>
          </div>
        </div>
        <div className="h-48 bg-slate-100 rounded-md shadow-md cursor-pointer">
          <div className="flex items-center space-x-4 bg-orange-400 p-4 rounded-t-md h-1/2">
            {/* <img src={PriceImg} className="w-14 h-14"></img> */}
            <div className="text-slate-800 text-2xl py-2">Remaining Beds</div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-center">
            <span className="text-3xl">0</span>
          </div>
        </div>
        <div className="h-48 bg-slate-100 rounded-md shadow-md cursor-pointer">
          <div className="flex items-center space-x-4 bg-green-400 p-4 rounded-t-md h-1/2">
            {/* <img src={SalesImg} className="w-14 h-14"></img> */}
            <div className="text-slate-800 text-2xl py-2">Total Cases</div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-center">
            <span className="text-3xl">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
