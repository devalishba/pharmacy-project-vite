import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './dashboard'
import Sidebar from './sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Medicine from './pages/medicine'
import EditMedicine from './pages/edit-medicine'
import Sales from './pages/sales'
import SignUp from './pages/sign-up'
import Login from './pages/login'
import PrivateRoute from './PrivateRoute'

function App() {

  return (
<>
<BrowserRouter>
<Routes>
        <Route path='/register' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    <Route path="/dashboard" element={       <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
} />
    <Route path='/' element={ <PrivateRoute><Medicine/></PrivateRoute>}/>
    <Route path='/edit-medicine/:id' element={<EditMedicine/>}/>
    <Route path='/sales' element={<PrivateRoute><Sales /></PrivateRoute>}/>


</Routes>

</BrowserRouter>
</>
  )
}

export default App
