import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";

function Login() {
  const [idUser, setIdUser] = useState('');
  const [role, setrole] = useState();
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then(re => re.json())
      .then(data =>
        data.map(user => {
          if (user.email == formData.email) {
            setIdUser(user.id)
            setrole(user.role)
            console.log(user.id, user.role);
          }
        })
      )

  }, [formData.email])

  useEffect(() => {
    if (localStorage.getItem("infoUser")) {
      if (role == "admin") {
        navigate('/AdminList')
      }
      else {
        navigate('/Login')
      }
    }
  }, [])
  // ================================================================

  async function logIn(e) {
    e.preventDefault();
    let item = {
      email: formData.email,
      password: formData.password
    };
    console.log(item);

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "applicaytion/json"
      },
      body: JSON.stringify(item)
    })

    result = await result.json()
    localStorage.setItem("infoUser", JSON.stringify(result))
    navigate('/AdminList')
    console.log(result)

  };
  return (
    <div className="container">
      <div className=" row justify-content-center mt-5">
        <div className="col-lg-4 col-md-8 col-sm-8 mt-5 card shadow bg-warning text-dark mb-5">
          <div id="body" className="center border-0">
            <h2 className="navbar navbar-expand-sm justify-content-center mt-3"><VscAccount className="text-dark" size="3rem" /></h2>
            <div className="navbar navbar-expand-sm justify-content-center border-bottom fs-5">
              <NavLink className="p-3 nav-link text" to="/Login">Login</NavLink>
              <NavLink className="p-3 nav-link text" to="/Sinup">Sign Up</NavLink>
            </div>

            <form className="card-body" action="formSingup" onSubmit={logIn}>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="fs-5">E-mail</label>
                <input type="email" className="form-control shadow-none" id="email" name="email" onChange={handleChange} value={formData.email} required />
              </div>
              {/* Password */}
              <div className="mb-4">
                <label htmlFor="" className="fs-5">Mot de passe</label>
                <input type="password" className="form-control shadow-none" id="password" name="password" onChange={handleChange} value={formData.password} required />
              </div>
              
              <button type="submit" className="form-control btn btn-dark text-warning">Login</button>
             
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

