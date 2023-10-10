import React, { useState } from 'react';
import { SearchBox, SearchInput, SearchButton } from './styles';

const Search = ({ onSearch = () => {} }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <SearchBox onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                required
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for GitHub repos..."
            />
            <SearchButton type="submit" disabled={!query}>Search</SearchButton>
        </SearchBox>
    );
}

export default Search;
