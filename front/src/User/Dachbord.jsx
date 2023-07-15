import React from "react";
import NavAside from "./NavAside";
import img from "../Image/library.svg";
import { NavLink } from "react-router-dom";


function Dachbord() {

  
  return (
    <div className="container">
      <NavAside />


      <div className="d-flex mt-5 mb-5">
        <div className="col-2"></div>
        <div className="justify-content-center">
         <img src={img} className="col-8" /> 
        </div>
        <div className="col"></div>
        <div className="col-5">
          <h1 className="">Find Your Ideal Books Heare</h1>
          <p className="container fs-5">welcome,here you will find all the types<br /> of books you need in pdf format</p>
          <NavLink to="/Listbook"><button className="btn btn-dark text-warning mt-5 w-25">Search </button></NavLink>
        </div>
      </div>

      <footer className="row justify-content-center mt-5">
        <p className="credit col-lg-4 col-md-8 col-sm-8 mt-5">created by<i className="fw-bold">Sahel Oumaima & Soukaina Imillou</i> | all rights reserved!</p>
      </footer>
     
    </div>
  );
}
export default Dachbord;





