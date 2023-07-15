import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditBook() {

  const [title, setTitle] = useState("");
  const TitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [author, setAuthor] = useState("");
  const AuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const [postdate, setPostdate] = useState("");
  const PostdateChange = (e) => {
    setPostdate(e.target.value);
  };
  const [descript, setDescript] = useState("");
  const DescriptChange = (e) => {
    setDescript(e.target.value);
  };
  const [url, setUrl] = useState("");
  const UrlChange = (e) => {
    setUrl(e.target.value);
  };
  const [categ, setCateg] = useState(1);
  const CategChange = (e) => {
    setCateg(e.target.value);
  };
  const [name, setCategori] = useState('');
  const setCategoriChange = (e) => {
    setCategori(e.target.value);
  };
  const [language_id, setLanguage_id] = useState(1);
  const setLanguage_idChange = (e) => {
    setLanguage_id(e.target.value);
  };
  // ===============================================================
  const [category, setCategory] = useState([]);
  useState(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then(re => re.json())
      .then(data => setCategory(data))
  }, [])
  const [Language, setLanguage] = useState([]);
  useState(() => {
    fetch("http://127.0.0.1:8000/api/languages")
      .then(re => re.json())
      .then(data => setLanguage(data))
  }, [])

  const navigate = useNavigate()
  const { id } = useParams()
  //===> to get image <===// // ===========================================
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);

  const imageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    setPhoto(e.target.files[0])
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append('image', photo)
    fetch("http://127.0.0.1:8000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(data => setPhoto(data.image))
      .then(data => console.log(data.image))
      .catch(error => console.log(error))
  }, [photo])
  // ===========================================
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`)
      .then(re => re.json())
      .then(data => {
        setTitle(data.title)
        setAuthor(data.name_author)
        setDescript(data.denscription)
        setPostdate(data.post_date)
        setCateg(data.category_id)
        setLanguage_id(data.language_id)
        setUrl(data.url_install)
        setPhoto(data.image)
      })
  }, [])

  const editBook = (e) => {
    e.preventDefault();
    const data = {
      title,
      name_author: author,
      denscription: descript,
      post_date: postdate,
      category_id: Number(categ),
      language_id: Number(language_id),
      url_install: url,
      image: photo,
    }
    console.log(data);
    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(() => navigate('/AdminList'))
  }

  return (
    <div className="container">

      <div className="row justify-content-center mt-5">
        <div className="bookslist col-lg-6 col-md-8 col-sm-8 col-xl-6 mt-5">
          {/* Edit Book */}
          <h1>Edit book</h1>
          <form className="row books mt-3 shadow " onSubmit={editBook}>
            <div className="col-4 text-center mt-3">
              {file ? (
                <img src={file} className="col-lg-8 col-md-4 col-sm-2"  />) : (
                <img src={`http://127.0.0.1:8000/storage/${photo}`} className="p-2 rounded-4" width={150} />  )}
              <input id="files" type="file" onChange={imageChange}/>
              <label htmlFor="title" className="fw-bold mt-4">Titre</label><br />
              <input className="col  mb-5 rounded-pill shadow-none" type='text' value={title} onChange={TitleChange} placeholder="title of book" required />
            </div>
            <div className="col"></div>
            <div className="col-8 row mt-3">

              <div className="col-6">
                <label htmlFor="Auteur" className="fw-bold mt-4">Auteur:</label><br />
                <input className="col rounded-pill shadow-none" value={author} onChange={AuthorChange} type='text' placeholder="Write the name of the author" required />
              </div>
              <br />

              <div className="col-6">
                <label htmlFor="Post-Date" className="fw-bold mt-4">Publishe date:</label><br />
                <input className="col rounded-pill shadow-none" value={postdate} onChange={PostdateChange} type='text' placeholder="publish date" required />
              </div>
              <br />

              <div className="col-6 mb-4">
                <label htmlFor="Language" className="fw-bold mt-4">Language:</label><br />
                <select className="col rounded-pill shadow-none h-50 w-75 border border-1" type='text' onChange={setLanguage_idChange} value={language_id} placeholder="Language" required>
                  {
                    Language.map(Language => <option value={Language.id}>{Language.name}</option>)

                  }
                </select>
              </div>
              <br />

              <div className="col-6 mb-4">
                <label htmlFor="Categories" className="fw-bold mt-4">Category:</label><br />
                <select className="col rounded-pill shadow-none h-50 w-75 border border-1" type='text' placeholder="Categories-id" required value={categ} onChange={CategChange}>
                  {
                    category.map(category => <option value={category.id}>{category.name}</option>)

                  }
                </select>
              </div>
              <br />

              <div className=" mb-4">
                <label htmlFor="Description" className="fw-bold">Description:</label><br />
                <input className="row rounded-pill shadow-none" value={descript} onChange={DescriptChange} type='text' placeholder="Description" required />
              </div>
              <br />

              <div className="mb-4">
                <label htmlFor="Url" className="fw-bold">Url:</label><br />
                <input className="row rounded-pill shadow-none" value={url} onChange={UrlChange} type="url" placeholder="Enter your Url" required />
              </div>

            </div>

            <div className="col-12 row justify-content-end mb-4">
              <button className="col-2 btn btn-dark text-warning">Save</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditBook;


