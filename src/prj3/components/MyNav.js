import React from "react";

const MyNav = () => {
    return <main className="row">
        <article className="col-md-10">
            <h1>Hello world</h1>
            <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi cum deleniti ea harum illum
                laborum
                libero maxime minus molestias, nam nobis officia praesentium ratione sequi soluta, tenetur unde
                voluptatibus!
            </section>
        </article>
        <div className="col-md-10" id="cont"/>
        <aside className="col-md-2">
            <h1>Esto es un right aside</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur at commodi cum, dignissimos
                doloremque ea eius eveniet expedita illo inventore iste nam necessitatibus odio porro totam, ullam,
                voluptates voluptatibus.</p>
        </aside>
    </main>
};

export {MyNav};