import React from 'react'
import { Link } from 'react-router-dom'
import './css/Nav.css'
import './css/Home.css'

function NavLinks({index, className, path, icon, title, setPathname}) {
  return (
    <li key={index} className={className}>
        <Link to={path} onClick={() => setPathname(title)}>
          {console.log(path)}
            {icon}
            <span>{title}</span>
        </Link>
    </li>
  )
}

export default NavLinks