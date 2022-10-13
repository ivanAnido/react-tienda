
import "./itemCount.css"
import { useState, useEffect } from "react"

const ItemCount = ({inicial, stock, onAdd}) => {
 const [count, setCount] = useState(parseInt(inicial))

 const menos = () =>{
  setCount(count - 1)
 }
 const mas = () =>{
  setCount(count + 1)
 }

 useEffect( () => {
  setCount(parseInt(inicial))
    }, 
  [inicial])

  return (
    <div className='card counter'>
      <div className='d-flex justify-content-center gap-3'>
        <button type="button" className="btn btn-outline-success" disabled={count ==1} onClick={menos}>-</button>
        <span>{count}</span>
        <button  type="button" className="btn btn-outline-success" disabled={count >= stock} onClick={mas}>+</button>
      </div>
      <div>
        <button type="button" className="btn btn-outline-info" disabled={stock<=0} onClick={()=>onAdd(count)} >Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount