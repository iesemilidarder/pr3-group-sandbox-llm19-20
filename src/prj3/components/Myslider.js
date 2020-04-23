import React,{useState} from "react";
import "../Myslider.scss";
import ImgComp from "./ImgComp";
import i1 from "../../../assets/prj3/img/f1.jpg";
import i2 from "../../../assets/prj3/img/moto.jpg";
import i3 from "../../../assets/prj3/img/project.jpg";
import i4 from "../../../assets/prj3/img/planet.jpg";
import i5 from "../../../assets/prj3/img/black.jpg";

function Myslider() {
    const [x,setX] = useState(0);
    let sliderArr = [
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
        <ImgComp src={i5} />,
    ];
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
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"/>
            </button>
            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"/>
            </button>
        </div>
    )
}

export default Myslider;