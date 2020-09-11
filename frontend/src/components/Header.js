import React, {useState} from 'react'
import '../styles/header.css'
import icon from '../imagenes/logo.png'
import fotos from '../imagenes/tinerary2.png'
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import Menu from './Menu';
import {NavLink} from "react-router-dom"
import usuariosActions from '../redux/actions /usuariosActions'
import {connect} from 'react-redux'

const Header = (props) => {
    const [isOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!isOpen);
    
    
    return (
      <>
      <div id="todo">
      <Dropdown isOpen={isOpen} toggle={toggle}>
        {!props.tokenLogueado
        ?(<>
          <DropdownToggle id="back">
            <img src={icon} alt='logo log in' />
          </DropdownToggle>
          <DropdownMenu>
            <NavLink to="/logIn"> <DropdownItem className="navsa">Log in</DropdownItem> </NavLink>
            <DropdownItem divider />
            <NavLink to="/register"><DropdownItem className="navsa">Register</DropdownItem></NavLink>
          </DropdownMenu>
          </>
          )
        :(
          <>
          <DropdownToggle id="back">
          <div id="itinerarios">
            <div id="imagen" style={{ width: "6vw", height:"5.4vw", border:"2.5px solid #000000",backgroundImage: `url(${props.imagenLogueada})`, backgroundSize: "cover", backgroundPosition:"center"}} />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <NavLink to="/profile"> <DropdownItem className="navsa">{props.usuarioLogueado}</DropdownItem> </NavLink>
            <DropdownItem divider />
            <NavLink to="/"><DropdownItem onClick={props.desloguearUsuario} className="navsa">Log Out</DropdownItem></NavLink>
          </DropdownMenu>
          </>
      )}
  
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
  
  const mapStateToProps = state =>{
    return{
    imagenLogueada: state.user.imagen,
    usuarioLogueado: state.user.usuario,
    tokenLogueado: state.user.token
    }
  }
  const mapDispatchToProps = {
   
    desloguearUsuario: usuariosActions.desloguearUsuario
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps) (Header)
