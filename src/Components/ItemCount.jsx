import React from "react";
import { useState } from "react";

const ItemCount = ({stock}) => {
    
    const [counter,setCounter] = useState(1);

    const sumarProducto = () => {
        if (counter < stock){
        setCounter(counter +1);
        }
    }
    
    const restarProducto = () => {
        if (counter > 1){ 
        setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (stock > 0){
        console.log({counter});
        }
    }

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
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>     
                </div>
            </div>
        </div>
    )
}

export default ItemCount;