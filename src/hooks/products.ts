import axios from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export const useProducts = () => {
    type StatusType = "loading" | "success" | "error"

    const [products, setProducts] = useState<IProduct[]>([])
    const [status, setStatus] = useState<StatusType>("loading")
    const [error, setError] = useState('')
    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }
    async function fetchProduct() {
        try {
            const { data, status } = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(data)
            status === 200 && setStatus("success")
        } catch (e) {
            const err = e as Error;
            setError(err.message);
            setStatus("error")
        }
    }
    useEffect(() => {
        setStatus('loading')
        fetchProduct();
    }, [])

    return { products, status, error, addProduct }
}