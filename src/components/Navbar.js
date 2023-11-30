import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Virtual", link: "/" },
    { name: "My learning", link: "/" },
    { name: "Scholarship", link: "/" },
    { name: "Search", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-1 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
           text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Zentrix
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>
            {" "}
            <a href="/signup">Sign up</a>
          </Button>
          <Button className="bg-white">
            <a href="/login"> Login</a>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link style={{marginLeft: "3%", fontWeight:"bolder"}} to='/' class="navbar-brand" href="#">
              Zent<span style={{color: "plum"}}>rix</span>
            </Link>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link style={{backgroundColor:"rgb(72, 19, 146)", color:"white", borderRadius:"5px", padding: "8px"}} to='/' class="nav-link ms-auto " aria-current="page" href="#">
                  Home
                </Link>

              </li>
              <li class="nav-item">
                <Link to='/Login' class="nav-link" href="#">
                  My learning
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/register' class="nav-link " aria-disabled="true">
                  Vitual
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/category' class="nav-link" aria-disabled="true">
                  Scholarship
                </Link>
              </li>
            </ul>
             <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> 
            <button style={{backgroundColor:"orange"}} class="btn btn-bg-warning ms-auto" type="submit">
                Signup
              </button>
              <button class="btn btn-bg-warning" type="submit">
                Login
              </button>
          </div>
        </div>
      </nav> */
}
{
  /* 
      <nav className="p-2.5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[poppins] text-black">Zentrix</span>
          <span className="text-3xl cursor-pointer md:hidden block">
            <ion-icon nameame="menu" onClick={handleMenu}></ion-icon>
          </span>
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 
        py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0 ">
            <a href="" className="text-xl hover:text-purple-500 duration-500">Home</a>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-purple-500 duration-500">Home</a>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-purple-500 duration-500">Home</a>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-purple-500 duration-500">Home</a>
          </li>

          <button className="bg-orange-400 text-white font-[poppins] duration 500 px-6 py-2 mx-4 hover:bg-orange-400 rounded"><a href="/signup">Signup</a></button>

          <button className="bg-orange-400 text-white font-[poppins] duration 500 px-6 py-2 mx-4 hover:bg-orange-400 rounded"><a href="/login">Login</a></button>
        </ul>

      </nav> */
}
