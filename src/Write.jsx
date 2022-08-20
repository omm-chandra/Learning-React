import React from "react";
import { useState } from "react";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const Write = (props) => {

    const [Expend,setExpend]=useState(false);

    const [Show, setShow] = useState({
        Tittle: "",
        Content: "",
    });

    const InputBox = (event) => {
        setShow((preValue) => {
            const { name, value } = event.target;
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const addEvenet = (event) => {
        props.passNote(Show);
        setShow({
            Tittle: "",
            Content: "",
        })
    }

    const Click = ()=>{
        setExpend(true)
    }

    const DoubleClick = ()=>{
        setExpend(false)
    }

    return (
        <>
            <div className="Write_div" onDoubleClick={DoubleClick}>
                <div className="Under_div">
               { Expend?<input type="text" placeholder="Tittle" autoComplete="off" value={Show.Tittle} name="Tittle" onChange={InputBox} className="Tittle_part" />:null}
                    <br />
                    <textarea type="text" rows="" column="" placeholder="Write a note" value={Show.Content} name="Content" onChange={InputBox} className="Content_part" onClick={Click}></textarea>
                    <br />
                    {Expend?<button onClick={addEvenet} className="Add_btn"><ArrowForwardRoundedIcon className="aero"/></button>:null}
                </div>
            </div>
        </>
    )
}

export default Write;
