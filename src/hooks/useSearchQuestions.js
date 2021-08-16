import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://opentdb.com';

export const useSearchQuestions = (category, numberOfQuestions) => {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);

  // FIXME: solve this, API is continuously called and returns categories. Thus, the state changes, and the component App re-renders infinitely. Solve it.
  const fetchCategories = async () => {
    const { data } = await axios.get(`${API_URL}/api_category.php`);
    console.log(data);
    // setCategories(data.trivia_categories);
  };
  fetchCategories();

  const fetchQuestions = async () => {
    const data = await axios.get(
      `${API_URL}/api.php?amount=${numberOfQuestions}&category=${category}`
    );
    // console.log(data);
  };
  // fetchQuestions();

  return [questions, categories];
};
