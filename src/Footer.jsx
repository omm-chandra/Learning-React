import React from "react";

const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <>
        <div className="Footer_div">
            <p className="Footer_Name">Copyright © {year}</p>
        </div>
        </>
    )
}

export default Footer;