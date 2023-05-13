import React, { useState, useEffect } from 'react'
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
    Button,
    Modal,
    InputLabel
} from "@material-ui/core"
import { Grid, TextField } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const useStyles = makeStyles(theme => ({
    datatable: {
        height: "600px",
        padding: "20px",
    },
    filterContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 10,
    },
}))

const AdminRateList = () => {
    const [remainingAmount, setRemainingAmount] = useState(1000);
    const [selectedTest, setSelectedTest] = useState("");
    const classes = useStyles();
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    const [open, setOpen] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [rate, setRate] = useState(0);
    const [records, setRecords] = useState([]);
    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');


    const handleTestChange = (event) => {
        setSelectedTest(event.target.value);
        switch (event.target.value) {
            case 'MRI':
                setRate(500);
                break;
            case 'CTScan':
                setRate(400);
                break;
            case 'ECG':
                setRate(200);
                break;
            default:
                setRate(0);
                break;
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn("asc");
            setSortOrder(column);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {
            test: selectedTest,
            text: textValue,
            rate: rate,
        };
        //setRecords([...records, newRecord]);
        setRecords((prevRecords) => [...prevRecords, newRecord]);
        setSelectedTest('');
        setTextValue('');
        setRate(0);

        handleClose();
    };

    useEffect(() => {
        localStorage.setItem('testRecords', JSON.stringify(records));
    }, [records]);

    useEffect(() => {
        const savedRecords = JSON.parse(localStorage.getItem('testRecords'));
        if (savedRecords) {
            setRecords(savedRecords);
        }
    }, []);

    const sortedRecords = [...records].sort((a, b) => {
        // Sort the records based on the sortColumn and sortOrder
        if (sortOrder === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });

    const totalRows = sortedRecords.length;
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    //const displayedTests = filteredTests.slice(startIndex, endIndex);

    return (
        <div className={classes.datatable}>
            <TypoPayment title="Manage Your Rate List" remainingAmount={remainingAmount} />
            <Grid container alignItems="center" justifyContent="center" className={classes.container} style={{ marginBottom: '20px', marginTop: '20px' }}>
                <Button variant="contained" onClick={handleOpen}>
                    Request Test
                </Button>
                <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="modal-container" style={{ backgroundColor: 'white', width: 400, height: 300, padding: 20 }}>
                        <h2>Test Request Form</h2>
                        <FormControl fullWidth style={{ marginBottom: '10px' }}>
                            <InputLabel>Test</InputLabel>
                            <Select value={selectedTest} onChange={handleTestChange}>
                                <MenuItem value="MRI">MRI</MenuItem>
                                <MenuItem value="CTScan">CT Scan</MenuItem>
                                <MenuItem value="ECG">ECG</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Text"
                            value={textValue}
                            onChange={handleTextChange}
                            style={{ marginBottom: '10px' }}
                        />
                        <TextField
                            fullWidth
                            label="Rate"
                            value={rate}
                            disabled
                            style={{ marginBottom: '10px' }}
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button variant='contained' onClick={handleClose} style={{ marginLeft: '20px' }}>Cancel</Button>
                    </div>
                </Modal>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Test</TableCell>
                                <TableCell>Text</TableCell>
                                <TableCell>Rate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {records.map((record, index) => (
                                <TableRow key={index}>
                                    <TableCell>{record.test}</TableCell>
                                    <TableCell>{record.text}</TableCell>
                                    <TableCell>{record.rate}</TableCell>
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
            </Grid>
        </div>
    )
}

export default AdminRateList