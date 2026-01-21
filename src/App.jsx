import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Movies />} path="/movies" />
            <Route element={<MovieDetails />} path="/movies/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
