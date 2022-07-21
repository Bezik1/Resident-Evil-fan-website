import gsap from 'gsap'
import { Color } from 'three'
import { useEffect, useRef } from 'react'

import UMBRELLA_LOGO from '../../assets/logo.png'
import './Information.css'

import { useResource } from '../../hooks/useResource'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Information = ({ clicked, type } : { clicked: boolean, type: string }) =>{
    const infoRef = useRef<HTMLDivElement>(null!)
    
    const { url, header, resource, mesh } = useResource(type)
    const color = new Color('#3c80b5')

    useEffect(() =>{
        console.log(clicked)
        if(clicked){
            gsap.to(infoRef.current.children, {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            })
        } else {
            gsap.to(infoRef.current.children, {
                x: -700,
                y: 100,
                scale: 0.1,
                opacity: 0
            })
        }
    }, [clicked])

    const Scene = () => {
            return (
                <div className='canvas-container'>
                    <Canvas>
                        <ambientLight />
                        <pointLight color={color} intensity={100} position={[2, 0, 2]}/>
                        <pointLight color={color} intensity={100} position={[-2, 0, -2]}/>
                        <pointLight color={color} intensity={100} position={[4, 1, 0]}/>
                        <pointLight color={color} intensity={100} position={[-4, 1, 0]}/>
                        <OrbitControls  enableRotate={false}/>
                        <primitive object={mesh} position={[0, 1.5, 1]} />
                    </Canvas>
                </div>
            )
    }

    return (
        <div className="information-container">
            <div className='umbrella'> Umbrella Database</div>
            <img src={UMBRELLA_LOGO} className='umbrella-logo' alt='umbrella-logo' />
            <img src={UMBRELLA_LOGO} className='umbrella-logo-2' alt='umbrella-logo-2' />
            <div className='animation-wrapper' ref={infoRef}>
                <img src={url} className="img" alt="flower" />
                <div className='header-text'>
                    <h1>{header}</h1>
                    {resource}
                </div>
                {mesh ? <Scene /> : null}
            </div>
        </div>
    )
}

export default Information