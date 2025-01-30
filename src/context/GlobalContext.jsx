import { createContext, useState, useEffect } from "react";    // Importiamo dalle funzioni dalla libreria react
import axios from "axios"                                      // Importiamo la libreria axios 
const BASE_URL = import.meta.env.VITE_BASE_URL                 // Variabili di ambiente ( vengono prese dal file .env) 
const GlobalContext = createContext()                          // Creiamo un istanza del metodo createContext() per inizializzare un contesto

// Creazione custom di un GlobalProvider ( Passiamo nella call back una speciale prop di react { children } rappresenta
// tutto ciò che viene inserito all'interno del componente quando viene usato. )
const GlobalProvider = ({ children }) => {

    const [listMovies, setListMovies] = useState([]); // Stato per memorizzare la lista dei film

    // Funzione per recuperare i film dal server
    const getListMovies = () => {
        axios
            .get(`${BASE_URL}/movies`) // Effettua una richiesta GET all'API
            .then((res) => setListMovies(res.data.items)) // Aggiorna lo stato con i film ricevuti
            .catch((error) => console.log(error.message)) // Stampa in console l'errore che ci viene inviato
            .finally("Data Fetch Completed");
    };

    useEffect(() => {
        getListMovies(); // Chiamata API al montaggio del componente
    }, []);


    return (

        <GlobalContext.Provider value={{ listMovies }}> {/* Torniamo un componente Provider che ci permette di passare nel value dei dati*/}
            {children}                                  {/* accessibili da tutti i children */}
        </GlobalContext.Provider>

    )

}

export { GlobalProvider, GlobalContext }