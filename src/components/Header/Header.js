import React from 'react';
import classes from './Header.module.scss';

const Header = ({ score }) => {
  return (
    <header className={[classes.Header, 'container'].join(' ')}>
      <div className={classes.Logo}>
        <h1 className={[classes.LogoText, classes.Text1].join(' ')}>Rock</h1>
        <h1 className={[classes.LogoText, classes.Text2].join(' ')}>Paper</h1>
        <h1 className={[classes.LogoText, classes.Text3].join(' ')}>Sicssor</h1>
      </div>

      <div className={classes.Score}>
        <p className={classes.Text}>Score</p>
        <p className={classes.Value}>{score > 9 ? score : '0'+score}</p>
      </div>
    </header>
  );
}

export default Header;
