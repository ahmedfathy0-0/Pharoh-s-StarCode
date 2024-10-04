import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight
        position={[0, 0, 0]}
        intensity={200}
        distance={500}
        decay={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
};

export default Lights;
