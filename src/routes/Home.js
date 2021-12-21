import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

function Home() {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        .then(response => response.json())
        .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
        });
    }, []);
    // console.log(movies);
    return (
        <div>
        {loading ? (
            <h1>Loading...</h1>
            ) : (
            <div>
                <h1>MOVIE INFORMATION</h1>
                <hr/>
                {movies.map((movie) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image} 
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
                ))}
            </div>
            )
        }
        </div>
    );
}

export default Home;