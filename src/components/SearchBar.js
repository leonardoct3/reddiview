import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search..." 
            />
            <button onClick={handleSearch}>
                <MagnifyingGlass 
                    size={16}
                />
            </button>
        </div>
    );
};

export default SearchBar;