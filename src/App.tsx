 
import { Canvas } from '@react-three/fiber';
import Experience from './_components/Experience';
import { ScrollControls,Scroll } from '@react-three/drei';
import { config } from './config';
import Interface from './_components/Section/InterFace'; 
function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
    <color attach="background" args={["#f5f3ee"]} />
    <fog attach="fog" args={["#f5f3ee", 10, 50]} />
    <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.2}
        >
    <group position-y={-1}>
      <Experience />
    </group>
    <Scroll html>
            <Interface />
          </Scroll>
    </ScrollControls>
  </Canvas>
  );
}
 
export default App;