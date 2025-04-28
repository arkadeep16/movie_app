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
    
    const handleSearch = async (e) => {
      e.preventDefault();
      if (!searchQuery.trim()) return
      if (loading) return
  
      setLoading(true)
      try {
          const searchResults = await searchMovies(searchQuery)
          setMovies(searchResults)
          setError(null)
      } catch (err) {
          console.log(err)
          setError("Failed to search movies...")
      } finally {
          setLoading(false)
      }
    };
  return (
    <div className="home">
        <form onSubmit={handleSearch} className='search-form'>
            <input    type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  />
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