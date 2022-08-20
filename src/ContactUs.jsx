import React from "react";
import { useState } from "react";

const ContactUs = () => {

    const [Name, setName] = useState({
        Fname:"",
        Lname:"",
        Email:"",
        Problem:"",
    })

    const Input = (e) => {
        const { name , value } = e.target ;

        setName((preValue) => {
            return{
                ...preValue,
                [name]: value,
            }
        });
    
    }

    const submitForm = (e) => {
        // e.preventDefault();
        alert(`hello i am ${Name.Fname} ${Name.Lname} my E-mail ${Name.Email} My Problem is ${Name.Problem}`);
        }

    
    return (
        <>
            <div className="container-fluied ">
                <div className="row">
                    <div className=" mx-auto div">
                        <form onSubmit={submitForm} className="form">
                            <label className="Label">FastName</label>
                            <input type="text" onChange={Input} value={Name.Fname} placeholder="Enter your First Name" Name="Fname" className="input"/>
                            <label className="Label">LastName</label>
                            <input type="text" onChange={Input} value={Name.Lname} placeholder="Enter your Last Name" Name="Lname" className="input"/>
                            <label className="Label">E-mail</label>
                            <input type="email" onChange={Input} value={Name.Email} placeholder="Example@gmail.com" Name="Email" className="input"/>
                            <label className="Label">Enter Problem</label>
                            <textarea type="text" onChange={Input} value={Name.Problem} placeholder="Enter your Problem" Name="Problem" className="input"></textarea>
                            <button type="Submit" className="btn btn-outline-primary sub_btn" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;