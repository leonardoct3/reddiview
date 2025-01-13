import React from 'react';
import './Subreddit.css';
import RedditLogo from '../../assets/reddit-logo.png';

export const Subreddit = ({ subreddit }) => {
    const { display_name, icon_img } = subreddit;
    return (
        <div className="subreddit">
            <img className="subreddit-icon" src={icon_img ? icon_img : RedditLogo} alt={`${display_name} icon`} />
            <h2 className="subreddit-name">{display_name}</h2>
        </div>
    );
};