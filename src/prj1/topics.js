const getRecipes = async () => {
    let data = await fetch("menu.json");
    let jsonData = await data.json();
    let titles = [];
    jsonData.map(elem=>{
        titles.push(elem.title);
    });
    console.log(titles);
    return titles;
};
