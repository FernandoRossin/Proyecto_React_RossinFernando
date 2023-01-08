import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cartwidget = () => {
    const {cartTotal} = useContext(CartContext);

    return(
        <div>
            <Link to={"/cart"} type="button" className="btn btn-light position-relative">
                <img src="/images/cart4.svg" alt="Cart" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link>
      </div>
    )
}

export default Cartwidget;