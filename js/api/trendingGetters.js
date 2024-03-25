import { OPTIONS, BASE_URL } from "./config.js";

/**
 * @returns media di tendenza
 */

export const getTrending = async (trendingMediaUrl) => {
    const response = await fetch(BASE_URL + `${trendingMediaUrl}`, OPTIONS);
    const data = await response.json();

    return data;
};
