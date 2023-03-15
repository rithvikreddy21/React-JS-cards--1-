import React, {Component}  from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

//import img1 from '../imgs/cricket.jpg';
import img2 from '../imgs/badminton.jpg';

const Badmintoncard = (props) =>{
    return(
        /*
        <div>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
        </div>
        */

        <div className="card">
            <img className = "card-img-top" src={img2} alt = "Card image"></img>
            <div className = "card-body">
                <h4 className = "card-title">{props.name}</h4>
                <p class = "card-text">{props.description}</p>
                <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjTk8Sxp9j9AhWU-jgGHbL7CyUQPAgI" class = "btn btn-primary">Know more</a>
            </div>

        </div>

        
    )
};

export default Badmintoncard;