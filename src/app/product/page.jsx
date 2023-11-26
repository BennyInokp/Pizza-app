"use client"
import React from 'react'
import { GoFilter } from "react-icons/go";
import Image from 'next/image';

export default function ProductPage() {
  return (
    <main className='px-[4rem] mt-10 '>
      <div className='flex gap-[80rem]'>
        <span className='flex bg-yellow-500 rounded-full h-7 w-[5rem] gap-1'>
        <GoFilter  className='mt-1 ml-3 text-white'/>
        <p className='text-white mr-2'>Filter</p>
        </span>
        <span className='flex gap-8'>
<p className='font-bold '>Showing all 9 results</p>

<select class=" border border-3 form-select pr-[5rem]" id="Default sorting" name="Default sorting"> 
            <option>Default sorting</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
</select>

        </span>
      </div>
      <div className='flex gap-[2rem] mt-10 '> 
      
      <span  className='  bg-white rounded-md border border-3 w-[40%] h-[28rem]'> 
    <Image
            src="/bread1.png"
            alt="pizza"
            className=' -ml-[20px] -mb-[12] '
            width={280}
            height={13}
            priority
          />
          
            <span className='flex gap-32'>
          <p className='text-[16px] font-bold'>Burger pizza</p>
          <p className=' text-[12px] mt-1 text-red-500'>$65:00</p>
            </span>
<span className='flex mt-4'>
<Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
</span>
<p className='text-[14px] font-semibold mt-4'>This is burger pizza</p>
<span className='flex bg-yellow-500 text-white h-10 w-40 gap-2 rounded-full mt-4'> 
    
    <Image
                src="/whitecart.png"
                alt="cart"
                className=' h-12 w-10 '
                width={10}
                height={7}
                priority
              />
    <button className='text-[14px]'>ORDER NOW</button>
    </span>
    </span>

    <span className= '  bg-white rounded-md border border-3  w-[40%] h-[28rem]'>
    <Image
            src="/bread1.png"
            alt="pizza"
            className=' -ml-[20px] -mb-[12] '
            width={280}
            height={13}
            priority
          />
          
            <span className='flex gap-32'>
          <p className='text-[16px] font-bold'>Burger pizza</p>
          <p className=' text-[12px] mt-1 text-red-500'>$65:00</p>
            </span>
<span className='flex mt-4'>
<Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
</span>
<p className='text-[14px] font-semibold mt-4'>This is burger pizza</p>
<span className='flex bg-yellow-500 text-white h-10 w-40 gap-2 rounded-full mt-4'> 
    
    <Image
                src="/whitecart.png"
                alt="cart"
                className=' h-12 w-10 '
                width={10}
                height={7}
                priority
              />
    <button className='text-[14px]'>ORDER NOW</button>
    </span>
    </span>

    <span className='  bg-white h-[28rem] w-[40%] border border-3 rounded-md' >

    <Image
            src="/pizza1.png"
            alt="pizza"
            className=''
            width={220}
            height={13}
            priority
          />
          
            <span className='flex gap-32 mt-8'>
          <p className='text-[16px] font-bold '>New pizza</p>
          <p className=' text-[12px] mt-1.5 text-red-500'>$65:00</p>
            </span>
<span className='flex mt-4'>
<Image
                src="/star.png"
                alt="cart"
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
              <Image
                src="/star.png"
                alt="cart"
                className=' h-6 w-5 '
                width={10}
                height={7}
                priority
              />
</span>
<p className='text-[14px] font-semibold mt-4'>This is a new pizza</p>
<span className='flex bg-yellow-500 text-white h-10 w-40 gap-2 rounded-full mt-4'> 
    
    <Image
                src="/whitecart.png"
                alt="cart"
                className=' h-12 w-10 '
                width={10}
                height={7}
                priority
              />
    <button className='text-[14px]'>ORDER NOW</button>
    </span>
    </span>
  
    </div>
    <div className='  bg-white h-[28rem] w-[32%]  border border-3 rounded-md mt-10' >
  
  <Image
          src="/pizza1.png"
          alt="pizza"
          className=''
          width={220}
          height={13}
          priority
        />
        
          <span className='flex gap-32 mt-8'>
        <p className='text-[16px] font-bold '>New pizza</p>
        <p className=' text-[12px] mt-1.5 text-red-500'>$65:00</p>
          </span>
<span className='flex mt-4'>
<Image
              src="/star.png"
              alt="cart"
              width={10}
              height={7}
              priority
            />
            <Image
              src="/star.png"
              alt="cart"
              className=' h-6 w-5 '
              width={10}
              height={7}
              priority
            />
            <Image
              src="/star.png"
              alt="cart"
              className=' h-6 w-5 '
              width={10}
              height={7}
              priority
            />
            <Image
              src="/star.png"
              alt="cart"
              className=' h-6 w-5 '
              width={10}
              height={7}
              priority
            />
            <Image
              src="/star.png"
              alt="cart"
              className=' h-6 w-5 '
              width={10}
              height={7}
              priority
            />
</span>
<p className='text-[14px] font-semibold mt-4'>This is a new pizza</p>
<span className='flex bg-yellow-500 text-white h-10 w-40 gap-2 rounded-full mt-4'> 
  
  <Image
              src="/whitecart.png"
              alt="cart"
              className=' h-12 w-10 '
              width={10}
              height={7}
              priority
            />
  <button className='text-[14px]'>ORDER NOW</button>
  </span>
  </div>
    </main>
  )
}
