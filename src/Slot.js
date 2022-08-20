import React from "react";
import ReactDom from "react-dom";
import Stylee from '/slot.css';


const Slotm = (props) => {

    let { a, b, c } = props;

    if ((a === b) && (b === c)) {
        return (
            <>
                <div>
                    <h1>{a} {b} {c}</h1>
                    <h1>This is matching ☺️</h1>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <h1>{a} {b} {c}</h1>
                    <h1>This is not matching 😥</h1>
                </div>
            </>
        )
    }
}


ReactDOM.render(
    <>
        <div className="slot_div">

                    <Slotm a="☺️" b="☺️" c="☺️" />
                    <Slotm a="☺️" b="😥" c="☺️" />
                    <Slotm a="🍌" b="🍎" c="🍊" />
                    <Slotm a="❤️" b="🤍" c="🖤" />
                    
        </div>
    </>,
    document.getElementById("slot"))