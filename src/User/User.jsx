import React, { useEffect, useState } from 'react'
import './User.css'
import UserImg from '../assets/user_image.png';

const User = () => {

    const userInfo = localStorage.getItem('userData')
    const userInfoDetails = JSON.parse(userInfo)

    const userSelectedCategory = localStorage.getItem('userCategory')
    const userSelectedCategoryDetails = JSON.parse(userSelectedCategory)
    console.log(userSelectedCategoryDetails)

    return (
        <div>
            <div className='user-main'>
                <div className='user'>
                    <div>
                        <img src={UserImg} alt="user image" />
                    </div>
                    <div className='user-details'>
                        <div className='user-info'>
                            <span>{userInfoDetails.name}</span>
                            <span>{userInfoDetails.email}</span>
                            <span>{userInfoDetails.username}</span>
                        </div>
                        <div style={{ backgroundColor: '#5746EA' }}>
                            <div className='selected-category'>{userSelectedCategoryDetails}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User