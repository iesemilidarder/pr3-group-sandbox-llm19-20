async function getUserAsync(name) {
    try {
        let response = await fetch(`https://api.github.com/users/${name}`);
        return await response.json();
    } catch (err) {
        console.error(err);
    }

}


