import React from "react";

const ProyectsListLink = () => {
    const proyectsList = [
        {id:15,link: "/topics.html",title:"Topics Food"},

    ];
    return <ul>
        {proyectsList.map((item) => {
            return <li key={"stdlink"+item.id}><a href={item.link}>{item.title}</a></li>
        })}
    </ul>
};

export default ProyectsListLink;