import { useState, Suspense ,useRef, useEffect } from 'react';
import { Canvas , useThree,useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Leva, useControls } from 'leva';
import Sun from '../components/Sun';
import Lights from '../components/Lights';
import '../App.css';

const MainOrrery = () => {
  
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planetPosition, setPlanetPosition] = useState(null); 
  const [isclicked, setIsClicked] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(0, 200, 250)); 
    const { speedFactor, dateString } = useControls({
      speedFactor: { value: 1, min: -100000, max: 100000, step: 5 },
      dateString: {
        value: new Date().toISOString().split('T')[0], 
        label: 'Date',
      }})
  
  const handlePlanetClick = (planetId) => {
    setSelectedPlanet(planetId);
    setIsClicked(true);
    console.log (selectedPlanet);
  };

  const handleClose = () => {
    setSelectedPlanet(null);
    setPlanetPosition(null); 
    setIsClicked(false);

  };


  return (
    <>
      <Leva />
      <Canvas camera={{ position: [0, 600, 750], fov: 45, near: 0.1, far: 10000 }}>
      <Suspense fallback={null}>
          <Sun />
          {/* {[...Array(8)].map((_, index) => (
           <Planet
            key={index + 1}
            id={index + 1}
            onClick={handlePlanetClick}
            setPlanetPosition={setPlanetPosition} 
            selectedPlanet={selectedPlanet}
            spFactor={speedFactor}
            rotFactor={speedFactor/10}
          />
          ))}
          <NEOScene /> */}
          {/* Uncomment this line when you want to render asteroids */}
          {/* {asteroidPositions.map((position, index) => <Asteroid key={index} position={position} />)} */}
          <Lights />
          <OrbitControls 
            enableZoom={true}
            zoomSpeed={5} 
          />          
        </Suspense>
      </Canvas>
    </>
  );
};
export default MainOrrery
