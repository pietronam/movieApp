/**createTrendingMoviesList()
 * 
 * La funzione prende in ingresso un array di movies, per ogni movie aggiunge al dom un nuovo nodo, che sarà un tag <li> contenente il titolo del movie.
 * @param array dei film
 * @returns
 */
export const createTrendingMoviesList = (movieArray) => {
    movieArray.forEach(movie => {
        const trendingMoviesList = document.getElementById("trending-movies-list");

        const movieTitle = document.createElement("li");
        movieTitle.innerText = (movie.title);

        trendingMoviesList.appendChild(movieTitle);
    });
}

/**createTrendingList()
 * 
 * La funzione prende in ingresso un array di media, per ogni movie aggiunge al dom un nuovo nodo, che sarà un tag <li> contenente il titolo del media.
 * @param data
 */

export const createTrendingList = (dataArray) => {
    dataArray.forEach(element => {
        const trendingList = document.getElementById("trending-list");
        const mediaTitle = document.createElement("li");

        switch (element.media_type) {
            case "movie":
                mediaTitle.innerText = (element.title);
                break;
            case "tv":
                mediaTitle.innerText = (element.name);
                break;
            case "person":
                mediaTitle.innerText = (element.name);
                break;
        }
        
        trendingList.appendChild(mediaTitle);
    });
}
