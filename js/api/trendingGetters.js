const url = 'https://api.themoviedb.org/3/trending/all/day';

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2RkZmNhMjlkNzNhNmEzYTRiYjRkNWYwYzc3MGZiZiIsInN1YiI6IjY1ZTg2YzdlZWE0MjYzMDE3YjIyOGRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbRmoUz6V4AsxTymqbiS-uORy-HBk8uRXoHXZDA3v3o",
    },
};

export const getTrending = async () => {
    const response = await fetch(url,options);
    const data = await response.json();
    
    return data;
};

getTrending();