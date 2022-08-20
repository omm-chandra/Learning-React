import React from "react";

function App(){
    
const bg = {
    backgroundColor : "Black",
    width : "fit-content",
    borderRadius : "3rem",
    padding : "1rem 3rem",
    margin : "auto"
};

const head = {
    color : "red",
    textTrnasform : "Capitlaize"
};

let currentTime = new Date();
currentTime = currentTime.getHours();

let finalRes = ' ';

const style  = { };

if (currentTime>=1 && currentTime<12){
  finalRes = "Good Morning"; 
  style.color='yellow';
}else if(currentTime>=12 && currentTime<18){
  finalRes = "Good Afternoon";
  style.color='orange';
}else{
  finalRes = "Good Night";
  style.color='white';
}   

    return (
        <>
        <div style={bg}>
          <h2 style={head}>Hello Sir , <span style={style}>{finalRes}</span></h2>
        </div>
        </>
    );
}

export default App;