import { Link } from "react-router-dom";
export const HeaderComponent = () => {
    return (
        <header className="w-100">
            <nav className="navbar navbar-expand-lg h-100">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src="../../logo.png" alt="Logo" />
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                            <li className="nav-item m-1"><Link to="/" className="nav-link active text-white" href="#">Home</Link></li>
                            <li className="nav-item m-1"><Link to="/contact" className="nav-link text-white" href="#">Contact</Link></li>
                            <li className="nav-item m-1"><Link to="/aboutus" className="nav-link text-white" href="#">About Us</Link></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};
