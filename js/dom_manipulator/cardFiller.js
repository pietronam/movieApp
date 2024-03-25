/**Funzione che riempie i parametri:
 * poster_path
 * title/name
 * media_type
 */


export const createCards = (mediaArray, desiredDiv) => {
    let cardContainer = document.getElementById(desiredDiv);

    mediaArray.forEach(element => {
        const card = document.createElement("div");
        const imageContainer = document.createElement("div");
            const image = document.createElement("img");
        const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
            const title = document.createElement("h4");
            title.classList.add("card-title")
            const description = document.createElement("p");
            description.classList.add("card-description")
        
        switch(element.media_type) {
            case "movie":
                card.classList.add("card");
                imageContainer.classList.add("image-container")

                title.innerText = (element.title);
                image.classList.add("movie-backdrop")
                image.src = `http://image.tmdb.org/t/p/w300/${element.backdrop_path}`
                image.alt = "movie-backdrop"
                description.innerText = element.overview;
                break;
            case "tv":
                card.classList.add("card");
                imageContainer.classList.add("image-container")

                title.innerText = (element.name);
                image.classList.add("series-backdrop")
                image.src = `http://image.tmdb.org/t/p/w300/${element.backdrop_path}`
                image.alt = "series-backdrop"
                description.innerText = element.overview
                break;
            case "person":
                card.classList.add("person-card");
                imageContainer.classList.add("person-image-container")
                
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