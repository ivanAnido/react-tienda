import { useCartContext } from "../../context/CartContext"

const ItemCart = ({product}) => {
const { removeProduct } = useCartContext()
    return (
        <table className="table table-success table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td><img src={product.image} alt={product.title}/></td>
                <td>{product.title}</td>
                <td>{product.cantidad}</td>
                <td>{product.price}</td>
                <td>Subtotal: ${product.cantidad * product.price}</td>
                <td><button onClick={ () => removeProduct(product.id) }>X</button></td>
                </tr>
            </tbody>
        </table>
  )
}

export default ItemCart