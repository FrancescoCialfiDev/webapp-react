import { DefaultLayout } from "./layout/DefaultLayout"; // Importiamo DefaultLayout "./layout/DefaultLayout"
import { HomePage } from "./pages/HomePage"; // Importiamo MainComponent da "./components/MainComponent"
import { ContactPage } from "./pages/ContactPage"; // Importiamo ContactPage da "./pages/ContactPage"
import { AboutUsPage } from "./pages/AboutUsPage"; // Importiamo AboutUsPage da "./pages/AboutUsPage"
import { MovieDetailsPage } from "./pages/MovieDetailsPage"; // Importiamo MovieDetailsPage da "./pages/MovieDetailsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importiamo BrowserRouter, Routes, Route da "react-router-dom" dopo averlo installato
import { GlobalProvider } from "./context/GlobalContext"; // Importiamo GlobalProvider da "./context/GlobalContext"

const App = () => {
    return (
        <>
            <GlobalProvider>
                <BrowserRouter>                                                      {/* Routing React formato da "BrowserRouter, Routes, Route" */}
                    <Routes>
                        <Route element={<DefaultLayout />}>                          {/* Layout di default per tutte le rotte */}

                            <Route path="/">                                         {/* ROTTA PADRE */}
                                <Route index element={<HomePage />} />               {/* SOTTO ROTTA PRINCIPALE */}
                                <Route path=":id" element={<MovieDetailsPage />} />  {/* SOTTO ROTTA CON ID DINAMICO */}
                            </Route>

                            <Route path="/contact" element={<ContactPage />} />      {/* ROTTA CONTATTI */}
                            <Route path="/AboutUs" element={<AboutUsPage />} />      {/* ROTTA INFORMAZIONI */}

                        </ Route>
                    </Routes>
                </BrowserRouter >
            </GlobalProvider >
        </>
    );
}

export default App; // Esportiamo App e lo importiamo su "main.jsx"