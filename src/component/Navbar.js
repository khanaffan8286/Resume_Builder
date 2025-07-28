

import { Link } from 'react-router-dom';
import Main from './Main';

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mp-2" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">.Resume </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to = "/sample" className="btn btn-success">Samples</Link>
              </li>

              <li className="nav-item">
              <Link to = "/temp" className="btn btn-success">Templets</Link>
              </li>
             
            </ul>

            
            <Link to = "/singup" className = "btn btn-primary mx-2">Singup</Link>
            <Link to = "/login" className = "btn btn-primary ">Login</Link>
            


          </div>
        </div>
      </nav>

      
      
    </div>
    </div>
  )
}

export default Navbar
