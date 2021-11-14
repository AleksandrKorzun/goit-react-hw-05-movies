import TrendingMoviesListItem from "./TrendingMoviesListItem/TrendingMoviesListItem";


const TrendingMoviesList = ({movies}) => {
    
    return (
        <ul>
            {movies.map(({title, id, name})=>(
                <TrendingMoviesListItem 
                    title={title} 
                    id={id}
                    name={name}
                    key={id}
                />
            ))}    
        </ul>
    );
}

export default TrendingMoviesList;