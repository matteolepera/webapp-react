import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Movies />} path="/movies" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
