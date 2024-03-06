import { getTrending, getTrendingMovies, getTrendingPeople, getTrendingSeries  } from "./api/trendingGetters.js";
import { getSearchPeople } from "./api/searchGetters.js";
import {baseUrl} from "./api/config.js";

let person_name = "Clooney";

getTrending(baseUrl);
getTrendingMovies(baseUrl);
getTrendingPeople(baseUrl);
getTrendingSeries(baseUrl);
getSearchPeople(baseUrl, person_name);

console.log("Hello world!");
