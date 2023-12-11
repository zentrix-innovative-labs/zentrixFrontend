<<<<<<< HEAD
import React from 'react'
import image from './assets/image.png'
import { FadeIn } from './FadeIn'

const Info = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10'>
        <div className=' flex flex-col justify-center'>
            <h1 className='font-bold text-3xl md:text-5xl py-6 text-black'>Why Zentrix Tech?</h1>
            <p className='text-gray-500'>At Zentrix Tech, we believe that technology should be accessible to everyone, regardless of their level of expertise. We're assionate about making the world of tech user-friendly, intuitive, and exciting for beginners and seasoned tech enthusiasts</p>
               <div>
                  <h3 className='font-bold py-4 text-2xl md:text-3xl text-black'>Our Mission</h3>
                    <p className='text-gray-500'>Our mission is simple: to empower individuals with the tools and knowledge they need to thrive in the digit age. We understand that the world of technology can sometimes feel overwhelming, which is why we're dedicated to creating a welcoming and supportive environment for beginners.</p>
               </div>
                   <div>
                        <h3 className='font-bold py-4 text-2xl md:text-3xl text-black'>What Sets Us Apart</h3>
                        <p className='text-gray-500'>What makes Zentrix Tech unique is our commitment to catering to beginners. We specialize in creating user-friendly products, providing easy-to-follow tutorials, and offering personalized support to ensure that everyone feels confident and capable when using our technology.</p>
                    </div>
=======
import React from "react";
import image from "../components/assets/image.png";
import { FadeIn } from "./FadeIn";

const Info = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10">
        <div className=" flex flex-col justify-center">
          <h1 className="font-bold text-3xl md:text-5xl py-6">
            Why Zentrix Tech?
          </h1>
          <p className="text-gray-500">
            At Zentrix Tech, we believe that technology should be accessible to
            everyone, regardless of their level of expertise. We're assionate
            about making the world of tech user-friendly, intuitive, and
            exciting for beginners and seasoned tech enthusiasts
          </p>
          <div>
            <h3 className="font-bold py-4 text-2xl md:text-3xl">Our Mission</h3>
            <p className="text-gray-500">
              Our mission is simple: to empower individuals with the tools and
              knowledge they need to thrive in the digit age. We understand that
              the world of technology can sometimes feel overwhelming, which is
              why we're dedicated to creating a welcoming and supportive
              environment for beginners.
            </p>
          </div>
          <div>
            <h3 className="font-bold py-4 text-2xl md:text-3xl">
              What Sets Us Apart
            </h3>
            <p className="text-gray-500">
              What makes Zentrix Tech unique is our commitment to catering to
              beginners. We specialize in creating user-friendly products,
              providing easy-to-follow tutorials, and offering personalized
              support to ensure that everyone feels confident and capable when
              using our technology.
            </p>
          </div>
>>>>>>> 13c7fe516ff7b4449549fdfe0ebdc85c93ae24ed
        </div>
        <FadeIn delay={0.3} direction={"down"}>
          <div className="md:mt-20 mt-2">
            <img className="w-30 rounded-lg" src={image} alt="img" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Info;
