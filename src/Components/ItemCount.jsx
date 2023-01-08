import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
    const [counter,setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [venta,setVenta] = useState(false);

    const sumarProducto = () => {
        if (counter < itemStock){
        setCounter(counter + 1);
        }
    }
    
    const restarProducto = () => {
        if (counter > 1){ 
        setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) => {
        if (counter <= itemStock){
        setCounter(1);
        setItemStock(itemStock - quantity);
        setVenta(true);
        onAdd(quantity);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    },[stock])



    return(
        <div>
            <div className="row mb-3">
                <div className="col-md-6 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarProducto}> - </button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumarProducto}> + </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center">
                    {venta ? <Link to={"/cart"} className="btn btn-outline-primary">Finalizar compra</Link> : <button type="button" className="btn btn-outline-primary" onClick={() => {addToCart(counter)}}>Agregar al carrito</button>}     
                </div>
            </div>
        </div>
    )
}

export default ItemCount;