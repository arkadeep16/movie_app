import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"
import { searchMovies,getPopularMovies } from '../service/api'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const[error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const loadPopularMovies = async () =>{
        try {
          
          const popularMovies = await getPopularMovies()
          setMovies(popularMovies)
        } catch (error) {
          console.log(error)
          setError("Failed to load movies")
        } 
        finally {
          setLoading(false)
        }
      }
      loadPopularMovies()
    },[])
    
    function handleSearch(e) {
        e.preventDefault()
        setSearchQuery("")
        
    }
  return (
    <div className="home">
        <form onSubmit={handleSearch} className='search-form'>
            <input  onChange={e => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='write here...' className="text-black search-input"  />
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='movies-grid'>
            {
              
              movies.map((movie) => 
                movie.Title.toLowerCase().includes(searchQuery) &&
                (<MovieCard movie={movie} key={movie.id}/>)
              )
            }
        </div>
    </div>
  )
}

export default Home