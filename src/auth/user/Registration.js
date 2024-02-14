import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi';
import { storeToken } from '../services/LocalStorageService';


function Registration() {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })
      const navigate = useNavigate();
      const [registerUser] = useRegisterUserMutation()
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          name: data.get('name'),
          email: data.get('email'),
          password: data.get('password'),
          password_confirmation: data.get('password_confirmation'),
          tc: data.get('tc'),
        }
        if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
          if (actualData.password === actualData.password_confirmation) {
    
            const res = await registerUser(actualData)
            console.log(res)
            if (res.data.status === "success") {
              // Store Token Code here
              storeToken(res.data.token)
              navigate('/dashboard')
            }
            if (res.data.status === "failed") {
              setError({ status: true, msg: res.data.message, type: 'error' })
            }
          } else {
            setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
          }
        } else {
          setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
    }    
    return (
        <>
            <section className='user--login--part'>
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="register--acc">
                                <div className="card common--card">
                                    <div className="text-center pt-4">
                                        <h1>Create an account</h1>
                                    </div>
                                    <div className="login-form">
                                        <form className='' action="#" method='#'>
                                            <div className="form-group">
                                                <input className='form-control text--input' type="text" name='name' placeholder='Full Name' id='email'  autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <input className='form-control text--input' type="email" name='email' placeholder='Email' id='email'  autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <input className='form-control text--input' type="password" name='password' placeholder='Password' id='password' autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <input className='form-control confirm--text--input' type="password" name='confirm_password' placeholder='Confirm Password' id='confirm_password' autoComplete='off'/>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <input type='checkbox' className='checking ms-2' value={true} name='status' id='status' />
                                                    <span className='checking--label'>I agree to term and condition.</span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type='submit' className='btn btn-xl login--btn' id='loginSubmt'> 
                                                    <span className='btn--label'>Create Account</span>
                                                </button>
                                            </div>
                                            <div className='text-row'>
                                                <p className='text--label'>Already have an account ?</p>
                                                <p className='regist--text'>
                                                    <a className='register--label' href='/user-account'>
                                                        <span >Login</span>
                                                    </a>
                                                </p>
                                            </div>
                                            {error.status ? <span severity={error.type}>{error.msg}</span> : ''}
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

export default Registration;
