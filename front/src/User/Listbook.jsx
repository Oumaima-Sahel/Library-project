import NavAside from "./NavAside";
import { useEffect, useState } from "react";

function Listbook() {

  // Search 
  const [wordSearch, setWordSearch] = useState('');
  // charge books:
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filterResults = () => {
    const filteredResults = books.filter(item => item.title.includes(wordSearch));
    setBooks(filteredResults);
  };

  useEffect(() => {
    filterResults();
  }, [wordSearch]);

  return (
    <div className="container">
      <NavAside />

      <div className="row justify-content-center">

        <div className="col-lg-4 col-md-8 col-sm-8 mt-2">
          <form className="search-form">
            <input type="search" className="rounded-pill p-3" placeholder="Search to your best books..." value={wordSearch} onChange={e => setWordSearch(e.target.value)} />
          </form>
        </div>

      </div>

      <div className="row justify-content-center mt-2">
        <div className="bookslist col-lg-6 col-md-4 col-sm-8 mt-5">

          {
            books.map(book => (
              <div className="row books my-3 shadow rounded" key={book.id}>
                <div className="col-4 text-center mt-3">
                  <img src={`http://127.0.0.1:8000/storage/${book.image}`} width="100" alt={`images${book.id}`} className="rounded shadow" />
                  <h6 className="fw-bold mt-2"><i>{book.title}</i></h6>
                </div>
                <div className="col row mt-3">
                  <p className="col"><i className="fw-bold">Auteur:</i>{book.name_author}</p>
                  <p className="col"><i className="fw-bold">Post-Date:</i>{book.post_date}</p>
                  <small className="row"><i className="fw-bold">Description:</i>{book.denscription}</small>
                  <a href={book.url_install} className="row btn btn-dark text-warning mb-2 mt-4">installe</a>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}
export default Listbook;





























































{/* <div className="row books m-3">
    <img src={img} className="col-2"/>
    <div className="col-6 p-details">
        <h2>Nom book</h2>
        <NavLink><button className="btn btn-dark text-warning">installe</button></NavLink>
    </div>
</div> */}
