import './Navbar.css'
import LOGO_URL from '../../assets/logo.png'

import { RESOURCE_TYPES } from '../../enums/enums'
import { EarthProps } from '../../interfaces/interfaces'

const Navbar = (props : EarthProps) =>{
    const { clicked, click, setType } = props.props
    const { info } = RESOURCE_TYPES

    const TableMap = <T extends {[k : string] : string}>(enumerable: T) : RESOURCE_TYPES =>{
        return (Object as any).fromEntries(Object.values(enumerable).map(v => [v, v]))
    }

    const ObjectValuesMap = (e : RESOURCE_TYPES) =>{
        return Object.values(e).map(v =>{
            if(v === info){
                return null
            } else {
                return <a className='nav-link' onClick={() => handleClick(v)} key={v}> {v} </a>
            }
          })
    }

    const handleClick = (type : string) =>{
        setType(type)
        click(!clicked)
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