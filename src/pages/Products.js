import React from 'react'
import { Link } from 'react-router-dom'

const LISTOFPRODUCTS = [
    {id: 'p1', title: 'Product-1'},
    {id: 'p2', title: 'Product-2'},
    {id: 'p3', title: 'Product-3'},
    {id: 'p4', title: 'Product-4'},
    {id: 'p5', title: 'Product-5'},
    {id: 'p6', title: 'Product-6'},
]

const Products = () => {
  return (
    <div>
      <h1>The Product Page</h1>
      <ul>
        {LISTOFPRODUCTS.map((prod) => (
           <li key={prod.id}>
            <Link to={`/Products/${prod.id}`}>{prod.title}</Link>
           </li> 
        ))}
      </ul>
    </div>
  )
}

export default Products
