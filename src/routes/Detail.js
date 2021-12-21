import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setMovies(json.data.movie)
            setLoading(false);
        });
    }, []);
    // console.log(movies);
    return (
        <div>
            {loading ? 
            ( <h1>Loading...</h1> ) : 
            (<div>
                <MovieDetail 
                    title={movies.title}
                    largeCoverImg={movies.large_cover_image}
                    year={movies.year}
                    runtime={movies.runtime}
                    rating={movies.rating}
                    like_count={movies.like_count}
                    download_count={movies.download_count}
                /> 
            </div>
            )}
        </div>
    )
}
export default Detail;