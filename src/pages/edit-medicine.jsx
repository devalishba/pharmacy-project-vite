import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from "react-hot-toast"

function EditMedicine() {
  const [medicine,setMedicine ] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    console.log(params.id);
    
     async function fetchMedicine() {
      try {
          const data = await axios.get(`http://localhost:8000/medecine/${params.id}`) 
        console.log(data);
        setMedicine(data.data)
      } catch (error) {
           toast.error("Failed to fetch medicine");
    console.error(error);

      }
      
    }
    useEffect(()=>{
        fetchMedicine()
    },[])
    function changeHandler(e) {
      const name = e.target.name
      const value = e.target.value
      setMedicine({...medicine,[name]:value})
    }
   async function submitHandler(e) {
      e.preventDefault()
      const res = await axios.patch(`http://localhost:8000/medecine/${params.id}`, medicine)
      toast.success('Medicine Edit Successfully')
      console.log(res);
      navigate('/')
      
      
    }


        
        
  return (
    
    <div className='   mt-30'>
   <div className='bg-white p-10 rounded-lg shadow-md w-200  ml-50 '>
    <h2 className='text-xl font-semibold mb-7 '>Edit Medicine</h2>
     <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 "  onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  name='name' value={medicine.name} onChange={changeHandler}
            />
            <input
              type="number"
              placeholder="Stock"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"   name='stock' value={medicine.stock} onChange={changeHandler}
            />
            <input
              type="number"
              step="0.01"
              placeholder="Price"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"   name='price' value={medicine.price} onChange={changeHandler}
            />
          <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer' type='submit'>Update Medicine</button>
          </form>
          </div>
          </div>
  )
}

export default EditMedicine
