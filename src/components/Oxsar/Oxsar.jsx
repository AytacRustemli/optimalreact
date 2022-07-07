import React from 'react'
import { useSelector } from 'react-redux'

const Oxsar = ({catName}) => {
    const getProduct = useSelector((state) => state.products.products.message)
  return (
    <div>
        {
            getProduct &&
            getProduct.filter(x=>x.secondParentCategoryName === catName).map((product)=>(
                <div key={product.id}>
                    <img width="400px" height="200" src={product.coverPhoto} alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default Oxsar