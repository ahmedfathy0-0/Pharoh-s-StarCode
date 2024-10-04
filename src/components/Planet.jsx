import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import Ecliptic from './Ecliptic';
import SaturnRings from './SaturnRings';
import Moon from './Moon';
import mercuryTexture from '../textures/8k_mercury.jpg';
import venusTexture from '../textures/8k_venus.jpg';
import earthTexture from '../textures/8k_earth.jpg';
import marsTexture from '../textures/8k_mars.jpg';
import jupiterTexture from '../textures/8k_jupiter.jpg';
import saturnTexture from '../textures/8k_saturn.jpg';
import uranusTexture from '../textures/2k_uranus.jpg';
import neptuneTexture from '../textures/2k_neptune.jpg';

const planetTextures = [
  mercuryTexture,
  venusTexture,
  earthTexture,
  marsTexture,
  jupiterTexture,
  saturnTexture,
  uranusTexture,
  neptuneTexture,
];

const Planet = ({ id, onClick,setPlanetPosition, selectedPlanet,spFactor, rotFactor}) => {
  const planetRef = useRef();
  const texture = useTexture(planetTextures[id - 1]);
  const [isClicked, setIsClicked] = useState(true);
  const [showMoons, setShowMoons] = useState(false); 
  const [speedFactor, setSpeedFactor] = useState(spFactor);
  const [rotationSpeedFactor, setRotationSpeedFactor] = useState(rotFactor);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [moonClicked, setMoonClicked] = useState(false);
  const [moonsideClicked, setMoonsideClicked] = useState(false);


  const moonsData = {
    1: [],
    2: [], 
    3: [{ size: 0.086, distance: 1.5, speedFactor: 1 }], 
    4: [{ size: 0.053, distance: 1, speedFactor: 1 }], 
    5: [
      { size: 0.35, distance: 10, speedFactor: 0.8 },
      { size: 0.3, distance: 12, speedFactor: 1.2 }
    ],
    6: [{ size: 0.25, distance: 10, speedFactor: 1 }], 
    7: [], // Uranus
    8: [] // Neptune
  };

  const handleClick = () => {

    setIsClicked(!isClicked);
    if (onClick&&isClicked) {
      onClick(id); 
   }
    
  };
  const moonhandleClick = (moonId) => {
    if(onClick){
      onClick(moonId+10);
     // console.log(moonId+10);
    }
    setMoonClicked(true);
  };

  var xRadius,zRadius,tiltangle,size,speed,offset,rotationspeed;
  const SECONDS_IN_A_DAY = 86400;
  const EARTH_DAYS_IN_A_YEAR = 365.25; 
  const Ringsspeed= (2 * Math.PI * speedFactor) / (80 * SECONDS_IN_A_DAY);
  const Name="Earth";
  switch(id){
      case 1: { // Mercury
        size = 0.4; // scaled radius
        xRadius = 0.486 * 13; // Mercury semi-major axis scaled
        zRadius = 0.486 * 13; // Mercury semi-major axis scaled
        tiltangle= (7*Math.PI)/180;
        offset = 1; 
        speed = (2 * Math.PI *0.6318* speedFactor) / ( 88 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI* rotationSpeedFactor) / (176*SECONDS_IN_A_DAY);     
         break;
      }
      case 2: { // Venus
        size = 0.95; 
        xRadius = 0.723 * 13; // Venus semi-major axis scaled
        zRadius = 0.723 * 13; // Venus semi-major axis scaled
        tiltangle= (3*Math.PI)/180;
        speed = (2 * Math.PI *0.94*speedFactor) / (225 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI*0.03* rotationSpeedFactor) / (243 * SECONDS_IN_A_DAY); 
        offset = 2;
        break;
      }
      case 3: { // Earth
        size = 1; 
        xRadius = 1 * 13; // Earth semi-major axis scaled
        zRadius = 1 * 13; // Earth semi-major axis scaled
        tiltangle= (23.5*Math.PI)/180;
        speed = (2 * Math.PI *1.3* speedFactor) / (365*SECONDS_IN_A_DAY);
        rotationspeed = (2 * Math.PI*0.03*rotationSpeedFactor) / (SECONDS_IN_A_DAY); 
        offset = 0;
        break;
      }
      case 4: { // Mars
        size = 0.53; 
        xRadius = 1.524 * 13; // Mars semi-major axis scaled
        zRadius = 1.524 * 13; // Mars semi-major axis scaled
        tiltangle= (25*Math.PI)/180;
        speed = (2 * Math.PI *2* speedFactor) / (687 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI*0.03* rotationSpeedFactor) / (SECONDS_IN_A_DAY); 
        offset = 4;
        break;
      }
      case 5: { // Jupiter
        size = 6.5; 
        xRadius = 5.203 * 13; // Jupiter semi-major axis scaled
        zRadius = 5.203 * 13; // Jupiter semi-major axis scaled
        tiltangle= (3*Math.PI)/180;
        speed = (2 * Math.PI * speedFactor) / (40 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI* rotationSpeedFactor) / (40 * SECONDS_IN_A_DAY); 
        offset = 5;
        break;
      }
      case 6: { // Saturn
        size = 5.7; 
        xRadius = 9.537 * 13; // Saturn semi-major axis scaled
        zRadius = 9.537 * 13; // Saturn semi-major axis scaled
        tiltangle= (27*Math.PI)/180;
        speed = (2 * Math.PI * speedFactor) / (80 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI* rotationSpeedFactor) / (80 * SECONDS_IN_A_DAY); 
        offset = 6;
        break;
      }
      case 7: { // Uranus
        size = 4; 
        xRadius = 19.191 * 13; // Uranus semi-major axis scaled
        zRadius = 19.191 * 13; // Uranus semi-major axis scaled
        tiltangle= (98*Math.PI)/180;
        speed = ((2 * Math.PI) * speedFactor) / (160 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI* rotationSpeedFactor) / (160 * SECONDS_IN_A_DAY); 
        offset = 7;
        break;
      }
      case 8: { // Neptune
        size = 3.4; 
        xRadius = 30.019 * 13; // Neptune semi-major axis scaled
        zRadius = 30.019 * 13; // Neptune semi-major axis scaled
        tiltangle= (29*Math.PI)/180;;
        speed = ((2 * Math.PI) * speedFactor) / (320 * SECONDS_IN_A_DAY); 
        rotationspeed = (2 * Math.PI* rotationSpeedFactor) / (320 * SECONDS_IN_A_DAY);
        offset = 8;
        break;
      }
      case 9: { // Sun
        size = 100; // Sun radius scaled
        xRadius = 0; // Sun does not orbit
        zRadius = 0; // Sun does not orbit
        speed = 0; 
        offset = 0; 
        rotationspeed = 0.001* rotationSpeedFactor; 
        break;
      }
      default: {
        size = 100; 
        xRadius = 0; 
        zRadius = 0; 
        speed = 0; 
        offset = 0; 
        rotationspeed = 0.001; 
        break;
      }    
  }
  useEffect(() => {
    setSpeedFactor(spFactor);
    setRotationSpeedFactor(rotFactor);
  }, [spFactor, rotFactor]);
  
   
  
  
  useFrame((state,delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const t = elapsedTime * speed + offset; 
    planetRef.current.position.x = xRadius * Math.sin(t);
    planetRef.current.position.z = zRadius * Math.cos(t);
    planetRef.current.rotation.y += rotationspeed;

    const worldPosition = new THREE.Vector3();
    planetRef.current.getWorldPosition(worldPosition); 

    setCurrentPosition( worldPosition);
   // console.log(selectedPlanet);
  

    if (id === selectedPlanet || id === selectedPlanet - 10) {
      if(id === selectedPlanet - 10){
        setMoonsideClicked(true);
        setMoonClicked(true);
      }
      else{
        setMoonsideClicked(false);
        setMoonClicked(false);
      }
      setShowMoons(true);
      if(!moonClicked){
        setPlanetPosition(worldPosition); 
      }
    }
    else{
      setMoonClicked(false);
      setShowMoons(false);
    }
  });
  return (
    <>
      <group key={`group-${id}`} rotation={[tiltangle, 0, 0]}>
      <mesh ref={planetRef} onClick={handleClick} castShadow receiveShadow>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />

      {id ==6 && 
          <SaturnRings speed={Ringsspeed} offset={6} />
      }
      {showMoons && moonsData[id]?.map((moon, index) => (
        <Moon
          key={index}
          index={index}
          id={id}
          size={moon.size}
          distance={moon.distance}
          currentPosition={currentPosition}
          spFactor={moon.speedFactor}
          rotFactor={rotFactor}Q
          setPlanetPosition={setPlanetPosition} 
          moonhandleClick={moonhandleClick}
          moonsideClicked={moonsideClicked}
        />
      ))}
      </group>
    </>
  );
};

export default Planet;
