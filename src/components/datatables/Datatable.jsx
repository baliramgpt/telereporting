import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { GridAddIcon } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import * as services from '../../services/Services';
import Controls from '../../control/Controls';
import Popup from '../modal/Popup';
import NewPage from '../../pages/new/NewPage';
import NewRegistration from '../../pages/new/NewRegistration';

const Datatable = () => {

    const [data, setData] = useState(userRows);
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to='/users/test' style={{ textDecoration: 'none' }}>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <div className='datatableTitle'>
                Add New Users
                <Controls.Button
                    text="Add"
                    variant="outlined"
                    startIcon={<GridAddIcon />}
                    className='newButton'
                    onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                />
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={3}
                rowsPerPageOptions={[3]}
                checkboxSelection
            />
            <Popup
                title="Patient Details"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <NewRegistration
                    recordForEdit={recordForEdit}
                />
            </Popup>
        </div>
    );
}

export default Datatable;