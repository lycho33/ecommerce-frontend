import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <div>
            <Link to="/"><div>Home</div></Link>
            <Link to="/products"><div>Products</div></Link>   
        </div>
        )
    }


export default Nav
