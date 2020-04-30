import React from 'react';
import {useFetch} from "./hooks";

function UpdateCard() {
    const [items, loading] = useFetch("src/prj4/components/prj4CardUpdatesIndex.json");
    return (
        <div className="container">
            <div className="row">
                {loading ? ("Loading...") : (items.map(item => (
                    <div className="container-fluid">
                        <div className="card-deck text-success">
                            <div className="card bg-dark border border-success" key={`card-${item.id}`}>
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text text-light">{item.profile}</p>
                                </div>
                            </div>
                            <div className="card bg-dark border border-success" key={`card-${item.id}`}>
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text text-light">{item.profile}</p>
                                </div>
                            </div>
                            <div className="card bg-dark border border-success" key={`card-${item.id}`}>
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text text-light">{item.profile}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    );
}

export default UpdateCard;



