import React, {useState} from 'react'
import '../styles/header.css'
import foto from '../imagenes/logo.png'
import fotos from '../imagenes/tinerary2.png'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
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
    <img src={foto} alt='logo log in' />
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Log in</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Register</DropdownItem>
  </DropdownMenu>
  </Dropdown>
        <img src={fotos} alt="logo" id="titulo" />
        <div id="flexible">
        <div id="menu">
          <NavLink to="/home" id="active" className="navs">Home</NavLink>
          <NavLink to="/ciudades" className="navs">Cities</NavLink>
          <NavLink to="" className="navs">Settings</NavLink>
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
