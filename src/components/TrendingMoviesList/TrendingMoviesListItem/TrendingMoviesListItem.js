
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

const TrendingMoviesListItem = ({ title, id, name}) => {
    const history = useHistory();
    return (
        <>
        
        <li>
            <Link to={{pathname: `/movies/${id}`, state:{from: history.location.pathname + history.location.search}}} >
                {title || name}
            </Link>
        </li>
        </>
    );
}

export default TrendingMoviesListItem;