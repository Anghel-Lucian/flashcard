import React, { useState } from 'react';
import { decodeString } from '../apis/opentdb';

const Flashcard = ({ question }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className="front">
        <div className="question">{decodeString(question.question)}</div>
        <div className="possible-answers">
          {[...question.incorrect_answers, question.correct_answer].map(
            (answer) => (
              <p className="possible-answer">{decodeString(answer)}</p>
            )
          )}
        </div>
      </div>
      <div className="back">
        <div className="answer">{decodeString(question.correct_answer)}</div>
      </div>
    </div>
  );
};

export default Flashcard;
