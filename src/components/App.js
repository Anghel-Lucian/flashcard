import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import '../css/App.css';
import { useSearchQuestions } from '../hooks/useSearchQuestions';

const App = () => {
  const [category, setCategory] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  const [questions, categories] = useSearchQuestions(
    category,
    numberOfQuestions
  );

  return (
    <div className="app-container">
      <div className="top-section">
        <form className="search-bar">
          <div>
            <label>Category</label>
            <select
              name="category"
              className="category-select"
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="">Choose a category...</option>
              {categories.map((category) => {
                return <option value={category.id}>{category.name}</option>;
              })}
            </select>
          </div>
          <div>
            <label>Number of questions</label>
            <input type="number" min="1"></input>
          </div>
          <div>
            <button type="submit">Generate</button>
          </div>
        </form>
      </div>
      <FlashcardList />
    </div>
  );
};

export default App;
