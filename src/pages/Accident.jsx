import React, { useEffect, useState } from "react";

const Accident = (props) => {
    // Sample accident and user data
    const { accident } = props;
    const [userInfo, setUserInfo] = useState(null);

    const getUserInfo = async () => {
        try{
            const res = await fetch(`http://13.60.53.148:5000/api/user/getUserInfoHospital/${accident.user}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "authToken":localStorage.getItem("hospitalToken")
                }
            })
            const data = await res.json();
            setUserInfo(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);
    const handleAccept = () => {
        // Handle accept action
    };

    const handleIgnore = () => {
        // Handle ignore action
    };

    return (
        <div className=" bg-white shadow-md rounded-md p-4 absolute -top-20 border-2 -left-[800px]">
            <div className="flex space-x-5 w-[700px]">
                <div className="mb-4 w-[350px]">
                    <h2 className="text-2xl font-semibold mb-4">
                        Accident Information
                    </h2>
                    <p className="text-gray-600">Accident ID: {accident._id}</p>
                    <p className="text-gray-600">
                        Location:{" "}
                        <span>
                            <a
                                href={accident.location}
                                target="_blank"
                                className="text-blue-600 underline"
                            >
                                Link
                            </a>
                        </span>
                    </p>

                    <p className="text-gray-600">
                        Description: {accident.description}
                    </p>
                </div>

                <div className="mb-4 w-[350px]">
                    {userInfo === null ? (
                        <div className="h-full flex justify-center items-center">
                            Loading...
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">
                                User Information
                            </h2>
                            <p className="text-gray-600">
                                Name: {userInfo.name}
                            </p>
                            <p className="text-gray-600">Age: {userInfo.age}</p>
                            <p className="text-gray-600">
                                Blood Type: {userInfo.bloodGroup}
                            </p>
                            <p className="text-gray-600">
                                Medical Info: {userInfo.disease}
                            </p>
                        </>
                    )}
                </div>
            </div>

            <div className="flex space-x-10 justify-center">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md mr-2"
                    onClick={handleAccept}
                >
                    Accept
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
                    onClick={handleIgnore}
                >
                    Ignore
                </button>
            </div>
        </div>
    );
};

export default Accident;
