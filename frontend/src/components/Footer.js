import React from 'react'
import foto from '../imagenes/c.png'
import '../styles/footer.css'

function Footer(){
    return(
       <footer>
          <img src={foto} alt='all rights reserve' />
          <p>MyTinerary 2020 | All rights Reserved</p>
       </footer>
    )
}

export default Footer