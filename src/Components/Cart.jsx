import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext);
    
    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="my-5"> "No hay productos en el carrito"</div>
                        <Link to={"/"} className="btn btn-secondary">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                     <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col" className="text-center"><Link onClick={clear} className="btn btn-secondary">Vaciar carrito</Link></th>  
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key = {item.id}>
                                    <td className="align-middle"><img src={item.img} alt={item.nombre} width={80}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.precio * item.quantity}</td>
                                    <td className="align-middle text-center"><Link onClick={() => {removeItem(item.id)}}><img src="/images/trash.svg" alt="Eliminar" width={32}></img></Link></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}></td>
                                <td>Total a pagar</td>
                                <td>${sumTotal()}</td>
                                <td className="text-center"><button className="btn btn-secondary">Comprar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;