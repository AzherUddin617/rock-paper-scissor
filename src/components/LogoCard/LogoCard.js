import React from 'react';
import classes from './LogoCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogoCard = ({ icon, result }) => {
  const rootClass = [classes.LogoCard];
  if (result) rootClass.push(classes.Result);

  return (
    <div className={rootClass.join(' ')}>
      <div className={classes.Back}></div>
      <div className={classes.Logo}>
        <FontAwesomeIcon icon={icon} fontSize="inherit" color="inherit" />
      </div>
    </div>
  );
}

export default LogoCard;
