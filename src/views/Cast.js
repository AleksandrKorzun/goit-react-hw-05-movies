

import { useState, useEffect } from "react";
import { getMoviesCredits } from "../services/MoviesApi";

const Cast = ({location, match}) => {
    const [credit, setCredit] = useState([])
    useEffect(() => {
        getCredits()
        
    }, [])

    const getCredits = async () => {
        const data = await getMoviesCredits(match.params.id)
        setCredit(data.cast)
        console.log(location)
    }
    return (
        <>
            
            <ul>
                {credit.map(({profile_path, name}) => (
                    <li key={name}>
                        {profile_path && <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}/>}
                        <h3>{name}</h3>
                    </li>
                ))}
            </ul>
            
        </>
    );
}

export default Cast;