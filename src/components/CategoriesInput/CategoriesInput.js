import React from 'react';
import './CategoriesInput.css';

const categoriesInput = ({ handleClick }) => (
    <div className='articles-input' onClick={handleClick}>
        <div className='sport'>
            <input type='checkbox' value='sport' /> <label>Sports</label>
        </div>
        <div className='fashion'>
            <input type='checkbox' value='fashion' /> <label>Fashion</label>
        </div>


    </div>
)

export default categoriesInput;