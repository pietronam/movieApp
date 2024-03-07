import { getTrending, getTrendingMovies, getTrendingPeople, getTrendingSeries } from "./api/trendingGetters.js";
import { getSearchPeople } from "./api/searchGetters.js";
import { printMedia } from "./api/printMedia.js";

//Import del Package delle variabili d'ambiente
import dotenv from "dotenv";
dotenv.config();

let person_name = "Clooney";
/**Da aggiungere:
 * id
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 */

//prendere questi punti, ciclarli e stamparli con c
const trendingData = getTrending().then((data) => {
    data.results.forEach((element) => {
        printMedia(element);
    })
});
/**const trendingMoviesData = getTrendingMovies().then((data) => {
    console.log(data)
});
const trendingPeopleData = getTrendingPeople().then((data) => {
    console.log(data)
});
const trendingSeriesData = getTrendingSeries().then((data) => {
    console.log(data)
});
const searchPeople = getSearchPeople(person_name).then((data) => {
    console.log(data)
});
*/