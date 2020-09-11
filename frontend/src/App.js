import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import './styles/generalStyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import Ciudades from './pages/Ciudades';
import Header from './components/Header';
import Footer from './components/Footer';
import Itinerarios from './pages/Itinerarios';
import Register from './pages/Register';
import LogIn from './pages/LogIn'
import {connect} from 'react-redux'
import usuariosActions from './redux/actions /usuariosActions';


  
    


class App extends React.Component{
  
  render(){
   if (localStorage.getItem('token') && this.props.tokenLogueado===""){
      (this.props.forcedLogIn(localStorage.getItem('token')))

    }
    return(
      <>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/ciudades" component={Ciudades} />
          <Route path="/itinerarios/:id" component={Itinerarios} />
          <Route path="/register" component={Register}/>
          <Route path="/logIn" component={LogIn}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>)
  }
}

const mapDispatchToProps = {
  forcedLogIn: usuariosActions.forcedLogIn
}

const mapStateToProps = state => {
  return{
    tokenLogueado: state.user.token  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)