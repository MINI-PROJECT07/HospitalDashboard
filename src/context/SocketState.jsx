import React, { useEffect } from "react";
import SocketContext from "./SocketContext";
import { io } from "socket.io-client";

const SocketState = (props) => {
    const socket = io("http://13.60.53.148:5000");
    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    );
};

export default SocketState;
