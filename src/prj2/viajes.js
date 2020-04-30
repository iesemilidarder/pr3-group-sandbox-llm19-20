import React from "react";
import ReactDOM from "react-dom";
import Myheader from "./components/Myheader";
import Mymain from "./components/Mymain";
import Myfooter from "./components/Myfooter";
// import "./viajes.css";

function MyApp() {
    return <div>
        <Myheader/>
        <Mymain/>
        <Myfooter/>
    </div>
}

const wrapper = document.getElementById("page");
wrapper ? ReactDOM.render(<MyApp/>, wrapper) : false;

// import React, { useState, useEffect } from 'react';
// import {useFetch} from "../components/hooks";
//import aixos from 'aixos';

/*
function App() {
    const [data, setData] useState({ hits: [] });

    useEffect(async () => {
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );

        setData(result.data);
    }, []);

    return (
        <ul>
            {data.hits.map(item => (
                <li key={{item.objectID}}>
                    <a href={{item.url}>{item.tiltle}</a>
                </li>
            ))}
        </ul>
    );
}

export default App;*/

/*function ProjectMenuAlternative() {
    const [items, loading] = useFetch("assets/data/studentProjects.json");
    return (
        <div className="container">
            <div className="row">
                {loading ? ("Loading...") : (items.map(item => (
                    <div className="card col-4" key={`card-${item.id}`}>
                        <img className="card-img-top" src={item.profile} alt={`Card ${item.profile}`}/>
                        <div className="card-body">
                            <p className="card-text">{item.name}</p>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    );
}

export default ProjectMenuAlternative;*/