

import React,{useState, useEffect} from 'react'

import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';
import { getMovies } from '../services/MoviesApi';


const Homepage = () => {
const [Movies, setMovies] = useState([])
useEffect(async () => {
    const data = await getMovies()
    setMovies(data)
}, [])
    return (
        <TrendingMoviesList movies={Movies}/>
    );
}


export default Homepage;
