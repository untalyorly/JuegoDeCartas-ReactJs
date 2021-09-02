import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from "../img/backface.png";
import "../App.css";

function Cards({
  name,
  number,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700);
    }
  }, [unflippedCards]);

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  const handleClick = () => {
    const valor = flipCard(name, number);
    if (valor !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="card-img"
          src={backFace}
          alt="backFace"
          onClick={hasEvent ? handleClick : null}
        />
        <img
          className="card-img"
          src={frontFace}
          alt="frontFace"
          onClick={hasEvent ? handleClick : null}
        />
      </ReactCardFlip>
    </div>
  );
}

export default Cards;
