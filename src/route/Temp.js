import React, { Component } from 'react';
import "../css/Temp.css";
import cv from '../assest/cv.png';
import blueres from '../assest/blueres.jpg';
import temp1 from '../assest/temp1.webp';
import whiteres from '../assest/whiteres.jpg';
import { Link } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Dupnav from '../component/Dupnav';
import Template from '../component/Template';




export class Temp extends Component {
  
  render() {
    return (
      
    <div>
      <Dupnav/>
      <Template/>
    
    

{/*         
    
        <nav className = "navbar bg-white">
            <div className="container">
                <div className = "navbar-content">
                    <div className = "brand-and-toggler">
                        <a href = "index.html" className = "navbar-brand">
                            <button variant="/main"><img src={cv} className = "navbar-brand-icon"/></button>
                            
                        </a>
                        <button type = "button" className = "navbar-toggler-btn">
                            <div className = "bars">
                                <div className = "bar"></div>
                                <div className = "bar"></div>
                                <div className = "bar"></div> 
                            
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <header >                
                    <h1 className = "l-title">Choose  your Templates</h1>
        </header>






        <div className="row">
            <div className="column1">
              <img src={blueres} alt="Snow" className="image" />
              <div className="middle">
                <div className="text1">
                  <Link to="/Resume1" className="button" > CREATE RESUME</Link>
                  </div>
              </div>
            </div>
            <div className="column2">
              <img src={whiteres} alt="Forest"  className="image" />
              <div className="middle-w">
                <div className="text1-w"><a className="button" href="resume2.html"> CREATE RESUME</a></div>
              </div>
              
            </div>
            <div className="column3">
            <img src={temp1} alt="Forest"  className="image3" />
              <div className="middle-g">
                <div className="text1-g"><a className="button" href="resume.html"/> CREATE RESUME</div>
                </div>
            </div>
          </div>
         */}

        
   
        
    </div>
    )
  }
}

export default Temp

