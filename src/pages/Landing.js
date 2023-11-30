import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Product from "../components/Product";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Info />
      <Product />
    </div>
  );
};

export default Landing;
