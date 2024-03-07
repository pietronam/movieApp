import { OPTIONS, BASE_URL } from "./config.js";

/**
 * @param person_name
 * @returns media di una persona
 */

export const getSearchPeople = async (person_name) => {
    const response = await fetch(BASE_URL + "search/person" + `?query=${person_name}`, OPTIONS);
    const data = await response.json();

    return data;
};