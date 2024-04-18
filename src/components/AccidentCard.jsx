import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import Accident from "../pages/Accident";

const AccidentCard = (props) => {
    const { accident } = props;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-red-600 w-11/12 xl:w-4/6  mx-auto  space-y-4">
            <div className="flex justify-between">
                {" "}
                <div className="text-xl font-medium text-gray-800">
                    Location -{" "}
                    <a
                        href={accident.location}
                        className="text-lg text-blue-600 underline"
                        target="_blank"
                    >
                        Link
                    </a>
                </div>
                <p className="text-gray-600">
                    {" "}
                    <span className="font-medium text-xl">Time : </span>
                    {new Date(accident.time).toLocaleTimeString("en-IN")}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p className=" text-gray-700">{accident.description}</p>
                <Popup
                    trigger={
                        <button className="px-6 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:scale-[105%] transition-all">
                            Details
                        </button>
                    }
                >
                    <Accident accident={accident} />
                </Popup>
            </div>
        </div>
    );
};

export default AccidentCard;
