import { Group, TextureLoader } from 'three'
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';

import { TEXTURE_URLS } from '../../enums/enums'
import { EarthProps } from '../../interfaces/interfaces';

const Object = ({ clicked, click } : EarthProps) =>{
    const { EARTH_URL } = TEXTURE_URLS 
    const EARTH_TEXTURE = useLoader(TextureLoader, EARTH_URL)

    const earthRef = useRef<Group>(null!)
    //useFrame(() => earthRef.current.rotation.y += 0.001)

    return (
        <group ref={earthRef}>
            <mesh onClick={() => click(!clicked)} position={[2, -0.7, 1.5]}>
                <sphereGeometry args={[0.02, 20, 20]} />
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