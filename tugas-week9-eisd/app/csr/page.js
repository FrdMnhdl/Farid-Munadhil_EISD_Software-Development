'use client'
import { useEffect, useState } from 'react'

export default function CSRPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-blue-700">List Barang</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <img src={p.image} alt={p.title} className="h-32 mx-auto object-contain mb-2" />
            <h2 className="font-semibold black">{p.title}</h2>
            <p className="text-green-600 font-bold">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
