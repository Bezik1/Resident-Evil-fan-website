import { useState } from 'react'
import { EarthInterface } from '../../interfaces/interfaces';

import Earth from '../Earth/Earth';
import Information from '../Information/Information'
import { RESOURCE_TYPES } from '../../enums/enums';

const DataBase = () =>{
    const { info } = RESOURCE_TYPES

    const [clicked, click] = useState(true)
    const [type, setType] = useState<string>(info)

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

