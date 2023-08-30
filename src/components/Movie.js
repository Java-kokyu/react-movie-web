import PropTypes from "prop-types";
import { Link } from "react-router-dom"
function Movie({ image, title, summary, genres, id }) {
    return (
        <div>
            <img src={image} alt={title}></img>
            <h2>
                <Link to={`/movies/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string)
}

export default Movie;