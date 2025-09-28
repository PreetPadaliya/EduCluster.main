import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'


function App() {
  return (
    <div className='container mx-auto bg-gray-400'>
      <Router>
        <nav className="p-3 space-x-4 bg-gray-200 rounded mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded"><a href="/">Home</a></button>
          <button className="px-4 py-2 bg-green-500 text-white rounded"><a href="/register">Register</a></button>
          <button className="px-4 py-2 bg-red-500 text-white rounded"><a href="/login">Login</a></button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App