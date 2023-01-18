import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className={({isActive})=>!isActive?'side-nav-links':'side-nav-links active'}>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className={({isActive})=>!isActive?'side-nav-links':'side-nav-links active'}>
                    <img src={Globe} alt="Globe" />
                    <p style={{paddingLeft: "10px"}}>Questions</p>
                </NavLink>
               <NavLink to='/Tags' className={({isActive})=>!isActive?'side-nav-links':'side-nav-links active'}  style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className={({isActive})=>!isActive?'side-nav-links':'side-nav-links active'}  style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                </NavLink>        
            </div>

        </nav>
      
    </div>
  )
}

export default LeftSidebar
