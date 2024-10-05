import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { Text } from '@react-three/drei';
import HazardousBodyTexture from "../textures/asteroid_texture.jpg";


const HazardousBody = ({index, size, distanceFromSun, speed, rotationspeed, initialAngle,onClick,setPlanetPosition ,selectedPlanet,Labels}) => {

    const meshRef = useRef();
    const angleRef = useRef(initialAngle);
    const texture = useTexture(HazardousBodyTexture);
    const [isClicked, setIsClicked] = React.useState(false);
    
    const geometry = new THREE.DodecahedronGeometry(size); 
    const material = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); 

    const handleClick = () => {

        setIsClicked(!isClicked);
        if (onClick&&isClicked) {
          onClick(index+500); 
       }
        
      };

    useFrame(({ clock }) => {
        const delta = clock.getElapsedTime();
        
        angleRef.current += speed * delta * 0.0005; 
        
        const x = distanceFromSun * Math.cos(angleRef.current);
        const z = distanceFromSun * Math.sin(angleRef.current);
        const y = Math.sin(Math.PI / 16) * distanceFromSun;

        if (meshRef.current) {
            meshRef.current.position.set(x, y, z);
            meshRef.current.rotation.y += rotationspeed * delta * 0.0001;
            const worldPosition = new THREE.Vector3();
            meshRef.current.getWorldPosition(worldPosition);  
            if (index+500 === selectedPlanet) {
                angleRef.current *= 0.001;
                setPlanetPosition(worldPosition);
            }
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry} onClick={handleClick}>
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default HazardousBody;
