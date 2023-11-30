import React from "react";
import lock from "../components/assets/lock.jpg";
import { FadeIn } from "./FadeIn";

const Banner = () => {
  return (
    // <div className="banner">
    //   {/* <i class="fa fa-lock" aria-hidden="true"></i> */}

    //   <h1 style={{color:"white", fontSize:"50px"}}>
    //     Kick start your free <br /> tech career with us
    //   </h1>
    //   <p>
    //     Get ready to lunch into the tech universe with us! Discover <br />
    //     an exhilarating opportunity to kickstart your journey in tech. <br /> our
    //     beginner-friendly learning platform is lunchpad, and we <br />are ecstatic to
    //     have you on board for an incredible adventure
    //   </p>
    //   <button onClick={() => console.log("connect")}>
    //     start learning now{" "}
    //   </button>

    //   <div className='md:mt-20 mt-2'>
    //         <img className='w-30 rounded-lg' src={lock} alt='img' />
    //     </div>

    // </div>

    <div className="w-full linear-gradient(90.21deg, rgba(72, 19, 146) -5.91%, rgb(31, 4, 69) 111.58%); py-16 px-4 h-600">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10">
        <FadeIn delay={0.3} direction={"left"}>
          <div className=" flex flex-col justify-center ml-14">
            <h1 className="text-white font-bold text-3xl md:text-5xl py-6 ">
              Kick start your tech <br /> career with us
            </h1>
            <p className="text-white">
              {" "}
              Get ready to lunch into the tech universe with us! Discover <br />
              an exhilarating opportunity to kickstart your journey in tech.{" "}
              <br /> our beginner-friendly learning platform is lunchpad, and we{" "}
              <br />
              are ecstatic to have you on board for an incredible adventure
            </p>

            <button
              className=" bg-orange-400 mt-20 w-40 text-white border-radius-5 rounded"
              onClick={() => console.log("connect")}
            >
              start leanring
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction={"right"}>
          <div className="md:mt-20 mt-2">
            <img className="w-80 h-150 rounded-lg" src={lock} alt="img" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Banner;
