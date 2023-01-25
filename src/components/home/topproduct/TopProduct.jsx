import React, { useState } from 'react'
import { topProducts } from '../../assets/data/data'
import { Heading } from '../../common/Heading'
import { ProductItems } from '../product/ProductItems'

export const TopProduct = () => {
    const [data, setdata] = useState(topProducts)
  return (
    <>
        <section className="topproduct">
            <div className="container">
                <div className="head">
                    <Heading title='Top Selling Products' desc='Some New Products has arrived. Lets Get it !' />
                </div>
                <ProductItems data={data} />
            </div>
        </section>
    </>
  )
}
