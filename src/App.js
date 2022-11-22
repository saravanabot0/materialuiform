import React, { useState } from 'react';
import './App.css';
import { Paper, makeStyles } from '@material-ui/core';
import EventRegistration from './pages/eventRegistration/eventRegistration';

const useStyles = makeStyles(theme => (
  {
      pageContent: {
          margin: theme.spacing(5),
          padding: theme.spacing(3)
      }
  }
));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Paper className={classes.pageContent}>
        <h1 className='heading'> Event Registration Form </h1>
        <EventRegistration/>
      </Paper>
    </div>
  );
}

export default App;
