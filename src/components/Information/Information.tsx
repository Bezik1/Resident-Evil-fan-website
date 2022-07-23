import gsap from 'gsap'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { TextureLoader, DoubleSide } from 'three'

import UMBRELLA_LOGO from '../../assets/logo.png'
import './Information.css'


import { Uniform } from '../../interfaces/interfaces'
import { useResource } from '../../hooks/useResource'
import { RESOURCE_TYPES } from '../../enums/enums'

import frag from "./shaders/frag";
import vert from "./shaders/vert";


const Information = ({ clicked, type } : { clicked: boolean, type: RESOURCE_TYPES }) =>{
    const infoRef = useRef<HTMLDivElement>(null!)
    const meshRef = useRef<Uniform>(null!)
    
    const { url, header, resource, obj, color } = useResource(type)

    useEffect(() =>{
        gsap.fromTo(infoRef.current.children, {
            opacity: 0,
            duration: 1
        }, {
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

    const CreateImg = () =>{
        useFrame(({ clock }) => {
            meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime() / 2
        })

        const texture = useLoader(TextureLoader, url)
        
        const uniforms = {
            u_time: { type: 'f', value: 1.0 },
            texture1: { type: "sampler2D", value: texture }, 
        }

        return (
            <mesh
                ref={meshRef}
            >
                <planeGeometry args={[10, 7.5, 24, 24]} />
                <shaderMaterial 
                side={DoubleSide}
                uniforms={uniforms}
                vertexShader={vert}
                fragmentShader={frag}
                //wireframe={true}
                />
            </mesh>
        )
    }

    return (
        <div className="information-container">
            <div className='umbrella'> Umbrella Database</div>
            <img src={UMBRELLA_LOGO} className='umbrella-logo' alt='umbrella-logo' />
            <img src={UMBRELLA_LOGO} className='umbrella-logo-2' alt='umbrella-logo-2' />
            <div className='animation-wrapper' ref={infoRef}>
                <Canvas 
                    style={{width: `400px`, height: `300px`}}
                    className="img" >
                    <ambientLight />
                    <CreateImg />
                </Canvas>
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