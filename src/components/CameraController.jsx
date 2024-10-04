import { useRef, useEffect,useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CameraController = ({ planetPosition , isclicked, currentCameraPosition, selectedPlanet }) => {

  const [returnBool, setReturnBool] = useState(true);

  const targetPosition = useRef(new THREE.Vector3()); 
  const travelSpeed = 3;

  let targetx, targety, targetz;
  if (planetPosition) {
  switch (selectedPlanet) {
    case 1: // Mercury
      targetx = planetPosition.x - 3;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 2: // Venus
      targetx = planetPosition.x - 5;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 3: // Earth
      targetx = planetPosition.x +1;
      targety = planetPosition.y+1;
      targetz = planetPosition.z-5;
      break;
    case 4: // Mars
      targetx = planetPosition.x + 3;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 5: // Jupiter
      targetx = planetPosition.x + 40;
      targety = planetPosition.y +6;
      targetz = planetPosition.z;
      break;
    case 6: // Saturn
      targetx = planetPosition.x + 30;
      targety = planetPosition.y +5 ;
      targetz = planetPosition.z -30;
      break;
    case 7: // Uranus
      targetx = planetPosition.x - 10;
      targety = planetPosition.y + 5;
      targetz = planetPosition.z - 10;
      break;
    case 8: // Neptune
      targetx = planetPosition.x - 10;
      targety = planetPosition.y + 5;
      targetz = planetPosition.z;
      break;
    case 13: // Moon
      targetx = planetPosition.x +0.3 ;
      targety = planetPosition.y ;
      targetz = planetPosition.z ;
      break;
    case 14: // Phobos
      targetx = planetPosition.x + 0.3;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 15: // Europa
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 16: // Titan
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    //astroids
    case 500:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 501:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 502:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 503:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 504:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 505:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 506:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 507:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 508:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 509:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 510:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 511:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 512:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 513:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 514:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 515:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 516:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 517:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 518:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;
    case 519:
      targetx = planetPosition.x + 1;
      targety = planetPosition.y ;
      targetz = planetPosition.z;
      break;


    default:
      targetx = 0;
      targety = 200;
      targetz = 250;
      break;
  }
}
  useEffect(() => {
    //console.log(selectedPlanet);
    if(isclicked) {
    if (planetPosition) {
        targetPosition.current.set(
        targetx,
        targety,
        targetz
      );
    }
    }
    else {
      targetPosition.current.set(0, 200, 250);
    }
  }, [planetPosition]);
  useFrame((state) => {
    if(isclicked) {
    if (planetPosition) {
      setReturnBool(true); 
      if(returnBool) {
      const direction = targetPosition.current.clone().sub(state.camera.position).normalize();
      
      state.camera.position.add(direction.multiplyScalar(travelSpeed));

      if (state.camera.position.distanceTo(targetPosition.current) < travelSpeed) {
        state.camera.position.copy(targetPosition.current);
      }
      }

      state.camera.lookAt(planetPosition);
    }
  }
    else {
      if(returnBool) {
      const direction = targetPosition.current.clone().sub(state.camera.position).normalize();
      state.camera.position.add(direction.multiplyScalar(travelSpeed *2));
      if (state.camera.position.distanceTo(targetPosition.current) < travelSpeed*2) {
        state.camera.position.copy(targetPosition.current); 
        setReturnBool(false);
      }
      state.camera.lookAt(0, 0, 0);

    }
    }
  });

  return null; 
};

export default CameraController;
