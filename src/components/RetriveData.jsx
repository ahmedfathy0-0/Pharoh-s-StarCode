// import React from 'react';
const parseHorizonsResponse = (responseText) => {
    const xMatch = responseText.match(/X =\s*(-?\d+\.\d+E[+-]\d+)/);
    const yMatch = responseText.match(/Y =\s*(-?\d+\.\d+E[+-]\d+)/);
    
    if (xMatch && yMatch) {
      const xPlanet = parseFloat(xMatch[1]);
      const yPlanet = parseFloat(yMatch[1]);
  
      return { xPlanet, yPlanet };
    }
  
    return null;
  };
const fetchPlanetPosition = async (planetId) => {
    const url = 'https://ssd.jpl.nasa.gov/horizons_batch.cgi?batch=1';
    
    const requestBody = `
      COMMAND="${planetId}"
      CENTER='500@0'
      START_TIME='2024-09-27'
      STOP_TIME='2024-09-27'
      STEP_SIZE='1 d'
      QUANTITIES='19'
    `;
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody
    });
  
    const data = await response.text(); // Horizons returns text
   // console.log(data);
  };

  // Example: Get position for Mars (ID: 499)
  
const PlanetsAPI = () => {
    fetchPlanetPosition('499');
    return (  
        <>
        </>
    );
}
 
export default PlanetsAPI;