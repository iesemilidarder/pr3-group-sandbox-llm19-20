import React from 'react';
import {useFetch} from "./hooks";

/**
 * Mas info en https://reactjs.org/docs/hooks-effect.html
 * @returns {*}
 * @constructor
 */
function ProjectMenuAlternative() {
    const [items, loading] = useFetch("data/cardExample.json");
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

export default ProjectMenuAlternative;