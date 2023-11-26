"use client"
import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function FooterPage() {
  return (
    <main className='px-[4rem] mt-14 bg-yellow-50 h-[40%]'>
    <div className='flex gap-[24rem] '>
      <span>
<p className='font-bold'>INFORMATION</p>
<ul>
<li className='mt-3'>Home</li>
<li className='mt-3'>Blog</li>
<li className='mt-3'>About Us</li>
<li className='mt-3'>Menu</li>
<li className='mt-3'>Contact Us</li>
</ul>
      </span>
      <span>
        <p className='font-bold'>TOP ITEMS</p>
        <ul>
  <li className='mt-3'>Peperoni</li>
<li className='mt-3'>Swiss Mushroom</li>
<li className='mt-3'>Barbeque Chicken</li>
<li className='mt-3'>Vegetarian</li>
<li className='mt-3'>Ham and Cheese</li>
</ul>
      </span>
      <span>
        <p className='font-bold'>OTHERS</p>
        <ul>
<li className='mt-3'>Checkout</li>
<li className='mt-3'>Cart</li>
<li className='mt-3'>Product</li>
<li className='mt-3'>Locations</li>
<li className='mt-3'>Legal</li>
</ul>
      </span>
      <span>
        <p className='font-bold'>SOCIAL MEDIA</p>
        <span className='flex gap-4'> 
        <FaFacebookF className='h-10 w-10 text-white bg-blue-900 mt-8'/>
        <FaPinterestP className='h-10 w-10 text-white  bg-red-700 mt-8' />
                  <IoLogoTwitter className='h-10 w-10 text-white bg-blue-600 mt-8'/>
                  <CiInstagram  className='h-10 w-10 text-white  bg-red-400 mt-8'/>
                  </span>
                  <p className='mt-3'>Signup and get executive offers and coupon</p>
                  <p>codes</p>
                  <button className='rounded-full h-10 w-32 text-white bg-yellow-500 mt-6'>SIGN UP</button>
      </span>
    </div>
  </main>
)
}

  

