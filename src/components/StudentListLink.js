import React from "react";

const StudentListLink = () => {
    const studentList = [
        {link: "/master.html",title:"Master file"},
        {link: "/pvillanueva.html",title:"Pablo"},
        {link: "/#",title:"Andrea"},//TODO Andrea
        {link: "/mexposito.html",title:"Miguel"},
        {link: "/fcastell.html",title:"Francesc Castell"},
        {link: "/jques.html",title:"Joan"},
        {link: "/jzarco.html",title:"Javi"},
        {link: "/dcastaneda.html",title:"Dani Castañeda"},
        {link: "/tamer.html",title:"Toni"},
        {link: "/dsalanova.html",title:"Dani Salanova"},
        {link: "/kilianfuentes.html",title:"Kilian"},
        {link: "/msegui.html",title:"Marta"},
        {link: "/mflores.html",title:"Matias"},
        {link: "/#",title:"Francesc Gonzalez"},//TODO F. Gonzalez
    ];
    return <ul>
        {studentList.map((item) => {
            return <li><a href={item.link}>{item.title}</a></li>
        })}
    </ul>
};
export default StudentListLink;
