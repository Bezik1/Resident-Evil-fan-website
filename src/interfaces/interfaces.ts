import { Group } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { ObjectMap } from "@react-three/fiber";

export interface Resources {
    url: string,
    header: string,
    resource: string,
    mesh?: Group | (GLTF & ObjectMap)
}

export interface EarthProps {
    props: {
        clicked: boolean,
        click: React.Dispatch<React.SetStateAction<boolean>>,
        setType: React.Dispatch<React.SetStateAction<string>>
    }
}

export interface EarthInterface {
    clicked: boolean,
    click: React.Dispatch<React.SetStateAction<boolean>>,
    setType: React.Dispatch<React.SetStateAction<string>>
}