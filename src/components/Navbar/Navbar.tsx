import './Navbar.css'
import { RESOURCE_TYPES } from '../../enums/enums'

const Navbar = ({ setType } : { setType: React.Dispatch<React.SetStateAction<string>> }) =>{
    const TableMap = <T extends {[k : string] : string}>(enumerable: T) : RESOURCE_TYPES =>{
        return (Object as any).fromEntries(Object.values(enumerable).map(v => [v, v]))
    }

    const ObjectValuesMap = (e : RESOURCE_TYPES) =>{
        return Object.values(e).map(v =>{
            return <a className='nav-link' onClick={() => setType(v)} href={`#${v}`} key={v}> {v} </a>
          })
    }

    return (
        <div className='nav' id='nav'>
            <div className='nav-links'>
                {ObjectValuesMap(TableMap(RESOURCE_TYPES))}
            </div>
        </div>
    )
}

export default Navbar