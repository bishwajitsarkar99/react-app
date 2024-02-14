import React from 'react'
import { Link } from 'react-router-dom';

function BlockBackButton() {
    return (
        <>
            <Link to="/blog" className='btn btn-sm btn-success btn-media-bg-back' id='newButton'>Back</Link>
        </>
    )
}

export default BlockBackButton;
