
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect, React } from 'react';
import { ListContext } from '../../context/listContext/listContext';
import { deleteList } from '../../context/listContext/apiCalls';
import './Lists.scss';
import { getLists } from '../../context/listContext/apiCalls';

const Lists = () => {
    const { dispatch, lists } = useContext(ListContext);
    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
        deleteList(id, dispatch);
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 180 },
        { field: 'title', headerName: 'List', width: 180 },
        { field: 'genre', headerName: 'Genre', width: 180 },
        { field: 'type', headerName: 'Type', width: 180 },
        {
            field: 'action', headerName: 'Action', width: 180,
            renderCell: (params) => {
                return (
                    <DeleteOutline className='deleteList' onClick={() => handleDelete(params.row._id)} />
                );
            }



        }
    ];
    return (
        <div className='lists'>
            <DataGrid
                rows={lists}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={r => r._id}
                disableSelectionOnClick
            >

            </DataGrid>
        </div>
    )
}

export default Lists