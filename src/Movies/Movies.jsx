import React, { useEffect, useState } from 'react'
import './Movies.css'
import { fetchData } from '../apis/moviesapi'

const Movies = () => {

    const [movies, setMovies] = useState('Loading...')

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        try {
            const movieList = await fetchData()
            console.log(movieList)
            setMovies(movieList)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ color: '#ffffff' }}>
            <div className='movies'>
                {movies && movies.title ? movies.title : 'Loading...'}
            </div>
        </div>
    )
}

export default Movies