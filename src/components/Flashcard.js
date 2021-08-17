import React, { useState, useRef } from 'react';
import { decodeString } from '../apis/opentdb';

const Flashcard = ({ question }) => {
  const [flip, setFlip] = useState(false);

  const cardFront = useRef();
  const cardBack = useRef();

  const onFlip = () => {
    if (!flip) {
      return (
        <div className="front" ref={cardFront}>
          <div className="question">{decodeString(question.question)}</div>
          <div className="possible-answers">
            {[...question.incorrect_answers, question.correct_answer].map(
              (answer) => (
                <p className="possible-answer">{decodeString(answer)}</p>
              )
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="back" ref={cardBack}>
          <div className="answer">{decodeString(question.correct_answer)}</div>
        </div>
      );
    }
  };

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className="front" ref={cardFront}>
        <div className="question">{decodeString(question.question)}</div>
        <div className="possible-answers">
          {[...question.incorrect_answers, question.correct_answer].map(
            (answer) => (
              <p className="possible-answer">{decodeString(answer)}</p>
            )
          )}
        </div>
      </div>
      <div className="back" ref={cardBack}>
        <div className="answer">{decodeString(question.correct_answer)}</div>
      </div>
    </div>
  );
};

export default Flashcard;
