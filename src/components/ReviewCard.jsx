export default function ReviewCard({ review }) {
    return (
        <div key={review.id} className="col-12">
            <div className="card text-bg-dark border-secondary">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h5 className="card-title mb-1">@{review.name}</h5>
                            <small className="text-white">{review.text}</small>
                        </div>
                        <span className="badge bg-warning text-dark">
                            ⭐ {review.vote}/5
                        </span>
                    </div>
                    <p className="card-text mt-3"></p>
                    <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-sm btn-outline-secondary">
                            👍 Utile
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                            Rispondi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}