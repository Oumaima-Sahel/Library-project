import { useEffect, useState } from "react";

import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

function AdminList() {

  
    // charge books:
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/books')
        .then(re => re.json())
        .then(data => setBooks(data));
    }, []);

    //function for delet Books:
    function deletUser(id) {
        fetch(`http://127.0.0.1:8000/api/books/${id}`, {
            method:'DELETE'
        }).then((res) => res.json())
          .then((books) => window.location.reload())
    }

  return (
    <div className="container">

      <div className="row justify-content-center mt-2">
        <a href="/AdminList" className="col-3 btn btn-dark text-warning m-4">ListBooks</a>
        <a href="/Listcateg" className="col-3 btn btn-dark text-warning m-4">Category</a>
        <a href="/Login" className="col-3 btn btn-dark text-warning m-4">Logout</a>
      </div>

      <div className="container text-center">
        <table className="table col-lg-6 col-md-4 col-sm-8 mt-5">
           <thead>
              <tr>
                <th>Title of book</th>
                <th>Name of author</th>
                <th></th>
                <th><a href="./CreateBook" className="btn btn-dark text-warning">Add Books</a></th>
              </tr>
           </thead>

           <tbody>
             {books.map((book) => (
                <tr key={book.id}>
                  <td className="m-5"><NavLink className="text-dark text-decoration-none" to={`/DetailsBook/${book.id}`}>{book.title}</NavLink></td>
                  <td>{book.name_author}</td>
                  <td className="m-5"><NavLink className="text-dark text-decoration-none" to={`/EditBook/${book.id}`}><BiEdit  />Edit Books</NavLink></td>
                  <td><button className="btn btn-dark text-warning" onClick={() => deletUser(book.id)} ><MdDelete className="text-danger" />surprimer</button></td>
                </tr>
             ))}
             
           </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminList;







































// const [books,setBooks] = useState([]);
//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/books')
//           .then(re => re.json())
//           .then(data => setBooks(data));
//     }, []);




//  <div className="bookslist col-lg-6 col-md-4 col-sm-8 mt-5  vh-cover">
//           {books.map((book) => (
//             <div className="row books mt-3 shadow" key={book.id}>
//               <div className="col-4 text-center mt-3">
//                 <img src={img} width="100" />
//                 <h6 className="fw-bold mt-2"><i>{book.title}</i></h6>
//               </div>
//               <div className="col row mt-3">
//                 <p className="col"><i className="fw-bold">Auteur:</i>{book.name_author}</p>
//                 <p className="col"><i className="fw-bold">Post-Date:</i>{book.post_date}</p>
//                 <small className="row"><i className="fw-bold">Description:</i>{book.denscription}</small>
//                 <a  href={book.url_install} className="row btn btn-dark text-warning mb-4 mt-4">installe</a>
//               </div>
//             </div>
//           ))}

//         </div>