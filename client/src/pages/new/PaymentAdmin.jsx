import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Controls from '../../control/Controls';
import TypoPayment from '../../control/TypoPayment'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    datatable: {
        height: "600px",
        padding: "20px",
    },
    paper: {
        boxShadow: '0px 2px 10px rgba(0,0,0,0)',
        padding: '20px'
    },
    tableContainer: {
        marginTop: '40px',
        //boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
        padding: '20px'
    },
    selectOption: {
        marginLeft: "60%",
        padding: "8px 8px"
    },
    btn: {
        width: '10%',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '8px',
        borderRadius: '5px',
        cursor: 'pointer',
        //marginLeft: '-10%',
    },
    gridPaymentHistory: {
        marginTop: '10px',
        background: '#f0f3f5',
        padding: '8px 16px',
        border: '1px solid #c8ced3',
        borderRadius: '8px 8px 0 0',
        alignItems: 'center',
        color: '#ef971a'
    },
    payBtn: {
        width: '10% !important',
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
    const [remainingAmount, setRemainingAmount] = useState(100);


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
        let totalPayment = remainingAmount - amount
        setRemainingAmount(totalPayment);
        setPaymentHistory([...paymentHistory, paymentDetails]);
        setAmount("");
    };

    return (
        <div className='datatable'>
            <TypoPayment title="Make Payment" remainingAmount={remainingAmount} />
            <Grid container spacing={2} justifyContent="center" className={classes.container}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <form onSubmit={handlePaymentSubmit}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6}>
                                    <select id="payment-amount" value={amount} onChange={handleAmountChange} className={classes.selectOption}>
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
                                            <TableCell>Amount</TableCell>
                                            <TableCell>Is Direct</TableCell>
                                            <TableCell>Mode</TableCell>
                                            <TableCell>Transaction Id</TableCell>
                                            <TableCell>Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {paymentHistory.map((payment, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{payment.id}</TableCell>
                                                <TableCell>{`$${payment.amount}`}</TableCell>
                                                <TableCell>Y</TableCell>
                                                <TableCell>razorpay</TableCell>
                                                <TableCell>order_LdvqWLvkKnMIH3</TableCell>
                                                <TableCell>{payment.date}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PaymentAdmin