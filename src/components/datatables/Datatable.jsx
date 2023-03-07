import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Datatable.scss';
import { GridAddIcon } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core'
import * as services from '../../services/Services';
import Controls from '../../control/Controls';
import Popup from '../modal/Popup';
import NewRegistration from '../../pages/new/NewRegistration';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import Tables from '../tables/Tables';
import { Search } from '@mui/icons-material';
import { EditOutlined } from '@mui/icons-material';
import { GridCloseIcon } from '@mui/x-data-grid';


const useStyles = makeStyles(theme => ({
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
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const Datatable = () => {

    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(services.getAllDetails())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

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
        setRecords(services.getAllDetails())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <div className='datatable'>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add User"
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
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                        onClick={() => { openInPopup(item) }}>
                                        <EditOutlined fontSize="small" />
                                    </Controls.ActionButton>
                                    <Controls.ActionButton
                                        color="secondary">
                                        <GridCloseIcon fontSize="small" />
                                    </Controls.ActionButton>
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
                <NewRegistration
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
        </div>
    );
}

export default Datatable;