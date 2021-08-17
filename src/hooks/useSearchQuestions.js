import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../apis/opentdb';

export const useSearchQuestions = (category, numberOfQuestions) => {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setError(false);

        const data = await axios.get(`${API_URL}/api_category.php`);
        console.log(data);

        if (data.status !== 200) throw new Error();

        setCategories(data.data.trivia_categories);
      } catch (err) {
        setError(true);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setError(false);

        const data = await axios.get(`${API_URL}/api.php`, {
          params: {
            amount: numberOfQuestions,
            category: category,
          },
        });

        if (data.status !== 200) throw new Error();

        setQuestions(data.data.results);
      } catch (err) {
        setError(true);
      }
    };
    fetchQuestions();
  }, [category, numberOfQuestions]);

  return [questions, categories, error];
};
