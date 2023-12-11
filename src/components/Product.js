import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
<<<<<<< HEAD

=======
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
import "../components/style/Product.css";
import frontend from "./assets/Frontend Development.png";
import backend from "./assets/Backend Development.png";
import datascience from "./assets/Data Science.png";
import productdesign from "./assets/Product Design.png";
import digital from "./assets/Digital Marketing.png";
import analysis from "./assets/Data Analysis.png";
import quality from "./assets/Quality Assurance.png";
import cyber from "./assets/Cyber Security.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed

const Product = () => {
  const Strikethrough = { textDecoration: "line-through" };
  const [rating, setRating] = useState(0);
  const currentRating = (n) => {
    const str = n.toString();
    const num = str[0];
    const rat = parseInt(num);
    setRating(rat);
  };
  return (
    <FadeIn delay={0.3} direction={"right"}>
      <div className="kick-start">
        <div className="kick">
          <h1 className="kick-text">Kick start your tech career</h1>
        </div>
        <div className="career-page">
          <div className="career-image">
            <img src={frontend} alt="Frontend" />
            <div className="career-details">
<<<<<<< HEAD
              <Link to="/Form"><h2>Front End Development</h2></Link>
=======
              <h2>Front End Development</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">4.0</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(4)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(657 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $65.00
                  <span style={Strikethrough} className="dis-price">
                    $78.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={backend} alt="Backend" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>BackendEnd Development</h2></Link>
=======
              <h2>Back End Development</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">3.5</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(3.5)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(765 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $95.00
                  <span style={Strikethrough} className="dis-price">
                    $108.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={datascience} alt="Data" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>Data Science</h2></Link>
=======
              <h2>Data Science</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">4.5</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(4.5)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(897 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $55.00
                  <span style={Strikethrough} className="dis-price">
                    $98.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={productdesign} alt="Product" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>Product Design</h2></Link>
=======
              <h2>Product Design</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">3.5</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(3.5)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(987 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $65.00
                  <span style={Strikethrough} className="dis-price">
                    $78.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={digital} alt="Digital" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>Digital Marketing</h2></Link>
=======
              <h2>Digital Marketing</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">2.5</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(2.5)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(897 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $78.00
                  <span style={Strikethrough} className="dis-price">
                    $109.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={analysis} alt="Analysis" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>Data Analysis</h2></Link>
=======
              <h2>Data Analysis</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">4.0</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(4.0)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(897 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $65.00
                  <span style={Strikethrough} className="dis-price">
                    $78.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={quality} alt="Quality" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>Quality Assurance</h2></Link>
=======
              <h2>Quality Assurance</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">3.5</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(3.5)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(526 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $35.00
                  <span style={Strikethrough} className="dis-price">
                    $57.00
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="career-image">
            <img src={cyber} alt="Cyber" />
            <div className="career-details">
<<<<<<< HEAD
            <Link to="/Form"><h2>cyber security</h2></Link>
=======
              <h2>Cyber Security</h2>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
              <p className="text-color">Zentrix Tech Team</p>
              <div className="rate-num">
                <p className="rate-text">4.0</p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => currentRating(4.0)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="rating">(467 Rating)</p>
                </div>
              </div>
              <div>
                <p className="price">
                  $88.00
                  <span style={Strikethrough} className="dis-price">
                    $109.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Product;
