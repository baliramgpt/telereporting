import React, { useState } from 'react';
import './Report.scss';
import { GridAddIcon } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core'
import * as services from '../../services/Services';
import Controls from '../../control/Controls';
import Popup from '../modal/Popup';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import Tables from '../tables/Tables';
import { Search, NoteAdd } from '@mui/icons-material';
import { EditOutlined } from '@mui/icons-material';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { GridCloseIcon } from '@mui/x-data-grid';
import ConfirmDialog from '../modal/ConfirmDialog';
import PatientDiagnosisDetail from '../modal/PatientDiagnosisDetail';
import Typo from '../../control/Typo';
import PatientDetailsModal from '../../pages/doctor/modals/PatientDetailsModal';



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        // position: 'absolute',
        // marginLeft: '50px'
    },
    toolbar: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}))

const headCells = [
    { id: 'id', label: 'ID' },
    { id: 'fullName', label: 'Patient Name' },
    { id: 'testName', label: 'Test Name' },
    { id: 'regNo', label: 'Reg No' },
    { id: 'radiologist', label: 'Radiologist' },
    { id: 'createdAt', label: 'Created At' },
    { id: 'reportedAt', label: 'Reported At' },
    { id: 'status', label: 'Status' },
    { id: 'urgent', label: 'Urgent' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const PatientReports = () => {

    const classes = useStyles()
    const [openPopup, setOpenPopup] = useState(false)
    const [openPatientDiagnosisPopup, setOpenPatientDiagnosisPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(services.getAllReports())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [deleteRecordIndex, setDeleteRecordIndex] = useState(null)
    const [selectedRecord, setSelectedRecord] = useState(null)

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

    const addOrEdit = (doctor, resetForm) => {
        if (doctor.id == 0)
            services.insertEmployee(doctor)
        else
            services.updateEmployee(doctor)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(services.getAllReports())
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

    const handlePatientDiagnosisDetail = (index) => {
        //alert('clicked')
        setOpenPatientDiagnosisPopup(true);
        setSelectedRecord(index)
    }

    const handleSaveComment = (index, comment) => {
        alert('Comment Saved')
    }

    // const handleClosePatientDiagnosisModal = () => {
    //     setSelectedRecord(null)
    // }

    return (
        <div className='datatable'>
            <Typo
                title='Reports'
            />
            <Paper className={classes.pageContent}>
                <Toolbar className={classes.toolbar}>
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
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item, index) =>
                            (<TableRow key={index}>
                                <TableCell>{item.Id}</TableCell>
                                <TableCell>{item.patientName}</TableCell>
                                <TableCell>{item.testName}</TableCell>
                                <TableCell>{item.regNo}</TableCell>
                                <TableCell>{item.referral}</TableCell>
                                <TableCell>{item.testDate}</TableCell>
                                <TableCell>{item.testDate}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.urgent}</TableCell>
                                <TableCell>
                                    <Controls.IconButton
                                        color="primary"
                                        onClick={() => { openInPopup(item) }}>
                                        <EditOutlined fontSize="small" />
                                    </Controls.IconButton>
                                    <Controls.IconButton
                                        color="secondary"
                                        onClick={() => handleDeleteRecords(index)}
                                    >
                                        <GridCloseIcon fontSize="small" />
                                    </Controls.IconButton>
                                    <Controls.IconButton
                                        color="primary"
                                        onClick={() => handlePatientDiagnosisDetail(index)}
                                    >
                                        <AssessmentOutlinedIcon fontSize="small" />
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
                <TblPagination />
            </Paper>
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
                <PatientDiagnosisDetail
                    onSaveComment={handleSaveComment}
                />
            </Popup>
        </div>
    );
}

export default PatientReports;