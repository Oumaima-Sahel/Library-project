
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";


function Listcateg() {

    // function for add category
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
        .then(re => re.json())
        .then(data =>setCategories(data));
    }, []);

    // function for delet categories
    function deletCateg(id) {
      fetch(`http://127.0.0.1:8000/api/categories/${id}`, {
        method:'DELETE'
      }).then((res) => res.json())
        .then((categories) => window.location.reload())
    }
    
  return (
    <div className="container">

      <div className="row justify-content-center mt-2">
        <a href="/AdminList" className="col-3 btn btn-dark text-warning m-4">ListBooks </a>
        <a href="/Listcateg" className="col-3 btn btn-dark text-warning m-4">Category</a>
        <a href="/Login" className="col-3 btn btn-dark text-warning m-4">Logout</a>
      </div>

      <div className="container text-center">
        <table className="table col-lg-6 col-md-4 col-sm-8 mt-5">
            <thead>
                <tr>
                    <th>Category name</th>
                    <th></th>
                    <th><a href="./CreateBook" className="btn btn-dark text-warning">Add Category</a></th>
                </tr>
            </thead>

            <tbody>
                {categories.map((categ) => (
                    <tr key={categ.id}>
                      <td>{categ.name}</td>
                      <td></td>
                      <td><button className="btn btn-dark text-warning" onClick={() => deletCateg(categ.id)} ><MdDelete className="text-danger" />surprimer</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
export default Listcateg;
