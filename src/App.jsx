import { HeaderComponent } from "./components/HeaderComponent"; // Importiamo HeaderComponent
import { MainComponent } from "./components/MainComponent"; // Importiamo MainComponent
import { FooterComponent } from "./components/FooterComponent"; // Importiamo FooterComponent
import { SidebarComponent } from "./components/SidebarComponent"; // Importiamo SidebarComponent

function App() {
    return (
        <>
            <HeaderComponent />
            <div className="d-flex">
                <SidebarComponent />
                <MainComponent />
            </div>
            <FooterComponent />
        </>
    );
}

export default App;