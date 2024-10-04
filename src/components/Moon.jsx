import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import earthMoon from '../textures/2k_moon.jpg';
import phobos from '../textures/2k_phobos.jpg';
import europa from '../textures/2k_europa.jpg';
import CameraController from './CameraController';

const moonTextures = {
  3: [earthMoon],
  4: [phobos],
  5: [europa,europa],
  6: [earthMoon],
};

const Moon = ({index, id, size, distance, currentPosition, spFactor, rotFactor, setPlanetPosition, moonhandleClick }) => {

    const moonRef = useRef();
    const texture = useTexture(moonTextures[id][index]);
    const [isClicked, setIsClicked] = useState(false);
    const [speedFactor, setSpeedFactor] = useState(spFactor);
    const [rotationSpeedFactor, setRotationSpeedFactor] = useState(rotFactor);
    let offset = 1;
  
    const handleClick = () => {
        setIsClicked(!isClicked);
        moonhandleClick(id);        
      };

    const SECONDS_IN_A_DAY = 86400;
    const speed = (2 * Math.PI * speedFactor) / SECONDS_IN_A_DAY;
    const rotationspeed = (2 * Math.PI * rotationSpeedFactor) / SECONDS_IN_A_DAY;
  
    useEffect(() => {
      setSpeedFactor(spFactor);
      setRotationSpeedFactor(rotFactor);
    }, [spFactor, rotFactor]);
  
    useFrame(() => {
        if (currentPosition) {
           
        moonRef.current.position.x = currentPosition.x + distance * Math.cos(speed * offset);
        moonRef.current.position.z = currentPosition.z + distance * Math.sin(speed * offset)+ index *5;
        moonRef.current.position.y = currentPosition.y +index *5;
  
        moonRef.current.rotation.y += rotationspeed;
        offset += 0.01; 
        if(isClicked){
            setPlanetPosition( moonRef.current.position.clone());
        }       
    }
    });
  
    return (
        <> 
        <mesh ref={moonRef} onClick={handleClick} castShadow receiveShadow>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
         </>
   
    );
  };
  
  export default Moon;
  
