import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    
   
    <section class="skewbox">
      <div class="content">
        <div class="left">
          <div class="button">
            <button style={{color: "black", fontWeight: "900px"}}  className="white_btn">
              <a href="/">Zent<span style={{color: "plum"}}>rix</span></a>
            </button>
          </div>

          <div class="learning">
            <h1 style={{paddingTop: "30px"}}>
              Start <br />
              learning
              <br />
              with <span style={{color: "orange"}}> zentrix</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="imagebox">
        <form action="" onSubmit={handleSubmit}>
          <div  className="form_container">
            <div className="btnss">
              <a
                class="btn1"
                style={{   textDecoration: "underlined",
                  color: "black",
                  fontWeight: "900"}}
             
              
                href="/signup"
              >
                Register
              </a>

              <a
                class="btn1"
                style={{textDecoration: "none", color: "black",fontWeight: "900"}}
                href="/login"
              >
                Login
              </a>
            </div>

            <div>
              <input
                class="input"
                type="email"
                name="email"
                required="required"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                class="input"
                type="password"
                name="password"
                required="required"
                placeholder="password"
              />
            </div>

            <button class="green_btn">
              <a style={{textDecoration: "none"}} href="/login">
                Login
              </a>
            </button>

            <a
              style={{paddingLeft: "35px", textDecoration: "none", color: "purple"}}
              href=""
            >
              forgot password
            </a>
          </div>
        </form>
        <div class="social-media">
          <a href="#">
            <i class="bx bxl-google"></i>
          </a>
          <a href="#">
            <i class="bx bxl-apple"></i>
          </a>
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
      </div>
    </section>
   
  );
};

export default Login;
