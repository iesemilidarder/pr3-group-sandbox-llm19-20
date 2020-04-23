import React from "react";

function ImgComp({ src }) {
    return (
        <div>
            <img src={src} alt="slide-img" style={imgStyles}></img>;
        </div>
    )
}

export default ImgComp;