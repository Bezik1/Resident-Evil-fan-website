import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './Earth.css'

import Object from './Object'
import { EarthProps } from '../../interfaces/interfaces'

const Earth = (props : EarthProps) =>{

    return (
        <div className="Earth">
            <Canvas>
                <Object props={props.props} />
                <ambientLight intensity={0.8}/>
                <OrbitControls autoRotateSpeed={-0.2} autoRotate={true} />
            </Canvas>
        </div>
    )
}

export default Earth