import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const backendBaseUrl = import.meta.env.
        VITE_BACKEND_URL;
    return (
        <div className="card text-bg-dark border-light h-100">
            <img
                src={`http://localhost:4416/img/${movie.image}`}
                className="card-img-top"
                alt={movie.title}
            />
            <div className="card-body py-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fs-6 mb-0">{movie.title}</h5>
                    <span className="badge bg-dark border border-secondary">⭐️ {movie.avg_vote.toFixed(1)}</span>
                </div>

                <div className="small mb-2">
                    <span className="badge bg-dark border border-secondary me-1">{movie.release_year}</span>
                    <span className="badge bg-dark border border-secondary">{movie.genre}</span>
                </div>

                <p className="card-text small mb-2">{movie.abstract}</p>

                <div className="small text-white">
                    <strong>Regia:</strong> {movie.director}
                </div>
                <Link to={`/movies/${movie.id}`} className="btn btn-sm btn-outline-light mt-2 w-100">
                    Maggiori info
                </Link>
            </div>
        </div>
    )
}