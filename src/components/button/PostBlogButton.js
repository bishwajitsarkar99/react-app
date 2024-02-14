import React from 'react'
import { Link } from 'react-router-dom';

function PostBlogButton() {
    return (
        <>
            <span className='btn_div'>
                <Link to="/Post-Blog-Content" type='button' className='details_btn btn btn-group-sm bg-slate-950' id='blog__btnPost'> Post Blog</Link>
            </span>
        </>
    )
}

export default PostBlogButton;
