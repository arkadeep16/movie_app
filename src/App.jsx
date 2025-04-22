import "./css/App.css"
import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favourite' element={<Favourite />}></Route>
        </Routes>

      </main>
    </div>
  )
}

export default App
