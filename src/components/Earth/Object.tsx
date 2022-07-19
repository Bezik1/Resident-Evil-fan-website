import { Group, TextureLoader } from 'three'
import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';

import { TEXTURE_URLS, RESOURCE_TYPES } from '../../enums/enums'
import { EarthProps } from '../../interfaces/interfaces';

const Object = (props : EarthProps) =>{
    const { clicked, click, setType } = props.props
    const { flower, institution_1 } = RESOURCE_TYPES

    const { EARTH_URL } = TEXTURE_URLS 
    const EARTH_TEXTURE = useLoader(TextureLoader, EARTH_URL)

    const earthRef = useRef<Group>(null!)

    const handleClick = (type : string) =>{
        click(!clicked)
        setType(type)
    }

    return (
        <group ref={earthRef}>
            <mesh onClick={() => handleClick(flower)} position={[2, -0.7, 1.5]}>
                <sphereGeometry args={[0.03, 20, 20]} />
                <pointsMaterial />
            </mesh>
            <mesh onClick={() => handleClick(institution_1)} position={[0, 1, 2.4]}>
                <sphereGeometry args={[0.03, 20, 20]} />
                <pointsMaterial />
            </mesh>
            <mesh>
                <sphereGeometry args={[2.6, 100, 200, 100]} />
                <meshPhongMaterial map={EARTH_TEXTURE} wireframe={true} />
            </mesh>
        </group>
    ) 
}

export default Object