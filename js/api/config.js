//Import del Package delle variabili d'ambiente
import dotenv from "dotenv";
dotenv.config();

export const BASE_URL = "https://api.themoviedb.org/3/";
export const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${process.env.API_KEY}`
    },
};