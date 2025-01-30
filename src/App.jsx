import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { GlobalProvider } from "./context/GlobalContext";
import { MoviesListPage } from "./pages/MoviesListPage";


const App = () => {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>

                    <Route element={<DefaultLayout />}>                                {/* Default Layout */}

                        <Route path="/">                                               {/* Rotta principale ( URL BASE ) */}
                            <Route index element={<HomePage />} />                     {/* Nested Route: HomePage and dynamic movie details */}
                            <Route path=":id" element={<MovieDetailsPage />} />        {/* Nested Route: Page Details of the movies */}
                        </Route>

                        <Route path="/movies">                                         {/* Rotta principale ( MOVIES ) */}
                            <Route index element={<MoviesListPage />} />               {/* Nested Route: List movies Page */}
                            <Route path=":id" element={<MovieDetailsPage />} />        {/* Nested Route: Movie Details */}
                        </Route>

                        <Route path="/contacts" element={<ContactPage />} />           {/* Contact Page */}
                        <Route path="/about-us" element={<AboutUsPage />} />           {/* AboutUsPage Page */}

                    </Route>

                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
};

export default App;
