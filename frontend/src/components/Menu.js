import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/header.css'
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const foto = require("../imagenes/menu.png")

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle id="hamburguesa">
          <img src={foto} alt="menu" />
      </DropdownToggle>
      <DropdownMenu id="drop">
        <DropdownItem className="items">
          <NavLink to="/home"  className="navs">Home</NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="items">
          <NavLink to="/ciudades" className="navs">Cities</NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}




export default Menu