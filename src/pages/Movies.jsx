import axios from "axios"
import { useEffect, useState } from "react"

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
            <div className="container">
                <h1>Film disponibili:</h1>
                <ul className="list-group list-group-flush">
                    {movies.map((movie) => (
                        <li key={movie.id} className="list-group-item">{movie.title}</li>
                    ))
                    }
                </ul>

            </div>
        </>
    )
}