import axios from "axios";
import { useState } from "react"

const defaultFormValue = {
    name: "",
    vote: 1,
    text: "",
}

export default function ReviewForm({ movieId }) {

    const [formData, setFormData] = useState(defaultFormValue);


    function updateFormData(event) {
        const value = event.target.value;
        const key = event.target.name;

        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post(`http://localhost:4416/api/movies/${movieId}/reviews`, formData)
            .then((resp) => { setFormData(defaultFormValue); })
            .catch((err) => { alert(err.response.data.messsage) })
    }

    return (
        <>
            <div className="card text bg-dark border-secondary">
                <div className="card-body">
                    <h4 className="mb-4 text-white">Lascia la tua recensione</h4>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label text-white">Nome</label>
                            <div className="input-group">
                                <span className="input-group-text border-secondary">@</span>
                                <input
                                    value={formData.name}
                                    onChange={updateFormData}
                                    type="text"
                                    className="form-control border-secondary"
                                    id="name"
                                    name="name"
                                    placeholder="Il tuo nome"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="vote" className="form-label text-white">Voto</label>
                            <div className="input-group">
                                <span className="input-group-text border-secondary">⭐</span>
                                <input
                                    value={formData.vote}
                                    onChange={updateFormData}
                                    type="number"
                                    className="form-control border-secondary"
                                    id="vote"
                                    name="vote"
                                    placeholder="Da 1 a 5 stelle"
                                    min="1"
                                    max="5"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="text" className="form-label text-white">Commento</label>
                            <div className="input-group">
                                <span className="input-group-text border-secondary">💬</span>
                                <textarea
                                    value={formData.text}
                                    onChange={updateFormData}
                                    className="form-control border-secondary"
                                    id="text"
                                    name="text"
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