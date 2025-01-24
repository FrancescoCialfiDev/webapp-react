import { DefaultLayout } from "./layout/DefaultLayout"; // Importiamo DefaultLayout "./layout/DefaultLayout"
import { HomePage } from "./pages/HomePage"; // Importiamo MainComponent da "./components/MainComponent"
import { ContactPage } from "./pages/ContactPage"; // Importiamo ContactPage da "./pages/ContactPage"
import { AboutUsPage } from "./pages/AboutUsPage"; // Importiamo AboutUsPage da "./pages/AboutUsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importiamo BrowserRouter, Routes, Route da "react-router-dom" dopo averlo installato

const App = () => {
    return (
        <>

            <BrowserRouter>                                                      {/* Routing React formato da "BrowserRouter, Routes, Route" */}
                <Routes>
                    <Route element={<DefaultLayout />}>                          {/* Layout di default per tutte le rotte */}

                        <Route index element={<HomePage />} />     {/* ROTTA MOVIES HOME PAGE */}
                        <Route path="/contact" element={<ContactPage />} />    {/* ROTTA CONTATTI */}
                        <Route path="/AboutUs" element={<AboutUsPage />} />    {/* ROTTA INFORMAZIONI */}

                    </ Route>
                </Routes>
            </BrowserRouter >
        </>
    );
}

export default App; // Esportiamo App e lo importiamo su "main.jsx"