import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HazardousBody from './HazardousBody'; 

const NEO_API_KEY = 'AhodELbZDubIXydMX1tddShcSkQceF13wuatO1Zg'; 
const NEO_API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NEO_API_KEY}`;

const NEOScene = () => {
    const [hazardousBodies, setHazardousBodies] = useState([]);

    useEffect(() => {
        const fetchNEOs = async () => {
            try {
                const response = await axios.get(NEO_API_URL);
                const hazardousNEOs = response.data.near_earth_objects;
                setHazardousBodies(hazardousNEOs);
               // console.log(response.data.near_earth_objects);
            } catch (error) {
                console.error('Error fetching NEO data:', error);
            }
        };

        fetchNEOs();
    }, []);


    return (
        <>
{hazardousBodies.map((neo, index) => {
    // console.log(neo);
    // console.log(neo.orbital_data.semi_major_axis);
    const diameter = (neo.estimated_diameter.meters.estimated_diameter_max+neo.estimated_diameter.meters.estimated_diameter_max)/200000; 
    // console.log(diameter);
    const distanceFromSun = neo.orbital_data.semi_major_axis*13;
    const initialAngle = Math.random() * Math.PI * 2; // Random starting angle
    const speed = (distanceFromSun*Math.PI*2)/neo.orbital_data.orbital_period;
   // console.log(speed);
    //console.log(distanceFromSun);
    //console.log(hazardousBodies);
    return (
        <HazardousBody
            key={index}
            size={diameter}
            distanceFromSun={distanceFromSun}
            speed={speed}
            rotationspeed={0.01}
            initialAngle={initialAngle}
            name={neo.name}
        />
    );
})}

        </>
    );
};

export default React.memo(NEOScene);
