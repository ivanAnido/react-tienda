export const ItemDetail =({data})=>{
    return(
        <div className="card mb-3">
            <img src={data.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text"><small className="text-muted">{data.price}</small></p>
            </div>
        </div>
    )
}