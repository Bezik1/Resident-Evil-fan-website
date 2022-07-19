import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './Earth.css'

import Object from './Object'

const Earth = () =>{
    return (
        <div className="Earth">
            <Canvas>
                <Object />
                <ambientLight />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Earth