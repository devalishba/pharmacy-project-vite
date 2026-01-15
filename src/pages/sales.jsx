import React, { useEffect, useState } from 'react'
import axios from "axios"
import Sidebar from '../sidebar'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
function Sales() {

  const [medicine, setMedicine] = useState([])
  const [date, setDate] = useState(new Date()) 

   async function fetchMedicine() {
    try {
      
        const data = await axios.get("http://localhost:8000/sales")
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
    medicine:"",
    total:"",
    quantity:"",
    // date:date.now()
   })
   function changeHandler(e) {
    const name= e.target.name
    const value = e.target.value
    setCreat({...creat, [name]:value})
   }
   
   async function submitHandler(e) {
    e.preventDefault()
    const res = await axios.post("http://localhost:8000/sales", creat)
    console.log(res);
    toast.success('Medicine sales successfully')
  }


   const navigate= useNavigate() 
    
  return (
<div>
 
    <div className='flex justify-between gap-70  '> 

    
      <Sidebar/> 
<div className='flex-col flex gap-10 w-full mr-10' >

     <div>
         <h1 className="text-3xl font-bold mb-6 my-2">Sales Management</h1>
    <div className='bg-white p-10 rounded-lg shadow-md w-full '>
    <h1 className='text-xl font-semibold mb-7 '>Add New Sale </h1>
     <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Medicine Name"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={creat.medicine} onChange={changeHandler} name='medicine'
            />
            <input
              type="number"
              placeholder="quantity"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={creat.quantity} onChange={changeHandler} name='quantity'
            />
            <input
              type="number"
              step="0.01"
              placeholder="Price per unit"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={creat.total} onChange={changeHandler} name='total'
            />
          <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer' type='submit'>Add Sale</button>
          </form>
          </div>
  </div>
      <div className='bg-white p-6 rounded-lg shadow-md w-full'>
      <h1 className='text-xl font-semibold mb-4'>Sale History</h1>
      <table className='w-full  table-auto'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2 text-left'>Medicine</th>
            <th className='px-4 py-2 text-left'>Quantity</th>
            <th className='px-4 py-2 text-left'>Total</th>
            <th className='px-4 py-2 text-left'>Date</th>
          </tr>
        </thead>
        <tbody>
          
        {  medicine.map((med) => {
         return <tr className='border-t'>
          <td className='px-4 py-2'>{med.medicine}</td>
          <td className='px-4 py-2'>{med.quantity}</td>
          <td className='px-4 py-2'>${med.total}</td>
          <td className='px-4 py-2'> {new Date().toLocaleDateString()}
      
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

export default Sales
