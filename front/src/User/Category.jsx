import { useEffect, useState } from "react";
import NavAside from "./NavAside";

function Category() {

  const [category_id, setCategory_id] = useState(1);
  const [language_id, setLanguage_id] = useState(1);

  // read category
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories')
      .then((re) => re.json())
      .then((data) => setCategories(data));
  }, []);

  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/languages')
      .then((re) => re.json())
      .then((data) => setLanguages(data));
  }, []);

  // read books
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/books')
      .then(re => re.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="container">
      <NavAside />
      <div className="row justify-content-center">

        <div className="col-lg-4 col-md-8 col-sm-8 mt-5">
          <form className="search-form">
            <input type="search" className="rounded-pill shadow-none" placeholder="search to your best books..." id="search-item" onkeyup="search()" />
          </form>
        </div>

        <div className="row justify-content-center mt-2">
          <form className="row m-3 text-center">

            <div className="col-2"></div>

            <div className="col ">
              <select className="w-75 form-select rounded-pill shadow-none" value={category_id} onChange={(e) => setCategory_id(e.target.value)} >
                {categories.map((categ) =>
                  <option key={categ.id} value={categ.id}>{categ.name}</option>
                )}
              </select>
            </div>

            <div className="col ">
              <select className="w-75 form-select rounded-pill shadow-none" value={language_id} onChange={(e) => setLanguage_id(e.target.value)}>
                {languages.map((lang) =>
                  <option key={lang.id} value={lang.id}>{lang.name}</option>
                )}
              </select>
            </div>
          </form>
          {/* List Book */}
          {books.map(book => (
            book.category_id == category_id && book.language_id == language_id ?
              <div className="row books my-3 shadow rounded w-75 m-auto" key={book.id}>
                <div className="col-4 text-center mt-3">
                  <img src={`http://127.0.0.1:8000/storage/${book.image}`} width="100" className="rounded shadow" />                  <h6 className="fw-bold mt-2"><i>{book.title}</i></h6>
                </div>
                <div className="col row mt-3">
                  <p className="col"><i className="fw-bold">Auteur:</i>{book.name_author}</p>
                  <p className="col"><i className="fw-bold">Post-Date:</i>{book.post_date}</p>
                  <small className="row"><i className="fw-bold">Description:</i>{book.denscription}</small>
                  <a href={book.url_install} className="row btn btn-dark text-warning mb-4 mt-4">installe</a>
                </div>
              </div>
              : null
          ))}

        </div>
      </div>
    </div>
  );
}

export default Category;
