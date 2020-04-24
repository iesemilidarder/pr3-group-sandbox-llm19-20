import React from "react";
import StudentListLink from "./StudentListLink";
import StudentProjectsMenu from "./StudentProjectsMenu";
import FetchingCards from "./FetchingCards";
import MyFirstComponentProps from "./MyFirstComponentProps";

const ProjectBody = () => {
    return (<main className="row">
        <article className="col-8">
            <div id="menu" className="row">
                <div className="col-6">
                    <h2>Student List</h2>
                    <StudentListLink/>
                </div>
                <div className="col-6">
                    <h2>Projects</h2>
                    <StudentProjectsMenu/>
                    <h2>The gang</h2>
                    <FetchingCards/>
                </div>
            </div>
        </article>
        <aside className="col-4">
            <MyFirstComponentProps name={"Don pimpon"} onClick={()=>{alert(1)}}/>
        </aside>
    </main>);
};
export default ProjectBody;