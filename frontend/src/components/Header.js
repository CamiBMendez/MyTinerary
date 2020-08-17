import React, {useState} from 'react'
import '../styles/header.css'
import foto from '../imagenes/logo.png'
import fotos from '../imagenes/tinerary2.png'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
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
        <nav>
          <a href="" id="active">Home</a>
          <a href="">Cities</a>
          <a href="">Settings</a>
        </nav>
        </div>
        </div>
        <div  className="nav">
        <Navbar color="faded" light id="imag">
          <NavbarToggler onClick={toggleNavbar} className="mr-2" id="quieto"/>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar >
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <DropdownItem divider />
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Cities</NavLink>
              </NavItem>
              <DropdownItem divider />
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Settings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>

      </>
    )
  }
  
  

/*class Header extends React.Component{
    render(){
    return(
    <div id="todo">
    <img src={foto} alt='logo log in' />
    <img src={fotos} alt="logo" id="titulo" />
    <nav>
        <a>Home</a>
        <a>Contacto</a>
        <a>perfil</a>
    </nav>
    </div>
    )
    }
}*/
export default Header
