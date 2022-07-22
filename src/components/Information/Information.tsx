import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'

import UMBRELLA_LOGO from '../../assets/logo.png'
import './Information.css'

import { useResource } from '../../hooks/useResource'


const Information = ({ clicked, type } : { clicked: boolean, type: string }) =>{
    const infoRef = useRef<HTMLDivElement>(null!)
    
    const { url, header, resource, obj, color } = useResource(type)

    useEffect(() =>{
        gsap.fromTo(infoRef.current.children, {
            x: -700,
            y: 100,
            scale: 0.1,
            opacity: 0
        }, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1
        })
    }, [clicked])

    const Scene = () => {
        return (
            <div className='canvas-container'>
                <Canvas>
                    <ambientLight />
                    <OrbitControls  enableRotate={false}/>
                    {color ? <Light /> : null}
                    {obj}
                </Canvas>
            </div>
        )
    }

    const Light = () => {
            return (
                <>
                    <pointLight color={color} intensity={100} position={[2, 0, 2]}/>
                    <pointLight color={color} intensity={100} position={[-2, 0, -2]}/>
                    <pointLight color={color} intensity={100} position={[4, 1, 0]}/>
                    <pointLight color={color} intensity={100} position={[-4, 1, 0]}/>
                </>
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
                {obj ? <Scene /> : null}
            </div>
        </div>
    )
}

export default Information