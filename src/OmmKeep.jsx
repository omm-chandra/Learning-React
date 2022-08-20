import React from "react";
import Header from "./Header";
import Write from "./Write";
import Note from "./Note";
import Footer from "./Footer";
import { useState } from "react";

const Clone = ()=>{

    const [addItem,setAddItem]=useState([]);

    const addNote = (Show)=>{
        // alert("succcessful")

        setAddItem((preData)=>{
            return [...preData,Show];
        })

    }

    const Delete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return(
        <>
            <Header/>
            <Write passNote={addNote} />
            {
                addItem.map((curElem,index)=>{
                    return <Note key={index} id={index} Tittle={curElem.Tittle} Content={curElem.Content} deletItem={Delete}/>
                })
            }
            <Footer/>
        </>
    )
}


export default Clone;