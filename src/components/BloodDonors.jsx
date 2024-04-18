import React, { useState, useEffect } from 'react';

function BloodDonor() {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        async function fetchDonors() {
            try {
                const response = await fetch('URL',{
                  method:"GET",
                  

                })
                
                const data = await response.json();
                setDonors(data);
            } catch (error) {
                console.error('Error fetching donors', error);
            }
        }
        fetchDonors();
    }, []);

    return (
        <div>
            <h1>Donor Information</h1>
            <ul>
                {donors.map((donor, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {donor.name}, <strong>Age:</strong> {donor.age}, <strong>Blood Group:</strong> {donor.bloodGroup}, <strong>Address:</strong> {donor.address}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BloodDonor;
