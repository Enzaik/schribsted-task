import React from 'react';

const article = ({title, img, date}) =>{
    return (
        <div>
             <img src={img} alt = 'img' height="42" width="42"></img>
            {title}
        {date}
        </div>
    )
};

export default article;