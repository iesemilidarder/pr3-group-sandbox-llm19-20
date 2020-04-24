import React from "react";
import StudentListLink from "./StudentListLink";
import StudentProjectsMenu from "./StudentProjectsMenu";
import FetchingCards from "./FetchingCards";

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate doloremque eius enim
                error est
                expedita explicabo harum in iure, iusto, labore magni maiores quaerat, reiciendis repudiandae
                similique
                tempora tenetur.</p>
        </aside>
    </main>);
};
export default ProjectBody;