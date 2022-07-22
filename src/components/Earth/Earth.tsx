import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useState } from 'react'

import './Earth.css'

import Object from './Object'
import { EarthProps } from '../../interfaces/interfaces'

const Earth = (props : EarthProps) =>{
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        const onScroll = () => {
          const scrollCheck = window.scrollY < 800
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        }
      
      // setting the event handler from web API
      document.addEventListener("scroll", onScroll)
      
      // cleaning up from the web API
       return () => {
         document.removeEventListener("scroll", onScroll)
        }
      }, [scroll, setScroll])


    return (
        <div className={scroll ? "Earth" : "Earth-static"}>
            <Canvas>
                <Object props={props.props} />
                <ambientLight intensity={0.8}/>
                <OrbitControls enableZoom={false} enableRotate={false} />
            </Canvas>
        </div>
    )
}

export default Earth