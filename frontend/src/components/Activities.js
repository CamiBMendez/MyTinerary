import React from 'react';
import axios from 'axios'
import '../styles/activities.css'


class Activities extends React.Component {
    state ={
        activity:[],
    }
    async componentDidMount(){
        const IdABuscar = this.props.itinerary
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/activities/${IdABuscar}`)
        const info = respuesta.data.actividad
        this.setState({
            activity: info
        })
    }
    render() {
        return (
             <div  > 
             {this.state.activity.map(act=>{
                return (
                <div key={act.title} id="activities">
                    <div id="ponerWid" style={{backgroundImage: `url(${act.picture})`}}> </div>
                    <div id="padreDescription">
                        <p id="nameAct"> {act.title}</p>
                        <p id="description">{act.description}</p>
                    </div>
                </div>
                )
             })}
             </div>
        )
    }
}

export default Activities