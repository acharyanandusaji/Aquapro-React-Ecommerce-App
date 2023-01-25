import React, { useState } from 'react'
import { products } from '../../assets/data/data'
import { Heading } from '../../common/Heading'
import { ProductItems } from './ProductItems'

export const Product = () => {
  const [data, setdata] = useState(products)
  console.log(setdata)
  return (
    <>
        <section className='product'>
            <div className="container">
                <Heading title='Trending Products' desc='Check out the latest products of the week.'/>
                <ProductItems data={data}/>
            </div>
        </section>
    </>
  )
}
