import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Controls from '../../control/Controls';
import TypoPayment from '../../control/TypoPayment'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        margin: '0 auto',
        maxWidth: '500px'
    },
    paper: {
        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
        padding: '20px'
    },
    tableContainer: {
        marginTop: '40px',
        //boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
        padding: '20px'
    },
    btn: {
        width: '100%',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    gridPaymentHistory: {
        background: '#f0f3f5',
        padding: '8px 16px',
        border: '1px solid #c8ced3',
        borderRadius: '8px 8px 0 0',
        alignItems: 'center',
    }

}))

const paymentOptions = [
    { label: '$10', value: 10 },
    { label: '$20', value: 20 },
    { label: '$50', value: 50 },
    { label: '$100', value: 100 },
];

const PaymentAdmin = (props) => {

    const [amount, setAmount] = useState('');
    const classes = useStyles();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [remainingAmount, setRemainingAmount] = useState(500);


    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        // Here need to initiate the payment using payment gateway or API
        const paymentDetails = {
            id: paymentHistory.length + 1,
            amount: amount,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
        setRemainingAmount(remainingAmount - amount);
        setPaymentHistory([...paymentHistory, paymentDetails]);
        setAmount("");
    };

    return (
        <>
            <TypoPayment title="Make Payment" remainingAmount={remainingAmount} />
            <Grid container spacing={2} justifyContent="center" className={classes.container}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <form onSubmit={handlePaymentSubmit}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="payment-amount" style={{ display: 'block' }}>
                                        Payment Amount:
                                    </label>
                                    <select id="payment-amount" value={amount} onChange={handleAmountChange} style={{ width: '100%' }}>
                                        <option value="">Select an amount</option>
                                        {paymentOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Button
                                        type="submit"
                                        disabled={!amount}
                                        className={classes.btn}
                                        text='Pay'
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                    <Grid item xs={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={12} className={classes.gridPaymentHistory}>
                        <h2>Payment History</h2>
                    </Grid>
                    <Grid item xs={12}>
                        {paymentHistory.length >= 0 && (
                            <TableContainer component={Paper} className={classes.tableContainer}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell>Payment Date</TableCell>
                                            <TableCell>Payment Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paymentHistory.map((payment, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{payment.id}</TableCell>
                                                <TableCell>{payment.date}</TableCell>
                                                <TableCell>{`$${payment.amount}`}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default PaymentAdmin