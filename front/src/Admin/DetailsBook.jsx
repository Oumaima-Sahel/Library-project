import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsBook() {

    const { id } = useParams()
    // Book ========>
    const [books, setBooks] = useState("");
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBooks(data))
    },[])


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8 col-sm-8 col-xl-6">
          <h1>Detaill Book</h1>
          <div className="row books my-3 shadow rounded" key={books.id}>
            <div className="col-4 text-center mt-3">
              <img src={`http://127.0.0.1:8000/storage/${books.image}`} alt={`images${books.id}`} width="180" className="rounded shadow" />
              <h6 className="fw-bold mt-2"><i>{books.title}</i></h6>
            </div>
            <div className="col row mt-3">
              <p className="col-6"><i className="fw-bold">Auteur:</i>{books.name_author}</p>
              <p className="col-6"><i className="fw-bold">Post-Date:</i>{books.post_date}</p>
              <p className="col-6"><i className="fw-bold">Category:</i>{books.category_id}</p>
              <p className="col-6"><i className="fw-bold">Language:</i>{books.language_id}</p>
              <p className="col-6"><i className="fw-bold">Created:</i>{books.created_at}</p>
              <p className="col-6"><i className="fw-bold">Updated:</i>{books.updated_at}</p>
              <small className="row mb-5"><i className="fw-bold">Description:</i>{books.denscription}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsBook;
