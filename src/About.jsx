import React from "react";
import img from "./About_img.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name="Welcome to our About Page"
                strong="Omm Chandra Behera"
                para="Any Problem to click Contact Now "
                btn="Contact Now"
                visit="/ContactUs"
                img={img} />
        </>
    );
}

export default About;