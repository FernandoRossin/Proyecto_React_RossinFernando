import React from "react";

const Cartwidget = () => {
    return(
        <div>
            <button type="button" className="btn btn-light position-relative">
                <img src="/images/cart4.svg" alt="Cart" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
            </button>
      </div>
    )
}


export default Cartwidget;