import React from "react";
import { useParams, Link } from "react-router-dom";


const Thankyou = () => {
    const {id} = useParams();

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="my-3">Gracias por su compra!</h1>
                    <div className="alert alert-secondary my-5" role="alert">Se generó la orden = {id}</div>
                    <Link to={"/"} className="btn btn-secondary">Volver al inicio</Link>
                </div>
            </div>
        </div>
        )
}

export default Thankyou;