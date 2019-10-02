import React from 'react';

const sortInput = ({handleSortChange}) => (
    <select onChange={handleSortChange}>
        <option value='asc'>Ascending</option>
        <option value = 'desc'>Descending</option>
    </select>
)

export default sortInput;