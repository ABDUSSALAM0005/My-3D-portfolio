import { useRef, useEffect } from 'react'


import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);
    

    useEffect(() => {
     actions['Take 001'].play();
    },[actions])

    useFrame(( { clock, camera }) => {
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.25 + 2;

      if(birdRef.current.position.x > camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI;
       }else if(birdRef.current.position.x < camera.position.x - 10) {
        birdRef.current.rotation.y = 0;
       }

      if(birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    });

  return (
    <mesh 
    position={[-5,2,1]} 
    scale={[0.003,0.003,0.003]}
    ref={birdRef}
    >
   <primitive object={scene} />
    </mesh>
  )
}

export default Bird