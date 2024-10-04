import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const HazardousBody = ({ size, distanceFromSun, speed, rotationspeed, initialAngle,name }) => {
    const meshRef = useRef();
    const angleRef = useRef(initialAngle); // Keep track of the current angle

    const createIrregularShape = (size) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        // Generate random vertices for an irregular shape
        for (let i = 0; i < 100; i++) {
            const x = (Math.random() - 0.5) * size;
            const y = (Math.random() - 0.5) * size;
            const z = (Math.random() - 0.5) * size;
            vertices.push(x, y, z);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.computeVertexNormals(); // Optional: Compute normals for shading
        return geometry;
    };

    const geometry = createIrregularShape(size);

    useFrame(({ clock }) => {
        const delta = clock.getElapsedTime();
        angleRef.current = speed * delta; // Increment the angle based on speed
    
        // Calculate elliptical orbit
        const a = distanceFromSun; // Semi-major axis
        const b = a * 0.7; // Example semi-minor axis for elliptical shape
    
        const x = a * Math.cos(angleRef.current);
        const z = b * Math.sin(angleRef.current);
        
        // Optionally apply inclination
        const inclination = Math.PI / 16; // 22.5 degrees
        const y = Math.sin(inclination) * distanceFromSun;
    
        // Update position
        if (meshRef.current) {
            meshRef.current.position.set(x, y, z);
        //    meshRef.current.rotation.y += rotationspeed * delta; // Rotate around its own axis
        }
    });
    

    return (
        <>

        <mesh ref={meshRef} geometry={geometry}>
        <Text
        position={[0, 0, 0]}   // Position of the text
        fontSize={1}          // Size of the text
        color="red"           // Color of the text
      >
        {name}
      </Text>
            <meshStandardMaterial color="orange" />
        </mesh>
        </>
    );
};

export default HazardousBody;
