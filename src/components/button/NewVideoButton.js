import React from 'react'
import { Link } from 'react-router-dom';
function NewVideoButton() {
    return (
        <>
            <Link to="/new-video" className='btn btn-sm btn-success btn-media-bg-one' id='newButton'>New</Link>
        </>
    )
}

export default NewVideoButton;
