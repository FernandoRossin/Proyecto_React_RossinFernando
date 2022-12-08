import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.img} className="img-fluid" alt={item.nombre} />
            </div>
            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <h5>Precio: ${item.precio}</h5>
                <h5>{item.detalle}</h5>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;