import { CardComponent } from "../components/common/CardComponent"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export const HomePage = () => {

    const { listMovies } = useContext(GlobalContext)

    return (

        <main className="bg-dark">
            <div className="container">
                <h2>Most voted movies</h2>

                <div className="row">
                    {listMovies.map((el) => {
                        return <CardComponent key={el.id} data={el} />
                    })}
                </div>

            </div>
        </main>

    )

}