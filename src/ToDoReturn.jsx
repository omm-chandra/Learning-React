import React from "react";

const Return = (props)=>{

    return(
        <>
        <button className="dltbtn" onClick={()=>{
            props.onSelect(props.id)
        }}> X </button>
        <li>{props.text}</li>
        </>
    )
}

export default Return;