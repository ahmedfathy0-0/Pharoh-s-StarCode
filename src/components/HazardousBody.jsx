import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import HazardousBodyTexture from "../textures/asteroid_texture.jpg";


const HazardousBody = ({ size, distanceFromSun, speed, rotationspeed, initialAngle }) => {
    const meshRef = useRef();
    const angleRef = useRef(initialAngle);
    const texture = useTexture(HazardousBodyTexture);
    
    const geometry = new THREE.DodecahedronGeometry(size); // Using DodecahedronGeometry
    const material = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Brown color to represent an asteroid

    useFrame(({ clock }) => {
        const delta = clock.getElapsedTime();
        
        angleRef.current += speed * delta * 0.0005; 
        
        const x = distanceFromSun * Math.cos(angleRef.current);
        const z = distanceFromSun * Math.sin(angleRef.current);
        const y = Math.sin(Math.PI / 16) * distanceFromSun;

        if (meshRef.current) {
            meshRef.current.position.set(x, y, z);
            meshRef.current.rotation.y += rotationspeed * delta * 0.0005; 
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry} material={material} >
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default HazardousBody;
