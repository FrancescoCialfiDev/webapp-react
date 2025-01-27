import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardComponent } from "../components/common/CardComponent";
import ReviewComponent from "../components/common/ReviewComponent";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const MovieDetailsPage = () => {
    const [singleMovie, setSingleMovie] = useState([]);
    const { id } = useParams();

    const getSingleMovie = () => {
        axios
            .get(`${BASE_URL}/movies/${id}`)
            .then((res) => {
                setSingleMovie(res.data.item);
            });
    };

    console.log(singleMovie);

    useEffect(getSingleMovie, [id]);

    return (
        <main className="bg-dark">
            <div className="container">

                <h2>Movie Details</h2>
                <div
                    className="d-flex"
                    style={{
                        backgroundColor: "black",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <CardComponent data={singleMovie} />

                    <div id="details" className="my-2 w-50 rounded-2 p-3">
                        <h5>{`Title: ${singleMovie.title}`}</h5>
                        <p>
                            <em>{`Description: ${singleMovie.abstract}`}</em>
                        </p>
                        <p className="m-0">
                            <em>{`Director: ${singleMovie.director}`}</em>
                        </p>
                        <p className="m-0">
                            <em>{`Genre: ${singleMovie.genre}`}</em>
                        </p>
                        <p className="m-0">
                            <em>{`Year: ${singleMovie.release_year}`}</em>
                        </p>
                    </div>

                </div>

                <div>
                    {singleMovie?.reviews?.map((review) => {
                        return <ReviewComponent key={review.id} review={review} />
                    })}
                </div>

            </div>
        </main>
    );
};
