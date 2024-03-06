const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2RkZmNhMjlkNzNhNmEzYTRiYjRkNWYwYzc3MGZiZiIsInN1YiI6IjY1ZTg2YzdlZWE0MjYzMDE3YjIyOGRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbRmoUz6V4AsxTymqbiS-uORy-HBk8uRXoHXZDA3v3o",
    },
};

/**
 * @param baseUrl
 * @returns media di tendenza
 */

export const getTrending = async (baseUrl) => {
    const response = await fetch(baseUrl + "all/day", options);
    const data = await response.json();

    return data;
};

/**getTrendingMovies
 * @param baseUrl
 * @returns film di tendenza
 */

export const getTrendingMovies = async (baseUrl) => {
    const response = await fetch(baseUrl + "movie/day", options);
    const data = await response.json();

    return data;
}