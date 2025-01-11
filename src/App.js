import React from 'react';
import './App.css';
// #ff006a
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';
import Subreddits from './components/Subreddits';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='grid'>
        <Subreddits />
        <Posts />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
