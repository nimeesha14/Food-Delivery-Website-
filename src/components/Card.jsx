import React from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice.js';
import { toast } from 'react-toastify';

function Card({id,name,image,price,type}) {
  let dispatch = useDispatch()
  return (
    <div className='w-[200px] h-[280px] bg-white p-2 rounded-lg flex-col gap-3 shadow-lg hover:border-2 border-green-300 '>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
          <img src={image} alt=''className='object-cover'></img>
        </div>
        <div className='text-sm font-bold'>
         {name}
        </div>
        <div className='w-full flex justify-between items-center mt-1'>
            <div className='text-sm font-bold text-green-500'>{price}</div>
           <div className='flex justify-center items-center gap-2 text-green-500 text-sm font-semibold '>{type==="veg"?<LuLeafyGreen />: <GiChickenOven />}<span>{type}</span></div> 
        </div>
        <button className='w-full p-2 mt-3 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));toast.success("item added")}}>Add to dish</button>
    </div>
  )
}

export default Card