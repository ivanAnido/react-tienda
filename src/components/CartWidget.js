import { useCartContext } from "../context/CartContext"


export const CartWidget =() =>{
const { totalProducts } = useCartContext()

    return (
        <>
            <i className="bi bi-basket2-fill  m-2"></i>
            <span>{ totalProducts() || ""}</span>
        </>
    )
}