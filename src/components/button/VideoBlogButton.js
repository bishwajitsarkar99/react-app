import React from 'react'
import { Link } from 'react-router-dom';

function VideoBlogButton() {
    return (
        <>
            <span className='btn_div'>
                <Link to="/video-blog-content" type='button' className='details_btn btn btn-group-sm bg-slate-950' id='blog__btnVideo'> Video Blog</Link>
            </span>
        </>
    )
}

export default VideoBlogButton;
