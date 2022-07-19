import gsap from 'gsap'
import { Color } from 'three'
import { useEffect, useRef } from 'react'

import './Information.css'

import { useResource } from '../../hooks/useResource'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Information = ({ clicked, type } : { clicked: boolean, type: string }) =>{
    const infoRef = useRef<HTMLDivElement>(null!)
    const {url, header, resource, mesh} = useResource(type)
    const color = new Color('#3c80b5')

    useEffect(() =>{
        console.log(clicked)
        if(clicked){
            gsap.to(infoRef.current, {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            })
        } else {
            gsap.to(infoRef.current, {
                x: -700,
                y: 100,
                scale: 0.1,
                opacity: 0
            })
        }
    }, [clicked])

    const IsOBject = () => {
        if(mesh){
            return (
                <div className='canvas-container'>
                    <Canvas>
                        <ambientLight />
                        <pointLight color={color} intensity={100} position={[2, 0, 2]}/>
                        <pointLight color={color} intensity={100} position={[-2, 0, -2]}/>
                        <pointLight color={color} intensity={100} position={[4, 1, 0]}/>
                        <pointLight color={color} intensity={100} position={[-4, 1, 0]}/>
                        <OrbitControls  enableRotate={false}/>
                        {mesh}
                    </Canvas>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className="information-container" ref={infoRef}>
            <img src={url} className="img" alt="flower" />
            <div className='header-text'>
                <h1>{header}</h1>
                {resource}
            </div>
            <IsOBject />
        </div>
    )
}

export default Information