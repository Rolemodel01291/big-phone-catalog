import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Body from './Body';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFFFFF',
    padding: "50px",
  },
});

const Shopping = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header title="Big Phone Catalog"/>
      <Body/>
    </div>
  );
}

export default Shopping;
