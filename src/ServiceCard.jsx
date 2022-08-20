import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto ">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top sev_img" alt={props.imgsrc} />
                    <div className="card-body">
                        <h4 className="card-title">{props.tittle}</h4>
                        <p className="card-text">Some quick example text to build on the .</p>
                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;