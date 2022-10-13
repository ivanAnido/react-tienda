import logo from "../assets/logo.jpeg"
import { CartWidget } from "./CartWidget"

import { NavLink } from "react-router-dom"

const NavBar = ()=>{
    return (
             <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" >
            <img src={logo} alt="Bootstrap" width="60" height="60"/>
        </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/soportes" >Soportes</NavLink>
        <NavLink className="nav-link"  to="/cajones">Cajones</NavLink>
        <NavLink className="nav-link"  >Nosotros</NavLink>
        <NavLink className="nav-link" to="/cart" ><CartWidget/></NavLink>
      </div>
    </div>
  </div>
</nav>
        )
    } 
    
    export default NavBar
  