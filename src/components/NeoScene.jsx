//NeoScene /component /src
import  { useEffect, useState } from 'react';
import axios from 'axios';
import HazardousBody from './HazardousBody'; 

const NEO_API_KEY = 'AhodELbZDubIXydMX1tddShcSkQceF13wuatO1Zg'; 
const NEO_API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NEO_API_KEY}`;

const NEOScene = () => {
    const [hazardousBodies, setHazardousBodies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const bodiesToFetch = 500;
    useEffect(() => {
        const fetchNEOs = async () => {
            try {
                // const response = await axios.get(NEO_API_URL);
                const response = await axios.get(`${NEO_API_URL}&size=${bodiesToFetch}&page=${currentPage}`);
                const hazardousNEOs = response.data.near_earth_objects.filter(neo => neo.is_potentially_hazardous_asteroid);
                // Extract orbital data, such as eccentricity, from each NEO
                const formattedNEOs = hazardousNEOs.map(neo => {
                    const orbitalData = neo.orbital_data;
                    
                    return {
                        id: neo.id,
                        name: neo.name,
                        diameter: neo.estimated_diameter.meters.estimated_diameter_max,
                        eccentricity: parseFloat(orbitalData.eccentricity), // Eccentricity of the orbit
                        semiMajorAxis: orbitalData.semi_major_axis, // Semi-major axis (in astronomical units)
                        inclination: orbitalData.inclination, // Inclination of the orbit
                        speed: parseFloat(neo.close_approach_data[0]?.relative_velocity.kilometers_per_second),                    };
                });
                setHazardousBodies(prev => [...prev, ...formattedNEOs]); // Append new NEOs
                setCurrentPage(prev => prev + 1);             } catch (error) {
                console.error('Error fetching NEO data:', error);
            }
        };

        fetchNEOs();
        const interval = setInterval(fetchNEOs, 60000);
        return () => clearInterval(interval); 
    }, [currentPage]);


    return (
        <>
{hazardousBodies.map(neo => {
    // const diameter = neo.est_diameter?.meters?.estimated_diameter_max; 
    const distanceFromSun = neo.semiMajorAxis ? neo.semiMajorAxis * 149597870.7 : 39; 
    const initialAngle = Math.random() * Math.PI * 2; // Random starting angle
    console.log(`Rendering NEO: ${neo.name} | Diameter: ${neo.diameter} | Distance from Sun: ${distanceFromSun}`);

    return (
        <HazardousBody
            key={neo.id}
            size={neo.diameter ? neo.diameter / 1000 : 1}
            distanceFromSun={distanceFromSun}
            speed={neo.speed || 0.01}            
            rotationspeed={0.01}
            eccentricity={neo.eccentricity || 0.3}
            initialAngle={initialAngle}
        />
    );
})}

        </>
    );
};

export default NEOScene;
