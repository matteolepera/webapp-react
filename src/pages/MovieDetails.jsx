import { useParams } from "react-router-dom"

export default function MovieDetails() {
    const { id } = useParams
    return (
        <>
            <h3>Pagina singolo film</h3>
        </>
    )
}