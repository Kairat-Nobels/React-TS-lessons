import Product from "./components/Product"
import { products } from "./data/products"

function App() {
  return (
    <div className='container mx-auto max-w-7xl pt-5'>
      {products.sort((a, b) => b.rating.rate - a.rating.rate).map(el => <Product key={el.id} product={el} />)}
    </div>
  )
}

export default App
