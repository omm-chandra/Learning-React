import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="Home_section">
                <div className="container-fluied ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="Main-div">
                                <div className="Home_land">
                                    <div className="latter_center">
                                        <h1>{props.name}</h1>
                                        <h2><strong>{props.strong}</strong></h2>
                                        <p>{props.para}</p>
                                        <NavLink to={props.visit} className="btn btn-outline-primary button">{props.btn}</NavLink>
                                    </div>
                                    <div className="img_center">
                                        <img src={props.img} alt="img" className="Home_img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;