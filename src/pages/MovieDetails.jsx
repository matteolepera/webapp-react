import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

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
        <>
            <h3 className="text-white">Pagina singolo film</h3>
        </>
    )
}