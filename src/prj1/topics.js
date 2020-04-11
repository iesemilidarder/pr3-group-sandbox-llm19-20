const getRecipes = async () => {
    let data = await fetch("menu.json");
    let jsonData = await data.json();
    for (let item of jsonData) {
        console.log(item.title)
    }
    return titles;
};
