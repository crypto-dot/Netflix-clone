import './UserList.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { UserRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState, React, useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext/userContext';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';

const UserList = () => {
    const { dispatch, users } = useContext(UserContext);
    const handleDelete = (userId) => {
        deleteUser(userId, dispatch);
    }
    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            renderCell: (params) => {
                return (
                    <div className='userCell'>
                        <img className='userCellImg' src={params.row.profilePic} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            },
            width: 200,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'admin',
            headerName: 'Administrator',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row._id}`}
                            state={{ user: params.row }}
                        >
                            <button className='userCellEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userCellDelete' onClick={() => handleDelete(params.row._id)} />
                    </>
                );
            }
        }
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                getRowId={r => r._id}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList