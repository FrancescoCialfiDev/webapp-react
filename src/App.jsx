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
                    {/* Default Layout applied to nested routes */}
                    <Route element={<DefaultLayout />}>
                        {/* HomePage and dynamic movie details */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:id" element={<MovieDetailsPage />} />

                        {/* Contact and About Us Pages */}
                        <Route path="/contacts" element={<ContactPage />} />
                        <Route path="/about-us" element={<AboutUsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
};

export default App;
