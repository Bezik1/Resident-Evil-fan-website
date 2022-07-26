import { useLoader } from '@react-three/fiber'
import { MeshPhongMaterial } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useState, useEffect } from 'react'

import { COLOR } from '../constans/colors'
import { RESOURCE_TYPES, MODELS_URLS } from '../constans/enums'
import { URLS } from '../constans/urls'
import { Resources } from '../interfaces/interfaces'

export const useResource = (type: RESOURCE_TYPES) =>{
    const [data, setData] = useState<Resources>({
        url: '', 
        header: '', 
        resource: '', 
        obj: null!
    })

    const { url, header, resource, obj, color } = data
    const { BLACK, BLUE } = COLOR
    
    const { NEMESIS_URL, DOOR_URL } = MODELS_URLS
    const OBJ = useLoader(OBJLoader, NEMESIS_URL)
    const DOOR_OBJ = useLoader(OBJLoader, DOOR_URL)

    DOOR_OBJ.children.forEach((mesh : any) => {
        mesh.material = new MeshPhongMaterial({color: BLACK}) 
    })

    DOOR_OBJ.rotation.x = -Math.PI/2
    DOOR_OBJ.rotation.z = 0.3

    OBJ.children.forEach((mesh : any) => {
        mesh.material = new MeshPhongMaterial({color: BLACK}) 
    })

    useEffect(() =>{
        const { 
             flower, 
             institution_1, 
             arklay,
             europe_lab, 
             info, 
             grenland, spain, 
             village, 
             kijuju, 
             shanghai 
            } = RESOURCE_TYPES

         const { 
             FLOWER_URL, 
             ARKLAY_URL, 
             RACOON_URL, 
             VILLAGE_URL,
             KIJUJU_URL,
             EUROPE_URL, 
             LOGO_URL, 
             GRENLAND_URL,
             LAS_PLAGAS, 
             SHANGHAI_URL  
            } = URLS

        const dataArray = [
            {
                title: flower,
                url: FLOWER_URL, 
                header: 'African Laboratory', 
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'
            },
            {
                title: institution_1,
                url: RACOON_URL, 
                header: 'Racoon City', 
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
                obj: <primitive object={DOOR_OBJ} position={[0, 0, -30]} />,
                color: BLUE
            },
            {
                title: arklay,
                url: ARKLAY_URL, 
                header: 'Arklay Laboratory', 
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'
            },
            {
                title: europe_lab,
                url: EUROPE_URL,
                header: 'Europe Laboratory', 
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
                obj: <primitive object={OBJ} position={[0, 1.5, 1]} />,
                color: BLUE
            },
            {
                title: info,
                url: LOGO_URL,
                header: 'Umbrella Corporation',
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
            },
            {
                title: grenland,
                url: GRENLAND_URL,
                header: 'Ashfords Laboratory',
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
            },
            {
                title: spain,
                url: LAS_PLAGAS,
                header: 'Las Plagas Village',
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
            },
            {
                title: village,
                url: VILLAGE_URL,
                header: 'Megamycete Village',
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
            },
            {
                title: kijuju,
                url: KIJUJU_URL,
                header: 'Kijuju incident',
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
            },
            {
                title: shanghai,
                url: SHANGHAI_URL,
                header: 'Shanghai Incident',
                resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
            }
        ]

        dataArray.forEach(data =>{
            if(type === data.title){
                setData(data)
            }
        })

    }, [type, OBJ, DOOR_OBJ, BLUE])

    return { url, header, resource, obj, color } as Resources
}