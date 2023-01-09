import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () =>{
    const [items,setItems] = useState([]); 
    const {id} = useParams();
    const [loading,setLoading]= useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db,"Productos");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
            setLoading(false);
        });
    },[id]);
    
    return(
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;