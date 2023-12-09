import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {

    let navigate = useNavigate()

    function redirectToCategory() {
        navigate("/category")
    }

    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [check, setCheck] = useState(false)

    const [nameerror, setNameError] = useState('')
    const [usernameerror, setUserNameError] = useState('')
    const [emailerror, setEmailError] = useState('')
    const [mobileerror, setMobileError] = useState('')
    const [checkerror, setCheckError] = useState('')

    const validation = (event) => {

        event.preventDefault();

        if (name == "") {
            setNameError('Field is required')
        }
        else {
            setNameError('')
        }

        if (username == "") {
            setUserNameError('Field is required')
        }
        else {
            setUserNameError('')
        }

        if (email == "") {
            setEmailError('Field is required')
        }
        else {
            setEmailError('')
        }

        if (mobile == "") {
            setMobileError('Field is required')
        }
        else {
            setMobileError('')
        }

        if (!check) {
            setCheckError('Check this box if you want to proceed')
        }
        else {
            setCheckError('')
        }

        if (name && username && email && mobile && check) {
            const userData = {
                name,
                username,
                email,
                mobile,
                check
            }

            const userDataStr = JSON.stringify(userData)

            localStorage.setItem('userData', userDataStr)
            console.log("Successfully registered")

            setName('');
            setUserName('');
            setEmail('');
            setMobile('');
            setCheck(false);

            redirectToCategory()
        }
    }

    return (
        <div>
            <div className='register-main'>
                <div className='banner-div'>Discover new things on Superapp</div>
                <div className='register-div'>
                    <div>
                        <h1 className='super-app'>Super app</h1>
                        <p className='create-account'>Create your new account</p>
                    </div>
                    <div>
                        <form method="post" className='form-data' onSubmit={validation}>
                            <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name' />
                            <p className='error-msg'>{nameerror}</p>

                            <input type="text" name='username' value={username} onChange={(e) => { setUserName(e.target.value) }} placeholder='Username' />
                            <p className='error-msg'>{usernameerror}</p>

                            <input type="text" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                            <p className='error-msg'>{emailerror}</p>

                            <input type="number" name='mobile' value={mobile} onChange={(e) => { setMobile(e.target.value) }} placeholder='Mobile' />
                            <p className='error-msg'>{mobileerror}</p>

                            <div>
                                <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                                <label className='label_check'>Share my registration data with Superapp</label>
                                <p className='error-msg'>{checkerror}</p>
                            </div>
                            <div className='sign-up'>
                                <button type='submit'>SIGN UP</button>
                            </div>
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Register