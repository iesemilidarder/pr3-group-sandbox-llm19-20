import React from "react";
import "./Myslider.scss";

function Myslider() {
        let sliderArr = [1,2,3,4,5,];

    return(
        <div className="Myslider">
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide">
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft">left</button>
            <button id="goRight">right</button>
        </div>
    )
};

export default Myslider;