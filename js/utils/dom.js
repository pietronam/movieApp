//funzione che al caricamento della pagina verifichi che il titolo sia corretto,  se no lo corregge
export const fixTitle = () => {
    const title = document.getElementById("header");
    const titleContent = title.innerHTML;

    if (titleContent === "movieApp")
        return;
    else {
        title.innerHTML = "movieApp";
    }
};
//una funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un film
export const addParagraph = () => {
    const title = document.getElementById("header");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Indiana Jones";

    title.appendChild(paragraph)
};