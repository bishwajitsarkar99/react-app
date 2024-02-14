import React from 'react'
import { Link } from 'react-router-dom';
function OldVideoButton() {
    return (
        <>
            <Link to="/old-video" className='btn btn-sm btn-success btn-media-bg-two' id='oldButton'>Old</Link>   
        </>
    )
}

export default OldVideoButton;
