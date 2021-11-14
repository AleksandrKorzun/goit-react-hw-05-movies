import { useState, useEffect } from "react"

import { Route } from "react-router-dom"
import { getMoviesById } from "../services/MoviesApi"
import Cast from "./Cast"
import Reviews from "./Reviews"
import MovieDetails from "../components/MovieDetails/MovieDetails"

const MovieDetailsPage = ({location, history, match}) => {
    const [MovieDetail, setMovieDetail] = useState({})
    useEffect(() => {
        getMovieDetails()
    }, [match.params.id])
    const getMovieDetails = async () => {
        const data = await getMoviesById(match.params.id)
        setMovieDetail(data)
        
        
    }
    const onHandleGoBack = (e) => {
        console.log(location)
        history.push(location.state.from) 
    }
    const {title, poster_path, overview, genres} = MovieDetail
    return (
        <>
        <button type="submit" onClick={onHandleGoBack}>
            Go back
        </button>
        <MovieDetails
            title={title}
            poster={poster_path}
            overview={overview}
            genres={genres}
            history={history}
            match={match}
        />
        <Route
            exact
            path={match.path + '/cast'}
            component={Cast}
        />
        <Route
            exact
            path={match.path + '/reviews'}
            component={Reviews}
        />
        </>
    );
}

export default MovieDetailsPage;