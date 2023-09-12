import React, { useState, useEffect } from 'react';
import './Report.scss';
import { GridAddIcon } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core'
import * as services from '../../services/Services';
import Controls from '../../control/Controls';
import Popup from '../modal/Popup';
import { Grid, Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import Tables from '../tables/Tables';
import { Search, NoteAdd } from '@mui/icons-material';
import { EditOutlined } from '@mui/icons-material';
import { GridCloseIcon } from '@mui/x-data-grid';
import ConfirmDialog from '../modal/ConfirmDialog';
import Typo from '../../control/Typo';
import NewUserRegistration from './Modals/NewUserRegistration'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
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
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    },
    modelsContainer: {
        marginRight: '-40%'
    }
}))

const headCells = [
    { id: 'id', label: 'ID' },
    { id: 'fullName', label: 'Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'mobile', label: 'Contact Number' },
    { id: 'role', label: 'Role' },
    { id: 'address', label: 'Address' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const UsersList = () => {

    const classes = useStyles()
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [deleteRecordIndex, setDeleteRecordIndex] = useState(null)
    const [selectedRecord, setSelectedRecord] = useState(null)
    const [showAddCommentModal, setShowAddCommentModal] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = Tables(records, headCells, filterFn);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await services.getAllUsers();
                setRecords(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value))
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
        const result = await services.getAllUsers();
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

    return (
        <div className={classes.root}>
            <div className={classes.datatable}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typo
                                title='User Lists'
                            />
                        </Paper>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" className={classes.container} item xs={12} sm={12}>
                        <Toolbar>
                            <Controls.Input
                                label="Search User"
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
                            <TblContainer>
                                <TblHead />
                                <TableBody>
                                    {
                                        recordsAfterPagingAndSorting().map((item, index) =>
                                        (<TableRow key={index}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.contactNo}</TableCell>
                                            <TableCell>{item.role}</TableCell>
                                            <TableCell>{item.address}</TableCell>
                                            <TableCell>{item.options}</TableCell>
                                            <TableCell className={classes.modelsContainer}>
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
                                            </TableCell>
                                        </TableRow>)
                                        )
                                    }
                                </TableBody>
                            </TblContainer>
                        </Grid>

                        <TblPagination />
                    </Grid>
                    <Popup
                        title="New User"
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    >
                        <NewUserRegistration
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
                </Grid>
            </div>
        </div>
    );
}

export default UsersList;