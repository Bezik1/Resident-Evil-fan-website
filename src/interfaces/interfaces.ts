import { ReactNode } from "react";
import { Color } from 'three'

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
        type: string,
        click: React.Dispatch<React.SetStateAction<boolean>>,
        setType: React.Dispatch<React.SetStateAction<string>>
    }
}

export interface EarthInterface {
    clicked: boolean,
    click: React.Dispatch<React.SetStateAction<boolean>>,
    setType: React.Dispatch<React.SetStateAction<string>>,
    type: string
}