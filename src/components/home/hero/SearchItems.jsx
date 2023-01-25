import React from "react"
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch } from "react-redux"
// import { ADD } from "../../../controller/action"

// all copy past from productItem page

export const SearchItems = ({ products, value, onSearch }) => {
  // const dispatch = useDispatch()
  // const addToCart = (e) => {
  //   dispatch(ADD(e))
  // }

  return (
    <>
      <section className='searchItems'>
        <div className='product_items'>
          {products
            .filter((items) => {
              const searchkey = value.toLowerCase()
              const title = items.title.toLowerCase()

              return searchkey && title.startsWith(searchkey) && title !== searchkey
            })
            .slice(0, 10)
            .map((items) => (
              <div className='box' onClick={() => onSearch(items.title)} key={items.id}>
                <div className='img'>
                  <img src={items.cover} alt='' />
                  <div className='overlay'>
                    <button className='button'>
                      <FiShoppingBag />
                    </button>
                    <button className='button'>
                      <AiOutlineHeart />
                    </button>
                    <button className='button'>
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className='details'>
                  <h3>{items.title}</h3>
                  <p>{items.author}</p>
                  <h4>${items.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}







// import React from 'react'
// import { AiOutlineHeart } from 'react-icons/ai'
// import { FiSearch, FiShoppingBag } from 'react-icons/fi'

// export const SearchItems = ( value, products, onSearch ) => {
//   return (
//     <>
//         <section className="searchItems">
//         <div className="product_items">
//             {products.filter((items) => {
//                 const searchkey = value.toLowerCase()
//                 const title = items.title.toLowerCase()

//                 return searchkey && title.startsWith(searchkey) && title !== searchkey
//             }
//             ).slice(0,10).map((items) => (
//               <div className='box' onClick={() => onSearch(items.title)} key={items.id}>
//                 <div className='img'>
//                   <img src={items.cover} alt='' />
//                   <div className='overlay'>
//                     <button className='button'>
//                       <FiShoppingBag />
//                     </button>
//                     <button className='button'>
//                       <AiOutlineHeart />
//                     </button>
//                     <button className='button'>
//                       <FiSearch />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="details">
//                   <h3>{items.title}</h3>
//                   <p>{items.author}</p>
//                   <h4>Price: ₹{items.price}</h4>
//                 </div>
//             </div>
//             ))}
//       </div>
//         </section>
//     </>
//   )
// }
