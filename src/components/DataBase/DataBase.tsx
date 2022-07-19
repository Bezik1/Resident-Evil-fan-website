import { useState } from 'react'
import { EarthInterface } from '../../interfaces/interfaces';

import Earth from '../Earth/Earth';
import Information from '../Information/Information'

const DataBase = () =>{
    const [clicked, click] = useState(false)
    const [type, setType] = useState<string>('')

    let EarthProps : EarthInterface = {
        clicked,
        click,
        setType
    }

    return (
        <div className="database">
            <Information clicked={clicked} type={type} />
            <Earth props={EarthProps} />
        </div>
    )
}

export default DataBase

