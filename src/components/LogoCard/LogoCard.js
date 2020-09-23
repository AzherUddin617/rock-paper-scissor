import React from 'react';
import classes from './LogoCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const LogoCard = ({ logo }) => {

  return (
    <div className={classes.LogoCard}>
      <div className={classes.Back}>
        <FontAwesomeIcon icon={faPlay} fontSize="inherit" color="inherit"/>
      </div>
    </div>
  );
}

export default LogoCard;
