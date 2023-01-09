import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading"; 


const ItemDetailContainer = () => {
    
    const [item,setItem] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db,'Productos', id);
        getDoc(item).then((snapShot) => {
            if ( snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            }else{
                
            }
        })
    },[id]);
    
    return(
        <div className="container my-5">
           {loading ? <Loading /> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;