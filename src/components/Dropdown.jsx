import React from "react";
import { useState, useEffect, useRef } from "react";
import user from "../assets/user.png";
import profile from "../assets/profile.png";
import logout from "../assets/log-out.png";
import { Link, useNavigate } from "react-router-dom";
export const Dropdown = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className="menu-container" >
                <div
                    className="menu-trigger pl-4 cursor-pointer"
                    onClick={() => {
                        navigate('/hospitalInfo')
                    }}
                >
                    <img src={profile}></img>
                </div>

                
            </div>
        </div>
    );
};

