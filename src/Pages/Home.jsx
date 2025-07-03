import React, { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Components/Loader";

import Island from "../models/Island";
import Sky from "../models/sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";
import HomeInfo from "../Components/HomeInfo";
import onepeice from "../assets/GrandLine.mp3"
import { soundoff, soundon } from "../assets/icons";




const Home = () => {

  const audioRef = useRef(new Audio(onepeice));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return() => {
      audioRef.current.pause();
    }
  },[isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale =  [0.9,0.9,0.9];
    
    }  else {
      screenScale =  [1,1,1];
      }

      return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition ;

    if (window.innerWidth < 768) {
      screenScale =  [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0]
    
    }  else {
      screenScale =  [3,3,3];
      screenPosition = [0,-4,-4]
      }

      return [screenScale, screenPosition];
  }



  const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  // const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  //  switch (true) {
  //   case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
  //     setCurrentStage(4);
  //     break;
  //     case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
  //     setCurrentStage(3);
  //     break;
  //     case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
  //     setCurrentStage(2);
  //     break;
  //     case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
  //     setCurrentStage(1);
  //     break;
  //     default:
  //     setCurrentStage(null);
      

  // }

  return (
    <section className="w-full h-screen relative">

     
   <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    {currentStage && <HomeInfo currentStage = {currentStage} /> }
    </div> 

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[5,10,5]} intensity={1.5}   />
          <ambientLight intensity={0.3} />
          <hemisphereLight skyColor = "#b1e1ff" groundColor="#000000" intensity={1} />
        
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
          position= {islandPosition}
          scale= {islandScale}
          rotation = {islandRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage}
          />
          <Plane
          isRotating = {isRotating}
          scale = {planeScale}
          position = {planePosition}
          rotation = {[0,20,0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img 
        src={!isPlayingMusic ? soundoff : soundon } 
        alt="sound"
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
