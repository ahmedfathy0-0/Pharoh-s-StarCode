import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei'
import ringTexture from "../textures/saturnring.jpg";
import ringsTexture from "../textures/8k_saturn_ring_alpha.png";

const SaturnRing = ({ texture, speed, offset, size, xRadius, zRadius, rotationspeed }) => {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = xRadius * Math.sin(t);
    ref.current.position.z = zRadius * Math.cos(t);
    ref.current.rotation.z -= rotationspeed;
    ref.current.rotation.x = Math.PI / 2;
    ref.current.rotation.y =  Math.PI / 6 ;
  });

  return (
    <mesh position={[0, 0, 0]} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial map={useTexture(texture)} />
    </mesh>
  );
};
const SECONDS_IN_A_DAY = 86400;

const SaturnRings = ({ speed, offset }) => (
  <>

    <SaturnRing texture={ringTexture} speed={speed} offset={offset} size={[10, 0.8, 2]} xRadius={9.537 * 13} zRadius={9.537 * 13} rotationspeed={0.01} />
    <SaturnRing texture={ringsTexture} speed={speed} offset={offset} size={[12, 0.8, 2]} xRadius={9.537 * 13} zRadius={9.537 * 13} rotationspeed={0.01} />
  </>
);

export default SaturnRings;
