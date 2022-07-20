import { useLoader } from '@react-three/fiber'
import { Color, MeshPhongMaterial } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useState, useEffect } from 'react'

import FLOWER_URL from '../assets/flowers.jpg'
import RACOON_URL from '../assets/racoon.webp'
import ARKLAY_URL from '../assets/arklay.webp'
import EUROPE_URL from '../assets/europe.webp'
import LOGO_URL from '../assets/logo.jpg'

import { RESOURCE_TYPES } from '../enums/enums'
import { Resources } from '../interfaces/interfaces'
import { MODELS_URLS } from '../enums/enums'

export const useResource = (type : string) =>{
    const [data, setData] = useState<Resources>({
        url: '', 
        header: '', 
        resource: '', 
        mesh: null!
    })

    const { flower, institution_1, arklay, europe_lab, info } = RESOURCE_TYPES
    const { url, header, resource, mesh } = data
    const { NEMESIS_URL } = MODELS_URLS

    const obj = useLoader(OBJLoader, NEMESIS_URL)

    obj.children.forEach((mesh : any) => {
        mesh.material = new MeshPhongMaterial({color: new Color('#000')}) 
    })

    useEffect(() =>{
        switch(true){
            case type === flower: 
                setData({
                        url: FLOWER_URL, 
                        header: 'African Laboratory', 
                        resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'})
                    break
                case type === institution_1:
                    setData({
                        url: RACOON_URL, 
                        header: 'Racoon City', 
                        resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'})
                    break
                case type === arklay:
                    setData({
                        url: ARKLAY_URL, 
                        header: 'Arklay Laboratory', 
                        resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure'})
                    break
                case type === europe_lab:
                    setData({
                        url: EUROPE_URL,
                        header: 'Europe Laboratory', 
                        resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
                        mesh: obj})
                     break
                case type === info:
                    setData({
                        url: LOGO_URL,
                        header: 'Umbrella Corporation',
                        resource: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
                    })
                    break
        }
    }, [type, flower, institution_1, arklay, europe_lab, obj, info])

    return {url, header, resource, mesh }
}