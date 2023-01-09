import { addDoc, getFirestore, collection, updateDoc, doc } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext);
    const[nombre, setNombre] = useState("");
    const[telefono, setTelefono] = useState("");
    const[email, setEmail] = useState("");
    const[orderId, setOrderId] = useState("");

    const confirmarCompra = (e) =>{
        e.preventDefault();
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({id:item.id, title:item.nombre, quantity:item.quantity, price:item.precio, price_total: item.quantity * item.precio})),
            total:sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const generateOrder = doc(db,"orders", snapShot.id);
            updateDoc(generateOrder,{total:order.total + 500}) // Le sumo el envío
            clear();
        });   
    }


    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-6">
                <form>
                    <div className="mb-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control"  aria-describedby="emailHelp" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" onInput={(e) => {setTelefono(e.target.value)}} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" onInput={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <button type="submit" className="btn btn-secondary my-4" onClick={confirmarCompra}>Confirmar compra</button>
                </form>
        
                </div>  
                <div className="col-md-6">
                     <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key = {item.id}>
                                    <td className="align-middle"><img src={item.img} alt={item.nombre} width={80}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.precio * item.quantity}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}></td>
                                <td>Total a pagar</td>
                                <td>${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;