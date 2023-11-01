import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <>
    <header className={classes.header}>
        <nav>
        <ul className={classes.list}>
            <li><NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink></li>
            <li><NavLink to='/About' className={({isActive}) => isActive ? classes.active : undefined}>About</NavLink></li>
            <li><NavLink to='/Services' className={({isActive}) => isActive ? classes.active : undefined}>Contact </NavLink></li>
            <li><NavLink to ='/Products' className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink></li>
        </ul>
        </nav>
    </header>    
    </>
  )
}

export default MainNavigation
