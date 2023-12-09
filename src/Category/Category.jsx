import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Category.css'
import Action from '../assets/action_image.png';
import Drama from '../assets/drama_image.png';
import Fantasy from '../assets/fantasy_image.png';
import Horror from '../assets/horror_image.png';
import Music from '../assets/music_image.png';
import Fiction from '../assets/fiction_image.png';
import Thriller from '../assets/thriller_image.png';
import Western from '../assets/western_image.png';
import Romance from '../assets/romance_image.png';

const Category = () => {

    const [error, setError] = useState("")
    const [selectedCategories, setSelectedCategories] = useState([]);

    let navigateTo = useNavigate();

    function handleNext() {
        if (selectedCategories.length >= 3) {

            const userCategory = selectedCategories

            localStorage.setItem('userCategory', JSON.stringify(userCategory));
            navigateTo("/home")
        }
        else {
            setError("Minimum 3 category required")
        }
    }

    const handleClick = (categoryName) => {
        if (!selectedCategories.includes(categoryName)) {
            setSelectedCategories([...selectedCategories, categoryName]);
        }
    };

    const removeChip = (categoryName) => {
        if (selectedCategories.includes(categoryName)) {
            const updatedCategories = selectedCategories.filter(category => category !== categoryName);
            setSelectedCategories(updatedCategories);
        }
    }


    return (
        <div>
            <div className='category-container'>
                <div className='category'>
                    <div>
                        <h3 className='super-title'>Super app</h3>
                        <h1 className='choose-title'>Choose your entertainment category</h1>
                        <div>
                            {selectedCategories.map((category, index) => (
                                <div key={index} className='chip' id='chip-id'>
                                    <span style={{ background: '#148A08' }}>
                                        {category}<button onClick={() => removeChip(category)}>X</button>
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className='min-three-error'>{error}</p>
                    </div>
                    <div>
                        <div className='grid-container'>
                            <div className='action-grid' onClick={() => handleClick('Action')} style={selectedCategories.includes('Action') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='action-id'>Action</h6>
                                <img src={Action} alt="action image" />
                            </div>
                            <div className='drama-grid' onClick={() => handleClick('Drama')} style={selectedCategories.includes('Drama') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='drama-id'>Drama</h6>
                                <img src={Drama} alt="drama image" />
                            </div>
                            <div className='romance-grid' onClick={() => handleClick('Romance')} style={selectedCategories.includes('Romance') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='romance-id'>Romance</h6>
                                <img src={Romance} alt="romance image" />
                            </div>
                            <div className='thriller-grid' onClick={() => handleClick('Thriller')} style={selectedCategories.includes('Thriller') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='thriller-id'>Thriller</h6>
                                <img src={Thriller} alt="thriller image" />
                            </div>
                            <div className='western-grid' onClick={() => handleClick('Western')} style={selectedCategories.includes('Western') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='western-id'>Western</h6>
                                <img src={Western} alt="western image" />
                            </div>
                            <div className='horror-grid' onClick={() => handleClick('Horror')} style={selectedCategories.includes('Horror') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='horror-id'>Horror</h6>
                                <img src={Horror} alt="horror image" />
                            </div>
                            <div className='fantasy-grid' onClick={() => handleClick('Fantasy')} style={selectedCategories.includes('Fantasy') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='fantasy-id'>Fantasy</h6>
                                <img src={Fantasy} alt="fantasy image" />
                            </div>
                            <div className='music-grid' onClick={() => handleClick('Music')} style={selectedCategories.includes('Music') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='music-id'>Music</h6>
                                <img src={Music} alt="music image" />
                            </div>
                            <div className='fiction-grid' onClick={() => handleClick('Fiction')} style={selectedCategories.includes('Fiction') ? { border: '3px solid #11B800' } : { border: 'none' }}>
                                <h6 id='fiction-id'>Fiction</h6>
                                <img src={Fiction} alt="fiction image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='next'>
                    <button className='next-page' onClick={handleNext}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default Category