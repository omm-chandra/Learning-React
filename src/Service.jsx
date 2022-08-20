import React from "react";
import Card from "./ServiceCard";
import SData from "./ServiceData";

const Service = () => {
    return (
        <>
            <div className="container-fluied mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                SData.map((val,index)=>{
                                   return<> <Card imgsrc={val.imgsrc} tittle={val.tittle} key={index}/></>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;