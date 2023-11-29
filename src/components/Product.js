import React, { useState } from "react";
// import "../assets/Product.css";

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
    <section className="kick-start">
      <div className="kick">
        <h1 className="kick-text">Kick start your tech career</h1>
      </div>
      <div className="career-page">
        <div className="career-image">
          <img src="../images/Frontend Development.png" alt="Frontend" />
          <div className="career-details">
            <h2>Front End Development</h2>
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
          <img src="../images/Backend Development.png" alt="Backend" />
          <div className="career-details">
            <h2>Back End Development</h2>
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
          <img src="../images/Data Science.png" alt="Data" />
          <div className="career-details">
            <h2>Data Science</h2>
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
          <img src="../images/Product Design.png" alt="Product" />
          <h2>Product Design</h2>
          <div className="career-details">
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
          <img src="../images/Digital Marketing.png" alt="Digital" />
          <div className="career-details">
            <h2>Digital Marketing</h2>
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
          <img src="../images/Data Analysis.png" alt="Analysis" />
          <div className="career-details">
            <h2>Data Analysis</h2>
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
          <img src="../images/Quality Assurance.png" alt="Quality" />
          <div className="career-details">
            <h2>Quality Assurance</h2>
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
          <img src="../images/Cyber Security.png" alt="Cyber" />
          <div className="career-details">
            <h2>Cyber Security</h2>
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
    </section>
  );
};

export default Product;
