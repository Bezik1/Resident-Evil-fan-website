import { useState } from 'react'
import { EarthInterface } from '../../interfaces/interfaces';

import Earth from '../Earth/Earth';
import Information from '../Information/Information'
import Navbar from '../Navbar/Navbar';
import { RESOURCE_TYPES } from '../../enums/enums';

const DataBase = ({ scroll } : { scroll: boolean }) =>{
    const { info } = RESOURCE_TYPES

    const [clicked, click] = useState(true)
    const [type, setType] = useState<RESOURCE_TYPES>(info)

    let EarthProps : EarthInterface = {
        clicked,
        type,
        click,
        setType,
        scroll
    }

    return (
        <div className="database">
            <Navbar props={EarthProps} />
            <Information clicked={clicked} type={type} />
            <Earth props={EarthProps} />
        </div>
    )
}

export default DataBase

