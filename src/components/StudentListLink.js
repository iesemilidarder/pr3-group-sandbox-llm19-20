import React from "react";

const StudentListLink = () => {
    const studentList = [
        {id:1,link: "/master.html",title:"Master file"},
        {id:2,link: "/pvillanueva.html",title:"Pablo"},
        {id:3,link: "/#",title:"Andrea"},//TODO Andrea
        {id:4,link: "/mexposito.html",title:"Miguel"},
        {id:5,link: "/fcastell.html",title:"Francesc Castell"},
        {id:6,link: "/jzarco.html",title:"Javi"},
        {id:7,link: "/dcastaneda.html",title:"Dani Castañeda"},
        {id:8,link: "/tamer.html",title:"Toni"},
        {id:9,link: "/jques.html",title:"Joan"},
        {id:10,link: "/dsalanova.html",title:"Dani Salanova"},
        {id:11,link: "/kilianfuentes.html",title:"Kilian"},
        {id:12,link: "/msegui.html",title:"Marta"},
        {id:13,link: "/mflores.html",title:"Matias"},
        {id:14,link: "/#",title:"Francesc Gonzalez"},//TODO F. Gonzalez
    ];
    return <ul>
        {studentList.map((item) => {
            return <li key={"stdlink"+item.id}><a href={item.link}>{item.title}</a></li>
        })}
    </ul>
};
export default StudentListLink;
