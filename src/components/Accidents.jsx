import React from "react";
import { useContext, useEffect } from "react";
import AccidentContext from "../context/AccidentContext";
import SocketContext from "../context/SocketContext";
import AccidentCard from "./AccidentCard";

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
        <div className="p-4 w-full h-full relative">
            <div className="text-center text-red-700 font-extrabold">
                Recent Cases
            </div>
            <div className="p-6 space-y-4">
                {accidents1.length === 0 ? (
                    <div className="text-center text-red-700 font-extrabold">
                        {/* No accidents */}
                    </div>
                ) : (
                    accidents1.map((accident) => {
                        return (
                            <div>
                                <AccidentCard accident={accident} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
