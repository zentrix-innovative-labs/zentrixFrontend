import React from "react";

const Button = (props) => {
  return (

    <button className='bg-purple-500 w-30 text-white font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'> 

    <button
      className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400
    duration-500"
    > </button>

      {props.children}
    </button>
  );
};

export default Button;
