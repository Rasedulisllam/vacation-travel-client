import React from 'react';
import {AiOutlinePlayCircle} from 'react-icons/ai'
import './Highlight.css'

const Highlight = () => {
    return (
        <div className='highlight-main'>
            <div>
                <h1 style={{fontSize:'4rem'}} className='text-bold text-warning'>Traveling Highlights</h1>
                <h5 className='text-white fs-3'>Your New Traveling Idea</h5>
                <AiOutlinePlayCircle className='text-white fs-1'></AiOutlinePlayCircle>
            </div>
        </div>
    );
};

export default Highlight;