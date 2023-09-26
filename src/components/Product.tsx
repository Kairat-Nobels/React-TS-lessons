import React, { useState } from 'react'
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}
export default function Product({ product }: ProductProps) {
    const [show, setShow] = useState(false);

    const btnBgClassName = show ? 'bg-yellow-400' : 'bg-blue-400';

    const btnClasses: string[] = ['py-2 px-4 border mt-4 mb-3', btnBgClassName]
    return (
        <div className='border-4 py-2 px-4 rounded flex flex-col text-center items-center mb-2'>
            <img className='w-1/6 ' src={product.image} alt={product.title} />
            <h2 className='text-red-600 font-bold mt-4 mb-4'>{product.title}</h2>
            <p>Rate: <span className='font-bold'>{product.rating.rate}</span></p>
            <p className='font-bold'>{product.price} $</p>
            <button className={btnClasses.join(' ')} onClick={() => setShow(prev => !prev)}>{!show ? "Show Details" : "Hide Details"}</button>
            {show && <p>{product.description}</p>}
        </div>
    )
}
