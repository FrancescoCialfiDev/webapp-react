import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing essentials
import { DefaultLayout } from "./layout/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>

                    <Route element={<DefaultLayout />}>                           {/* Default Layout */}

                        <Route path="/" element={<HomePage />} />                 {/* HomePage and dynamic movie details */}
                        <Route path="/:id" element={<MovieDetailsPage />} />


                        <Route path="/contacts" element={<ContactPage />} />      {/* Contact and About Us Pages */}
                        <Route path="/about-us" element={<AboutUsPage />} />

                    </Route>

                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
};

export default App;
