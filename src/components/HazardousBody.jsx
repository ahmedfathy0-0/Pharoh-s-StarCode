import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const HazardousBody = ({ size, distanceFromSun, speed, rotationspeed, initialAngle }) => {
    const meshRef = useRef();
    const angleRef = useRef(initialAngle);
    const textureRef = useRef(null);

    // Load the asteroid texture
    useEffect(() => {
        const loader = new TextureLoader();
        loader.load('../textures/2k_moon.jpg', (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Repeat texture
            texture.offset.set(0, 0); // Offset texture
            textureRef.current = texture;
        });
    }, []);

    const createIrregularShape = (size) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < 1000; i++) { 
            const x = (Math.random() - 0.5) * size;
            const y = (Math.random() - 0.5) * size;
            const z = (Math.random() - 0.5) * size;

            const noise = Math.sin(x * 2) * Math.cos(y * 2) * Math.sin(z * 2);
            const displacement = noise * (size / 10); 

            vertices.push(x + displacement, y + displacement, z + displacement);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.computeVertexNormals();
        return geometry;
    };

    const geometry = createIrregularShape(size);

    useFrame(({ clock }) => {
        const delta = clock.getElapsedTime();
        
        angleRef.current += speed * delta * 0.0005; 
        
        const a = distanceFromSun;
        const b = a * 0.7;

        const x = a * Math.cos(angleRef.current);
        const z = b * Math.sin(angleRef.current);

        const inclination = Math.PI / 16; // 22.5 degrees
        const y = Math.sin(inclination) * distanceFromSun;

        if (meshRef.current) {
            meshRef.current.position.set(x, y, z);
            meshRef.current.rotation.y += rotationspeed * delta * 0.0005; 
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <meshStandardMaterial map={textureRef.current} /> {/* Apply texture */}
        </mesh>
    );
};

export default HazardousBody;
