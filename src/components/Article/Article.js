import React from 'react';

const article = ({title, img}) =>{
    return (
        <div>
             <img src={img} alt = 'img' height="42" width="42"></img>
            {title}
        </div>
    )
};

export default article;