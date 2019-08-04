import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  loading: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  progressSpinner: {
    position: 'fixed',
    top: 'calc( 50% - ( 150px / 2) )'
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress className={classes.progressSpinner} size={150} />
    </div>
  );
};

export default Loading;
