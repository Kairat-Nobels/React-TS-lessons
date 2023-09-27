import { Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import { AboutPage } from "./pages/AboutPage"
import { Layout } from "./pages/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
