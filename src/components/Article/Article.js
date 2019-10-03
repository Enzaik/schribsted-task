import React from 'react';

import './Article.css'

const article = ({ title, img, date, preamble }) => {
    return (
        <div className='article'>
            <div className='image'>
                <img src={img} alt=':/' height="42" width="42"></img>
            </div>
            <div className='description'>
                <div className='title'>
                    {title}
                </div>
                <div className='date'>
                    {date}
                </div>
                
            </div>

        </div>
    )
};

export default article;