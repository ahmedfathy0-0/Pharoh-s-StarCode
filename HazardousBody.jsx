// import React, { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// // import { TextureLoader } from 'three';

// const HazardousBody = ({ size, distanceFromSun, speed, rotationspeed, eccentricity, initialAngle }) => {
//     const meshRef = useRef();
//     const angleRef = useRef(initialAngle); // Keep track of the current angle

//     //texture
// // const textureLoader = new TextureLoader();
// // const texture = textureLoader.load(texturePath || 'default_texture.jpg');

//  // Dynamic size based on the passed size
//  const dynamicSize = size / 2000; // Adjust scale based on your needs
//  const dynamicColor = size > 5 ? 'red' : 'orange'; // Change color based on size



//     const createIrregularShape = (size) => {
//         const geometry = new THREE.BufferGeometry();
//         const vertices = [];

//         // Generate random vertices for an irregular shape
//         for (let i = 0; i < 100; i++) {
//             const x = (Math.random() - 0.5) * size;
//             const y = (Math.random() - 0.5) * size;
//             const z = (Math.random() - 0.5) * size;
//             vertices.push(x, y, z);
//         }

//         geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
//         geometry.computeVertexNormals(); // Optional: Compute normals for shading
//         return geometry;
//     };

//     const geometry = createIrregularShape(size);

//     useFrame(({ clock }) => {
//         const delta = clock.getDelta();
//         angleRef.current += speed * delta; // Increment the angle based on speed
    
//         // Calculate elliptical orbit

//         // const a = distanceFromSun; // Semi-major axis
//         // const b = a * 0.7; // Example semi-minor axis for elliptical shape
//         // const x = a * Math.cos(angleRef.current);
//         // const z = b * Math.sin(angleRef.current);
//          // Elliptical orbit calculations with eccentricity
//         //  const semiMajorAxis = distanceFromSun; // in km
//         //  const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity); // Adjusted for eccentricity

//         //  const x = semiMajorAxis * Math.cos(angleRef.current);
//         //  const z = semiMinorAxis * Math.sin(angleRef.current);

//         // // Optionally apply inclination
//         const inclination = Math.PI / 8; // 22.5 degrees
//         // const y = Math.sin(inclination) * distanceFromSun;

// // Adjust orbit calculations using eccentricity
// const a = distanceFromSun; // Semi-major axis
// const b = a * Math.sqrt(1 - Math.pow(eccentricity, 2)); // Semi-minor axis based on eccentricity

// const x = a * Math.cos(angleRef.current);
// const z = b * Math.sin(angleRef.current);

// // Optionally apply inclination
// const y = Math.sin(inclination) * distanceFromSun; // Optional inclination

    
//         // Update position
//         if (meshRef.current) {
//             meshRef.current.position.set(x, y, z);
//             meshRef.current.rotation.y += rotationspeed * delta; // Rotate around its own axis
//         }
//     });
    

//     return (
//         <mesh ref={meshRef} geometry={geometry} scale={[dynamicSize, dynamicSize, dynamicSize]}>
//             <meshStandardMaterial  color={dynamicColor} />
//             {/* <meshStandardMaterial map={texture} /> */}

//         </mesh>
//     );
// };
//HazardousBody/componentes/src
// export default HazardousBody;
import  { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HazardousBody = ({ size, distanceFromSun, speed, rotationspeed, eccentricity, initialAngle }) => {
    const meshRef = useRef();
    const angleRef = useRef(initialAngle); // Keep track of the current angle

    // Dynamic size based on the passed size
    // const dynamicSize = size / 2000;
     // Adjust scale based on your needs
     const dynamicSize = Math.max(size / 1000, 5); // Ensure a minimum size
    const dynamicColor = size > 5 ? 'red' : 'orange'; // Change color based on size

    // Use SphereGeometry for simplicity and visibility
    const geometry = new THREE.SphereGeometry(dynamicSize, 16, 16);

    useFrame(({ clock }) => {
        const delta = clock.getDelta();
        const dynamicSpeed = speed * 0.01;
        angleRef.current += dynamicSpeed * delta; // Increment the angle based on speed
        // Adjust orbit calculations using eccentricity
        const semiMajorAxis = distanceFromSun; // Semi-major axis
        const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - Math.pow(eccentricity, 2)); // Semi-minor axis

        const x = (semiMajorAxis/1e10) * Math.cos(angleRef.current);
        const z = (semiMinorAxis/1e10) * Math.sin(angleRef.current);

        // Optionally apply inclination
        const inclination = Math.PI / 8; // 22.5 degrees
        const y = Math.sin(inclination) * distanceFromSun * 0.01; // Scale down for visibility

        // Update position
        if (meshRef.current) {
            meshRef.current.position.set(x, y, z);
            meshRef.current.rotation.y += rotationspeed * delta; // Rotate around its own axis
        }
        // Log position and angle for debugging
        console.log(`Position: (${x}, ${y}, ${z}) | Scaled Position: (${x / 1e8}, ${y}, ${z / 1e8}) | Angle: ${angleRef.current.toFixed(2)}`);
    });

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <meshStandardMaterial color={dynamicColor} />
        </mesh>
    );
};

export default HazardousBody;
