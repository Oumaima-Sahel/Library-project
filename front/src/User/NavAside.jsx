import { NavLink } from "react-router-dom";
// import logo from "../Image/logo.jpg";

function NavAside() {
  
  return (
    <div className="row nav">
      <nav className="navbar navbar-expand-lg py-4 mb-5">
        <div className="container">
          <h1 className="text-dark fs-2 fw-bold">Book Store</h1>
          {/* <img src={logo} width={160} /> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <NavLink to="/" className="nav-link text-dark pl-3 me-3 active mt-2"><i>Dachbord</i></NavLink>
              <NavLink to="/Listbook" className="nav-link text-dark pl-3 me-3 active mt-2"><i>Listbook</i></NavLink>
              <NavLink to="/Category" className="nav-link text-dark pl-3 me-3 active mt-2"><i>Category</i></NavLink>
              
              {/* <botton className="btn btn-danger mt-2" onClick={logout}><i>Logout</i></botton> */}

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavAside;































// const navigate = useNavigate()
  // function logout() {
  //   localStorage.clear()
  //   navigate('/')
  // }