import { NavLink, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";

function Sinup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //  gère le changement d'un input
  const handleChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      let item = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      console.log(item);
      let result = await fetch("http://127.0.0.1:8000/api/sinup", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      navigate("/Login");
    }
  }


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-8 col-sm-8  mt-5 card shadow bg-warning text-dark mb-5">
          
            <div id="body" className="center border-0">
              <h2 className="navbar navbar-expand-sm justify-content-center mt-3"><VscAccount className="text-dark" size="3rem"/></h2>
              <div className="navbar navbar-expand-sm justify-content-center border-bottom fs-5">
                <NavLink className="p-3 nav-link" to="/Login">Login Admin</NavLink>
                <NavLink className="p-3 nav-link" to="/Sinup">Sign Up Admin</NavLink>
              </div>

                <form className="card-body" action="formSingup" method="post" onSubmit={register} >

                  <div className="mb-4">
                    <label htmlFor="name" className="fs-5">Full name</label>
                    <input type="name" className="form-control shadow-none" name="name" onChange={handleChange} value={formData.name} id="name" required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="fs-5">E-mail Admin</label>
                    <input type="email" className="form-control shadow-none" name="email" onChange={handleChange} value={formData.email} id="email" required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="fs-5">le mot de passe</label>
                    <input type="password" className="form-control shadow-none" name="password" onChange={handleChange} value={formData.password} id="password" required  />
                  </div>

                  <div className="mb-4 navbar navbar-expand-sm justify-content-center">
                    <small>You Have ALredy An Account?</small><NavLink to="/Login" className="nav-link text-dark">Login</NavLink>
                  </div>

                  <button type="submit" className="form-control btn btn-dark text-warning">Sinup</button>
                  

                </form>
              
            </div>
          
        </div>
      </div>
    </div>
  );
}
export default Sinup;


