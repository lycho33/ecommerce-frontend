import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Store',
        path: '/products',
        icon: <AiIcons.AiTwotoneShop />,
        className: 'nav-text'
    },
    {
        title: "Cart",
        path: '/cart',
        icon: <AiIcons.AiOutlineShoppingCart />,
        className: 'nav-text'
    }
]