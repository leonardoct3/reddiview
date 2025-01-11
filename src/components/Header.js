import React from 'react';
import { RedditLogo } from '../assets/reddit-logo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <RedditLogo size={40} color='pink'/>
            <h1>ReddiView</h1>
        </header>
    );
};

export default Header;