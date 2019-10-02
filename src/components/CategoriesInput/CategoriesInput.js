import React from 'react';

const categoriesInput = ({handleClick}) => (
    <div onClick={handleClick}>
        <input type='checkbox' value='sport' /> <label>Sports</label>
        <input type='checkbox' value='fashion' /> <label>Fashion</label>
    </div>
)

export default categoriesInput;