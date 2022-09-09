import './ProductList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { ProductRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState, React } from 'react';

const ProductList = () => {
    const [data, setData] = useState(ProductRows);
    const handleDelete = (productId) => {
        setData(data.filter(product => {
            return product.id !== productId;
        }));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            renderCell: (params) => {
                return (
                    <div className='productCell'>
                        <img className='productCellImg' src={params.row.link} alt="avatar" />
                        {params.row.name}
                    </div>
                );
            },
            width: 200,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
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
                        <Link to={`/products/${params.row.id}`}>
                            <button className='productCellEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productCellDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        }
    ];
    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList