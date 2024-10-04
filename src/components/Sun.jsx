import { useTexture } from '@react-three/drei';
import sunTexture from "../textures/8k_sun.jpg";

const Sun = () => {
  const texture = useTexture(sunTexture);
  return (
<mesh position={[0, 0, 0]}>
  <sphereGeometry args={[0.1395*40, 32, 16]} />
  <meshBasicMaterial map={texture} />
</mesh>
  );
};

export default Sun;
