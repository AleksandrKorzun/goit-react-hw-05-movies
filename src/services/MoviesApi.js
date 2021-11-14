import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/"
const KEY = "14e0c7cf26fd6e9a764618248c5c5e42"
const getMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}3/trending/all/week?api_key=${KEY}`)
        return response.data.results
    } catch (error) {
        throw new Error(error)
    }
}
const getMoviesById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}3/movie/${id}?api_key=${KEY}&language=en-US`)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}
const getMoviesCredits = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}
const getMoviesReviews = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}3/movie/${id}/reviews?api_key=${KEY}&language=en-US`)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

const getSearchMovies = async (movie) => {
    try {
        if (!movie) return
        const response = await axios.get(`${BASE_URL}3/search/movie?api_key=${KEY}&language=en-US&query=${movie}`)
        console.log(response.data.results)
        return response.data.results
        
    } catch (error) {
        throw new Error(error)
    }
}
export {getMovies, getMoviesById, getMoviesCredits, getMoviesReviews, getSearchMovies}