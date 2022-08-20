import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {

    const [Num,setNum] = useState();
    const [Name,setName] = useState();
    const [Moves,setMoves] = useState();

    useEffect(()=>{
        const getData = async ()=>{
            const Res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`)
            setName(Res.data.name);
            setMoves(Res.data.moves.length);
        }
        getData();
    })

    const Change = (event)=>{
        setNum(event.target.value)
    }

    return (
        <>
            <h1>Chose Value <span style={{color:"red"}}>{Num}</span></h1>
            <h1>My Name is <span style={{color:"red"}}>{Name}</span></h1>
            <h1>I have  <span style={{color:"red"}}>{Moves}</span> Moves</h1>

            <select onChange={Change}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="25">25</option>
            </select>
        </>
    )
}

export default Pokemon;