import React, {useState} from 'react'
import { useSendPasswordResetEmailMutation } from '../services/userAuthApi'


function SendPasswordResetEmail() {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const [sendPasswordResetEmail] = useSendPasswordResetEmailMutation()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
        }
        if (actualData.email) {
          const res = await sendPasswordResetEmail(actualData)
          console.log(res)
          if (res.data && res.data.status === "success") {
            document.getElementById('password-reset-email-form').reset()
            setError({ status: true, msg: "Password Reset Email Sent. Check Your Email !!", type: 'success' })
          }
          if (res.error && res.error.data.status === "failed") {
            setError({ status: true, msg: res.error.data.message, type: 'error' })
          }
        } else {
          setError({ status: true, msg: "Please Provide Valid Email", type: 'error' })
        }
    }    
    return (
        <>
            <section className='user--login--part'>
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="login--acc">
                                <div className="card common--card">
                                    <div className="text-center pt-4">
                                        <h1>Reset Password</h1>
                                    </div>
                                    <div className="login-form">
                                        <form className='' action="#" method='#'>
                                            <div className="form-group">
                                                <input className='form-control text--input' type="email" placeholder='Email' id='email'  autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <button type='submit' className='btn btn-xl login--btn' id='loginSubmt'> 
                                                    <span className='btn--label'>Send Password Reset Link</span>
                                                </button>
                                            </div>
                                            <div className='text-row'>
                                                <p className='regist--text'>
                                                    <a className='register--label' href='/user-account'>
                                                        <span >Back to Login</span>
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

export default SendPasswordResetEmail;
