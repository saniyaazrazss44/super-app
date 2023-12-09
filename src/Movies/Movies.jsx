import React, { useEffect, useState } from 'react'
import './Movies.css'
import { fetchData } from '../apis/moviesapi'

const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        try {
            const movieList = await fetchData()
            const movieTitles = movieList.data.results.map(movie => (
                <div key={movie.id} className="movie-item">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
            ));
            setMovies(movieTitles);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ color: '#ffffff' }}>
            <div className='movies'>
                {movies}
            </div>
        </div>
    )
}

export default Movies