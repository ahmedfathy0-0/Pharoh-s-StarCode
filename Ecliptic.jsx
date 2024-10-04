import * as THREE from 'three';

const Ecliptic = ({ xRadius = 1, zRadius = 1 }) => {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    points.push(new THREE.Vector3(xRadius * Math.cos(angle), 0, zRadius * Math.sin(angle)));
  }
  points.push(points[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={0.5} />
    </line>
  );
};

export default Ecliptic;
