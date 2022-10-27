import { useEffect, useState } from "react"

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

import { ItemList } from "../ItemList/ItemList"

import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const [data, setData] = useState([])
    
    const {categoriaId} = useParams ()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, "productos")
        if (categoriaId){
            const queryFilter = query(queryCollection, where("category","==",categoriaId))
            getDocs(queryFilter)
            .then(res =>setData( res.docs.map(product => ({id: product.id, ...product.data()}))))
            
        }else {
            getDocs(queryCollection)
            .then(res =>setData( res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [categoriaId])
    
    
    return(
       
            <div className="d-flex flex-column justify-content-center " >
        
                <div className="d-flex justify-content-center " >
                    <ItemList data={data}/>
                </div>
            </div>
       
    )
}