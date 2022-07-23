import { ReactNode } from "react";
import { Color, Mesh, PlaneGeometry, ShaderMaterial } from 'three'
import { RESOURCE_TYPES } from "../enums/enums";

export interface Resources {
    url: string,
    header: string,
    resource: string,
    obj?: ReactNode,
    color?: Color
}

export interface EarthProps {
    props: {
        clicked: boolean,
        scroll: boolean,
        type: RESOURCE_TYPES,
        click: React.Dispatch<React.SetStateAction<boolean>>,
        setType: React.Dispatch<React.SetStateAction<RESOURCE_TYPES>>
    }
}

export interface EarthInterface {
    scroll: boolean
    clicked: boolean,
    type: RESOURCE_TYPES
    click: React.Dispatch<React.SetStateAction<boolean>>,
    setType: React.Dispatch<React.SetStateAction<RESOURCE_TYPES>>,
}

export interface ObjectValueMapInterface {
    value: RESOURCE_TYPES
}

interface WaveMaterial extends ShaderMaterial {
    uniforms: {
        u_time: {
            type: string,
            value: number
        }
        texture1: {
            type: string,
            value: THREE.Texture
        }
    }
}

export interface Uniform extends Mesh<PlaneGeometry, WaveMaterial> {}