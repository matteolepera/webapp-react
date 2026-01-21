import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.
            get(`http://localhost:4416/api/movies/${id}`).then((resp) => {
                setMovie(resp.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])


    return (
        <div className="bg-dark text-white min-vh-100">
            <div
                className="position-relative"
                style={{
                    height: '60vh',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(33,37,41,1)), url(http://localhost:4416/img/${movie.image})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="container h-100 d-flex align-items-end pb-4">
                    <div className="row w-100">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <span className="badge bg-dark border border-secondary">{movie.release_year}</span>
                                <span className="badge bg-dark border border-secondary">{movie.genre}</span>
                            </div>
                            <p className=" mb-3">{movie.abstract}</p>
                            <Link to={"/movies"} className="btn btn-light btn-lg me-2">🔙 Torna indietro</Link>
                            <button className="btn btn-light btn-lg me-2">
                                ▶️ Riproduci
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-4">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3>Recensioni</h3>
                            <button className="btn btn-dark">Scrivi una recensione</button>
                        </div>

                        <div className="row g-3">
                            {movie.reviews && movie.reviews.length > 0 ? (
                                movie.reviews.map((review) => (
                                    <ReviewCard key={review.id} review={review} />
                                )))
                                : (
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h3>Nessuna Recensione disponibile</h3>
                                        <button className="btn btn-dark">Scrivi una recensione</button>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}