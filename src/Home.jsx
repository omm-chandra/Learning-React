import React from "react";
import img from "./Home_img.jpg";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common 
            name="Growing your business with" 
            strong="Omm Chandra Behera"
            para="We are the team of talnted devloper making websites" 
            btn="Get Started"
            visit="/Service"
            img={img}/>
        </>
    );
}

export default Home;