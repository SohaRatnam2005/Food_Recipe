import React from "react";
import foodIMage from "../assets/pexels-kue-lee-349967-1093015.jpg"

export default function About() {
  return (
    <div className="max-w-4xl my-3 mx-auto px-6 py-12 text-gray-800">
    <img src={foodIMage} className="brightness-50 h-100 w-500 " />
      <h1 className="text-8xl my-5 font-bold mb-6 text-center ">ABOUT US....</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">Soha's Food Blog</span> – your
        go-to destination for delicious, easy-to-follow recipes from around the world.
        Our goal is to bring you tasty meals that anyone can make at home.
      </p>
      <p className="mb-4">
        Whether you’re a seasoned chef or just starting out, we believe cooking should be fun, 
        creative, and full of flavor. Here, you’ll find recipes, cooking tips, and food stories 
        that inspire you to try something new in the kitchen.
      </p>
      <p className="mb-4">
        Thank you for being part of our food-loving community. Let’s cook something amazing together!
      </p>
      <p>Contact us via instagram , linkedin or email </p>
      <p> contact number - 89XXXXXXXXX </p>
    </div>
  );
}
