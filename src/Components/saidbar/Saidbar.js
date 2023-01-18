import { Link } from "react-router-dom";

function Saidbar() {
  return (
   <div className="container-xxl position-relative bg-white d-flex p-0">
  {/* Sidebar Start */}
  <div className="sidebar pe-4 pb-3">
    <nav className="navbar bg-light navbar-light">
      <a href="index.html" className="navbar-brand mx-4 mb-3">
        <h3 className="text-primary"><i className="fa fa-hashtag me-2" />MY LABO</h3>
      </a>
      <div className="d-flex align-items-center ms-4 mb-4">
        <div className="position-relative">
          <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
        </div>
        <div className="ms-3">
          <h6 className="mb-0">Jhon Doe</h6>
          <span>Admin</span>
        </div>
      </div>
      <div className="navbar-nav w-100">
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i class="bi bi-person-circle"></i>User</a>
          <div className="dropdown-menu bg-transparent border-0">
            <Link to={"/addClient"} className="dropdown-item active"> Add User</Link>
            <Link to={"allClient"} className="dropdown-item"> All User</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i class="bi bi-arrow-right-short"></i>Test</a>
          <div className="dropdown-menu bg-transparent border-0">
            <Link to={"/addTest"} className="dropdown-item active"> Add Test</Link>
            <Link to={"/allTest"} className="dropdown-item">All Test</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i class="bi bi-arrow-right-short"></i>Resulte</a>
          <div className="dropdown-menu bg-transparent border-0">
            <Link to={'/addResulta'} className="dropdown-item active"> Add Resulte</Link>
            <Link to={"/allResulta"} className="dropdown-item">All Resulte</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i class="bi bi-arrow-right-short"></i>medecin</a>
          <div className="dropdown-menu bg-transparent border-0">
            <Link to={"/addMedecin"} className="dropdown-item active"> Add medecin</Link>
            <Link to={'/allMedecin'} className="dropdown-item">All medecin</Link>
          </div>
        </div>
      </div>
      
    </nav>
  </div>
  {/* Sidebar End */}
</div>

  );
}

export default Saidbar;
