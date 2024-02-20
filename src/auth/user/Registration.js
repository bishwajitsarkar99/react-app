import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi';
import { storeToken } from '../services/LocalStorageService';
import axios from 'axios';
import { BASE_URL } from '../../http';
import toast from 'react-hot-toast';


function Registration() {

    const [isAgree, setAgree] = useState(false);
    const [fields, setFields] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        status: false,
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })
      const navigate = useNavigate();
     
      const handleSubmit = async (e) => {
        e?.preventDefault();
        setLoading(true);

        //validation

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        axios.post(BASE_URL+'api/register', fields, config).then(res => {

            toast.success(res.data.message);
            setFields({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                status: false,
            });
            
        }).catch(err => {

            const{errors} = err.response;
            setErrors(errors);

        }).finally(function(){
            setLoading(false);
        });
        
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
                                        <form  action="#" method='post' onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input 
                                                    name='name'
                                                    value={fields.name}
                                                    onChange={e=>setFields(fields=> ({...fields, name: e.target.value}))} 
                                                    className='form-control text--input' 
                                                    type="text" 
                                                    placeholder='Full Name' 
                                                    id='email'  
                                                    autoComplete='off'
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    name='email'
                                                    value={fields.email}
                                                    onChange={e=>setFields(fields=> ({...fields, email: e.target.value}))} 
                                                    className='form-control text--input' 
                                                    type="email" 
                                                    placeholder='Email' 
                                                    id='email'  
                                                    autoComplete='off'
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    name='password'
                                                    value={fields.password}
                                                    onChange={e=>setFields(fields=> ({...fields, password: e.target.value}))} 
                                                    className='form-control text--input' 
                                                    type="text" 
                                                    placeholder='Password' 
                                                    autoComplete='off'
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    name='password_confirmation'
                                                    value={fields.password_confirmation}
                                                    onChange={e=>setFields(fields=> ({...fields, password_confirmation: e.target.value}))} 
                                                    className='form-control confirm--text--input' 
                                                    type="text" 
                                                    placeholder='Confirm Password' 
                                                    autoComplete='off'
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'
                                                    onClick={e=> setAgree(!isAgree)}
                                                >
                                                    <input 
                                                        type='checkbox' 
                                                        name='status'
                                                        
                                                        className='checking ms-2' 
                                                        checked={isAgree}
                                                    />
                                                    <span className='checking--label'>I agree to term and condition.</span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button 
                                                    type='submit' 
                                                    className='btn btn-xl login--btn' 
                                                    disabled={!isAgree||isLoading}
                                                > 
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
