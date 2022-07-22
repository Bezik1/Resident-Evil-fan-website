import { Group, TextureLoader, Vector3 } from 'three'
import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';

import { TEXTURE_URLS, RESOURCE_TYPES } from '../../enums/enums'
import { EarthProps } from '../../interfaces/interfaces';

const Object = (props : EarthProps) =>{
    const { clicked, click, setType } = props.props
    const { flower, institution_1, arklay, europe_lab, grenland, spain, village, kijuju } = RESOURCE_TYPES

    const { EARTH_URL } = TEXTURE_URLS 
    const EARTH_TEXTURE = useLoader(TextureLoader, EARTH_URL)

    const earthRef = useRef<Group>(null!)

    const handleClick = (type : string) =>{
        click(!clicked)
        if(clicked === false) 
            setType(type)
        
    }

    const NewPoint = ({ type, pos} : { type : RESOURCE_TYPES, pos : Vector3 }) => (
        <mesh onClick={() => handleClick(type)} position={pos}>
            <sphereGeometry args={[0.03, 20, 20]} />
            <pointsMaterial />
        </mesh>
    )

    return (
        <group ref={earthRef}>
            <NewPoint type={flower} pos={new Vector3(1.9, -1.5, 1)} />
            <NewPoint type={institution_1} pos={new Vector3(0, 1, 2.4)} />
            <NewPoint type={arklay} pos={new Vector3(-1, 0.5, 2.35)} />
            <NewPoint type={europe_lab} pos={new Vector3(2.2, 0.7, 1.2)} />
            <NewPoint type={grenland} pos={new Vector3(0.5, 1.4, 2.15)} />
            <NewPoint type={spain} pos={new Vector3(1.9, 0.3, 1.75)} />
            <NewPoint type={village} pos={new Vector3(2.35, 0.9, 0.7)} />
            <NewPoint type={kijuju} pos={new Vector3(1.8, -0.3, 1.9)} />
            <mesh>
                <sphereGeometry args={[2.6, 100, 200, 100]} />
                <meshPhongMaterial map={EARTH_TEXTURE} wireframe={true} />
            </mesh>
        </group>
    ) 
}

export default Object