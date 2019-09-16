import React from 'react';
import { Fade, CircularProgress, Typography, Paper, makeStyles  } from '@material-ui/core';
import {IRTable} from './components';
import {Fetcher} from '../../components';
import api from './api';
import './style.less';

const IntelligenceReports = ({data}) => {

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));

  const classes = useStyles();

  return <Fetcher action={api.test(1)}>
          {data => <IRTable rows={data.rows} classes={classes}/>}
         </Fetcher>
}

export default IntelligenceReports;