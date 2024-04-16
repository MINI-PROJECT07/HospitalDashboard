import React from "react";
import { useContext, useEffect } from "react";
import AccidentContext from "../context/AccidentContext";
import SocketContext from "../context/SocketContext";

export const Accidents = () => {
    const context = useContext(AccidentContext);
    const socketContext = useContext(SocketContext);
    const { accidents1, getAccidentsNearest1 } = context;
    const { socket } = socketContext;

    useEffect(() => {
        getAccidentsNearest1();
        console.log(accidents1);
        socket.on("accident", (data) => {
            console.log(data);
            getAccidentsNearest1();
        });
   
    }, []);
    return (
        <div>
            <div className="text-center text-red-700 font-extrabold">
                Recent Cases
            </div>
            <div>
                {accidents1.length === 0 ? (
                    <div className="text-center text-red-700 font-extrabold">
                        No accidents
                    </div>
                ) : (
                    accidents1.map((accident) => {
                        return (
                            <div className="border border-red-700  transition-all hover:scale-95 w-3/4 flex mx-auto text text-center border-solid" key={accident._id}>
                                <div className="text-center text-red-700 font-extrabold">
                                    {accident.description}
                                </div>
                                <div className="text-center text-red-700 font-extrabold">
                                    {accident.location}
                                </div>
                                <div className="text-center text-red-700 font-extrabold">
                                    {accident.time}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
