import logo from "../assets/logo.jpeg"
import { CartWidget } from "./CartWidget"
const NavBar = ()=>{
    return (
             <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="60" height="60"/>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">Tienda</a>
        <a className="nav-link" href="#">Contacto</a>
        <a className="nav-link" href="#" >Nosotros</a>
        <a className="nav-link" href="#" ><CartWidget/></a>
      </div>
    </div>
  </div>
</nav>
        )
    } 
    
    export default NavBar
    
    