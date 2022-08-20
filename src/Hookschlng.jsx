import React from "react";

import { useState } from "react";


const Now = () => {

    let currentTime = new Date().toLocaleTimeString();

    const [Time , setTime] = useState(currentTime);

    const getTime = ()=>{
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime)

    }

    setInterval(getTime,1000)



    return (
        <>
            <h1>{Time}</h1>
            {/* <button onClick={getTime} >Get Time</button> */}
        </>
    );

}

export default Now;