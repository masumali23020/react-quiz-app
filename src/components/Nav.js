import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/masum.jpg"
import classes from "../style/Nav.module.css"
import Account from './Account'


const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
            
          <Link to="/" className={classes.brand}>
            <img style={{borderRadius: "50%" }} src={logo} alt="Learn with  Logo" />
            <h3>Learn with Masum</h3>
          </Link>
        </li>
      </ul>
    <Account />
    </nav>
  )
}

export default Nav