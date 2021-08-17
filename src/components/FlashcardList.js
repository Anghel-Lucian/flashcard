import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ questions }) => {
  const renderedFlashcards = questions?.map((question) => {
    return (
      <li key={question.question}>
        <Flashcard question={question} />
      </li>
    );
  });

  return <ul className="card-list">{renderedFlashcards}</ul>;
};

export default FlashcardList;
