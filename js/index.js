import { getTrending, getTrendingMovies, getTrendingPeople, getTrendingSeries  } from "./api/trendingGetters.js";
import { getSearchPeople } from "./api/searchGetters.js";
import {BASE_URL} from "./api/config.js";

let person_name = "Clooney";

getTrending();
getTrendingMovies();
getTrendingPeople();
getTrendingSeries();
getSearchPeople(person_name);

console.log("Hello world!");
