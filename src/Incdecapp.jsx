import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';


const Incdec = ()=>{

        let num = 0 ;

        const [Number,setNumber] = useState(num);

        const Increment =()=>{
            console.log("increment")

            setNumber(Number+1)

        }

        const Decrement =()=>{
            console.log("decrement")

            if(Number>0){
                setNumber(Number-1)
            }else{
                setNumber(0)
                alert("0 Limit Reached")
            }

        }


    return(
        <>
            <div>
                <h1>{Number}</h1>
                <div>
                    <button onClick={Increment}><AddIcon/>incre</button>
                    <button onClick={Decrement}>Decre</button>
                </div>
            </div>
        </>
    )
}


export default Incdec;