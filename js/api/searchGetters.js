import { OPTIONS, BASE_URL, SEARCH_MOVIE_URL } from "./config.js";

/**
 * @param person_name
 * @returns media di una persona
 */

export const getSearchPeople = async (person_name) => {
    const response = await fetch(BASE_URL + "search/person" + `?query=${person_name}`, OPTIONS);
    const data = await response.json();

    return data;
};

export const getSearchMovies = async (query) => {
    const response = await fetch(SEARCH_MOVIE_URL +  `${ query }`, OPTIONS);
    const data = response.json();

    return data;
}

export const handleMovieSearch = async () => {
    const queryInput = document.getElementById("query-input");
    const queryInputValue = queryInput.value;

    const result = await getSearchMovies(queryInputValue);
    
    return result;
}