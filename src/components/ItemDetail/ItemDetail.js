import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


export const ItemDetail =({data})=>{
    const [goCart,setGoCart] = useState(false)
    const{addProduct} = useCartContext()

    const onAdd = (cantidad) => {
        setGoCart (true)
        addProduct(data,cantidad)
    }
    
    return(
        <div className="card mb-6">
            <img src={data.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text"><small className="text-muted">{data.price}</small></p>
                {
                    goCart
                    ? <Link to= "/cart">Terminar compra</Link>
                    : <ItemCount inicial={1} stock={data.stock} onAdd={onAdd} />
                }

                
            </div>
        </div>
    )
}