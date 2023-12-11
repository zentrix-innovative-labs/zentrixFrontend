import React from "react";

const Button = (props) => {
  return (
<<<<<<< HEAD
    <button className='bg-purple-500 w-30 text-white font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
=======
    <button
      className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400
    duration-500"
    >
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
      {props.children}
    </button>
  );
};

export default Button;
