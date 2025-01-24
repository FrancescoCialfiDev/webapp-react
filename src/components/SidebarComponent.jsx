export const SidebarComponent = () => {
    return (
        <div id="sideBar" className="d-flex flex-column flex-shrink-0 p-3">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"></a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item"><a href="#" className="nav-link text-white active" aria-current="page"><i className="bi bi-house me-2"></i>Home</a></li>
                <li><a href="#" className="nav-link text-white"><i className="bi bi-speedometer2 me-2"></i>Dashboard</a></li>
                <li><a href="#" className="nav-link text-white"><i className="bi bi-card-checklist me-2"></i>Orders</a></li>
                <li><a href="#" className="nav-link text-white"><i className="bi bi-grid me-2"></i>Products</a></li>
                <li><a href="#" className="nav-link text-white"><i className="bi bi-people me-2"></i>Customers</a></li>
            </ul>
        </div>
    );
};
