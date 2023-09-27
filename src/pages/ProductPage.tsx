import { useContext } from "react"
import CreateProduct from "../components/CreateProduct"
import ErrorMessage from "../components/ErrorMessage"
import Modal from "../components/Modal"
import Product from "../components/Product"
import Spinner from "../components/Spinner"
import { useProducts } from "../hooks/products"
import { IProduct } from "../models"
import { ModalContext } from "../context/ModalContext"

export default function ProductPage() {
    const { products, status, error, addProduct } = useProducts()
    const { modal, open, close } = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }
    return (
        <div className='container mx-auto max-w-7xl pt-5'>
            <div className="mb-5 flex flex-col gap-3 justify-center items-center">
                <h1 className="font-bold">Product Page</h1>
                <button onClick={open} className="p-2 bg-green-700 border rounded text-center text-yellow-500 font-bold">Create Product</button>
            </div>
            {status === 'loading' ? <Spinner /> : status === 'error' ? <ErrorMessage error={error} /> :
                products.sort((a, b) => b.rating?.rate - a.rating?.rate).map(el => <Product key={el.id} product={el} />)
            }
            {modal && <Modal onClose={close} title="Create new product">
                <CreateProduct onClose={close} onCreate={createHandler} />
            </Modal>}

            <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2" onClick={open}>+</button>
        </div >
    )
}
