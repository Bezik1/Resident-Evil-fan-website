import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import './Information.css'

import FLOWER_URL from '../../assets/flowers.jpg'

const Information = ({ clicked } : { clicked : boolean }) =>{
    const infoRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        console.log(clicked)
        if(clicked){
            gsap.to(infoRef.current, {
                x: 0,
                scale: 1,
                opacity: 1
            })
        } else {
            gsap.to(infoRef.current, {
                x: -700,
                scale: 0.1,
                opacity: 0
            })
        }
    }, [clicked])

    return (
        <div className="information-container" ref={infoRef}>
            <img src={FLOWER_URL} className="flower" alt="flower" />
            <div className='flower-text'>
                <h1>Progenitor Flowers</h1>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
            </div>
        </div>
    )
}

export default Information