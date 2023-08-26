import React, { useState, useEffect } from 'react';
import './Report.scss';
import { GridAddIcon } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core'
import * as services from '../../services/Services';
import Controls from '../../control/Controls';
import Popup from '../modal/Popup';
import EEGRegistration from '../../pages/new/EEGRegistration';
import { Grid, Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import Tables from '../tables/Tables';
import { Search, NoteAdd } from '@mui/icons-material';
import { EditOutlined } from '@mui/icons-material';
import { GridCloseIcon } from '@mui/x-data-grid';
import ConfirmDialog from '../modal/ConfirmDialog';
import AddNoteDialog from '../modal/AddNoteDialog';
import Typo from '../../control/Typo';



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
}))

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'fullName', label: 'Patient Name' },
  { id: 'testtype', label: 'Test Type' },
  { id: 'regNo', label: 'Reg No' },
  { id: 'radiologist', label: 'Cardiologist' },
  { id: 'createdAt', label: 'Created At' },
  { id: 'reportedAt', label: 'Reported At' },
  { id: 'options', label: 'Options' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const EegReports = () => {

  const classes = useStyles()
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [records, setRecords] = useState([])
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [deleteRecordIndex, setDeleteRecordIndex] = useState(null)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [showAddCommentModal, setShowAddCommentModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await services.getAllReports();
        setRecords(result.filter((item) => item.reportType === "eeg"));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = Tables(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  const addOrEdit = async (doctor, resetForm) => {
    if (doctor.id == 0)
      services.insertEmployee(doctor)
    else
      services.updateEmployee(doctor)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    const result = await services.getAllReports();
    setRecords(result);
  }

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  const handleDeleteRecords = (index) => {
    //alert('clicked')
    setShowDeleteDialog(true)
    setDeleteRecordIndex(index)
  }

  const handleDeleteConfirm = () => {
    const updatedRecords = [...records]
    updatedRecords.splice(deleteRecordIndex, 1)
    setRecords(updatedRecords)
    setShowDeleteDialog(false)
    setDeleteRecordIndex(null)
  }

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false)
    setDeleteRecordIndex(null)
  }

  const handleAddNote = (index) => {
    //alert('clicked')
    setShowAddCommentModal(true)
    setSelectedRecord(index)
  }

  const handleSaveComment = (index, comment) => {
    alert('Comment Saved')
  }

  const handleCloseAddCommentModal = () => {
    setShowAddCommentModal(false)
    setSelectedRecord(null)
  }

  return (
    <div className='datatable'>
      <Typo
        title='EEG Reports'
      />
      <Grid container alignItems="center" justifyContent="center" className={classes.container}>
        <Toolbar>
          <Controls.Input
            label="Search Patient"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add"
            variant="outlined"
            startIcon={<GridAddIcon />}
            className='newButton'
            onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
          />
        </Toolbar>
        <Grid item xs={12}>
          <div className={classes.tableContainer}>
            <TblContainer>
              <TblHead />
              <TableBody>
                {
                  recordsAfterPagingAndSorting().map((item, index) =>
                  (<TableRow key={index}>
                    <TableCell className={classes.tableCell}>{item.Id}</TableCell>
                    <TableCell className={classes.tableCell}>{item.patientName}</TableCell>
                    <TableCell className={classes.tableCell}>{item.testName}</TableCell>
                    <TableCell className={classes.tableCell}>{item.regNo}</TableCell>
                    <TableCell className={classes.tableCell}>{item.referral}</TableCell>
                    <TableCell className={classes.tableCell}>{item.testDate}</TableCell>
                    <TableCell className={classes.tableCell}>{item.testDate}</TableCell>
                    <TableCell className={classes.tableCell}>{item.testtype}</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Controls.IconButton
                        color="primary"
                        onClick={() => { openInPopup(item) }}>
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
                        onClick={() => handleAddNote(index)}
                      >
                        <span className={classes.tableCellIcon}>
                          <NoteAdd />
                        </span>
                      </Controls.IconButton>
                      {records.file && (
                        <img
                          src={URL.createObjectURL(records.file)}
                          alt='profile photo'
                        />
                      )}

                    </TableCell>
                  </TableRow>)
                  )
                }
              </TableBody>
            </TblContainer>
          </div>
          <TblPagination />
        </Grid>
      </Grid>
      <Popup
        title="Patient Details"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EEGRegistration
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          records={records}
          setRecords={setRecords}
        />
      </Popup>
      <ConfirmDialog
        showDeleteDialog={showDeleteDialog}
        title="Delete Records"
        handleDeleteConfirm={handleDeleteConfirm}
        handleDeleteCancel={handleDeleteCancel}
      />
      <AddNoteDialog
        showAddCommentModal={showAddCommentModal}
        handleCloseAddCommentModal={handleCloseAddCommentModal}
        onSaveComment={handleSaveComment}
      />
    </div>
  );
}

export default EegReports;