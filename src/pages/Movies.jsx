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
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col">
                            <div className="card h-100">
                                <img src={`http://localhost:4416/img/${movie.image}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.abstract}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>
        </>
    )
}