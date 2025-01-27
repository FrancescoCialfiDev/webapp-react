
import { Link } from "react-router-dom"
export const CardComponent = ({ data }) => {



    return (
        <div id="idCard" className="col-xl-2 col-lg-4 col-md-6 my-2" key={data.id}>
            <div className="card rounded-2">
                <img src={data.image} className=" img-fluid position-relative top-0 left-0 rounded-2" alt="..." />
                <div id="overlay" className="card-body position-absolute top-0 left-0 d-none">
                    <h5 className="card-title text-white">{data.title}</h5>
                    <p className="card-text">{data.abstract}</p>
                    <Link to={`/${data.id}`} href="#" className="btn btn-primary">Go somewhere</Link >
                </div>
            </div>
        </div>

    )
}

