
import { data, useParams } from "react-router-dom"
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL
import { useEffect, useState } from "react"
import { CardComponent } from "../components/CardComponent"

export const MovieDetailsPage = () => {

    const [singleMovie, setSingleMovie] = useState([])
    const { id } = useParams()

    const getSingleMovie = () => {

        axios.get(`${BASE_URL}/movies/${id}`)

            .then((res) => {
                setSingleMovie(res.data.items)
            })

    }
    console.log(singleMovie)
    useEffect(getSingleMovie, [id])

    return (
        <main className="bg-dark">
            <div className="container">
                <h2>Movie Details</h2>
                <div
                    className="d-flex"
                    style={{ backgroundColor: "black", padding: "10px", borderRadius: "10px" }}
                >
                    <CardComponent data={singleMovie} />
                    <div id="details" className="my-2 w-50 rounded-2 p-3">
                        <h5>
                            {`Title: ${singleMovie.title}`}
                        </h5>
                    </div>
                </div>
            </div>
        </main>
    )

}