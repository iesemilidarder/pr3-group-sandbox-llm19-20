import React from "react";
import ReactDOM from "react-dom";

const DzapataApp = () => {
    return (<>
            <header className="row">
                mordor
            </header>
            <main className="row">
            </main>
            <footer className="row">
                yuhu
            </footer>
        </>
    );
};

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<DzapataApp/>, wrapper) : false;