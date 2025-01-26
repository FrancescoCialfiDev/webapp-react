import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL

const GlobalContext = createContext()
const GlobalProvider = ({ children }) => {

    const [listMovies, setListMovies] = useState([])
    const getListMovies = () => {
        axios.get(`${BASE_URL}/movies`)
            .then((res) => {
                setListMovies(res.data.items)
            })
    }
    useEffect(getListMovies, [])



    return (

        <GlobalContext.Provider value={{ listMovies }}>
            {children}
        </GlobalContext.Provider>

    )

}

export { GlobalProvider, GlobalContext }