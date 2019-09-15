import React from 'react';
import { Table, Grid, TableBody, TableCell, Fade, CircularProgress, Typography, TableRow, Paper, makeStyles  } from '@material-ui/core';
import './style.less';

const IntelligenceReports = ({data}) => {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log('1I am in..')
    let tLoading = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(tLoading)
  });


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

  return <Paper className='intelligence-reports'>
          {loading ? <Fade
            in={loading}
            style={{
              transitionDelay: loading ? '800ms' : '0ms',
            }}
            className='loader'
            unmountOnExit
          >
            <div>
            <Typography variant="h5" component="h3">Loading...</Typography>
            <CircularProgress />
            </div>
          </Fade> : <>
                <Table className={classes.table}>
                  <TableBody>
                    {data.rows.length ? data.rows.map((row,i) => (
                      <TableRow key={row.name} key={i}>
                        <TableCell component="th" scope="row">
                          {row.num}
                        </TableCell>
                        <TableCell align="left">
                            <Typography variant="h5" component="h3">{row.title}</Typography>
                            <Typography variant="h6" component="h3">{row.time}</Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography variant="h5" component="h3">{row.src}</Typography>
                          <Typography variant="h6" component="h3">{row.isClassified ? 'Classified' : 'unClassified'}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="h5" component="h3">{row.status}</Typography>
                        </TableCell>
                      </TableRow>
                    )) :
                    <h2>No data</h2>}
                  </TableBody>
                    </Table></>}
              </Paper>
}

export default IntelligenceReports;