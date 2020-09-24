import React, { useState, useEffect } from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import LogoCard from './components/LogoCard/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const animationTypes = {
  SELECTION: 'SELECTION',
  RESULT: 'RESULT'
};

const cardTypes = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSOR: "SCISSOR"
};

const cards = [
  { className: classes.Card1, icon: faHandRock, type: cardTypes.ROCK },
  { className: classes.Card2, icon: faHandPaper, type: cardTypes.PAPER },
  { className: classes.Card3, icon: faHandScissors, type: cardTypes.SCISSOR },
  { className: classes.Right }
];

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [win, setWin] = useState(null);
  const [score, setScore] = useState(0);
  const [randomCard, setRandomCard] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(()=> {
    if (randomCard !== null && selectedCard !== null) {
      let winAns = false;
      if (randomCard === selectedCard)
        winAns = "DRAW";
      else if (cards[selectedCard].type === cardTypes.ROCK && cards[randomCard].type === cardTypes.SCISSOR) {
        winAns = true;
      }
      else if (cards[selectedCard].type === cardTypes.PAPER && cards[randomCard].type === cardTypes.ROCK) {
          winAns = true;
      }
      else if (cards[selectedCard].type === cardTypes.SCISSOR && cards[randomCard].type === cardTypes.PAPER) {
        winAns = true;
      }

      if (winAns != null) {
        setWin(winAns);
        if (winAns === true) setScore(prevScore => prevScore + 1);
      }
    }
  }, [randomCard, selectedCard]);

  const cardClass = [classes.LogoCard];
  if (selectedCard !== null) cardClass.push(classes.Selected);
  if (showResult && randomCard !== null) cardClass.push(classes.Result);

  const retryGame = ()=> {
    setSelectedCard(null);
    setWin(null);
    setRandomCard(null);
    setShowResult(false);
  }

  const animationEnd = (type) => {
    switch(type) {
      case animationTypes.SELECTION:
        const randomIndex = Math.floor(Math.random() * (cards.length-1));
        if (randomCard === null) setRandomCard(randomIndex);
        if (!showResult) setShowResult(true);
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.App}>
      <Header score={score} />
      
      <div className={[classes.MainArea, 'container'].join(' ')}>
        {cards.map((card, i) => {
          const classNames = [...cardClass];
          if (card.className) classNames.push(card.className);

          const extraProps = {};
          let icon = card.icon;

          if (showResult && card.className === classes.Right && randomCard !== null) {
            icon = cards[randomCard].icon;
          }
          if (card.className !== classes.Right)
            extraProps.onClick = ()=> setSelectedCard(i);
          if (i === selectedCard) {
            classNames.push(classes.Active);
            extraProps.onAnimationEnd = ()=> animationEnd(animationTypes.SELECTION);
          }

          return (
            <div key={i} 
              className={classNames.join(' ')}
              {...extraProps}
            >
              <LogoCard icon={icon} result={showResult} />
            </div>
          )
        })}

        {(() => {
          const classNames = [classes.ResultShow];
          if (win !== null) classNames.push(classes.Show);

          return (
            <div className={classNames.join(' ')}>
              { win !== null && 
                (win === 'DRAW' ?
                  <h2 className={[classes.ResultText, classes.Win].join(' ')}>Draw :|</h2> :
                  (win ? 
                  <h2 className={[classes.ResultText, classes.Win].join(' ')}>You Win :)</h2> :
                  <h2 className={[classes.ResultText, classes.Lose].join(' ')}>You Lose :(</h2>))
              }
              <button className={classes.RetryButton} onClick={retryGame}>
                <FontAwesomeIcon icon={faReply} color="inherit" fontSize="inherit" />
              </button>
            </div>
          )
        })()}
      </div>
      
    </div>
  );
}

export default App;
