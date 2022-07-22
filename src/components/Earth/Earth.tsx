import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './Earth.css'

import Object from './Object'
import { EarthProps } from '../../interfaces/interfaces'

const Earth = (props : EarthProps) =>{
    const { scroll } = props.props

    return (
        <div className={scroll ? "Earth" : "Earth-static"}>
            <Canvas>
                <Object props={props.props} />
                <ambientLight intensity={0.8}/>
                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
            </Canvas>
        </div>
    )
}

export default Earth