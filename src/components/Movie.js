import PropTypes from "prop-types";
import { Link } from "react-router-dom"
function Movie({ image, title, summary, genres }) {
    return (
        <div>
            <img src={image} alt={title}></img>
            <h2>
                <Link to="/movies">{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string)
}

export default Movie;