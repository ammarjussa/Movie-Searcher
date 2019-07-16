export const fetchSearch = async(text) => {
    const apikey = '3b3868f1';
    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${text}`);
        const results = response.json();
        return results;
    }
    catch(err) {
        console.log(err)
    }
}

export const fetchFullMovie = async(title) => {
    const apikey = '3b3868f1';
    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${title}`);
        const results = response.json();
        return results;
    }
    catch(err) {
        console.log(err)
    }
}