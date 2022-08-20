import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainWeb from "./MainWeb";
import "./Bao.css";


// import Clone from "./OmmKeep";
// import Incdec from "./Incdecapp";
// import App from "./InterviewQues";

// import TodoList from "./ToDo";
// import "./Keep.css";
// import Pokemon from "./Pokemon"
// import StateTracker from "./StateTrack";



// import Input from "./Input"
// import Now from "./Hookschlng";


// import Card from './card';
// import Sdata from "./Arr";

// import App from './App';
// import {Add,Sub,Multi,Div} from "./calculator"




// ReactDOM.render(<App/>,document.getElementById("root")) ;

// ReactDOM.render(<>
//                     <ol>
//                         <li>addition of two number is {Add(3,3)}</li>
//                         <li>substraction of two number is {Sub(10,5)}</li>
//                         <li>multiplication of two number is {Multi(5,5)}</li>
//                         <li>division of two number is {Div(10,3)}</li>
//                     </ol>
//                 </>,
// document.getElementById("root"))

// function ncard(val){
//     return(
//         <Card
//         key={val.id}
//         imgsrc={val.imgsrc}
//         sname={val.sname}
//         titlename={val.titlename}
//         link={val.link}
//     />
//     )
// }


// ReactDOM.render(
//     <>
//             {Sdata.map(ncard)}
//     </>,
//     document.getElementById("root"))

   



// slot machine

// const Slotm = (props)=>{

//     let {a,b,c} = props;

//     if((a===b) && (b===c)){
//         return (
//             <>
//             <div>
//             <h1>{a} {b} {c}</h1>
//             <h1>This is matching ☺️</h1>
//             </div>
//             </>
//         )
//     }else{
//         return (
//             <>
//             <div>
//             <h1>{a} {b} {c}</h1>
//             <h1>This is not matching 😥</h1>
//             </div>
//             </>
//         )
//     }
// }


// ReactDOM.render(
//                 <>
//                     <div>
//                         <Slotm a = "☺️" b = "☺️" c = "☺️"/>
//                         <Slotm a = "☺️" b = "😥" c = "☺️"/>
//                         <Slotm a = "🍌" b = "🍎" c = "🍊"/>
//                         <Slotm a = "❤️" b = "🤍" c = "🖤"/>
//                     </div>
//                 </>,
//                 document.getElementById("slot"))






// ReactDOM.render(<><Now/></>,document.getElementById("root"));  

// ReactDOM.render(<><Input/></>,document.getElementById("root"));

// ReactDOM.render(<><TodoList/></>,document.getElementById("root"));

// ReactDOM.render(<><App/></>,document.getElementById("root"));

// ReactDOM.render(<><StateTracker/></>,document.getElementById("root"));

//  ReactDOM.render(<><Pokemon/></>,document.getElementById("root"));

  
 ReactDOM.render(<><BrowserRouter><MainWeb/></BrowserRouter></>,document.getElementById("root"));






