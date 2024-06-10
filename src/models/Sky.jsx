import {useRef} from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useGLTF } from '@react-three/drei'

import {useFrame} from '@react-three/fiber'
// it allows to do something on each of every frame
// from react three fiber 
// sky is a primitive 
const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_,delta)=>{
      if(isRotating){
        skyRef.current.rotation.y +=0.2*delta 
        // if the frame is rotating then the sky is also 
        //rotating at the speed 0.2*delta 
      }
    })
  return ( 
    <mesh ref={skyRef}>
        <primitive object= {sky.scene}/>
    </mesh>
  )
}

export default Sky