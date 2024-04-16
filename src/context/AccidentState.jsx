import React from "react";
import AccidentContext from "./AccidentContext";
import { useState } from "react";

const AccidentState = (props) => {
    const BASE_URL = "http://13.60.53.148:5000/api/accident";
    const [accidents1, setAccidents1] = useState([]);

    const getAccidentsNearest1 = async () => {
        console.log("getAccidentsNearest1");
        try {
            const res = await fetch(BASE_URL + "/getAccidentsNearestAuto", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authToken: localStorage.getItem("hospitalToken"),
                },
            });
            const data = await res.json();
            setAccidents1(data.accidents);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AccidentContext.Provider value={{ accidents1, getAccidentsNearest1 }}>
            {props.children}
        </AccidentContext.Provider>
    );
};

export default AccidentState;
