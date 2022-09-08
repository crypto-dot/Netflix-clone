import './UserList.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { UserRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState, React } from 'react';



const UserList = () => {
    const [data, setData] = useState(UserRows);
    const handleDelete = (userId) => {
        setData(data.filter(userRow => {
            return userRow.id !== userId;
        }));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            renderCell: (params) => {
                return (
                    <div className='userCell'>
                        <img className='userCellImg' src={params.row.avatar} alt="avatar" />
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
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            type: 'number',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className='userCellEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userCellDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        }
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList