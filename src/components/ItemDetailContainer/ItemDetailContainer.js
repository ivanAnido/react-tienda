import { ItemDetail } from "../ItemDetail/ItemDetail"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import soporteAuris from "../assetsItem/soporteAuris.jpg"
import soporteCel from "../assetsItem/soporteCel.jpg"
import cajonPanal from "../assetsItem/cajoncitosPanal.jpg"
import cajonMini from "../assetsItem/cajoneraMini.jpg"
const products = [
    {id:1, image:`${soporteAuris}`, title:"Soporte auriculares", category:"soportes",
    price:500, description:"Soporte para auriculares hecho en 3D"},
    {id:2, image:`${soporteCel}`, title:"Soporte smartphone", category:"soportes",
    price:400, description:"Soporte para celulares hecho en 3D"},
    {id:3, image:`${cajonMini}`, title:"Mini cajonera", category:"cajones",
    price:700, description:"Cajonera mini, ideal para guardar pequeñas cosas, hecho en 3D"},
    {id:4, image:`${cajonPanal}`, title:"Cajones de panal", category:"cajones",
    price:800, description:"Cajones en forma de panal de abejas, y si... hecho en 3D"}
]

export const ItemDetailContainer =()=>{
    const [data, setData] = useState({})
    const {detalleId} = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            },2000)
        })
        
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))))
    },[])
    const onAdd = (cantidad) => {
        console.log(`añadio ${cantidad} unidades al carrito`)
    }

    return(
      <>
        <ItemDetail data={data}/>
        <ItemCount inicial={1} stock={5} onAdd={onAdd} />
      </>
    )
}