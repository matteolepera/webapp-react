import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
