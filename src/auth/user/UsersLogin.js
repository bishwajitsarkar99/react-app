import React, {useState,useEffect} from 'react';
import '../style-css/login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getToken, storeToken } from '../services/LocalStorageService';
import { useLoginUserMutation } from '../services/userAuthApi';
import { setUserToken } from '../features/authSlice';
import { useDispatch } from 'react-redux';


function UsersLogin() {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const [loginUser] = useLoginUserMutation()

    const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
        email: data.get('email'),
        password: data.get('password'),
    }
    if (actualData.email && actualData.password) {
        const res = await loginUser(actualData)
        console.log(res)
        if (res.data && res.data.status === "success") {
        // Store Token Code here
        storeToken(res.data.token)
        navigate('/dashboard')
        }
        if (res.error && res.error.data.status === "failed") {
        setError({ status: true, msg: res.error.data.message, type: 'error' })
        }
    } else {
        setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
    }
    
    // Store User Auth Token in Redux Store
    let token = getToken()
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(setUserToken({ token: token }))
    }, [token, dispatch])
      
    return (
        <>
            <section className='user--login--part'>
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="login--acc">
                                <div className="card common--card">
                                    <div className="text-center pt-4">
                                        <h1>Login to your account</h1>
                                    </div>
                                    <div className="login-form">
                                        <form className='' action="#" method='#'>
                                            <div className="form-group">
                                                <input className='form-control text--input' type="email" placeholder='Email' id='email'  autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <input className='form-control text--input' type="password" placeholder='Password' id='password' autoComplete='off'/>
                                            </div>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <input type='checkbox' className='checking ms-2' id='check'></input>
                                                    <span className='checking--label'>Remember Me</span>
                                                </div>
                                                <div className='col-6'>
                                                    <a href='/send-email-reset-password' className='forgot--btn' id='#'>
                                                        <span className='forgot--password'>Forgot Password ?</span>
                                                    </a>
                                                </div>
                                                {error.status ? <span severity={error.type}>{error.msg}</span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <button type='submit' className='btn btn-xl login--btn' id='loginSubmt'> 
                                                    <span className='btn--label'>Login</span>
                                                </button>
                                            </div>
                                            <div className='text-row'>
                                                <p className='text--label'>Don't have an account ?</p>
                                                <p className='regist--text'>
                                                    <a className='register--label' href='/create-account'>
                                                        <span >Register Now</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsersLogin;
