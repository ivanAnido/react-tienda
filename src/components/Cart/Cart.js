import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
    
    const [dataForm, setDataForm] = useState({ 
        name:"",
        email:"",
        phone:"",
        address:""
     })
    const { cart, totalPrice, clearCart } = useCartContext()
     
    
    const order = {
        buyer: {
            name: dataForm.name,
            email: dataForm.email,
            phone: dataForm.phone,
            address: dataForm.address
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, cantidad: product.cantidad })),
        total: totalPrice()

    }

    const generarOrden = async (e) => {
        e.preventDefault()
        const db = getFirestore()
        const ordersCollection = collection(db, "ordenes")
        addDoc(ordersCollection, order)
        .then(({id})=> console.log(id) )

        const queryCollection = collection(db , "productos")

        const queryActualizarStock = await query (
            queryCollection,
            where(documentId(), "in", cart.map(it => it.id) )
        )

        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cart.find(product => product.id === res.id).cantidad
        })))

        batch.commit()
    }

     if (cart.length === 0) {
        return (
            <div className="container text-center">
                <h3>No hay elementos en el carrito</h3>
                <Link to= "/"><button type="button" className="btn btn-light">Hacer compras</button></Link>
            </div>
        )
     }
    
    const handleInputChange = (e) => {
        
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <h4 className="m-4"> total: $ {totalPrice()}</h4>
            
            <form onSubmit={generarOrden} className=" g-3 needs-validation m-4" novalidate>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip01" className="form-label">Nombre</label>
                    <input onChange={handleInputChange} type="text" name="name" value={dataForm.name} className="form-control" id="validationTooltip01"  required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltipUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input onChange={handleInputChange} type="email" name="email" value={dataForm.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    <div className="invalid-tooltip">
                        Escribir un email 
                    </div>
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <label for="validationTooltip03" className="form-label">direccion</label>
                    <input onChange={handleInputChange} type="text" name="address" value={dataForm.address} className="form-control" id="validationTooltip03" required/>
                    <div className="invalid-tooltip">
                    Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3 position-relative">
                    <label for="validationTooltip05" className="form-label">telefono</label>
                    <input onChange={handleInputChange} type="number" name="phone" value={dataForm.phone} className="form-control" id="validationTooltip05" required/>
                    <div className="invalid-tooltip">
                    Please provide a valid number.
                    </div>
                </div>
                <button className="btn btn-primary m-4" type="submit">Generar order</button>
                <button className="btn btn-light m-5" onClick={clearCart}>vaciar carrito</button>
            </form>
            
        </>
  )
}

export default Cart