import React from 'react';
import './Header.css';
import { RedditLogo } from '@phosphor-icons/react';
const Header = () => {
    return (
        <header>
            <img alt='' src={RedditLogo}></img>
            <h1>ReddiView</h1>
        </header>
    );
};

export default Header;