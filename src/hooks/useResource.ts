import { useState, useEffect } from 'react'
import { RESOURCE_TYPES } from '../enums/enums'

import FLOWER_URL from '../assets/flowers.jpg'
import RACOON_URL from '../assets/racoon.webp'

export const useResource = (type : string) =>{
    const [data, setData] = useState<string[]>([])

    const { flower, institution_1 } = RESOURCE_TYPES
    const [ url, header, resource ] = data

    useEffect(() =>{
        switch(true){
            case type === flower: 
                setData([FLOWER_URL, 'Progenitor Flowers', 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'])
                break
            case type === institution_1:
                setData([RACOON_URL, 'Racoon City', 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'])
                break
            }
    }, [type, flower, institution_1])

    return [url, header, resource ]
}