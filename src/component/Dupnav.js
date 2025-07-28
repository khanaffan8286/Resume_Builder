
import React from 'react'
import { Link } from 'react-router-dom'

const Dupnav = () => {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mp-2" data-bs-theme="white"  >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">.Resume </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <Link to='/' className="navbar-brand" >.RESUME</Link>
        </div>
      </nav>

      
      
    </div>
    </div>
  )
}

export default Dupnav
