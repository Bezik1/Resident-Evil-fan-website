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