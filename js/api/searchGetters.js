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
 * @returns media di una persona
 */

export const getSearchPeople = async (baseUrl, person_name) => {
    const response = await fetch(baseUrl + "search/person" + `?query=${person_name}`, options);
    const data = await response.json();

    return data;
};