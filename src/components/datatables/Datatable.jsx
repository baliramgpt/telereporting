import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';

const Datatable = () => {

    const [data, setData] = useState(userRows);

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
                <Link to='/users/new' style={{ textDecoration: 'none', color: 'rgb(178, 178, 247)', border: '1px solid gray', padding: '2px 5px', }}>
                    Add New
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={3}
                rowsPerPageOptions={[3]}
                checkboxSelection
            />
        </div>
    );
}

export default Datatable;