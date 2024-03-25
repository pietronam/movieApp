/**Funzione che riempie i parametri:
 * poster_path
 * title/name
 * media_type
 */


export const createCards = (mediaArray, desiredDiv) => {
    let cardContainer = document.getElementById(desiredDiv);

    mediaArray.forEach(element => {
        const card = document.createElement("div");
            card.classList.add("card");
        const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container")
        const image = document.createElement("img");
            
        const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
            const title = document.createElement("h4");
            title.classList.add("card-title")
            const description = document.createElement("p");
            description.classList.add("card-description")
        
        switch(element.media_type) {
            case "movie":
                title.innerText = (element.title);
                image.classList.add("movie-backdrop")
                image.src = `http://image.tmdb.org/t/p/w300/${element.backdrop_path}`
                image.alt = "movie-backdrop"
                description.innerText = element.overview
                break;
            case "tv":
                title.innerText = (element.name);
                image.classList.add("series-backdrop")
                image.src = `http://image.tmdb.org/t/p/w300/${element.backdrop_path}`
                image.alt = "series-backdrop"
                description.innerText = element.overview
                break;
            case "person":
                title.innerText = (element.name);
                image.classList.add("actor-profile")
                image.src = `http://image.tmdb.org/t/p/w300/${element.profile_path}`
                image.alt = "actor-profile"
                break;
            };

        imageContainer.appendChild(image);
        card.appendChild(imageContainer);
        textContainer.appendChild(title);
        imageContainer.appendChild(description);
        card.appendChild(textContainer);

        cardContainer.appendChild(card);
    })
};