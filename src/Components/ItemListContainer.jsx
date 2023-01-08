import React from "react";
import arrayProductos from "./json/productos.json";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () =>{
    const [items,setItems] = useState([]); 
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
    //         }, 500);
    //     });
    //     promesa.then((data) => {
    //         setItems(data);
    //     });
    // });

    // Carga de productos a Firebase 
    // useEffect(() =>{
    //     const db = getFirestore();
    //     const itemsCollection = collection(db,'Productos');

    //     arrayProductos.forEach((item) => {
    //         addDoc(itemsCollection,{nombre:item.nombre, precio:item.precio, img:item.img, detalle:item.detalle, categoria:item.categoria,stock:item.stock});
    //     })
    // },[]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db,"Productos");
        const q = id ? query(itemsCollection,where('categoria','==',id)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => 
               ({id:doc.id, ...doc.data()})
            ))
        });
    },[id]);
    
    return(
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;