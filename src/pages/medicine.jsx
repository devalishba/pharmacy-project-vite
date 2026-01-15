import React, { useEffect, useState } from 'react'
import axios from "axios"
import Sidebar from '../sidebar'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
function Medicine() {

  const [medicine, setMedicine] = useState([])
   async function fetchMedicine() {
    try {
      
        const data = await axios.get('http://localhost:8000/medecine')
        console.log(data.data);
        setMedicine(data.data)
        
        
    } catch (error) {
      console.error("Failed to fetch medicine:", error);
    }
        

        
        
        
    }
   useEffect(()=>{
    fetchMedicine()
   },[])
   const [creat , setCreat] = useState({
    name:"",
    price:"",
    stock:""
   })
   function changeHandler(e) {
    const name= e.target.name
    const value = e.target.value
    setCreat({...creat, [name]:value})
   }
   
   async function submitHandler(e) {
    e.preventDefault()
    const res = await axios.post('http://localhost:8000/medecine', creat)
    console.log(res);
    toast.success('Medicine created successfully')
  }
 async function deleteMedicine(id) {
    const res = await axios.delete(`http://localhost:8000/medecine/${id}`)
    const singleMedicine= await medicine.filter((meriMedicine)=> meriMedicine._id!==id)
    setMedicine(singleMedicine)
    toast.success('Medicine deleted successfully')
  }
   const navigate= useNavigate() 
    
  return (
<div>
 
    <div className='flex justify-between gap-70  '> 

    
      <Sidebar/> 
<div className='flex-col flex gap-10 w-full mr-10' >

     <div>
         <h1 className="text-3xl font-bold mb-6 my-2">Medicines Management</h1>
    <div className='bg-white p-10 rounded-lg shadow-md w-full '>
    <h2 className='text-xl font-semibold mb-7 '>Add New Medicine</h2>
     <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={creat.name} onChange={changeHandler} name='name'
            />
            <input
              type="number"
              placeholder="Stock"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={creat.stock} onChange={changeHandler} name='stock'
            />
            <input
              type="number"
              step="0.01"
              placeholder="Price"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={creat.price} onChange={changeHandler} name='price'
            />
          <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer' type='submit'>Add Medicine</button>
          </form>
          </div>
  </div>
      <div className='bg-white p-6 rounded-lg shadow-md w-full'>
      <h2 className='text-xl font-semibold mb-4'>Medicines List</h2>
      <table className='w-full  table-auto'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2 text-left'>Name</th>
            <th className='px-4 py-2 text-left'>Stock</th>
            <th className='px-4 py-2 text-left'>Price</th>
            <th className='px-4 py-2 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
        {  medicine.map((med) => {
         return <tr className='border-t'>
          <td className='px-4 py-2'>{med.name}</td>
          <td className='px-4 py-2'>{med.stock}</td>
          <td className='px-4 py-2'>${med.price}</td>
          <td className='px-4 py-2'><button className="text-blue-600 hover:underline mr-4 cursor-pointer"onClick={()=>navigate(`/edit-medicine/${med._id}`)}> Edit</button>
          <button className="text-red-600 hover:underline cursor-pointer " onClick={()=>deleteMedicine(med._id) } >Delete</button>
          </td>
         </tr>
          })}
        </tbody>
      </table>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Medicine
