//Asteroid at components/src
import asteroidTexture from '../textures/asteroid_texture.jpg'; 
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Asteroid = ({ position }) => {
    const asteroidRef = useRef();
    const texture = useTexture(asteroidTexture); 

    useFrame((state) => {
        const t = state.clock.getElapsedTime(); 
        // Simple movement logic to create orbital effect
        const radius = Math.sqrt(position[0]**2 + position[2]**2);
        const angle = Math.atan2(position[2], position[0]) + t * 0.01; // Adjust speed here
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        asteroidRef.current.position.set(x, 0, z);
    });

    return (
        <mesh ref={asteroidRef} position={position}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default Asteroid;
