import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const LoginPage = (props) => {
    const { setToken } = props;
    const navigate = useNavigate();

    // initializing credentials
    const [cred, setCred] = useState({ email: "", password: "" });

    //to set credentials on change of input
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    };

    const login = async (e) => {
        let alert = document.getElementById("alert");
        try {
            e.preventDefault();
            const response = await fetch(
                "http://13.60.53.148:5000/api/hospital/loginHospital",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(cred),
                }
            );
            const json = await response.json();
            if (json.success) {
                localStorage.setItem("hospitalToken", json.authToken);
                setToken(json.authToken);
                navigate("/");
            } else {
                alert.innerHTML = json.errors;
            }
        } catch (error) {
            console.log(error);
            alert.innerHTML = "Internal server error";
        }
    };
    return (
        <div className="w-full h-full justify-center items-center pt-20">
            <div>
                <div className="mb-10">
                    <div className="flex justify-center">
                        <img alt="" className="h-24 w-24" src={logo} />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login to your Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't have an account yet{" "}
                        <Link
                            to={"/signup"}
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            SignUp
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6 w-2/6 m-auto" onSubmit={login}>
                    <div className="-space-y-px">
                        <div className="my-5">
                            <label htmlFor={"email  "} className="sr-only">
                                Email
                            </label>
                            <input
                                name="email"
                                className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder={"Email"}
                                onChange={onChange}
                                required={true}
                                type={"email"}
                            ></input>
                        </div>
                        <div className="my-5">
                            <label htmlFor={"email  "} className="sr-only">
                                Password
                            </label>
                            <input
                                name="password"
                                className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder={"Password"}
                                minLength={8}
                                onChange={onChange}
                                required={true}
                                type={"password"}
                            ></input>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-right w-full">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:text-blue-500 w-full"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <p
                        id="alert"
                        className="h-5 text-sm text-red-600 text-center -mt-6"
                    ></p>
                    <input
                        type={"submit"}
                        // value={"Login"}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
