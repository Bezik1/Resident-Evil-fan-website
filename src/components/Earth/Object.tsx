import { Mesh, TextureLoader } from 'three'
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';

import { TEXTURE_URLS } from '../../enums/enums'

const Object = () =>{
    const { EARTH_URL } = TEXTURE_URLS 
    const EARTH_TEXTURE = useLoader(TextureLoader, EARTH_URL)

    const earthRef = useRef<Mesh>(null!)
    useFrame(() => earthRef.current.rotation.y += 0.001)

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[2.6, 100, 200, 100]} />
            <meshPhongMaterial map={EARTH_TEXTURE} wireframe={true} />
        </mesh>
    ) 
}

export default Object