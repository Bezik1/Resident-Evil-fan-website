import { Group, TextureLoader, Vector3 } from 'three'
import { useRef } from 'react';
import gsap from 'gsap';
import { useLoader, useFrame, RootState } from '@react-three/fiber';

import { TEXTURE_URLS, RESOURCE_TYPES } from '../../enums/enums'
import { EarthProps } from '../../interfaces/interfaces';

const Object = (props : EarthProps) =>{
    const { clicked, type, click, setType } = props.props
    const { flower, institution_1, arklay, europe_lab, 
    grenland, spain, village, kijuju, shanghai } = RESOURCE_TYPES

    const { EARTH_URL } = TEXTURE_URLS 
    const EARTH_TEXTURE = useLoader(TextureLoader, EARTH_URL)

    const earthRef = useRef<Group>(null!)

    const handleClick = (type : RESOURCE_TYPES) =>{
        click(!clicked)
        setType(type)
    }

    const NewPoint = ({ t, pos } : { t : RESOURCE_TYPES, pos : Vector3 }) => (
        <mesh onClick={() => handleClick(t)} position={pos}>
            <sphereGeometry args={[0.03, 20, 20]} />
            <pointsMaterial color={t === type ? 'red' : 'white'}/>
        </mesh>
    )

    const whichRotateY = (type : RESOURCE_TYPES) =>{
        switch(true){
            case type === flower:
                return -1 * Math.PI/3
            case type === institution_1:
                return 0
            case type === arklay:
                return 0.5
            case type === europe_lab:
                return -1.1
            case type === grenland:
                return -0.25
            case type === spain:
                return -0.8
            case type === village:
                return -1.3
            case type === kijuju:
                return -0.75
            case type === shanghai:
                return -2.45
            default:
                return 0
        }
    } 

    
    const whichRotateCamera = (type : RESOURCE_TYPES) =>{
        switch(true){
            case type === flower:
                return -2
            case type === institution_1:
                return 1
            case type === arklay:
                return 0.5
            case type === europe_lab:
                return 1.1
            case type === grenland:
                return 1.8
            case type === spain:
                return 0.5
            case type === village:
                return 1.3
            case type === kijuju:
                return -0.75
            default:
                return 0
        }
    } 

    useFrame(({ camera } : RootState) =>{
        gsap.to(earthRef.current.rotation, {
            y: whichRotateY(type),
            duration: 1
        })
        gsap.to(camera.position, {
            y: whichRotateCamera(type),
            duration: 1
        })
    })

    return (
        <group ref={earthRef}>
            <NewPoint t={flower} pos={new Vector3(1.9, -1.5, 1)} />
            <NewPoint t={institution_1} pos={new Vector3(0, 1, 2.4)} />
            <NewPoint t={arklay} pos={new Vector3(-1, 0.5, 2.35)} />
            <NewPoint t={europe_lab} pos={new Vector3(2.2, 0.7, 1.2)} />
            <NewPoint t={grenland} pos={new Vector3(0.5, 1.4, 2.15)} />
            <NewPoint t={spain} pos={new Vector3(1.9, 0.3, 1.75)} />
            <NewPoint t={village} pos={new Vector3(2.35, 0.9, 0.7)} />
            <NewPoint t={kijuju} pos={new Vector3(1.8, -0.3, 1.9)} />
            <NewPoint t={shanghai} pos={new Vector3(1.5, 0, -2.15)} />
            <mesh>
                <sphereGeometry args={[2.6, 100, 200, 100]} />
                <meshPhongMaterial map={EARTH_TEXTURE} wireframe={true} />
            </mesh>
        </group>
    ) 
}

export default Object