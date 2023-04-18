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


const useStyles = makeStyles(theme => ({
  datatable: {
    height: "600px",
    padding: "20px",
  },
  container: {
    padding: "30px 0px",
    background: "rgb(255, 255, 255)",
    marginBottom: "10px",
    borderWidth: "0px 1px 1px",
    borderTopStyle: "initial",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderLeftStyle: "solid",
    borderTopColor: "initial",
    borderRightColor: "rgb(238, 238, 238)",
    borderBottomColor: "rgb(238, 238, 238)",
    borderLeftColor: "rgb(238, 238, 238)",
    borderImage: "initial",

  },
  filterContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
}))

const data = [
  {
    id: 1,
    testName: "X Ray",
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    price: "$100",
    createdAt: "2022-03-01",
    reportedAt: "2022-03-03",
  },
  {
    id: 2,
    testName: "ECG",
    patientName: "Jane Smith",
    doctorName: "Dr. Johnson",
    price: "$50",
    createdAt: "2022-03-02",
    reportedAt: "2022-03-04",
  },
  {
    id: 3,
    testName: "EEG",
    patientName: "Bob Johnson",
    doctorName: "Dr. Kim",
    price: "$500",
    createdAt: "2022-03-05",
    reportedAt: "2022-03-06",
  },
  {
    id: 4,
    testName: "MRI",
    patientName: "Bob Johnson",
    doctorName: "Dr. Kim",
    price: "$500",
    createdAt: "2022-03-05",
    reportedAt: "2022-03-06",
  },
  {
    id: 5,
    testName: "CTScan",
    patientName: "Bob Johnson",
    doctorName: "Dr. Kim",
    price: "$500",
    createdAt: "2022-03-05",
    reportedAt: "2022-03-06",
  },
  {
    id: 6,
    testName: "X Ray",
    patientName: "Ashish Doe",
    doctorName: "Dr. Smith",
    price: "$100",
    createdAt: "2022-02-07",
    reportedAt: "2022-06-22",
  },
  {
    id: 7,
    testName: "ECG",
    patientName: "Veda Smith",
    doctorName: "Dr. Johnson",
    price: "$50",
    createdAt: "2022-11-20",
    reportedAt: "2022-12-15",
  },
  {
    id: 8,
    testName: "EEG",
    patientName: "Baliram Johnson",
    doctorName: "Dr. Kim",
    price: "$500",
    createdAt: "2022-08-19",
    reportedAt: "2022-12-24",
  },
  {
    id: 9,
    testName: "MRI",
    patientName: "Isha Johnson",
    doctorName: "Dr. Kim",
    price: "$500",
    createdAt: "2022-06-09",
    reportedAt: "2022-09-16",
  },
];

const BillingReport = () => {
  const [remainingAmount, setRemainingAmount] = useState(1000);
  const [selectedTest, setSelectedTest] = useState("");
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortColumn, setSortColumn] = useState("createdAt");
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

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

  let filteredTests = selectedTest
    ? data.filter((test) => test.testName === selectedTest)
    : data;

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
        <FormControl variant="outlined">
          <Grid className={classes.filterContainer}>
            <Select
              value={selectedTest}
              onChange={handleTestChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Select Test" }}
            >
              <MenuItem value="">
                Select Test
              </MenuItem>
              {data.map((test) => (
                <MenuItem key={test.id} value={test.testName}>
                  {test.testName}
                </MenuItem>
              ))}
            </Select>
          </Grid>

        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {data.length >= 0 && (
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell onClick={() => handleSort("id")}>Id {sortColumn === "id" ? `(${sortDirection})` : ""}</TableCell>
                  <TableCell>TestName</TableCell>
                  <TableCell>PatientName</TableCell>
                  <TableCell>DoctorName</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>createdAt</TableCell>
                  <TableCell>reportedAt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedTests.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.testName}</TableCell>
                    <TableCell>{item.patientName}</TableCell>
                    <TableCell>{item.doctorName}</TableCell>
                    <TableCell>{`${item.price}`}</TableCell>
                    <TableCell>{item.createdAt}</TableCell>
                    <TableCell>{item.reportedAt}</TableCell>
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

export default BillingReport