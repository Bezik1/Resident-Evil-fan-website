import './Navbar.css'
import LOGO_URL from '../../assets/logo.png'

import { RESOURCE_TYPES } from '../../enums/enums'
import { EarthProps, ObjectValueMapInterface } from '../../interfaces/interfaces'

const Navbar = (props : EarthProps) =>{
    const { clicked, type, click, setType } = props.props
    const { info } = RESOURCE_TYPES

    const TableMap = <T extends {[k : string] : RESOURCE_TYPES}>(enumerable: T) : ObjectValueMapInterface =>{
        return (Object as any).fromEntries(Object.values(enumerable).map(v => [v, v]))
    }

    const ObjectValuesMap = (e: ObjectValueMapInterface) =>{
        return Object.values(e).map((value : RESOURCE_TYPES) =>{
            if(value === info){
                return null
            } else {
                return <div 
                className={value === type ? 'nav-link-active' : 'nav-link'} 
                onClick={() => handleClick(value)}
                key={value}> 
                 {value} 
                </div>
            }
          })
    }

    const handleClick = (currentType : RESOURCE_TYPES) : void =>{
        setType(currentType)
        if(currentType !== type){
            click(!clicked)
        }
    } 

    return (
        <div className='nav' id='nav'>
            <img src={LOGO_URL} onClick={() => handleClick(info)} className='nav-logo' alt='nav-logo' />
            <div className='nav-links'>
                {ObjectValuesMap(TableMap(RESOURCE_TYPES))}
            </div>
        </div>
    )
}

export default Navbar