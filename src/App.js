import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Posts } from './features/posts/Posts';
import SearchBar from './components/SearchBar';
import { Subreddits } from './features/subreddits/Subreddits';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <div className="grid">
                <Subreddits />
                <Posts />
                <SearchBar />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
