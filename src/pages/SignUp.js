import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    
   
    <section style={{height: "570px", width: "1000px"}} class="skewbox">
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

      <div style={{borderBottom: "570px solid transparent"}} class="imagebox">
        <form action="" onSubmit={handleSubmit}>
          <div  style={{marginBottom: "-8px"}} className="form_container">
            <div style={{marginBottom: "-8px"}} className="btnss">
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

            <div className="TheInput">
            <div>
              <input 
                class="input"
                type="text"
                name="fullname"
                required="required"
                placeholder="full Name"
              />
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

            <div>
              <input
                class="input"
                type="text"
                name="Gender"
                required="required"
                placeholder="Gender"
              />
            </div>

            <div>
              <input
                class="input"
                type="text"
                name="username"
                required="required"
                placeholder="Public username"
              />
            </div>

            <div>
              <input
                class="input"
                type="text"
                name="Country"
                required="required"
                placeholder="Country"
              />
            </div>


            </div>
          <div>
  <h5>
    <input type="checkbox" /> I agree that Zentrix may mail marketing
    messages
  </h5>
  <h5 className="h5class">By creating an account, you agree to the <span style={{color: 'purple'}}>terms and Service and <br /> Honor Code</span> and you
    acknowledge that Zentrix and each member <br /> process your  personal data in accordance with <span style={{color: 'purple'}}>Privacy Policy</span></h5>
  <button className="green_btn">
    <a style={{textDecoration: 'none',paddingTop: "4px", width:"180px", height:"11px",padding:"23%", color:"black"}} href="/login">signup</a>
  </button>
</div>

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

export default Signup;
