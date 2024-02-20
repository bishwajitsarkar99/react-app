import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../../http';
import toast from 'react-hot-toast';

function Newsleter() {

    const [value, setValue] = useState("");
    const [isLoading, setLoading] = useState(false);

    const handleForm = () => {

        setLoading(true);
        const formData= {
            email: value,
        }
        axios.post(BASE_URL + 'api/newsleter', formData).then(res => {

            setValue("");
            toast.success(res.data.message);
            
        }).catch((err) => {

            toast.error( err.response.data.message);

        }).finally(function(){
            setLoading(false);
        });
    }
  return (
    <div className='row'>
        <form>
            <div class="input-group mb-3 new-letter-block-container">
                <label className='subscribe__label footer-first-block-two-skeletone'></label>
                <input 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    type="text" 
                    className="form-control susbcribe__input footer-first-block-two-skeletone" 
                    placeholder="Your Email Address....." 
                    disabled={isLoading}
                />
                <button 
                    className="btn btn-outline-secondary susbcribe__btn" 
                    type="button" 
                    id="button-addon2"
                    onClick={() =>handleForm() }
                    disabled={isLoading}
                >Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Newsleter
