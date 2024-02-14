
import React, {useState} from 'react';
import { getToken } from '../services/LocalStorageService';
import { useChangeUserPasswordMutation } from '../services/userAuthApi';
import { useSelector } from 'react-redux';


function ChangePassword() {
    
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });
    const [changeUserPassword] = useChangeUserPasswordMutation()
    const token = getToken()
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }
        if (actualData.password && actualData.password_confirmation) {
            if (actualData.password === actualData.password_confirmation) {
            const res = await changeUserPassword({ actualData, token })
            console.log(res)
            if (res.data.status === "success") {
                document.getElementById("password-change-form").reset();
                setError({ status: true, msg: "Password Changed Successful", type: "success" });
            }
            } else {
            setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
            }
        } else {
            setError({ status: true, msg: "All Fields are Required", type: "error" })
        }
    };
    
    // Getting User Data from Redux Store
    const myData = useSelector(state => state.user)
    console.log("Change Password", myData)

    return (
        <>
            <section className='user--login--part'>
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="login--acc">
                                <div className="card common--card">
                                    <div className="text-center pt-4">
                                        <h1>Change Password</h1>
                                    </div>
                                    <div className="login-form">
                                        <form className='' onSubmit={handleSubmit} id="password-change-form">
                                            <div className="form-group">
                                                <input className='form-control text--input' name="password" type="password" required placeholder='Password' id='password' autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <input className='form-control text--input' name="password_confirmation" type="password" required placeholder='Confirm New Password' id='confirm_password' autoComplete='off'/>
                                            </div>
                                            <div className="form-group">
                                                <button type='submit' className='btn btn-xl login--btn' id='loginSubmt'> 
                                                    <span className='btn--label'>Update</span>
                                                </button>
                                            </div>
                                            {error.status ? <span severity={error.type}>{error.msg}</span> : ""}
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

export default ChangePassword;
