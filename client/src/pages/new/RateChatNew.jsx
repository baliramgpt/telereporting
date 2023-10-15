import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import Typo from '../../control/Typo'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    datatable: {
        height: "600px",
        padding: "20px",
    },
    tableContainer: {
        marginTop: '40px',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 5px 0px #ccc',
    },
    tableCell: {
        borderRight: '1px solid #ccc',
    },
});


const testPrices = [
    { testName: 'Complete Blood Count (CBC)', price: '$50' },
    { testName: 'Chemistry Panel', price: '$100' },
    { testName: 'Lipid Panel', price: '$150' },
];


const RateChatNew = () => {
    const classes = useStyles();
    return (
        <div className={classes.datatable}>
            <Typo
                title='Rate Card'
            />
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table size="small" align="center">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>Test Name</TableCell>
                                    <TableCell>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {testPrices.map((testPrice, index) => (
                                    <TableRow key={index}>
                                        <TableCell className={classes.tableCell}>{testPrice.testName}</TableCell>
                                        <TableCell>{testPrice.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default RateChatNew