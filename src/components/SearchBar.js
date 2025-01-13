import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/posts/PostsSlice';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        dispatch(setSearchTerm(query));
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    return (
        <div className='search-bar'>
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