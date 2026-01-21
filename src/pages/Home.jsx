import { Link } from "react-router-dom";

export default function Home() {
    return (

        <div className="hero p-5">

            <Link className="btn btn-outline-dark fs-4" to={"/movies"}>Non preoccuparti...</Link>

        </div>
    )
}