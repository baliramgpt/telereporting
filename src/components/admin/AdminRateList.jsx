import React, { useState } from 'react'
import TypoPayment from '../../control/TypoPayment'
import { makeStyles } from '@material-ui/core'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    FormControl,
    Select,
    MenuItem,
    Button
} from "@material-ui/core"
import { Grid, TextField } from '@mui/material'
import { useLocalStorage } from '@rehooks/local-storage'


const useStyles = makeStyles(theme => ({
    datatable: {
        height: "600px",
        padding: "20px",
    },
    // container: {
    //     padding: "30px 0px",
    //     background: "rgb(255, 255, 255)",
    //     marginBottom: "10px",
    //     borderWidth: "0px 1px 1px",
    //     borderTopStyle: "initial",
    //     borderRightStyle: "solid",
    //     borderBottomStyle: "solid",
    //     borderLeftStyle: "solid",
    //     borderTopColor: "initial",
    //     borderRightColor: "rgb(238, 238, 238)",
    //     borderBottomColor: "rgb(238, 238, 238)",
    //     borderLeftColor: "rgb(238, 238, 238)",
    //     borderImage: "initial",

    // },
    filterContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 10,
    },
}))

const options = [
    {
        id: 1,
        label: 'MRI', value: 'mri', rate: 500
    },
    {
        id: 2,
        label: 'CT-Scan', value: 'ct-scan', rate: 400
    },
    {
        id: 3,
        label: 'ECG', value: 'ecg', rate: 100
    },
    {
        id: 4,
        label: "MRI",
        value: "mri",
        rate: "$500",
    },
    {
        id: 5,
        label: "CTScan",
        value: "ctscan",
        rate: "$200",
    }
];

const AdminRateList = () => {
    const [remainingAmount, setRemainingAmount] = useState(1000);
    const [selectedTest, setSelectedTest] = useState("");
    const classes = useStyles();
    const [filter, setFilter] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const [sortColumn, setSortColumn] = useState("createdAt");
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    const [name, setName] = useState('');
    const [rate, setRate] = useState('');
    const [records, setRecords] = useLocalStorage('records', []);

    const handleTestChange = (event) => {
        setSelectedTest(event.target.value);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortDirection("asc");
            setSortColumn(column);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { selectedTest, name, rate };
        setRecords([...records, newRecord]);
        setSelectedTest('');
        setName('');
        setRate('');
    };

    const handleChange = (event) => {
        const selectedTestValue = event.target.value;
        const selectedOption = options.find(option => option.value === selectedTestValue);
        setSelectedTest(selectedTestValue);
        setRate(selectedOption.rate);
    };

    let filteredTests = selectedTest
        ? options.filter((test) => test.testName === selectedTest)
        : options;

    filteredTests = filteredTests.sort((a, b) => {
        if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });

    const totalRows = filteredTests.length;
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const displayedTests = filteredTests.slice(startIndex, endIndex);

    return (
        <div className={classes.datatable}>
            <TypoPayment title="Manage Your Bills" remainingAmount={remainingAmount} />
            <Grid container alignItems="center" justifyContent="center" className={classes.container}>
                <form variant="outlined" onSubmit={handleSubmit}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            label="Select Test"
                            value={selectedTest}
                            onChange={handleChange}
                            helperText="Please select a test"
                            fullWidth
                        >
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Rate"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
            <Grid item xs={12}>
                {options.length >= 0 && (
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell onClick={() => handleSort("id")}>Id {sortColumn === "id" ? `(${sortDirection})` : ""}</TableCell>
                                    <TableCell>Test</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Rate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {records.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.selectedTest}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{`${item.rate}`}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Button onClick={() => handleChangePage(null, page - 1)} disabled={page === 0}>
                            Previous Page
                        </Button>
                        <Button onClick={() => handleChangePage(null, page + 1)} disabled={endIndex >= totalRows}>
                            Next Page
                        </Button>
                    </TableContainer>
                )}
            </Grid>
        </div>
    )
}

export default AdminRateList