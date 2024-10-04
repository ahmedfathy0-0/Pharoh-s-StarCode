import { useState, Suspense ,useRef, useEffect } from 'react';
import { Canvas , useThree,useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Leva, useControls } from 'leva';
import Sun from '../components/Sun';
import Planet from '../components/Planet';
import Lights from '../components/Lights';
import Asteroid from '../components/Asteroid';
import '../App.css';
import planetData from '../components/PlanetData'; 
import NEOScene from '../components/NeoScene';
import CameraController from '../components/CameraController';
import PlanetInfo from '../components/PlanetInfo';
import MoonInfo from '../components/MoonInfo';
import moonData from '../components/MoonData';
import Sidebar from '../components/Sidebar';
import './Ebook.css'; 
// import PlanetsAPI from '../components/RetriveData';

const generateAsteroidBelt = (count, marsOrbit, jupiterOrbit) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * (jupiterOrbit.xRadius - marsOrbit.xRadius) + marsOrbit.xRadius; 

      const x = radius * Math.cos(angle);
      const z = (radius * (marsOrbit.zRadius / marsOrbit.xRadius)) * Math.sin(angle); 

      positions.push([x, 0, z]);
  }
  return positions;
};
const CameraManager = ({ setCameraPosition }) => {
  const { camera } = useThree();  
  useFrame(() => {
    setCameraPosition(camera.position.clone());
  });

  return null;
};

const MainOrrery = () => {
  
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planetPosition, setPlanetPosition] = useState(null); 
  const [isclicked, setIsClicked] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(0, 200, 250)); 
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  
  };

  useEffect(() => {
    const loadOrrery = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loadOrrery);
  }, []);

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
    console.log(planetPosition);
  };

  const handleClose = () => {
    setSelectedPlanet(null);
    setPlanetPosition(null); 
    setIsClicked(false);

  };

  const asteroidPositions = generateAsteroidBelt(0, { xRadius: 66, zRadius: 54 }, { xRadius: 76, zRadius: 64 });
  const planetInfo = planetData.find((p) => p.id === selectedPlanet);
  const moonInfo = moonData.find((m) => m.id === selectedPlanet); 
 
  if (loading) {
    return (
      <div className="loading-container-wrapper">
      <div className="loading-container">
        <div className="dot"></div>
      </div>
    </div>

    );
  }


  return (
    <>
      <Leva />
      <Canvas camera={{ position: [0, 600, 750], fov: 45, near: 0.1, far: 10000 }}>
      <Suspense fallback={null}>
          <Sun />
          {[...Array(8)].map((_, index) => (
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
          <NEOScene
           onClick={handlePlanetClick}
           setPlanetPosition={setPlanetPosition}
           selectedPlanet={selectedPlanet}
          />
          <Lights />
          <OrbitControls 
            enableZoom={true}
            zoomSpeed={5} 
          />          
          <CameraManager setCameraPosition={setCameraPosition} />
           <CameraController 
              planetPosition={planetPosition}
              isclicked={isclicked}
              currentCameraPosition={cameraPosition} 
              selectedPlanet={selectedPlanet}
            /> 
        </Suspense>
      </Canvas>
      <div className="app-layout">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}
         onPlanetClick={handlePlanetClick}
      />
      </div>

      {planetInfo && (
        <PlanetInfo planetInfo={planetInfo} handleClose={handleClose} />
      )}
      {moonInfo && (
        <MoonInfo moonInfo={moonInfo} handleClose={handleClose} />
      )}
    </>
  );
};
export default MainOrrery