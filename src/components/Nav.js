import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './css/Nav.css'
import './css/Home.css'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SidebarData} from './SidebarData'
import NavLinks from './NavLinks'


function Nav() {
    const [sidebar, setSidebar] = useState(false)                              
    const showSideBar = () => { setSidebar(!sidebar) }
    const [pathname, setPathname] = useState('')

    return (
     <div>
        <div className="navbar">
            <Link to={pathname} className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar}/>
            </Link>
            <h1 className='pathname'>{(pathname) ? `${pathname}` : 'The Mini-Store'}</h1>
        </div>
        <nav className={!sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSideBar}>
                <li className="navbar-toggle">
                    <div className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </div>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <div>
                            <NavLinks 
                                index={index} 
                                className={item.className} 
                                path={item.path} 
                                title={item.title} 
                                icon={item.icon} 
                                setPathname={setPathname}
                            />
                        </div>
                    );
                } )}
            </ul>
        </nav>
     </div>
        )
}


export default Nav
