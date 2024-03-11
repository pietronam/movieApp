//Import del Package delle variabili d'ambiente
//import dotenv from "dotenv";
//dotenv.config();

export const BASE_URL = "https://api.themoviedb.org/3/";
export const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
//        Authorization:
//        `Bearer ${process.env.API_KEY}`
        Authorization:
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2RkZmNhMjlkNzNhNmEzYTRiYjRkNWYwYzc3MGZiZiIsInN1YiI6IjY1ZTg2YzdlZWE0MjYzMDE3YjIyOGRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbRmoUz6V4AsxTymqbiS-uORy-HBk8uRXoHXZDA3v3o`
    },
};