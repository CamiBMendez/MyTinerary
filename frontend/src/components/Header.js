import React, {useState} from 'react'
import '../styles/header.css'
import icon from '../imagenes/logo.png'
import fotos from '../imagenes/tinerary2.png'
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import Menu from './Menu';
import {NavLink} from "react-router-dom"


const Header = (props) => {
    const [isOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!isOpen);
    return (
      <>
      <div id="todo">
      <Dropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle id="back">
    <img src={icon} alt='logo log in' />
  </DropdownToggle>
  <DropdownMenu>
     <NavLink to="/logIn"> <DropdownItem className="navsa">Log in</DropdownItem> </NavLink>
    <DropdownItem divider />
    <NavLink to="/register"><DropdownItem className="navsa">Register</DropdownItem></NavLink>
  </DropdownMenu>
  </Dropdown>
    <NavLink to="/home"> <img src={fotos} alt="logo" id="titulo"/> </NavLink>
        <div id="flexible">
        <div id="menu">
          <div className="hoover">
            <NavLink to="/home"  className="navs">Home</NavLink>
          </div>  
          <div className="hoover">
            <NavLink to="/ciudades" className="navs">Cities</NavLink>
          </div>  
        </div>
        </div>
        <div  className="nav">
        <Menu />
        </div>
        </div>

      </>
    )
  }
  
  
export default Header
