import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import '../css/App.css';
import { useSearchQuestions } from '../hooks/useSearchQuestions';

// TODO: implement flipping

const App = () => {
  const [category, setCategory] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  const [questions, categories, error] = useSearchQuestions(
    category,
    numberOfQuestions
  );

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app-container">
      <div className="top-section">
        <form className="search-bar" onSubmit={(e) => onSubmit(e)}>
          <div>
            <label>Category</label>
            <select
              name="category"
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a category...</option>
              {categories.map((category) => {
                return <option value={category.id}>{category.name}</option>;
              })}
            </select>
          </div>
          <div>
            <label>Number of questions</label>
            <input
              type="number"
              min="1"
              max="50"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
            ></input>
          </div>
        </form>
      </div>
      <FlashcardList questions={questions} />
      {error && <div className="error-container">Error</div>}
    </div>
  );
};

export default App;
