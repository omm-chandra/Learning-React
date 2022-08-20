import React from "react";
import Return from "./ToDoReturn"
import { useState } from "react";

const TodoList = () => {

    const [name, setname] = useState();

    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        const value = event.target.value;

        setname(value)
    }

    const addBtn = () => {
        setItems((preValue) => {
            return [...preValue, name];
        })
        setname("")
    }

    const deleteItems = (id) => {
        // console.log("yup")
        setItems((preValue) => {
            return preValue.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div className="Main_div">
                <h2>To Do List</h2>
                <div className="inputbtn">
                <input type="text" name="text" onChange={inputEvent} value={name} placeholder="Enter" />
                <button className="addbtn" onClick={addBtn}>+</button>
                </div>
                <br />
                <ol>
                    {items.map((curelem, index) => {
                        return (
                            <Return key={index} id={index} onSelect={deleteItems} text={curelem} />
                        )
                    })}
                </ol>
            </div>
        </>
    )
}

export default TodoList;