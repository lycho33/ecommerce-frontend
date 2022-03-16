import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './css/Nav.css'
import './css/Home.css'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SidebarData} from './SidebarData'
// import {IconContext} from 'react-icons'

function Nav() {
    const [sidebar, setSidebar] = useState(false)                              
    const showSideBar = () => setSidebar(!sidebar)
    const [pathname, setPathname] = useState('')

    return (
     <div>
        <div className="navbar">
            <Link to="/" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar}/>
            </Link>
            <h1 className='pathname'>{(pathname) ? `${pathname}` : 'The Mini-Store'}</h1>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSideBar}>
                <li className="navbar-toggle">
                    <div className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </div>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path} onClick={() => setPathname(item.title)}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                } )}
            </ul>
        </nav>
     </div>
        )
}


export default Nav
