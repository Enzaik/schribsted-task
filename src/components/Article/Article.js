import React from 'react';

import './Article.css'

const article = ({ title, img, date, preamble }) => {
    const [day, month, year] = date.split(' ');
    const newMonth = month.slice(0, 3);
    const newDate = [day, newMonth, year].join(' ');
    img = img !== '' ? img : '../../../placeholder-300x300.jpg';

    return (
        <div className='article'>
            <div className='image'>
                <img src={img} alt=':/' height="42" width="42"></img>
            </div>
            <div className='description'>
                <div className='titular'>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='date'>
                        {newDate}
                    </div>
                </div>
                <div className='preamble'>
                    {preamble}
                </div>
            </div>
        </div>
    )
};

export default article;