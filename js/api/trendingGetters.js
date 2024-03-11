import { OPTIONS, BASE_URL } from "./config.js";

/**
 * @returns media di tendenza
 */

export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day", OPTIONS);
    const data = await response.json();

    return data;
};

/**getTrendingMovies
 * @returns film di tendenza
 */

export const getTrendingMovies = async () => {
    const response = await fetch(BASE_URL + "trending/movie/day", OPTIONS);
    const data = await response.json();
    
    return data;
}
getTrendingMovies();
/**getTrendingPeople
 * @returns persone di tendenza
 */

export const getTrendingPeople = async () => {
    const response = await fetch(BASE_URL + "trending/person/day", OPTIONS);
    const data = await response.json();

    return data;
}

/**getTrendingSeries
 * @returns series di tendenza
 */

export const getTrendingSeries = async () => {
    const response = await fetch(BASE_URL + "trending/tv/day", OPTIONS);
    const data = await response.json();

    return data;
}