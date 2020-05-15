import React from "react";

const myMain = () => {
    return <main>
        <div class="container">
            <div class="row">
                <div class="col-12" id="root"></div>
            </div>
            <div class="row">
                <div class="col-10">
                    <input class="form-control border-success" type="search"
                           placeholder="Search by name of song or artist"
                           aria-label="Search"/>
                </div>
                <div class="col-2">
                    <button class="btn bg-success border border-dark" type="submit"
                            onclick="document.location='Results.html'">Search
                    </button>
                </div>
            </div>
        </div>
    </main>
};

export default myMain;