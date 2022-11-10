import React, { useState, useContext } from 'react';
import Chart from '../../components/chart/Chart';
import './List.scss';
import { Publish } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateList } from '../../context/movieContext/apiCalls';
import { ListContext } from '../../context/listContext/listContext';

const List = () => {
    const location = useLocation();
    const [list, setList] = useState(location.state.list);
    const [newList, setNewList] = useState(list);

    const { dispatch, isFetching, error } = useContext(ListContext);

    const handleChange = (e) => {
        setNewList(prev => { return { ...prev, [e.target.name]: e.target.value } })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!error) {
            setList(prev => { return { ...prev, ...newList } });
        }
    }
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">{list.title}</h1>
                <Link to="/newList">
                    <button className='productCreateButton'>Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoContainer">
                        <div className="productInfoTop">
                            <span className="productInfoTitle">{list.title}</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey productId">Id:</span>
                                <span className="productInfoValue">{list._id}</span>
                            </div>

                            <div className="productInfoItem">
                                <span className="productInfoKey">Is Series</span>
                                <span className="productInfoValue">{list.type === "series" ? 'yes' : 'no'}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey"> Genre</span>
                                <span className="productInfoValue">{list.genre}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">

                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <div className="productFormInputItem">
                            <label>Title</label>
                            <input type="text" name='title' placeholder={list.title} onChange={handleChange} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Genre</label>
                            <input type="text" name='genre' placeholder={list.genre} onChange={handleChange} />
                        </div>
                        <div className="productFormInputItem">
                            <label htmlFor="series">Series?</label>
                            <select id="series" name="isSeries">
                                <option value="true">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <label htmlFor='file'><Publish /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>

                        <button disabled={isFetching} onClick={handleUpdate} className='productButton'>Update</button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default List