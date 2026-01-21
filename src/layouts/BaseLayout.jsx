import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function BaseLayout() {
    return (
        <>
            <main className="bg-dark">
                <Header />
                <Outlet />
            </main>
        </>
    )

}