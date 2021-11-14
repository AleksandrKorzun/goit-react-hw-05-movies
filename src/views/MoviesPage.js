import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm/SearchForm';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';
import { getSearchMovies } from '../services/MoviesApi';



const MoviesPage = ({history, match}) => {
    useEffect(async () => {
        const search = history.location.search.split("=")[1]
        if (search) {
            const data = await getSearchMovies(search)
            setMovies(data)
            console.log(data)
        }
    }, [])
    
    const [movies, setMovies] = useState([])
    
    const getSearchMovie = (movies) => {
        
        setMovies(movies)
        // console.log(match.path + `?query=dune`)
    }
    return (
        <>
            <SearchForm 
                getSearchMovie={getSearchMovie}
                history={history}
                match={match}
            />
            {!!movies.length && <TrendingMoviesList movies={movies}/>}
            
        </>
    );
}

export default MoviesPage;