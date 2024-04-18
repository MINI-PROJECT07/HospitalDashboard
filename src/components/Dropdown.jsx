import React from "react";
import { useState, useEffect, useRef } from "react";
import user from "../assets/user.png";
import profile from "../assets/profile.png";
import logout from "../assets/log-out.png";
import { Link } from "react-router-dom";
export const Dropdown = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div className="App">
            <div className="menu-container" ref={menuRef}>
                <div
                    className="menu-trigger pl-4 cursor-pointer"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <img src={profile}></img>
                </div>

                <div
                    className={`dropdown-menu ${open ? "active" : "inactive"}`}
                >
                    <ul>
                        <Link to="/hospitalInfo">
                            <DropdownItem img={user} text={"Account"} />
                        </Link>
                        <div onClick={
                          ()=>{
                            localStorage.removeItem("hospitalToken");
                            window.location.reload();
                          }
                        }>
                            <DropdownItem img={logout} text={"Logout"} />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};
function DropdownItem(props) {
    return (
        <li className="dropdownItem">
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}
