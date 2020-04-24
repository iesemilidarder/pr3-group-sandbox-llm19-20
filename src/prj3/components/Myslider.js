import React,{useState} from "react";
//import "../Myslider.scss";
import ImgComp from "./ImgComp";

function Myslider() {
    const [x,setX] = useState(0);
    let sliderArr = [
        <ImgComp src="/assets/prj3/img/f1.jpg" />,
        <ImgComp src="/assets/prj3/img/moto.jpg" />,
        <ImgComp src="/assets/prj3/img/project.jpg" />,
        <ImgComp src="/assets/prj3/img/planet.jpg" />,
        <ImgComp src="/assets/prj3/img/black.jpg" />,
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