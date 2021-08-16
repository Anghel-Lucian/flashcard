import React, { useState, useRef } from 'react';

const Flashcard = ({ data }) => {
  const [flip, setFlip] = useState(true);

  const cardFront = useRef();
  const cardBack = useRef();

  const onFlip = () => {
    if (flip) {
      return (
        <div className="front" ref={cardFront}>
          <div className="question">{data.question}</div>
          <div className="possible-answers">
            {data.possibleAnswers.map((possibleAnswer) => (
              <p className="possible-answer">{possibleAnswer}</p>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="back" ref={cardBack}>
          <div className="answer">{data.answer}</div>
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
      {onFlip()}
    </div>
  );
};

export default Flashcard;
