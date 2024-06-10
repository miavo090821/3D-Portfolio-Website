import {useRef, useEffect} from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

import {useFrame} from '@react-three/fiber'

const Bird = () => {
    const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const {actions} = useAnimations(animations,birdRef);
    // add action to the bird using ref and animations 

    useEffect(()=>{
        actions['Take 001'].play();
    },[]);
    // allow the bird to swing 

    useFrame(({clock,camera})=> {
        // update the Y position simulate 
        // the flight moving in a sin wave
        // 
        birdRef.current.position.y = Math.sin(clock.elapsedTime)*0.2+2;
        // this keeps track of the total time 
        // the clock has been running, it moves as the clock moves
        
        if(birdRef.current.position.x > camera.position.x+10){
            birdRef.current.rotation.y= Math.PI;
            // to rotate the bird if it reached the end of the frame then do circle loop
        }else if(birdRef.current.position.x <camera.position.x - 10){
            birdRef.current.rotation.y=0;
                // if the bird hasnt reached the end
        }

    
        // to move change X, to make the bird move towards 
        //we use position not rotation anymore
        if(birdRef.current.rotation.y===0){
            birdRef.current.position.x +=0.01;
            birdRef.current.position.z -= 0.01;
        } else{
            birdRef.current.position.x -=0.01;
            birdRef.current.position.z +=0.01;
        }
    })



  return (
    <mesh position ={[-5,2,1]}scale={[0.003,0.003,0.003]} 
    ref={birdRef}
    >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird