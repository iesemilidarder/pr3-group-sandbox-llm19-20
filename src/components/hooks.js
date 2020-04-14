// hooks.js
import {useState, useEffect} from "react";

/**
 *  What does useEffect do?
    By using this Hook, you tell React that your component needs to do something after render.
    React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

    src: https://reactjs.org/docs/hooks-intro.html
    src: https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
    src: https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

 *
 * @param url
 * @returns {*[]}
 */
function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        try {
            fetchUrl();
        } catch (e) {
            console.log("MEEEEEEEEEK", e);
        }
    }, []);
    return [data, loading];
}

export {useFetch};