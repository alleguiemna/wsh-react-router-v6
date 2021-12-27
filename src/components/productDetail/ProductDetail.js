import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({products}) => {
    const {id}=useParams()
  
    return (
        <div>
         {products.filter(elt => elt.id == id)
         .map(elt =><div>
             <h1>{elt.name}</h1>
             <p>{elt.price}</p>
         </div>)}
        </div>
    )
}

export default ProductDetail
