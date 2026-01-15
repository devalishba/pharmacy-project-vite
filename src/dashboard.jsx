import React from 'react'
import Sidebar from './sidebar'
function Dashboard() {
  return (
    <div>
    <div className='flex'>
        <Sidebar/>
        <div className='w-full ml-64 p-8'>
          <h2 className="text-3xl font-bold mb-6">Pharmacy Dashboard</h2>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Medicines</h3>
            <p className="text-2xl font-bold text-blue-600">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Today's Sales</h3>
            <p className="text-2xl font-bold text-green-600">$2,450</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Low Stock Alerts</h3>
            <p className="text-2xl font-bold text-red-600">5</p>
          </div>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Dashboard
