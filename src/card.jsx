import React from "react";

function Card(props){
    return (
    <>
            <div className="maindiv" >
                <div className="secdiv">
                    <img src={props.imgsrc} alt="squid game" className="mainimg" />
                    <h3 className="seriesname">{props.sname}</h3>
                    <p className="series">{props.titlename}</p>
                    <a href={props.link} target="_blank" className="link">
                        <button className="btn">Watch Now</button>
                    </a>
                </div>
            </div>
    </>
    )
}

export default Card;