// src/components/Scene.jsx
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Asteroid from "./Asteroid";
import { fetchAsteroids } from "../fetchAsteroids";

const Scene = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAsteroids();
      setAsteroids(data); // Adjust according to your data structure
    };
    getData();
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 50000000], fov: 60 }}>
      {/* You might encounter ESLint warnings when you use certain properties or elements that are valid in the context of a library like react-three-fiber, but not in standard React. */}
      {/* Disable ESLint for this line */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, 10, 5]} intensity={0.5} />{" "}
      {/* Optional: Additional light source */}
      {/* Reference Cube */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 32, 32]} />{" "}
        {/* A small sphere at the origin */}
        <meshStandardMaterial color="green" />
      </mesh>
      {asteroids.map((asteroid, index) => {
        // Prepare position values
        const position = [
          asteroid.x / 1e10,
          asteroid.y / 1e10,
          asteroid.z / 1e10,
        ]; // Scale down positions

        // Log the position and angle
        console.log(
          `Rendering Asteroid: ${index} at Position: (${position[0]}, ${position[1]}, ${position[2]}) | Angle: ${asteroid.initialAngle}`
        );

        return (
          <Asteroid
            key={index}
            size={asteroid.size}
            distanceFromSun={asteroid.distanceFromSun}
            speed={asteroid.speed}
            rotationspeed={asteroid.rotationspeed}
            eccentricity={asteroid.eccentricity}
            initialAngle={asteroid.initialAngle}
            position={position} // Pass the scaled position
          />
        );
      })}
    </Canvas>
  );
};
export default Scene;
