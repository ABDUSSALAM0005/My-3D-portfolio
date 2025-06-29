import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyscene from '../assets/3d/sky.glb'

const sky = ({ isRotating }) => {
    const sky = useGLTF(skyscene);
    const skyref = useRef();

    useFrame((_, delta) => {
      if(isRotating) {
        skyref.current.rotation.y += 0.15 * delta
      }
    })
    
  return (
    <mesh ref={skyref}>
   <primitive object={sky.scene} />
    </mesh>
  )
}

export default sky