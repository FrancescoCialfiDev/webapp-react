
export const HeaderComponent = () => {



    return (
        <header className="w-100">
            <nav className="navbar navbar-expand-lg h-100">
                <div className="container-fluid">
                    <img className="navbar-brand" src="images/logo.png" />
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    );
};
