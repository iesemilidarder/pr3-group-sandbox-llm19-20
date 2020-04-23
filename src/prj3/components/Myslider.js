import React,{useState} from "react";
import ImgComp from "./ImgComp";
//import "../Myslider.scss";
import i1 from "../pics/fortnite.jpg";

function Myslider() {
    let sliderArr = [<ImgComp src={i1}>, 2, 3, 4, 5,];
    const [x,setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return(
        <div className="Myslider">
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${X}%})`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>left</button>
            <button id="goRight" onClick={goRight}>right</button>
        </div>
    )
}

export default Myslider;