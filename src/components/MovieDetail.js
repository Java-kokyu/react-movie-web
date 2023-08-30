import PropTypes from "prop-types";
function MovieDetail({ image, title, rating, runtime, year, description, loading }) {
    return (
        <div hidden={loading}>
            <img src={image}></img>
            <h1>{title}</h1>
            <p>year: {year} rating: {rating} runtime: {runtime}</p>
            <p>{description}</p>
        </div>
    );
}

export default MovieDetail;