import React from 'react'
import { useState} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import '../components/css/ProductIndex.css'

const categories = ["all", "shoes", "t-shirt", "pants", "hat", "scarf", "gloves", "jacket", "hoodie", "sweatshirt"]


function ProductIndex({products, cart}) {

    const [incrementNum, setIncrementNum] = useState(1)
    // const handleChange = (e) => { setIncrementNum(e.target.value)}

    const [category, setCategory] = useState("")
    const filterProducts = products.filter(p => 
        (!category || category === "all") ? products : p.category === category
    )


    return (
        <div className='products-container'>
            <h1 className='products-container-title'>Dress Up for the Journey</h1>
            <form className='category-form'>
                <label>Category: </label>
                <select name="" className='dropdown' onChange={(e) => setCategory(e.target.value)}>
                        {categories.map(c => <option value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                </select>
            </form>
            {/* <input type="number" value={incrementNum} onChange={handleChange}/> */}
            {filterProducts.map(p => <ProductItem {...p} products={p} key={products.id} cart={cart} incrementNum={incrementNum} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(ProductIndex)