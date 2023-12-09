import React from 'react'
import './Browse.css'
import User from '../User/User';
import Weather from '../Weather/Weather';
import News from '../News/News';
import Timer from '../Timer/Timer';
import Notes from '../Notes/Notes';
import { useNavigate } from 'react-router-dom';

const Browse = () => {

    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/browse')
    }

    return (
        <div>
            <div className='browse-main'>
                <div className='browse_main_one'>
                    <div className='browse_main_three'>
                        <div className='browse_main_five'>
                            <User />
                            <Weather />
                        </div>
                        <div className='browse_main_six'>
                            <Notes />
                        </div>
                    </div>
                    <div className='browse_main_four'>
                        <Timer />
                    </div>
                </div>
                <div className='browse_main_two'>
                    <News />
                </div>
            </div>
            <div className='btn_browse'>
                <button onClick={handleClick}>Browse</button>
            </div>
        </div>
    )
}

export default Browse