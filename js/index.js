import { getTrending, getTrendingMovies, getTrendingPeople, getTrendingSeries  } from "./api/trendingGetters.js";
import {baseUrl} from "./api/config.js";

getTrending(baseUrl);
getTrendingMovies(baseUrl);
getTrendingPeople(baseUrl);
getTrendingSeries(baseUrl);

console.log("Hello world!");
