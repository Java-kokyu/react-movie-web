import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({})
    const {id} = useParams();

    async function getMovieDetail() {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovieDetail();
    }, [id]);
    return (
        <div>
            <h1>{loading ? "Loading..." : null}</h1>
            <MovieDetail
                image={movie.large_cover_image}
                title={movie.title}
                rating={movie.rating}
                runtime={movie.runtime}
                year={movie.year}
                description={movie.description_full}
                loading={loading}
            />
        </div>
    )
}

export default Detail;