
import React from 'react';
import { SortDropdown } from './styles';

const Sort = ({ onSortChange }) => {
    return (
        <SortDropdown onChange={(e) => onSortChange(e.target.value)}>
            <option value="stars">Stars</option>
            <option value="watchers">Watchers</option>
            <option value="score">Score</option>
            <option value="full_name">Name</option>
            <option value="created">Created Date</option>
            <option value="updated">Updated Date</option>
        </SortDropdown>
    );
}

export default Sort;
