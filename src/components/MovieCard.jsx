import React from 'react'
import "../css/MovieCard.css"

const MovieCard = ({movie}) => {
    function onFavoriteClick() {
        
    }
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.Poster} alt={movie.Title} /> 
        <div className='movie-overlay'>
        <button className={`favorite-btn`} onClick={onFavoriteClick}>
                    ♥
                </button>
        </div>
      </div>
      
        <div className='movie-info bg-neutral-900'>
          <h3 className='text-red-500'>{movie.Title}</h3> {/* Movie title */}
          <p>{movie.Year}</p> {/* Movie year (release date) */}
        </div>
    </div>
  )
}

export default MovieCard