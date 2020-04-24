import React from "react";
import Clock from "./Clock";
import ActivationClock from "./ActivationClock";

const ProjectFooter = () => {
    return (<footer className="footer">
        <span> Learning in quarantine rules </span>
        <span>- <Clock/></span>
        <span>- Has estado viendo esta página <ActivationClock/></span>
    </footer>);
};
export default ProjectFooter;