import { useEffect, useState } from "react"


import { ItemList } from "../ItemList/ItemList"
import { ItemTitle } from "./ItemTitle"

import { useParams } from "react-router-dom"

import soporteAuris from "../assetsItem/soporteAuris.jpg"
import soporteCel from "../assetsItem/soporteCel.jpg"
import cajonPanal from "../assetsItem/cajoncitosPanal.jpg"
import cajonMini from "../assetsItem/cajoneraMini.jpg"

const products = [
    {id:1, image:`${soporteAuris}`, title:"Soporte auriculares", category:"soportes",
    price:500, description:"Soporte para auriculares hecho en 3D"},
    {id:2, image: `${soporteCel}`, title:"Soporte smartphone", category:"soportes",
    price:400, description:"Soporte para celulares hecho en 3D"},
    {id:3, image:`${cajonMini}`, title:"Mini cajonera", category:"cajones",
    price:700, description:"Cajonera mini, ideal para guardar pequeñas cosas, hecho en 3D"},
    {id:4, image:`${cajonPanal}`, title:"Cajones de panal", category:"cajones",
    price:800, description:"Cajones en forma de panal de abejas, y si... hecho en 3D"}
]

export const ItemListContainer = () => {
    const [data, setData] = useState([])
    
    const {categoriaId} = useParams ()

    useEffect(() => {
        const getData =new Promise(resolve =>{
            setTimeout(()=> {
                resolve(products)
            },2000)
        })
        if (categoriaId){
            getData.then(res => setData(res.filter(product => product.category === categoriaId)))
        }else {
            getData.then(res => setData(res))
        }
    }, [categoriaId])
    
    
    return(
       
            <div className="d-flex flex-column justify-content-center " >
                <ItemTitle  greeting="Paso a paso"/>
                <div className="d-flex justify-content-center " >
                    <ItemList data={data}/>
                </div>
            </div>
       
    )
}