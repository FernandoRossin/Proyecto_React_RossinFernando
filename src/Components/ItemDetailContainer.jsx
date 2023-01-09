import React from "react";
import { useEffect, useState } from "react";
// import arrayProductos from "./json/productos.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore"; 


const ItemDetailContainer = () => {
    
    const [item,setItem] = useState([]);
    const {id} = useParams(); 

    // useEffect(() => {
    //     const promesa = new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(arrayProductos.find(item => item.id === parseInt(id)));
    //         }, 500);
    //     });
    //     promesa.then((data) => {
    //         setItem(data);
    //     });
    // },[id]);

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db,'Productos', id);
        getDoc(item).then((snapShot) => {
            if ( snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()});
            }else{
                
            }
        })
    },[id]);
    
    return(
        <div className="container my-5">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;