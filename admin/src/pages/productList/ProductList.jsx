import './ProductList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect, React } from 'react';
import { MovieContext } from '../../context/movieContext/movieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

const ProductList = () => {
    const { dispatch, movies } = useContext(MovieContext);
    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);
    const handleDelete = (movieId) => {
        deleteMovie(movieId, dispatch);
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'movie',
            headerName: 'movie',
            renderCell: (params) => {
                return (
                    <div className='productCell'>
                        <img className='productCellImg' src={params.row.image} alt="avatar" />
                        {params.row.title}
                    </div>
                );
            },
            width: 200,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
        },
        {
            field: 'year',
            headerName: 'Year',
            type: 'number',
            width: 120,
        },
        {
            field: 'limit',
            headerName: 'Age Limit',
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
                        <Link to={`/movies/${params.row._id}`} state={{ movie: params.row }}>
                            <button className='productCellEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productCellDelete' onClick={() => handleDelete(params.row._id)} />

                    </>
                );
            }
        }
    ];
    return (

        <div className='productList'>
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={r => r._id}
                disableSelectionOnClick
            />

        </div>
    )
}

export default ProductList