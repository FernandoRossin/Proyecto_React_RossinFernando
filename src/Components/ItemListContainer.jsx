import React from "react";
import arrayProductos from "./json/productos.json";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    const [items,setItems] = useState([]); 
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 500);
        });
        promesa.then((data) => {
            setItems(data);
        });
    });

    return(
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;