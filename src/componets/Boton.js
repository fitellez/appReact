import React from 'react'
import img from '../images/add.png'
import './styles/Boton.css'
import {Link} from 'react-router-dom'

const Boton = () =>(
    <Link to="/exercise/new">
                <img src={ img } className="Fitness-Add"/>
            </Link>
)

// class Boton extends React.Component{
//     render(){
//         return(
//             <Link to="/exercise/new">
//                 <img src={ img } className="Fitness-Add"/>
//             </Link>
//         );
//     }
// }

export default Boton