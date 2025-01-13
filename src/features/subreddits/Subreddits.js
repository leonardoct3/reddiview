import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits, selectSubredditsLoading } from './subredditsSlice';
import { Subreddit } from './Subreddit';
import { SubredditSkeleton } from './SubredditSkeleton';
import styles from './subreddits.module.css';
import RedditLogo from '../../assets/reddit-logo.png';
import { setSubreddit } from '../posts/postsSlice';

export const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const loading = useSelector(selectSubredditsLoading); // Selector for loading state
    const [activeSubreddit, setActiveSubreddit] = useState('');

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    const handleSubredditClick = (display_name) => {
        dispatch(setSubreddit(display_name));
        setActiveSubreddit(display_name);
    };

    return (
        <div className={styles.subredditsContainer}>
            <ul className={styles.subredditList}>
                {/* Static "Home" Item */}
                <li
                    className={`${styles.subredditItem} ${activeSubreddit === '' ? styles.active : ''}`}
                    onClick={() => handleSubredditClick('')}
                >
                    <div className="subreddit">
                        <img className="subreddit-icon" src={RedditLogo} alt={`Reddit Logo`} />
                        <h2 className="subreddit-name">Home</h2>
                    </div>
                </li>

                {/* Skeletons while loading */}
                {loading
                    ? Array.from({ length: 3 }).map((_, index) => (
                          <li key={index} className={styles.subredditItem}>
                              <SubredditSkeleton />
                          </li>
                      ))
                    : /* Render Subreddits */
                      subreddits.map((subreddit) => (
                          <li
                              key={subreddit.id}
                              className={`${styles.subredditItem} ${
                                  subreddit.display_name === activeSubreddit ? styles.active : ''
                              }`}
                              onClick={() => handleSubredditClick(subreddit.display_name)}
                          >
                              <Subreddit subreddit={subreddit} />
                          </li>
                      ))}
            </ul>
        </div>
    );
};
