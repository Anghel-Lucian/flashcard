import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = () => {
  const quiz = [
    {
      question: 'What does the fox say?',
      answer: 'Bark',
      possibleAnswers: ['Bark', 'Meow', 'Woof'],
    },
    {
      question: 'Is this a test question?',
      answer: 'Yes',
      possibleAnswers: ['Bark', 'Meow', 'Woof'],
    },
    {
      question: 'Have you run out of ideas for questions?',
      answer: 'Maybe...',
      possibleAnswers: ['Bark', 'Meow', 'Woof'],
    },
  ];

  console.log(quiz);
  const renderedFlashcards = quiz.map((set) => {
    return (
      <li key={set.question}>
        <Flashcard data={set} />
      </li>
    );
  });

  return <ul className="card-list">{renderedFlashcards}</ul>;
};

export default FlashcardList;
