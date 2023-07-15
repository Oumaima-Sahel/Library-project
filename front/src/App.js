import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./Admin/Login";
import Sinup from "./Admin/Sinup";
import AdminList from "./Admin/AdminList";
import CreateBook from "./Admin/CreateBook";
import EditBook from './Admin/EditBook';
import Listcateg from './Admin/Listcateg';
import DetailsBook from './Admin/DetailsBook';

import Dachbord from "./User/Dachbord";
import Listbook from "./User/Listbook";
import Category from "./User/Category";
import NavAside from "./User/NavAside";


function App() {
  return(
    <div className='row'>
      <BrowserRouter className="bg-dark ">
        
        <Routes>
          {/* Admin */}
          <Route path="/Login" element={<Login/>} />
          <Route path="/Sinup" element={<Sinup/>} />
          <Route path="/AdminList" element={<AdminList/>} />
          <Route path="/CreateBook" element={<CreateBook/>} />
          <Route path="/EditBook/:id" element={<EditBook />} />
          <Route path="/Listcateg" element={<Listcateg />} />
          <Route path="/DetailsBook/:id" element={<DetailsBook />} />
          {/* User */}
          <Route path="/" element={<Dachbord/>} />
          <Route path="/Listbook" element={<Listbook/>} />
          <Route path="/Category" element={<Category/>} />
          <Route path="/NavAside" element={<NavAside/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
