import { CardComponent } from "../components/common/CardComponent";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const MoviesListPage = () => {

    const { listMovies } = useContext(GlobalContext);

    return (


        <div className="container py-5">
            <h2 className="text-white mb-4">Most Voted Movies</h2>
            <div className="row">
                {listMovies.map((movie) => (
                    <CardComponent key={movie.id} data={movie} />
                ))}
            </div>
        </div>


    );

};
