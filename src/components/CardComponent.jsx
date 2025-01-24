import { useState, useEffect } from "react"
import axios from "axios"
export const CardComponent = () => {

    const [data, setData] = useState([])
    const getData = () => {
        axios.get("http://localhost:3000/movies")
            .then((res) => {
                setData(res.data.items)
            })
    }
    useEffect(getData, [])


    return (

        data.map((element) => {

            return (
                <div className="col-xl-2 col-lg-4 col-md-6 my-2" key={element.id}>
                    <div className="card">
                        <img src={element.image} className=" image-fluid position-relative top-0 left-0" alt="..." />
                        <div id="overlay" className="card-body position-absolute top-0 left-0 d-none">
                            <h5 className="card-title text-white">{element.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            )

        })


    )
}

