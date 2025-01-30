import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { SidebarComponent } from "../components/SidebarComponent";

export const DefaultLayout = () => {

    return (

        <>

            <HeaderComponent />                   {/* Componente Header */}

            <div className="d-flex">
                <SidebarComponent />              {/* Componente SideBar */}
                <main className="bg-dark">
                    <Outlet />                    {/* Componente Outlet */}
                </main>
            </div>

            <FooterComponent />                   {/* Componente Footer */}

        </>

    )

}