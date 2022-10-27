import "./Item.css"

import { Link } from "react-router-dom"


export const Item = ({info})=> {
  

  return(
      <div className="card" id="carta">
        <img src={info.image} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <h5 className="card-title">{info.price}</h5>
          <p className="card-text">{info.description}</p>
          <Link to={`/detalle/${info.id}`} className="btn btn-primary">Detalle</Link>
        </div>
      </div>
    )
}
