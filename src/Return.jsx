import React from "react";
import { useState } from "react";

const MyQuestion = ({question , Answer})=>{

    const [Show,setShow] = useState(false)

    return(
        <>
            <div>
            <h2>{question}<button onClick={()=>setShow(!Show)}>{Show? "-" : "+"}</button></h2>
            </div>
            {Show && <p>{Answer}</p>}
        </>
    )
}

export default MyQuestion; 