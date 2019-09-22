import React from 'react';
import { Table, TableBody, TableCell, Typography, TableRow, Paper } from '@material-ui/core';



const IRTable = ({ rows, classes }) => {

    const getCellBgColor = (amt, isStr) => {
        let n = Number(amt);
        return !isStr ? ({
          backgroundColor: n > 85 ? '#ca0000' :  'rgba(0, 0, 0, 0.5)',
          color: n > 85 ? '#fff' :  'rgba(0, 0, 0, 0.5)'
        }) : n > 85 ? 'High' :  'Low';
      };

    return <Paper className='intelligence-reports'>
        <Table className={classes.table}>
        <colgroup>
            <col width="5%" />
            <col width="45%" />
            <col width="40%" />
            <col width="10%" />
        </colgroup>
        <TableBody>
            {rows.map((row,i) => (
            <TableRow key={row.name} key={i}>
                <TableCell component="th" scope="row" style={getCellBgColor(row.num)} className='notifications-cell'
                onClick={()=>console.log(`You clicked ${row.num}`)}>
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
                <Typography variant="h5" component="h3" style={{color:Number(row.num) > 85 ? '#b70000' : '#292929'}}>{getCellBgColor(row.num,true)}</Typography>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
        </Paper>
};
export default IRTable;