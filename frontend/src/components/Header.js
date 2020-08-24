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
    <DropdownItem className="navsa">Log in</DropdownItem>
    <DropdownItem divider />
    <DropdownItem className="navsa">Register</DropdownItem>
  </DropdownMenu>
  </Dropdown>
        <img src={fotos} alt="logo" id="titulo" />
        <div id="flexible">
        <div id="menu">
          <NavLink to="/home"  className="navs">Home</NavLink>
          <NavLink to="/ciudades" className="navs">Cities</NavLink>
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
