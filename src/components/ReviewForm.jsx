export default function ReviewForm() {
    return (
        <>
            {/* <form class="row g-3">
                <div class="col-6">
                    <label class="visually-hidden" for="name">Name</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input type="text" class="form-control" id="name" placeholder="Insert your name" />
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text">⭐️</span>
                        <input type="number" class="form-control" placeholder="Vote 1 ⭐️ to 5 ⭐️" />
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-group-text">Comment</span>
                    <textarea class="form-control" aria-label="Comment"></textarea>
                </div>
                <button className="btn btn-light">
                    Send review
                </button>
            </form> */}
            <div className="card text bg-dark border-secondary">
                <div className="card-body">
                    <h4 className="mb-4 text-white">Lascia la tua recensione</h4>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label text-white">Nome</label>
                            <div className="input-group">
                                <span className="input-group-text border-secondary">@</span>
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="name"
                                    placeholder="Il tuo nome"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="vote" className="form-label text-white">Voto</label>
                            <div className="input-group">
                                <span className="input-group-text border-secondary">⭐</span>
                                <input
                                    type="number"
                                    className="form-control border-secondary"
                                    id="vote"
                                    placeholder="Da 1 a 5 stelle"
                                    min="1"
                                    max="5"
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="comment" className="form-label text-white">Commento</label>
                            <div className="input-group">
                                <span className="input-group-text border-secondary">💬</span>
                                <textarea
                                    className="form-control border-secondary"
                                    id="comment"
                                    rows="4"
                                    placeholder="Scrivi qui la tua recensione..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-light btn-lg w-100">
                                Invia recensione
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}