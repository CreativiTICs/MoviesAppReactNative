import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDbResponse } from "../interfaces/movieInterface";

interface MoviesState{
    nowPlaying: Movie[];
    popular: Movie[];
    upcoming: Movie[];
    topRated: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);    
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })
    
    const getMovies = async() => {
        const nowPlayingPromise =  movieDB.get<MovieDbResponse>('/now_playing');
        const popularPromise =  movieDB.get<MovieDbResponse>('/popular');
        const upcomingPromise =  movieDB.get<MovieDbResponse>('/upcoming');
        const topRatedPromise =  movieDB.get<MovieDbResponse>('/top_rated');

        const response = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            upcomingPromise, 
            topRatedPromise
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            upcoming: response[3].data.results,
            topRated: response[1].data.results,
            popular: response[2].data.results,
        });

        setIsLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    }, [])
    
    return {
        ...moviesState,
        isLoading
    }
}

