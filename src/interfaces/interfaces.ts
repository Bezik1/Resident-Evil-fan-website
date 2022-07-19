import { ReactNode } from "react";

export interface Resources {
    url: string,
    header: string,
    resource: string,
    mesh?: ReactNode
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