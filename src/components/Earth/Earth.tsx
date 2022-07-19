import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './Earth.css'

import Object from './Object'
import { EarthProps } from '../../interfaces/interfaces'

const Earth = ({ clicked, click } : EarthProps) =>{
    return (
        <div className="Earth">
            <Canvas>
                <Object clicked={clicked} click={click} />
                <ambientLight intensity={0.8}/>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Earth