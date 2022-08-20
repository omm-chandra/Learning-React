import React from "react";
import { useState } from "react";

const Input = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });


    const inputEvent = (event) => {

        const { name , value } = event.target ;

        setFullName((preValue) => {
            return{
                ...preValue,
                [name]: value,
            }
            // if (name === 'fname') {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // } else if (name === 'lname') {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // } else if (name === 'email') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,
            //     };
            // } else if (name == "phone") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     };
            // }
        } );
    }

    const onSubmits = (event) => {
        event.preventDefault();
    }

    return (
        <>

            <div>
                <from onSubmit={onSubmits} >
                    <h1>hello {fullName.fname} {fullName.lname}</h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phone}</p>
                    <br />
                    <input type="text"
                        placeHolder="Enter Your First Name"
                        value={fullName.fname}
                        onChange={inputEvent}
                        Name="fname" />
                    <br />
                    <br />
                    <input type="text"
                        placeHolder="Enter Your Last Name"
                        value={fullName.lname}
                        onChange={inputEvent}
                        Name="lname" />
                    <br />
                    <br />
                    <input type="email"
                        placeHolder="Enter Your Email"
                        value={fullName.email}
                        onChange={inputEvent}
                        Name="email"
                        autoComplete="off" />
                    <br />
                    <br />
                    <input type="tel"
                        placeHolder="Phone Number "
                        value={fullName.phone}
                        onChange={inputEvent}
                        Name="phone" />
                    <br />
                    <br />
                    <button type="submit">submit</button>
                </from>
            </div>
        </>
    )
};

export default Input;