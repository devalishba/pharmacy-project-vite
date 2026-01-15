import React from 'react'
import { Link } from 'react-router-dom';
import { GoGraph } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";

function Sidebar() {
  return (
    <div className='p-4'>

    <div className='w-64 bg-blue-800 text-white h-screen fixed left-0 top-0 overflow-y-auto '>
        <h2 className='text-3xl font-bold mb-6 p-2 '>Pharmacy Dashboard</h2> 
        <nav>
            <ul className='space-y-2'>
                <li className='flex items-center justify-items-center ml-3'>
                    <GoGraph className='text-2xl' />
                    <Link  to={"/dashboard"} className="block py-2 px-4 hover:bg-blue-700 transition duration-200">


                    Dashboard
                    </Link>
                </li>
                <li className='flex items-center justify-items-center ml-3'>
                    <AiFillMedicineBox className='text-2xl'/>   
                    <Link  to={"/"} className="block py-2 px-4 hover:bg-blue-700 transition duration-200">


                    medicines
                    </Link>
                </li>
                <li className='flex items-center justify-items-center ml-3'>
                    <FaShoppingCart className='text-2xl'/>

                    <Link  to={"/sales"} className="block py-2 px-4 hover:bg-blue-700 transition duration-200">


                    Sales
                    </Link>
                </li>
               


            </ul>
        </nav>
      
    </div>
    </div>
  )
}

export default Sidebar
