import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { products } from '../../assets/data/data'
import { SearchItems } from './SearchItems'

export const Hero = () => {

    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSearch = (key) => {
        setValue(key)
        console.log("search", key)
    }

  return (
    <>
        <section className="hero">
            <div className="container">
                <h1>
                    <label>
                        Over <span>6500</span> Aquarium Products
                    </label>
                    <br/>
                    <label>Fishes, <span>Plants & Aquarium</span> Equipments</label>
                </h1>
                <p>High-Quality Aquatic Fishes and Live Plants for your Aquarium</p>
                <div className="search">
                    <span>All Categories</span>
                    <hr/>
                    <input type="text" placeholder='Search Products...' onChange={onChange} value={value} />
                    <button onClick={() => onSearch(value)}>
                        <BiSearch className='searchIcon heIcon'/>
                    </button>
                </div>
                <SearchItems products={products} value={value} onSearch={onSearch}/>
                    <p>Example: Guppy, Betta, Filter, Stones...</p>
            </div>
        </section>
    </>
  )
}
