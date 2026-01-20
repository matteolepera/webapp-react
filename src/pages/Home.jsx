import { Link } from "react-router-dom";

export default function Home() {
    return (

        <div className="hero">

            <Link className="btn btn-warning mb-3 fs-3" to={"/movies"}>Film belli ma brutti</Link>

        </div>
    )
}