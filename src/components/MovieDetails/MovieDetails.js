import React from 'react'
import { Link} from "react-router-dom"
const MovieDetails = ({title, poster, overview, genres, history, match, location}) => {
    
    return (
        <>
            <div>
                {poster && <img src={`https://image.tmdb.org/t/p/w500/${poster}`}
                    alt={title} width="300px"/>}
            </div>
            <div>
                <h2>{title}</h2>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                    { genres && genres.map((item)=>(
                        <li key={item.name}><p>{item.name}</p></li>
                        ))}
                </ul>
                
            </div>

            <div>
                <Link to={{pathname: `${match.url}/cast`, state:{from: history.location.state.from }}}>
                    Cast
                </Link>
                <Link to={{pathname: `${match.url}/reviews`, state:{from: history.location.state.from }}}>
                    Reviews
                </Link>
                
            </div>
             <hr/>
            <div>
                
            </div>
        </>
    );
}

export default MovieDetails;