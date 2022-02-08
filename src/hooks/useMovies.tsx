import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);


    const getMovies = async () => {
        setIsLoading(true); //busco la respuesta, que aparezca el loading
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setPeliculasEnCine(resp.data.results );

        setIsLoading(false);//ya tengo la respuesta, chau loading
    }


    useEffect(() => {
        //now_playing
        getMovies();

    }, []);




    return {
        peliculasEnCine,
        isLoading,
    }
};