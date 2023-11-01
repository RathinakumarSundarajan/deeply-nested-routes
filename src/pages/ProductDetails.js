import React from 'react'
import { Link, useParams } from 'react-router-dom'



const ProductDetails = () => {
    const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p><Link to='/Products' relative='route'>Back</Link></p>
    </div>
  )
}

export default ProductDetails
