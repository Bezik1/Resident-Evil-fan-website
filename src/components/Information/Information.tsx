import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import './Information.css'

import { useResource } from '../../hooks/useResource'

const Information = ({ clicked, type } : { clicked: boolean, type: string }) =>{
    const infoRef = useRef<HTMLDivElement>(null!)
    const [url, header, resources ] = useResource(type)

    useEffect(() =>{
        console.log(clicked)
        if(clicked){
            gsap.to(infoRef.current, {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            })
        } else {
            gsap.to(infoRef.current, {
                x: -700,
                y: 100,
                scale: 0.1,
                opacity: 0
            })
        }
    }, [clicked])



    return (
        <div className="information-container" ref={infoRef}>
            <img src={url} className="img" alt="flower" />
            <div className='header-text'>
                <h1>{ header }</h1>
                { resources }
        </div>
        </div>
    )
}

export default Information