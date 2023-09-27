import React, { useState } from 'react'
import { IProduct } from '../models';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
const productData: IProduct = {
    title: '',
    price: 100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi.',
    category: 'electronic',
    image: 'https://i.pravatar.cc',
    rating: {
        rate: 4.5,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void,
    onClose: () => void
}

export default function CreateProduct({ onCreate, onClose }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('')
        if (value.trim().length > 0) {
            productData.title = value.trim()
            const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
            onCreate(response.data)
        }
        else {
            setError('Please enter a valid title.')
            setValue('')
        }
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input value={value} onChange={changeHandler} required type="text" className='w-full outline-0 border py-2 px-4 mb-2' placeholder='Enter product title...' />
                {error && <ErrorMessage error={error} />}
                <button type='submit' className='py-2 px-4 bg-yellow-400 hover:text-white'>Create</button>
            </form>
            <button onClick={() => onClose()} className='p-2 absolute text-2xl font-bold -top-2 right-1'>x</button>
        </>
    )
}
