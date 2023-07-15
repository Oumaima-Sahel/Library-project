import { NavLink, useNavigate } from "react-router-dom";
import imgbook from "../Image/library.svg";
import { useEffect, useState } from "react";

function CreateBook() {

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
  // creat book :
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

  //===> to get image <===//
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);

  const imageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    setPhoto(e.target.files[0])
  };

  const [img, setImg] = useState(null);
  useEffect(() => {
    const formData = new FormData();
    formData.append('image', photo)
    fetch("http://127.0.0.1:8000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(data => setImg(data.image))
      .catch(error => console.log(error))
  }, [photo])

  // ===============================================================

  const createBook = (e) => {
    e.preventDefault();
    const data = {
      title,
      name_author: author,
      denscription: descript,
      post_date: postdate,
      category_id: Number(categ),
      language_id: Number(language_id),
      url_install: url,
      image: img,
    }
    console.log(data);
    fetch("http://127.0.0.1:8000/api/books", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(re => re.json())
      .catch(error => console.log(error))
      .then(() => navigate('/AdminList'))
  }

  const createCategory = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/categories", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
      },
      body: JSON.stringify({ name })
    })
      .then(re => re.json())
      .catch(error => console.log(error))
      .then(() => navigate('/Listcateg'))
  }

  return (
    <div className="container">

      <div className="row justify-content-center mt-5">
        <div className="bookslist col-lg-6 col-md-8 col-sm-8 col-xl-6">
          {/* Create Book */}
          <form className="row books mt-3 shadow " onSubmit={createBook}>
            <div className="col-4 text-center mt-3">
              {file ? (  <img  src={file}  className="card ml-4" width={100} /> ) : ( <img  src={imgbook}  alt="test"  className="col-lg-8 col-md-4 col-sm-2 p-4"/> ) }
              <input  id="files"  type="file"  onChange={imageChange} />
              <label htmlFor="title" className="fw-bold mt-4">Titre</label><br />
              <input className="col mb-5 rounded-pill shadow-none" type='text' value={title} onChange={TitleChange} placeholder="title of book" required />
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

              <div className="col-6">
                <label htmlFor="Language" className="fw-bold mt-4">Language:</label><br />
                <select className="col rounded-pill shadow-none h-50 w-50 border border-1" type='text' onChange={setLanguage_idChange} value={language_id} placeholder="Language" required>
                  {
                    Language.map(Language => <option value={Language.id}>{Language.name}</option>)

                  }
                </select>
              </div>
              <br />

              <div className="col-6">
                <label htmlFor="Categories" className="fw-bold mt-4">Category:</label><br />
                <select className="col rounded-pill shadow-none h-50 border border-1" type='text' placeholder="Categories-id" required value={categ} onChange={CategChange}>
                  {
                    category.map(category => <option value={category.id}>{category.name}</option>)

                  }
                </select>
              </div>
              <br />

              <div className="mt-4">
                <label htmlFor="Description" className="fw-bold">Description:</label><br />
                <input className="row rounded-pill shadow-none" value={descript} onChange={DescriptChange} type='text' placeholder="Description" required />
              </div>
              <br />

              <div>
                <label htmlFor="Url" className="fw-bold">Url:</label><br />
                <input className="row rounded-pill shadow-none" value={url} onChange={UrlChange} type="url" placeholder="Enter your Url" required />
              </div>

            </div>

            <div className="row justify-content-end">
              <button className="col-2 btn btn-dark mb-4 mt-2 text-warning">Add Book</button>
            </div>
          </form>

          <hr className="m-4 border border-4 border-dark rounded" />
          {/* Create Category */}
          <form className="row category mt-3 shadow mb-4" onSubmit={createCategory}>
            <div className="col-6 m-3">
              <label htmlFor="category" className="fw-bold">Category Name:</label>
              <input type="text" className="col rounded-pill shadow-none" value={name} onChange={setCategoriChange} placeholder="Category Name" required />
            </div>
            <div className="row justify-content-end ">
              <button className="col-2 btn btn-dark mb-4 text-warning">Add Category</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateBook;

