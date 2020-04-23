import React from "react";

function ImgComp({ src }) {
    let imgStyles={
        width:100+"%",
        height:"auto"
    };
    return (
        <div>
            <img src={src} alt="slide-img" style={imgStyles}/>;
        </div>
    )
}

export default ImgComp;