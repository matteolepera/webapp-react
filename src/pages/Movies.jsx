import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4416/api/movies")
            .then((resp) => { setMovies(resp.data.movies) })
            .catch((err) => { console.log(err) })
    }
        , [])

    return (
        <>
            <div className="container p-4">
                <h1 className="text-white">Film disponibili:</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col">
                            <MovieCard movie={movie} />
                        </div>
                    ))
                    }
                </div>

            </div>
        </>
    )
}