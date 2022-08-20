import React from "react";
import { useState } from "react";
import { Question } from "./QuestionArr";
import MyQuestion from "./Return"

const App = ()=>{

    const [Data,setData] = useState(Question)
    return(
        <>
            {
                Data.map((curElem)=>{
                    const {id}=curElem;
                    return <MyQuestion key={id} {...curElem}/> ;
                })
            }
        </>
    )
}

export default App;