import React, {useState,useEffect} from 'react';
import '../style-css/login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getToken, storeToken } from '../services/LocalStorageService';
import { useLoginUserMutation } from '../services/userAuthApi';
import { setUserToken } from '../features/authSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../http';
import toast from 'react-hot-toast';


function UsersLogin() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setLoading] = useState(false);

      const navigate = useNavigate();
     
      const handleSubmit = async (e) => {
        e?.preventDefault();
        setLoading(true);

        //validation

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': 'Bearer ' + window.localStorage.getItem('auth_token'),
            }
        };

        axios.post(BASE_URL+'api/login', fields, config).then(res => {

            console.clear();
            console.log('auth', res.data);
            toast.success(res.data.message);
            window.localStorage.setItem('auth_token', res.data.token);
            setFields({
                email: '',
                password: '',
                rememberMe: false,
            });

            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);
            
        }).catch(err => {

            const{errors} = err.response;
            setErrors(errors);
            setLoading(false);
        });
        
    }    


    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })

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
                                        <form action="#" method='post' onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input 
                                                    value={fields.email}
                                                    onChange={e=>setFields(fields=>({...fields,email:e.target.value}))}
                                                    className='form-control text--input' 
                                                    type="email" 
                                                    placeholder='Email' 
                                                    autoComplete='off'
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    value={fields.password}
                                                    onChange={e=>setFields(fields=>({...fields,password:e.target.value}))}
                                                    className='form-control text--input' 
                                                    type="password" 
                                                    placeholder='Password' 
                                                    autoComplete='off'
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <input 
                                                        type='checkbox' 
                                                        className='checking ms-2' 
                                                        id='RememberMe' 
                                                        checked={fields.rememberMe}
                                                        onChange={() => setFields(f => ({...f, rememberMe: !f.rememberMe}))}
                                                        disabled={isLoading}
                                                    />
                                                    <label className='checking--label' htmlFor='RememberMe'>Remember Me</label>
                                                </div>
                                                <div className='col-6'>
                                                    <a href='/send-email-reset-password' className='forgot--btn' id='#'>
                                                        <span className='forgot--password'>Forgot Password ?</span>
                                                    </a>
                                                </div>
                                                {error.status ? <span severity={error.type}>{error.msg}</span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <button 
                                                    type='submit' 
                                                    className='btn btn-xl login--btn' 
                                                    id='loginSubmt'
                                                    disabled={isLoading}
                                                    > 

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
