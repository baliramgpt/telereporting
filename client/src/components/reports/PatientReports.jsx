import React, { useState, useEffect } from "react";
import "./Report.scss";
import { GridAddIcon } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core";
import * as services from "../../services/Services";
import Controls from "../../control/Controls";
import Popup from "../modal/Popup";
import {
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Grid
} from "@mui/material";
import Tables from "../tables/Tables";
import { Search, NoteAdd } from "@mui/icons-material";
import { EditOutlined } from "@mui/icons-material";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import { GridCloseIcon } from "@mui/x-data-grid";
import ConfirmDialog from "../modal/ConfirmDialog";
import PatientDiagnosisDetail from "../modal/PatientDiagnosisDetail";
import Typo from "../../control/Typo";
import PatientDetailsModal from "../../pages/doctor/modals/PatientDetailsModal";

const useStyles = makeStyles((theme) => ({
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
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  },
  searchInput: {
    width: '100%',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
  },
  newButton: {
    position: 'relative',
    width: '100%',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      position: 'absolute',
      right: theme.spacing(1),
      bottom: theme.spacing(1),
      marginBottom: 0,
    },
  },
  tableCell: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
  },
  tableCellIcon: {
    marginRight: theme.spacing(1),
  },
  tableContainer: {
    overflow: 'auto',
  },
  responsiveTableCell: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
    },
  },
  toolbar: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const headCells = [
  { id: "id", label: "ID" },
  { id: "fullName", label: "Patient Name" },
  { id: "testName", label: "Test Name" },
  { id: "regNo", label: "Reg No" },
  { id: "radiologist", label: "Radiologist" },
  { id: "createdAt", label: "Created At" },
  { id: "reportedAt", label: "Reported At" },
  { id: "status", label: "Status" },
  { id: "urgent", label: "Urgent" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const PatientReports = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPatientDiagnosisPopup, setOpenPatientDiagnosisPopup] =
    useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteRecordIndex, setDeleteRecordIndex] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    Tables(records, headCells, filterFn);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await services.getAllReports();
        setRecords(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = async (doctor, resetForm) => {
    if (doctor.id == 0) services.insertEmployee(doctor);
    else services.updateEmployee(doctor);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    const result = await services.getAllReports();
    setRecords(result);
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const handleDeleteRecords = (index) => {
    //alert('clicked')
    setShowDeleteDialog(true);
    setDeleteRecordIndex(index);
  };

  const handleDeleteConfirm = () => {
    const updatedRecords = [...records];
    updatedRecords.splice(deleteRecordIndex, 1);
    setRecords(updatedRecords);
    setShowDeleteDialog(false);
    setDeleteRecordIndex(null);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
    setDeleteRecordIndex(null);
  };

  const handlePatientDiagnosisDetail = (index) => {
    //alert('clicked')
    setOpenPatientDiagnosisPopup(true);
    setSelectedRecord(index);
  };

  const handleSaveComment = (index, comment) => {
    alert("Comment Saved");
  };

  // const handleClosePatientDiagnosisModal = () => {
  //     setSelectedRecord(null)
  // }

  return (
    <div className="datatable">
      <Typo title="Reports" />
      <Grid container alignItems="center" justifyContent="center" className={classes.container}>
        <Toolbar>
          <Controls.Input
            label="Search Patient"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add"
            variant="outlined"
            startIcon={<GridAddIcon />}
            className="newButton"
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <div className={classes.tableContainer}>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.tableCell}>{item.regNo}</TableCell>
                  <TableCell className={classes.tableCell}>{item.patientName}</TableCell>
                  <TableCell className={classes.tableCell}>{item.testName}</TableCell>
                  <TableCell className={classes.tableCell}>{item.regNo}</TableCell>
                  <TableCell className={classes.tableCell}>{item.referral}</TableCell>
                  <TableCell className={classes.tableCell}>{item.testDate}</TableCell>
                  <TableCell className={classes.tableCell}>{item.testDate}</TableCell>
                  <TableCell className={classes.tableCell}>{item.status}</TableCell>
                  <TableCell className={classes.tableCell}>{item.urgent}</TableCell>
                  <TableCell className={classes.tableCell}>
                    <Controls.IconButton
                      color="primary"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <span className={classes.tableCellIcon}>
                        <EditOutlined fontSize="small" />
                      </span>
                    </Controls.IconButton>
                    <Controls.IconButton
                      color="secondary"
                      onClick={() => handleDeleteRecords(index)}
                    >
                      <span className={classes.tableCellIcon}>
                        <GridCloseIcon fontSize="small" />
                      </span>
                    </Controls.IconButton>
                    <Controls.IconButton
                      color="primary"
                      onClick={() => handlePatientDiagnosisDetail(index)}
                    >
                      <span className={classes.tableCellIcon}>
                        <AssessmentOutlinedIcon fontSize="small" />
                      </span>
                    </Controls.IconButton>
                    {records.file && (
                      <img
                        src={URL.createObjectURL(records.file)}
                        alt="profile photo"
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
        </div>
        <TblPagination />
      </Grid>
      <Popup
        title="Patient Details"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <PatientDetailsModal
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <ConfirmDialog
        showDeleteDialog={showDeleteDialog}
        title="Delete Records"
        handleDeleteConfirm={handleDeleteConfirm}
        handleDeleteCancel={handleDeleteCancel}
      />
      <Popup
        title="Patient Diagnosis Details"
        openPopup={openPatientDiagnosisPopup}
        setOpenPopup={setOpenPatientDiagnosisPopup}
      >
        <PatientDiagnosisDetail onSaveComment={handleSaveComment} />
      </Popup>
    </div>
  );
};

export default PatientReports;
