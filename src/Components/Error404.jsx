import React from "react";

const Error404 = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-danger" role="alert">
                        <h1>La página que buscas no existe!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404;