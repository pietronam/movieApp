export const printMedia = (media) => {
switch (media.media_type) {
    case "movie":
        console.log(
            `ID:${media.id},\n` +
            `Poster Path:${media.poster_path},\n` +
            `Title:${media.title},\n` +
            `Vote Average:${media.vote_average},\n` +
            `Media Type:${media.media_type},\n` +
            `Release Date:${media.release_date}\n`)
    break;
    case "tv":
        console.log(
            `ID:${media.id},\n` +
            `Poster Path:${media.poster_path},\n` +
            `Title:${media.name},\n` +
            `Vote Average:${media.vote_average},\n` +
            `Media Type:${media.media_type},\n` +
            `Release Date:${media.first_air_date}\n`)
    break;
    case "person":
        console.log(
            `ID:${media.id},\n` +
            `Poster Path:${media.profile_path},\n` +
            `Title:${media.name},\n` +
            `Media Type:${media.media_type},\n`
            )
    break;
}}