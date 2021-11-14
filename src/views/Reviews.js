import { useState, useEffect } from "react";
import { getMoviesReviews } from "../services/MoviesApi";

const Reviews = ({match}) => {
    const [rew, setRew] = useState([])
    useEffect(() => {
        getCast()
    }, [])

    const getCast = async () => {
        const data = await getMoviesReviews(match.params.id)
        setRew(data.results)
        console.log(data)
    }
    return (
        <ul>
            {rew.map(item=>(
                <li key={item.id}>
                    <h3>{item.author}</h3>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default Reviews;