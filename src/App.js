import React from 'react';
import './App.css';
import Samplecard from './components/Samplecard';
import Badmintoncard from './components/Badmintoncard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//import img1 from '../imgs/cricket.jpg'

function App(){


  return (
    <div className = "App"> 
      <div className = "row">
        <div className = "col-lg-3">
        <h2>Cricket Players</h2>
          <Samplecard name = "Sachin Tendulkar" description = "Indian cricket player" />   
          <Samplecard name = "Virat Kohli" description = "Indian cricket player"/>
          <Samplecard name = "Rohit Sharma" description = "Indian cricket player"/>
        </div>
        <div className = "col-lg-3">
          <h2>Badminton Players</h2>
          <Badmintoncard name = "Saina Nehwal" description = "Indian badminton player " />
          <Badmintoncard name = "P.V. Sindhu" description = "Indian badminton player"/>
          <Badmintoncard name = "Srikanth Kidambi" description = "Indian badminton player"/>
        </div>
    </div>    
    </div>


  );
}


export default App;
