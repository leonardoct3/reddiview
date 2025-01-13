import React from 'react';
import './Header.css';
import { RedditLogo } from '@phosphor-icons/react';
const Header = () => {
    return (
        <header>
            <RedditLogo size={40} color='#ff0675'/>
            <h1><span className='highlight'>reddi</span>View</h1>
        </header>
    );
};

export default Header;